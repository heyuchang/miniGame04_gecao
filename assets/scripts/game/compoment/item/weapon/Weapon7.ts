import { Component, UITransform, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { constants } from '../../../data/constants';
import { audioManager } from '../../../manager/audioManager';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Bullet } from '../bullet/Bullet';
import { Weapon } from './Weapon';
const { ccclass, property } = _decorator;

// 激光枪
@ccclass('Weapon7')
export class Weapon7 extends Component {

    weapon: Weapon;
    weaponId = 10160;

    stopTimeCount: boolean;
    // 射程
    atkDis: number = 400;
    // 是否穿透
    isHitPass: boolean = false;

    bullet: Bullet;

    init(weapon: Weapon) {
        this.weapon = weapon;
        this.stopTimeCount = false;

        if (this.weapon.row.lv == constants.design.maxLv) {
            this.isHitPass = true;
            this.atkDis = 1000;
        } else {
            this.isHitPass = false;
            this.atkDis = 400;
        }

    }

    atk() {
        // 攻击距离判断
        if (this.weapon.getDisTargetNode() > this.atkDis) {
            return;
        }

        this.stopTimeCount = true;
        let pos = this.weapon.getInfoPosition(0, true);
        this.bullet = null;

        let extraObj: any = {};
        extraObj.atkPercentAdd = this.weapon.atkPercentAdd;
        extraObj.invokeClass = (bullet: Bullet) => {
            if (!cocosUtil.isValid(this.node)) {
                this.bullet.recycleSelf();
                return;
            }
            audioManager.playEffect(this.weapon.row.audio);
            this.bullet = bullet;
            this.update();
        };
        mapModel.bulletSystem.addBullet(this.weapon.row.bulletId, physicsGroup.PLAYER_BULLET, pos, this.weapon.direction, extraObj);

        this.scheduleOnce(this.atkEnd, this.weapon.row.lv);
    }

    atkEnd() {
        this.unschedule(this.atkEnd);
        this.weapon.timeCount = 0;
        this.stopTimeCount = false;
        if (cocosUtil.isValid(this.bullet)) {
            this.bullet.recycleSelf();
            this.bullet = null;
        }
    }

    forceDestroy() {
        this.atkEnd();
    }

    update() {
        if (!this.bullet) {
            return;
        }
        // 旋转角度
        this.bullet.node.angle = this.node.angle;

        // 位置
        let pos = this.weapon.getInfoPosition(0, true);
        pos = cocosUtil.convertToNodeSpace(this.bullet.node, pos);
        this.bullet.node.setPosition(pos);

        if (!this.weapon.targetNode) {
            return;
        }

        // 长度
        let width = this.weapon.getDisTargetNode();
        if (this.isHitPass) {
            width = this.atkDis;
        }
        this.bullet.bulletUtil.setBodyWidth(width - this.weapon.targetNode.getComponent(UITransform).height * 0.2);

        if (width > this.atkDis) {
            this.atkEnd();
            return;
        }

    }

}

