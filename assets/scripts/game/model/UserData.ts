import { Component, Game, game, instantiate, js, sys, tween, v3 } from "cc";
import { myLog } from "../../common/myLog";
import { GLoginState } from "../../tyqSDK/network/conf";
import CronCtr from "../../tyqSDK/network/CronCtr";
import ServerCtr from "../../tyqSDK/network/ServerCtr";
import { cocosUtil } from "../../utils/cocosUtil";
import { constants } from "../data/constants";
import { msgac } from "../data/msgac";
import { audioManager } from "../manager/audioManager";
import { designManager } from "../manager/designManager";
import { eventManager } from "../manager/eventManager";
import { RedPointLogicMgr, RPointMask } from "../manager/RedPointLogicMgr";
import { playerModel } from "./playerModel";


export interface LevelDataItem {
    Level: number   //
    Time: number //  最大生存时间 ，单位秒
    ReceiveState: number[] //[0,0,0] //3个级别章节奖励领取状态。0:未领取 1：已领取
}

export interface PropItem {
    Id: number
    Num: number
}

export class UserData extends Component {

    private static _instance: UserData = null

    public $localKey: string = "UserData";
    private $time: number = null;

    /**关卡 */
    private $roleLv: number = 1

    /**关卡 */
    private $roleExp: number = 1

    /**体力 */
    private $power: number = 30

    /**体力上限 */
    private _maxPower: number = 30

    private _powerRevoverTime = 60
    /**体力倒计时 */
    private $powerTime: number = 0

    /** 宝石 */
    private $baoShi: number = 1000

    private $optStone: number = 0;
    private $dayAct: number = 0;

    /** 金币 */
    private $coin: number = 1000

    // 小手指引
    private $mapHand: number = 0;
    // 攻击力
    private _attack: number = 0
    // 生命值
    private _life: number = 0

    private $curMap = 1

    private $openLevel = 1

    private $levelData = []

    private $mapData: any

    private $propData = [{ id: 301, num: 0, iswear: 0 }]

    private $wearProp = [0, 0, 0, 0, 0, 0]

    private $playerData: any = {};

    private $patrolStartTime = 0

    private $patrolRewardProp = []
    private $patrolRewardPropArr = []

    private $heroSkin = 2001

    public $drawNormalNum = 0
    public $drawGradeNum = 0

    // 爬塔
    public $towerWeaponIdArr = [10130, 10135, 10140, 10145, 10150, 10155, 10160, 10165];
    public $towerWeaponId = 0;
    public $towerWeaponLvObj = {};
    public $towerMapIdObj = {};


    public $pyramidState: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    public $pyramidDrawTime = 0

    public $friendPassCnt = 0 //好友通关数
    public $videoCalCnt = 0 //视频累计

    public $freeDraw = 0

    public static getInstance() {
        if (this._instance == null) {
            this._instance = new UserData()
            this._instance.onInit()
        }
        return this._instance
    }

    onInit() {
        //使用服务端数据
        console.log("-----比较服务端数据版本号---", ServerCtr.GetInstance().dataVersion, ServerCtr.GetInstance().serverDataVersion)
        if (ServerCtr.GetInstance().loginState == GLoginState.loginWithAccount) {
            if (ServerCtr.GetInstance().dataVersion < ServerCtr.GetInstance().serverDataVersion) {
                this.loadServerData(ServerCtr.GetInstance().serverData)
            } else {
                this.load();
            }
        } else {
            this.load();
        }

        // console.error("-----跟踪----")

        this.$time = 0;
        this.initEvent();
        this.setBaseConfig()
        //   this.$wearProp = [10001, 0, 0, 10003, 0, 0]
        this.afterLoadData();


        //上传数据
        if (ServerCtr.GetInstance().dataVersion > ServerCtr.GetInstance().serverDataVersion) {
            CronCtr.getInstance().uploadAllRecord(this.getLocalData())
        }

        this.schedule(() => {
            CronCtr.getInstance().uploadAllRecord(this.getLocalData())
        }, 300)

    }


    setBaseConfig() {
        this._maxPower = designManager.config.energyMax
        this._powerRevoverTime = designManager.config.energyRecoverTime
        this.updateRoleAtkHp()
    }

    afterLoadData() {
        if (!this.$towerWeaponId) {
            this.$towerWeaponId = this.$towerWeaponIdArr[0];
        }
        if (this.getPropById(2001) <= 0) {
            this.addPropNum(2001, 1);
        }
    }

    setConfig() {
        this.$baoShi = designManager.config.basicGem
        this.$coin = designManager.config.basicGold
        this.$propData = [{ id: 301, num: 0, iswear: 0 }]
        this.$wearProp = [0, 0, 0, 0, 0, 0]
        this.$levelData = []
        this.$curMap = 1
        this.$openLevel = 1
        this.$power = designManager.config.energyMax

        this.$mapData = null
        this.$roleExp = 0
        this.$roleLv = 1
        this.$mapHand = 0;
        this.$patrolRewardProp = []
        this.$patrolRewardPropArr = []

        this.$patrolStartTime = (new Date()).getTime()

        this.$drawNormalNum = 0
        this.$drawGradeNum = 0

        this.$pyramidState = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

        this.$friendPassCnt = 0;
        this.$videoCalCnt = 0;
    }

