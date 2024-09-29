import { Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Skill } from './Skill';
import { audioManager } from '../../../manager/audioManager';
const { ccclass, property } = _decorator;

// 科技球
@ccclass('Skill6')
export class Skill6 extends Component {

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

        // 出射方向随机
        let direction = cocosUtil.getCircleDirectionArr(1)[0];

        this.timeCount = 0;
        this.num++;

        let extrObj = {
            invokeClass: this,
            time: this.skill.getDuration()
        };
        mapModel.bulletSystem.addBullet(this.skill.row.bulletId, physicsGroup.PLAYER_BULLET2, null, direction, extrObj);
        audioManager.playEffect(this.skill.row.audio);
    }

}

