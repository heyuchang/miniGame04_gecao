import { Component, _decorator } from 'cc';
import { audioManager } from '../../../manager/audioManager';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Skill } from './Skill';
const { ccclass, property } = _decorator;

// 导弹
@ccclass('Skill5')
export class Skill5 extends Component {

    skill: Skill;

    timeCount: number = 0;

    init(skill: Skill) {
        this.skill = skill;
    }

    updateLogic(dt: number) {
        this.timeCount += dt;
        if (this.timeCount < this.skill.getAtkCd()) {
            return;
        }

        let targetNode = mapModel.mapSystem.getMinDisTargetNode();
        if (!targetNode) {
            return;
        }

        this.timeCount = 0;
        let direction = targetNode.getPosition().subtract(mapModel.player.node.getPosition());

        mapModel.bulletSystem.addBullet(this.skill.row.bulletId, physicsGroup.PLAYER_BULLET2, null, direction);
        audioManager.playEffect(this.skill.row.audio);
    }

}

