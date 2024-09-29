import { assetManager, AudioSource, director, EventTouch, find, Node, _decorator } from 'cc';
import { myLog } from '../common/myLog';
import { GLoginState, GNetCmd, GNetConst } from '../tyqSDK/network/conf';
import CronCtr from '../tyqSDK/network/CronCtr';
import ServerCtr from '../tyqSDK/network/ServerCtr';
import { tyqAdManager } from '../tyqSDK/tyqAdManager';
import { cocosUtil } from '../utils/cocosUtil';
import { BaseLayer } from './compoment/base/BaseLayer';
import { constants } from './data/constants';
import { msgac } from './data/msgac';
import { audioManager } from './manager/audioManager';
import { eventManager } from './manager/eventManager';
import { layerManager } from './manager/layerManager';
import { localStorageManager } from './manager/localStorageManager';
import { playerModel } from './model/playerModel';
const { ccclass, property } = _decorator;

@ccclass('GameLaunch')
export class GameLaunch extends BaseLayer {

    onLoad() {
        super.onLoad();

        if (playerModel.isInDevelopmentEnvironment()) {
            myLog.isOpen = true;
        }

        cocosUtil.init();
        msgac.init();

        super.onLoad();

        let btnTest = this.getNodeByPath("btnTest");
        btnTest.active = playerModel.isInDevelopmentEnvironment();

        let layer1 = find("layer1", this.node);
        let layerHint = find("layerHint", this.node);
        layerManager.init(layer1, layerHint);

        // 设置音频播放组件
        audioManager.setMusicAudioSource(this.getNodeByPath("audio/music").getComponent(AudioSource));
        audioManager.setEffectAudioSource(this.getNodeByPath("audio/effect").getComponent(AudioSource));

        let loadingName = constants.layers.LoadingLayer;
        this.getNodeByPath(loadingName).addComponent(loadingName);

        let noticeName = constants.layers.NoticeLayer;
        find(noticeName, layerHint).addComponent(noticeName);

        myLog.i("========启动参数：", tyqAdManager.getEnterUrlQuery());

        director.on(GNetCmd.GetFriendVal.toString(), this.onMessageEvent, this);

        director.on(GNetCmd.ReqWxSession.toString(), this.onMessageEvent, this);
        director.on(GNetCmd.GetRegionData.toString(), this.onMessageEvent, this);
    }


    onEnable() {
        super.onEnable();

        this.addEventArr([
            msgac.openLayer,
            msgac.showNotice,
        ]);
    }

    onDisable() {
        super.onDisable();

    }

    start() {
        let canvasNode = find("Canvas");
        canvasNode.on(Node.EventType.TOUCH_START, (event: EventTouch) => {
            eventManager.send(msgac.globalTouchStart, event);
        });

    }

    onMessageEvent(value) {
        console.log("处理服务端发送的消息:", value);
        if (value.status != GNetConst.ResSuccess) {
            console.error("服务端响应失败~!")
            ServerCtr.GetInstance().isLogin = false;
            CronCtr.getInstance().isPutEnable = false;
            ServerCtr.GetInstance().loginState = GLoginState.loginWithAccount
            return;
        }
        let ctr = ServerCtr.GetInstance();
        switch (value.cmd) {
            case GNetCmd.GetFriendVal:
                playerModel.shareObj.friendNum = value.friendCnt;
                let friendData = JSON.parse(value.friendData);
                playerModel.shareObj.friendAdNum = friendData.videoCalCnt;
                playerModel.shareObj.friendPassNum = friendData.friendPassCnt;
                break;
            case GNetCmd.ReqWxSession:
                ctr.token = value.token;
                ctr.regionDataList = value.regionDataList;
                if (value.nickName && value.nickName != '') {
                    ctr.nickName = value.nickName;
                }
                //直接请求服务端数据
                ServerCtr.GetInstance().reqRegionData()
                if (value.wxRes && value.wxRes.openid) {
                    localStorageManager.openId = value.wxRes.openid;
                }
                if (value.uid) {
                    localStorageManager.uid = value.uid;
                }
                break;
            case GNetCmd.GetRegionData:
                ctr.token = value.token;
                ctr.isLogin = true;
                //标记是账号登录
                ServerCtr.GetInstance().serverDataVersion = value.dataVersion

                //如果服务端的版本大于本地，直接赋值
                if (value.dataVersionFlag == GNetConst.ServerIsNew) {
                    ServerCtr.GetInstance().serverData = JSON.parse(value.jsonData)
                }

                ctr.loginState = GLoginState.loginWithAccount
                CronCtr.getInstance().isPutEnable = false;

                console.log("获得服务端数据!", ServerCtr.GetInstance().serverData)

                ctr.uid = value.uid;
                ctr.regionId = value.regionId;


                break;
            default:
                break;
        }
    }

    openLayerRet(data: any) {
        this.openLayer(constants.layers[data.name], data);
    }

    showNoticeRet(data: any) {
        this.createNotice(data);
    }

    onClickBtnTest(node: Node) {
        myLog.i(assetManager.assets);

    }

    onClickBtnHintClose() {
        this.hideHintLayer();
    }

}

