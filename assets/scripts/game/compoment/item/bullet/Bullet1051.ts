import { Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 技能-导弹
@ccclass('bullet1051')
export class bullet1051 extends Component {

    bullet: Bullet;
    contactNotHide: boolean = true;

    hasScheduled: boolean;

    init(bullet: Bullet) {
        this.bullet = bullet;

        this.hasScheduled = false;

        this.bullet.speed = this.bullet.speed * (1 + mapModel.skillSystem.getSkill2BulletSpeedAddPercent());
    }

    contactBegin() {
        if (this.hasScheduled) {
            return;
        }
        this.hasScheduled = true;
        this.scheduleOnce(() => {
            this.bullet.recycleSelf();
            // 爆炸
            mapModel.bulletSystem.addBullet(this.bullet.id + 1, physicsGroup.PLAYER_BULLET, cocosUtil.convertToWorldSpace(this.node));
        }, 0.15);
    }

}

