import { Node, Label, Sprite, UITransform, v3, _decorator } from "cc";
import { myLog } from "../../../common/myLog";
import { constants } from "../../data/constants";
import { audioManager } from "../../manager/audioManager";
import { designManager } from "../../manager/designManager";
import { BaseUILayer } from "../layer/BaseUILayer";

const { ccclass, property } = _decorator;

@ccclass('PropItemPrefab')
export class PropItemPrefab extends BaseUILayer {

    @property({ type: Sprite, tooltip: "图标" }) icon: Sprite = null;
    @property({ type: Sprite, tooltip: "图标背景" }) bg: Sprite = null;
    @property({ type: Node, tooltip: "灰色遮罩" }) greybg: Node = null;
    @property({ type: Sprite, tooltip: "图标背景" }) typeIcon: Sprite = null;


    @property({ type: Label, tooltip: "数量" }) numLabel: Label = null;

    private _propId: number = 0
    private _propFlag = 0

    public static Type_HideNum = 1
    public static Type_UnWear = 1 << 1 // 详情可以穿戴按钮
    public static Type_ToWear = 1 << 2 // 详情可以卸下按钮
    public static Type_Bless = 1 << 3   // 点击选择合成 
    public static Type_UnTouch = 1 << 4  // 不能点击
    public static Type_Grey = 1 << 5  // 灰色遮罩
    public static Type_ShowType = 1 << 6  // 展示类型图标
    public static Type_UnKnow = 1 << 7  // 展示类型图标
    public static Type_BigIcon = 1 << 8  // 展示类型图标
    public static Type_OnlyIcon = 1 << 9  // 展示类型图标


    start() {

    }

    public get propId() {
        return this._propId
    }

    setView(id, num, flag = 0) {
        this._propId = id
        let propdata = designManager.getRowById(constants.tableName.prop, id)
        let self = this

        let fun = function (sprite) {
            self.setImageCustomSize(sprite, 95)
        }
        this.node.off(Node.EventType.TOUCH_END, this.openInfo, this);



        if (flag & PropItemPrefab.Type_UnKnow) {
            this.numLabel.string = "x??"
            this.setSpriteFrame2(this.icon.node, "prop/prop_unknow", fun, constants.bundles.icon)
            this.greybg.active = false
            this.typeIcon.node.active = false
            return
        }


        if (propdata) {
            let icon = "prop/" + propdata.icon
            if (propdata.type == 11) {
                let weaponData = designManager.getRowById(constants.tableName.weapon, propdata.weaponid)
                icon = "weapon/" + weaponData.icon
            }
            this.setSpriteFrame2(this.bg.node, "prop/propbg" + propdata.quality, null, constants.bundles.icon)
            this.setSpriteFrame2(this.typeIcon.node, "prop/propType" + propdata.quality, null, constants.bundles.icon)
            this.setSpriteFrame2(this.icon.node, icon, fun, constants.bundles.icon)

            if (!(flag & PropItemPrefab.Type_UnTouch) && (propdata.type == 8 || propdata.type == 11)) {
                this.node.on(Node.EventType.TOUCH_END, this.openInfo, this);
            }
        } else {
            this.setSpriteFrame2(this.bg.node, "heroLayer/propbg", null, constants.bundles.wwqVec)
            this.setSpriteFrame2(this.icon.node, "prop/prop_seat_" + num, fun, constants.bundles.icon)
            this.numLabel.node.active = false
            this.greybg.active = false
            this.typeIcon.node.active = false
            return
        }

        if (flag & PropItemPrefab.Type_OnlyIcon) {
            this.bg.node.active = false
            this.greybg.active = false
            this.typeIcon.node.active = false
            this.numLabel.node.active = false

            return
        }


        if (flag & PropItemPrefab.Type_BigIcon) {
            this.greybg.active = false
            this.typeIcon.node.active = false
            this.bg.node.active = false
            this.node.scale = v3(3, 3, 3)
            this.numLabel.node.active = false
            return
        }


        this.numLabel.string = "X" + num
        this._propFlag = flag

        //  myLog.i("prop : ", this._propId, flag)
        if (flag & PropItemPrefab.Type_HideNum) {
            this.numLabel.node.active = false
        }

        if (flag & PropItemPrefab.Type_Grey) {
            this.greybg.active = true
        } else {
            this.greybg.active = false
        }

        if (flag & PropItemPrefab.Type_ShowType) {
            this.typeIcon.node.active = true
        } else {
            this.typeIcon.node.active = false
        }
    }

    openInfo() {
        myLog.i("点击装备")
        audioManager.playEffect("btnClick")

        this.openLayer(constants.layers.PropInfoLayer, { propId: this._propId, flag: this._propFlag })
    }

    setScale(width) {
        let bgWidth = this.bg.getComponent(UITransform).width
        let bgHeight = this.bg.getComponent(UITransform).height
        let scale = width / bgWidth
        this.node.scale = v3(scale, scale, 1)

        this.node.getComponent(UITransform).width = bgWidth * scale
        this.node.getComponent(UITransform).height = bgHeight * scale
    }

    changeBg(resPath, bundleName) {
        this.setSpriteFrame2(this.bg.node, resPath, null, bundleName)
        
    }

}