    public getHeroSkin(id: number = 0) {
        if (!id) {
            id = this.$heroSkin;
        }
        let data = designManager.getRowById(constants.tableName.prop, id)
        if (data) {
            return "skin" + data.p2
        }
        return "skin1"
    }

    public set heroSkin(skinID) {
        for (let index = 0; index < this.$propData.length; index++) {
            if (this.$propData[index].id == skinID && this.$propData[index].num > 0) {
                this.$heroSkin = skinID
                return
            }
        }
    }

    public get heroSkin() {
        return this.$heroSkin;
    }

    public isHaveProp(id: number | any[]) {
        if (typeof (id) === "number") {
            for (let index = 0; index < this.$propData.length; index++) {
                if (this.$propData[index].id == id && this.$propData[index].num > 0) {
                    return true
                }
            }
        } else {
            let havenum = 0
            for (let i = 0; i < id.length; i++) {
                for (let index = 0; index < this.$propData.length; index++) {
                    if (this.$propData[index].id == id[i] && this.$propData[index].num > 0) {
                        havenum++
                    }
                }
            }
            if (havenum >= id.length) {
                return true
            }
        }

        return false
    }

    public get roleLv() {
        return this.$roleLv;
    }

    public get power() {
        this.checkPowerTime()
        return this.$power;
    }

    public towerWeaponAddLv() {
        let ret: any = {};
        let lv = this.getWeaponLv(this.$towerWeaponId);
        let nextRow = designManager.getRowById(constants.tableName.weaponOpt, lv + 1);
        if (!nextRow) {
            // 已满级
            ret.st = 2;
            return ret;
        }
        let row = designManager.getRowById(constants.tableName.weaponOpt, lv);
        let num = this.getPropNumById(row.propId);
        if (num < row.propNum) {
            // 消耗道具不足
            ret.st = 3;
            ret.propId = row.propId;
            return ret;
        }

        this.addPropNum(row.propId, -row.propNum);
        this.$towerWeaponLvObj[this.$towerWeaponId] = lv + 1;

        ret.st = 1;

        return ret;

    }

    public getTowerMapInfo(mapId: number) {
        let info = this.$towerMapIdObj[mapId];
        if (!info) {
            info = {
                floor: 1
            };
        }

        return info;
    }
    public addTowerMapFloor(mapId: number) {
        let info = this.getTowerMapInfo(mapId);
        let nextFloor = info.floor + 1;
        if (!designManager.getRowById(constants.tableName.towerFloor, nextFloor)) {
            // 已到达最顶层
            return;
        }
        info.floor++;
        this.$towerMapIdObj[mapId] = info;
    }

    public getWeaponLv(id: number = this.$towerWeaponId) {
        let lv = this.$towerWeaponLvObj[id];
        if (!lv) {
            lv = 1;
        }

        return lv;
    }

    public checkPowerTime() {
        if (this.$power < this._maxPower) {
            if (this.$powerTime == 0) {
                this.$powerTime = new Date().getTime()
            } else {
                let time = new Date().getTime() - this.$powerTime
                let num = Math.floor(time / 1000 / this._powerRevoverTime)
                if (num > 0) {
                    this.$power += num
                    this.$power = Math.min(this._maxPower, Math.max(0, this.$power))
                    this.$powerTime = this.$powerTime + num * this._powerRevoverTime * 1000
                }
            }
        } else {
            this.$powerTime = 0
        }
    }

    public getCountTime() {
        if (this.$power < this._maxPower) {
            return Math.max(0, Math.min(this._powerRevoverTime, this._powerRevoverTime - (new Date().getTime() - this.$powerTime) / 1000))
        }
        return 0
    }

    public usePower(num) {
        this.$power += num
        this.$power = Math.min(this._maxPower, Math.max(0, this.$power))
        this.checkPowerTime()
    }

    public get baoshi() {
        return this.$baoShi
    }

    public useBaoShi(num: number, update = false) {
        this.$baoShi += num;
        this.$baoShi = Math.max(0, this.$baoShi);
        if (update) {
            eventManager.send(msgac.commonResRefresh)
        }
    }

    public get optStone() {
        return this.$optStone;
    }
    public useOptStone(num: number) {
        this.$optStone += num;
        this.$optStone = Math.max(0, this.$optStone);
        ServerCtr.GetInstance().addDataVersion()
    }

