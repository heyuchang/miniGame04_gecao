import { _decorator, Node, instantiate, Label, PageView, Sprite, Layout, v3, Prefab, Button } from 'cc';
import { myLog } from '../../../common/myLog';
import { sdkManager } from '../../../sdk/sdkManager';
import { constants } from '../../data/constants';
import { audioManager } from '../../manager/audioManager';
import { designManager } from '../../manager/designManager';
import { RedPointLogicMgr, RPointMask } from '../../manager/RedPointLogicMgr';
import { UserData } from '../../model/UserData';
import { PropItemPrefab } from '../item/PropItemPrefab';
import { BaseUILayer } from './BaseUILayer';

const { ccclass, property } = _decorator;

@ccclass('ChapterLayer')
export class ChapterLayer extends BaseUILayer {
    @property({ type: Node, tooltip: "地图名字" }) mapName: Node = null;
    @property({ type: Node, tooltip: "地图节点" }) mapItem: Node = null;
    @property({ type: Node, tooltip: "pageView" }) pageContent: Node = null;
    @property({ type: Node, tooltip: "选择按钮" }) selectBtn: Node = null;

    @property({ type: Node, tooltip: "地图详情" }) rewardLayer: Node = null;

    @property({ type: PageView, tooltip: "地图" }) mapPage: PageView = null;

    @property({ type: Prefab, tooltip: "奖励节点" }) rewardItem: Prefab = null;

    @property({ type: Label, tooltip: "提示1" }) tishiLabel: Label = null;
    @property({ type: Label, tooltip: "提示2" }) tishiLabel2: Label = null;

    @property({ type: Node, tooltip: "单倍奖励" }) btn1: Node = null;
    @property({ type: Node, tooltip: "双倍奖励" }) btn2: Node = null;


    _curPageId = 0
    _curOpenLevel = 1
    _curRewardList = []
    _curIndex = 0

    onLoad() {
        let mapData = designManager.getTable(constants.tableName.map)
        let curMap = UserData.getInstance().getCurMap()
        this._curOpenLevel = curMap
        this.setSpriteFrame2(this.mapName, "homeLayer/map_name" + (mapData[curMap - 1].id), null, constants.bundles.wwqVec)
        for (let index = 0; index < 3; index++) {
            let item = instantiate(this.mapItem)
            this.pageContent.addChild(item)
            item.getChildByName("timeLabel").getComponent(Label).string = (index * 5 + 5) + "分钟"
            item.getChildByName("chapterNum").getComponent(Label).string = "第" + curMap + "章"
        }
    }

    start() {
        // let curMap = UserData.getInstance().getCurMap() - 1
        // // this.setPage(curMap)
        let leveldata = UserData.getInstance().getLevelData(UserData.getInstance().getCurMap())
        for(let i = 0; i < 3;i++)
        if (leveldata.Time >= (this._curIndex * 5 + 5) * 60) {
            if (leveldata.ReceiveState[i] == 0) {
                this.mapPage.scrollToPage(i)
                this.setPage(i)
                return
            }
        }

        this.mapPage.scrollToPage(0)
        this.setPage(0)
    }

    setPage(index) {
        let mapData = designManager.getTable(constants.tableName.map)
        let curMap = UserData.getInstance().getCurMap()
        let children = this.pageContent.children
        for (let i = 0; i < children.length; i++) {
            let element = children[i];
            element.getChildByName("light").active = i == index
            if (i == index) {
                element.scale = v3(1, 1, 1)
            } else {
                element.scale = v3(0.8, 0.8, 1)
            }
        }

        this.tishiLabel.string = "生存超过" + (index * 5 + 5) + "分钟"
        this.tishiLabel2.string = "生存超过" + (index * 5 + 5) + "分钟才可领取"

        this._curIndex = index
        this._curRewardList = mapData[curMap - 1]["reward" + (index + 1)]

        //  this._curRewardList.push([204,1000])
        this.updateBtnState()
        this.rewardLayer.removeAllChildren()
        for (let i = 0; i < this._curRewardList.length; i++) {
            let element = this._curRewardList[i];
            //  let dataArr = this.stringToArr(element)
            let item = instantiate(this.rewardItem)
            item.position = v3(0, 0, 0)
            this.rewardLayer.addChild(item)
            item.getComponent(PropItemPrefab).setView(element[0], element[1])
        }
    }

    updateBtnState() {
        let leveldata = UserData.getInstance().getLevelData(UserData.getInstance().getCurMap())
        this.btn1.getComponent(Button).interactable = false
        this.btn2.getComponent(Button).interactable = false

        this.btn2.getComponent(Sprite).color = constants.colors.yin.parseColor()
        this.btn1.getComponent(Sprite).color = constants.colors.yin.parseColor()
        RedPointLogicMgr.ins().setRPointView(this.btn1,null,false)
        if (leveldata.Time >= (this._curIndex * 5 + 5) * 60) {
            if (leveldata.ReceiveState[this._curIndex] == 0) {
                this.btn1.getComponent(Button).interactable = true
                this.btn1.getComponent(Sprite).color = constants.colors.white.parseColor()
                this.btn1.getChildByName("Label").getComponent(Label).string = "领 取"
                RedPointLogicMgr.ins().setRPointView(this.btn1,null,true)
            } else {
                this.btn1.getChildByName("Label").getComponent(Label).string = "已领取"
            }
            if (leveldata.ReceiveState[this._curIndex] < 2) {
                this.btn2.getComponent(Button).interactable = true
                this.btn2.getComponent(Sprite).color = constants.colors.white.parseColor()
            }
        } else {
            this.btn1.getChildByName("Label").getComponent(Label).string = "领 取"
        }
    }

    scrowPage(event) {
        myLog.i("event ", event)
        this.setPage(event._curPageIdx)
    }

    onGetReward() {
        audioManager.playEffect("btnClick")

        let curRewardArr = UserData.getInstance().tobePropItem(this._curRewardList)
        UserData.getInstance().getRewardProp(curRewardArr, 1)
        this.showGetReward(curRewardArr)
        let leveldata = UserData.getInstance().getLevelData(this._curOpenLevel)
        leveldata.ReceiveState[this._curIndex] = 1
        UserData.getInstance().setLevelData(leveldata)
        this.updateBtnState()
     //   RedPointLogicMgr.ins().sendValueSettingMsg(RPointMask.RPM_PropWear, false)
    }

    onGetRewardDouble() {
        audioManager.playEffect("btnClick")

        sdkManager.openAd("章节宝箱双倍领取" + (this._curIndex * 5 + 5) + "分钟", (st: number) => {
            if (st == 1) {
                let curRewardArr = UserData.getInstance().tobePropItem(this._curRewardList)

                UserData.getInstance().getRewardProp(curRewardArr, 2)
                this.showGetReward(curRewardArr)

                let leveldata = UserData.getInstance().getLevelData(this._curOpenLevel)
                leveldata.ReceiveState[this._curIndex] = 2
                UserData.getInstance().setLevelData(leveldata)
                this.updateBtnState()
            }
        });
    }


    onDisable() {
    }

    onDestroy() {
    }

    backHome() {
        audioManager.playEffect("btnClick")
        myLog.i("backHome")
        this.openLayer(constants.layers.HomeLayer);
        this.closeLayer()
    }

}

