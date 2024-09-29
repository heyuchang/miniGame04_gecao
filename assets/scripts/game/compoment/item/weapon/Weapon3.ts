import { Component, Node, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { constants } from '../../../data/constants';
import { mapModel } from '../../../model/mapModel';
import { HintNames } from '../hint/Hint';
import { Weapon } from './Weapon';
const { ccclass, property } = _decorator;

// 雷霆之拳
@ccclass('Weapon3')
export class Weapon3 extends Component {

    weapon: Weapon;
    weaponId = 10140;

    init(weapon: Weapon) {
        this.weapon = weapon;

    }

    atk() {
        this.weapon.atkByFist(300, 0.1);
    }

    contactBegin(node: Node) {
        // 受击特效
        if (this.weapon.row.lv == constants.design.maxLv) {
            mapModel.hintSystem.addHint(HintNames.hit7, cocosUtil.convertToWorldSpace(node));
        } else {
            mapModel.hintSystem.addHint(HintNames.hit3, cocosUtil.convertToWorldSpace(node));
        }
        this.weapon.targetForceMoveBack(node);
    }

}

