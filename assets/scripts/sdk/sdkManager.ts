
import { localText } from "../game/data/localText";
import { msgac } from "../game/data/msgac";
import { audioManager } from "../game/manager/audioManager";
import { eventManager } from "../game/manager/eventManager";
import { mapModel } from "../game/model/mapModel";
import { playerModel } from "../game/model/playerModel";
import { UserData } from "../game/model/UserData";
import { H5AdSdk4399 } from "../tyqSDK/H5AdSdk4399";
import CronCtr from "../tyqSDK/network/CronCtr";
import { Channel, tyqAdManager } from "../tyqSDK/tyqAdManager";
import { tyqSDK } from "../tyqSDK/tyqSDK";


class SdkManager {

    private static _instance: SdkManager;
    private constructor() {

    }

    public static get instance(): SdkManager {
        if (!this._instance) {
            this._instance = new SdkManager();
        }
        return this._instance;
    }

    // 注意!!!每次打包前，要检查该变量值是否为对应的渠道，git上的版本默认为：WECHAT_MRTGD
    // public channel: ChannelFlag = ChannelFlag.WECHAT_JJWS;

    initSDK() {
        if (tyqAdManager.getChannel() == Channel.H5_4399) {
            H5AdSdk4399.instance.checkDownUrl()
        }
    }

    /**
     * 激励视频广告统一播放接口
     * 完整观看广告后，获得奖励，调用：tmpFunc(1)
     * 中途退出或者观看失败，调用：tmpFunc(0)
     * @param cb 
     */
    openAd(info: string, cb: Function) {
        let tmpFunc = (st: number) => {
            if (st == 0) {
                eventManager.send(msgac.showNotice, localText.adAwardHint);
            } else if (st == -1) {
                eventManager.send(msgac.showNotice, localText.noRewardAd);
            } else if (st == 2) {
                eventManager.send(msgac.showNotice, localText.noAd);
            }
            cb(st);
            if (st == 1) {
                playerModel.addDayTaskNum(11);
                // 好友观看视频广告累计数量
                UserData.getInstance().$videoCalCnt++;
                CronCtr.getInstance().saveDataToCloud("videoCalCnt", UserData.getInstance().$videoCalCnt);
            }
            audioManager.gameOnShow(true);
        };

        // // test
        // tmpFunc(1);
        // return;

        if (playerModel.isInDevelopmentEnvironment() || playerModel.isRecordAd) {
            // 开发环境，默认直接成功
            tmpFunc(1);
            return;
        }

        if (tyqAdManager.getChannel() == Channel.DEFAULT) {
            // 电脑测试直接返回观看成功
            tmpFunc(1);
            return;
        }

        if (mapModel.mapId > 0) {
            mapModel.mapSystem.fightPause();
        }

        if (tyqAdManager.getChannel() == Channel.H5_4399) {
            H5AdSdk4399.instance.showRewardedAd((state) => {
                if (mapModel.mapId > 0) {
                    mapModel.mapSystem.fightResume();
                }
                tmpFunc(state);
            })
        } else {
            tyqSDK.showRewardedAd(info, (state) => {
                if (mapModel.mapId > 0) {
                    mapModel.mapSystem.fightResume();
                }
                tmpFunc(state);
            })
        }

    }

    getShareUid() {
        let query = tyqAdManager.getEnterUrlQuery();
        if (query && query.uid) {
            return query.uid;
        }
        return "";
    }

}

export const sdkManager = SdkManager.instance;

