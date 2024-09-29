import { find, _decorator } from 'cc';
import { constants } from '../../data/constants';
import { designManager } from '../../manager/designManager';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass('PropInfoLayer2')
export class PropInfoLayer2 extends BaseLayer {

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
        let row = designManager.getRowById(constants.tableName.prop, this.layerData.id);
        this.setString(this.getNodeByPath("ui/info"), row.info);
        this.setString(this.getNodeByPath("ui/name/text"), row.name);

        this.setPropItem(row.id, this.getNodeByPath("ui/propItem/icon"), 0, this.getNodeByPath("ui/propItem/bg"));

        let numNode = this.getNodeByPath("ui/propItem/num");
        if (this.layerData.num != undefined) {
            numNode.active = true;
            this.setString(find("val", numNode), this.layerData.num);
        } else {
            numNode.active = false;
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

    onClickBg() {
        this.closeLayer();
    }

}

