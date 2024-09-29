import { Button, instantiate, Node, Prefab, Sprite, v3, _decorator } from 'cc';
import { sdkManager } from '../../../sdk/sdkManager';
import { constants } from '../../data/constants';
import { designManager } from '../../manager/designManager';
import { PropItem, UserData } from '../../model/UserData';
import { PropItemPrefab } from '../item/PropItemPrefab';
import { BaseUILayer } from './BaseUILayer';

const { ccclass, property } = _decorator;

@ccclass('RewardSkinLayer')
export class RewardSkinLayer extends BaseUILayer {


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

    initList() {
        this.proplayer.removeAllChildren()
        let propArr = designManager.getRowsByType(constants.tableName.prop, 17)
        for (let i = 0; i < propArr.length; i++) {
            let data = propArr[i]
            if (data.p1 == 2) {
                let item = instantiate(this.itemProp)
                item.active = true
                item.position = v3(0, 0, 0)
                this.proplayer.addChild(item)
                let propItem = instantiate(this.propItem)
                propItem.getComponent(PropItemPrefab).setView(data.id, 0, PropItemPrefab.Type_UnTouch | PropItemPrefab.Type_HideNum)
                propItem.getComponent(PropItemPrefab).changeBg("activityRes/itembg", constants.bundles.wwqVec)
                propItem.getComponent(PropItemPrefab).setScale(99)
                item.addChild(propItem)
                propItem.position = v3(0, -20, 0)
                this.addButtonHander(item.getChildByName("btnGet"), this.node, "RewardSkinLayer", "onClickVideoGet", data.id)
                if (UserData.getInstance().isHaveProp(data.id)) {
                    item.getChildByName("btnGet").getComponent(Sprite).grayscale = true
                    item.getChildByName("btnGet").getComponent(Button).interactable = false
                }
            }
        }
    }

    onClickVideoGet(event, data) {
        console.log("onClickVideoGet = ", data)
        let self = this
        sdkManager.openAd("获取皮肤", function (st) {
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

