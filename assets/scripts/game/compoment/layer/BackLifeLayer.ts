import { Color, Node, tween, v3, _decorator } from 'cc';
import { sdkManager } from '../../../sdk/sdkManager';
import { Channel, tyqAdManager } from '../../../tyqSDK/tyqAdManager';
import { cocosUtil } from '../../../utils/cocosUtil';
import { localText } from '../../data/localText';
import { designManager } from '../../manager/designManager';
import { mapModel } from '../../model/mapModel';
import { UserData } from '../../model/UserData';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass('BackLifeLayer')
export class BackLifeLayer extends BaseLayer {

    timeNode: Node;
    time: number = 9;

    diamondNumNode: Node;

    onLoad() {
        super.onLoad();

        this.timeNode = this.getNodeByPath("ui/time/time");
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
        if (designManager.config.backLifeCount > 0 && mapModel.mapSystem.backlifeCount >= designManager.config.backLifeCount) {
            // 复活次数已达上限
            mapModel.mapSystem.doSettlement(false);
            this.closeLayer();
            return;
        }
        tween(this.timeNode).delay(0.2).to(0.6, { scale: v3(1.3, 1.3, 1) }).call(() => {
            this.time--;
            if (this.time < 0) {
                this.time = 0;
                if (tyqAdManager.getChannel() == Channel.H5_4399) {
                    this.onClickBtnClose()
                }
            }
            this.setString(this.timeNode, this.time);
        }).to(0.6, { scale: v3(1, 1, 1) }).union().repeat(10).start();

        this.setString(this.diamondNumNode, "x" + designManager.config.backLifeDiamond);
        if (UserData.getInstance().baoshi < designManager.config.backLifeDiamond) {
            cocosUtil.setRenderableColor(this.diamondNumNode, Color.RED);
        } else {
            cocosUtil.setRenderableColor(this.diamondNumNode, Color.WHITE);
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

    roleBackLife() {
        mapModel.mapSystem.backlifeCount++;
        mapModel.player.backLife();
        this.closeLayer();
    }

    onClickBtnClose() {
        mapModel.mapSystem.doSettlement(false);
        this.closeLayer();
    }

    onClickBtnAd() {
        sdkManager.openAd("复活", (st: number) => {
            if (st == 1) {
                this.roleBackLife();
            }
        });
    }

    onClickBtnDiamond() {
        if (UserData.getInstance().baoshi < designManager.config.backLifeDiamond) {
            this.createNotice(localText.lackDiamond);
            return;
        }
        UserData.getInstance().useBaoShi(-designManager.config.backLifeDiamond, true);
        this.roleBackLife();
    }

}

