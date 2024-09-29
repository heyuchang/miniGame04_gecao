import { Button, instantiate, Label, Node, PageView, sp, UITransform, v3, _decorator } from 'cc';
import { myLog } from '../../../common/myLog';
import { sdkManager } from '../../../sdk/sdkManager';
import { constants } from '../../data/constants';
import { msgac } from '../../data/msgac';
import { audioManager } from '../../manager/audioManager';
import { designManager } from '../../manager/designManager';
import { eventManager } from '../../manager/eventManager';
import { RedPointLogicMgr } from '../../manager/RedPointLogicMgr';
import { UserData } from '../../model/UserData';
import { PropItemPrefab } from '../item/PropItemPrefab';
import { BaseUILayer } from './BaseUILayer';
import { playerModel } from '../../model/playerModel';

const { ccclass, property } = _decorator;

@ccclass('ShopLayer')
export class ShopLayer extends BaseUILayer {

    @property({ type: Node, tooltip: "道具节点" }) mangItem: Node = null;
    @property({ type: Node, tooltip: "宣传页" }) pageView: Node = null;

    @property({ type: sp.Skeleton, tooltip: "" }) mangheSpine: sp.Skeleton = null;

    @property({ type: Node }) btnManghe: Node = null;

    @property({ type: Node }) uiNode: Node = null;
    @property({ type: Node }) btnSure: Node = null;

    @property({ type: Node }) propItem: Node = null;

    @property({ type: Node }) btnVideo: Node = null;
    @property({ type: Node }) btnSingle: Node = null;


    @property({ type: Label }) num1: Label = null;
    @property({ type: Label }) num2: Label = null;

    @property({ type: Node }) layer1: Node = null;
    @property({ type: Node }) layer2: Node = null;


    _mangheType = 0
    _curState = 0

    _isDrawIng = false

    gaojiProp = []
    _rewardArr = []


    onLoad() {

    }

    onEnable() {
        // for (let index = 0; index < 12; index++) {
        //     let item = instantiate(this.mangItem)
        //     this.listLayer.addChild(item)
        // }


        this.mangItem.active = false
        this.num1.string = (designManager.config.extra2 - UserData.getInstance().$drawNormalNum) + ""
        this.num2.string = (designManager.config.extra1 - UserData.getInstance().$drawGradeNum) + ""

        RedPointLogicMgr.ins().setRPointView(this.btnManghe, null, true)
        this.setSpriteFrame2(this.btnManghe, "shopLayer/mangheNormal", null, constants.bundles.wwqVec)
        this.pageView.getComponent(PageView).scrollToPage(0, 0)
        this._mangheType = 0
        this.mangheSpine.animation = "purple1"
        this.mangheSpine.timeScale = 1
        this.btnSure.active = false
        let self = this
        let callfun = function () {
            self.animalFinish()
        }
        this.mangheSpine.setCompleteListener(callfun)

        let arr = [10082, 10113, 10010]
        let arr1 = [10066, 10155, 10118]

        for (let i = 0; i < arr.length; i++) {
            let propItem = instantiate(self.propItem)
            this.layer1.addChild(propItem)
            propItem.position = v3(0, 0, 0)
            propItem.getComponent(PropItemPrefab).setView(arr[i], 1, PropItemPrefab.Type_UnTouch | PropItemPrefab.Type_HideNum)
            propItem.getComponent(PropItemPrefab).setScale(100)
        }

        for (let i = 0; i < arr1.length; i++) {
            let propItem = instantiate(self.propItem)
            this.layer2.addChild(propItem)
            propItem.position = v3(0, 0, 0)
            propItem.getComponent(PropItemPrefab).setView(arr1[i], 1, PropItemPrefab.Type_UnTouch | PropItemPrefab.Type_HideNum)
            propItem.getComponent(PropItemPrefab).setScale(100)
        }

        this.onClickChangeManghe()

    }

    start() {
        console.log("layerData = ", this.layerData)
        this.initVideoBtn()

    }

