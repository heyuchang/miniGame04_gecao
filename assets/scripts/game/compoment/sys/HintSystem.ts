import { find, Node, Prefab, UITransform, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../utils/cocosUtil';
import { constants } from '../../data/constants';
import { resManager } from '../../manager/resManager';
import { BaseLayer } from '../base/BaseLayer';
import { NodePoolUtil } from '../base/NodePoolUtil';
import { Hint, HintNames } from '../item/hint/Hint';
const { ccclass, property } = _decorator;

@ccclass('HintSystem')
export class HintSystem extends BaseLayer {

    // 按照名称进行UI分层
    nameLayerObj: any = {};
    namePrefabObj: any = {};

    hintLayer: Node;
    hintLayer2: Node;

    onLoad() {
        super.onLoad();

        this.hintLayer = this.node;
        this.hintLayer2 = find("hintLayer2", this.node.parent);
    }

    onEnable() {
        super.onEnable();
    }

    onDestroy() {
        super.onDestroy();
    }

    getHintLayerNameById(name: string) {
        return name + "Layer";
    }

    getHintLayerByName(name: string) {
        let nameLayer = this.nameLayerObj[name];
        if (!nameLayer) {
            nameLayer = new Node(this.getHintLayerNameById(name));
            nameLayer.addComponent(UITransform);
            nameLayer.setPosition(0, 0);
            switch (name) {
                case HintNames.targetPos:
                case HintNames.targetPos2:
                case HintNames.targetPos3:
                case HintNames.feiBiao:
                case HintNames.blockArrow:
                case HintNames.comeShine:
                    nameLayer.parent = this.hintLayer2;
                    break;
                default:
                    nameLayer.parent = this.hintLayer;
                    break;
            }
            this.nameLayerObj[name] = nameLayer;

            let nodePoolUtil = nameLayer.addComponent(NodePoolUtil);
            nodePoolUtil.init(this.namePrefabObj[name]);
        }
        return nameLayer;
    }

    addHint(name: string, worldPos: Vec3, angle: number = 0, extraObj?: any) {
        let nodePoolUtil = this.getHintLayerByName(name).getComponent(NodePoolUtil);

        let tmpFunc = () => {
            if (!nodePoolUtil.node.activeInHierarchy) {
                return;
            }
            let hintNode = nodePoolUtil.getNode();
            let hint = cocosUtil.addComponentOnce(hintNode, Hint);
            hint.init(name, worldPos, angle, extraObj);
        };

        if (!this.namePrefabObj[name]) {
            resManager.loadAsset(constants.bundles.hint, name, Prefab, null, (err, prefab) => {
                if (!cocosUtil.isValid(this)) {
                    return;
                }
                this.namePrefabObj[name] = prefab;
                nodePoolUtil.init(prefab);
                tmpFunc();
            });
            return;
        }
        tmpFunc();

    }

    recycleHintNode(hintNode: Node) {
        let nodePoolUtil = this.getHintLayerByName(hintNode.name).getComponent(NodePoolUtil);
        nodePoolUtil.recycleNode(hintNode);
    }

}

