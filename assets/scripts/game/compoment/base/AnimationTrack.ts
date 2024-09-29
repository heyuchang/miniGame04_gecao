import { Component, tween, v3, Vec2, Vec3, _decorator, Tween } from 'cc';
import { cocosUtil } from '../../../utils/cocosUtil';
import { utilTools } from '../../../utils/utilTools';
import { mapModel } from '../../model/mapModel';
const { ccclass, property } = _decorator;

@ccclass('AnimationTrack')
export class AnimationTrack extends Component {

    duration: number = 0.6;
    time: number = 0;

    // 重力加速度
    g: number = -2000;
    // 初速度
    v: number = 800;
    vx: number = 0;
    vy: number = 0;
    endY: number = 0;

    aniFlag: number = 0;

    targetPos: Vec3;

    endCallback: Function;

    startShowThrow(cb?: Function) {
        this.endCallback = cb;
        this.aniFlag = 1;
        Tween.stopAllByTarget(this.node);

        // 抛出角度
        let radian = utilTools.getFloatValue(utilTools.angleToRadian(75), utilTools.angleToRadian(85));
        if (Math.random() > 0.5) {
            radian = Math.PI - radian;
        }

        this.v = 800 + 200 * Math.random();
        this.vx = this.v * Math.cos(radian);
        this.vy = this.v * Math.sin(radian);

        this.endY = this.node.position.y - 20 - 50 * Math.random();
    }

    startBeiSaiEr() {
        this.aniFlag = 2;

        this.targetPos = cocosUtil.convertToWorldSpace(mapModel.mapLayer.coinIconNode);
    }

    moveTargetUpdate(dt: number) {
        let targetPos = cocosUtil.convertToNodeSpace(this.node, this.targetPos);
        let playerPos = mapModel.player.node.position;
        targetPos.x += playerPos.x;
        targetPos.y += playerPos.y;
        let nodePos = this.node.getPosition();
        if (Vec2.distance(nodePos, targetPos) <= 20) {
            if (this.endCallback) {
                this.endCallback();
            }
            return;
        }
        let direction = targetPos.subtract(nodePos).normalize();
        let dis = dt * 1500;
        direction.multiplyScalar(dis);
        nodePos.add(direction);
        this.node.position = nodePos;
    }

    showThrowUpdate(dt: number) {
        let pos = this.node.getPosition();
        pos.x += this.vx * dt;
        pos.y += this.vy * dt;
        this.vy += this.g * dt;
        this.node.setPosition(pos);
        if (pos.y <= this.endY) {
            this.aniFlag = 0;
            let time = 0.1;
            let dy = 40;
            let dx = 15;
            if (this.vx < 0) {
                dx = -dx;
            }
            tween(this.node).by(time, { position: v3(dx, dy) }, { easing: "quadOut" })
                .by(time, { position: v3(dx, -dy) }, { easing: "quadIn" })
                .delay(0.5 + 0.3 * Math.random()).call(() => {
                    this.startBeiSaiEr();
                }).start();
        }
    }

    update(dt: number) {
        switch (this.aniFlag) {
            case 1:
                this.showThrowUpdate(dt);
                break;
            case 2:
                this.moveTargetUpdate(dt);
                break;
        }
    }

}

