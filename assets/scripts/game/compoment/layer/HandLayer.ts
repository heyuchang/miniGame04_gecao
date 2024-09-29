import { Node, _decorator } from 'cc';
import { msgac } from '../../data/msgac';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass('HandLayer')
export class HandLayer extends BaseLayer {

    onLoad() {
        super.onLoad();
    }

    onEnable() {
        super.onEnable();

        this.addEventArr([
            msgac.globalTouchStart
        ]);
    }

    onDisable() {
        super.onDisable();
    }

    onDestroy() {
        super.onDestroy();
    }

    initUI() {

    }

    globalTouchStartRet(data: any) {
        this.closeLayer();
        if (this.layerCb) {
            this.layerCb();
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

}

