System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, utilTools, constants, msgac, audioManager, designManager, eventManager, localStorageManager, mapModel, UserData, PlayerModel, _crd, playerModel;

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgac(extras) {
    _reporterNs.report("msgac", "../data/msgac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../manager/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventManager(extras) {
    _reporterNs.report("eventManager", "../manager/eventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalStorageManager(extras) {
    _reporterNs.report("localStorageManager", "../manager/localStorageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "./mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "./UserData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      utilTools = _unresolved_2.utilTools;
    }, function (_unresolved_3) {
      constants = _unresolved_3.constants;
    }, function (_unresolved_4) {
      msgac = _unresolved_4.msgac;
    }, function (_unresolved_5) {
      audioManager = _unresolved_5.audioManager;
    }, function (_unresolved_6) {
      designManager = _unresolved_6.designManager;
    }, function (_unresolved_7) {
      eventManager = _unresolved_7.eventManager;
    }, function (_unresolved_8) {
      localStorageManager = _unresolved_8.localStorageManager;
    }, function (_unresolved_9) {
      mapModel = _unresolved_9.mapModel;
    }, function (_unresolved_10) {
      UserData = _unresolved_10.UserData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "49378vbq+FDaLOtxpJMRyYQ", "playerModel", undefined);

      PlayerModel = class PlayerModel {
        constructor() {
          this.now = new Date();
          this.secondInterval = void 0;
          this.saveTime = void 0;
          this.skillFreeRefreshCount = 0;
          this.isOpenDev = false;
          this.isRecordAd = false;
          this.dayTaskObj = {};
          this.energyObj = {};
          this.daySignObj = {};
          this.vipObj = {};
          this.shareObj = {};
          this.isLetterAward = 0;
          this.skillBombNum = 1;
          this.skillHealNum = 1;
          this.skillMagnetNum = 0;
          this.skillLifeNum = 0;
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new PlayerModel();
          }

          return this._instance;
        }

        init() {
          let now = new Date();
          let data = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().playerData;
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).timeStrToDate(data);
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).initData(data.audio);
          this.initData(data.player, now);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).initData(data.fight, now);
          this.openSecondInterval();
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).on((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).saveDataBefore, this.onSaveData, this);
        }

        initData(data, now) {
          if (!data) {
            data = {};
          }

          if (data.saveTime) {
            this.saveTime = data.saveTime;
          } else {
            this.saveTime = now;
          }

          if (data.skillFreeRefreshCount) {
            this.skillFreeRefreshCount = data.skillFreeRefreshCount;
          } else {
            this.skillFreeRefreshCount = 0;
          }

          if (data.dayTaskObj) {
            this.dayTaskObj = data.dayTaskObj;
          } else {
            this.dayTaskObj = {
              awardFlagArr: [],
              taskObj: {}
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
            this.energyObj.endTime = new Date(now.getTime() + 7 * (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).times.day);
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

        getSaveData(now) {
          let data = {};
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
          let data = {};
          data.player = this.getSaveData(now);
          data.audio = (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).getSaveData(now);
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().playerData = data;
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

          if ((_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).overDay(this.saveTime, now)) {
            // 跨天了
            this.saveTime = now;
            this.overDay(now); // 通知UI层

            (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
              error: Error()
            }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
              error: Error()
            }), msgac) : msgac).overDay);
          }

          if (now.getTime() >= this.energyObj.endTime) {
            this.energyObj = {
              num: 0,
              awardObj: {},
              endTime: new Date(now.getTime() + 7 * (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).times.day)
            };
            (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
              error: Error()
            }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
              error: Error()
            }), msgac) : msgac).energyObjRefresh);
          }
        }
        /**
         * 是否处于开发环境
         */


        isInDevelopmentEnvironment() {
          return this.isOpenDev;
        }

        overDay(now) {
          this.skillFreeRefreshCount = 0;
          this.dayTaskObj = {
            awardFlagArr: [],
            taskObj: {}
          };
          this.vipObj.dayAward = 0;
          this.shareObj.dayNum = 0;
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().dayAct = 0;
        } // 清楚存档，方便开发测试用


        clearGameData() {
          (_crd && localStorageManager === void 0 ? (_reportPossibleCrUseOflocalStorageManager({
            error: Error()
          }), localStorageManager) : localStorageManager).setGameData({});
          this.init();
        }

        sendToUINotice(info) {
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).showNotice, info);
        }

        getTaskInfoById(id) {
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

        addDayTaskNum(id, num = 1) {
          let info = this.getTaskInfoById(id);
          info.num += num;
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.dayTask, id);

          if (info.num >= row.needNum && !info.getAward) {
            switch (id) {
              case 4:
              case 5:
              case 6:
                break;

              default:
                (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
                  error: Error()
                }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
                  error: Error()
                }), msgac) : msgac).refreshRedPoint);
                break;
            }
          }
        }

        getEnergyAwardInfoById(id) {
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
          let day = Math.floor((now.getTime() - playerModel.daySignObj.startTime) / (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).times.day);
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.daySign, day + 1);

          if (!row) {
            return false;
          }

          if (playerModel.daySignObj.awardDayArr.indexOf(day) == -1) {
            return true;
            ;
          }

          return false;
        }

        hasDayTaskAward() {
          let tb = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getTable((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.dayTask);

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
          let tb = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getTable((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.energyAward);

          for (let i in tb) {
            let row = tb[i];

            if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().energy < row.num) {
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
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.vip, this.vipObj.vip);

          if (this.vipObj.adNum >= row.adNum) {
            let nextRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.vip, this.vipObj.vip + 1);

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

      };
      PlayerModel._instance = void 0;

      _export("playerModel", playerModel = PlayerModel.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7532bb5b7e69169c0a6b8501b1073b5e9dd25243.js.map