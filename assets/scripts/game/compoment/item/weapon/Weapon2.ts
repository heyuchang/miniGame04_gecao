import { Component, Node, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { constants } from '../../../data/constants';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { HintNames } from '../hint/Hint';
import { Weapon } from './Weapon';
const { ccclass, property } = _decorator;

// 如来神掌
@ccclass('Weapon2')
export class Weapon2 extends Component {

    weapon: Weapon;
    weaponId = 10135;

    bulletId = 7;

    init(weapon: Weapon) {
        this.weapon = weapon;

    }

    atk() {
        this.weapon.atkByFist(300, 0.1);
    }

    contactBegin(node: Node) {
        // 受击特效
        mapModel.hintSystem.addHint(HintNames.hit1, cocosUtil.convertToWorldSpace(node));
        this.weapon.targetForceMoveBack(node);

    }

    moveMaxFar() {
        if (this.weapon.row.lv == constants.design.maxLv) {
            // 额外释放如来神掌
            mapModel.bulletSystem.addBullet(this.bulletId, physicsGroup.PLAYER_BULLET, cocosUtil.convertToWorldSpace(this.weapon.node), null, this.weapon.node.angle);
        }
    }

}

