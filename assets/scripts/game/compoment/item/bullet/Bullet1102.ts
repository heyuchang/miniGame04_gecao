import { Component, macro, Vec2, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { HintNames } from '../hint/Hint';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 技能-轰炸机-子弹
@ccclass('bullet1102')
export class bullet1102 extends Component {

    bullet: Bullet;
    // 不可以自动销毁
    outScreenNotRecycle: boolean = true;

    targetPos: Vec3;
    hint: any;

    init(bullet: Bullet) {
        this.bullet = bullet;
        this.targetPos = this.bullet.extraObj;
        this.hint = null;

        this.scheduleOnce(() => {
            this.bullet.isFollow = true;
            this.bullet.rotateSpeed = Math.PI * 6;
        }, 0.02 + Math.random() * 0.02);

        mapModel.hintSystem.addHint(HintNames.targetPos2, cocosUtil.convertToWorldSpaceWithPos(this.node, this.targetPos), 0, (hint: any) => {
            if (!cocosUtil.isValid(this) || !this.node.activeInHierarchy) {
                hint.recycleSelf();
                return;
            }
            this.hint = hint;
        });

        this.schedule((dt: number) => {
            let speed = this.bullet.speed;
            speed -= 20;
            if (speed < 200) {
                speed = 200;
            }
            this.bullet.speed = speed;
            if (Vec2.distance(this.targetPos, this.node.getPosition()) <= 100) {
                this.arriveTargetPos();
            }
        }, 0.1, macro.REPEAT_FOREVER);
    }

    arriveTargetPos() {
        this.bullet.recycleSelf();
        if (cocosUtil.isValid(this.hint)) {
            this.hint.hint.recycleSelf();
        }
        // 爆炸
        mapModel.bulletSystem.addBullet(this.bullet.id + 1, physicsGroup.PLAYER_BULLET, cocosUtil.convertToWorldSpace(this.node));
    }

}

