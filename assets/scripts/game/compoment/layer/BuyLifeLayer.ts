import { Node, _decorator } from 'cc';
import { sdkManager } from '../../../sdk/sdkManager';
import { msgac } from '../../data/msgac';
import { designManager } from '../../manager/designManager';
import { eventManager } from '../../manager/eventManager';
import { playerModel } from '../../model/playerModel';
import { UserData } from '../../model/UserData';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass('BuyLifeLayer')
export class BuyLifeLayer extends BaseLayer {

    diamondNumNode: Node;

    onLoad() {
        super.onLoad();

        this.diamondNumNode = this.getNodeByPath("ui/btns/btnDiamond/info/num");
        this.isShowBannerAd = true;

    }

    onEnable() {
        super.onEnable();

        UserData.getInstance().mapData = null;
    }

    onDisable() {
        super.onDisable();
    }

    onDestroy() {
        super.onDestroy();
    }

    initUI() {
        this.setString(this.diamondNumNode, "x" + designManager.config.backLifeDiamond);
    }

    onClickBtnDiamond() {
        UserData.getInstance().useBaoShi(-designManager.config.backLifeDiamond);
        playerModel.skillLifeNum++;
        this.closeLayer();
        eventManager.send(msgac.mapRefreshSkill);
    }

    onClickBtnAd() {
        sdkManager.openAd("购买复活", (st: number) => {
            if (st == 1) {
                playerModel.skillLifeNum++;
                this.closeLayer();
                eventManager.send(msgac.mapRefreshSkill);
            }
        });
    }

    closeLayer() {
        super.closeLayer();
        if (this.layerCb) {
            this.layerCb();
        }
    }

}

