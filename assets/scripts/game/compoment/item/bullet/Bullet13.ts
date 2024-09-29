import { Component, tween, Vec2, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { HintNames } from '../hint/Hint';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 蝎子-静态扳手
@ccclass('bullet13')
export class bullet13 extends Component {

    bullet: Bullet;
    moveStop: boolean;

    // 电极扳手
    bulletId: number = 1010;

    init(bullet: Bullet) {
        this.bullet = bullet;
        this.moveStop = true;

        this.bullet.node.angle = 0;

        let targetPos = this.bullet.extraObj;
        let dis = Vec2.distance(this.bullet.node.getPosition(), targetPos);
        let time = dis / this.bullet.speed;

        tween(this.bullet.node).by(time, { angle: 360 }).start();
        tween(this.bullet.node).to(time, { position: targetPos }).call(() => {
            this.bullet.recycleSelf();
            mapModel.bulletSystem.addBullet(this.bulletId, physicsGroup.MONSTER_BULLET, cocosUtil.convertToWorldSpace(this.bullet.node));
        }).start();

        mapModel.hintSystem.addHint(HintNames.targetPos, cocosUtil.convertToWorldSpaceWithPos(this.bullet.node, targetPos), 0, time);

    }


}

