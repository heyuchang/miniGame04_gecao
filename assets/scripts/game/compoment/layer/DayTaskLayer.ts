import { find, Node, _decorator } from 'cc';
import { tyqSDK } from '../../../tyqSDK/tyqSDK';
import { cocosUtil } from '../../../utils/cocosUtil';
import { utilTools } from '../../../utils/utilTools';
import { constants } from '../../data/constants';
import { msgac } from '../../data/msgac';
import { designManager } from '../../manager/designManager';
import { eventManager } from '../../manager/eventManager';
import { playerModel } from '../../model/playerModel';
import { UserData } from '../../model/UserData';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass('DayTaskLayer')
export class DayTaskLayer extends BaseLayer {

    flagArr = [25, 50, 75, 100];
    taskListNode: Node;

    // preLoadAssetConfigArr = [
    //     { bundle: "ui", path: "day_task/item_bg", type: SpriteFrame }
    // ];

    onLoad() {
        super.onLoad();

        this.taskListNode = this.getNodeByPath("ui/listbg/list");

        // test
        // UserData.getInstance().addPropNum(constants.propIds.dayAct, 90);
        // delete playerModel.dayTaskObj;

    }

    onEnable() {
        super.onEnable();

        this.addEventArr([
            msgac.overDay
        ]);
    }

    onDisable() {
        super.onDisable();
    }

    onDestroy() {
        super.onDestroy();
    }

    initUI() {
        this.refreshTopLayer();

        let tb = designManager.getTable(constants.tableName.dayTask);
        let arr = [];
        for (let i = 0; i < tb.length; i++) {
            let row = tb[i];
            let task: any = {};
            task.id = row.id;
            arr.push(task);
        }

        // 排序 已完成(未领取)-进度快-已领取
        utilTools.sortArr(arr, (task1: any, task2: any) => {
            let row1 = designManager.getRowById(constants.tableName.dayTask, task1.id);
            let row2 = designManager.getRowById(constants.tableName.dayTask, task2.id);
            let info1 = playerModel.getTaskInfoById(task1.id);
            let info2 = playerModel.getTaskInfoById(task2.id);
            let v1 = info1.num / row1.needNum;
            let v2 = info2.num / row2.needNum;
            if (info1.getAward) {
                v1 = -1;
            }
            if (info2.getAward) {
                v2 = -1;
            }
            if (v1 < v2) {
                return true;
            }
            return false;
        });

        this.scrollViewSetData(this.taskListNode, arr, this.refreshTaskItem.bind(this), true, true);

    }

    refreshTopLayer() {
        let actNum = UserData.getInstance().dayAct;
        this.setString(this.getNodeByPath("ui/top/act/num"), actNum);
        this.setProgressBar(this.getNodeByPath("ui/top/progress"), actNum / 100);

        let chs = this.getNodeByPath("ui/top/progress/boxs").children;
        for (let i = 0; i < chs.length; i++) {
            let itemUI = chs[i];
            itemUI.index = i;
            let num = this.flagArr[i];
            this.setString(find("num", itemUI), num);
            let shineNode = find("shine", itemUI);
            let iconNode = find("icon", itemUI);
            let openNode = find("open", itemUI);
            shineNode.active = false;
            iconNode.active = false;
            openNode.active = false;
            if (actNum >= num) {
                let flag = this.getAwardFlag(i);
                if (playerModel.dayTaskObj.awardFlagArr.indexOf(flag) == -1) {
                    // 还没领取
                    iconNode.active = true;
                    shineNode.active = true;
                    cocosUtil.tweenBreath(shineNode, 0.5, 1.2);
                } else {
                    // 已领取
                    openNode.active = true;
                }
            } else {
                shineNode.active = false;
                iconNode.active = true;
                openNode.active = false;
            }
        }
    }

