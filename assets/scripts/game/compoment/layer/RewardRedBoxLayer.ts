import { Button, instantiate, Node, Prefab, Sprite, v3, _decorator } from 'cc';
import { sdkManager } from '../../../sdk/sdkManager';
import { constants } from '../../data/constants';
import { designManager } from '../../manager/designManager';
import { PropItem, UserData } from '../../model/UserData';
import { PropItemPrefab } from '../item/PropItemPrefab';
import { BaseUILayer } from './BaseUILayer';

const { ccclass, property } = _decorator;

@ccclass('RewardRedBoxLayer')
export class RewardRedBoxLayer extends BaseUILayer {

    @property(Node) itemProp: Node = null;
    @property(Node) proplayer: Node = null;

    @property({ type: Prefab }) propItem: Prefab = null;

    onLoad() {

    }

  
    onDisable() {
        super.onDisable();
    }

    onDestroy() {
        super.onDestroy();
    }

    start() {
        this.initList()
        this.itemProp.active = false
    }

    initList(){
        let propArr = designManager.getRowsByType(constants.tableName.CNTM, 1)
        this.proplayer.removeAllChildren()
        for (let i = 0; i < propArr.length; i++) {
            let data = propArr[i].award[0]
            let item = instantiate(this.itemProp)
            item.position = v3(0, 0, 0)
            item.active = true
            this.proplayer.addChild(item)
            let propItem = instantiate(this.propItem)
            propItem.getComponent(PropItemPrefab).setView(data[0], 0, PropItemPrefab.Type_UnTouch | PropItemPrefab.Type_HideNum)
            propItem.getComponent(PropItemPrefab).changeBg("activityRes/itembg", constants.bundles.wwqVec)
            propItem.getComponent(PropItemPrefab).setScale(99)
            item.addChild(propItem)
            propItem.position = v3(0, -20, 0)
            this.addButtonHander(item.getChildByName("btnGet"), this.node, "RewardRedBoxLayer", "onClickVideoGet", data[0])

            if (UserData.getInstance().isHaveProp(data[0])) {
                item.getChildByName("btnGet").getComponent(Sprite).grayscale = true
                item.getChildByName("btnGet").getComponent(Button).interactable = false
            }
        }
    }

    onClickVideoGet(event, data) {
        console.log("onClickVideoGet = ", data)
        let self = this
        sdkManager.openAd("领取皮肤", function (st) {
            if (st == 1) {
                let propItem: PropItem = {
                    Id: data,
                    Num: 1
                };
                UserData.getInstance().getRewardProp([propItem])
                self.openLayer(constants.layers.RewardLayer, { propArr: [propItem] });
                self.initList()
            }
        })
    }


}

