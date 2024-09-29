import { Label, Node, RichText, _decorator } from 'cc';
import { constants } from '../../data/constants';
import { msgac } from '../../data/msgac';
import { designManager } from '../../manager/designManager';
import { eventManager } from '../../manager/eventManager';
import { UserData } from '../../model/UserData';
import { PropItemPrefab } from '../item/PropItemPrefab';
import { BaseUILayer } from './BaseUILayer';

const { ccclass, property } = _decorator;

@ccclass('PropInfoLayer')
export class PropInfoLayer extends BaseUILayer {


    @property({ type: Node, tooltip: "道具节点" }) propItem: Node = null;
    @property({ type: Node, tooltip: "按钮" }) btnWear: Node = null;

    @property({ type: Node, tooltip: "属性图标" }) attrIcon: Node = null;
    @property({ type: Label, tooltip: "属性" }) attrlabel: Label = null;
    @property({ type: Label, tooltip: "属性值" }) attrNumLab: Label = null;

    @property({ type: Label, tooltip: "装备详情" }) propInfoLab: Label = null;
    @property({ type: Label, tooltip: "装备名字" }) propNameLab: Label = null;

    @property({ type: Label, tooltip: "套装名字" }) suitNameLab: Label = null;

    @property({ type: RichText, tooltip: "3套属性" }) suitAttr3: RichText = null;
    @property({ type: RichText, tooltip: "5套属性" }) suitAttr5: RichText = null;
    @property({ type: Label, tooltip: "套装数量" }) suitNum: Label = null;

    @property({ type: Node, tooltip: "套装节点" }) suitNode: Node = null;


    _propId = 0
    _propFlag = 0
    _weaponLv = 0;

    onLoad() {
        super.onLoad();
        this._propId = this.layerData.propId
        this._propFlag = this.layerData.flag
        this._weaponLv = this.layerData.weaponLv;

        let propData = designManager.getRowById(constants.tableName.prop, this._propId)

        if (propData.atk > 0) {
            this.setSpriteFrame2(this.attrIcon, "heroLayer/ui_gj", null, constants.bundles.wwqVec)
            let atk = propData.atk;
            if (this._weaponLv > 0) {
                atk = UserData.getInstance().weaponOptLvEffect(atk, this._weaponLv);
            }
            this.attrNumLab.string = "+" + atk
            this.attrNumLab.color = constants.colors.blue.parseColor()
            this.attrlabel.string = "攻击"
        } else if (propData.hp > 0) {
            this.attrNumLab.string = "+" + propData.hp
            this.setSpriteFrame2(this.attrIcon, "heroLayer/ui_sm", null, constants.bundles.wwqVec)
            this.attrlabel.string = "生命"
            this.attrNumLab.color = constants.colors.green.parseColor()
        }

        this.propInfoLab.string = "" + propData.info
        this.propNameLab.string = "" + propData.name

        this.propItem.getComponent(PropItemPrefab).setView(this._propId, 0, PropItemPrefab.Type_HideNum | PropItemPrefab.Type_ShowType)
        this.btnWear.off(Node.EventType.TOUCH_END, this.unWearProp, this);
        this.btnWear.off(Node.EventType.TOUCH_END, this.wearProp, this);
        if (this._propFlag & PropItemPrefab.Type_ToWear) {
            this.btnWear.getChildByName("Label").getComponent(Label).string = "穿戴"
            this.setSpriteFrame2(this.btnWear, "btnres/ui_yellow", null, constants.bundles.common)
            this.btnWear.on(Node.EventType.TOUCH_END, this.wearProp, this);
        } else if (this._propFlag & PropItemPrefab.Type_UnWear) {
            this.btnWear.getChildByName("Label").getComponent(Label).string = "卸下"
            this.btnWear.on(Node.EventType.TOUCH_END, this.unWearProp, this);
            this.setSpriteFrame2(this.btnWear, "btnres/btn_purple", null, constants.bundles.common)
        } else {
            this.btnWear.active = false
        }

        let suitId = propData.suit_id
        if (suitId) {
            this.suitNode.active = true
            let suitData = designManager.getRowById(constants.tableName.suit, suitId)
            this.suitNameLab.string = suitData.name

            let suitNum = UserData.getInstance().getSuitNum(propData)
            this.suitNum.string = "(" + suitNum + "/5)"

            let getColor = function (num, color1, color2, str) {
                let color = suitNum >= num ? color1 : color2
                return "<color=" + color + ">" + str + "</color>"
            }

            let atkStr3 = ""
            if (suitData.effectAtk_3 > 0) {
                atkStr3 += getColor(3, "#ffffff", "#4c5061", "攻击") + getColor(3, "#1096fd", "#4c5061", " +" + suitData.effectAtk_3 + "%")
            }
            
            if (suitData.effectHP_3 > 0) {
                if (atkStr3 != "") {
                    atkStr3 += " "
                }
                atkStr3 += getColor(3, "#ffffff", "#4c5061", "血量") + getColor(3, "#38ff38", "#4c5061", " +" + suitData.effectHP_3 + "%")
            }

            this.suitAttr3.string = atkStr3

            let atkStr5 = ""
            if (suitData.effectAtk_5 > 0) {
                atkStr5 += getColor(5, "#ffffff", "#4c5061", "攻击") + getColor(5, "#1096fd", "#4c5061", " +" + suitData.effectAtk_5 + "%")
            }

            if (suitData.effectHP_5 > 0) {
                if (atkStr5 != "") {
                    atkStr5 += " "
                }
                atkStr5 += getColor(5, "#ffffff", "#4c5061", "血量") + getColor(5, "#38ff38", "#4c5061", " +" + suitData.effectHP_5 + "%")
            }
            this.suitAttr5.string = atkStr5
        } else {
            this.suitNode.active = false
        }
    }

    initBtnInfo() {

    }

    wearProp() {
        let propdata = designManager.getRowById(constants.tableName.prop, this._propId)
        UserData.getInstance().setWearProp(propdata)
        eventManager.send(msgac.wearDrop)
        this.onClose()
    }

    unWearProp() {
        let propdata = designManager.getRowById(constants.tableName.prop, this._propId)
        UserData.getInstance().unWearProp(propdata)
        eventManager.send(msgac.wearDrop)
        this.onClose()
    }

    onClose() {
        this.closeLayer()
    }

}

