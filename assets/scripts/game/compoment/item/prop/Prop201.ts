import { Component, v3, _decorator } from 'cc';
import { myLog } from '../../../../common/myLog';
import { utilTools } from '../../../../utils/utilTools';
import { constants } from '../../../data/constants';
import { designManager } from '../../../manager/designManager';
import { Prop } from './Prop';
const { ccclass, property } = _decorator;

// 经验
@ccclass('Prop201')
export class Prop201 extends Component {

    prop: Prop;

    init(prop: Prop) {
        this.prop = prop;

        let num = this.prop.extraObj.num;
        let arr = designManager.getRowsByType(constants.tableName.prop, constants.propTypes.exp);
        let propRow = null;
        utilTools.forArr(arr, (row: any) => {
            if (num >= row.p1 && num <= row.p2) {
                propRow = row;
                return true;
            }
        });
        if (!propRow) {
            myLog.e("exp num:" + num + " not in prop table");
            return;
        }

        // 根据经验值大小显示缩放比
        let d = (propRow.p2 - propRow.p1) * 0.8;
        let scale = 1;
        if (num - propRow.p1 > d) {
            scale = 1.3;
        }
        this.prop.bodyNode.setScale(v3(scale, scale, 1));

        this.prop.setSpriteFrame(this.prop.bodyNode, propRow.icon);

    }

}

