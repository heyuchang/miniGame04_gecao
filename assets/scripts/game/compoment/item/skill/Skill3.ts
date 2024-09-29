import { Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { audioManager } from '../../../manager/audioManager';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Skill } from './Skill';
const { ccclass, property } = _decorator;

// 飞镖
@ccclass('Skill3')
export class Skill3 extends Component {

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
        let targetNode = mapModel.mapSystem.getMinDisTargetNode();
        if (!targetNode) {
            return;
        }

        this.timeCount = 0;
        this.num++;

        let direction = targetNode.getPosition().subtract(mapModel.player.node.getPosition());
        mapModel.bulletSystem.addBullet(this.skill.row.bulletId, physicsGroup.PLAYER_BULLET,
            cocosUtil.convertToWorldSpace(mapModel.player.node), direction, this);
        audioManager.playEffect(this.skill.row.audio);
    }

}

