import { instantiate, Node, Prefab, _decorator } from 'cc';
import { sdkManager } from '../../../sdk/sdkManager';
import { constants } from '../../data/constants';
import { audioManager } from '../../manager/audioManager';
import { designManager } from '../../manager/designManager';
import { playerModel } from '../../model/playerModel';
import { UserData } from '../../model/UserData';
import { PropItemPrefab } from '../item/PropItemPrefab';
import { BaseUILayer } from './BaseUILayer';

const { ccclass, property } = _decorator;

@ccclass('PatrolFastLayer')
export class PatrolFastLayer extends BaseUILayer {


    // @property({ type: Node }) musicToggle: Node = null;

    @property({ type: Prefab }) propIten: Prefab = null;
    @property({ type: Node }) addPropLayer: Node = null;


    _rewardArr = []

    onLoad() {
        super.onLoad()
    }


    start() {
        let rewardArr = UserData.getInstance().getPatrolRewardByTime(designManager.config.towerPressTime * 60)
        this._rewardArr = rewardArr
        for (let index = 0; index < rewardArr.length && index < 2; index++) {
            let element = rewardArr[index];
            let item = instantiate(this.propIten)
            item.getComponent(PropItemPrefab).setView(element.Id, element.Num, PropItemPrefab.Type_UnWear)
            item.getComponent(PropItemPrefab).setScale(100)
            this.addPropLayer.addChild(item)
        }
        let item = instantiate(this.propIten)
        item.getComponent(PropItemPrefab).setView(0, 0, PropItemPrefab.Type_UnKnow)
        item.getComponent(PropItemPrefab).setScale(100)
        this.addPropLayer.addChild(item)
    }

    onGetRewardTili() {
        //  UserData.getInstance().getCurPatrolData()
        //  this.playCoinFlyAnim(10, v3(0,0,0), v3(0,600,0),null,0)
        audioManager.playEffect("btnClick")

        if (UserData.getInstance().power < designManager.config.quickEarn) {
            this.toast("体力不足")
            return
        }

        UserData.getInstance().usePower(0 - designManager.config.quickEarn)
        UserData.getInstance().getRewardProp(this._rewardArr)

        playerModel.addDayTaskNum(7, designManager.config.quickEarn);
        playerModel.addDayTaskNum(8);

        this.openLayer(constants.layers.RewardLayer, { propArr: this._rewardArr })
        this.closeLayer()
    }

    onGetRewardVideo() {
        audioManager.playEffect("btnClick")

        sdkManager.openAd("快速巡逻", (state: number) => {
            if (state == 1) {
                UserData.getInstance().getRewardProp(this._rewardArr)
                this.closeLayer()
                this.openLayer(constants.layers.RewardLayer, { propArr: this._rewardArr })
                playerModel.addDayTaskNum(8);
            }
        })
        // cc.find('Canvas').addChild(coin);
        //   this.playCoinFlyAnim(10, v3(0,0,0), v3(0,600,0),null,0)
    }

    closeLayer() {
        audioManager.playEffect("btnClick")

        super.closeLayer()
    }

}

