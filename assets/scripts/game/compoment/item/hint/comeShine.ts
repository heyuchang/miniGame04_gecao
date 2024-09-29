import { Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { Hint } from './Hint';
const { ccclass, property } = _decorator;

@ccclass('comeShine')
export class comeShine extends Component {

    hint: Hint;

    init(hint: Hint) {
        this.hint = hint;

        let monsterId = this.hint.extraObj.monsterId;
        this.scheduleOnce(() => {
            mapModel.monsterSystem.createMonster(monsterId, cocosUtil.convertToWorldSpace(this.node));
        }, 0.4);
    }

}

