import { Color, Component, UIOpacity, v3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { AnimationCtrl } from '../../base/AnimationCtrl';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 粘稠怪-泥浆
@ccclass('bullet10200')
export class bullet10200 extends Component {

    bullet: Bullet;
    contactNotHide: boolean = true;

    contactBulletTime: number = 1;

    animationCtrl: AnimationCtrl;

    shineColor: Color = "#2AA32A".parseColor();

    init(bullet: Bullet) {
        this.bullet = bullet;

        this.animationCtrl = cocosUtil.addComponentOnce(this, AnimationCtrl);
        this.node.angle = 0;

        this.animationCtrl.playAnimation("ani", true);
        this.getComponent(UIOpacity).opacity = 255;
        this.node.scale = v3(1, 1, 1);
        let scale = this.bullet.extraObj;
        if (scale > 0) {
            this.node.scale = v3(scale, scale, 1);
        }

        this.scheduleOnce(() => {
            cocosUtil.tweenFadeOut(this.node, 1, () => {
                this.bullet.recycleSelf();
            });
        }, 2);

    }


}