    public get dayAct() {
        return this.$dayAct;
    }
    public set dayAct(num: number) {
        this.$dayAct = num;
        ServerCtr.GetInstance().addDataVersion()
    }
    public useDayAct(num: number) {
        this.$dayAct += num;
        this.$dayAct = Math.max(0, this.$dayAct);
        ServerCtr.GetInstance().addDataVersion()
    }

    public get energy() {
        return playerModel.energyObj.num;
    }
    public useEnergy(num: number) {
        playerModel.energyObj.num += num;
        playerModel.energyObj.num = Math.max(0, playerModel.energyObj.num);
        ServerCtr.GetInstance().addDataVersion()
    }

    public checkAndUseBaoshi(num: number, update = false) {
        if (this.$baoShi >= num) {
            this.useBaoShi(0 - num, update)
            return true
        }
        return false
    }

    public useCoin(num: number, update = false) {
        this.$coin += num
        this.$coin = Math.max(0, this.$coin)
        if (update) {
            eventManager.send(msgac.commonResRefresh)
        }
        ServerCtr.GetInstance().addDataVersion()
    }

    public cheackAndUseCoin(num: number, update = false) {
        if (this.$coin >= num) {
            this.useCoin(0 - num, update)
            return true
        }
        return false
    }

    public get coin() {
        return this.$coin
    }

    public get attack() {
        return this._attack
    }

    public get life() {
        return this._life
    }

    public addExp(num) {
        this.$roleExp += num
        let roleData = designManager.getTable(constants.tableName.heroLevel)
        for (let index = this.roleLv + 1; index < roleData.length; index++) {
            let element = roleData[index - 1];
            if (this.$roleExp >= element.exp) {
                this.$roleLv = index
                this.updateRoleAtkHp()
            } else {
                return
            }
        }
        ServerCtr.GetInstance().addDataVersion()
    }

    public updateRoleAtkHp() {
        let roleData = designManager.getRowById(constants.tableName.heroLevel, this.$roleLv)
        this._attack = roleData.atk
        this._life = roleData.hp

        for (let i = 0; i < this.$wearProp.length; i++) {
            if (this.$wearProp[i] > 0) {
                let propData = designManager.getRowById(constants.tableName.prop, this.$wearProp[i])
                if (propData && propData.atk) {
                    this._attack += propData.atk
                }
                if (propData && propData.hp) {
                    this._life += propData.hp
                }
            }
        }

        let suitInfo = this.getSuitPercentAdd();
        this._attack *= 1 + suitInfo.atk;
        this._life *= 1 + suitInfo.hp;
        this._attack = Math.floor(this._attack)
        this._life = Math.floor(this._life)
    }

    public getSuitPercentAdd() {
        let suitData = this.getSuitId()
        let atkAdd = 0;
        let hpAdd = 0;
        if (suitData != 0) {
            let suitId = suitData[0]
            let suitNum = suitData[1]
            let suitAttr = designManager.getRowById(constants.tableName.suit, suitId)
            if (suitNum >= 5) {
                atkAdd = suitAttr.effectAtk_5
                hpAdd = suitAttr.effectHP_5
            } else if (suitNum >= 3) {
                atkAdd = suitAttr.effectAtk_3
                hpAdd = suitAttr.effectHP_3
            }
        }
        let ret = {
            atk: atkAdd / 100,
            hp: hpAdd / 100
        };

        return ret;
    }

    public weaponOptLvEffect(val: number, lv: number) {
        let optRow = designManager.getRowById(constants.tableName.weaponOpt, lv);
        if (optRow) {
            val = val * (1 + optRow.atk / 100);
            val = Math.ceil(val);
        }
        return val;
    }

    public getTowerRoleProInfo(isEnter: boolean = false) {
        let roleData = designManager.getRowById(constants.tableName.heroLevel, this.$roleLv);

        // 等级加成
        let atk = roleData.atk;
        let hp = roleData.hp;

        // 装备加成
        for (let i = 0; i < this.$wearProp.length; i++) {
            let id = this.$wearProp[i];
            if (i == 0) {
                id = this.$towerWeaponId;
                if (isEnter) {
                    id = 0;
                }
            }
            if (id > 0) {
                let propData = designManager.getRowById(constants.tableName.prop, id);
                if (propData && propData.atk) {
                    let val = propData.atk;
                    if (i == 0) {
                        let lv = this.getWeaponLv(id);
                        val = this.weaponOptLvEffect(val, lv);
                    }
                    atk += val;
                }
                if (propData && propData.hp) {
                    hp += propData.hp;
                }
            }
        }

        // 套装加成
        let suitInfo = this.getSuitPercentAdd();
        atk *= 1 + suitInfo.atk;
        hp *= 1 + suitInfo.hp;

        atk = Math.floor(atk);
        hp = Math.floor(hp);

        return {
            atk: atk,
            hp: hp
        };

    }

    public get roleExp() {
        return this.$roleExp
    }

    public getNextLevelExp() {
        let nextdata = designManager.getRowById(constants.tableName.heroLevel, this.$roleLv + 1)
        if (nextdata) {
            return nextdata.exp
        }
        return this.$roleExp
    }

