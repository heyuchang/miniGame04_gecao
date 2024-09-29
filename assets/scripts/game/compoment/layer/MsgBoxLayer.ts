import { _decorator } from 'cc';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass("MsgBoxLayer")
export class MsgBoxLayer extends BaseLayer {

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
        let hint = this.layerData.hint;
        this.setString(this.getNodeByPath("ui/hint"), hint);
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

