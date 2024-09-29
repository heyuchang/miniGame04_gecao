import { Component, macro, tween, UIOpacity, v3, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 狙击手-大子弹
@ccclass('bullet5')
export class bullet5 extends Component {

    bullet: Bullet;
    contactNotHide: boolean = true;
    moveStop: boolean = false;

    direction1: Vec3;
    direction2: Vec3;

    bulletId = 1005;
    // 小子弹产生的角度转速
    turnSpeed: number = Math.PI / 3;

    init(bullet: Bullet) {
        this.bullet = bullet;

        this.bullet.node.setScale(v3(1, 1, 1));
        let uiOpacity = this.bullet.getComponent(UIOpacity);
        if (uiOpacity) {
            uiOpacity.opacity = 255;
        }
        this.moveStop = true;

        let dx = 200;
        if (this.bullet.direction.x < 0) {
            dx = -dx;
        }
        tween(this.bullet.node).by(0.3, { position: v3(dx, 0, 0) }, { easing: "quadOut" }).call(() => {
            this.moveStop = false;
            this.bullet.direction = mapModel.player.node.getPosition().subtract(this.bullet.node.getPosition()).normalize();
            cocosUtil.tweenBlink(this.bullet.node, 0.5);
            // 开始不断产生小子弹
            this.direction1 = v3(0, 1, 0);
            this.direction2 = v3(0, -1, 0);
            this.schedule(this.createSmallBullet, 0.2, macro.REPEAT_FOREVER);
        }).start();

        this.scheduleOnce(() => {
            this.unschedule(this.createSmallBullet);
            cocosUtil.tweenScaleOut(this.bullet.node, 0.2, () => {
                this.bullet.recycleSelf();
            });
        }, 6);

    }

    createSmallBullet(dt: number) {
        let radian = dt * this.turnSpeed;
        let startPos = cocosUtil.convertToWorldSpace(this.bullet.node);
        Vec3.rotateZ(this.direction1, this.direction1, Vec3.ZERO, radian);
        mapModel.bulletSystem.addBullet(this.bulletId, physicsGroup.MONSTER_BULLET, startPos, this.direction1);

        Vec3.rotateZ(this.direction2, this.direction2, Vec3.ZERO, radian);
        mapModel.bulletSystem.addBullet(this.bulletId, physicsGroup.MONSTER_BULLET, startPos, this.direction2);
    }


}

