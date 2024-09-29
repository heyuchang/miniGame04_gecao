import { Component, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { utilTools } from '../../../../utils/utilTools';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Skill } from './Skill';
import { audioManager } from '../../../manager/audioManager';
const { ccclass, property } = _decorator;

// 油桶
@ccclass('Skill4')
export class Skill4 extends Component {

    skill: Skill;

    timeCount: number = 0;
    isShowing: boolean = false;

    // 油桶扔出距离
    moveDis: number = 200;

    init(skill: Skill) {
        this.skill = skill;

    }

    // 扔出油桶
    throwFire() {
        let arr = cocosUtil.getCircleDirectionArr(this.skill.row.num);
        utilTools.forArr(arr, (direction: Vec3) => {
            let targetPos = mapModel.player.node.getPosition().add(direction.multiplyScalar(this.moveDis));
            let extraObj = {
                targetPos: targetPos,
                time: this.skill.getDuration()
            };
            mapModel.bulletSystem.addBullet(this.skill.row.bulletId, physicsGroup.PLAYER_BULLET, null, direction, extraObj);
        });
        audioManager.playEffect(this.skill.row.audio);
    }

    updateLogic(dt: number) {
        if (this.isShowing) {
            return;
        }

        this.timeCount += dt;
        if (this.timeCount < this.skill.getAtkCd()) {
            return;
        }

        this.timeCount = 0;
        this.isShowing = true;
        this.scheduleOnce(() => {
            this.isShowing = false;
        }, this.skill.getDuration());

        this.throwFire();
    }

}

