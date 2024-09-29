import { Node, _decorator } from 'cc';
import { cocosUtil } from '../../../utils/cocosUtil';
import { msgac } from '../../data/msgac';
import { serverMsg } from '../../other/serverMsg';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass('BackHomeLayer')
export class BackHomeLayer extends BaseLayer {

    uiNode: Node;

    onLoad() {
        super.onLoad();

        this.uiNode = this.getNodeByPath("ui");
        this.isShowBannerAd = true;
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
        cocosUtil.tweenScaleIn2(this.uiNode);
    }

    onButtonClick(node: Node, name: string) {
        switch (name) {
            default:
                break;
        }
    }

    onClickBtnGoOn() {
        this.closeLayer();
    }

    onClickBtnExit() {
        this.closeLayer();
        serverMsg.send(msgac.mapLeave);
    }

}

