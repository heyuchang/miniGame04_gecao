import { instantiate, Label, Node, Sprite, SpriteFrame, tween, v3, _decorator } from 'cc';
import { tyqSDK } from '../../../tyqSDK/tyqSDK';
import { constants } from '../../data/constants';
import { designManager } from '../../manager/designManager';
import { eventManager } from '../../manager/eventManager';
import { PropItem, UserData } from '../../model/UserData';
import { BaseUILayer } from './BaseUILayer';

const { ccclass, property } = _decorator;

@ccclass('GuessGameLayer')
export class GuessGameLayer extends BaseUILayer {

    @property({ type: Node }) btnClose: Node = null;

    @property(Node) armNodeGuess: Node = null;
    @property(Node) selectBetNode: Node = null;

    @property(Node) itemLayer: Node = null;
    @property(Node) selectGuessNode: Node = null;
    @property(Node) guessLayer: Node = null;


    @property(Label) tipLabel: Label = null;
    @property({ type: Node }) btnlayer: Node = null;


    @property(SpriteFrame) guessSprite: SpriteFrame[] = [];

    @property(Node) items: Node[] = [];
    @property(Node) guessItems: Node[] = [];

    _curSelectGuess = -1
    _curSelectBet = -1




    onLoad() {

    }

    onEnable() {
        this.addTopUILayer("TopUILayer")
        this.fitNodeWidget(this.btnlayer, 30)

    }

    onDisable() {
        super.onDisable();
        eventManager.off("initGuess",this.initGuess,this)

    }

    onDestroy() {
        super.onDestroy();
    }

    start() {
        ///   console.log("tyqSDK.showCustomRectCenterAd")
        eventManager.on("initGuess",this.initGuess,this)

        let stone1 = designManager.config["stone1"]
        console.log("stone1 = ", stone1)
        for (let index = 0; index < 6; index++) {
            if (stone1[index] && this.items[index]) {
                this.items[index].getChildByName("numLab").getComponent(Label).string = "" + stone1[index][1]
                //	this.items[index].getChildByName("gou").active = false
            }
        }
    }

    closeBless() {
        this.closeLayer()
    }

    initGuess() {
        this.selectBetNode.removeAllChildren()
        this.armNodeGuess.active = false
        let selectGuess = this.selectGuessNode.getChildByName("selectGuess")
        if (selectGuess) {
            selectGuess.removeFromParent()
        }
        this._index = 0
        this._dtTime = 0
        this._isStartRun = false

        this._curSelectGuess = -1
        this.itemLayer.active = true
        this.guessLayer.active = true

        this.tipLabel.node.active = true
        this.tipLabel.string = "默认上次选择金额，可重新选择"

        if (this._curSelectBet > -1) {
            for (let index = 0; index < 6; index++) {
                if (this.items[index]) {
                    this.items[index].getChildByName("gou").active = this._curSelectBet == index
                }
            }
        }
    }


    onSelectBet(event, data) {
        if (this._curSelectBet == data && this.selectBetNode.children.length > 0) {
            this.selectBetNode.removeAllChildren()
            this._curSelectBet = -1
            this.itemLayer.active = true

            for (let index = 0; index < 6; index++) {
                if (this.items[index]) {
                    this.items[index].getChildByName("gou").active = this._curSelectBet == index
                }
            }
            this.tipLabel.string = "请选择下注金额"
            return
        }

        this._curSelectBet = data
        //this.items[this._curSelectBet].getChildByName("icon").color = cc.Color.GRAY
        console.log("select bet = ", data)
        //	console.log("select event.target = ", event)
        let selectItem = instantiate(this.items[this._curSelectBet])
        selectItem.getChildByName("gou").active = false
        this.selectBetNode.addChild(selectItem)
        tween(selectItem).to(0.5, { position: v3(0, -30, 0) }).start()
        this.tipLabel.string = "请猜拳"
        this.itemLayer.active = false
    }

    onSelectBtn(event, data) {
        if (this._curSelectGuess >= 0) {
            return
        }

        if (this._curSelectBet < 0) {
            this.toast("请先下注")
            return
        }

        let curBet = designManager.config["stone1"][this._curSelectBet]
        let propItem: PropItem = {
            Id: curBet[0],
            Num: curBet[1]
        };
        if (!UserData.getInstance().checkUseProp(propItem)) {
            this.toast("资源不足")
            return
        }
        this._curSelectGuess = parseInt(data + "")
        // let selectItem = instantiate(this.guessItems[this._curSelectGuess])
        // selectItem.name = "selectGuess"
        // selectItem.position = v3(-300, 0, 0)
        // this.selectGuessNode.addChild(selectItem)
        this._isStartRun = true
        // let self = this
        // tween(selectItem).to(0.6, { position: v3(0, 0, 0) }).call(function () {
        //     self._isStartRun = true
        // //    self.armNodeGuess.active = true
        // }).start()

        this.tipLabel.node.active = false
        this.guessLayer.active = false
    }

    openResult() {

        let result = Math.floor(Math.random() * 3)
        let str = ["石头", "剪刀", "布"]
        console.log("我方：", str[this._curSelectGuess])
        console.log("敌方：", str[result])
        this.armNodeGuess.getChildByName("icon").getComponent(Sprite).spriteFrame = this.guessSprite[result]
        let stoneDraw = designManager.config["stoneDraw"]
        //console.log("stoneDraw ", stoneDraw)
        let multiplier = 1

        if (this._curSelectGuess - result == -1 || this._curSelectGuess - result == 2) {
            //	console.log(" ---- win")
            multiplier = stoneDraw[0]
        } else if (this._curSelectGuess == result) {
            //console.log(" ---- 平局")
            multiplier = stoneDraw[1]
        } else {
            //console.log(" ---- lose")
            multiplier = stoneDraw[2]
        }
        let curBet = designManager.config["stone1"][this._curSelectBet]
        let propItem: PropItem = {
            Id: curBet[0],
            Num: curBet[1] * multiplier
        };

        UserData.getInstance().getRewardProp([propItem])
        this.openLayer(constants.layers.GuessResultLayer, { propArr: [propItem], myGuess: this._curSelectGuess, otherGuess: result });
        this.initGuess()
    }

    _index = 0
    _dtTime = 0
    _isStartRun = false
    protected update(dt: number): void {
        if (!this._isStartRun) {
            return
        }
        this.openLayer(constants.layers.GuessResultLayer, { myGuess: this._curSelectGuess, selectBet: this._curSelectBet });
        this._isStartRun = false
        tyqSDK.eventSendCustomEvent("参与猜拳")
        return

        this._dtTime += dt
        if (this._dtTime > 0.1) {
            this._dtTime = 0
            this.armNodeGuess.getChildByName("icon").getComponent(Sprite).spriteFrame = this.guessSprite[this._index % 3]
            this._index++
            if (this._index > 20) {
                this._isStartRun = false
                this.openResult()
            }
        }
    }
}

