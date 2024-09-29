import { find, _decorator } from 'cc';
import { sdkManager } from '../../../sdk/sdkManager';
import { constants } from '../../data/constants';
import { localText } from '../../data/localText';
import { msgac } from '../../data/msgac';
import { designManager } from '../../manager/designManager';
import { eventManager } from '../../manager/eventManager';
import { playerModel } from '../../model/playerModel';
import { UserData } from '../../model/UserData';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass('VipLayer')
export class VipLayer extends BaseLayer {

    choseVip: number;

    onLoad() {
        super.onLoad();

        this.choseVip = playerModel.vipObj.vip;
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
        let vip = playerModel.vipObj.vip;
        this.setString(this.getNodeByPath("ui/top/rank/val"), vip);

        let infoLayer = this.getNodeByPath("ui/top/bar/info");
        let row = designManager.getRowById(constants.tableName.vip, vip);
        let nextRow = designManager.getRowById(constants.tableName.vip, vip + 1);
        let btnGet = this.getNodeByPath("ui/top/btnGet");
        if (nextRow) {
            infoLayer.active = true;
            btnGet.active = true;
            this.setString(find("val", infoLayer), row.adNum);
            this.setString(find("vip", infoLayer), "VIP" + nextRow.id);
            this.setProgressBar(this.getNodeByPath("ui/top/bar"), playerModel.vipObj.adNum / row.adNum);
            this.setString(this.getNodeByPath("ui/top/bar/val"), playerModel.vipObj.adNum + "/" + row.adNum);
        } else {
            btnGet.active = false;
            infoLayer.active = false;
            this.setProgressBar(this.getNodeByPath("ui/top/bar"), 1);
            this.setString(this.getNodeByPath("ui/top/bar/val"), localText.full);
        }

        this.setString(this.getNodeByPath("ui/vip"), "VIP" + this.choseVip + "特权");
        let choseRow = designManager.getRowById(constants.tableName.vip, this.choseVip);
        this.setString(this.getNodeByPath("ui/text"), localText.weaponEquipAdd.format(choseRow.atkAdd * 100));

        let btnGetBox1 = this.getNodeByPath("ui/info/itemLayer/btnBox1/btnGetBox1");
        let hasGet1 = this.getNodeByPath("ui/info/itemLayer/btnBox1/hasGet");
        btnGetBox1.active = false;
        hasGet1.active = false;
        if (playerModel.vipObj.onceObj[this.choseVip]) {
            // 已领取首次奖励
            hasGet1.active = true;
        } else if (this.choseVip <= vip) {
            btnGetBox1.active = true;
        }

        let btnGetBox2 = this.getNodeByPath("ui/info/itemLayer/btnBox2/btnGetBox2");
        let hasGet2 = this.getNodeByPath("ui/info/itemLayer/btnBox2/hasGet");
        btnGetBox2.active = false;
        hasGet2.active = false;
        if (this.choseVip == vip) {
            if (playerModel.vipObj.dayAward) {
                hasGet2.active = true;
            } else {
                btnGetBox2.active = true;
            }
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

    onClickBtnGetBox1() {
        if (this.choseVip > playerModel.vipObj.vip) {
            return;
        }
        if (playerModel.vipObj.onceObj[this.choseVip]) {
            // 已领取
            return;
        }
        let row = designManager.getRowById(constants.tableName.vip, this.choseVip);
        let awardArr = UserData.getInstance().addPropArrByDesign(row.award);
        this.openAwardGetLayer(awardArr);
        playerModel.vipObj.onceObj[this.choseVip] = 1;
        this.initUI();
        eventManager.send(msgac.refreshRedPoint);
    }

    onClickBtnGetBox2() {
        if (this.choseVip > playerModel.vipObj.vip) {
            return;
        }
        if (playerModel.vipObj.dayAward) {
            // 已领取
            return;
        }
        let row = designManager.getRowById(constants.tableName.vip, this.choseVip);
        let awardArr = UserData.getInstance().addPropArrByDesign(row.dayAward);
        this.openAwardGetLayer(awardArr);
        playerModel.vipObj.dayAward = 1;
        this.initUI();
        eventManager.send(msgac.refreshRedPoint);
    }

    onClickBtnLeft() {
        if (this.choseVip <= 1) {
            return;
        }
        this.choseVip--;
        this.initUI();
    }

    onClickBtnRight() {
        let row = designManager.getRowById(constants.tableName.vip, this.choseVip + 1);
        if (!row) {
            return;
        }
        this.choseVip++;
        this.initUI();
    }

    onClickBtnBox1() {
        if (!playerModel.vipObj.onceObj[this.choseVip]) {
            this.onClickBtnGetBox1();
            return;
        }
        let row = designManager.getRowById(constants.tableName.vip, this.choseVip);
        this.openAwardInfoLayer(row.award);
    }

    onClickBtnBox2() {
        if (!playerModel.vipObj.dayAward) {
            this.onClickBtnGetBox2();
            return;
        }
        let row = designManager.getRowById(constants.tableName.vip, this.choseVip);
        this.openAwardInfoLayer(row.dayAward);
    }

    onClickBtnGet() {
        sdkManager.openAd("VIP特权", (st: number) => {
            if (st == 1) {
                let hasUp = playerModel.addVipAdNum();
                if (hasUp) {
                    this.choseVip = playerModel.vipObj.vip;
                }
                this.initUI();
                eventManager.send(msgac.refreshRedPoint);
            }
        });
    }

}

