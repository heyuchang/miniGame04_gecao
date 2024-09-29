import { Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 粘稠怪-水滴
@ccclass('bullet10190')
export class bullet10190 extends Component {

    bullet: Bullet;
    contactNotHide: boolean = true;

    init(bullet: Bullet) {
        this.bullet = bullet;

        let bulletId = this.bullet.extraObj;

        this.scheduleOnce(() => {
            this.bullet.recycleSelf();
            // 变成泥浆
            mapModel.bulletSystem.addBullet(bulletId, physicsGroup.MONSTER_BULLET, cocosUtil.convertToWorldSpace(this.node));
        }, 0.8);
    }


}

