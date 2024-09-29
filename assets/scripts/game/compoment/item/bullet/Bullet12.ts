import { Component, Tween, tween, _decorator } from 'cc';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 蝎子-大闪电球分出来的小闪电球
@ccclass('bullet12')
export class bullet12 extends Component {

    bullet: Bullet;

    init(bullet: Bullet) {
        this.bullet = bullet;

        tween(this.bullet.node).by(4, { angle: -360 }).repeatForever().start();

    }

}