    public setCurMap(mapid) {
        this.$curMap = mapid
        ServerCtr.GetInstance().addDataVersion()
    }

    public getCurMap() {
        return this.$curMap
    }

    public set openLevel(level) {
        this.$openLevel = level
        ServerCtr.GetInstance().addDataVersion()
    }

    public get openLevel() {
        //return 2
        return this.$openLevel
    }

    public set mapData(data: any) {
        this.$mapData = data
        ServerCtr.GetInstance().addDataVersion()
    }

    public get mapData() {
        return this.$mapData
    }

    public set playerData(data: any) {
        this.$playerData = data;
        ServerCtr.GetInstance().addDataVersion()
    }
    public get playerData() {
        return this.$playerData;
    }

    public set mapHand(st: number) {
        this.$mapHand = st;
        ServerCtr.GetInstance().addDataVersion()
    }
    public get mapHand() {
        return this.$mapHand;
    }

    public get wearProp() {
        return this.$wearProp
    }

    /**
     *  穿戴装备
     * @param propdata cj
     * @returns 
     */
    public setWearProp(propdata) {
        if (propdata) {
            if (this.$wearProp[propdata.wearIndex - 1] == propdata.id) {
                return
            } else if (this.$wearProp[propdata.wearIndex - 1] == 0) {
                this.$wearProp[propdata.wearIndex - 1] = propdata.id
                this.setPropWearById(propdata.id, 1)
            } else {
                this.setPropWearById(this.$wearProp[propdata.wearIndex - 1], 0)
                this.$wearProp[propdata.wearIndex - 1] = propdata.id
                this.setPropWearById(propdata.id, 1)
            }
            RedPointLogicMgr.ins().sendValueSettingMsg(RPointMask.RPM_PropWear, false)
            this.updateRoleAtkHp()
        }
    }

    /**
     * 卸下装备
     */
    public unWearProp(propdata) {
        if (propdata) {
            if (this.$wearProp[propdata.wearIndex - 1] == propdata.id) {
                this.$wearProp[propdata.wearIndex - 1] = 0
                this.setPropWearById(propdata.id, 0)
                this.updateRoleAtkHp()
                RedPointLogicMgr.ins().sendValueSettingMsg(RPointMask.RPM_PropWear, false)
                ServerCtr.GetInstance().addDataVersion()
            }
        }
    }

    /**
     * 自动判断是穿戴 还是 卸下 操作
     * @param propdata 
     */
    public autoWearProp(propdata) {
        if (propdata) {
            if (this.$wearProp[propdata.wearIndex - 1] == propdata.id) {
                this.$wearProp[propdata.wearIndex - 1] = 0
                this.setPropWearById(propdata.id, 0)
            } else {
                this.$wearProp[propdata.wearIndex - 1] = propdata.id
                this.setPropWearById(propdata.id, 1)
            }
            this.updateRoleAtkHp()
            RedPointLogicMgr.ins().sendValueSettingMsg(RPointMask.RPM_PropWear, false)
            ServerCtr.GetInstance().addDataVersion()
        }
    }

    /**
     * 检查当前装备是否穿戴在身上
     * @param propdata 
     * @returns 
     */
    public checkWearProp(propdata) {
        if (propdata) {
            return this.$wearProp[propdata.wearIndex - 1] == propdata.id
        }
        return false
    }

    /**
     * 检查当前装备是否 比穿戴在身上的 装备更好
     * @param propId 
     * @returns 
     */
    public checkThisPropBestToWear(propId) {
        let propdata = designManager.getRowById(constants.tableName.prop, propId)
        if (propdata.wearIndex > 0) {
            if (this.$wearProp[propdata.wearIndex - 1] == 0) {
                for (let index = 0; index < this.$propData.length; index++) {
                    let item = designManager.getRowById(constants.tableName.prop, this.$propData[index].id);
                    if (item.wearIndex == propdata.wearIndex) {
                        if (propdata.quality < item.quality) {
                            return false
                        }
                    }
                }
                return true
            }

            let wearpropdata = designManager.getRowById(constants.tableName.prop, this.$wearProp[propdata.wearIndex - 1])
            if (wearpropdata.quality < propdata.quality) {

                for (let index = 0; index < this.$propData.length; index++) {
                    let item = designManager.getRowById(constants.tableName.prop, this.$propData[index].id);
                    if (item.wearIndex == propdata.wearIndex) {
                        if (propdata.quality < item.quality) {
                            return false
                        }
                    }
                }

                return true
            }
        }
        return false
    }

