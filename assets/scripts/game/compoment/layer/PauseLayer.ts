import { find, Node, _decorator } from 'cc';
import { Channel, tyqAdManager } from '../../../tyqSDK/tyqAdManager';
import { tyqSDK } from '../../../tyqSDK/tyqSDK';
import { tyqSDKConfig } from '../../../tyqSDK/tyqSDKConfig';
import { constants } from '../../data/constants';
import { msgac } from '../../data/msgac';
import { audioManager } from '../../manager/audioManager';
import { designManager } from '../../manager/designManager';
import { mapModel } from '../../model/mapModel';
import { UserData } from '../../model/UserData';
import { serverMsg } from '../../other/serverMsg';
import { BaseLayer } from '../base/BaseLayer';
import { ItemLayer } from '../base/ItemLayer';
const { ccclass, property } = _decorator;

@ccclass('PauseLayer')
export class PauseLayer extends BaseLayer {

    weaponItemLayer: ItemLayer;
    skill1ItemLayer: ItemLayer;
    skill2ItemLayer: ItemLayer;

    audioIconOpen: Node;
    audioIconClose: Node;

    onLoad() {
        super.onLoad();

        this.weaponItemLayer = this.getNodeByPath("ui/weaponLayer/bg/itemLayer").addComponent(ItemLayer);
        this.skill1ItemLayer = this.getNodeByPath("ui/skill1Layer/itemLayer").addComponent(ItemLayer);
        this.skill2ItemLayer = this.getNodeByPath("ui/skill2Layer/itemLayer").addComponent(ItemLayer);

        this.audioIconOpen = this.getNodeByPath("btnAudio/open");
        this.audioIconClose = this.getNodeByPath("btnAudio/close");

    }

    onEnable() {
        super.onEnable();
        if (tyqSDK.getSwitchValue(tyqSDKConfig.paramsKeys.tyq_more_game_level) > 0 && tyqSDK.getSwitchValue(tyqSDKConfig.paramsKeys.tyq_more_game_level) > UserData.getInstance().openLevel) {
            if (tyqAdManager.getChannel() == Channel.WECHAT) {
                this.openLayer(constants.layers.MoreGameLayer)
            }
        }
        tyqAdManager.showDelayFullVideo()
        this.addEventArr([
            msgac.mapLeave
        ]);
    }

    onDisable() {
        super.onDisable();

        this.removeEventArr([
            msgac.mapLeave
        ]);
    }

    onDestroy() {
        super.onDestroy();
    }

    initUI() {
        this.refreshWeaponLayer();
        this.refreshSkill1Layer();
        this.refreshSkill2Layer();

        this.refreshAudioLayer();
    }

    refreshAudioLayer() {
        if (audioManager.musicVolume > 0) {
            this.audioIconOpen.active = true;
            this.audioIconClose.active = false;
        } else {
            this.audioIconOpen.active = false;
            this.audioIconClose.active = true;
        }
    }

    refreshSkill2Layer() {
        this.setNumItemLayer(this.skill2ItemLayer.node, constants.design.skillNum, (itemUI: Node, num: number) => {
            this.refreshItem(itemUI, num, constants.tableName.skill2);
        });
    }

    refreshSkill1Layer() {
        this.setNumItemLayer(this.skill1ItemLayer.node, constants.design.skillNum, (itemUI: Node, num: number) => {
            this.refreshItem(itemUI, num, constants.tableName.skill);
        });
    }

    refreshWeaponLayer() {
        this.setNumItemLayer(this.weaponItemLayer.node, constants.design.weaponNum, (itemUI: Node, num: number) => {
            this.refreshItem(itemUI, num, constants.tableName.weapon);
        });
    }

    refreshItem(itemUI: Node, num: number, name: string) {
        let info = null;
        switch (name) {
            case constants.tableName.weapon:
                info = mapModel.weaponSystem.weaponArr[num - 1];
                break;
            case constants.tableName.skill:
                info = mapModel.skillSystem.skillArr[num - 1];
                break;
            case constants.tableName.skill2:
                info = mapModel.skillSystem.skill2Arr[num - 1];
                break;
            default:
                break;
        }
        let iconNode = find("icon", itemUI);
        let starLayer = find("starLayer", itemUI);
        if (!info) {
            iconNode.active = false;
            starLayer.active = false;
            return;
        }

        iconNode.active = true;
        starLayer.active = true;
        let row = designManager.getRowById(name, info.id);
        this.setSpriteFrame(iconNode, row.icon);
        this.setNumItemLayer(starLayer, row.lv, (node: Node) => {
            let icon = find("icon", node);
            let icon2 = find("icon2", node);
            if (row.lv >= constants.design.maxLv) {
                icon.active = false;
                icon2.active = true;
            } else {
                icon.active = true;
                icon2.active = false;
            }
        });
    }

    mapLeaveRet(data: any) {
        this.closeLayer();
    }

    closeLayer() {
        super.closeLayer();
        if (this.layerCb) {
            this.layerCb();
        }
    }

    onClickBtnGoOn(node: Node) {
        this.closeLayer();
    }

    onClickBtnHome() {
        serverMsg.send(msgac.mapLeave);
        return;
        this.openLayer(constants.layers.BackHomeLayer);
    }

    onClickBtnAudio() {
        if (audioManager.musicVolume > 0) {
            audioManager.setMusicVolume(0);
            audioManager.setEffectVolume(0);
        } else {
            audioManager.setMusicVolume(1);
            audioManager.setEffectVolume(1);
        }
        this.refreshAudioLayer();
    }

}

