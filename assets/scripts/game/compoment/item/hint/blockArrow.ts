import { Component, tween, Tween, UITransform, v3, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { Monster } from '../monsters/Monster';
import { Hint } from './Hint';
const { ccclass, property } = _decorator;

@ccclass('blockArrow')
export class blockArrow extends Component {

    hint: Hint;
    monster: Monster;

    outVec1: Vec3 = v3(0, 0, 0);

    init(hint: Hint) {
        this.hint = hint;

        this.monster = this.hint.extraObj.monster;
        let duration = this.hint.extraObj.duration;
        let dis = this.hint.extraObj.dis;

        let tf = this.hint.bodyNode.getComponent(UITransform);
        tf.width = 120;

        Tween.stopAllByTarget(tf);
        tween(tf).to(duration, { width: dis }).call(() => {
            this.hint.recycleSelf();
        }).start();

    }

    update(dt: number) {
        // 角度
        mapModel.player.node.getPosition(this.outVec1).subtract(this.monster.node.position);
        this.node.angle = cocosUtil.vec2XAngle(this.outVec1);

        // 位置
        this.node.position = this.monster.node.position;
    }

}

