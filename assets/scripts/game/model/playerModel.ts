import { utilTools } from "../../utils/utilTools";
import { constants } from "../data/constants";
import { msgac } from "../data/msgac";
import { audioManager } from "../manager/audioManager";
import { designManager } from "../manager/designManager";
import { eventManager } from "../manager/eventManager";
import { localStorageManager } from "../manager/localStorageManager";
import { mapModel } from "./mapModel";
import { UserData } from "./UserData";

class PlayerModel {
    private static _instance: PlayerModel;
    private constructor() { }
    public static get instance(): PlayerModel {
        if (!this._instance) {
            this._instance = new PlayerModel();
        }
        return this._instance;
    }

    now: Date = new Date();
    secondInterval: any;
    saveTime: Date;
    skillFreeRefreshCount = 0;

    // 是否强制打开开发环境
    isOpenDev: boolean = false;
    // 运营录制视频版本
    isRecordAd: boolean = false;

    dayTaskObj: any = {};
    energyObj: any = {};
    daySignObj: any = {};
    vipObj: any = {};
    shareObj: any = {};

    isLetterAward = 0;

    skillBombNum = 1;
    skillHealNum = 1;
    skillMagnetNum = 0;
    skillLifeNum = 0;

    init() {
        let now = new Date();
        let data: any = UserData.getInstance().playerData;
        utilTools.timeStrToDate(data);

        audioManager.initData(data.audio);
        this.initData(data.player, now);
        mapModel.initData(data.fight, now);

        this.openSecondInterval();
        eventManager.on(msgac.saveDataBefore, this.onSaveData, this);
    }

    initData(data: any, now: Date) {
        if (!data) {
            data = {};
        }
        if (data.saveTime) {
            this.saveTime = data.saveTime;
        } else {
            this.saveTime = now;
        }

        if (data.skillFreeRefreshCount) {
            this.skillFreeRefreshCount = data.skillFreeRefreshCount
        } else {
            this.skillFreeRefreshCount = 0;
        }

        if (data.dayTaskObj) {
            this.dayTaskObj = data.dayTaskObj;
        } else {
            this.dayTaskObj = {
                awardFlagArr: [],
                taskObj: {},
            };
        }

        if (data.energyObj) {
            this.energyObj = data.energyObj;
        } else {
            this.energyObj = {
                num: 0,
                awardObj: {}
            };
        }
        if (!this.energyObj.endTime) {
            this.energyObj.endTime = new Date(now.getTime() + 7 * constants.times.day);
        }

        if (data.daySignObj) {
            this.daySignObj = data.daySignObj;
        } else {
            let startTime = new Date(now.getTime());
            startTime.setHours(0);
            startTime.setMinutes(0);
            startTime.setSeconds(0);
            startTime.setMilliseconds(0);
            this.daySignObj = {
                startTime: startTime,
                awardDayArr: [],
                finalAward: 0
            };
        }

        if (data.isLetterAward) {
            this.isLetterAward = data.isLetterAward;
        } else {
            this.isLetterAward = 0;
        }

        if (data.vipObj) {
            this.vipObj = data.vipObj;
        } else {
            this.vipObj = {
                vip: 1,
                adNum: 0,
                dayAward: 0,
                onceObj: {}
            };
        }

        if (data.shareObj) {
            this.shareObj = data.shareObj;
        } else {
            this.shareObj = {
                dayNum: 0,
                idAwardObj: {},
                friendNum: 0,
                friendAdNum: 0,
                friendPassNum: 0
            };
        }

        if (data.skillBombNum == undefined) {
            this.skillBombNum = 1;
        } else {
            this.skillBombNum = data.skillBombNum;
        }
        if (data.skillHealNum == undefined) {
            this.skillHealNum = 1;
        } else {
            this.skillHealNum = data.skillHealNum;
        }
        if (data.skillMagnetNum == undefined) {
            this.skillMagnetNum = 0;
        } else {
            this.skillMagnetNum = data.skillMagnetNum;
        }
        if (data.skillLifeNum == undefined) {
            this.skillLifeNum = 1;
        } else {
            this.skillLifeNum = data.skillLifeNum;
        }

        this.addDayTaskNum(1);
    }

    getSaveData(now: Date) {
        let data: any = {};
        data.saveTime = this.saveTime;
        data.skillFreeRefreshCount = this.skillFreeRefreshCount;
        data.dayTaskObj = this.dayTaskObj;
        data.energyObj = this.energyObj;
        data.daySignObj = this.daySignObj;
        data.isLetterAward = this.isLetterAward;
        data.vipObj = this.vipObj;
        data.shareObj = this.shareObj;
        data.skillBombNum = this.skillBombNum;
        data.skillHealNum = this.skillHealNum;
        data.skillMagnetNum = this.skillMagnetNum;
        data.skillLifeNum = this.skillLifeNum;

        return data;
    }

