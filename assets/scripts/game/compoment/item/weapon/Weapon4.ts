import { Component, _decorator } from 'cc';
import { Weapon } from './Weapon';
const { ccclass, property } = _decorator;

// 葱
@ccclass('Weapon4')
export class Weapon4 extends Component {

    weapon: Weapon;
    weaponId = 10145;

    // 固定只会瞄准左边或者右边
    isFixedDirection: boolean = true;

    init(weapon: Weapon) {
        this.weapon = weapon;

    }

    atk() {
        this.weapon.atkByStick(500);
    }

}

