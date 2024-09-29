import { Node, _decorator } from 'cc';
import { tyqSDK } from '../../../tyqSDK/tyqSDK';
import { msgac } from '../../data/msgac';
import { audioManager } from '../../manager/audioManager';
import { serverMsg } from '../../other/serverMsg';
import { BaseUILayer } from './BaseUILayer';

const { ccclass, property } = _decorator;

@ccclass('MoreGameLayer')
export class MoreGameLayer extends BaseUILayer {

    @property({ type: Node }) btnClose: Node = null;

    @property({ type: Node }) audioIconOpen: Node = null;
    @property({ type: Node }) audioIconClose: Node = null;

    onLoad() {
        // this.fitNodeWidget(this.btnClose, 100)

    }

    onEnable() {

    }

    onDisable() {
        super.onDisable();

        this.refreshAudioLayer();
    }

    onDestroy() {
        super.onDestroy();
        tyqSDK.hideCustomRectCenterAd()
    }

    start() {
        ///   console.log("tyqSDK.showCustomRectCenterAd")
        let self = this
        tyqSDK.showCustomRectCenterAd(function () {
            self.closeBless()
        })
    }

    closeBless() {
        this.closeLayer()
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


    onClickBtnHome() {
        tyqSDK.hideCustomRectCenterAd()
        serverMsg.send(msgac.mapLeave);
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

