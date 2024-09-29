import { find, Node, _decorator } from 'cc';
import { localText } from '../../data/localText';
import { playerModel } from '../../model/playerModel';
import { UserData } from '../../model/UserData';
import { BaseLayer } from '../base/BaseLayer';
import { eventManager } from '../../manager/eventManager';
import { msgac } from '../../data/msgac';
const { ccclass, property } = _decorator;

@ccclass('LetterLayer')
export class LetterLayer extends BaseLayer {

    awardArr = [[101, 10000], [801, 200]];

    onLoad() {
        super.onLoad();
        this.isShowBannerAd = true
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
        this.setItemLayer(this.getNodeByPath("ui/awardLayer/itemLayer"), this.awardArr, this.refreshPropItem.bind(this));

        if (playerModel.isLetterAward) {
            this.setString(this.getNodeByPath("ui/btnGet/text"), localText.hasGet);
        } else {
            this.setString(this.getNodeByPath("ui/btnGet/text"), localText.get);
        }
    }

    refreshPropItem(itemUI: Node, award: any) {
        this.setPropItem(award[0], find("icon", itemUI), award[1], find("bg", itemUI), find("num", itemUI));

        let getNode = find("get", itemUI);
        if (playerModel.isLetterAward) {
            getNode.active = true;
        } else {
            getNode.active = false;
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

    onClickBtnGet() {
        if (playerModel.isLetterAward) {
            this.createNotice(localText.hasGet);
            return;
        }
        playerModel.isLetterAward = 1;
        let arr = UserData.getInstance().addPropArrByDesign(this.awardArr);
        this.openAwardGetLayer(arr);
        this.initUI();
        eventManager.send(msgac.refreshRedPoint);
    }

    onClickBg() {
        this.closeLayer();
    }

}

