import { find, Node, Tween, _decorator } from 'cc';
import { sdkManager } from '../../../sdk/sdkManager';
import { Channel, tyqAdManager } from '../../../tyqSDK/tyqAdManager';
import { tyqSDK } from '../../../tyqSDK/tyqSDK';
import { cocosUtil } from '../../../utils/cocosUtil';
import { constants } from '../../data/constants';
import { localText } from '../../data/localText';
import { msgac } from '../../data/msgac';
import { designManager } from '../../manager/designManager';
import { eventManager } from '../../manager/eventManager';
import { playerModel } from '../../model/playerModel';
import { UserData } from '../../model/UserData';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass('DaySignLayer')
export class DaySignLayer extends BaseLayer {

    itemUIArr: any = [];
    awardDay: number = 0;

    onLoad() {
        super.onLoad();

        let itemLayer = this.getNodeByPath("ui/itemLayer");
        let propItem = find("propItem", itemLayer);
        for (let i = 0; i < 2; i++) {
            cocosUtil.instantiate(propItem).parent = itemLayer;
        }
        let itemLayer2 = cocosUtil.instantiate(itemLayer);
        itemLayer2.parent = itemLayer.parent;
        let pos = itemLayer2.getPosition();
        pos.y -= 150;
        itemLayer2.position = pos;
        cocosUtil.instantiate(propItem).parent = itemLayer;

        itemLayer.children.forEach((itemUI: Node) => {
            this.itemUIArr.push(itemUI);
        });
        itemLayer2.children.forEach((itemUI: Node) => {
            this.itemUIArr.push(itemUI);
        });

        // test
        // let startTime = new Date(new Date().getTime() - constants.times.day * 6);
        // startTime.setHours(0);
        // startTime.setMinutes(0);
        // startTime.setSeconds(0);
        // startTime.setMilliseconds(0);
        // playerModel.daySignObj.startTime = startTime;
        // delete playerModel.daySignObj;

        if(tyqAdManager.getChannel() == Channel.OPPO_MINI_GAME){
            playerModel.daySignObj.notBox = 1
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
        let now = new Date();
        let day = Math.floor((now.getTime() - playerModel.daySignObj.startTime) / constants.times.day);
        this.awardDay = day;
        for (let i = 0; i < this.itemUIArr.length; i++) {
            let itemUI = this.itemUIArr[i];
            let row = designManager.getRowById(constants.tableName.daySign, i + 1);
            this.setPropItem(row.award[0], find("icon", itemUI), row.award[1], find("bg", itemUI), find("num/val", itemUI));
            this.setString(find("day", itemUI), localText.dayIndex.format(i + 1));

            let getNode = find("get", itemUI);
            let patchNode = find("patch", itemUI);
            let targetNode = find("target", itemUI);
            getNode.active = false;
            patchNode.active = false;
            targetNode.active = false;
            let hasGet = false;
            if (playerModel.daySignObj.awardDayArr.indexOf(i) != -1) {
                hasGet = true;
            }
            if (hasGet) {
                getNode.active = true;
            } else if (i < day) {
                patchNode.active = true;
            } else if (i == day) {
                targetNode.active = true;
                Tween.stopAllByTarget(targetNode);
                cocosUtil.tweenBlink(targetNode, 0.3);
            }
        }

        // 已签到次数
        this.setString(this.getNodeByPath("ui/bottom/info/has/info/text"), playerModel.daySignObj.awardDayArr.length + localText.ci);
        // 未签到次数
        this.setString(this.getNodeByPath("ui/bottom/info/no/info/text"), 7 - playerModel.daySignObj.awardDayArr.length + localText.ci);

        this.setProgressBar(this.getNodeByPath("ui/bottom/bar"), playerModel.daySignObj.awardDayArr.length / 7);

        this.refreshFinalAwardLayer();
        this.refreshBoxLayer();
    }

    refreshFinalAwardLayer() {
        let getNode = this.getNodeByPath("ui/bottom/extraAward/get");
        let lockNode = this.getNodeByPath("ui/bottom/extraAward/lock");
        getNode.active = false;
        lockNode.active = false;
        if (playerModel.daySignObj.finalAward) {
            getNode.active = true;
        } else if (playerModel.daySignObj.awardDayArr.length < 7) {
            lockNode.active = true;
        }
    }

    refreshBoxLayer() {
        if (playerModel.daySignObj.notBox) {
            this.getNodeByPath("ui/hintLayer/btnBox/gou").active = false;
        } else {
            this.getNodeByPath("ui/hintLayer/btnBox/gou").active = true;
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

    signWithDay(day: number, double: boolean = false) {
        let row = designManager.getRowById(constants.tableName.daySign, day + 1);
        if (!row) {
            return;
        }

        let awardArr = [row.award];
        if (double) {
            awardArr.push(row.award);
        }
        awardArr = UserData.getInstance().addPropArrByDesign(awardArr);
        this.openAwardGetLayer(awardArr);
        playerModel.daySignObj.awardDayArr.push(day);
        this.initUI();
        eventManager.send(msgac.refreshRedPoint);
    }

    onClickBtnGetAward() {
        let row = designManager.getRowById(constants.tableName.daySign, this.awardDay + 1);
        if (!row) {
            this.createNotice(localText.daySignOutdate);
            return;
        }
        if (playerModel.daySignObj.awardDayArr.indexOf(this.awardDay) != -1) {
            // 已领取奖励了
            this.createNotice(localText.daySignHasGet);
            return;
        }

        playerModel.addDayTaskNum(2);

        tyqSDK.eventSendCustomEvent("签到玩家")

        if (playerModel.daySignObj.notBox) {
            this.signWithDay(this.awardDay);
        } else {
            sdkManager.openAd("签到双倍奖励", (st: number) => {
                if (st == 1) {
                    this.signWithDay(this.awardDay, true);
                }
            });
        }


    }

    onClickBtnPatch() {
        let targetDay = -1;
        for (let i = 0; i < 7; i++) {
            if (playerModel.daySignObj.awardDayArr.indexOf(i) == -1) {
                targetDay = i;
                break;
            }
        }
        if (targetDay == -1 || targetDay >= this.awardDay) {
            this.createNotice(localText.daySignNoLeave);
            return;
        }

        sdkManager.openAd("快速补签", (st: number) => {
            if (st == 1) {
                this.signWithDay(targetDay);
            }
        });

    }

    onClickBtnBox() {
        if (playerModel.daySignObj.notBox) {
            playerModel.daySignObj.notBox = 0;
        } else {
            playerModel.daySignObj.notBox = 1;
        }
        this.refreshBoxLayer();
    }

    onClickExtraAward() {
        if (playerModel.daySignObj.awardDayArr.length < 7) {
            this.createNotice(localText.daySignFinalAwardHint);
            return;
        }
        if (playerModel.daySignObj.finalAward) {
            // 已领取
            this.createNotice(localText.hasGet);
            return;
        }

        playerModel.daySignObj.finalAward = 1;
        let propItem = UserData.getInstance().addPropByDesign(designManager.config.daySignFinalAward);
        this.openAwardGetLayer([propItem]);

        this.refreshFinalAwardLayer();

    }

}