    /**
     * 检查是否有可以穿戴的装备
     * @returns 
     */
    public checkBestPropToWear() {
        for (let index = 0; index < this.$propData.length; index++) {
            let value = this.$propData[index];
            let propdata = designManager.getRowById(constants.tableName.prop, value.id)
            if (propdata.wearIndex > 0) {
                if (this.$wearProp[propdata.wearIndex - 1] == 0) {
                    return true
                }

                let wearpropdata = designManager.getRowById(constants.tableName.prop, this.$wearProp[propdata.wearIndex - 1])
                if (wearpropdata.quality < propdata.quality) {
                    return true
                }
            }
        }
        return false
    }

    /**
     *  获得 装备
     * @param id 装备ID
     * @param num 获得数量
     * @returns 
     */
    public setPropById(id, num) {
        for (let index = 0; index < this.$propData.length; index++) {
            let value = this.$propData[index];
            if (value.id == id) {
                value.num += num
                return
            }
        }
        this.$propData.push({ id: id, num: num, iswear: 0 })
        ServerCtr.GetInstance().addDataVersion()
    }

    /**
     * 合成装备
     * @param blessId 合成装备ID
     * @param getPropId 获得装备ID
     * @param needNum 需要数量
     */
    public blessProp(blessId, getPropId, needNum) {
        this.setPropById(getPropId, 1)
        this.setPropById(blessId, needNum)
        RedPointLogicMgr.ins().sendValueSettingMsg(RPointMask.RPM_BlessProp, false)

        for (let index = 0; index < this.$wearProp.length; index++) {
            if (this.$wearProp[index] == blessId) {
                this.$wearProp[index] = getPropId
                this.setPropWearById(getPropId, 1)
                this.setPropWearById(blessId, 0)
                this.updateRoleAtkHp()
            }
        }
        eventManager.send(msgac.updateDropData)
        ServerCtr.GetInstance().addDataVersion()
    }

    /**
     * 检查 是否有可以合成的装备
     * @returns 
     */
    public checkPropCanBless() {
        let arr = this.$propData
        for (let index = 0; index < arr.length; index++) {
            if (arr[index].num >= 3) {
                let curProp = designManager.getRowById(constants.tableName.prop, arr[index].id)
                if (curProp && curProp.blessId && curProp.blessId > 0) {
                    return true
                }
            }
        }
        return false
    }

    /**
     * 检查当前章节是否可以领取宝箱
     */
    public checkChapterCanReward() {
        let leveldata = UserData.getInstance().getLevelData(UserData.getInstance().getCurMap())
        for (let i = 0; i < 3; i++) {
            if (leveldata.Time >= (i * 5 + 5) * 60) {
                if (leveldata.ReceiveState[i] == 0) {
                    return true
                }
            }
        }
        return false
    }

    public setPropWearById(id, isWear) {
        for (let index = 0; index < this.$propData.length; index++) {
            let value = this.$propData[index];
            if (value.id == id) {
                value.iswear = isWear
                return
            }
        }
        ServerCtr.GetInstance().addDataVersion()
    }


    public _isShowOpenLevel = false
    /**
     * 保存关卡完成情况的数据
     * @param data 
     */
    public setLevelData(data: LevelDataItem) {
        let row = designManager.getRowById(constants.tableName.map, data.Level);
        if (row.type != constants.mapTypes.main) {
            return;
        }
        let index = data.Level - 1
        if (index < 0) {
            index = 0
        }
        if (this.$levelData[index] == null) {
            this.$levelData[index] = data
        } else {
            if (data.Time > this.$levelData[index].Time) {
                this.$levelData[index].Time = data.Time
            }
        }
        if (this.$levelData[index].Time >= 15 * 60) {
            if (this.$openLevel <= data.Level) {
                let nextId = this.$openLevel + 1;
                if (designManager.getRowById(constants.tableName.map, nextId)) {
                    this.$openLevel++
                    this.$curMap = this.$openLevel
                    this._isShowOpenLevel = true
                }
                ServerCtr.GetInstance().addDataVersion()
            }
        }
    }

    public getLevelData(level) {
        let index = level - 1
        if (index < 0) {
            index = 0
        }

        if (this.$levelData[index]) {
            return this.$levelData[index]
        }

        let ld: LevelDataItem = {
            Level: level,
            Time: 0,
            ReceiveState: [0, 0, 0],
        }

        UserData.getInstance().setLevelData(ld)
        return ld
    }

    public get propData() {
        return this.$propData
    }

    public getPropSort() {
        let dataArr = [];
        for (let i in this.$propData) {
            let prop = this.$propData[i];
            let row = designManager.getRowById(constants.tableName.prop, prop.id);
            if (row.type == 8 || row.type == 11) {
                dataArr.push(prop);
            }
        }
        let equipSort = (a: { id }, b: { id }) => {
            let equipDataA = designManager.getRowById(constants.tableName.prop, a.id)
            let equipDataB = designManager.getRowById(constants.tableName.prop, b.id)
            return equipDataA.wearIndex - equipDataB.wearIndex;
        }
        dataArr.sort(equipSort);
        return dataArr;
    }

