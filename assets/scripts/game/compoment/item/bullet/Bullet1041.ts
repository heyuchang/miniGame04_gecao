import { Component, tween, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 技能-油桶
@ccclass('bullet1041')
export class bullet1041 extends Component {

    bullet: Bullet;

    init(bullet: Bullet) {
        this.bullet = bullet;
        this.node.angle = 0;

        tween(this.node).by(0.6, { angle: -360 }).repeatForever().start();
        let targetPos = this.bullet.extraObj.targetPos;
        tween(this.node).to(0.6, { position: targetPos }, { easing: "quadOut" }).call(() => {
            this.bullet.recycleSelf();
            // 燃烧火焰
            mapModel.bulletSystem.addBullet(this.bullet.id + 1, physicsGroup.PLAYER_BULLET, cocosUtil.convertToWorldSpace(this.node), null, this.bullet.extraObj.time);
        }).start();

    }


}

