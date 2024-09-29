import { Component, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 技能-钻头
@ccclass('bullet1091')
export class bullet1091 extends Component {

    bullet: Bullet;
    contactNotHide: boolean = true;

    // 不可以自动销毁
    outScreenNotRecycle: boolean = true;

    isOutScreenReflex: boolean;


    init(bullet: Bullet) {
        this.bullet = bullet;
        this.isOutScreenReflex = false;

        this.bullet.speed = this.bullet.speed * (1 + mapModel.skillSystem.getSkill2BulletSpeedAddPercent());
        let atk = this.bullet.atk * (1 + mapModel.skillSystem.getSkill2AtkAddPercent());
        this.bullet.atk = Math.floor(atk);

        this.scheduleOnce(() => {
            this.bullet.recycleSelf();
        }, this.bullet.extraObj.time);

    }

    mirrorReflex(isX: boolean, force: boolean = false) {
        if (this.isOutScreenReflex && !force) {
            return;
        }
        this.isOutScreenReflex = true;
        // 碰到边缘，做镜面反射
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
        let playerPos = mapModel.player.node.getPosition();
        let pos = this.node.getPosition();
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