    public getPropById(id) {
        for (let index = 0; index < this.$propData.length; index++) {
            let value = this.$propData[index];
            if (value.id == id) {
                return value.num
            }
        }
        return 0
    }

    public getSuitId() {
        let suitId = []
        for (let index = 0; index < this.$wearProp.length; index++) {
            let element = this.$wearProp[index];
            if (element > 0) {
                let propData1 = designManager.getRowById(constants.tableName.prop, element)
                if (!suitId[propData1.suit_id]) {
                    suitId[propData1.suit_id] = 0
                }
                suitId[propData1.suit_id]++
            }
        }
        for (let index = 0; index < suitId.length; index++) {
            if (suitId[index] >= 3) {
                return [index, suitId[index]]
            }
        }
        return 0
    }

    public getSuitNum(propData) {
        let suitId = propData.suit_id
        let num = 0
        for (let index = 0; index < this.$wearProp.length; index++) {
            let element = this.$wearProp[index];
            if (element > 0) {
                let propData1 = designManager.getRowById(constants.tableName.prop, element)
                if (propData1.suit_id == suitId) {
                    num++
                }
            }
        }
        return num
    }

    public tobePropItem(arr: any[]) {
        let propArr = []
        for (let i = 0; i < arr.length; i++) {
            let prop: PropItem = {
                Id: arr[i][0],
                Num: arr[i][1],
            }
            propArr.push(prop)
        }
        return propArr
    }

    public getPropNumById(id: number) {
        let num = 0;
        let row = designManager.getRowById(constants.tableName.prop, id);
        switch (row.type) {
            case 1:
                num = this.$coin;
                break;
            case 9:
                num = this.$baoShi;
                break;
            case 10:
                num = this.$roleExp;
                break;
            case 12:
                num = this.$power;
                break;
            case 14:
                num = this.$optStone;
                break;
            case 15:
                num = this.$dayAct;
                break;
            default:
                for (let i in this.$propData) {
                    let prop = this.$propData[i];
                    if (prop.id == id) {
                        num = prop.num;
                        break;
                    }
                }
                break;
        }
        return num;
    }

    /**
     * 获得/扣减道具
     * @param id 道具id 
     * @param num 道具数量，负数表示 扣减
     */
    public addPropNum(id: number, num: number) {
        let propItem: PropItem = {
            Id: id,
            Num: num
        };
        this.getRewardProp([propItem]);

        return propItem;
    }

    public addPropByDesign(award: any) {
        return this.addPropNum(award[0], award[1]);
    }

    public addPropArrByDesign(awardArr: any) {
        let arr = [];
        for (let i in awardArr) {
            let award = awardArr[i];
            let propItem: PropItem = {
                Id: award[0],
                Num: award[1]
            };
            arr.push(propItem);
        }
        this.getRewardProp(arr);

        return arr;
    }

    /**；領取獎勵 格式 [10001,1];[10002,2];[10003,1] */
    public getRewardProp(rewardArr: PropItem[], double = 1) {
        for (let i = 0; i < rewardArr.length; i++) {
            let dataArr = rewardArr[i];
            let propdata = designManager.getRowById(constants.tableName.prop, dataArr.Id)
            if (!propdata) {
                myLog.e("prop is not in design", propdata);
                continue;
            }
            if (propdata.type == 1) {
                this.useCoin(dataArr.Num * double)
            } else if (propdata.type == 10) {
                this.addExp(dataArr.Num * double)
            } else if (propdata.type == 8 || propdata.type == 11) {
                this.setPropById(dataArr.Id, dataArr.Num * double)
                RedPointLogicMgr.ins().sendValueSettingMsg(RPointMask.RPM_PropWear, false)
                RedPointLogicMgr.ins().sendValueSettingMsg(RPointMask.RPM_BlessProp, false)

            } else if (propdata.type == 9) {
                this.useBaoShi(dataArr.Num * double)
            } else if (propdata.type == 12) {
                this.usePower(dataArr.Num * double)
            } else if (propdata.type == 14) {
                // 魂晶
                this.useOptStone(dataArr.Num * double);
            } else if (propdata.type == 15) {
                // 日活跃
                this.useDayAct(dataArr.Num * double);
            } else if (propdata.type == 16) {
                // 能量战令
                this.useEnergy(dataArr.Num * double);
            } else {
                this.setPropById(dataArr.Id, dataArr.Num * double)
            }
        }
        eventManager.send(msgac.commonResRefresh)
        this.saveData()
    }

    /**
     *  使用道具。
     * @param dataArr 
     * @returns  true 表示道具充足并使用。false 表示资源不够
     */
    public checkUseProp(dataArr: PropItem) {
        let propdata = designManager.getRowById(constants.tableName.prop, dataArr.Id)
        if (!propdata) {
            myLog.e("prop is not in design", propdata);
            return
        }

        if (propdata.type == 1) {
            if (this.$coin >= dataArr.Num) {
                this.useCoin(0 - dataArr.Num)
                return true
            }
            return false
        } else if (propdata.type == 9) {
            if (this.$baoShi >= dataArr.Num) {
                this.useBaoShi(0 - dataArr.Num)
                return true
            }
            return false
        } else if (propdata.type == 14) {
            if (this.$optStone >= dataArr.Num) {
                this.useOptStone(0 - dataArr.Num)
                return true
            }
            return false
        }
    }


