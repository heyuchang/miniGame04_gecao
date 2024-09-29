System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Game, game, instantiate, js, sys, tween, v3, myLog, GLoginState, CronCtr, ServerCtr, cocosUtil, constants, msgac, audioManager, designManager, eventManager, RedPointLogicMgr, RPointMask, playerModel, UserData, _crd;

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../common/myLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGLoginState(extras) {
    _reporterNs.report("GLoginState", "../../tyqSDK/network/conf", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCronCtr(extras) {
    _reporterNs.report("CronCtr", "../../tyqSDK/network/CronCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerCtr(extras) {
    _reporterNs.report("ServerCtr", "../../tyqSDK/network/ServerCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../utils/cocosUtil", _context.meta, extras);
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

  function _reportPossibleCrUseOfRedPointLogicMgr(extras) {
    _reporterNs.report("RedPointLogicMgr", "../manager/RedPointLogicMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPointMask(extras) {
    _reporterNs.report("RPointMask", "../manager/RedPointLogicMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerModel(extras) {
    _reporterNs.report("playerModel", "./playerModel", _context.meta, extras);
  }

  _export("UserData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Game = _cc.Game;
      game = _cc.game;
      instantiate = _cc.instantiate;
      js = _cc.js;
      sys = _cc.sys;
      tween = _cc.tween;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      GLoginState = _unresolved_3.GLoginState;
    }, function (_unresolved_4) {
      CronCtr = _unresolved_4.default;
    }, function (_unresolved_5) {
      ServerCtr = _unresolved_5.default;
    }, function (_unresolved_6) {
      cocosUtil = _unresolved_6.cocosUtil;
    }, function (_unresolved_7) {
      constants = _unresolved_7.constants;
    }, function (_unresolved_8) {
      msgac = _unresolved_8.msgac;
    }, function (_unresolved_9) {
      audioManager = _unresolved_9.audioManager;
    }, function (_unresolved_10) {
      designManager = _unresolved_10.designManager;
    }, function (_unresolved_11) {
      eventManager = _unresolved_11.eventManager;
    }, function (_unresolved_12) {
      RedPointLogicMgr = _unresolved_12.RedPointLogicMgr;
      RPointMask = _unresolved_12.RPointMask;
    }, function (_unresolved_13) {
      playerModel = _unresolved_13.playerModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f1be+8a5tBc613pNYA6Pnr", "UserData", undefined);

      __checkObsolete__(['Component', 'Game', 'game', 'instantiate', 'js', 'sys', 'tween', 'v3']);

      _export("UserData", UserData = class UserData extends Component {
        constructor() {
          super(...arguments);
          this.$localKey = "UserData";
          this.$time = null;
          this.$roleLv = 1;
          this.$roleExp = 1;
          this.$power = 30;
          this._maxPower = 30;
          this._powerRevoverTime = 60;
          this.$powerTime = 0;
          this.$baoShi = 1000;
          this.$optStone = 0;
          this.$dayAct = 0;
          this.$coin = 1000;
          this.$mapHand = 0;
          this._attack = 0;
          this._life = 0;
          this.$curMap = 1;
          this.$openLevel = 1;
          this.$levelData = [];
          this.$mapData = void 0;
          this.$propData = [{
            id: 301,
            num: 0,
            iswear: 0
          }];
          this.$wearProp = [0, 0, 0, 0, 0, 0];
          this.$playerData = {};
          this.$patrolStartTime = 0;
          this.$patrolRewardProp = [];
          this.$patrolRewardPropArr = [];
          this.$heroSkin = 2001;
          this.$drawNormalNum = 0;
          this.$drawGradeNum = 0;
          this.$towerWeaponIdArr = [10130, 10135, 10140, 10145, 10150, 10155, 10160, 10165];
          this.$towerWeaponId = 0;
          this.$towerWeaponLvObj = {};
          this.$towerMapIdObj = {};
          this.$pyramidState = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          this.$pyramidDrawTime = 0;
          this.$friendPassCnt = 0;
          this.$videoCalCnt = 0;
          this.$freeDraw = 0;
          this._isShowOpenLevel = false;
          this._drawAllWeight = [0, 0, 0];
          this._drawAllSureWeight = [0, 0, 0];
        }

        static getInstance() {
          if (this._instance == null) {
            this._instance = new UserData();

            this._instance.onInit();
          }

          return this._instance;
        }

        onInit() {
          //使用服务端数据
          console.log("-----比较服务端数据版本号---", (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().dataVersion, (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().serverDataVersion);

          if ((_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().loginState == (_crd && GLoginState === void 0 ? (_reportPossibleCrUseOfGLoginState({
            error: Error()
          }), GLoginState) : GLoginState).loginWithAccount) {
            if ((_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().dataVersion < (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().serverDataVersion) {
              this.loadServerData((_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
                error: Error()
              }), ServerCtr) : ServerCtr).GetInstance().serverData);
            } else {
              this.load();
            }
          } else {
            this.load();
          } // console.error("-----跟踪----")


          this.$time = 0;
          this.initEvent();
          this.setBaseConfig(); //   this.$wearProp = [10001, 0, 0, 10003, 0, 0]

          this.afterLoadData(); //上传数据

          if ((_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().dataVersion > (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().serverDataVersion) {
            (_crd && CronCtr === void 0 ? (_reportPossibleCrUseOfCronCtr({
              error: Error()
            }), CronCtr) : CronCtr).getInstance().uploadAllRecord(this.getLocalData());
          }

          this.schedule(() => {
            (_crd && CronCtr === void 0 ? (_reportPossibleCrUseOfCronCtr({
              error: Error()
            }), CronCtr) : CronCtr).getInstance().uploadAllRecord(this.getLocalData());
          }, 300);
        }

        setBaseConfig() {
          this._maxPower = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.energyMax;
          this._powerRevoverTime = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.energyRecoverTime;
          this.updateRoleAtkHp();
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
          this.$baoShi = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.basicGem;
          this.$coin = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.basicGold;
          this.$propData = [{
            id: 301,
            num: 0,
            iswear: 0
          }];
          this.$wearProp = [0, 0, 0, 0, 0, 0];
          this.$levelData = [];
          this.$curMap = 1;
          this.$openLevel = 1;
          this.$power = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.energyMax;
          this.$mapData = null;
          this.$roleExp = 0;
          this.$roleLv = 1;
          this.$mapHand = 0;
          this.$patrolRewardProp = [];
          this.$patrolRewardPropArr = [];
          this.$patrolStartTime = new Date().getTime();
          this.$drawNormalNum = 0;
          this.$drawGradeNum = 0;
          this.$pyramidState = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          this.$friendPassCnt = 0;
          this.$videoCalCnt = 0;
        }

        getHeroSkin(id) {
          if (id === void 0) {
            id = 0;
          }

          if (!id) {
            id = this.$heroSkin;
          }

          var data = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, id);

          if (data) {
            return "skin" + data.p2;
          }

          return "skin1";
        }

        set heroSkin(skinID) {
          for (var index = 0; index < this.$propData.length; index++) {
            if (this.$propData[index].id == skinID && this.$propData[index].num > 0) {
              this.$heroSkin = skinID;
              return;
            }
          }
        }

        get heroSkin() {
          return this.$heroSkin;
        }

        isHaveProp(id) {
          if (typeof id === "number") {
            for (var index = 0; index < this.$propData.length; index++) {
              if (this.$propData[index].id == id && this.$propData[index].num > 0) {
                return true;
              }
            }
          } else {
            var havenum = 0;

            for (var i = 0; i < id.length; i++) {
              for (var _index = 0; _index < this.$propData.length; _index++) {
                if (this.$propData[_index].id == id[i] && this.$propData[_index].num > 0) {
                  havenum++;
                }
              }
            }

            if (havenum >= id.length) {
              return true;
            }
          }

          return false;
        }

        get roleLv() {
          return this.$roleLv;
        }

        get power() {
          this.checkPowerTime();
          return this.$power;
        }

        towerWeaponAddLv() {
          var ret = {};
          var lv = this.getWeaponLv(this.$towerWeaponId);
          var nextRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.weaponOpt, lv + 1);

          if (!nextRow) {
            // 已满级
            ret.st = 2;
            return ret;
          }

          var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.weaponOpt, lv);
          var num = this.getPropNumById(row.propId);

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

        getTowerMapInfo(mapId) {
          var info = this.$towerMapIdObj[mapId];

          if (!info) {
            info = {
              floor: 1
            };
          }

          return info;
        }

        addTowerMapFloor(mapId) {
          var info = this.getTowerMapInfo(mapId);
          var nextFloor = info.floor + 1;

          if (!(_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.towerFloor, nextFloor)) {
            // 已到达最顶层
            return;
          }

          info.floor++;
          this.$towerMapIdObj[mapId] = info;
        }

        getWeaponLv(id) {
          if (id === void 0) {
            id = this.$towerWeaponId;
          }

          var lv = this.$towerWeaponLvObj[id];

          if (!lv) {
            lv = 1;
          }

          return lv;
        }

        checkPowerTime() {
          if (this.$power < this._maxPower) {
            if (this.$powerTime == 0) {
              this.$powerTime = new Date().getTime();
            } else {
              var time = new Date().getTime() - this.$powerTime;
              var num = Math.floor(time / 1000 / this._powerRevoverTime);

              if (num > 0) {
                this.$power += num;
                this.$power = Math.min(this._maxPower, Math.max(0, this.$power));
                this.$powerTime = this.$powerTime + num * this._powerRevoverTime * 1000;
              }
            }
          } else {
            this.$powerTime = 0;
          }
        }

        getCountTime() {
          if (this.$power < this._maxPower) {
            return Math.max(0, Math.min(this._powerRevoverTime, this._powerRevoverTime - (new Date().getTime() - this.$powerTime) / 1000));
          }

          return 0;
        }

        usePower(num) {
          this.$power += num;
          this.$power = Math.min(this._maxPower, Math.max(0, this.$power));
          this.checkPowerTime();
        }

        get baoshi() {
          return this.$baoShi;
        }

        useBaoShi(num, update) {
          if (update === void 0) {
            update = false;
          }

          this.$baoShi += num;
          this.$baoShi = Math.max(0, this.$baoShi);

          if (update) {
            (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
              error: Error()
            }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
              error: Error()
            }), msgac) : msgac).commonResRefresh);
          }
        }

        get optStone() {
          return this.$optStone;
        }

        useOptStone(num) {
          this.$optStone += num;
          this.$optStone = Math.max(0, this.$optStone);
          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
        }

        get dayAct() {
          return this.$dayAct;
        }

        set dayAct(num) {
          this.$dayAct = num;
          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
        }

        useDayAct(num) {
          this.$dayAct += num;
          this.$dayAct = Math.max(0, this.$dayAct);
          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
        }

        get energy() {
          return (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).energyObj.num;
        }

        useEnergy(num) {
          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).energyObj.num += num;
          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).energyObj.num = Math.max(0, (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).energyObj.num);
          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
        }

        checkAndUseBaoshi(num, update) {
          if (update === void 0) {
            update = false;
          }

          if (this.$baoShi >= num) {
            this.useBaoShi(0 - num, update);
            return true;
          }

          return false;
        }

        useCoin(num, update) {
          if (update === void 0) {
            update = false;
          }

          this.$coin += num;
          this.$coin = Math.max(0, this.$coin);

          if (update) {
            (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
              error: Error()
            }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
              error: Error()
            }), msgac) : msgac).commonResRefresh);
          }

          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
        }

        cheackAndUseCoin(num, update) {
          if (update === void 0) {
            update = false;
          }

          if (this.$coin >= num) {
            this.useCoin(0 - num, update);
            return true;
          }

          return false;
        }

        get coin() {
          return this.$coin;
        }

        get attack() {
          return this._attack;
        }

        get life() {
          return this._life;
        }

        addExp(num) {
          this.$roleExp += num;
          var roleData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getTable((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.heroLevel);

          for (var index = this.roleLv + 1; index < roleData.length; index++) {
            var element = roleData[index - 1];

            if (this.$roleExp >= element.exp) {
              this.$roleLv = index;
              this.updateRoleAtkHp();
            } else {
              return;
            }
          }

          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
        }

        updateRoleAtkHp() {
          var roleData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.heroLevel, this.$roleLv);
          this._attack = roleData.atk;
          this._life = roleData.hp;

          for (var i = 0; i < this.$wearProp.length; i++) {
            if (this.$wearProp[i] > 0) {
              var propData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.prop, this.$wearProp[i]);

              if (propData && propData.atk) {
                this._attack += propData.atk;
              }

              if (propData && propData.hp) {
                this._life += propData.hp;
              }
            }
          }

          var suitInfo = this.getSuitPercentAdd();
          this._attack *= 1 + suitInfo.atk;
          this._life *= 1 + suitInfo.hp;
          this._attack = Math.floor(this._attack);
          this._life = Math.floor(this._life);
        }

        getSuitPercentAdd() {
          var suitData = this.getSuitId();
          var atkAdd = 0;
          var hpAdd = 0;

          if (suitData != 0) {
            var suitId = suitData[0];
            var suitNum = suitData[1];
            var suitAttr = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.suit, suitId);

            if (suitNum >= 5) {
              atkAdd = suitAttr.effectAtk_5;
              hpAdd = suitAttr.effectHP_5;
            } else if (suitNum >= 3) {
              atkAdd = suitAttr.effectAtk_3;
              hpAdd = suitAttr.effectHP_3;
            }
          }

          var ret = {
            atk: atkAdd / 100,
            hp: hpAdd / 100
          };
          return ret;
        }

        weaponOptLvEffect(val, lv) {
          var optRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.weaponOpt, lv);

          if (optRow) {
            val = val * (1 + optRow.atk / 100);
            val = Math.ceil(val);
          }

          return val;
        }

        getTowerRoleProInfo(isEnter) {
          if (isEnter === void 0) {
            isEnter = false;
          }

          var roleData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.heroLevel, this.$roleLv); // 等级加成

          var atk = roleData.atk;
          var hp = roleData.hp; // 装备加成

          for (var i = 0; i < this.$wearProp.length; i++) {
            var id = this.$wearProp[i];

            if (i == 0) {
              id = this.$towerWeaponId;

              if (isEnter) {
                id = 0;
              }
            }

            if (id > 0) {
              var propData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.prop, id);

              if (propData && propData.atk) {
                var val = propData.atk;

                if (i == 0) {
                  var lv = this.getWeaponLv(id);
                  val = this.weaponOptLvEffect(val, lv);
                }

                atk += val;
              }

              if (propData && propData.hp) {
                hp += propData.hp;
              }
            }
          } // 套装加成


          var suitInfo = this.getSuitPercentAdd();
          atk *= 1 + suitInfo.atk;
          hp *= 1 + suitInfo.hp;
          atk = Math.floor(atk);
          hp = Math.floor(hp);
          return {
            atk: atk,
            hp: hp
          };
        }

        get roleExp() {
          return this.$roleExp;
        }

        getNextLevelExp() {
          var nextdata = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.heroLevel, this.$roleLv + 1);

          if (nextdata) {
            return nextdata.exp;
          }

          return this.$roleExp;
        }

        setCurMap(mapid) {
          this.$curMap = mapid;
          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
        }

        getCurMap() {
          return this.$curMap;
        }

        set openLevel(level) {
          this.$openLevel = level;
          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
        }

        get openLevel() {
          //return 2
          return this.$openLevel;
        }

        set mapData(data) {
          this.$mapData = data;
          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
        }

        get mapData() {
          return this.$mapData;
        }

        set playerData(data) {
          this.$playerData = data;
          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
        }

        get playerData() {
          return this.$playerData;
        }

        set mapHand(st) {
          this.$mapHand = st;
          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
        }

        get mapHand() {
          return this.$mapHand;
        }

        get wearProp() {
          return this.$wearProp;
        }
        /**
         *  穿戴装备
         * @param propdata cj
         * @returns 
         */


        setWearProp(propdata) {
          if (propdata) {
            if (this.$wearProp[propdata.wearIndex - 1] == propdata.id) {
              return;
            } else if (this.$wearProp[propdata.wearIndex - 1] == 0) {
              this.$wearProp[propdata.wearIndex - 1] = propdata.id;
              this.setPropWearById(propdata.id, 1);
            } else {
              this.setPropWearById(this.$wearProp[propdata.wearIndex - 1], 0);
              this.$wearProp[propdata.wearIndex - 1] = propdata.id;
              this.setPropWearById(propdata.id, 1);
            }

            (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
              error: Error()
            }), RedPointLogicMgr) : RedPointLogicMgr).ins().sendValueSettingMsg((_crd && RPointMask === void 0 ? (_reportPossibleCrUseOfRPointMask({
              error: Error()
            }), RPointMask) : RPointMask).RPM_PropWear, false);
            this.updateRoleAtkHp();
          }
        }
        /**
         * 卸下装备
         */


        unWearProp(propdata) {
          if (propdata) {
            if (this.$wearProp[propdata.wearIndex - 1] == propdata.id) {
              this.$wearProp[propdata.wearIndex - 1] = 0;
              this.setPropWearById(propdata.id, 0);
              this.updateRoleAtkHp();
              (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
                error: Error()
              }), RedPointLogicMgr) : RedPointLogicMgr).ins().sendValueSettingMsg((_crd && RPointMask === void 0 ? (_reportPossibleCrUseOfRPointMask({
                error: Error()
              }), RPointMask) : RPointMask).RPM_PropWear, false);
              (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
                error: Error()
              }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
            }
          }
        }
        /**
         * 自动判断是穿戴 还是 卸下 操作
         * @param propdata 
         */


        autoWearProp(propdata) {
          if (propdata) {
            if (this.$wearProp[propdata.wearIndex - 1] == propdata.id) {
              this.$wearProp[propdata.wearIndex - 1] = 0;
              this.setPropWearById(propdata.id, 0);
            } else {
              this.$wearProp[propdata.wearIndex - 1] = propdata.id;
              this.setPropWearById(propdata.id, 1);
            }

            this.updateRoleAtkHp();
            (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
              error: Error()
            }), RedPointLogicMgr) : RedPointLogicMgr).ins().sendValueSettingMsg((_crd && RPointMask === void 0 ? (_reportPossibleCrUseOfRPointMask({
              error: Error()
            }), RPointMask) : RPointMask).RPM_PropWear, false);
            (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
          }
        }
        /**
         * 检查当前装备是否穿戴在身上
         * @param propdata 
         * @returns 
         */


        checkWearProp(propdata) {
          if (propdata) {
            return this.$wearProp[propdata.wearIndex - 1] == propdata.id;
          }

          return false;
        }
        /**
         * 检查当前装备是否 比穿戴在身上的 装备更好
         * @param propId 
         * @returns 
         */


        checkThisPropBestToWear(propId) {
          var propdata = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, propId);

          if (propdata.wearIndex > 0) {
            if (this.$wearProp[propdata.wearIndex - 1] == 0) {
              for (var index = 0; index < this.$propData.length; index++) {
                var item = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                  error: Error()
                }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).tableName.prop, this.$propData[index].id);

                if (item.wearIndex == propdata.wearIndex) {
                  if (propdata.quality < item.quality) {
                    return false;
                  }
                }
              }

              return true;
            }

            var wearpropdata = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop, this.$wearProp[propdata.wearIndex - 1]);

            if (wearpropdata.quality < propdata.quality) {
              for (var _index2 = 0; _index2 < this.$propData.length; _index2++) {
                var _item = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                  error: Error()
                }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).tableName.prop, this.$propData[_index2].id);

                if (_item.wearIndex == propdata.wearIndex) {
                  if (propdata.quality < _item.quality) {
                    return false;
                  }
                }
              }

              return true;
            }
          }

          return false;
        }
        /**
         * 检查是否有可以穿戴的装备
         * @returns 
         */


        checkBestPropToWear() {
          for (var index = 0; index < this.$propData.length; index++) {
            var value = this.$propData[index];
            var propdata = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop, value.id);

            if (propdata.wearIndex > 0) {
              if (this.$wearProp[propdata.wearIndex - 1] == 0) {
                return true;
              }

              var wearpropdata = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.prop, this.$wearProp[propdata.wearIndex - 1]);

              if (wearpropdata.quality < propdata.quality) {
                return true;
              }
            }
          }

          return false;
        }
        /**
         *  获得 装备
         * @param id 装备ID
         * @param num 获得数量
         * @returns 
         */


        setPropById(id, num) {
          for (var index = 0; index < this.$propData.length; index++) {
            var value = this.$propData[index];

            if (value.id == id) {
              value.num += num;
              return;
            }
          }

          this.$propData.push({
            id: id,
            num: num,
            iswear: 0
          });
          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
        }
        /**
         * 合成装备
         * @param blessId 合成装备ID
         * @param getPropId 获得装备ID
         * @param needNum 需要数量
         */


        blessProp(blessId, getPropId, needNum) {
          this.setPropById(getPropId, 1);
          this.setPropById(blessId, needNum);
          (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
            error: Error()
          }), RedPointLogicMgr) : RedPointLogicMgr).ins().sendValueSettingMsg((_crd && RPointMask === void 0 ? (_reportPossibleCrUseOfRPointMask({
            error: Error()
          }), RPointMask) : RPointMask).RPM_BlessProp, false);

          for (var index = 0; index < this.$wearProp.length; index++) {
            if (this.$wearProp[index] == blessId) {
              this.$wearProp[index] = getPropId;
              this.setPropWearById(getPropId, 1);
              this.setPropWearById(blessId, 0);
              this.updateRoleAtkHp();
            }
          }

          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).updateDropData);
          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
        }
        /**
         * 检查 是否有可以合成的装备
         * @returns 
         */


        checkPropCanBless() {
          var arr = this.$propData;

          for (var index = 0; index < arr.length; index++) {
            if (arr[index].num >= 3) {
              var curProp = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.prop, arr[index].id);

              if (curProp && curProp.blessId && curProp.blessId > 0) {
                return true;
              }
            }
          }

          return false;
        }
        /**
         * 检查当前章节是否可以领取宝箱
         */


        checkChapterCanReward() {
          var leveldata = UserData.getInstance().getLevelData(UserData.getInstance().getCurMap());

          for (var i = 0; i < 3; i++) {
            if (leveldata.Time >= (i * 5 + 5) * 60) {
              if (leveldata.ReceiveState[i] == 0) {
                return true;
              }
            }
          }

          return false;
        }

        setPropWearById(id, isWear) {
          for (var index = 0; index < this.$propData.length; index++) {
            var value = this.$propData[index];

            if (value.id == id) {
              value.iswear = isWear;
              return;
            }
          }

          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
        }

        /**
         * 保存关卡完成情况的数据
         * @param data 
         */
        setLevelData(data) {
          var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.map, data.Level);

          if (row.type != (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).mapTypes.main) {
            return;
          }

          var index = data.Level - 1;

          if (index < 0) {
            index = 0;
          }

          if (this.$levelData[index] == null) {
            this.$levelData[index] = data;
          } else {
            if (data.Time > this.$levelData[index].Time) {
              this.$levelData[index].Time = data.Time;
            }
          }

          if (this.$levelData[index].Time >= 15 * 60) {
            if (this.$openLevel <= data.Level) {
              var nextId = this.$openLevel + 1;

              if ((_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.map, nextId)) {
                this.$openLevel++;
                this.$curMap = this.$openLevel;
                this._isShowOpenLevel = true;
              }

              (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
                error: Error()
              }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
            }
          }
        }

        getLevelData(level) {
          var index = level - 1;

          if (index < 0) {
            index = 0;
          }

          if (this.$levelData[index]) {
            return this.$levelData[index];
          }

          var ld = {
            Level: level,
            Time: 0,
            ReceiveState: [0, 0, 0]
          };
          UserData.getInstance().setLevelData(ld);
          return ld;
        }

        get propData() {
          return this.$propData;
        }

        getPropSort() {
          var dataArr = [];

          for (var i in this.$propData) {
            var prop = this.$propData[i];
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop, prop.id);

            if (row.type == 8 || row.type == 11) {
              dataArr.push(prop);
            }
          }

          var equipSort = (a, b) => {
            var equipDataA = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop, a.id);
            var equipDataB = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop, b.id);
            return equipDataA.wearIndex - equipDataB.wearIndex;
          };

          dataArr.sort(equipSort);
          return dataArr;
        }

        getPropById(id) {
          for (var index = 0; index < this.$propData.length; index++) {
            var value = this.$propData[index];

            if (value.id == id) {
              return value.num;
            }
          }

          return 0;
        }

        getSuitId() {
          var suitId = [];

          for (var index = 0; index < this.$wearProp.length; index++) {
            var element = this.$wearProp[index];

            if (element > 0) {
              var propData1 = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.prop, element);

              if (!suitId[propData1.suit_id]) {
                suitId[propData1.suit_id] = 0;
              }

              suitId[propData1.suit_id]++;
            }
          }

          for (var _index3 = 0; _index3 < suitId.length; _index3++) {
            if (suitId[_index3] >= 3) {
              return [_index3, suitId[_index3]];
            }
          }

          return 0;
        }

        getSuitNum(propData) {
          var suitId = propData.suit_id;
          var num = 0;

          for (var index = 0; index < this.$wearProp.length; index++) {
            var element = this.$wearProp[index];

            if (element > 0) {
              var propData1 = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.prop, element);

              if (propData1.suit_id == suitId) {
                num++;
              }
            }
          }

          return num;
        }

        tobePropItem(arr) {
          var propArr = [];

          for (var i = 0; i < arr.length; i++) {
            var prop = {
              Id: arr[i][0],
              Num: arr[i][1]
            };
            propArr.push(prop);
          }

          return propArr;
        }

        getPropNumById(id) {
          var num = 0;
          var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, id);

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
              for (var i in this.$propData) {
                var prop = this.$propData[i];

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


        addPropNum(id, num) {
          var propItem = {
            Id: id,
            Num: num
          };
          this.getRewardProp([propItem]);
          return propItem;
        }

        addPropByDesign(award) {
          return this.addPropNum(award[0], award[1]);
        }

        addPropArrByDesign(awardArr) {
          var arr = [];

          for (var i in awardArr) {
            var award = awardArr[i];
            var propItem = {
              Id: award[0],
              Num: award[1]
            };
            arr.push(propItem);
          }

          this.getRewardProp(arr);
          return arr;
        }
        /**；領取獎勵 格式 [10001,1];[10002,2];[10003,1] */


        getRewardProp(rewardArr, double) {
          if (double === void 0) {
            double = 1;
          }

          for (var i = 0; i < rewardArr.length; i++) {
            var dataArr = rewardArr[i];
            var propdata = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop, dataArr.Id);

            if (!propdata) {
              (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
                error: Error()
              }), myLog) : myLog).e("prop is not in design", propdata);
              continue;
            }

            if (propdata.type == 1) {
              this.useCoin(dataArr.Num * double);
            } else if (propdata.type == 10) {
              this.addExp(dataArr.Num * double);
            } else if (propdata.type == 8 || propdata.type == 11) {
              this.setPropById(dataArr.Id, dataArr.Num * double);
              (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
                error: Error()
              }), RedPointLogicMgr) : RedPointLogicMgr).ins().sendValueSettingMsg((_crd && RPointMask === void 0 ? (_reportPossibleCrUseOfRPointMask({
                error: Error()
              }), RPointMask) : RPointMask).RPM_PropWear, false);
              (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
                error: Error()
              }), RedPointLogicMgr) : RedPointLogicMgr).ins().sendValueSettingMsg((_crd && RPointMask === void 0 ? (_reportPossibleCrUseOfRPointMask({
                error: Error()
              }), RPointMask) : RPointMask).RPM_BlessProp, false);
            } else if (propdata.type == 9) {
              this.useBaoShi(dataArr.Num * double);
            } else if (propdata.type == 12) {
              this.usePower(dataArr.Num * double);
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
              this.setPropById(dataArr.Id, dataArr.Num * double);
            }
          }

          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).commonResRefresh);
          this.saveData();
        }
        /**
         *  使用道具。
         * @param dataArr 
         * @returns  true 表示道具充足并使用。false 表示资源不够
         */


        checkUseProp(dataArr) {
          var propdata = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, dataArr.Id);

          if (!propdata) {
            (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
              error: Error()
            }), myLog) : myLog).e("prop is not in design", propdata);
            return;
          }

          if (propdata.type == 1) {
            if (this.$coin >= dataArr.Num) {
              this.useCoin(0 - dataArr.Num);
              return true;
            }

            return false;
          } else if (propdata.type == 9) {
            if (this.$baoShi >= dataArr.Num) {
              this.useBaoShi(0 - dataArr.Num);
              return true;
            }

            return false;
          } else if (propdata.type == 14) {
            if (this.$optStone >= dataArr.Num) {
              this.useOptStone(0 - dataArr.Num);
              return true;
            }

            return false;
          }
        }

        showGetAnimal(parent, node, start, end) {
          var arr = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).getCircleDirectionArr(10, 100);

          for (var index = 0; index < 10; index++) {
            var node1 = instantiate(node);
            parent.addChild(node1);
            node1.layer = parent.layer;
            tween(node1).set({
              positon: v3(start[0], start[1], 0)
            }).to(0.2, {
              positon: v3(arr[index].x, arr[index].y, 0)
            }).to(0.5, {
              positon: v3(end[0], end[1], 0)
            }).start();
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).drawCurvePath(node1, [arr[index].x, arr[index].y], [end[0], end[1]], 0.2 + Math.random() * 0.2, 30, 0.1 + index * 0.05);
          }

          return;
        }

        stringToArr(str) {
          var index = str.indexOf("[");
          var endIndex = str.indexOf("]");
          var newStr = str.substring(index + 1, endIndex);
          return newStr.split(",");
        }
        /**注冊事件*/


        initEvent() {
          game.on(Game.EVENT_HIDE, () => {
            // @ts-ignore
            if (this.resetAccount) {
              return;
            }

            this.$time = Date.now();
            this.saveData();
            (_crd && CronCtr === void 0 ? (_reportPossibleCrUseOfCronCtr({
              error: Error()
            }), CronCtr) : CronCtr).getInstance().uploadAllRecord(this.getLocalData());
          });
          game.on(Game.EVENT_SHOW, () => {
            (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
              error: Error()
            }), audioManager) : audioManager).gameOnShow();
          });
        }

        saveData() {
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).saveDataBefore);
          var obj = js.createMap(true);
          ;

          for (var key in this) {
            if (key.indexOf('$') != -1) {
              obj[key] = this[key];
            }
          }

          sys.localStorage.setItem(this.$localKey, JSON.stringify(obj));
          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).saveDataAfter);
        }

        getLocalData() {
          var obj = js.createMap(true);

          for (var key in this) {
            if (key.indexOf('$') != -1) {
              obj[key] = this[key];
            }
          }

          return {
            "userData": JSON.stringify(obj),
            "version": (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().dataVersion,
            "friendPassCnt": this.$friendPassCnt,
            //通关数 好友最大值
            "videoCalCnt": this.$videoCalCnt //累积观看视频数量，累积值

          }; // sys.localStorage.setItem(this.$localKey, JSON.stringify(obj));
        }

        loadServerData(jsonData) {
          console.log("---------各种问题---", jsonData);
          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().dataVersion = jsonData["version"];
          var obj = jsonData["userData"];

          if (obj) {
            js.mixin(this, JSON.parse(obj));
          }

          sys.localStorage.setItem(this.$localKey, JSON.stringify(obj));
        }

        remove() {
          sys.localStorage.removeItem(this.$localKey);
          this.onInit();
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).commonResRefresh);
        } // 注销账号


        clearAccountData() {
          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
          (_crd && CronCtr === void 0 ? (_reportPossibleCrUseOfCronCtr({
            error: Error()
          }), CronCtr) : CronCtr).getInstance().uploadAllRecord({
            "version": (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().dataVersion + 1
          });
          sys.localStorage.removeItem("dataVersion"); // @ts-ignore

          this.resetAccount = true;
        }

        load() {
          var obj = sys.localStorage.getItem(this.$localKey);

          if (obj) {
            js.mixin(this, JSON.parse(obj));
          } else {
            this.setConfig();
          }
        }

        /**
         * 获得一次抽卡数据
         */
        getDrawItem(drawType) {
          var type = 2;

          if (drawType == 0) {
            this.$drawNormalNum++;
            type = 2;
          } else {
            this.$drawGradeNum++;
            type = 1;
          }

          var isBichou = false; //  console.log("this.$drawGradeNum = ",this.$drawGradeNum)
          //  console.log("this.$drawNormalNum = ",this.$drawNormalNum)

          if (type == 2) {
            if (this.$drawNormalNum >= (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.extra2) {
              //     console.log(" 普通必抽")
              isBichou = true;
              this.$drawNormalNum = 0;
            }
          } else {
            if (this.$drawGradeNum >= (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.extra1) {
              isBichou = true; // console.log(" 高级 必抽")

              this.$drawGradeNum = 0;
            }
          }

          var drawData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowsByType((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.draw, type);

          if (this._drawAllWeight[type] == NaN || this._drawAllWeight[type] <= 0) {
            this._drawAllSureWeight[type] = 0;
            drawData.forEach(element => {
              if (type == element.type) {
                this._drawAllWeight[type] += element.weight;
                if (element.extra != "") this._drawAllSureWeight[type] += parseInt(element.extra);
              }
            });
          }

          var item = null;

          if (isBichou) {
            var rand = Math.floor(Math.random() * this._drawAllSureWeight[type]);

            for (var index = 0; index < drawData.length; index++) {
              var element = drawData[index];

              if (type == element.type && element.extra) {
                rand -= element.extra;

                if (rand <= 0) {
                  item = element; // console.log(" 必抽，", item)

                  break;
                }
              }
            }
          } else {
            var _rand = Math.floor(Math.random() * this._drawAllWeight[type]);

            for (var _index4 = 0; _index4 < drawData.length; _index4++) {
              var _element = drawData[_index4];

              if (type == _element.type) {
                _rand -= _element.weight;

                if (_rand <= 0) {
                  item = _element;
                  break;
                }
              }
            }
          } // if (item && item.extra && item.extra > 0) {
          //     // if (type == 2) {
          //     //     this.$drawNormalNum = 0
          //     // } else {
          //     //     this.$drawGradeNum = 0
          //     // }
          // }


          if (item == null) {
            console.log("item null 没抽中 ");
          }

          return item;
        }
        /**添加巡逻奖励 */


        getCurPatrolData() {
          if (this.$patrolStartTime <= 0) {
            this.$patrolStartTime = new Date().getTime();
            return;
          }

          var curTime = new Date().getTime();
          var rewardArr = this.getPatrolReward();
          this.$patrolStartTime = curTime;
          this.$patrolRewardPropArr = [];
          this.$patrolRewardProp = [];
          this.getRewardProp(rewardArr); // this.getRewardProp(this.$patrolRewardPropArr)
        }

        getPatrolTime() {
          var curTime = new Date().getTime();
          var passTime = Math.min((_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.towerTop * 60, Math.floor((curTime - this.$patrolStartTime) / 1000));
          return passTime;
        }

        getPatrolReward() {
          var passTime = this.getPatrolTime();
          var towerExp = Math.floor(passTime * (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.towerExp / 60);
          var getCoin = Math.floor(passTime * (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.towerCoin / 60);
          var rewardArr = []; // let prop: PropItem = {
          //     Id: 101,
          //     Num: getCoin,
          // }

          rewardArr.push({
            Id: 101,
            Num: getCoin
          });
          rewardArr.push({
            Id: 901,
            Num: towerExp
          });
          var towerItem = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.towerItem; // console.log("towerItem = ", towerItem)

          var drawCount = Math.floor(passTime / 600);

          for (var i = 0; i < drawCount; i++) {
            if (this.$patrolRewardProp[i] != 1) {
              for (var j = 0; j < towerItem.length; j++) {
                var curr = Math.random();

                if (curr < towerItem[j][1] / 10000) {
                  var prop = {
                    Id: towerItem[j][0],
                    Num: 1
                  };
                  (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
                    error: Error()
                  }), myLog) : myLog).i("抽中 ", towerItem[j][0]);
                  this.$patrolRewardPropArr.push(prop);
                } else {//  myLog.i("未抽中", curr, towerItem[j][1] / 10000)
                }
              }

              this.$patrolRewardProp[i] = 1;
            }
          } // this.getRewardProp()


          this.$patrolRewardPropArr.forEach(element => {
            rewardArr.push(element);
          });
          return rewardArr;
        }

        getPatrolState() {
          var passTime = this.getPatrolTime();

          if (passTime < 600) {
            return 600 - passTime;
          }

          return 0;
        }

        getPatrolRewardByTime(time) {
          var towerExp = Math.floor(time * (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.towerExp / 60);
          var getCoin = Math.floor(time * (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.towerCoin / 60);
          var rewardArr = [];
          rewardArr.push({
            Id: 101,
            Num: getCoin
          });
          rewardArr.push({
            Id: 901,
            Num: towerExp
          });
          var towerItem = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.towerItem; // console.log("towerItem = ", towerItem)

          var drawCount = Math.floor(time / 600);

          for (var i = 0; i < drawCount; i++) {
            for (var j = 0; j < towerItem.length; j++) {
              var curr = Math.random();

              if (curr < towerItem[j][1] / 10000) {
                var prop = {
                  Id: towerItem[j][0],
                  Num: 1
                };
                (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
                  error: Error()
                }), myLog) : myLog).i("抽中 ", towerItem[j][0]);
                rewardArr.push(prop);
              } else {//   myLog.i("未抽中", curr, towerItem[j][1] / 10000)
              }
            }
          }

          return rewardArr;
        }

        setPyramidState(index) {
          this.$pyramidState[index] = 1;
          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().addDataVersion();
        }

      });

      UserData._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e6a693e31380bdcfed0129afd03332b201c0cdb4.js.map