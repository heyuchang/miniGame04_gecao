import { instantiate, Label, Node, Prefab, sp, Sprite, SpriteFrame, v3, _decorator } from 'cc';
import { sdkManager } from '../../../sdk/sdkManager';
import { tyqSDK } from '../../../tyqSDK/tyqSDK';
import { constants } from '../../data/constants';
import { designManager } from '../../manager/designManager';
import { PropItem, UserData } from '../../model/UserData';
import { PropItemPrefab } from '../item/PropItemPrefab';
import { BaseUILayer } from './BaseUILayer';

const { ccclass, property } = _decorator;

@ccclass('PyramidDrawLayer')
export class PyramidDrawLayer extends BaseUILayer {

    @property({ type: Node }) btnClose: Node = null;

    @property({ type: Node }) propItem: Node = null;

    @property({ type: Node }) itemLayer: Node = null;

    @property({ type: Label }) coinLabel: Label = null;


    private items = []

    _index = 0
    _dtTime = 0
    _isStartRun = false
    _endIndex = 0
    _drawItemArr = []

    _isDoubleDraw = false

    onLoad() {

    }


    onDisable() {
        super.onDisable();
    }

    onDestroy() {
        super.onDestroy();
    }

    start() {

        this.initItems()
    }

    closeBless() {
        this.closeLayer()
    }

    initItems() {
        let data = designManager.getRowsByType(constants.tableName.CNTM, 3)
        for (let index = 0; index < data.length; index++) {
            this._drawItemArr.push(data[index].award)
            let propItem = instantiate(this.propItem)
            this.itemLayer.getChildByName("node" + (index + 1)).addChild(propItem)
            this.items[index] = propItem
            propItem.position = v3(0, 0, 0)
            propItem.getComponent(PropItemPrefab).setView(data[index].award[0][0], data[index].award[0][1], PropItemPrefab.Type_UnTouch)
            propItem.getComponent(PropItemPrefab).setScale(109)
            propItem.getChildByName("xuanzhong").active = false
        }
        this.initItemState()
    }

    initItemState() {
        for (let index = 0; index < 10 && index < this.items.length; index++) {
            let drawItem = this.items[index]
            drawItem.getChildByName("grayMask").active = UserData.getInstance().$pyramidState[index] == 1
            drawItem.getChildByName("xuanzhong").active = false
        }
        let drawItem = designManager.config["jinzita"]
        this.coinLabel.string = drawItem[UserData.getInstance().$pyramidDrawTime]

    }

    protected update(dt: number): void {
        if (!this._isStartRun) {
            return
        }
        this._dtTime += dt
        if (this._dtTime > 0.1) {
            this._dtTime = 0
            this._index++
            for (let index = 0; index < 10; index++) {
                this.items[index].getChildByName("xuanzhong").active = false
            }
            let itemsIndex = this.getDrawIndex(this._index, this._index >= this._endIndex)
            this.items[itemsIndex].getChildByName("xuanzhong").active = true
            if (this._index >= this._endIndex) {
                this._isStartRun = false
                let curBet = this._drawItemArr[itemsIndex][0]
                let propItem: PropItem = {
                    Id: curBet[0],
                    Num: this._isDoubleDraw ? curBet[1] * 2 : curBet[1]
                };
                UserData.getInstance().getRewardProp([propItem])
                this.openLayer(constants.layers.RewardLayer, { propArr: [propItem] });

                UserData.getInstance().setPyramidState(itemsIndex)
                UserData.getInstance().$pyramidDrawTime++
                if (UserData.getInstance().$pyramidDrawTime >= 10) {
                    UserData.getInstance().$pyramidDrawTime = 0
                    UserData.getInstance().$pyramidState = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }

                this.initItemState()
            }
        }
    }

    getDrawIndex(index, isHero) {
        if (UserData.getInstance().$pyramidDrawTime == 9) {
            return 0
        }
        let arr = []
        for (let i = isHero ? 1 : 0; i < UserData.getInstance().$pyramidState.length; i++) {
            if (UserData.getInstance().$pyramidState[i] == 0) {
                arr.push(i)
            }
        }
        return arr[index % arr.length]
    }

    startDraw() {
        if (this._isStartRun) {
            return
        }
        let drawItem = designManager.config["jinzita"]
        if (UserData.getInstance().checkAndUseBaoshi(drawItem[UserData.getInstance().$pyramidDrawTime])) {
            tyqSDK.eventSendCustomEvent("庆典消耗钻石——"+drawItem[UserData.getInstance().$pyramidDrawTime])
            this._isStartRun = true
            this._isDoubleDraw = false
            if (UserData.getInstance().$pyramidDrawTime == 9) {
                this._endIndex = 10
            } else {
                this._endIndex = Math.floor(Math.random() * 10) + 20 - UserData.getInstance().$pyramidDrawTime
            }
            this._index = 0
        }
        else {
            this.toast("钻石不足")
            this.openLayer(constants.layers.RewardItemLayer, { propId: 801, num: designManager.config.adDiamond })
        }
    }

    doubleDraw() {
        let self = this
        sdkManager.openAd("参与庆典", function (st) {
            if (st == 1) {
                if (self._isStartRun) {
                    return
                }
                self._isStartRun = true
                if (UserData.getInstance().$pyramidDrawTime == 9) {
                    self._endIndex = 10
                } else {
                    self._endIndex = Math.floor(Math.random() * 10) + 20 - UserData.getInstance().$pyramidDrawTime
                }
                self._index = 0
              //  self._isDoubleDraw = true
            }
        })
    }
}

