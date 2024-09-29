import { Label, Node, sp, Sprite, SpriteFrame, tween, v3, _decorator } from 'cc';
import { sdkManager } from '../../../sdk/sdkManager';
import { constants } from '../../data/constants';
import { designManager } from '../../manager/designManager';
import { eventManager } from '../../manager/eventManager';
import { PropItem, UserData } from '../../model/UserData';
import { RewardLayer } from './RewardLayer';

const { ccclass, property } = _decorator;

@ccclass('GuessResultLayer')
export class GuessResultLayer extends RewardLayer {

    @property({ type: Node }) btnClose: Node = null;

    @property(Sprite) guessItem2: Sprite = null;
    @property(Sprite) guessItem1: Sprite = null;
    @property(sp.Skeleton) spk: sp.Skeleton = null;

    @property({ type: Node }) btnNode: Node = null;

    @property({ type: Node }) resultNode: Node = null;

    @property({ type: Node }) rewardNode: Node = null;

    @property(SpriteFrame) guessSprite: SpriteFrame[] = [];
    @property(SpriteFrame) guessNameSprite: SpriteFrame[] = [];

    _curSelectGuess = -1
    private _curSelectBet: any;

    private _propItem = null

    onLoad() {

    }
    onEnable() {

    }


    onDisable() {
        super.onDisable();
    }

    onDestroy() {
        super.onDestroy();
    }

    start() {
        ///   console.log("tyqSDK.showCustomRectCenterAd")
        let curGuess = this.layerData.myGuess
        this._curSelectBet = this.layerData.selectBet
        this.guessItem1.spriteFrame = this.guessSprite[parseInt(curGuess)]
        this.selfNodeGuess.getChildByName("cloth1").getComponent(Sprite).spriteFrame = this.guessNameSprite[parseInt(curGuess)]

        this._curSelectGuess = this.layerData.myGuess
        this.selfNodeGuess.position = v3(-380, 0, 0)
        this.armNodeGuess.position = v3(380, 0, 0)
        let self = this
        tween(this.selfNodeGuess).to(0.2, { position: v3(-190, 0, 0) }).call(function () {
            self._isStartRun = true
        }).start()
        tween(this.armNodeGuess).to(0.2, { position: v3(190, 0, 0) }).start()

        this.resultNode.active = false
        this.rewardNode.active = false
        this.btnNode.active = false
    }

    closeBless() {
        eventManager.send("initGuess")

        this.closeLayer()
    }

    _index = 0
    _dtTime = 0
    _isStartRun = false

    @property(Node) armNodeGuess: Node = null;
    @property(Node) selfNodeGuess: Node = null;


    protected update(dt: number): void {
        if (!this._isStartRun) {
            return
        }
        this._dtTime += dt
        if (this._dtTime > 0.1) {
            this._dtTime = 0
            this.armNodeGuess.getChildByName("icon").getComponent(Sprite).spriteFrame = this.guessSprite[this._index % 3]
            this.armNodeGuess.getChildByName("cloth1").getComponent(Sprite).spriteFrame = this.guessNameSprite[this._index % 3]

            this._index++
            if (this._index > 20) {
                this._isStartRun = false
                this.openResult()
            }
        }
    }

    openResult() {

        let result = Math.floor(Math.random() * 3)
        let str = ["石头", "剪刀", "布"]
        console.log("我方：", str[this._curSelectGuess])
        console.log("敌方：", str[result])
        this.armNodeGuess.getChildByName("icon").getComponent(Sprite).spriteFrame = this.guessSprite[result]
        this.armNodeGuess.getChildByName("cloth1").getComponent(Sprite).spriteFrame = this.guessNameSprite[result]

        let stoneDraw = designManager.config["stoneDraw"]
        //console.log("stoneDraw ", stoneDraw)
        let multiplier = 1
        this.resultNode.active = true
        this.resultNode.position = v3(0, 550, 0)
        tween(this.resultNode).to(0.2, { position: v3(0, 480, 0) }).start()

        let result1 = this.resultNode.getChildByName("result1")

        result1.position = v3(0, 150, 0)
        let self = this
        tween(result1).to(0.2, { position: v3(0, 33, 0) }).call(function () {
            self.btnNode.active = true
        }).start()

        if (this._curSelectGuess - result == -1 || this._curSelectGuess - result == 2) {
            console.log(" ---- win")
            multiplier = stoneDraw[0]
            this.setSpriteFrame2(result1, "activityRes/result1", null, constants.bundles.wwqVec)
            this.showYanhua()
        } else if (this._curSelectGuess == result) {
            console.log(" ---- 平局")
            multiplier = stoneDraw[1]
            this.setSpriteFrame2(result1, "activityRes/result2", null, constants.bundles.wwqVec)
        } else {
            this.setSpriteFrame2(result1, "activityRes/result3", null, constants.bundles.wwqVec)
            console.log(" ---- lose")
            multiplier = stoneDraw[2]
        }

        let curBet = designManager.config["stone1"][this._curSelectBet]
        let propItem: PropItem = {
            Id: curBet[0],
            Num: curBet[1] * multiplier
        };

        let propdata = designManager.getRowById(constants.tableName.prop, curBet[0])
        this.setSpriteFrame2(this.rewardNode.getChildByName("icon"), "prop/" + propdata.icon)
        this.rewardNode.active = true
        this.rewardNode.getChildByName("numLab").getComponent(Label).string = curBet[1] * multiplier + ""
        UserData.getInstance().getRewardProp([propItem])
        this._propItem = [propItem]
        //    this.openLayer(constants.layers.GuessResultLayer, { propArr: [propItem], myGuess: this._curSelectGuess, otherGuess: result });
    }

    doubleGet() {
        let self = this
        sdkManager.openAd("猜拳双倍奖励", (st: number) => {
            if (st == 1) {
                if (self._propItem)
                    UserData.getInstance().getRewardProp(self._propItem)

                self.closeBless()
            }
        });
    }
}

