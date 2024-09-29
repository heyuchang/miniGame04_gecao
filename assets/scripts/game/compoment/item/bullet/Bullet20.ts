import { Component, find, UITransform, _decorator } from 'cc';
import { AnimationCtrl } from '../../base/AnimationCtrl';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 武器-激光枪-普通
@ccclass('bullet20')
export class bullet20 extends Component {

    bullet: Bullet;
    moveStop: boolean = true;
    contactNotHide: boolean = true;
    contactBulletTime: number = 1;

    bodyNodeTf: UITransform;
    aniCtrl: AnimationCtrl;

    init(bullet: Bullet) {
        this.bullet = bullet;
        this.bodyNodeTf = find("body", this.node).getComponent(UITransform);

        this.bullet.extraObj.invokeClass(bullet);
    }

    setBodyWidth(width: number) {
        this.bodyNodeTf.width = width;
        this.bullet.collider.size.width = width - 15;
        this.bullet.collider.offset.x = (width - 15) * 0.5 - 13;
    }

}

