import { find, _decorator } from 'cc';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass('AwardInfoLayer')
export class AwardInfoLayer extends BaseLayer {

    onLoad() {
        super.onLoad();
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
        this.setItemLayer(this.getNodeByPath("ui/itemLayer"), this.layerData.awardArr, this.refreshAwardItem.bind(this));
    }

    refreshAwardItem(itemUI: any, award: any) {
        this.setPropItem(award[0], find("icon", itemUI), award[1], find("bg", itemUI), find("num", itemUI));
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

    onClickBtnSure() {
        this.closeLayer();
    }

    onClickBg() {
        this.closeLayer();
    }

}

