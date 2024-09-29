import { _decorator, Node, Prefab, instantiate, v3, Button, tween, UIOpacity, UITransform, Label, RichText, Quat } from 'cc';
import { myLog } from '../../../common/myLog';
import { constants } from '../../data/constants';
import { audioManager } from '../../manager/audioManager';
import { designManager } from '../../manager/designManager';
import { PropItemPrefab } from '../item/PropItemPrefab';

import { BaseUILayer } from './BaseUILayer';
const { ccclass, property } = _decorator;

@ccclass('BlessResultLayer')
export class BlessResultLayer extends BaseUILayer {

    @property({ type: Node, tooltip: "道具选择容器" }) propBlessLayer: Node[] = [];
    @property({ type: Node, tooltip: "道具结果容器" }) BlessResultLayer: Node = null;

    @property({ type: Prefab, tooltip: "道具节点" }) propItem: Prefab = null;

    @property({ type: Node }) btnlayer: Node = null;
    @property({ type: Label }) propNameLab: Label = null;
    @property({ type: Node }) attrIcon: Node = null;
    @property({ type: Label }) attrlabel: Label = null;
    @property({ type: Label }) attrNumLab1: Label = null;
    @property({ type: Label }) attrNumLab: Label = null;

    @property({ type: Node }) attrNodebg: Node = null;

    @property({ type: Node }) title: Node = null;


    onLoad() {
        myLog.i("BlessResultLayer onLoad")
        this.fitNodeWidget(this.btnlayer, 0)
    }

    

    onEnable() {
        myLog.i("BlessResultLayer onEnable")
        super.onEnable();
        let blessId = this.layerData.blessId
        let getPropId = this.layerData.getPropId
        for (let i = 0; i < 3; i++) {
            let item = instantiate(this.propItem)
            item.position = i == 2 ? v3(0, 0, 0) : v3(0, 10, 0)
            item.name = "prop"
            this.propBlessLayer[i].addChild(item)
            item.getComponent(PropItemPrefab).setScale(120)
            item.getComponent(PropItemPrefab).setView(blessId, 1, PropItemPrefab.Type_HideNum | PropItemPrefab.Type_UnTouch)
        }
        this.startAnimal()

        let propData = designManager.getRowById(constants.tableName.prop, blessId)
        let propData2 = designManager.getRowById(constants.tableName.prop, getPropId)

        this.propNameLab.string = propData.name

        if (propData.atk > 0) {
            this.setSpriteFrame2(this.attrIcon, "heroLayer/ui_gj", null, constants.bundles.wwqVec)
            this.attrNumLab.string = "+" + propData2.atk
            this.attrNumLab.color = constants.colors.blue.parseColor()
            this.attrlabel.string = "攻击"
            this.attrNumLab1.string = "" + propData.atk
        } else if (propData.hp > 0) {
            this.attrNumLab.string = "+" + propData2.hp
            this.setSpriteFrame2(this.attrIcon, "heroLayer/ui_sm", null, constants.bundles.wwqVec)
            this.attrlabel.string = "生命"
            this.attrNumLab.color = constants.colors.green.parseColor()
            this.attrNumLab1.string = "" + propData.hp
        }

        this.attrNodebg.active = false
    }

    startAnimal() {
        // let quat: Quat = new Quat();
        // let quat2: Quat = new Quat();
        // Quat.fromEuler(quat, 0, 30, 0);
        // Quat.fromEuler(quat2, 0, -30, 0);
        tween(this.propBlessLayer[0]).delay(1).to(0.1, { position: v3(15, 268, 0) }).hide().start()
        tween(this.propBlessLayer[1]).delay(1).to(0.1, { position: v3(15, 268, 0) }).hide().start()
        let getPropId = this.layerData.getPropId
        let item = this.propBlessLayer[2].getChildByName("prop")
        let self = this
        tween(this.propBlessLayer[2]).delay(1).hide().delay(0.8).call(function () {
            item.getComponent(PropItemPrefab).setView(getPropId, 1, PropItemPrefab.Type_HideNum | PropItemPrefab.Type_UnTouch)
            self.attrNodebg.active = true
            self.btnlayer.active = true
        }).show().set({ scale: v3(0, 0, 0) }).to(0.2, { scale: v3(1, 1, 1) }).start()
        tween(this.attrNodebg).delay(1.8).to(0.1, { scale: v3(1.2, 1.2, 1.2) }).to(0.1, { scale: v3(1, 1, 1) }).start()

        tween(this.attrIcon).hide().delay(1.9).show().start()
        tween(this.propNameLab.node).hide().delay(1.9).show().start()
        tween(this.attrNumLab.node).hide().delay(2.1).show().start()
        tween(this.attrNumLab1.node).hide().delay(2.1).show().start()
        tween(this.title).hide().delay(1.7).show().start()

        // tween(this.propBlessLayer[0]).to(0.2, { rotation:quat}).to(0.2, { rotation:quat2}).to(0.2, { rotation:quat}).to(0.2, { rotation:quat2}).to(0.3,{position:v3(15,268, 0)}).start()
        // tween(this.propBlessLayer[1]).to(0.2, { rotation:quat}).to(0.2, { rotation:quat2}).to(0.2, { rotation:quat}).to(0.2, { rotation:quat2}).to(0.3,{position:v3(15,268, 0)}).start()
    }

    onDisable() {
        super.onDisable();
    }

    onDestroy() {
        super.onDestroy();
    }

    start() {
        this.btnlayer.active = false
    }

    closeBless() {
        audioManager.playEffect("btnClick")
        this.closeLayer()
    }


}

