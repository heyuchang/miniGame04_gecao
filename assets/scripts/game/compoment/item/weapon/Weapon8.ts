import { Component, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { constants } from '../../../data/constants';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Weapon } from './Weapon';
const { ccclass, property } = _decorator;

// 魔法弩
@ccclass('Weapon8')
export class Weapon8 extends Component {

    weapon: Weapon;
    weaponId = 10165;

    init(weapon: Weapon) {
        this.weapon = weapon;
    }

    atk() {
        // 发出子弹
        let pos = this.weapon.getInfoPosition(0, true);
        let num = 1;
        if (this.weapon.row.lv == constants.design.maxLv) {
            num = 3;
        }
        let directionArr = cocosUtil.getSectorDirectionArr(this.weapon.direction, 15, num);
        let extraObj: any = {};
        extraObj.atkPercentAdd = this.weapon.atkPercentAdd;
        directionArr.forEach((dir: Vec3) => {
            mapModel.bulletSystem.addBullet(this.weapon.row.bulletId, physicsGroup.PLAYER_BULLET, pos, dir, extraObj);
        });

        // 枪口发光和后摇动作
        this.weapon.atkByShot();
    }

}

