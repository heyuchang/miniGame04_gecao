import { find, Node, _decorator } from 'cc';
import { ChannelFlag, tyqSDK } from '../../../tyqSDK/tyqSDK';
import { cocosUtil } from '../../../utils/cocosUtil';
import { constants } from '../../data/constants';
import { designManager } from '../../manager/designManager';
import { mapModel } from '../../model/mapModel';
import { UserData } from '../../model/UserData';
import { AnimationCtrl } from '../base/AnimationCtrl';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass('TowerFloorLayer')
export class TowerFloorLayer extends BaseLayer {

    floorLayer: Node;
    floor: number = 1;

    onLoad() {
        super.onLoad();

        this.floorLayer = this.getNodeByPath("ui/floorLayer");

        if (tyqSDK.getSwitchValue("tyq_HeroLayer_open") != 1) {
            this.getNodeByPath("ui/btnRole").active = false
        }

        if (tyqSDK.channel != ChannelFlag.WECHAT_JJWS) {
            this.getNodeByPath("ui/btnRole").active = true
        }
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
        let arr = [];
        let mapId = this.layerData.id;
        let floor = UserData.getInstance().getTowerMapInfo(mapId).floor;
        this.floor = floor;
        let tmp = 2;
        while (true) {
            let f = floor - tmp;
            tmp--;
            if (tmp < 0) {
                break;
            }
            if (f <= 0) {
                continue;
            }
            arr.push(f);
        }
        let maxFloor = designManager.getTable(constants.tableName.towerFloor).length;
        tmp = floor;
        while (arr.length <= 7) {
            arr.push(tmp);
            tmp++;
            if (tmp > maxFloor) {
                break;
            }
        }

        this.setItemLayer(this.floorLayer, arr, this.refreshFloorItem.bind(this));
    }

    refreshFloorItem(itemUI: any, floor: number) {
        this.setString(find("floor", itemUI), floor);
        let aniCtrl: AnimationCtrl = cocosUtil.addComponentOnce(find("spine", itemUI), AnimationCtrl);

        let mapId = this.layerData.id;
        let nowFloor = UserData.getInstance().getTowerMapInfo(mapId).floor;

        if (nowFloor == floor) {
            aniCtrl.playAnimationOnce("a2", () => {
                aniCtrl.playAnimation("a3", true);
            });
        } else if (floor > nowFloor) {
            aniCtrl.playAnimation("a1", true);
        } else {
            aniCtrl.playAnimation("a4", true);
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

    onClickBtnRole() {
        this.openLayer(constants.layers.TowerRoleLayer);
    }

    onClickFloorItem(node) {
        let floor = node.item;
        let mapId = this.layerData.id;
        if (floor != UserData.getInstance().getTowerMapInfo(mapId).floor) {
            return;
        }
        // this.closeLayer();
        mapModel.enterMapWithMapId(mapId, floor);
        tyqSDK.eventSendCustomEvent("参与无尽模式")
    }

}

