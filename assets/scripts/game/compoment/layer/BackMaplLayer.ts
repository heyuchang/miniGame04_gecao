import { _decorator } from 'cc';
import { UserData } from '../../model/UserData';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass('BackMapLayer')
export class BackMapLayer extends BaseLayer {

    onLoad() {
        super.onLoad();
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

    onClickBtnClose() {
        UserData.getInstance().mapData = null;
        this.closeLayer();
    }

    onClickBtnSure() {
        let mapId = UserData.getInstance().mapData.mapModel.mapId;
        this.layerCb(mapId);
        this.closeLayer();
    }

}

