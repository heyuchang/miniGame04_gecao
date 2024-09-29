import { Component, Node, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { HintNames } from '../hint/Hint';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 炮弹巨人-跟踪子弹
@ccclass('bullet10170')
export class bullet10170 extends Component {

    bullet: Bullet;

    init(bullet: Bullet) {
        this.bullet = bullet;

        this.bullet.rotateSpeed = Math.PI / 4 + Math.random() * Math.PI / 2;

        this.scheduleOnce(() => {
            this.bullet.isFollow = true;
        }, 0.4 + Math.random() * 0.2);

        this.scheduleOnce(() => {
            this.bullet.isFollow = false;
        }, 2.5 + Math.random() * 0.5);

    }

    contactBegin(node: Node) {
        // 显示爆炸特效
        mapModel.hintSystem.addHint(HintNames.hit2, cocosUtil.convertToWorldSpace(this.bullet.node));
    }


}

