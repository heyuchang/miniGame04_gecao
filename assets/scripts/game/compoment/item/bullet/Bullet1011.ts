import { Component, tween, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { utilTools } from '../../../../utils/utilTools';
import { mapModel } from '../../../model/mapModel';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 技能-锤子
@ccclass('bullet1011')
export class bullet1011 extends Component {

    bullet: Bullet;
    contactNotHide: boolean = true;

    // 重力加速度
    g: number = -800;
    // 初速度
    v: number = 800;

    vx: number = 0;
    vy: number = 0;

    init(bullet: Bullet) {
        this.bullet = bullet;

        tween(this.node).by(1, { angle: 360 }).repeatForever().start();

        // 抛射角度
        let floatRadian = Math.PI / 15;
        let radian = utilTools.getFloatValue(Math.PI / 2 - floatRadian, Math.PI / 2 + floatRadian);

        this.vx = this.v * Math.cos(radian);
        this.vy = this.v * Math.sin(radian);

    }

    update(dt: number) {
        let pos = this.node.getPosition();
        pos.x += this.vx * dt;
        pos.y += this.vy * dt;
        this.vy += this.g * dt;
        this.node.setPosition(pos);
        if (!mapModel.isInScreenVisible(this.node)) {
            this.bullet.recycleSelf();
        }
    }

    recycleSelfEnd() {
        // 通知上级数量减少了
        if (cocosUtil.isValid(this.bullet.extraObj)) {
            this.bullet.extraObj.subNum();
        }
    }

}

