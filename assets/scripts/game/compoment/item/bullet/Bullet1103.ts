import { Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { AnimationCtrl } from '../../base/AnimationCtrl';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 技能-轰炸机-子弹爆炸
@ccclass('bullet1103')
export class bullet1103 extends Component {

    bullet: Bullet;
    contactNotHide: boolean = true;

    // 保证只算一次伤害
    contactBulletTime: number = 6;

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

