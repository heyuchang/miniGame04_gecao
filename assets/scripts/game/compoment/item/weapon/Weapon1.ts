import { Component, _decorator } from 'cc';
import { Weapon } from './Weapon';
const { ccclass, property } = _decorator;

// 勇士匕首
@ccclass('Weapon1')
export class Weapon1 extends Component {

    weapon: Weapon;

    weaponId = 10130;

    init(weapon: Weapon) {
        this.weapon = weapon;
    }

    atk() {
        this.weapon.atkByDart();
    }

}

