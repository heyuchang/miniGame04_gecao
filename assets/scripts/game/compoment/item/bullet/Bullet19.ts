import { Component, v3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { AnimationCtrl } from '../../base/AnimationCtrl';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 武器-锤子-高级
@ccclass('bullet19')
export class bullet19 extends Component {

    bullet: Bullet;
    moveStop: boolean;
    contactNotHide: boolean = true;

    aniCtrl: AnimationCtrl;

    init(bullet: Bullet) {
        this.bullet = bullet;
        this.moveStop = true;
        this.bullet.node.angle = 0;
        this.bullet.collider.enabled = false;

        let scale = 1;
        if (this.bullet.extraObj && this.bullet.extraObj.scale > 0) {
            scale = this.bullet.extraObj.scale;
        }
        this.node.setScale(v3(scale, scale, 1));

        this.scheduleOnce(() => {
            this.bullet.collider.enabled = true;
        }, 0.1);

        this.aniCtrl = cocosUtil.addComponentOnce(this, AnimationCtrl);
        this.aniCtrl.playAnimation("4", false, () => {
            this.bullet.recycleSelf();
        });

    }


}

