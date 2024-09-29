import { Node, _decorator } from 'cc';
import { sdkManager } from '../../../sdk/sdkManager';
import { constants } from '../../data/constants';
import { audioManager } from '../../manager/audioManager';
import { designManager } from '../../manager/designManager';
import { PropItem, UserData } from '../../model/UserData';
import { PropItemPrefab } from '../item/PropItemPrefab';

import { BaseUILayer } from './BaseUILayer';
const { ccclass, property } = _decorator;

@ccclass('RewardItemLayer')
export class RewardItemLayer extends BaseUILayer {


    @property({ type: Node }) btnClose: Node = null;

    @property({ type: Node }) propItem: Node = null;


    onLoad() {
        super.onLoad()
    }

    onEnable() {
        let id = this.layerData.propId
        let num = this.layerData.num

        this.propItem.getComponent(PropItemPrefab).setView(id, num, PropItemPrefab.Type_UnTouch)
    }

    getRewardProp() {
        audioManager.playEffect("btnClick")

        let prop: PropItem = {
            Id: this.layerData.propId,
            Num: this.layerData.num,
        }
        let self = this
        let propdata = designManager.getRowById(constants.tableName.prop, this.layerData.propId)

        sdkManager.openAd("获得道具" + propdata.name, (st: number) => {
            if (st == 1) {
                UserData.getInstance().getRewardProp([prop])
                self.closeLayer()
            }
        });
    }

    onDisable() {
        super.onDisable();
    }

    onDestroy() {
        super.onDestroy();
    }

    start() {

    }

    closeLayer() {
        audioManager.playEffect("btnClick")
        super.closeLayer()
    }

}

