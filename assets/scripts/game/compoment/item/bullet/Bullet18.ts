import { Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { AnimationCtrl } from '../../base/AnimationCtrl';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 武器-锤子-普通
@ccclass('bullet18')
export class bullet18 extends Component {

    bullet: Bullet;
    moveStop: boolean;
    contactNotHide: boolean = true;

    aniCtrl: AnimationCtrl;

    init(bullet: Bullet) {
        this.bullet = bullet;
        this.moveStop = true;
        this.bullet.node.angle = 0;

        this.aniCtrl = cocosUtil.addComponentOnce(this, AnimationCtrl);

        this.aniCtrl.playAnimation("3", false, () => {
            this.bullet.recycleSelf();
        });

    }


}

