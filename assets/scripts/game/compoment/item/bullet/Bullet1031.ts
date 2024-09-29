import { Component, tween, UITransform, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { HintNames } from '../hint/Hint';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 技能-飞镖
@ccclass('bullet1031')
export class bullet1031 extends Component {

    bullet: Bullet;
    contactNotHide: boolean = true;

    moveSpeed: number;
    yinTimeCount: number;

    init(bullet: Bullet) {
        this.bullet = bullet;
        this.moveSpeed = 1200;
        this.yinTimeCount = 0;

        tween(this.node).by(0.2, { angle: -360 }).repeatForever().start();

    }

    update(dt: number) {
        let pos = this.node.getPosition();
        this.moveSpeed -= 30;
        let moveDis = this.moveSpeed * dt;
        let direction = this.bullet.direction.clone().multiplyScalar(moveDis);
        pos.add(direction);
        this.node.setPosition(pos);

        this.yinTimeCount += dt;
        if (this.yinTimeCount > 0.2) {
            this.yinTimeCount = 0;
            let tf = this.bullet.bodyNode.getComponent(UITransform);
            let extraObj = {
                width: tf.width,
                height: tf.height,
            };
            mapModel.hintSystem.addHint(HintNames.feiBiao, cocosUtil.convertToWorldSpace(this.node), this.node.angle, extraObj);
        }
    }

    recycleSelfEnd() {
        // 通知上级数量减少了
        if (cocosUtil.isValid(this.bullet.extraObj)) {
            this.bullet.extraObj.subNum();
        }
    }

}

