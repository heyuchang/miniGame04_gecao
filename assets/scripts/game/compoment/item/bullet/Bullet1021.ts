import { Component, tween, v3, Vec3, _decorator } from 'cc';
import { mapModel } from '../../../model/mapModel';
import { Bullet } from './Bullet';
import { cocosUtil } from '../../../../utils/cocosUtil';
const { ccclass, property } = _decorator;

// 技能-转盘
@ccclass('bullet1021')
export class bullet1021 extends Component {

    bullet: Bullet;
    contactNotHide: boolean = true;

    outVec3: Vec3 = v3(0, 0, 0);

    direction: Vec3;

    // 转速
    speed: number = -Math.PI * 1.5;

    init(bullet: Bullet) {
        this.bullet = bullet;

        let direction = this.bullet.extraObj.direction;
        this.direction = direction;

        let scale = this.getScale();
        this.node.setScale(v3(scale, scale, 1));
        tween(this.node).by(0.6, { angle: -360 }).repeatForever().start();

        this.show();

        this.bullet.extraObj.endCb(this.bullet);
    }

    getScale() {
        let scale = 1 + mapModel.skillSystem.getSkill2RangeAddScale();
        return scale;
    }

    hide(isAtOnce: boolean = false) {
        if (isAtOnce) {
            this.bullet.recycleSelf();
            return;
        }
        cocosUtil.tweenScaleOut(this.node, 0.5, () => {
            this.bullet.recycleSelf();
        });
    }

    show() {
        let scale = this.getScale();
        this.node.setScale(v3(0, 0, 0));
        this.node.active = true;
        tween(this.node).to(0.5, { scale: v3(scale, scale, 1) }).start();
    }

    update(dt: number) {
        // 围绕玩家进行旋转
        let radian = this.speed * dt;
        Vec3.rotateZ(this.direction, this.direction, Vec3.ZERO, radian);
        let playerPos = mapModel.player.node.position.clone();
        playerPos.add(this.direction);
        this.node.position = playerPos;
    }
}

