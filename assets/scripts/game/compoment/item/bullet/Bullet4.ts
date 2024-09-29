import { Component, Node, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { HintNames } from '../hint/Hint';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 狙击手-跟踪子弹
@ccclass('bullet4')
export class bullet4 extends Component {

    bullet: Bullet;

    init(bullet: Bullet) {
        this.bullet = bullet;

        this.bullet.rotateSpeed = Math.PI;

        this.scheduleOnce(() => {
            this.bullet.isFollow = true;
        }, 0.3);

        this.scheduleOnce(() => {
            this.bullet.isFollow = false;
        }, 3);

    }

    contactBegin(node: Node) {
        // 显示爆炸特效
        mapModel.hintSystem.addHint(HintNames.hit2, cocosUtil.convertToWorldSpace(this.bullet.node));
    }


}

