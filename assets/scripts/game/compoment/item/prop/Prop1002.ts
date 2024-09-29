import { Component, _decorator } from 'cc';
import { constants } from '../../../data/constants';
import { designManager } from '../../../manager/designManager';
import { Prop } from './Prop';
const { ccclass, property } = _decorator;

// 装备
@ccclass('Prop1002')
export class Prop1002 extends Component {

    prop: Prop;

    init(prop: Prop) {
        this.prop = prop;

        let row = designManager.getRowById(constants.tableName.prop, this.prop.extraObj.propId);
        this.prop.setSpriteFrame2(this.prop.bodyNode, "prop/" + row.icon);
    }

}