    initVideoBtn() {
        if (this.layerData.taskGo && UserData.getInstance().$freeDraw < designManager.config.taskDoge) {
            this.btnVideo.getChildByName("ui_video").active = false
            this.btnVideo.getChildByName("Layout").active = false
            this.btnVideo.getChildByName("videoLabel").position = v3(0, 0, 0)
            return
        }

        if (this._mangheType == 1) {
            this.btnVideo.getChildByName("Layout").getChildByName("zsLabel").getComponent(Label).string = designManager.config.tenCard + ""
            this.btnSingle.getChildByName("Layout").getChildByName("zsLabel").getComponent(Label).string = designManager.config.onceCard + ""
            this.setSpriteFrame2(this.btnSingle.getChildByName("Layout").getChildByName("prop_zs"), "prop/prop_diamond2")
            this.setSpriteFrame2(this.btnVideo.getChildByName("Layout").getChildByName("prop_zs"), "prop/prop_diamond2")

            if (UserData.getInstance().baoshi >= designManager.config.tenCard) {
                this.btnVideo.getChildByName("videoLabel").position = v3(0, -10, 0)
                this.btnVideo.getChildByName("ui_video").active = false
                this.btnVideo.getChildByName("Layout").active = true
            } else {
                this.btnVideo.getChildByName("videoLabel").position = v3(20, 0, 0)
                this.btnVideo.getChildByName("ui_video").active = true
                this.btnVideo.getChildByName("Layout").active = false
            }
        } else {
            this.btnVideo.getChildByName("Layout").getChildByName("zsLabel").getComponent(Label).string = designManager.config.tenCard2 + ""
            this.btnSingle.getChildByName("Layout").getChildByName("zsLabel").getComponent(Label).string = designManager.config.onceCard2 + ""
            this.setSpriteFrame2(this.btnSingle.getChildByName("Layout").getChildByName("prop_zs"), "prop/prop_coin1")
            this.setSpriteFrame2(this.btnVideo.getChildByName("Layout").getChildByName("prop_zs"), "prop/prop_coin1")

            if (UserData.getInstance().coin >= designManager.config.tenCard2) {
                this.btnVideo.getChildByName("videoLabel").position = v3(0, -10, 0)
                this.btnVideo.getChildByName("ui_video").active = false
                this.btnVideo.getChildByName("Layout").active = true
            } else {
                this.btnVideo.getChildByName("videoLabel").position = v3(20, 0, 0)
                this.btnVideo.getChildByName("ui_video").active = true
                this.btnVideo.getChildByName("Layout").active = false
            }
        }
    }

    onOnceCard() {
        audioManager.playEffect("btnClick")

        this.mangItem.active = false
        this.mangItem.getChildByName("Layout").removeAllChildren()
        let isEnougth = false
        if (this._mangheType == 1) {
            isEnougth = UserData.getInstance().checkAndUseBaoshi(designManager.config.onceCard, true)
        } else {
            isEnougth = UserData.getInstance().cheackAndUseCoin(designManager.config.onceCard2, true)
        }

        if (isEnougth) {
            let obj: any = {};
            obj.hide = true;
            eventManager.send(msgac.homeHideMenu, obj);
            this.showChouAnimale()
            this.cancelButtonTouch(false)
            this._isDrawIng = true
            this.gaojiProp = []
            this._rewardArr = []
            let item = UserData.getInstance().getDrawItem(this._mangheType)

            let propData = designManager.getRowById(constants.tableName.prop, item.award[0])
            if (propData.quality >= 4) {
                this.gaojiProp.push(propData)
            }
            this._rewardArr.push({ Id: item.award[0], Num: 1 })
            this.initVideoBtn()
            // if (item) {
            //     arr.push(item)
            //     this.openLayer(constants.layers.RewardLayer, { propArr: arr })
            // }
        } else {
            this.toast(this._mangheType == 1 ? "钻石不足" : "金币不足")
        }
    }

    onTenCard() {
        audioManager.playEffect("btnClick")

        this.mangItem.getChildByName("Layout").removeAllChildren()
        this.mangItem.active = false

        let self = this
        this.mangItem.getChildByName("Layout").getComponent(UITransform).width = 540
        this.mangItem.getChildByName("Layout").getComponent(UITransform).height = 200
        let getReward = function () {
            self.showChouAnimale()
            let obj: any = {};
            obj.hide = true;

            self.cancelButtonTouch(false)
            self._isDrawIng = true
            self.gaojiProp = []
            self._rewardArr = []
            eventManager.send(msgac.homeHideMenu, obj);
            for (let i = 0; i < 10; i++) {
                let item = UserData.getInstance().getDrawItem(self._mangheType)
                if (item) {
                    // let propItem = instantiate(self.propItem)
                    // self.mangItem.getChildByName("Layout").addChild(propItem)
                    // propItem.getComponent(PropItemPrefab).setView(item.award[0], item.award[2], PropItemPrefab.Type_UnTouch)
                    // propItem.getComponent(PropItemPrefab).setScale(100)

                    let propData = designManager.getRowById(constants.tableName.prop, item.award[0])
                    if (propData.quality >= 4) {
                        self.gaojiProp.push(propData)
                    }
                    self._rewardArr.push({ Id: item.award[0], Num: 1 })
                }
            }
            self.initVideoBtn()
            //    self.openLayer(constants.layers.RewardLayer, { propArr: arr })
        }
        let isEnougth = false

        if (this.layerData.taskGo && UserData.getInstance().$freeDraw < designManager.config.taskDoge) {
            isEnougth = true
            UserData.getInstance().$freeDraw  ++
        }else{
            if (this._mangheType == 1) {
                isEnougth = UserData.getInstance().checkAndUseBaoshi(designManager.config.tenCard, true)
            } else {
                isEnougth = UserData.getInstance().cheackAndUseCoin(designManager.config.tenCard2, true)
            }
        }
        if (isEnougth) {
            getReward && getReward()

        } else {
            sdkManager.openAd(this._mangheType == 1 ? "盲盒高级抽奖" : "盲盒普通抽奖", (state) => {
                if (state == 1) {
                    getReward && getReward()
                }
            })
        }
    }

