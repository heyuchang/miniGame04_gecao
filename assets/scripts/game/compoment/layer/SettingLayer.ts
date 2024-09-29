import { _decorator, Node, Toggle } from 'cc';
import { audioManager } from '../../manager/audioManager';

import { BaseUILayer } from './BaseUILayer';
const { ccclass, property } = _decorator;

@ccclass('SettingLayer')
export class SettingLayer extends BaseUILayer {


    @property({ type: Node }) musicToggle: Node = null;
    @property({ type: Node }) effectToggle: Node = null;


    onLoad() {
        super.onLoad()
    }

   

    onDisable() {
        super.onDisable();
    }

    onDestroy() {
        super.onDestroy();
    }

    start() {
        let isMusic = audioManager.getMusiceVolume()
        let isEffect = audioManager.getEffectVolume()

        // this.musicToggle.getComponent(Toggle).isChecked = isMusic > 0
        //  this.effectToggle.getComponent(Toggle).isChecked = isEffect > 0
        //this.musicToggle.getChildByName("Toggle1").getComponent(Toggle).isChecked == isMusic > 0
    }

    onMusicCheck() {
        console.log("onMusicCheck", this.musicToggle.getComponent(Toggle).isChecked)
        // let isMusic = audioManager.getMusiceVolume()
        // if (isMusic <= 0) {
        //     isMusic = 1
        // } else {
        //     isMusic = 0
        // }
        audioManager.setMusicVolume(this.musicToggle.getComponent(Toggle).isChecked ? 1 : 0)
        //  this.musicToggle.getComponent(Toggle).isChecked = isMusic > 0
    }

    onSoundCheck() {
        audioManager.setEffectVolume(this.musicToggle.getComponent(Toggle).isChecked ? 1 : 0)
  
    }

    closeLayer() {
        super.closeLayer()
    }

}

