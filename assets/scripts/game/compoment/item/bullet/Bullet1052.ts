import { Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { AnimationCtrl } from '../../base/AnimationCtrl';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 技能-导弹-爆炸
@ccclass('bullet1052')
export class bullet1052 extends Component {

    bullet: Bullet;
    contactNotHide: boolean = true;

    // 保证只算一次伤害
    contactBulletTime: number = 6;

    animationCtrl: AnimationCtrl;

    init(bullet: Bullet) {
        this.bullet = bullet;

        this.node.angle = 0;
        this.animationCtrl = cocosUtil.addComponentOnce(this, AnimationCtrl);

        let atk = this.bullet.atk * (1 + mapModel.skillSystem.getSkill2AtkAddPercent());
        this.bullet.atk = Math.floor(atk);

        this.animationCtrl.playAnimationOnce("ani", () => {
            this.bullet.recycleSelf();
        });

    }


}

