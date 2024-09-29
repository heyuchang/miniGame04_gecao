import { Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { AnimationCtrl } from '../../base/AnimationCtrl';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 粘稠怪-光波
@ccclass('bullet10180')
export class bullet10180 extends Component {

    bullet: Bullet;
    contactNotHide: boolean = true;

    animationCtrl: AnimationCtrl;

    init(bullet: Bullet) {
        this.bullet = bullet;

        this.animationCtrl = cocosUtil.addComponentOnce(this, AnimationCtrl);

        this.animationCtrl.playAnimationOnce("ani", () => {
            this.bullet.recycleSelf();
        });

    }


}

