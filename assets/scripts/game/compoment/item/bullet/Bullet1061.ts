import { Component, tween, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { utilTools } from '../../../../utils/utilTools';
import { mapModel } from '../../../model/mapModel';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 技能-科技球
@ccclass('bullet1061')
export class bullet1061 extends Component {

    bullet: Bullet;
    contactNotHide: boolean = true;

    // 不可以自动销毁
    outScreenNotRecycle: boolean = true;

    isOutScreenReflex: boolean;


    init(bullet: Bullet) {
        this.bullet = bullet;
        this.isOutScreenReflex = false;

        cocosUtil.tweenScaleIn(this.node, 0.5);

        tween(this.node).by(0.6, { angle: 360 }).repeatForever().start();
        this.scheduleOnce(() => {
            cocosUtil.tweenScaleOut(this.node, 0.5, () => {
                this.bullet.recycleSelf();
            });
        }, this.bullet.extraObj.time);

    }

    contactBegin() {
        if (this.isOutScreenReflex) {
            return;
        }
        // 打到怪物，反方向随机角度
        let direction = this.bullet.direction.negative();
        let radian = utilTools.angleToRadian(60);
        radian = utilTools.getFloatValue(-radian, radian);
        Vec3.rotateZ(direction, direction, Vec3.ZERO, radian);
        this.bullet.setDirection(direction);
    }

    mirrorReflex(isX: boolean, force: boolean = false) {
        if (this.isOutScreenReflex && !force) {
            return;
        }
        this.isOutScreenReflex = true;
        // 碰到屏幕边缘，做镜面反射
        if (isX) {
            this.bullet.direction.x *= -1;
            return;
        }
        this.bullet.direction.y *= -1;
    }

    outScreenX(pos: Vec3, playerPos: Vec3) {
        return Math.abs(playerPos.x - pos.x) >= mapModel.visibleHalfSize.width;
    }

    outScreenY(pos: Vec3, playerPos: Vec3) {
        return Math.abs(playerPos.y - pos.y) >= mapModel.visibleHalfSize.height;
    }

    outWallX(pos: Vec3) {
        if (!mapModel.mapSystem.wallLayer.active) {
            return false;
        }
        if (pos.x >= mapModel.mapSystem.wallRightVal || pos.x <= mapModel.mapSystem.wallLeftVal) {
            return true;
        }
        return false;
    }

    outWallY(pos: Vec3) {
        if (!mapModel.mapSystem.wallLayer.active) {
            return false;
        }
        if (pos.y >= mapModel.mapSystem.wallTopVal || pos.y <= mapModel.mapSystem.wallBottomVal) {
            return true;
        }
        return false;
    }

    update(dt: number) {
        let playerPos = mapModel.player.node.position;
        let pos = this.node.position;
        if (this.outScreenX(pos, playerPos)) {
            this.mirrorReflex(true);
            return;
        }
        if (this.outWallX(pos)) {
            this.mirrorReflex(true, true);
            return;
        }
        if (this.outScreenY(pos, playerPos)) {
            this.mirrorReflex(false);
            return;
        }
        if (this.outWallY(pos)) {
            this.mirrorReflex(false, true);
            return;
        }
        this.isOutScreenReflex = false;
    }

    recycleSelfEnd() {
        // 通知上级数量减少了
        if (cocosUtil.isValid(this.bullet.extraObj.invokeClass)) {
            this.bullet.extraObj.invokeClass.subNum();
        }
    }

}