    refreshTaskItem(itemUI: any, task: any) {
        let row = designManager.getRowById(constants.tableName.dayTask, task.id);
        this.setString(find("info", itemUI), row.info);
        find("awardLayer", itemUI).children.forEach((awardItem: any, index: number) => {
            let propId = row.award[index][0];
            let propNum = row.award[index][1];
            this.setPropItem(propId, find("icon", awardItem), propNum, null, find("num/val", awardItem));
            awardItem.award = row.award[index];
        });
        let info = playerModel.getTaskInfoById(row.id);
        let num = info.num;
        if (row.id == 1 && num > 1) {
            num = 1;
        }
        this.setString(find("progress/hint", itemUI), num + "/" + row.needNum);
        this.setProgressBar(find("progress", itemUI), info.num / row.needNum);
        this.setString(find("btnGo/text", itemUI), row.btnText);

        let btnGet = find("btnGet", itemUI);
        let btnGo = find("btnGo", itemUI);
        let doneNode = find("done", itemUI);
        btnGet.item = task;
        btnGo.item = task;
        btnGet.active = false;
        btnGo.active = false;
        doneNode.active = false;
        if (info.num >= row.needNum) {
            if (info.getAward) {
                doneNode.active = true;
            } else {
                btnGet.active = true;
            }
        } else {
            btnGo.active = true;
        }

        if (row.type == 3 && designManager.config.taskDoge > UserData.getInstance().$freeDraw) {
            btnGo.getChildByName("hand").active = true
        } else {
            btnGo.getChildByName("hand").active = false
        }
    }

    overDayRet() {
        this.initUI();
    }

    getAwardFlag(index: number) {
        return "dayTaskAward" + (index + 1);
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

    onClickBoxItem(node: any) {
        let awardArr = [];
        for (let i = 0; i < this.flagArr.length; i++) {
            let flag = this.getAwardFlag(i);
            let award = designManager.config[flag];
            let num = this.flagArr[i];
            let actNum = UserData.getInstance().dayAct;
            if (actNum < num) {
                // 还未达成
                continue;
            }
            if (playerModel.dayTaskObj.awardFlagArr.indexOf(flag) != -1) {
                // 已领取奖励
                continue;
            }
            let propItem = UserData.getInstance().addPropNum(award[0], award[1]);
            playerModel.dayTaskObj.awardFlagArr.push(flag);
            awardArr.push(propItem);
            tyqSDK.eventSendCustomEvent("每日任务-完成" + this.flagArr[i])
        }
        if (awardArr.length > 0) {
            this.openAwardGetLayer(awardArr);
            this.refreshTopLayer();
        } else {
            let flag = this.getAwardFlag(node.index);
            let award = designManager.config[flag];
            this.openAwardInfoLayer([award]);
        }
    }

    onClickBtnGo(node: any) {
        let row = designManager.getRowById(constants.tableName.dayTask, node.item.id);
        let obj: any = {};
        switch (row.type) {
            case 2:
                obj.layerName = constants.layers.DaySignLayer;
                break;
            case 3:
                obj.layerName = "ShopLayer";
                obj.taskGo = true
                break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 10:
                obj.layerName = "MainLayer";
                break;
            case 8:
                obj.layerName = "PatrolLayer";
                break;
            case 9:
                obj.layerName = "BlessLayer";
                break;
            case 11:
                obj.layerName = "RewardItemLayer";
                break;
            default:
                break;
        }
        eventManager.send(msgac.jumpLayer, obj);
        this.closeLayer();
    }

    onClickBtnGet(node: any) {
        let info = playerModel.getTaskInfoById(node.item.id);
        let row = designManager.getRowById(constants.tableName.dayTask, node.item.id);
        if (info.getAward) {
            // 已领取
            return;
        }
        if (info.num < row.needNum) {
            // 还未完成
            return;
        }
        let arr = UserData.getInstance().addPropArrByDesign(row.award);
        this.openAwardGetLayer(arr);
        info.getAward = 1;
        this.refreshTopLayer();
        this.scrollViewRefreshList(this.taskListNode);
        eventManager.send(msgac.refreshRedPoint);
        tyqSDK.eventSendCustomEvent("每日任务-参与领取奖励")
    }

    onClickAwardItem(node: any) {
        let award = node.award;
        this.openPropInfoLayer2(award[0], award[1]);
    }

}

