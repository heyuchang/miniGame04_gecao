import { Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { AnimationCtrl } from '../../base/AnimationCtrl';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 技能-闪电
@ccclass('bullet1081')
export class bullet1081 extends Component {

    bullet: Bullet;
    contactNotHide: boolean = true;

    animationCtrl: AnimationCtrl;

    init(bullet: Bullet) {
        this.bullet = bullet;

        this.node.angle = 0;
        this.animationCtrl = cocosUtil.addComponentOnce(this, AnimationCtrl);

        this.animationCtrl.playAnimationOnce("ani", () => {
            this.bullet.recycleSelf();
        });

    }

}

