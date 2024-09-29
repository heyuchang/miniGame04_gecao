import { Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { audioManager } from '../../../manager/audioManager';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Skill } from './Skill';
const { ccclass, property } = _decorator;

// 钻头
@ccclass('Skill9')
export class Skill9 extends Component {

    skill: Skill;

    num: number = 0;
    timeCount: number = 0;

    init(skill: Skill) {
        this.skill = skill;
    }

    subNum() {
        this.num--;
    }

    updateLogic(dt: number) {
        this.timeCount += dt;
        if (this.num >= this.skill.row.num) {
            // 数量已达上限
            return;
        }
        if (this.timeCount < this.skill.getAtkCd()) {
            return;
        }

        this.timeCount = 0;
        this.num++;

        // 出射方向随机
        let direction = cocosUtil.getCircleDirectionArr(1)[0];
        let extraObj = {
            invokeClass: this,
            time: this.skill.getDuration()
        };
        mapModel.bulletSystem.addBullet(this.skill.row.bulletId, physicsGroup.PLAYER_BULLET, null, direction, extraObj);
        audioManager.playEffect(this.skill.row.audio);
    }

}

