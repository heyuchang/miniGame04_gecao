import { find, Node, ScrollView, UITransform, v2, _decorator } from 'cc';
import { sdkManager } from '../../../sdk/sdkManager';
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

@ccclass('EnergyLayer')
export class EnergyLayer extends BaseLayer {

    timeNode: Node;
    barNode: Node;
    contentNode: Node;
    handNode: Node;

    itemUIArr: any = [];

    onLoad() {
        this.layerName = constants.layers.EnergyLayer;
        super.onLoad();

        this.timeNode = this.getNodeByPath("ui/time/text");
        this.barNode = this.getNodeByPath("ui/energyListNoUtil/view/content/bar");
        this.contentNode = this.getNodeByPath("ui/energyListNoUtil/view/content");
        this.handNode = this.getNodeByPath("ui/energyListNoUtil/view/content/hand");
        this.handNode.active = false;

        let rowArr = designManager.getTable(constants.tableName.energyAward);
        let energyItem = find("layer/energyItem", this.contentNode);
        let itemUI: any = energyItem;
        for (let i = 0; i < rowArr.length; i++) {
            let row = rowArr[i];
            if (i > 0) {
                itemUI = cocosUtil.instantiate(energyItem);
                itemUI.parent = find("layer", this.contentNode);
            }
            itemUI.row = row;
            this.itemUIArr.push(itemUI);
        }

        let height = itemUI.getComponent(UITransform).height;
        this.contentNode.getComponent(UITransform).height = height * (rowArr.length + 0.5);
        this.barNode.getComponent(UITransform).height = height * rowArr.length;

        // test
        // UserData.getInstance().addPropNum(108, 600);
    }

    onEnable() {
        super.onEnable();
        this.addEventArr([
            msgac.energyObjRefresh
        ]);

        this.scheduleOnce(() => {
            this.refreshShowList();
        });
    }

    refreshShowList() {
        this.handNode.active = false;
        let listNode = this.getNodeByPath("ui/energyListNoUtil");
        // 自动滚动，优先到首个未领取奖励的地方，其次首个未完成的地方
        let targetItemUI = null;
        for (let i = 0; i < this.itemUIArr.length; i++) {
            let row = this.itemUIArr[i].row;
            let info = playerModel.getEnergyAwardInfoById(row.id);
            if (UserData.getInstance().energy >= row.num && (!info.award1)) {
                targetItemUI = this.itemUIArr[i];
                break;
            }
        }
        if (targetItemUI) {
            this.handNode.active = true;
            let pos = cocosUtil.convertToWorldSpace(find("awardLayer/awardItem1", targetItemUI));
            pos = cocosUtil.convertToNodeSpace(this.handNode, pos);
            this.handNode.position = pos;
        }

        if (!targetItemUI) {
            for (let i = 0; i < this.itemUIArr.length; i++) {
                let row = this.itemUIArr[i].row;
                if (UserData.getInstance().energy < row.num) {
                    targetItemUI = this.itemUIArr[i];
                    break;
                }
            }
        }
        if (!targetItemUI) {
            targetItemUI = this.itemUIArr[this.itemUIArr.length - 1];
        }

        let my = Math.abs(targetItemUI.position.y) - targetItemUI.getComponent(UITransform).height;
        if (my < 0) {
            my = 0;
        }
        let pos = v2(0, 0);
        pos.y = my;
        listNode.getComponent(ScrollView).scrollToOffset(pos, 0.6);
    }

    onDisable() {
        super.onDisable();

        this.removeEventArr([
            msgac.energyObjRefresh
        ]);
    }

    onDestroy() {
        super.onDestroy();
    }

    energyObjRefreshRet(data: any) {
        let scrollView = this.getNodeByPath("ui/energyListNoUtil").getComponent(ScrollView);
        scrollView.stopAutoScroll();
        scrollView.scrollToTop();
        this.initUI();
    }

    initUI() {
        this.refreshTimeNode();
        this.refreshItemUIArr();
        this.refrshProgress();
    }

    refreshTimeNode() {
        let duration = playerModel.energyObj.endTime.getTime() - new Date().getTime();
        let day = Math.floor(duration / constants.times.day);
        let hour = Math.ceil((duration - day * constants.times.day) / constants.times.houre);
        this.setString(this.timeNode, localText.energyTimeHint.format(day, hour));
    }

