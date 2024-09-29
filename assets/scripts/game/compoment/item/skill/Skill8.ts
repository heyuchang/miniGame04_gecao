import { Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { audioManager } from '../../../manager/audioManager';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Monster } from '../monsters/Monster';
import { Skill } from './Skill';
const { ccclass, property } = _decorator;

// 闪电
@ccclass('Skill8')
export class Skill8 extends Component {

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

        let arr = [];
        mapModel.monsterSystem.forVisibleMonster((monster: Monster) => {
            let pos = monster.node.position;
            let playerPos = mapModel.player.node.position;
            if (Math.abs(pos.x - playerPos.x) > mapModel.visibleHalfSize.width - 100) {
                return;
            }
            if (Math.abs(pos.y - playerPos.y) > mapModel.visibleHalfSize.height - 150) {
                return;
            }
            arr.push(monster);
        });
        if (arr.length <= 0) {
            return;
        }
        this.timeCount = 0;

        for (let i = 0; i < this.skill.row.num; i++) {
            this.scheduleOnce(() => {
                if (arr.length <= 0) {
                    return;
                }
                let index = Math.floor(Math.random() * arr.length);
                let monster = arr[index];
                if (monster.hp <= 0) {
                    return;
                }
                let pos = cocosUtil.convertToWorldSpace(monster.node);
                mapModel.bulletSystem.addBullet(this.skill.row.bulletId, physicsGroup.PLAYER_BULLET, pos);
                audioManager.playEffect(this.skill.row.audio);
            }, i * 0.3);
        }

    }

}

