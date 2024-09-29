import { Node, Prefab, UITransform, Vec2, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../utils/cocosUtil';
import { utilTools } from '../../../utils/utilTools';
import { constants } from '../../data/constants';
import { designManager } from '../../manager/designManager';
import { resManager } from '../../manager/resManager';
import { mapModel } from '../../model/mapModel';
import { UserData } from '../../model/UserData';
import { BaseLayer } from '../base/BaseLayer';
import { NodePoolUtil } from '../base/NodePoolUtil';
import { Prop } from '../item/prop/Prop';
const { ccclass, property } = _decorator;

@ccclass('PropSystem')
export class PropSystem extends BaseLayer {

    // 按照道具id进行UI分层
    idPropLayerObj: any = {};
    idPrefabObj: any = {};

    onLoad() {
        super.onLoad();

    }

    onEnable() {
        super.onEnable();
    }

    onDestroy() {
        super.onDestroy();
    }

    getPropLayerNameById(id: number) {
        return "propLayer" + id;
    }

    getPropLayerById(id: number) {
        let propLayer = this.idPropLayerObj[id];
        if (!propLayer) {
            propLayer = new Node(this.getPropLayerNameById(id));
            propLayer.addComponent(UITransform);
            propLayer.setPosition(0, 0);
            propLayer.parent = this.node;
            this.idPropLayerObj[id] = propLayer;

            let nodePoolUtil = propLayer.addComponent(NodePoolUtil);
            nodePoolUtil.init(this.idPrefabObj[id]);
        }
        return propLayer;
    }

    saveDataBefore() {
        utilTools.forArr(this.node.children, (propLayer: Node) => {
            let nodePoolUtil = propLayer.getComponent(NodePoolUtil);
            nodePoolUtil.forEachUseNode((node: Node) => {
                let prop = node.getComponent(Prop);
                if (prop.id == constants.propIds.boxMonsterCoin) {
                    prop.playerGetProp();
                    return;
                }
            });
        });
    }

    getSaveData() {
        let propData: any = {};
        propData.arr = [];
        utilTools.forArr(this.node.children, (propLayer: Node) => {
            let nodePoolUtil = propLayer.getComponent(NodePoolUtil);
            nodePoolUtil.forEachUseNode((node: Node) => {
                let prop = node.getComponent(Prop);
                if (prop.id == constants.propIds.boxMonsterCoin) {
                    prop.playerGetProp();
                    return;
                }
                let info: any = {};
                info.id = prop.id;
                info.worldPos = cocosUtil.convertToWorldSpace(node);
                info.extraObj = prop.extraObj;
                propData.arr.push(info);
            });
        });
        return propData;
    }

    loadSaveData(data: any) {
        utilTools.forArr(data.arr, (prop: any) => {
            this.addProp(prop.id, prop.worldPos, prop.extraObj);
        });
    }

    addProp(id: number, worldPos: Vec3, extraObj?: any) {
        let nodePoolUtil = this.getPropLayerById(id).getComponent(NodePoolUtil);

        let tmpFunc = () => {
            let propNode = nodePoolUtil.getNode();
            let prop = cocosUtil.addComponentOnce(propNode, Prop);
            prop.init(id, worldPos, extraObj);
        };

        if (!this.idPrefabObj[id]) {
            let name = "prop" + id;
            resManager.loadAsset(constants.bundles.prefab, "prop/" + name + "/" + name, Prefab, null, (err, prefab) => {
                if (!cocosUtil.isValid(this)) {
                    return;
                }
                this.idPrefabObj[id] = prefab;
                nodePoolUtil.init(prefab);
                tmpFunc();
            });
            return;
        }
        tmpFunc();
    }

    // 玩家获得道具
    getProp(id: number, num: number = 1, extraObj?: any) {
        if (mapModel.player.hp <= 0) {
            return;
        }
        let row = designManager.getRowById(constants.tableName.prop, id);
        switch (id) {
            case constants.propIds.exp:
                mapModel.mapSystem.addExp(num + mapModel.skillSystem.getSkill2AddExp());
                break;
            case constants.propIds.coin:
                mapModel.mapSystem.addCoin(num + mapModel.skillSystem.getSkill2AddCoin());
                break;
            case constants.propIds.magnet:
                // 磁铁-只吸经验
                mapModel.propSystem.forAllPropById(constants.propIds.exp, (prop: Prop) => {
                    prop.contactPlayer();
                });
                break;
            case constants.propIds.addHpPercent:
                // 回血
                mapModel.player.addHpPercent(row.p1);
                break;
            case constants.propIds.bomb:
                // 炸弹
                mapModel.mapSystem.bomb();
                break;
            case constants.propIds.box2:
                // 水果机
                if (mapModel.player.hp > 0) {
                    mapModel.mapLayer.popLayer(constants.layers.LuckyDrawLayer);
                }
                break;
            case constants.propIds.boxMonsterCoin:
                // 宝箱怪金币
                mapModel.mapSystem.addCoin(1);
                break;
            case constants.propIds.diamond:
                // 钻石，直接塞给玩家
                UserData.getInstance().useBaoShi(num, true);
                break;
            default:
                break;
        }

        if (row.type == 8 || row.type == 11) {
            // 装备
            mapModel.equipIdArr.push(id);
        }
    }

    // 遍历所有存在的指定道具id
    forAllPropById(propId: number, cb: (prop: Prop) => void) {
        let layer = this.getPropLayerById(propId);
        let nodePoolUtil = layer.getComponent(NodePoolUtil);
        nodePoolUtil.forEachUseNode((node: Node) => {
            let prop = node.getComponent(Prop);
            if (prop.isFollowPlayer) {
                return;
            }
            cb(prop);
        });
    }

    // 遍历屏幕范围内的碰撞道具
    forVisiblePropCollider(cb: (prop: Prop) => void) {
        utilTools.forArr(this.node.children, (propLayer: Node) => {
            utilTools.forArr(propLayer.children, (propNode: Node) => {
                if (!propNode.active) {
                    return;
                }
                if (!mapModel.isInScreenVisible(propNode)) {
                    return;
                }
                let prop = propNode.getComponent(Prop);
                if (!prop.collider) {
                    return;
                }
                cb(prop);
            });
        });
    }

    // 遍历屏幕范围内的所有可直接吃的道具
    forVisiblePropContact(cb: (prop: Prop) => void) {
        utilTools.forArr(this.node.children, (propLayer: Node) => {
            utilTools.forArr(propLayer.children, (propNode: Node) => {
                if (!propNode.active) {
                    return;
                }
                if (!mapModel.isInScreenVisible(propNode)) {
                    return;
                }
                let prop = propNode.getComponent(Prop);
                if (prop.collider) {
                    return;
                }
                cb(prop);
            });
        });
    }

    // 遍历所有可直接吃的道具
    forAllPropContact(cb: (prop: Prop) => void) {
        utilTools.forArr(this.node.children, (propLayer: Node) => {
            utilTools.forArr(propLayer.children, (propNode: Node) => {
                // @ts-ignore
                if (!propNode.use) {
                    return;
                }
                let prop = propNode.getComponent(Prop);
                if (prop.collider) {
                    return;
                }
                cb(prop);
            });
        });
    }

    recyclePropNode(propNode: Node) {
        let prop = propNode.getComponent(Prop);
        let nodePoolUtil = this.getPropLayerById(prop.id).getComponent(NodePoolUtil);
        nodePoolUtil.recycleNode(propNode);
    }

    updateLogic(dt: number) {
        // 显示优化
        for (let i in this.idPropLayerObj) {
            let nodePoolUtil: NodePoolUtil = this.getPropLayerById(parseFloat(i)).getComponent(NodePoolUtil);
            nodePoolUtil.forEachUseNode((node: Node) => {
                let dis = Vec2.distance(node.getPosition(), mapModel.player.node.getPosition());
                let prop = node.getComponent(Prop);
                if (dis <= mapModel.dataRadius || (prop.propUtil && prop.propUtil.autoGet)) {
                    node.active = true;
                    prop.doDisPlayerGet(dis);
                    return;
                }
                if (prop.isFollowPlayer) {
                    return;
                }
                node.active = false;
            });
        }
    }

}