    showGetAnimal(parent, node, start, end) {
        let arr = cocosUtil.getCircleDirectionArr(10, 100);
        for (let index = 0; index < 10; index++) {
            let node1 = instantiate(node)
            parent.addChild(node1)
            node1.layer = parent.layer
            tween(node1).set({ positon: v3(start[0], start[1], 0) }).to(0.2, { positon: v3(arr[index].x, arr[index].y, 0) }).to(0.5, { positon: v3(end[0], end[1], 0) }).start()
            cocosUtil.drawCurvePath(node1, [arr[index].x, arr[index].y], [end[0], end[1]], 0.2 + Math.random() * 0.2, 30, 0.1 + index * 0.05)
        }
        return
    }

    stringToArr(str: string) {
        let index = str.indexOf("[")
        let endIndex = str.indexOf("]")
        let newStr = str.substring(index + 1, endIndex)
        return newStr.split(",")
    }

    /**注冊事件*/
    protected initEvent() {
        game.on(Game.EVENT_HIDE, () => {
            // @ts-ignore
            if (this.resetAccount) {
                return;
            }
            this.$time = Date.now()
            this.saveData()
            CronCtr.getInstance().uploadAllRecord(this.getLocalData())
        });
        game.on(Game.EVENT_SHOW, () => {
            audioManager.gameOnShow();
        });
    }

    public saveData() {
        eventManager.send(msgac.saveDataBefore);
        let obj = js.createMap(true);;
        for (let key in this) {
            if (key.indexOf('$') != -1) {
                obj[key] = this[key];
            }
        }
        sys.localStorage.setItem(this.$localKey, JSON.stringify(obj));
        ServerCtr.GetInstance().addDataVersion()
        eventManager.send(msgac.saveDataAfter);
    }

    public getLocalData() {
        let obj = js.createMap(true);
        for (let key in this) {
            if (key.indexOf('$') != -1) {
                obj[key] = this[key];
            }
        }
        return {
            "userData": JSON.stringify(obj),
            "version": ServerCtr.GetInstance().dataVersion,
            "friendPassCnt": this.$friendPassCnt, //通关数 好友最大值
            "videoCalCnt": this.$videoCalCnt, //累积观看视频数量，累积值
        }
        // sys.localStorage.setItem(this.$localKey, JSON.stringify(obj));
    }

    public loadServerData(jsonData) {
        console.log("---------各种问题---", jsonData)
        ServerCtr.GetInstance().dataVersion = jsonData["version"]
        let obj = jsonData["userData"];
        if (obj) {
            js.mixin(this, JSON.parse(obj));
        }
        sys.localStorage.setItem(this.$localKey, JSON.stringify(obj));
    }

    public remove() {
        sys.localStorage.removeItem(this.$localKey);
        this.onInit()
        eventManager.send(msgac.commonResRefresh)
    }

    // 注销账号
    public clearAccountData() {
        ServerCtr.GetInstance().addDataVersion();
        CronCtr.getInstance().uploadAllRecord({ "version": ServerCtr.GetInstance().dataVersion + 1 });
        sys.localStorage.removeItem("dataVersion");
        // @ts-ignore
        this.resetAccount = true;
    }

    public load() {
        let obj = sys.localStorage.getItem(this.$localKey);
        if (obj) {
            js.mixin(this, JSON.parse(obj));
        } else {
            this.setConfig()
        }
    }


    private _drawAllWeight = [0, 0, 0]
    private _drawAllSureWeight = [0, 0, 0]

