import { Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { audioManager } from '../../../manager/audioManager';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Skill } from './Skill';
const { ccclass, property } = _decorator;

// 轰炸机
@ccclass('Skill10')
export class Skill10 extends Component {

    skill: Skill;

    timeCount: number = 0;
    // 是否轰炸中
    isShoting: boolean;

    robotBullet: any;

    init(skill: Skill) {
        this.skill = skill;
        this.isShoting = false;
        this.robotBullet = null;

        let extraObj = {
            endCb: (bulletUtil: any) => {
                if (!cocosUtil.isValid(this.node)) {
                    bulletUtil.bullet.recycleSelf();
                    return;
                }
                this.robotBullet = bulletUtil;
            },
            lv: this.skill.row.lv
        };
        mapModel.bulletSystem.addBullet(this.skill.row.bulletId, physicsGroup.PLAYER_BULLET, null, null, extraObj);
    }

    forceDestroy() {
        if (cocosUtil.isValid(this.robotBullet)) {
            this.robotBullet.bullet.recycleSelf();
        }
    }

    // 开始轰炸
    startShoting() {
        let duration = this.skill.getDuration();
        this.isShoting = true;
        this.robotBullet.startShot(duration);
        this.scheduleOnce(() => {
            this.isShoting = false;
            this.timeCount = 0;
        }, duration);
        audioManager.playEffect(this.skill.row.audio);
    }

    updateLogic(dt: number) {
        if (!this.robotBullet) {
            return;
        }

        this.timeCount += dt;

        if (this.timeCount < this.skill.getAtkCd()) {
            return;
        }

        if (this.isShoting) {
            return;
        }

        this.startShoting();

    }

}

