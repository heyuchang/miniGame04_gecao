import { find, Node, Prefab, UITransform, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../utils/cocosUtil';
import { utilTools } from '../../../utils/utilTools';
import { constants } from '../../data/constants';
import { designManager } from '../../manager/designManager';
import { resManager } from '../../manager/resManager';
import { mapModel } from '../../model/mapModel';
import { physicsGroup } from '../../other/physicsGroup';
import { BaseLayer } from '../base/BaseLayer';
import { NodePoolUtil } from '../base/NodePoolUtil';
import { Bullet } from '../item/bullet/Bullet';
const { ccclass, property } = _decorator;

@ccclass('BulletSystem')
export class BulletSystem extends BaseLayer {

    // 按照子弹id进行UI分层
    idBulletLayerObj: any = {};

    bulletLayer: Node;
    bulletLayer2: Node;

    waitAddArr: any = [];

    onLoad() {
        super.onLoad();

        this.bulletLayer = this.node;
        this.bulletLayer2 = find("bulletLayer2", this.node.parent);
    }

    onEnable() {
        super.onEnable();
    }

    onDestroy() {
        super.onDestroy();
    }

    getBulletLayerNameById(id: number) {
        return "bulletLayer" + id;
    }

    getBulletLayerById(id: number) {
        let row = designManager.getRowById(constants.tableName.bullet, id);
        let bulletLayer = this.idBulletLayerObj[id];
        if (!bulletLayer) {
            bulletLayer = new Node(this.getBulletLayerNameById(id));
            bulletLayer.addComponent(UITransform);
            bulletLayer.setPosition(0, 0);

            switch (row.prefab) {
                case "bullet1042": // 油桶燃烧-普通
                case "bullet1044": // 油桶燃烧-高级
                case "bullet1071": // 力场
                case "bullet10200": // 泥浆
                    bulletLayer.parent = this.bulletLayer2;
                    break;
                default:
                    bulletLayer.parent = this.bulletLayer;
                    break;
            }

            this.idBulletLayerObj[id] = bulletLayer;

            let nodePoolUtil = bulletLayer.addComponent(NodePoolUtil);
            nodePoolUtil.init(mapModel.bulletPrefabObj[row.prefab]);
        }
        return bulletLayer;
    }

    loadBulletPrefab(path: string) {
        return new Promise((resolve, reject) => {
            resManager.loadAsset(constants.bundles.bullet, path, Prefab, null, (err, prefab) => {
                if (err) {
                    reject();
                    return;
                }
                resolve(prefab);
            });
        });
    }

    async addBullet(id: number, group: number, startWorldPos?: Vec3, direction?: Vec3, extraObj?: any) {
        let nodePoolUtil = this.getBulletLayerById(id).getComponent(NodePoolUtil);
        let row = designManager.getRowById(constants.tableName.bullet, id);
        let tmpFunc = () => {
            if (!cocosUtil.isValid(nodePoolUtil)) {
                return;
            }
            if (!nodePoolUtil.itemNode) {
                nodePoolUtil.init(mapModel.bulletPrefabObj[row.prefab]);
            }
            if (!nodePoolUtil.node.activeInHierarchy) {
                let bullet: any = {};
                bullet.id = id;
                bullet.group = group;
                bullet.startWorldPos = startWorldPos;
                bullet.direction = direction;
                bullet.extraObj = extraObj;
                this.waitAddArr.push(bullet);
                return;
            }
            let bulletNode = nodePoolUtil.getNode();
            let bullet: Bullet = cocosUtil.addComponentOnce(bulletNode, Bullet);
            bullet.init(id, group, startWorldPos, direction, extraObj);

        };

        if (!mapModel.bulletPrefabObj[row.prefab]) {
            let prefab: any = await this.loadBulletPrefab(row.prefab);
            mapModel.bulletPrefabObj[row.prefab] = prefab;
        }
        tmpFunc();
    }

    // 遍历屏幕范围内的怪物子弹
    forVisibleMonsterBullet(cb: (bullet: Bullet) => void) {
        utilTools.forArr(this.node.children, (bulletLayer: Node) => {
            utilTools.forArr(bulletLayer.children, (bulletNode: Node) => {
                if (!bulletNode.active) {
                    return;
                }
                if (!mapModel.isInScreenVisible(bulletNode)) {
                    return;
                }
                let bullet = bulletNode.getComponent(Bullet);
                if (bullet.collider && bullet.collider.group == physicsGroup.MONSTER_BULLET) {
                    cb(bullet);
                }
            });
        });
    }

    recycleAllBulletNodeById(id: number) {
        let name = this.getBulletLayerNameById(id);
        let bulletLayer = find(name, this.bulletLayer);
        if (bulletLayer) {
            utilTools.forArr(bulletLayer.children, (node: Node) => {
                node.getComponent(Bullet).recycleSelf();
            });
        }
        bulletLayer = find(name, this.bulletLayer2);
        if (bulletLayer) {
            utilTools.forArr(bulletLayer.children, (node: Node) => {
                node.getComponent(Bullet).recycleSelf();
            });
        }
    }

    recycleBulletNode(bulletNode: Node) {
        let bullet = bulletNode.getComponent(Bullet);
        let nodePoolUtil = this.getBulletLayerById(bullet.id).getComponent(NodePoolUtil);
        nodePoolUtil.recycleNode(bulletNode);
    }

    updateLogic(dt: number) {
        let bullet = this.waitAddArr.shift();
        if (bullet) {
            this.addBullet(bullet.id, bullet.group, bullet.startWorldPos, bullet.direction, bullet.extraObj);
        }
    }

}

