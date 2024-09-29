import { Component, _decorator } from 'cc';
import { mapModel } from '../../../model/mapModel';
import { AnimationCtrl } from '../../base/AnimationCtrl';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 如来神掌
@ccclass('bullet17')
export class bullet17 extends Component {

    bullet: Bullet;
    moveStop: boolean = true;
    contactNotHide: boolean = true;

    init(bullet: Bullet) {
        this.bullet = bullet;

        this.bullet.collider.enabled = false;
        this.scheduleOnce(() => {
            this.bullet.collider.enabled = true;
        }, 0.2);
        this.bullet.node.angle = this.bullet.extraObj;
        let aniCtrl = this.addComponent(AnimationCtrl);
        aniCtrl.playAnimation("2", false, () => {
            mapModel.bulletSystem.recycleBulletNode(this.node);
        });

    }

}

