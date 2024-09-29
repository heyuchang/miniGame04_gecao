import { Component, tween, _decorator } from 'cc';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 电锯人-齿轮
@ccclass('bullet6')
export class bullet6 extends Component {

    bullet: Bullet;

    init(bullet: Bullet) {
        this.bullet = bullet;

        tween(this.bullet.node).by(0.5, { angle: -360 }).repeatForever().start();

    }


}

