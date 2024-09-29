import { Color, Component, tween, v3, _decorator } from 'cc';
import { mapModel } from '../../../model/mapModel';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 技能-油桶-火焰
@ccclass('bullet1042')
export class bullet1042 extends Component {

    bullet: Bullet;
    contactNotHide: boolean = true;
    contactBulletTime: number = 0.5;

    shineColor: Color = "#FF1313".parseColor();


    init(bullet: Bullet) {
        this.bullet = bullet;

        this.node.angle = 0;
        this.node.setScale(v3(0.3, 0.3, 1));
        let scale = this.getScale();
        tween(this.node).to(0.06, { scale: v3(scale, scale, 1) }).start();

        this.scheduleOnce(() => {
            tween(this.node).to(0.15, { scale: v3(0, 0, 1) }).call(() => {
                this.bullet.recycleSelf();
            }).start();
        }, this.bullet.extraObj);

    }

    getScale() {
        let scale = 1 + mapModel.skillSystem.getSkill2RangeAddScale();
        return scale;
    }

}

