import { instantiate, Label, Node, Prefab, RichText, tween, UIOpacity, UITransform, v3, _decorator } from 'cc';
import { tyqSDK } from '../../../tyqSDK/tyqSDK';
import { cocosUtil } from '../../../utils/cocosUtil';
import { constants } from '../../data/constants';
import { msgac } from '../../data/msgac';
import { audioManager } from '../../manager/audioManager';
import { designManager } from '../../manager/designManager';
import { eventManager } from '../../manager/eventManager';
import { playerModel } from '../../model/playerModel';
import { UserData } from '../../model/UserData';
import { PropItemPrefab } from '../item/PropItemPrefab';
import { BaseUILayer } from './BaseUILayer';

const { ccclass, property } = _decorator;

@ccclass('BlessLayer')
export class BlessLayer extends BaseUILayer {

    @property({ type: Node, tooltip: "道具选择容器" }) propBlessLayer: Node[] = [];
    @property({ type: Node, tooltip: "道具结果容器" }) BlessResultLayer: Node = null;

    @property({ type: Prefab, tooltip: "道具节点" }) propItem: Prefab = null;

    @property({ type: Node, tooltip: "道具列表View" }) propView: Node = null;
    @property({ type: Node, tooltip: "道具列表View" }) scrollView: Node = null;
    @property({ type: Node }) resultLight: Node = null;
    @property({ type: Node, tooltip: "合成按钮" }) btnBless: Node = null;
    @property({ type: Node }) btnlayer: Node = null;
    @property({ type: Node }) blessPropNode: Node = null;

    @property({ type: Node }) attrIcon: Node = null;
    @property({ type: Label }) attrlabel: Label = null;
    @property({ type: Label }) propNameLab: Label = null;
    @property({ type: Label }) attrNumLab: Label = null;
    @property({ type: RichText }) tishiText: RichText = null;

    @property({ type: Node }) selectListNode: Node = null;
    @property({ type: Node }) selectBtnNode: Node = null;

    @property({ type: Label }) needCoinLabel: Label = null;


    @property({ type: Node }) needIcon: Node = null;


    _curBlessId = 0
    _curBlessNum = 0

    NeedBlessNum = 3

    onLoad() {
        this.fitScrollView(this.propView, 320, 600)
        this.fitNodeWidget(this.btnlayer, 30)
    }

    onEnable() {
        super.onEnable();
        eventManager.on(msgac.wearDrop, this.initList, this);
        this.btnBless.active = false
    }

    onDisable() {
        super.onDisable();
        eventManager.off(msgac.wearDrop, this.initList, this);
    }

    onDestroy() {
        super.onDestroy();
    }

    start() {
        this.selectListNode.active = false
        this._curIndex = 0
        this.initSelectData()
        this.blessPropNode.active = false
        this.tishiText.string = ""
    }

    initList() {
        let arr = UserData.getInstance().getPropSort()
        let dataArr = []
        if (this._curIndex == 0) {
            arr.forEach(element => {
                // let num = (this._curBlessId == element.id) ? element.num - this._curBlessNum : element.num
                if (this._curBlessId == element.id || this._curBlessId <= 0) {
                    let curprop = designManager.getRowById(constants.tableName.prop, element.id)
                    if (curprop.quality < 5) {
                        let num = element.num
                        for (let i = 0; i < num; i++) {
                            dataArr.push([element.id, element.iswear == 1 && i == 0, i < this._curBlessNum])
                        }
                    }
                }
            });
        } else {
            arr.forEach(element => {
                // let num = (this._curBlessId == element.id) ? element.num - this._curBlessNum : element.num
                if (this._curBlessId == element.id || this._curBlessId <= 0) {
                    let curprop = designManager.getRowById(constants.tableName.prop, element.id)
                    if (curprop.wearIndex == this._curIndex && curprop.quality < 5) {
                        let num = element.num
                        for (let i = 0; i < num; i++) {
                            dataArr.push([element.id, element.iswear == 1 && i == 0, i < this._curBlessNum])
                        }
                    }
                }
            });
        }

        this.scrollViewSetData(this.scrollView, dataArr, this.initItem, [this._curBlessId])
    }

