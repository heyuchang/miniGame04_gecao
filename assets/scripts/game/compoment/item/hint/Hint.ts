import { Component, find, Node, Tween, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { AnimationCtrl } from '../../base/AnimationCtrl';
const { ccclass, property } = _decorator;

export const HintNames = {
    targetPos: "targetPos",
    targetPos2: "targetPos2",
    targetPos3: "targetPos3",
    hit1: "hit1",
    hit2: "hit2",
    hit3: "hit3",
    hit4: "hit4",
    hit5: "hit5",
    hit6: "hit6",
    hit7: "hit7",
    boom1: "boom1",
    feiBiao: "feiBiao",
    blockArrow: "blockArrow",
    comeShine: "comeShine",
};

@ccclass('Hint')
export class Hint extends Component {

    bodyNode: Node;

    hintUtil: any;
    extraObj: any;

    init(name: string, worldPos: Vec3, angle: number = 0, extraObj?: any) {
        this.bodyNode = find("body", this.node);
        this.extraObj = extraObj;
        this.unscheduleAllCallbacks();
        Tween.stopAllByTarget(this.node);

        let pos = cocosUtil.convertToNodeSpace(this.node, worldPos);
        this.node.setPosition(pos);
        this.node.angle = angle;

        let aniCtrl: AnimationCtrl = cocosUtil.addComponentOnce(find("body", this.node), AnimationCtrl);
        aniCtrl.playAnimation("ani", false, () => {
            mapModel.hintSystem.recycleHintNode(this.node);
        });

        try {
            this.hintUtil = cocosUtil.addComponentOnce(this, name);
            this.hintUtil.unscheduleAllCallbacks();
            this.hintUtil.init(this);
        } catch (e) {

        }
    }

    recycleSelf() {
        mapModel.hintSystem.recycleHintNode(this.node);
    }

}