    refrshProgress() {
        let tb = designManager.getTable(constants.tableName.energyAward);
        let id = 0;
        for (let i = 0; i < tb.length; i++) {
            let row = tb[i];
            if (UserData.getInstance().energy < row.num) {
                id = i + 1;
                break;
            }
        }
        let p = 1 / tb.length * (id - 1);
        if (id == 0) {
            p = 1;
        } else {
            let row = designManager.getRowById(constants.tableName.energyAward, id);
            let lastRow = designManager.getRowById(constants.tableName.energyAward, id - 1);
            let lastNum = 0;
            if (lastRow) {
                lastNum = lastRow.num;
            }
            let max = row.num - lastNum;
            let r = UserData.getInstance().energy - lastNum;
            let rp = (1 / tb.length) * (r / max);
            p += rp;
        }
        this.setProgressBar(this.barNode, p);
    }

    refreshItemUIArr() {
        for (let i = 0; i < this.itemUIArr.length; i++) {
            let itemUI = this.itemUIArr[i];
            let row = itemUI.row;
            this.setString(find("flag/rank", itemUI), row.id);
            this.setString(find("flag/num", itemUI), row.num + localText.point);
            let info = playerModel.getEnergyAwardInfoById(row.id);

            // 普通奖励
            find("awardLayer/awardItem1", itemUI).row = row;
            let shineNode1 = find("awardLayer/awardItem1/shine", itemUI);
            let lockNode1 = find("awardLayer/awardItem1/lock", itemUI);
            let hasGetNode1 = find("awardLayer/awardItem1/hasGet", itemUI);
            shineNode1.active = false;
            lockNode1.active = false;
            hasGetNode1.active = false;
            if (UserData.getInstance().energy >= row.num) {
                if (info.award1) {
                    // 已领取
                    hasGetNode1.active = true;
                } else {
                    // 可领取
                    shineNode1.active = true;
                }
            } else {
                lockNode1.active = true;
            }

            // 广告奖励
            find("awardLayer/awardItem2", itemUI).row = row;
            let shineNode2 = find("awardLayer/awardItem2/shine", itemUI);
            let lockNode2 = find("awardLayer/awardItem2/lock", itemUI);
            let hasGetNode2 = find("awardLayer/awardItem2/hasGet", itemUI);
            shineNode2.active = false;
            lockNode2.active = false;
            hasGetNode2.active = false;
            if (UserData.getInstance().energy >= row.num) {
                if (info.award2) {
                    // 已领取
                    hasGetNode2.active = true;
                } else {
                    // 可领取
                    shineNode2.active = true;
                }
            } else {
                lockNode2.active = true;
            }
        }
    }

    onClickAwardItem1(node: any) {
        let row = node.row;
        if (UserData.getInstance().energy < row.num) {
            // 还未完成
            this.openAwardInfoLayer(row.award1);
            return;
        }
        let info = playerModel.getEnergyAwardInfoById(row.id);
        if (info.award1) {
            // 已领取
            this.openAwardInfoLayer(row.award1);
            return;
        }
        info.award1 = 1;
        let award = UserData.getInstance().addPropArrByDesign(row.award1);
        this.openAwardGetLayer(award);
        this.initUI();
        this.refreshShowList();
        eventManager.send(msgac.refreshRedPoint);
    }

    onClickAwardItem2(node: any) {
        let row = node.row;
        if (UserData.getInstance().energy < row.num) {
            // 还未完成
            this.openAwardInfoLayer(row.award2);
            return;
        }
        let info = playerModel.getEnergyAwardInfoById(row.id);
        if (info.award2) {
            // 已领取
            this.openAwardInfoLayer(row.award2);
            return;
        }
        sdkManager.openAd("能量战令", (st: number) => {
            if (st == 1) {
                info.award2 = 1;
                let award = UserData.getInstance().addPropArrByDesign(row.award2);
                this.openAwardGetLayer(award);
                this.initUI();
            }
        });
    }

    onClickBar() {
        // playerModel.energyObj.endTime = new Date();
        // UserData.getInstance().addPropNum(108, 100);
        // this.initUI();
    }

}

