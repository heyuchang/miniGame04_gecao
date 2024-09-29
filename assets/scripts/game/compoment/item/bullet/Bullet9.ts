import { Component, tween, v3, Vec2, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { utilTools } from '../../../../utils/utilTools';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { HintNames } from '../hint/Hint';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 蝎子-大闪电球
@ccclass('bullet9')
export class bullet9 extends Component {

    bullet: Bullet;
    moveStop: boolean = false;
    contactNotHide: boolean = true;

    bulletId: number = 1008;

    timeCount: number = 0;

    init(bullet: Bullet) {
        this.bullet = bullet;
        this.timeCount = 0;

        this.moveStop = true;

        let time = 0.7;
        this.bullet.node.setScale(v3(0.1, 0.1, 1));
        tween(this.bullet.node).to(time, { scale: v3(1.5, 1.5, 1) }).start();

        this.scheduleOnce(() => {
            this.bullet.direction = this.bullet.getFacePlayerDirection().normalize();
            let playerPos = mapModel.player.node.getPosition();
            let dis = Vec2.distance(playerPos, this.bullet.node.getPosition());
            let time = dis / this.bullet.speed;
            tween(this.bullet.node).to(time, { position: playerPos }).call(() => {
                this.bullet.recycleSelf();
                // 生成一圈小子弹
                let p = this.bullet.node.getPosition();
                let arr = cocosUtil.getCircleDirectionArr(10);
                p = cocosUtil.convertToWorldSpaceWithPos(this.bullet.node, p);
                utilTools.forArr(arr, (direction: any) => {
                    mapModel.bulletSystem.addBullet(this.bulletId, physicsGroup.MONSTER_BULLET, p, direction);
                });
                // 爆炸特效
                mapModel.hintSystem.addHint(HintNames.boom1, p);
            }).start();
        }, time);

    }

}

