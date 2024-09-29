import { find, Node, _decorator } from 'cc';
import { constants } from '../../data/constants';
import { localText } from '../../data/localText';
import { msgac } from '../../data/msgac';
import { designManager } from '../../manager/designManager';
import { eventManager } from '../../manager/eventManager';
import { UserData } from '../../model/UserData';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass('SkinChangeLayer')
export class SkinChangeLayer extends BaseLayer {

    listResetPos = true;

    btnEquip: Node;
    btnGoGet: Node;

    choseId: number = 0;

    onLoad() {
        super.onLoad();

        this.btnEquip = this.getNodeByPath("ui/bottom/btns/btnEquip");
        this.btnGoGet = this.getNodeByPath("ui/bottom/btns/btnGoGet");

        this.choseId = UserData.getInstance().heroSkin;

    }

    onEnable() {
        super.onEnable();
    }

    onDisable() {
        super.onDisable();
    }

    onDestroy() {
        super.onDestroy();
    }

    initUI() {
        let arr = designManager.getRowsByType(constants.tableName.prop, constants.propTypes.skin);
        this.scrollViewSetData(this.getNodeByPath("ui/bottom/list"), arr, this.refreshSkinItem.bind(this), this.listResetPos);
        this.listResetPos = false;

        this.setRoleSkin(this.getNodeByPath("ui/top/body"), this.choseId);
        let rank = this.choseId % 2000;
        this.setSpriteFrame2(this.getNodeByPath("ui/top/skin"), "skin/skin" + rank, null, "ui");

        this.btnEquip.active = false;
        this.btnGoGet.active = false;
        if (UserData.getInstance().getPropById(this.choseId) > 0) {
            this.btnEquip.active = true;
        } else {
            this.btnGoGet.active = true;
        }
    }

    refreshSkinItem(itemUI: Node, row: any) {
        this.setSpriteFrame2(find("icon", itemUI), "prop/" + row.icon);
        let num = UserData.getInstance().getPropById(row.id);
        let yinNode = find("yin", itemUI);
        let choseNode = find("chose", itemUI);
        if (num > 0) {
            yinNode.active = false;
        } else {
            yinNode.active = true;
        }
        if (row.id == this.choseId) {
            choseNode.active = true;
        } else {
            choseNode.active = false;
        }
    }

    processEvent(ac: any, data: any) {
        switch (ac) {
            default:
                break;
        }
    }

    onButtonClick(node: Node, name: string) {
        switch (name) {
            default:
                break;
        }
    }

    onClickSkinItem(node: any) {
        let row = node.item;
        this.choseId = row.id;
        this.initUI();
    }

    closeLayer() {
        super.closeLayer();
        if (this.layerCb) {
            this.layerCb();
        }
    }

    onClickBtnGoGet() {
        this.closeLayer();
        let obj: any = {
            layerName: constants.layers.RewardSkinLayer
        };
        if (this.choseId % 2000 == 5) {
            obj.layerName = constants.layers.DaySignLayer;
        }
        eventManager.send(msgac.jumpLayer, obj);
    }

    onClickBtnEquip() {
        let num = UserData.getInstance().getPropById(this.choseId);
        if (num <= 0) {
            this.createNotice(localText.notHas);
            return;
        }
        UserData.getInstance().heroSkin = this.choseId;
        this.createNotice(localText.equipSuccess);
    }

}

