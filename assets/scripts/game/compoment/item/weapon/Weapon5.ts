import { Component, Node, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { HintNames } from '../hint/Hint';
import { Weapon } from './Weapon';
import { constants } from '../../../data/constants';
const { ccclass, property } = _decorator;

// 光剑
@ccclass('Weapon5')
export class Weapon5 extends Component {

    weapon: Weapon;
    weaponId = 10150;

    init(weapon: Weapon) {
        this.weapon = weapon;

    }

    atk() {
        let time = 0.05;
        let atkDis = 300;
        if (this.weapon.row.lv == constants.design.maxLv) {
            atkDis = 400;
        }
        let ret = this.weapon.atkByFist(atkDis, time);
        if (!ret) {
            this.scheduleOnce(() => {
                if (this.weapon.row.lv == constants.design.maxLv) {
                    mapModel.hintSystem.addHint(HintNames.hit4, cocosUtil.convertToWorldSpace(this.weapon.node), this.weapon.node.angle);
                } else {
                    mapModel.hintSystem.addHint(HintNames.hit6, cocosUtil.convertToWorldSpace(this.weapon.node), this.weapon.node.angle);
                }
            }, time * 2);
        }

    }

    contactBegin(node: Node) {
        // 受击特效
        mapModel.hintSystem.addHint(HintNames.hit5, cocosUtil.convertToWorldSpace(node));
        this.weapon.targetForceMoveBack(node);
    }

}

