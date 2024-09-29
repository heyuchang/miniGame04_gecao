import { Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { constants } from '../../../data/constants';
import { designManager } from '../../../manager/designManager';
import { mapModel } from '../../../model/mapModel';
const { ccclass, property } = _decorator;

@ccclass('Skill')
export class Skill extends Component {

    info: any;
    id: any;
    row: any;

    skillUtil: any;

    onLoad() {

    }

    async init(info: any) {
        this.info = info;
        let id = info.id;

        this.id = id;
        this.unscheduleAllCallbacks();

        let row = designManager.getRowById(constants.tableName.skill, id);
        this.row = row;

        try {
            let skillUtil = cocosUtil.addComponentOnce(this, "Skill" + row.type);
            skillUtil.unscheduleAllCallbacks();
            this.skillUtil = skillUtil;
            // @ts-ignore
            skillUtil.init(this);
        } catch (e) {

        }

    }

    getDuration() {
        let duration = this.row.duration;
        duration = duration * (1 + mapModel.skillSystem.getSkill2DurationAddPercent());

        return duration;
    }

    getAtkCd() {
        let cd = this.row.cd;
        cd = cd * (1 - mapModel.skillSystem.getSkill2AtkCdSubPercent());
        return cd;
    }

    updateLogic(dt: number) {
        if (this.skillUtil && this.skillUtil.updateLogic) {
            this.skillUtil.updateLogic(dt);
        }
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
        if (this.skillUtil) {
            this.skillUtil.unscheduleAllCallbacks();
        }
    }
}

