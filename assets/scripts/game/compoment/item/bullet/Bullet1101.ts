import { Component, macro, tween, Tween, v3, Vec2, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { utilTools } from '../../../../utils/utilTools';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 技能-轰炸机
@ccclass('bullet1101')
export class bullet1101 extends Component {

    bullet: Bullet;
    hasTweenPlay: boolean = false;

    // 不可以自动销毁
    outScreenNotRecycle: boolean = true;

    // 轰炸机等级
    lv: number;
    targetDis: number = 260;

    // 转速
    radianSpeed: number;
    radian: number;

    shotTimeCount: number;

    init(bullet: Bullet) {
        this.bullet = bullet;

        this.node.angle = 0;
        this.radianSpeed = 0;

        this.setUpDownTween(true);

        let playerPos = mapModel.player.node.getPosition();
        playerPos.x += 80;
        playerPos.y += 80;
        this.node.setPosition(playerPos);

        this.lv = this.bullet.extraObj.lv;
        this.bullet.extraObj.endCb(this);
    }

    setUpDownTween(isOpen: boolean) {
        if (isOpen) {
            if (!this.hasTweenPlay) {
                this.hasTweenPlay = true;
                tween(this.node).by(1, { position: v3(0, 20, 0) }).by(1, { position: v3(0, -20, 0) }).union().repeatForever().start();
            }
            return;
        }

        if (this.hasTweenPlay) {
            this.hasTweenPlay = false;
            Tween.stopAllByTarget(this.node);
        }
    }

    startShot(duration: number) {
        this.radianSpeed = Math.PI * 2 / duration;
        // 随机一个开始角度
        this.radian = Math.random() * Math.PI * 2;
        // 每隔一定时间发射一枚子弹
        this.schedule(this.shot, 0.1 - this.lv * 0.01, macro.REPEAT_FOREVER);
        // duration后，停止轰炸
        this.scheduleOnce(() => {
            this.radianSpeed = 0;
            this.unschedule(this.shot);
        }, duration);
    }

    shot() {
        let pos = v3(this.targetDis + (Math.random() - 0.5) * 50, 0, 0);
        Vec3.rotateZ(pos, pos, Vec3.ZERO, this.radian + (Math.random() - 0.5) * utilTools.angleToRadian(20));
        let targetPos = mapModel.player.node.getPosition().add(pos);

        // 发射角度
        let direction = targetPos.clone().subtract(this.node.getPosition());
        let radian = (Math.random() - 0.5) * utilTools.angleToRadian(180);
        Vec3.rotateZ(direction, direction, Vec3.ZERO, radian);
        mapModel.bulletSystem.addBullet(this.bullet.id + 1, physicsGroup.PLAYER_BULLET, cocosUtil.convertToWorldSpace(this.node), direction, targetPos);
    }

    update(dt: number) {
        let pos = this.node.getPosition();
        let playerPos = mapModel.player.node.getPosition();
        if (pos.x > playerPos.x) {
            this.node.scale = v3(-1, 1, 1);
        } else {
            this.node.scale = v3(1, 1, 1);
        }

        // 目标位置
        playerPos.x += 80;
        playerPos.y += 80;

        let speed = 0;
        let dis = Vec2.distance(pos, playerPos);
        if (dis > 5) {
            speed = dis * 2;
            let maxSpeed = mapModel.player.getMoveSpeed() * 1.5;
            if (speed > maxSpeed) {
                speed = maxSpeed;
            }
        }
        if (this.hasTweenPlay && dis <= 30) {
            speed = 0;
        }
        if (speed > 0) {
            this.setUpDownTween(false);
            let direction = playerPos.subtract(pos).normalize();
            direction.multiplyScalar(dt * speed);
            pos.add(direction);
            this.node.setPosition(pos);
        } else {
            this.setUpDownTween(true);
        }

        if (this.radianSpeed > 0) {
            this.radian -= this.radianSpeed * dt;
        }
    }

}

