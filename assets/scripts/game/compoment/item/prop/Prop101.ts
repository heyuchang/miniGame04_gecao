import { Component, _decorator } from 'cc';
import { myLog } from '../../../../common/myLog';
import { utilTools } from '../../../../utils/utilTools';
import { constants } from '../../../data/constants';
import { designManager } from '../../../manager/designManager';
import { Prop } from './Prop';
const { ccclass, property } = _decorator;

// 金币
@ccclass('Prop101')
export class Prop101 extends Component {

    prop: Prop;

    init(prop: Prop) {
        this.prop = prop;

        let num = this.prop.extraObj.num;
        let arr = designManager.getRowsByType(constants.tableName.prop, constants.propTypes.coin);
        let propRow = null;
        utilTools.forArr(arr, (row: any) => {
            if (num >= row.p1 && num <= row.p2) {
                propRow = row;
                return true;
            }
        });
        if (!propRow) {
            myLog.e("coin num:" + num + " not in prop table");
            return;
        }

        this.prop.setSpriteFrame(this.prop.bodyNode, propRow.icon);

    }

}