    onSaveData() {
        let now = new Date();
        let data: any = {};
        data.player = this.getSaveData(now);
        data.audio = audioManager.getSaveData(now);

        UserData.getInstance().playerData = data;
    }

    openSecondInterval() {
        if (this.secondInterval) {
            clearInterval(this.secondInterval);
        }
        this.secondInterval = setInterval(this.updateSecond.bind(this), 1000);
        this.updateSecond();
    }

    updateSecond() {
        let now = new Date();
        this.now = now;

        if (utilTools.overDay(this.saveTime, now)) {
            // 跨天了
            this.saveTime = now;
            this.overDay(now);
            // 通知UI层
            eventManager.send(msgac.overDay);
        }

        if (now.getTime() >= this.energyObj.endTime) {
            this.energyObj = {
                num: 0,
                awardObj: {},
                endTime: new Date(now.getTime() + 7 * constants.times.day)
            };
            eventManager.send(msgac.energyObjRefresh);
        }
    }

    /**
     * 是否处于开发环境
     */
    isInDevelopmentEnvironment(): boolean {
        return this.isOpenDev;
    }

    overDay(now: Date) {
        this.skillFreeRefreshCount = 0;
        this.dayTaskObj = {
            awardFlagArr: [],
            taskObj: {},
        };
        this.vipObj.dayAward = 0;
        this.shareObj.dayNum = 0;
        UserData.getInstance().dayAct = 0;
    }

    // 清楚存档，方便开发测试用
    clearGameData() {
        localStorageManager.setGameData({});
        this.init();
    }

    sendToUINotice(info: any) {
        eventManager.send(msgac.showNotice, info);
    }

    getTaskInfoById(id: number) {
        let info = this.dayTaskObj.taskObj[id];
        if (!info) {
            info = {
                num: 0,
                getAward: 0
            };
            this.dayTaskObj.taskObj[id] = info;
        }
        return info;
    }

    addDayTaskNum(id: number, num: number = 1) {
        let info = this.getTaskInfoById(id);
        info.num += num;
        let row = designManager.getRowById(constants.tableName.dayTask, id);
        if (info.num >= row.needNum && !info.getAward) {
            switch (id) {
                case 4:
                case 5:
                case 6:
                    break;
                default:
                    eventManager.send(msgac.refreshRedPoint);
                    break;
            }
        }
    }

    getEnergyAwardInfoById(id: number) {
        let info = this.energyObj.awardObj[id];
        if (!info) {
            info = {};
            this.energyObj.awardObj[id] = info;
        }
        return info;
    }

    hasLetterAward() {
        if (playerModel.isLetterAward) {
            return false;
        }
        return true;
    }

    hasDaySignAward() {
        let now = new Date();
        let day = Math.floor((now.getTime() - playerModel.daySignObj.startTime) / constants.times.day);

        let row = designManager.getRowById(constants.tableName.daySign, day + 1);
        if (!row) {
            return false;
        }

        if (playerModel.daySignObj.awardDayArr.indexOf(day) == -1) {
            return true;;
        }

        return false;
    }

    hasDayTaskAward() {
        let tb = designManager.getTable(constants.tableName.dayTask);
        for (let i in tb) {
            let row = tb[i];
            let info = playerModel.getTaskInfoById(row.id);
            if (info.num >= row.needNum && !info.getAward) {
                return true;
            }
        }
        return false;
    }

    hasEnergyAward() {
        let tb = designManager.getTable(constants.tableName.energyAward);
        for (let i in tb) {
            let row = tb[i];
            if (UserData.getInstance().energy < row.num) {
                break;
            }
            let info = playerModel.getEnergyAwardInfoById(row.id);
            if (!info.award1) {
                return true;
            }
        }
        return false;
    }

    addVipAdNum() {
        this.vipObj.adNum++;
        let row = designManager.getRowById(constants.tableName.vip, this.vipObj.vip);
        if (this.vipObj.adNum >= row.adNum) {
            let nextRow = designManager.getRowById(constants.tableName.vip, this.vipObj.vip + 1);
            if (nextRow) {
                // 提升VIP等级
                this.vipObj.vip++;
                this.vipObj.adNum = 0;
                this.vipObj.dayAward = 0;
                return true;
            }
        }
    }

    hasVipAward() {
        if (!this.vipObj.dayAward || !this.vipObj.onceObj[this.vipObj.vip]) {
            return true;
        }
        return false;
    }

}

export const playerModel = PlayerModel.instance;

