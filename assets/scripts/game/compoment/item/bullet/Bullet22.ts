import { Animation, Component, find, _decorator } from 'cc';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 武器-魔法弩
@ccclass('bullet22')
export class bullet22 extends Component {

    bullet: Bullet;
    contactNotHide: boolean = true;


    init(bullet: Bullet) {
        this.bullet = bullet;

        find("body", this.node).getComponent(Animation).play("ani");
    }

}