    /**
     * 获得一次抽卡数据
     */
    public getDrawItem(drawType) {
        let type = 2
        if (drawType == 0) {
            this.$drawNormalNum++
            type = 2
        } else {
            this.$drawGradeNum++
            type = 1
        }
        let isBichou = false
        //  console.log("this.$drawGradeNum = ",this.$drawGradeNum)
        //  console.log("this.$drawNormalNum = ",this.$drawNormalNum)

        if (type == 2) {
            if (this.$drawNormalNum >= designManager.config.extra2) {
                //     console.log(" 普通必抽")
                isBichou = true
                this.$drawNormalNum = 0
            }
        } else {
            if (this.$drawGradeNum >= designManager.config.extra1) {
                isBichou = true
                // console.log(" 高级 必抽")
                this.$drawGradeNum = 0
            }
        }


        let drawData = designManager.getRowsByType(constants.tableName.draw, type)
        if (this._drawAllWeight[type] == NaN || this._drawAllWeight[type] <= 0) {
            this._drawAllSureWeight[type] = 0
            drawData.forEach(element => {
                if (type == element.type) {
                    this._drawAllWeight[type] += element.weight
                    if (element.extra != "")
                        this._drawAllSureWeight[type] += parseInt(element.extra)
                }
            });
        }
        let item = null
        if (isBichou) {
            let rand = Math.floor(Math.random() * this._drawAllSureWeight[type])
            for (let index = 0; index < drawData.length; index++) {
                let element = drawData[index];
                if (type == element.type && element.extra) {
                    rand -= element.extra
                    if (rand <= 0) {
                        item = element
                        // console.log(" 必抽，", item)
                        break
                    }
                }
            }
        } else {
            let rand = Math.floor(Math.random() * this._drawAllWeight[type])
            for (let index = 0; index < drawData.length; index++) {
                let element = drawData[index];
                if (type == element.type) {
                    rand -= element.weight
                    if (rand <= 0) {
                        item = element
                        break
                    }
                }
            }
        }
        // if (item && item.extra && item.extra > 0) {
        //     // if (type == 2) {
        //     //     this.$drawNormalNum = 0
        //     // } else {
        //     //     this.$drawGradeNum = 0
        //     // }
        // }
        if (item == null) {
            console.log("item null 没抽中 ")
        }
        return item
    }


    /**添加巡逻奖励 */
    public getCurPatrolData() {
        if (this.$patrolStartTime <= 0) {
            this.$patrolStartTime = (new Date()).getTime()
            return
        }

        let curTime = (new Date()).getTime()
        let rewardArr = this.getPatrolReward()

        this.$patrolStartTime = curTime
        this.$patrolRewardPropArr = []
        this.$patrolRewardProp = []

        this.getRewardProp(rewardArr)
        // this.getRewardProp(this.$patrolRewardPropArr)

    }

    public getPatrolTime() {
        let curTime = (new Date()).getTime()
        let passTime = Math.min(designManager.config.towerTop * 60, Math.floor((curTime - this.$patrolStartTime) / 1000))
        return passTime
    }

    public getPatrolReward() {
        let passTime = this.getPatrolTime()
        let towerExp = Math.floor(passTime * designManager.config.towerExp / 60)
        let getCoin = Math.floor(passTime * designManager.config.towerCoin / 60)

        let rewardArr = []
        // let prop: PropItem = {
        //     Id: 101,
        //     Num: getCoin,
        // }
        rewardArr.push({
            Id: 101,
            Num: getCoin,
        })

        rewardArr.push({
            Id: 901,
            Num: towerExp,
        })
        let towerItem = designManager.config.towerItem
        // console.log("towerItem = ", towerItem)
        let drawCount = Math.floor(passTime / 600)
        for (let i = 0; i < drawCount; i++) {
            if (this.$patrolRewardProp[i] != 1) {
                for (let j = 0; j < towerItem.length; j++) {
                    let curr = Math.random()
                    if (curr < towerItem[j][1] / 10000) {
                        let prop: PropItem = {
                            Id: towerItem[j][0],
                            Num: 1,
                        }
                        myLog.i("抽中 ", towerItem[j][0])
                        this.$patrolRewardPropArr.push(prop)
                    } else {
                      //  myLog.i("未抽中", curr, towerItem[j][1] / 10000)
                    }
                }
                this.$patrolRewardProp[i] = 1
            }
        }
        // this.getRewardProp()
        this.$patrolRewardPropArr.forEach(element => {
            rewardArr.push(element)
        });
        return rewardArr
    }

    public getPatrolState() {
        let passTime = this.getPatrolTime()
        if (passTime < 600) {
            return 600 - passTime
        }

        return 0
    }

    public getPatrolRewardByTime(time) {
        let towerExp = Math.floor(time * designManager.config.towerExp / 60)
        let getCoin = Math.floor(time * designManager.config.towerCoin / 60)

        let rewardArr = []
        rewardArr.push({
            Id: 101,
            Num: getCoin,
        })

        rewardArr.push({
            Id: 901,
            Num: towerExp,
        })
        let towerItem = designManager.config.towerItem
        // console.log("towerItem = ", towerItem)
        let drawCount = Math.floor(time / 600)
        for (let i = 0; i < drawCount; i++) {
            for (let j = 0; j < towerItem.length; j++) {
                let curr = Math.random()
                if (curr < towerItem[j][1] / 10000) {
                    let prop: PropItem = {
                        Id: towerItem[j][0],
                        Num: 1,
                    }
                    myLog.i("抽中 ", towerItem[j][0])
                    rewardArr.push(prop)
                } else {
                    //   myLog.i("未抽中", curr, towerItem[j][1] / 10000)
                }
            }
        }
        return rewardArr
    }


    public setPyramidState(index) {
        this.$pyramidState[index] = 1
        ServerCtr.GetInstance().addDataVersion()
    }



}