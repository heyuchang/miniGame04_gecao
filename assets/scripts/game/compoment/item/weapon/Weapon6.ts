import { Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { constants } from '../../../data/constants';
import { audioManager } from '../../../manager/audioManager';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { AnimationCtrl } from '../../base/AnimationCtrl';
import { Weapon } from './Weapon';
const { ccclass, property } = _decorator;

// 锤子
@ccclass('Weapon6')
export class Weapon6 extends Component {

    weapon: Weapon;
    weaponId = 10155;

    // 固定位置，不跟随目标瞄准
    isFixedPos: boolean = true;

    aniCtrl: AnimationCtrl;

    init(weapon: Weapon) {
        this.weapon = weapon;
        this.unscheduleAllCallbacks();

        // @ts-ignore
        this.aniCtrl = cocosUtil.addComponentOnce(this, AnimationCtrl);
        this.aniCtrl.playAnimation("1", true);
    }

    atk() {
        if (this.weapon.getDisTargetNode() > 200) {
            return;
        }

        audioManager.playEffect(this.weapon.row.audio);

        this.weapon.canFace = false;
        this.aniCtrl.playAnimationOnce("2");
        this.scheduleOnce(() => {
            let pos = this.weapon.getInfoPosition(0, true);
            let extraObj: any = {};
            extraObj.atkPercentAdd = this.weapon.atkPercentAdd;
            mapModel.bulletSystem.addBullet(this.weapon.row.bulletId, physicsGroup.PLAYER_BULLET, pos, null, extraObj);
            if (this.weapon.row.lv == constants.design.maxLv) {
                // 往外扩散
                let direction = this.weapon.direction.clone().normalize();
                let dis = 0;
                let arr = [100, 80, 60, 40];
                for (let i = 0; i < 3; i++) {
                    this.scheduleOnce(() => {
                        dis += arr[i] + arr[i + 1];
                        let target = pos.clone().add(direction.clone().multiplyScalar(dis));
                        let eobj: any = {};
                        eobj.scale = 0.8 - i * 0.2;
                        eobj.atkPercentAdd = this.weapon.atkPercentAdd;
                        mapModel.bulletSystem.addBullet(this.weapon.row.bulletId, physicsGroup.PLAYER_BULLET, target, null, eobj);
                    }, i * 0.2 + 0.2);
                }
            }
        }, 0.1);
        this.scheduleOnce(() => {
            this.weapon.canFace = true;
            this.weapon.timeCount = 0;
        }, 0.32);

    }

}

