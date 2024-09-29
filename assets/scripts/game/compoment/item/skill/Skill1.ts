import { Component, _decorator } from 'cc';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Skill } from './Skill';
const { ccclass, property } = _decorator;

// 锤子
@ccclass('Skill1')
export class Skill1 extends Component {

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

        mapModel.bulletSystem.addBullet(this.skill.row.bulletId, physicsGroup.PLAYER_BULLET2, null, null, this);
    }

}