    onClickChangeManghe() {
        audioManager.playEffect("btnClick")

        if (this.pageView.getComponent(PageView).getCurrentPageIndex() == 0) {
            this.pageView.getComponent(PageView).scrollToPage(1, 0.2)
        } else {
            this.pageView.getComponent(PageView).scrollToPage(0, 0.2)
        }
        this.updatebtnState()
    }

    updatebtnState() {
        if (this._isDrawIng) {
            return
        }
        if (this.pageView.getComponent(PageView).getCurrentPageIndex() == 1) {
            this._mangheType = 1
            this.setSpriteFrame2(this.btnManghe, "shopLayer/manggaoji", null, constants.bundles.wwqVec)
            this.mangheSpine.setAnimation(0, "qiehuan1", false)

            this.mangheSpine.timeScale = 1
        } else {
            this.mangheSpine.setAnimation(0, "qiehuan2", false)
            this.mangheSpine.timeScale = 1
            this._mangheType = 0
            this.setSpriteFrame2(this.btnManghe, "shopLayer/mangheNormal", null, constants.bundles.wwqVec)
        }
        this.initVideoBtn()
    }

    showChouAnimale() {
        let aniName = "purple"
        if (this._mangheType == 1) {
            aniName = "yellow"
        }
        this.mangheSpine.setAnimation(0, aniName + "2", false)

        // this.mangheSpine.animation = aniName + "2"
        this.mangheSpine.timeScale = 1
        this._curState = 2
    }

    animalFinish() {
        let aniName = "purple"
        if (this._mangheType == 1) {
            aniName = "yellow"
        }
        this.mangheSpine.loop = false

        if (this._curState == 2) {
            this.uiNode.active = false
            this.mangheSpine.timeScale = 1
            this.mangheSpine.setAnimation(0, "bai3", false)
            this._curState = 3
        } else if (this._curState == 3) {
            this.checkShowGaoji()
            // this.mangheSpine.animation = aniName + "4"
            // this.btnSure.active = true
            this.mangItem.active = true
            // this._curState = 4
        } else if (this._curState == 4) {
            // this.mangheSpine.animation = this.mangheSpine.animation
        }
    }

    checkShowGaoji() {

        if (this.gaojiProp.length > 0) {
            let propData = this.gaojiProp.shift()
            if (propData) {
                if (propData.quality >= 4) {
                    this.mangheSpine.setAnimation(0, propData.quality == 4 ? "purple4" : "yellow4", true)
                    this.mangheSpine.timeScale = 1
                    this.mangItem.getChildByName("Layout").removeAllChildren()
                    let propItem = instantiate(this.propItem)
                    this.mangItem.getChildByName("Layout").getComponent(UITransform).width = 300
                    this.mangItem.getChildByName("Layout").getComponent(UITransform).height = 300
                    this.mangItem.getChildByName("Layout").addChild(propItem)
                    propItem.getComponent(PropItemPrefab).setView(propData.id, 1, PropItemPrefab.Type_BigIcon)
                    propItem.getComponent(PropItemPrefab).setScale(300)
                    this.btnSure.active = true
                    this._curState = 4
                    return
                }
            }
        }
        let aniName = "purple"
        if (this._mangheType == 1) {
            aniName = "yellow"
        }
        this.mangheSpine.setAnimation(0, aniName + "1", false)

        this.mangheSpine.timeScale = 1
        this.mangItem.active = false
        this.mangItem.getChildByName("Layout").removeAllChildren()
        UserData.getInstance().getRewardProp(this._rewardArr)
        this.openLayer(constants.layers.RewardLayer, { propArr: this._rewardArr })

        playerModel.addDayTaskNum(3, this._rewardArr.length);

        this.drawFinish()
        this._curState = 5

    }

    onBtnClickSure() {

        audioManager.playEffect("btnClick")
        this.checkShowGaoji()
        this.mangItem.active = true
        return

    }

    drawFinish() {
        this.num1.string = (designManager.config.extra2 - UserData.getInstance().$drawNormalNum) + ""
        this.num2.string = (designManager.config.extra1 - UserData.getInstance().$drawGradeNum) + ""
        this.uiNode.active = true
        this.btnSure.active = false
        this.mangItem.active = false
        eventManager.send(msgac.homeHideMenu, { hide: false });

        let aniName = "purple"
        if (this._mangheType == 1) {
            aniName = "yellow"
        }
        this._curState = 0
        this.mangheSpine.setAnimation(0, aniName + "1", false)
        this.cancelButtonTouch(true)
        this._isDrawIng = false
    }

    cancelButtonTouch(state) {
        this.btnSingle.getComponent(Button).interactable = state
        this.btnVideo.getComponent(Button).interactable = state
        this.btnManghe.getComponent(Button).interactable = state
    }

    onDisable() {
        super.onDisable();
    }

    onDestroy() {
        super.onDestroy();
    }



    closeLayer() {
        super.closeLayer()

    }


}

