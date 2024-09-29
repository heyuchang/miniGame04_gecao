import { Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { audioManager } from '../../../manager/audioManager';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Skill } from './Skill';
const { ccclass, property } = _decorator;

// 力场
@ccclass('Skill7')
export class Skill7 extends Component {

    skill: Skill;

    bulletUtil: any;

    init(skill: Skill) {
        this.skill = skill;

        this.bulletUtil = null;

        let extraObj = {
            lv: this.skill.row.lv,
            endCb: (bulletUtil: any) => {
                if (!cocosUtil.isValid(this.node)) {
                    bulletUtil.bullet.recycleSelf();
                    return;
                }
                this.bulletUtil = bulletUtil;
            }
        };
        mapModel.bulletSystem.addBullet(this.skill.row.bulletId, physicsGroup.PLAYER_BULLET, null, null, extraObj);
        audioManager.playEffect(this.skill.row.audio);

    }

    initBulletScale() {
        if (cocosUtil.isValid(this.bulletUtil)) {
            this.bulletUtil.initScale();
        }
    }

    forceDestroy() {
        if (cocosUtil.isValid(this.bulletUtil)) {
            this.bulletUtil.bullet.recycleSelf();
        }
    }

}