    initItem(itemUI: Node, item: any, index: number, data) {
        if (item[0] == data[0] || data[0] == 0) {
            itemUI.getComponent(PropItemPrefab).setView(item[0], 1, PropItemPrefab.Type_HideNum | PropItemPrefab.Type_UnTouch)
        } else {
            itemUI.getComponent(PropItemPrefab).setView(item[0], 1, PropItemPrefab.Type_HideNum | PropItemPrefab.Type_UnTouch | PropItemPrefab.Type_Grey)
        }
        itemUI.getChildByName("wear").active = item[1]
        itemUI.getChildByName("gou").active = item[2]
        if (item[2]) {
            itemUI.getChildByName("grayMask").active = true
        }
        itemUI.getComponent(PropItemPrefab).setScale(125)
    }

    selectProp(event) {

        let itemData = event.target.item
        if (itemData[2]) {
            return
        }
        if (this._curBlessNum >= this.NeedBlessNum) {
            this.toast("合成材料已经足够")
            return
        }
        let propid = itemData[0]
        let pos = event.target.parent.getComponent(UITransform).convertToWorldSpaceAR(event.target.position)
        if (propid != this._curBlessId && this._curBlessId != 0) {
            return
        }

        this.addSelectProp(propid, 1, pos)
    }

    addSelectProp(propid, num = 1, startp = null) {
        this._curBlessId = propid
        for (let index = 0; index < num; index++) {
            let item = this.propBlessLayer[this._curBlessNum].getChildByName("prop")
            if (item == null) {
                item = instantiate(this.propItem)
                item.position = v3(0, 0, 0)
                item.name = "prop"
                this.propBlessLayer[this._curBlessNum].addChild(item)
                item.getComponent(PropItemPrefab).setScale(120)
            }
            item.on(Node.EventType.TOUCH_END, this.unSelectProp, this);
            item.active = true
            item.getComponent(PropItemPrefab).setView(propid, 1, PropItemPrefab.Type_HideNum | PropItemPrefab.Type_UnTouch)

            if (startp) {
                let p = this.propBlessLayer[this._curBlessNum].getComponent(UITransform).convertToNodeSpaceAR(startp)
                item.position = p
                tween(item).to(0.2, { position: v3(0, 0, 0) }).start()
            }

            this._curBlessNum += 1
        }

        if (this._curBlessNum < this.NeedBlessNum) {
            for (let index = this._curBlessNum; index < this.NeedBlessNum; index++) {
                let item = this.propBlessLayer[index].getChildByName("prop")
                if (item == null) {
                    item = instantiate(this.propItem)
                    item.position = v3(0, 0, 0)
                    item.name = "prop"
                    this.propBlessLayer[index].addChild(item)
                    item.getComponent(PropItemPrefab).setScale(120)
                    //   item.on(Node.EventType.TOUCH_END, this.unSelectProp, this);
                }
                item.active = true
                item.getComponent(PropItemPrefab).setView(propid, 1, PropItemPrefab.Type_HideNum | PropItemPrefab.Type_UnTouch | PropItemPrefab.Type_Grey)
            }
            this.btnBless.active = false
        } else {
            this.btnBless.active = true
        }

        let curProp = designManager.getRowById(constants.tableName.prop, this._curBlessId)
        // if(curProp.quality ==1){
        this.needCoinLabel.string = "x" + designManager.config["compose" + curProp.quality]
        if (curProp.quality == 4) {
            this.setSpriteFrame2(this.needIcon, "prop/prop_diamond2")
        } else {
            this.setSpriteFrame2(this.needIcon, "prop/prop_coin1")
        }
        //  }
        if (curProp && curProp.blessId && curProp.blessId > 0) {
            this.showResultProp([curProp.blessId])
        }
        this.selectBtnNode.active = this._curBlessNum <= 0
        this.initList()
    }

    showResultProp(...propid) {

        this.BlessResultLayer.removeAllChildren()
        if (propid) {
            propid.forEach(element => {
                let item = instantiate(this.propItem)
                item.getComponent(PropItemPrefab).setView(element, 1, PropItemPrefab.Type_HideNum)
                item.getComponent(PropItemPrefab).setScale(130)
                item.position = v3(0, 0, 0)
                // item.getComponent(Button).clickEvents = []
                this.BlessResultLayer.addChild(item)
            });
            this.showLight(this.BlessResultLayer.children.length > 0)
            this.blessPropNode.active = this.BlessResultLayer.children.length > 0
            this.showPropInfo()
            if (this.BlessResultLayer.children.length <= 0) {
                this.tishiText.string = ""
            }
        } else {
            this.showLight(false)
            this.blessPropNode.active = false
            this.tishiText.string = ""
        }
    }

