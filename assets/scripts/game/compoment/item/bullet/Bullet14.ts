import { Component, tween, Tween, UIOpacity, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { AnimationCtrl } from '../../base/AnimationCtrl';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 蝎子-电极扳手
@ccclass('bullet14')
export class bullet14 extends Component {

    bullet: Bullet;
    moveStop: boolean;
    contactNotHide: boolean = true;

    aniCtrl: AnimationCtrl;

    init(bullet: Bullet) {
        this.bullet = bullet;
        this.moveStop = true;
        this.bullet.node.angle = 0;

        let uiOpacity = this.bullet.getComponent(UIOpacity);
        if (uiOpacity) {
            uiOpacity.opacity = 255;
        }

        if (!this.aniCtrl) {
            this.aniCtrl = this.bullet.addComponent(AnimationCtrl);
        }
        this.aniCtrl.playAnimation("bashou", true, () => {
            this.startColliderAni();
        });
        this.startColliderAni();

        this.scheduleOnce(() => {
            cocosUtil.tweenFadeOut(this.bullet.node, 1, () => {
                this.bullet.recycleSelf();
            });
        }, 2.6);

    }

    startColliderAni() {
        Tween.stopAllByTarget(this.bullet.collider.size);
        Tween.stopAllByTarget(this.bullet.collider.offset);
        this.bullet.collider.size.width = 80;
        this.bullet.collider.size.height = 80;
        this.bullet.collider.offset.y = 0;
        tween(this.bullet.collider.size).delay(0.55).to(0.05, { width: 500, height: 180 }).delay(0.3).to(0.05, { width: 80, height: 80 }).start();
        tween(this.bullet.collider.offset).delay(0.55).to(0.05, { y: -30 }).delay(0.3).to(0.05, { y: 0 }).start();
    }

}

