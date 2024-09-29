System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, ProgressBar, tween, Tween, v3, _decorator, myLog, sdkManager, tyqSDK, cocosUtil, utilTools, constants, localText, msgac, audioManager, designManager, mapModel, playerModel, UserData, serverMsg, BaseLayer, GameCtrl, Player, ShineColor, BulletSystem, HintSystem, MapSystem, MonsterSystem, NumSystem, PropSystem, SkillSystem, WeaponSystem, _dec, _class, _crd, ccclass, property, MapLayer;

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../../common/myLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsdkManager(extras) {
    _reporterNs.report("sdkManager", "../../../sdk/sdkManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../../../tyqSDK/tyqSDK", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalText(extras) {
    _reporterNs.report("localText", "../../data/localText", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgac(extras) {
    _reporterNs.report("msgac", "../../data/msgac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../../manager/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerModel(extras) {
    _reporterNs.report("playerModel", "../../model/playerModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../../model/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfserverMsg(extras) {
    _reporterNs.report("serverMsg", "../../other/serverMsg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../base/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCtrl(extras) {
    _reporterNs.report("GameCtrl", "../item/GameCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../item/Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShineColor(extras) {
    _reporterNs.report("ShineColor", "../shader/ShineColor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletSystem(extras) {
    _reporterNs.report("BulletSystem", "../sys/BulletSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHintSystem(extras) {
    _reporterNs.report("HintSystem", "../sys/HintSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapSystem(extras) {
    _reporterNs.report("MapSystem", "../sys/MapSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterSystem(extras) {
    _reporterNs.report("MonsterSystem", "../sys/MonsterSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNumSystem(extras) {
    _reporterNs.report("NumSystem", "../sys/NumSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropSystem(extras) {
    _reporterNs.report("PropSystem", "../sys/PropSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillSystem(extras) {
    _reporterNs.report("SkillSystem", "../sys/SkillSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponSystem(extras) {
    _reporterNs.report("WeaponSystem", "../sys/WeaponSystem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      ProgressBar = _cc.ProgressBar;
      tween = _cc.tween;
      Tween = _cc.Tween;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      sdkManager = _unresolved_3.sdkManager;
    }, function (_unresolved_4) {
      tyqSDK = _unresolved_4.tyqSDK;
    }, function (_unresolved_5) {
      cocosUtil = _unresolved_5.cocosUtil;
    }, function (_unresolved_6) {
      utilTools = _unresolved_6.utilTools;
    }, function (_unresolved_7) {
      constants = _unresolved_7.constants;
    }, function (_unresolved_8) {
      localText = _unresolved_8.localText;
    }, function (_unresolved_9) {
      msgac = _unresolved_9.msgac;
    }, function (_unresolved_10) {
      audioManager = _unresolved_10.audioManager;
    }, function (_unresolved_11) {
      designManager = _unresolved_11.designManager;
    }, function (_unresolved_12) {
      mapModel = _unresolved_12.mapModel;
    }, function (_unresolved_13) {
      playerModel = _unresolved_13.playerModel;
    }, function (_unresolved_14) {
      UserData = _unresolved_14.UserData;
    }, function (_unresolved_15) {
      serverMsg = _unresolved_15.serverMsg;
    }, function (_unresolved_16) {
      BaseLayer = _unresolved_16.BaseLayer;
    }, function (_unresolved_17) {
      GameCtrl = _unresolved_17.GameCtrl;
    }, function (_unresolved_18) {
      Player = _unresolved_18.Player;
    }, function (_unresolved_19) {
      ShineColor = _unresolved_19.ShineColor;
    }, function (_unresolved_20) {
      BulletSystem = _unresolved_20.BulletSystem;
    }, function (_unresolved_21) {
      HintSystem = _unresolved_21.HintSystem;
    }, function (_unresolved_22) {
      MapSystem = _unresolved_22.MapSystem;
    }, function (_unresolved_23) {
      MonsterSystem = _unresolved_23.MonsterSystem;
    }, function (_unresolved_24) {
      NumSystem = _unresolved_24.NumSystem;
    }, function (_unresolved_25) {
      PropSystem = _unresolved_25.PropSystem;
    }, function (_unresolved_26) {
      SkillSystem = _unresolved_26.SkillSystem;
    }, function (_unresolved_27) {
      WeaponSystem = _unresolved_27.WeaponSystem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a41fcFlOgVCb4AMEKDOJ9z2", "MapLayer", undefined);

      __checkObsolete__(['find', 'Node', 'ProgressBar', 'tween', 'Tween', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MapLayer", MapLayer = (_dec = ccclass('MapLayer'), _dec(_class = class MapLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor(...args) {
          super(...args);
          this.fightCapNode = void 0;
          this.mapSystem = void 0;
          this.player = void 0;
          this.gameCtrl = void 0;
          this.timeNode = void 0;
          this.expProgress = void 0;
          this.expLvNode = void 0;
          this.expBarColorArr = ["#00FF00", "#00C2FF", "#FF00D6", "#FF2900"];
          this.expBarColorIndex = 0;
          this.expBarShineColor = void 0;
          this.expLvUpCount = 0;
          this.coinNumNode = void 0;
          this.coinIconNode = void 0;
          this.diamondNumNode = void 0;
          this.killMonsterNumNode = void 0;
          this.bossHpLayer = void 0;
          this.bossDamProgressBar = void 0;
          this.bossHpProgress = void 0;
          this.skillBombIcon = void 0;
          this.skillBombAd = void 0;
          this.skillBombNum = void 0;
          this.skillBombCd = void 0;
          this.btnSkillHeal = void 0;
          this.skillHealIcon = void 0;
          this.skillHealAd = void 0;
          this.skillHealNum = void 0;
          this.skillHealCd = void 0;
          this.skillMagnetAd = void 0;
          this.skillMagnetNum = void 0;
          this.skillLifeAd = void 0;
          this.skillLifeNum = void 0;
          this.monsterNumNode = void 0;
          this.showNumNode = void 0;
          this.playerPosNode = void 0;
          this.expNumNode = void 0;
        }

        onLoad() {
          super.onLoad();
          this.chooseDesignResolution();
          this.getNodeByPath("bg").active = false;
          this.getNodeByPath("ui/btns").active = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).isRecordAd || (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).isInDevelopmentEnvironment();
          this.fightCapNode = this.getNodeByPath("fightCap");
          this.fightCapNode.active = false;
          this.gameCtrl = this.getNodeByPath("gameCtrl").addComponent(_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl);
          this.mapSystem = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapFightLayer.addComponent(_crd && MapSystem === void 0 ? (_reportPossibleCrUseOfMapSystem({
            error: Error()
          }), MapSystem) : MapSystem);
          let mapLayer = find("map", (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapFightLayer);
          this.player = find("player", mapLayer).addComponent(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player);
          let monsterSystem = find("monsterLayer", mapLayer).addComponent(_crd && MonsterSystem === void 0 ? (_reportPossibleCrUseOfMonsterSystem({
            error: Error()
          }), MonsterSystem) : MonsterSystem);
          let bulletSystem = find("bulletLayer", mapLayer).addComponent(_crd && BulletSystem === void 0 ? (_reportPossibleCrUseOfBulletSystem({
            error: Error()
          }), BulletSystem) : BulletSystem);
          let numSystem = find("numLayer", mapLayer).addComponent(_crd && NumSystem === void 0 ? (_reportPossibleCrUseOfNumSystem({
            error: Error()
          }), NumSystem) : NumSystem);
          let skillSystem = find("player/skillLayer", mapLayer).addComponent(_crd && SkillSystem === void 0 ? (_reportPossibleCrUseOfSkillSystem({
            error: Error()
          }), SkillSystem) : SkillSystem);
          let weaponSystem = find("player/weaponLayer", mapLayer).addComponent(_crd && WeaponSystem === void 0 ? (_reportPossibleCrUseOfWeaponSystem({
            error: Error()
          }), WeaponSystem) : WeaponSystem);
          let hintSystem = find("hintLayer", mapLayer).addComponent(_crd && HintSystem === void 0 ? (_reportPossibleCrUseOfHintSystem({
            error: Error()
          }), HintSystem) : HintSystem);
          let propSystem = find("propLayer", mapLayer).addComponent(_crd && PropSystem === void 0 ? (_reportPossibleCrUseOfPropSystem({
            error: Error()
          }), PropSystem) : PropSystem);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).setCompoments(this, this.player, this.mapSystem, monsterSystem, bulletSystem, numSystem, weaponSystem, skillSystem, hintSystem, propSystem);
          this.coinIconNode = this.getNodeByPath("ui/top/coinLayer/icon");
          this.coinNumNode = this.getNodeByPath("ui/top/coinLayer/num");
          this.diamondNumNode = this.getNodeByPath("ui/top/diamondLayer/num");
          this.killMonsterNumNode = this.getNodeByPath("ui/top/monsterLayer/num");
          this.expProgress = this.getNodeByPath("ui/expProgress");
          this.expLvNode = this.getNodeByPath("ui/expProgress/lv");
          this.expBarShineColor = this.getNodeByPath("ui/expProgress/bar").addComponent(_crd && ShineColor === void 0 ? (_reportPossibleCrUseOfShineColor({
            error: Error()
          }), ShineColor) : ShineColor);
          this.bossHpLayer = this.getNodeByPath("ui/bossHpLayer");
          this.bossDamProgressBar = this.getNodeByPath("ui/bossHpLayer/damProgress").getComponent(ProgressBar);
          this.bossHpProgress = this.getNodeByPath("ui/bossHpLayer/hpProgress");
          this.bossHpLayer.active = false;
          this.skillBombIcon = this.getNodeByPath("ui/skillBtns/btnSkillBomb/icon");
          this.skillBombAd = this.getNodeByPath("ui/skillBtns/btnSkillBomb/icon/ad");
          this.skillBombNum = this.getNodeByPath("ui/skillBtns/btnSkillBomb/icon/num");
          this.skillBombCd = this.getNodeByPath("ui/skillBtns/btnSkillBomb/cd");
          this.btnSkillHeal = this.getNodeByPath("ui/skillBtns/btnSkillHeal");
          this.skillHealIcon = this.getNodeByPath("ui/skillBtns/btnSkillHeal/icon");
          this.skillHealAd = this.getNodeByPath("ui/skillBtns/btnSkillHeal/icon/ad");
          this.skillHealNum = this.getNodeByPath("ui/skillBtns/btnSkillHeal/icon/num");
          this.skillHealCd = this.getNodeByPath("ui/skillBtns/btnSkillHeal/cd");
          this.skillMagnetAd = this.getNodeByPath("ui/skillBtns/btnSkillMagnet/icon/ad");
          this.skillMagnetNum = this.getNodeByPath("ui/skillBtns/btnSkillMagnet/icon/num");
          this.skillLifeAd = this.getNodeByPath("ui/skillBtns/btnSkillLife/icon/ad");
          this.skillLifeNum = this.getNodeByPath("ui/skillBtns/btnSkillLife/icon/num");
          this.timeNode = this.getNodeByPath("ui/top/time");
          this.getNodeByPath("ui/infoDev").active = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).isInDevelopmentEnvironment();
          this.monsterNumNode = this.getNodeByPath("ui/infoDev/monsterNum");
          this.showNumNode = this.getNodeByPath("ui/infoDev/showNum");
          this.playerPosNode = this.getNodeByPath("ui/infoDev/playerPos");
          this.expNumNode = this.getNodeByPath("ui/infoDev/expNum");
          let mapData = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().mapData;

          if (mapData) {
            // 战斗中断
            this.loadSaveMapData(mapData);
          } else {
            // 新的开始
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).player.initData(this.layerData);
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).weaponSystem.initData(this.layerData);
          }

          this.openUpdateSecond = true;
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playMusic((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).audioNames.map);
          this.schedule(this.popBuyLifeLayer, this.getPopBuyLifeTime());
        }

        onEnable() {
          super.onEnable();
          this.addEventArr([(_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).mapLeave, (_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).saveDataBefore, (_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).commonResRefresh, (_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).mapRefreshSkill]); // test 武器
          // this.scheduleOnce(() => {
          //     mapModel.weaponSystem.addWeapon(4);
          // }, 1);
          // // test 技能
          // this.scheduleOnce(() => {
          //     for (let i = 0; i < 1; i++) {
          //         mapModel.skillSystem.addSkill(10);
          //     }
          // }, 1);
          // this.scheduleOnce(() => {
          //     mapModel.skillSystem.addSkill(7);
          // }, 5);
          // this.scheduleOnce(() => {
          //     mapModel.skillSystem.addSkill(7);
          // }, 8);
          // // test 被动技能
          // this.scheduleOnce(() => {
          //     for (let i = 0; i < 6; i++) {
          //         mapModel.skillSystem.addSkill2(12);
          //     }
          //     myLog.i("被动技能添加了");
          // }, 10);
        }

        onDisable() {
          super.onDisable();
        }

        onDestroy() {
          super.onDestroy();
        }

        start() {
          if (!(_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().mapHand) {
            (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().mapHand = 1;
            this.scheduleOnce(() => {
              this.popLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).layers.HandLayer);
            });
          }

          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).eventSendCustomEvent("进入战斗场景", "玩家人数"); //console.log("mapModel.mapId = ", mapModel.mapId)

          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).eventLevelStart((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapId);
        }

        initUI() {
          this.refreshExpLayer();
          this.refreshBossHpLayer();
          this.refreshResLayer();
          this.refreshSkillLayer();
        }

        popBuyLifeLayer() {
          if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().baoshi < (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.backLifeDiamond) {
            return;
          }

          this.popLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.BuyLifeLayer);
        } // 强弹复活购买界面间隔时间，单位：秒


        getPopBuyLifeTime() {
          return 60 * 3;
        }

        refreshSkillLayer() {
          this.skillBombAd.active = false;
          this.skillBombNum.active = false;

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).skillBombNum > 0) {
            this.skillBombNum.active = true;
            this.setString(this.skillBombNum, (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).skillBombNum);
          } else {
            this.skillBombAd.active = true;
          }

          this.skillHealAd.active = false;
          this.skillHealNum.active = false;

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).skillHealNum > 0) {
            this.skillHealNum.active = true;
            this.setString(this.skillHealNum, (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).skillHealNum);
          } else {
            this.skillHealAd.active = true;
          }

          this.skillMagnetAd.active = false;
          this.skillMagnetNum.active = false;

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).skillMagnetNum > 0) {
            this.skillMagnetNum.active = true;
            this.setString(this.skillMagnetNum, (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).skillMagnetNum);
          } else {
            this.skillMagnetAd.active = true;
          }

          this.skillLifeAd.active = false;
          this.skillLifeNum.active = false;

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).skillLifeNum > 0) {
            this.skillLifeNum.active = true;
            this.setString(this.skillLifeNum, (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).skillLifeNum);
          } else {
            this.skillLifeAd.active = true;
          }
        }

        mapRefreshSkillRet() {
          this.refreshSkillLayer();
        }

        updateSecond() {
          // if (mapModel.mapSystem.skillBombCd > 0) {
          //     this.skillBombCd.active = true;
          //     cocosUtil.setRenderableColor(this.skillBombIcon, constants.colors.yin.parseColor());
          //     this.setString(this.skillBombCd, Math.ceil(mapModel.mapSystem.skillBombCd));
          // } else {
          //     this.skillBombCd.active = false;
          //     cocosUtil.setRenderableColor(this.skillBombIcon, Color.WHITE);
          // }
          // if (mapModel.mapSystem.skillHealCd > 0) {
          //     this.skillHealCd.active = true;
          //     cocosUtil.setRenderableColor(this.skillHealIcon, constants.colors.yin.parseColor());
          //     this.setString(this.skillHealCd, Math.ceil(mapModel.mapSystem.skillHealCd));
          // } else {
          //     this.skillHealCd.active = false;
          //     cocosUtil.setRenderableColor(this.skillHealIcon, Color.WHITE);
          // }
          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.hp / (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.hpMax < 0.25 && (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.hp > 0 && !(_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).healAdCount) {
            // 强制弹出激励视频，观看后，恢复血量
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).healAdCount++;
            (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
              error: Error()
            }), myLog) : myLog).i("==========血量小于0.25强弹广告治疗");
            (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
              error: Error()
            }), sdkManager) : sdkManager).openAd("血量小于0.25强弹广告治疗", st => {
              if (st == 1) {
                (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).player.useSkillHeal(0.25);
              }
            });
          }

          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.hp / (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.hpMax < 0.5 && !this.btnSkillHeal.isBreath) {
            this.btnSkillHeal.isBreath = true;
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).tweenBreath(this.btnSkillHeal);
          }

          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.hp / (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.hpMax > 0.5 && this.btnSkillHeal.isBreath) {
            this.btnSkillHeal.isBreath = false;
            Tween.stopAllByTarget(this.btnSkillHeal);
            this.btnSkillHeal.scale = v3(1, 1, 1);
          }
        }

        refreshBossHpLayer() {
          let bossMonster = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).monsterSystem.bossMonster;

          if (bossMonster) {
            this.setProgressBar(this.bossHpProgress, bossMonster.hp / bossMonster.hpMax);

            if (!this.bossHpLayer.active) {
              this.bossHpLayer.active = true;
              Tween.stopAllByTarget(this.bossDamProgressBar);
              this.bossDamProgressBar.progress = this.bossHpProgress.getComponent(ProgressBar).progress;
            }
          } else {
            this.bossHpLayer.active = false;
          }
        }

        bossSubHp(dam) {
          let pStart = this.bossHpProgress.getComponent(ProgressBar).progress;
          this.bossDamProgressBar.progress = pStart;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapLayer.refreshBossHpLayer();
          let pEnd = this.bossHpProgress.getComponent(ProgressBar).progress;
          Tween.stopAllByTarget(this.bossDamProgressBar);
          tween(this.bossDamProgressBar).to(0.5, {
            progress: pEnd
          }, {
            easing: "quadOut"
          }).start();
        }

        refreshResLayer() {
          this.setString(this.coinNumNode, (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).coinNum);
          this.setString(this.diamondNumNode, (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().baoshi);
          this.setString(this.killMonsterNumNode, (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).killMonsterNum);
        }

        refreshExpLayer() {
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.expLv, (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).expLv);

          if (!row) {
            return;
          }

          let total = row.exp;
          let current = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).expNum;

          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).expLv > 1) {
            let lastRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.expLv, (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).expLv - 1);
            total = row.exp - lastRow.exp;
            current = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).expNum - lastRow.exp;
          }

          this.setProgressBar(this.expProgress, current / total);
          this.setString(this.expLvNode, (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).expLv); // 闪白

          this.expBarShineColor.startShine((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).materials.shineColor, null, 0.2);

          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).expNum >= row.exp && (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.hp > 0) {
            // 升级了
            this.expLvUpCount++;
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).expLv++;

            if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).expLv % (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.check == 0) {
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).skillAllNum++;
            }

            this.expBarColorIndex++;

            if (this.expBarColorIndex >= this.expBarColorArr.length) {
              this.expBarColorIndex = 0;
            }

            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).setRenderableColor(find("bar", this.expProgress), this.expBarColorArr[this.expBarColorIndex]);
            this.refreshExpLayer();
            this.unschedule(this.onSkillSelect);
            this.scheduleOnce(this.onSkillSelect, 0.5);
          }
        }

        onSkillSelect() {
          if (this.expLvUpCount <= 0) {
            return;
          }

          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.hp > 0 && !(_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).isRecordAd) {
            this.expProgress.active = false;
            let obj = {};
            obj.lvCount = this.expLvUpCount;
            this.popLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.SkillSelectLayer, obj, () => {
              this.expProgress.active = true;
            });
          }

          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.hp > 0) {
            this.expLvUpCount = 0;
          }
        }

        popLayer(layerName, layerData, layerCb) {
          if (this.isShowingLayer(layerName)) {
            return;
          }

          this.gameFightPause();
          this.openLayer(layerName, layerData, () => {
            this.gameFightResume();

            if (layerCb) {
              layerCb();
            }
          });
        }

        refreshTimeNode() {
          let timeStr = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).getTimeStr((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).time * 1000, true);
          this.setString(this.timeNode, timeStr);
        }

        gameFightPause() {
          this.mapSystem.fightPause();
        }

        gameFightResume() {
          this.mapSystem.fightResume();
        }

        mapLeaveRet(data) {
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().mapData = null;
          this.closeLayer();
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.HomeLayer, data);
        }

        commonResRefreshRet(data) {
          this.refreshResLayer();
        }

        loadSaveMapData(mapData) {
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).loadSaveData(mapData.mapModel);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.loadSaveData(mapData.mapData);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).propSystem.loadSaveData(mapData.propData);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).weaponSystem.loadSaveData(mapData.weaponData);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.loadSaveData(mapData.skillData);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.loadSaveData(mapData.player);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).monsterSystem.loadSaveData(mapData.monsterData);
        }

        saveDataBeforeRet(data) {
          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.hp <= 0) {
            return;
          }

          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).propSystem.saveDataBefore();
          let mapData = {};
          mapData.mapModel = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).getSaveData();
          mapData.mapData = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.getSaveData();
          mapData.propData = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).propSystem.getSaveData();
          mapData.weaponData = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).weaponSystem.getSaveData();
          mapData.skillData = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.getSaveData();
          mapData.player = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.getSaveData();
          mapData.monsterData = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).monsterSystem.getSaveData();
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().mapData = mapData;
        }

        onClickBtnSkillBomb() {
          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.skillBombCd > 0) {
            this.createNotice((_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
              error: Error()
            }), localText) : localText).cd);
            return;
          }

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).skillBombNum > 0) {
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).mapSystem.useSkillBomb();
            this.refreshSkillLayer();
            return;
          }

          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).openAd("主动技能-炸弹", st => {
            if (st == 1) {
              let num = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).getFloatValue(1, 3, true);
              (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).skillBombNum += num;
              this.refreshSkillLayer();
            }
          });
        }

        onClickBtnSkillHeal() {
          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.skillHealCd > 0) {
            this.createNotice((_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
              error: Error()
            }), localText) : localText).cd);
            return;
          }

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).skillHealNum > 0) {
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).mapSystem.useSkillHeal();
            this.refreshSkillLayer();
            return;
          }

          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).openAd("主动技能-治疗", st => {
            if (st == 1) {
              (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).skillHealNum += 4;
              this.refreshSkillLayer();
            }
          });
        }

        onClickBtnSkillMagnet() {
          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).skillMagnetNum > 0) {
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).mapSystem.useSkillMagnet();
            this.refreshSkillLayer();
            return;
          }

          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).openAd("主动技能-磁铁", st => {
            if (st == 1) {
              (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).skillMagnetNum++;
              this.refreshSkillLayer();
            }
          });
        }

        onClickBtnSkillLife() {
          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).skillLifeNum > 0) {
            return;
          }

          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).openAd("主动技能-自动复活", st => {
            if (st == 1) {
              (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).skillLifeNum++;
              this.refreshSkillLayer();
            }
          });
        }

        onClickBtnPause(node) {
          this.popLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.PauseLayer);
        }

        onClickBtnClose(node) {
          (_crd && serverMsg === void 0 ? (_reportPossibleCrUseOfserverMsg({
            error: Error()
          }), serverMsg) : serverMsg).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).mapLeave);
        }

        onClickBtnSkillSelectLayer() {
          this.popLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.SkillSelectLayer);
        }

        onClickBtnResume() {
          this.gameFightResume();
        }

        onClickBtnBoss() {
          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).time < 300) {
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).time = 295;
          } else if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).time < 600 && (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).time > 305) {
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).time = 595;
          } else if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).time > 605) {
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).time = 895;
          }
        }

        onClickBtnLuckyDraw() {
          // this.popLayer(constants.layers.LuckyDrawLayer);
          this.popLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.BoxMonsterLayer);
        }

        onClickBtnAccountClear() {
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().clearAccountData();
        }

        onClickBtnMonsterAdd() {
          if (!this.monsterAddFlag) {
            this.monsterAddFlag = 0;
          }

          this.monsterAddFlag++;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4bf08e8c36cc4967a00f19ee6bb2dce6e107bb48.js.map