    showPropInfo() {
        if (this._curBlessId <= 0) {
            return
        }
        let propData = designManager.getRowById(constants.tableName.prop, this._curBlessId)
        if (propData == null) {
            return
        }
        if (propData && propData.blessId && propData.blessId > 0) {
            var propData2 = designManager.getRowById(constants.tableName.prop, propData.blessId)
        }

        if (propData.atk > 0) {
            this.setSpriteFrame2(this.attrIcon, "heroLayer/ui_gj", null, constants.bundles.wwqVec)
            this.attrNumLab.string = "" + cocosUtil.formatNumString(propData2.atk)
            this.attrNumLab.color = constants.colors.blue.parseColor()
            this.attrlabel.string = "攻击 " + "" + cocosUtil.formatNumString(propData.atk)
        } else if (propData.hp > 0) {
            this.attrNumLab.string = "" + cocosUtil.formatNumString(propData2.hp)
            this.setSpriteFrame2(this.attrIcon, "heroLayer/ui_sm", null, constants.bundles.wwqVec)
            this.attrlabel.string = "生命 " + "" + cocosUtil.formatNumString(propData.hp)
            this.attrNumLab.color = constants.colors.green.parseColor()
        }
        this.propNameLab.string = "" + propData2.name
        if (this.NeedBlessNum - this._curBlessNum <= 0) {
            this.tishiText.string = ""
        } else {
            let propColor = ["灰色", "绿色", "蓝色", "紫色", "黄色"]
            let propColor2 = ["#818ca0", "#38ff38", "#328adc", "#ff48d7", "#ffb848"]
            this.tishiText.string = "<color=#ffffff>需要材料：" + (this.NeedBlessNum - this._curBlessNum) + "x</color><color=" + propColor2[propData.quality - 1] + ">" + propColor[propData.quality - 1] + "</color><color=#ffffff>" + propData.name + "</color>"
        }
    }

    showLight(isShow) {
        this.resultLight.active = false
        if (isShow) {
            this.resultLight.active = true
            tween(this.resultLight.getComponent(UIOpacity)).stop()
            tween(this.resultLight.getComponent(UIOpacity)).to(0.7, { opacity: 0 }).to(0.4, { opacity: 255 }).union().repeatForever().start()
        }
    }

    unSelectProp() {
        this._curBlessNum--
        let item = this.propBlessLayer[this._curBlessNum].getChildByName("prop")

        if (this._curBlessNum <= 0) {
            this._curBlessId = 0
            for (let index = 0; index < this.NeedBlessNum; index++) {
                let item = this.propBlessLayer[index].getChildByName("prop")
                if (item) {
                    item.active = false
                    item.off(Node.EventType.TOUCH_END, this.unSelectProp, this);
                }
            }
            this.showResultProp()
            //  return
        } else if (item) {
            //  item.active = false
            //  item.off(Node.EventType.TOUCH_END, this.unSelectProp, this);
            if (this._curBlessId > 0) {
                item.active = true
                item.getComponent(PropItemPrefab).setView(this._curBlessId, 1, PropItemPrefab.Type_HideNum | PropItemPrefab.Type_UnTouch | PropItemPrefab.Type_Grey)
            }
        }
        this.btnBless.active = false
        this.selectBtnNode.active = this._curBlessNum <= 0
        this.initList()
    }

    blessAction() {
        audioManager.playEffect("btnClick")

        if (this._curBlessNum < this.NeedBlessNum) {
            this.toast("需要3个合成材料")
            return
        }
        let curProp = designManager.getRowById(constants.tableName.prop, this._curBlessId)
        if (curProp) {
            let coinNum = designManager.config["compose" + curProp.quality] || 100
            if (((curProp.quality == 4 && UserData.getInstance().checkAndUseBaoshi(coinNum, true)) || (curProp.quality != 4 && UserData.getInstance().cheackAndUseCoin(coinNum, true)))) {
                if (curProp && curProp.blessId && curProp.blessId > 0) {
                    UserData.getInstance().blessProp(this._curBlessId, curProp.blessId, 0 - this._curBlessNum)
                    this.showResultProp([curProp.blessId])
                    this.clearBlessLayer()
                    this.showResultProp()
                    this.initList()
                    tyqSDK.eventSendCustomEvent("合成装备成功")
                    this.openLayer(constants.layers.BlessResultLayer, { blessId: curProp.id, getPropId: curProp.blessId });
                    playerModel.addDayTaskNum(9);
                }
            } else {
                if (curProp.quality != 4) {
                    tyqSDK.eventSendCustomEvent("合成装备金币不足")
                    this.toast("金币不足")
                    this.openLayer(constants.layers.RewardItemLayer, { propId: 101, num: designManager.config.adCoin })
                } else {
                    tyqSDK.eventSendCustomEvent("合成装备钻石不足")
                    this.toast("钻石不足")
                    this.openLayer(constants.layers.RewardItemLayer, { propId: 801, num: designManager.config.adDiamond })
                }
            }
        }
    }

