import { director, find, Node, UITransform, v3, _decorator } from 'cc';
import { myLog } from '../../../common/myLog';
import { GNetCmd, GNetConst } from '../../../tyqSDK/network/conf';
import ServerCtr from '../../../tyqSDK/network/ServerCtr';
import { tyqSDK } from '../../../tyqSDK/tyqSDK';
import { cocosUtil } from '../../../utils/cocosUtil';
import { constants } from '../../data/constants';
import { localText } from '../../data/localText';
import { designManager } from '../../manager/designManager';
import { localStorageManager } from '../../manager/localStorageManager';
import { playerModel } from '../../model/playerModel';
import { UserData } from '../../model/UserData';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass('ShareLayer')
export class ShareLayer extends BaseLayer {

    tabLayer: Node;
    tabArr = [
        { id: 1, name: "邀请好友" },
        { id: 2, name: "通关奖励" },
        { id: 3, name: "视频好友" },
    ];
    choseTabIndex = 0;

    onLoad() {
        super.onLoad();

        let tabLayer = this.getNodeByPath("ui/tabLayer");
        this.tabLayer = tabLayer;
        let tabItem = tabLayer.children[0];
        cocosUtil.instantiate(tabItem).parent = tabLayer;
        cocosUtil.instantiate(tabItem).parent = tabLayer;
        let chs = tabLayer.children;
        chs.forEach((itemUI, index) => {
            let info = this.tabArr[index];
            this.setString(find("text", itemUI), info.name);
            // @ts-ignore
            itemUI.index = index;
        });
        this.refreshTabLayer();

        ServerCtr.GetInstance().reqGetFriendVal();

    }

    onEnable() {
        super.onEnable();

        director.on(GNetCmd.GetFriendVal.toString(), this.onMessageEvent, this);
    }

    onDisable() {
        super.onDisable();

        director.on(GNetCmd.GetFriendVal.toString(), this.onMessageEvent, this);
    }

    onDestroy() {
        super.onDestroy();
    }

    initUI() {
        this.refreshTopLayer();
        this.refreshTabLayer();
        this.refreshListLayer();
    }

    onMessageEvent(value) {
        if (value.status != GNetConst.ResSuccess) {
            return;
        }
        switch (value.cmd) {
            case GNetCmd.GetFriendVal:
                this.initUI();
                break;
        }
    }

    refreshTopLayer() {
        let remainNum = designManager.config.shareDayNum - playerModel.shareObj.dayNum;
        if (remainNum < 0) {
            remainNum = 0;
        }
        this.setString(this.getNodeByPath("ui/top/hintLayer/day/num"), remainNum);
        this.setString(this.getNodeByPath("ui/top/shareAwardItem/num/val"), "x" + designManager.config.shareDayDiamond);
    }

    refreshListLayer() {
        let arr = designManager.getRowsByType(constants.tableName.share, this.choseTabIndex + 1);
        this.scrollViewSetData(this.getNodeByPath("ui/listbg/list"), arr, this.refreshShareItem.bind(this));
    }

    refreshShareItem(itemUI: any, row: any) {
        find("awardLayer", itemUI).children.forEach((awardItem: any, index: number) => {
            let propId = row.award[index][0];
            let propNum = row.award[index][1];
            this.setPropItem(propId, find("icon", awardItem), propNum, find("bg", awardItem), find("num/val", awardItem));
            awardItem.award = row.award[index];
        });
        let infoLayer1 = find("infoLayer1", itemUI);
        let infoLayer2 = find("infoLayer2", itemUI);
        let infoLayer3 = find("infoLayer3", itemUI);
        infoLayer1.active = false;
        infoLayer2.active = false;
        infoLayer3.active = false;
        let nowNum = 0;
        switch (this.choseTabIndex + 1) {
            case 1:
                nowNum = playerModel.shareObj.friendNum;
                infoLayer1.active = true;
                this.setString(find("textLayer/val", infoLayer1), row.num + localText.wei);
                break;
            case 2:
                nowNum = playerModel.shareObj.friendPassNum;
                infoLayer2.active = true;
                this.setString(find("textLayer/val", infoLayer2), row.num + localText.ci);
                break;
            case 3:
                nowNum = playerModel.shareObj.friendAdNum;
                infoLayer3.active = true;
                this.setString(find("textLayer/val", infoLayer3), row.num + localText.ge);
                break;
            default:
                break;
        }

        let btnGet = find("btnGet", itemUI);
        let doneNode = find("done", itemUI);
        btnGet.active = false;
        doneNode.active = false;
        if (playerModel.shareObj.idAwardObj[row.id]) {
            doneNode.active = true;
        } else {
            btnGet.active = true;
            // @ts-ignore
            btnGet.row = row;
            if (nowNum >= row.num) {
                // 可领取奖励
                cocosUtil.setRenderableColor(btnGet, constants.colors.white, true);
            } else {
                // 还未满足条件
                cocosUtil.setRenderableColor(btnGet, constants.colors.yin, true);
            }
        }

    }

    refreshTabLayer() {
        let chs = this.tabLayer.children;
        chs.forEach((itemUI, index) => {
            let normalNode = find("normal", itemUI);
            let choseNode = find("chose", itemUI);
            let textNode = find("text", itemUI);
            normalNode.active = false;
            choseNode.active = false;
            if (this.choseTabIndex == index) {
                choseNode.active = true;
                itemUI.getComponent(UITransform).width = choseNode.getComponent(UITransform).width;
                textNode.scale = v3(1.3, 1.3, 1);
            } else {
                normalNode.active = true;
                itemUI.getComponent(UITransform).width = normalNode.getComponent(UITransform).width;
                textNode.scale = v3(1, 1, 1);
            }
        });
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

    onClickTabItem(node) {
        this.choseTabIndex = node.index;
        this.initUI();
    }

    onClickBtnShare() {
        let uid = localStorageManager.uid;
        if (!uid) {
            uid = "";
        }
        let urlParmas = "uid=" + uid;
        myLog.i("开始分享：" + urlParmas);
        tyqSDK.share(urlParmas, () => {
            // 分享成功
            myLog.i("分享结果回调");
            let remain = designManager.config.shareDayNum - playerModel.shareObj.dayNum;
            if (remain > 0) {
                let propItem = UserData.getInstance().addPropNum(constants.propIds.diamond, designManager.config.shareDayDiamond);
                playerModel.shareObj.dayNum++;
                this.openAwardGetLayer([propItem]);
                this.refreshTopLayer();
            }
        });
    }

    onClickBtnGet(node: any) {
        let row = node.row;
        if (playerModel.shareObj.idAwardObj[row.id]) {
            this.createNotice(localText.hasGet);
            return;
        }
        let nowNum = 0;
        switch (this.choseTabIndex + 1) {
            case 1:
                nowNum = playerModel.shareObj.friendNum;
                break;
            case 2:
                nowNum = playerModel.shareObj.friendPassNum;
                break;
            case 3:
                nowNum = playerModel.shareObj.friendAdNum;
                break;
            default:
                break;
        }
        if (nowNum < row.num) {
            this.createNotice(localText.notGet.format(nowNum));
            return;
        }

        playerModel.shareObj.idAwardObj[row.id] = 1;
        let arr = UserData.getInstance().addPropArrByDesign(row.award);
        this.openAwardGetLayer(arr);
        this.initUI();
    }

}

