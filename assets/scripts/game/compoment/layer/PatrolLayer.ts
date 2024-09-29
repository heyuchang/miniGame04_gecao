import { Button, instantiate, Label, Node, Prefab, sp, Sprite, tween, v3, _decorator } from 'cc';
import { CountTimeUtil } from '../../../utils/CountTimeUtil';
import { utilTools } from '../../../utils/utilTools';
import { constants } from '../../data/constants';
import { audioManager } from '../../manager/audioManager';
import { designManager } from '../../manager/designManager';
import { RedPointLogicMgr } from '../../manager/RedPointLogicMgr';
import { UserData } from '../../model/UserData';
import { PropItemPrefab } from '../item/PropItemPrefab';

import { BaseUILayer } from './BaseUILayer';
const { ccclass, property } = _decorator;

@ccclass('PatrolLayer')
export class PatrolLayer extends BaseUILayer {


    // @property({ type: Node }) musicToggle: Node = null;
    @property({ type: Node }) btnPatrol: Node = null;
    @property({ type: Label }) patrolTimelabel: Label = null;
    @property({ type: Label }) addCoinlabel: Label = null;
    @property({ type: Label }) addExplabel: Label = null;
    @property({ type: Node }) addPropLayer: Node = null;
    @property({ type: Label }) maxPatrolTimelabel: Label = null;
    @property({ type: Label }) curPatrolTimelabel: Label = null;

    @property({ type: Prefab }) propIten: Prefab = null;

    @property({ type: Node }) monster: Node = null;


    @property({ type: Node }) handNode: Node = null;

    _rewardArr = []

    onLoad() {
        super.onLoad()
        this.handNode.active = false;
    }



    start() {
        this.initBtnPatrol()
        this.addCoinlabel.string = (designManager.config.towerCoin * 60) + "/小时"
        this.addExplabel.string = (designManager.config.towerExp * 60) + "/小时"
        this.maxPatrolTimelabel.string = "最长巡逻时间" + (designManager.config.towerTop / 60) + "小时"

        this.curPatrolTimelabel.string = "巡逻时间：" + utilTools.getTimeStrChinese(UserData.getInstance().getPatrolTime() * 1000, false)

        let rewardArr = UserData.getInstance().getPatrolReward()
        this._rewardArr = rewardArr
        rewardArr.forEach(element => {
            let item = instantiate(this.propIten)
            item.getComponent(PropItemPrefab).setView(element.Id, element.Num, PropItemPrefab.Type_UnWear)
            item.getComponent(PropItemPrefab).setScale(100)
            this.addPropLayer.addChild(item)
        });
        let monster = this.monster
        tween(this.monster).show().set({ position: v3(222, -95, 0) }).call(function () {
            monster.getComponent(sp.Skeleton).animation = "walk"
            monster.getComponent(sp.Skeleton).loop = true
        }).to(1, { position: v3(50, -95, 0) }).call(function () {
            monster.getComponent(sp.Skeleton).animation = "die"
            monster.getComponent(sp.Skeleton).loop = false
        }).delay(0.3).hide().delay(0.8).union().repeatForever().start()
    }

    initBtnPatrol() {
        let curTime = UserData.getInstance().getPatrolState()
        if (curTime > 0) {
            this.btnPatrol.getComponent(Button).interactable = false
            this.btnPatrol.getComponent(Sprite).grayscale = true
            let self = this
            this.btnPatrol.getChildByName("Label").getComponent(CountTimeUtil).setTime(curTime, function () {
                self.btnPatrol.getComponent(Button).interactable = true
                self.btnPatrol.getComponent(Sprite).grayscale = false
                self.btnPatrol.getChildByName("Label").getComponent(Label).string = "领 取"
            })
            RedPointLogicMgr.ins().setRPointView(this.btnPatrol, null, false)
        } else {
            RedPointLogicMgr.ins().setRPointView(this.btnPatrol, null, true)
            this.btnPatrol.getChildByName("Label").getComponent(Label).string = "领 取"
            this.handNode.active = true;
        }
    }

    onGetRewardNormal() {
        audioManager.playEffect("btnClick")
        this.handNode.active = false;

        UserData.getInstance().getCurPatrolData()
        this.showGetReward(this._rewardArr)
        this.initBtnPatrol()
        this.curPatrolTimelabel.string = "巡逻时间：" + utilTools.getTimeStrChinese(UserData.getInstance().getPatrolTime() * 1000, false)

        //   this.playCoinFlyAnim(10, v3(0,0,0), v3(0,600,0),null,0)
    }

    onGetRewardVideo() {
        audioManager.playEffect("btnClick")
        if (this.handNode.active) {
            return;
        }

        this.openLayer(constants.layers.PatrolFastLayer)
        // sdkManager.openAd("快速巡逻", (state: number) => {
        //     if (state == 1) {
        //         UserData.getInstance().getPatrolRewardByTime(designManager.config.towerPressTime * 60)
        //         this.showGetReward(this._rewardArr)
        //     }
        // })
        //   cc.find('Canvas').addChild(coin);
        //   this.playCoinFlyAnim(10, v3(0,0,0), v3(0,600,0),null,0)
    }

    closeLayer() {
        audioManager.playEffect("btnClick")
        if (this.handNode.active) {
            return;
        }

        super.closeLayer()
    }

}