    clearBlessLayer() {
        this._curBlessId = 0
        this._curBlessNum = 0
        this.tishiText.string = ""
        this.propBlessLayer[0].removeAllChildren()
        this.propBlessLayer[1].removeAllChildren()
        this.propBlessLayer[2].removeAllChildren()
    }

    allBlessProp() {
        let arr = UserData.getInstance().propData
        let result = []
        for (let index = 0; index < arr.length; index++) {
            if (arr[index].num >= this.NeedBlessNum) {
                let curProp = designManager.getRowById(constants.tableName.prop, arr[index].id)
                if (curProp && curProp.blessId && curProp.blessId > 0) {
                    result.push(curProp.blessId)
                    UserData.getInstance().blessProp(arr[index].id, curProp.blessId, 0 - this.NeedBlessNum)
                }
            }
        }

        this.showResultProp(result)
        this.clearBlessLayer()
        this.initList()
    }

    _curAutoIndex = 0
    autoBlessAction() {
        audioManager.playEffect("btnClick")

        let arr = UserData.getInstance().propData
        if (this._curBlessId > 0) {
            if (this._curBlessNum < this.NeedBlessNum) {
                for (let i = this._curAutoIndex + 1; i < arr.length + this._curAutoIndex + 1; i++) {
                    let index = i % arr.length
                    if (arr[index].id == this._curBlessId && arr[index].num - this._curBlessNum > 0) {
                        let curprop = designManager.getRowById(constants.tableName.prop, arr[index].id)
                        if (curprop.quality < 5) {
                            this._curAutoIndex = index
                            this.addSelectProp(arr[index].id, Math.min(arr[index].num - this._curBlessNum, this.NeedBlessNum - this._curBlessNum))
                            return
                        }
                    }
                }

            } else {
                for (let i = this._curAutoIndex + 1; i < arr.length + this._curAutoIndex + 1; i++) {
                    let index = i % arr.length
                    if (arr[index].num >= this.NeedBlessNum) {
                        let curprop = designManager.getRowById(constants.tableName.prop, arr[index].id)
                        if (curprop.quality < 5) {
                            this.clearBlessLayer()
                            this._curAutoIndex = index
                            this.addSelectProp(arr[index].id, this.NeedBlessNum)
                            return
                        }
                    }
                }
            }
        } else {
            for (let i = this._curAutoIndex + 1; i < arr.length + this._curAutoIndex + 1; i++) {
                let index = i % arr.length
                if (arr[index].num >= this.NeedBlessNum) {
                    let curprop = designManager.getRowById(constants.tableName.prop, arr[index].id)
                    if (curprop.quality < 5) {
                        this.clearBlessLayer()
                        this._curAutoIndex = index
                        this.addSelectProp(arr[index].id, this.NeedBlessNum)
                        return
                    }
                }
            }
        }
        this.toast("没有可以合成的装备")
    }

    closeBless() {
        audioManager.playEffect("btnClick")
        this.closeLayer()
    }

    onSelectBtnClick() {
        audioManager.playEffect("btnClick")

        this.selectListNode.active = !this.selectListNode.active
        this.setSpriteFrame2(this.selectBtnNode.getChildByName("jianxia"), this.selectListNode.active ? "heroLayer/jianshang" : "heroLayer/jianxia", null, constants.bundles.wwqVec)
    }

    _curIndex = 0
    onSelectItemClick(event, data) {
        audioManager.playEffect("btnClick")
        this._curIndex = parseInt(data)
        this.onSelectBtnClick()
        this.initSelectData()
    }

    initSelectData() {
        let selectcurbg = this.selectBtnNode.getChildByName("selectcurbg")
        if (this._curIndex == 0) {
            selectcurbg.getChildByName("propicon").active = false
            selectcurbg.getChildByName("Label").active = true
        } else {
            selectcurbg.getChildByName("propicon").active = true
            selectcurbg.getChildByName("Label").active = false
            this.setSpriteFrame2(selectcurbg.getChildByName("propicon"), "heroLayer/propicon" + this._curIndex, null, constants.bundles.wwqVec)
        }
        this.initList()
    }

}

