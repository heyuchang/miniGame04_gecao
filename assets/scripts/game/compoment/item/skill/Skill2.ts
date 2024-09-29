import { Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { utilTools } from '../../../../utils/utilTools';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Bullet } from '../bullet/Bullet';
import { Skill } from './Skill';
const { ccclass, property } = _decorator;

// 转盘
@ccclass('Skill2')
export class Skill2 extends Component {

    skill: Skill;

    isShowing: boolean = false;
    timeCount: number = 0;

    bulletArr: Bullet[];

    init(skill: Skill) {
        this.skill = skill;
        this.bulletArr = [];

        this.isShowing = false;
    }

    showDisks() {
        let arr = cocosUtil.getCircleDirectionArr(this.skill.row.num, 160);
        utilTools.forArr(arr, (direction: any) => {
            let extraObj = {
                direction: direction,
                endCb: (bullet: Bullet) => {
                    if (!cocosUtil.isValid(this.node)) {
                        bullet.recycleSelf();
                        return;
                    }
                    if (this.bulletArr.indexOf(bullet) == -1) {
                        this.bulletArr.push(bullet);
                    }
                }
            };
            mapModel.bulletSystem.addBullet(this.skill.row.bulletId, physicsGroup.PLAYER_BULLET2, null, null, extraObj);
        });
    }

    hideDisks(isAtOnce: boolean = false) {
        this.bulletArr.forEach((bullet: Bullet) => {
            if (cocosUtil.isValid(bullet)) {
                bullet.bulletUtil.hide(isAtOnce);
            }
        });
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
            this.hideDisks();
        }, this.skill.getDuration());

        this.showDisks();
    }

    forceDestroy() {
        this.hideDisks(true);
    }

}

