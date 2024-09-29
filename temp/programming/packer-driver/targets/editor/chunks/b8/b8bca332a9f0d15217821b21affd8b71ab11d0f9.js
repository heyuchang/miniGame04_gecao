System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EditBox, Label, Node, sp, Sprite, tween, v3, Vec3, VideoPlayer, view, _decorator, myLog, Channel, tyqAdManager, ChannelFlag, tyqSDK, utilTools, constants, audioManager, designManager, RedPointLogicMgr, mapModel, playerModel, UserData, BaseLayer, TopUILayer, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, MainLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../../common/myLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannel(extras) {
    _reporterNs.report("Channel", "../../../tyqSDK/tyqAdManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqAdManager(extras) {
    _reporterNs.report("tyqAdManager", "../../../tyqSDK/tyqAdManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelFlag(extras) {
    _reporterNs.report("ChannelFlag", "../../../tyqSDK/tyqSDK", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../../../tyqSDK/tyqSDK", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../../manager/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedPointLogicMgr(extras) {
    _reporterNs.report("RedPointLogicMgr", "../../manager/RedPointLogicMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../base/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTopUILayer(extras) {
    _reporterNs.report("TopUILayer", "./TopUILayer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
      Node = _cc.Node;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
      VideoPlayer = _cc.VideoPlayer;
      view = _cc.view;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      Channel = _unresolved_3.Channel;
      tyqAdManager = _unresolved_3.tyqAdManager;
    }, function (_unresolved_4) {
      ChannelFlag = _unresolved_4.ChannelFlag;
      tyqSDK = _unresolved_4.tyqSDK;
    }, function (_unresolved_5) {
      utilTools = _unresolved_5.utilTools;
    }, function (_unresolved_6) {
      constants = _unresolved_6.constants;
    }, function (_unresolved_7) {
      audioManager = _unresolved_7.audioManager;
    }, function (_unresolved_8) {
      designManager = _unresolved_8.designManager;
    }, function (_unresolved_9) {
      RedPointLogicMgr = _unresolved_9.RedPointLogicMgr;
    }, function (_unresolved_10) {
      mapModel = _unresolved_10.mapModel;
    }, function (_unresolved_11) {
      playerModel = _unresolved_11.playerModel;
    }, function (_unresolved_12) {
      UserData = _unresolved_12.UserData;
    }, function (_unresolved_13) {
      BaseLayer = _unresolved_13.BaseLayer;
    }, function (_unresolved_14) {
      TopUILayer = _unresolved_14.TopUILayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b39d7yGzFVCnJAyJAjPMHKR", "MainLayer", undefined);

      __checkObsolete__(['EditBox', 'Label', 'Node', 'sp', 'Sprite', 'tween', 'v3', 'Vec3', 'VideoPlayer', 'view', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainLayer", MainLayer = (_dec = ccclass('MainLayer'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = class MainLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor(...args) {
          super(...args);
          this.toggles = [];
          this.togglesLock = [true, false, false, false, true];

          _initializerDefineProperty(this, "btnRedBox", _descriptor, this);

          _initializerDefineProperty(this, "handNode", _descriptor2, this);

          this.emailRedPointNode = void 0;
          this.daySignRedPointNode = void 0;
          this.dayTaskRedPointNode = void 0;
          this.vipRedPointNode = void 0;
          this.duihuanBg = void 0;
          this.btnShare = void 0;
          this.videoPlayer = void 0;
          this.shurukuang = void 0;
        }

        onLoad() {
          // this.chooseDesignResolution()
          // let mapData = designManager.getTable(constants.tableName.map)
          // let curMap = UserData.getInstance().getCurMap() - 1
          // this.setSpriteFrame2(this.getNodeByPath("Map/map_name"), "homeLayer/map_name" + (mapData[curMap].id), null, constants.bundles.wwqVec)
          // this.setSpriteFrame2(this.getNodeByPath("Map/btnMap/icon"), "homeLayer/ui_map" + (mapData[curMap].id), null, constants.bundles.wwqVec)
          // this.getNodeByPath("btnGo/Label").getComponent(Label).string = "X" + mapData[curMap].energy
          // let leveldata = UserData.getInstance().getLevelData(UserData.getInstance().getCurMap())
          // this.getNodeByPath("Map/timeLabel").getComponent(Label).string = "最高生存时间：" + utilTools.getTimeStrChinese(leveldata.Time * 1000)
          // RedPointLogicMgr.ins().setRPointView(this.getNodeByPath("Map/btnMap/icon"),null, true)
          this.emailRedPointNode = this.getNodeByPath("btnLetter/redPoint");
          this.daySignRedPointNode = this.getNodeByPath("btnsLeft/btnDaySign/redPoint");
          this.dayTaskRedPointNode = this.getNodeByPath("btnsLeft/btnDayTask/redPoint");
          this.vipRedPointNode = this.getNodeByPath("btnsRight/btnVip/redPoint");
          this.btnShare = this.getNodeByPath("btnsRight/btnShare");
          let btnPyramid = this.getNodeByPath("btnsLeft/btnPyramid");

          if (btnPyramid) {
            if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().roleLv < (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.qingdianLock) {
              btnPyramid.getComponent(Sprite).color = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).colors.yin.parseColor();
            }
          }

          let btnDayTask = this.getNodeByPath("btnsLeft/btnDayTask");

          if (btnDayTask) {
            if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().roleLv < (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.taksLock) {
              btnDayTask.getComponent(Sprite).color = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).colors.yin.parseColor();
            }
          }

          let btnGuess = this.getNodeByPath("btnsLeft/btnGuess");

          if (btnGuess) {
            if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().roleLv < (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.caiquanLock) {
              btnGuess.getComponent(Sprite).color = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).colors.yin.parseColor();
            }
          } // this.duihuanBg = this.getNodeByPath("patbg1");
          // this.duihuanBg.active = false
          // this.videoPlayer = this.getNodeByPath("VideoPlayer");
          // this.videoPlayer.active = false
          // this.shurukuang = this.duihuanBg.getChildByName("EditBox").getComponent(EditBox)

        }

        onClickBtnDuihuan() {
          this.duihuanBg.active = true;
          let tishi = this.duihuanBg.getChildByName("tishilabel");
          tishi.active = false;
        }

        onClickBtnCloseTuihuan() {
          this.duihuanBg.active = false;
        }

        onClickBtnTuihuan() {
          let tishi = this.duihuanBg.getChildByName("tishilabel");
          tishi.active = false;
          let str = this.shurukuang.getComponent(EditBox).string;
          let strArr = str.split("_");

          if (strArr.length > 1) {
            if (strArr[0] == "tyq") {
              let curPath = "";
              let index = strArr[1];
              curPath = "https://oss.game.xmtyq.com/game/video_wxgame/bpxt/tyq_" + index + ".mp4?token=6d4ae1582d1f97a26ccf250d29313750";
              tishi.active = false;
              this.videoPlayer.getComponent(VideoPlayer).remoteURL = curPath;
              this.videoPlayer.active = true;
            } else {
              tishi.active = true;
            }
          } else {
            tishi.active = true;
          }
        }

        onEnable() {
          super.onEnable(); // this.addEventArr([
          //     msgac.mapEnter,
          // ]);

          if (((_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).channel == (_crd && ChannelFlag === void 0 ? (_reportPossibleCrUseOfChannelFlag({
            error: Error()
          }), ChannelFlag) : ChannelFlag).WECHAT_JJWS || (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).channel == (_crd && ChannelFlag === void 0 ? (_reportPossibleCrUseOfChannelFlag({
            error: Error()
          }), ChannelFlag) : ChannelFlag).WECHAT_MRTGD) && (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getChannel() != (_crd && Channel === void 0 ? (_reportPossibleCrUseOfChannel({
            error: Error()
          }), Channel) : Channel).OPPO_MINI_GAME) {
            this.btnShare.active = true;
          } else {
            this.btnShare.active = false;
          }
        }

        onDisable() {
          super.onDisable();
        }

        onDestroy() {
          super.onDestroy();
        }

        refreshRedPoint() {
          this.emailRedPointNode.active = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).hasLetterAward();
          this.daySignRedPointNode.active = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).hasDaySignAward();
          this.dayTaskRedPointNode.active = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().roleLv >= (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.taksLock && (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).hasDayTaskAward();
          this.vipRedPointNode.active = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).hasVipAward();
        }

        start() {
          let btnset = this.getNodeByPath("btnSet");
          let btnEmail = this.getNodeByPath("btnLetter");
          let TopUILayer = this.node.parent.parent.getChildByName("TopUILayer");

          if (btnset.position.y > TopUILayer.position.y - 84) {
            btnset.position = v3(btnset.position.x, TopUILayer.position.y - 84, btnset.position.z);
            btnEmail.position = v3(btnEmail.position.x, TopUILayer.position.y - 84, btnEmail.position.z);
          }

          let screen1 = view.getVisibleSize();

          if (screen1.width / screen1.height >= 720 / 1440) {
            let btnGo = this.getNodeByPath("btnGo");
            btnGo.position = new Vec3(btnGo.position.x, -360, btnGo.position.z);
            let Map = this.getNodeByPath("Map");
            Map.position = new Vec3(Map.position.x, 30, Map.position.z);
          }

          if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance()._isShowOpenLevel && (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getCurMap() > 1) {
            (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance()._isShowOpenLevel = false;
            this.initMapLevel((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().getCurMap() - 1, false);
            let role = this.getNodeByPath("Map/role");
            role.active = false;
            tween(role).delay(1).call(function () {
              role.active = true;
            }).start();
            let self = this;
            tween(this.getNodeByPath("Map/btnMap")).delay(0.35).to(0.35, {
              scale: v3(0, 0, 0)
            }).call(function () {
              self.initMapLevel((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().getCurMap(), true);
            }).to(0.2, {
              scale: v3(1, 1, 1)
            }).start();
          } else {
            this.initMapLevel((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().getCurMap(), true);
          }

          let arr = [];
          let propArr = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowsByType((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.CNTM, 1);

          for (let i = 0; i < propArr.length; i++) {
            let data = propArr[i].award[0];
            arr.push(data[0]);
          }

          if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().isHaveProp(arr)) {
            this.btnRedBox.removeFromParent();
          } else {
            tween(this.btnRedBox).to(3, {
              position: v3(180, 220, 0)
            }).to(3, {
              position: v3(-180, 120, 0)
            }).to(3, {
              position: v3(180, 20, 0)
            }).to(3, {
              position: v3(-180, -90, 0)
            }).to(3, {
              position: v3(180, 80, 0)
            }).to(3, {
              position: v3(-180, -80, 0)
            }).to(3, {
              position: v3(180, 20, 0)
            }).to(3, {
              position: v3(-180, 120, 0)
            }).to(3, {
              position: v3(180, 220, 0)
            }).to(3, {
              position: v3(-180, 350, 0)
            }).union().repeatForever().start();
          } // let role = this.getNodeByPath("Map/role")
          // if (UserData.getInstance().getCurMap() == 1) {
          //     tween(role).set({ scale: v3(1.5, 1.5, 0) }).to(2.5, { position: v3(-138, -48, 0) }).set({ scale: v3(-1.5, 1.5, 0) }).to(2.5, { position: v3(90, -48, 0) }).to(0.8, { position: v3(90, 0, 0) }).to(0.8, { position: v3(130, 0, 0) }).set({ scale: v3(1.5, 1.5, 0) }).to(0.5, { position: v3(90, 0, 0) }).to(0.8, { position: v3(90, -48, 0) }).union().repeatForever().start()
          // } else if (UserData.getInstance().getCurMap() == 2) {
          //     this.setSpineData2(role, constants.bundles.monster, "monster22/ncg", function () {
          //         role.getComponent(sp.Skeleton).animation = "walk"
          //         role.getComponent(sp.Skeleton).loop = true
          //     })
          //     tween(role).set({ scale: v3(1.5, 1.5, 0) }).to(2.5, { position: v3(-138, -48, 0) }).set({ scale: v3(-1.5, 1.5, 0) }).to(2.5, { position: v3(90, -48, 0) }).union().repeatForever().start()
          // } else {
          //     role.active = false
          // }
          // mapModel.loadMapRes((percent: number) => {
          // }, () => { })


          (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
            error: Error()
          }), RedPointLogicMgr) : RedPointLogicMgr).ins().setRPointView(this.getNodeByPath("Map/btnChapter"), null, (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().checkChapterCanReward());
          (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
            error: Error()
          }), RedPointLogicMgr) : RedPointLogicMgr).ins().setRPointView(this.getNodeByPath("Map/btnPortal"), null, (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getPatrolState() <= 0);
        }

        initMapLevel(level, isaction) {
          let mapData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getTable((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.map);
          this.setSpriteFrame2(this.getNodeByPath("Map/map_name"), "homeLayer/map_name" + mapData[level - 1].id, null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.wwqVec);
          let iconIndex = (mapData[level - 1].id - 1) % 2 + 1;
          this.setSpriteFrame2(this.getNodeByPath("Map/btnMap/icon"), "homeLayer/ui_map" + iconIndex, null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.wwqVec);
          this.getNodeByPath("btnGo/Label").getComponent(Label).string = "X" + mapData[level - 1].energy;
          let leveldata = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getLevelData((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getCurMap());
          this.getNodeByPath("Map/timeLabel").getComponent(Label).string = "最高生存时间：" + (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).getTimeStrChinese(leveldata.Time * 1000);
          let role = this.getNodeByPath("Map/role");

          if (isaction) {
            tween(role).stop();
            let skin = "skin1";

            if (level == 3 || level == 4) {
              skin = "skin2";
            }

            if (level == 1 || level == 3) {
              role.getComponent(sp.Skeleton).setSkin(skin);
              tween(role).set({
                scale: v3(1.5, 1.5, 0)
              }).to(2.5, {
                position: v3(-138, -48, 0)
              }).set({
                scale: v3(-1.5, 1.5, 0)
              }).to(2.5, {
                position: v3(90, -48, 0)
              }).to(0.8, {
                position: v3(90, 0, 0)
              }).to(0.8, {
                position: v3(130, 0, 0)
              }).set({
                scale: v3(1.5, 1.5, 0)
              }).to(0.5, {
                position: v3(90, 0, 0)
              }).to(0.8, {
                position: v3(90, -48, 0)
              }).union().repeatForever().start();
            } else if (level == 2 || level == 4) {
              this.setSpineData2(role, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).bundles.monster, "monster22/ncg", function () {
                role.getComponent(sp.Skeleton).animation = "walk";
                role.getComponent(sp.Skeleton).loop = true;
                role.getComponent(sp.Skeleton).setSkin(skin);
              });
              tween(role).set({
                scale: v3(1.5, 1.5, 0)
              }).to(2.5, {
                position: v3(-138, -48, 0)
              }).set({
                scale: v3(-1.5, 1.5, 0)
              }).to(2.5, {
                position: v3(90, -48, 0)
              }).union().repeatForever().start();
            } else {
              role.active = false;
            }
          }

          this.handNode.active = false;
          let curMap = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getCurMap() - 1;

          if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().power >= mapData[curMap].energy) {
            this.handNode.active = true;
          }
        }

        onClickBtnGo() {
          // let node = (this.getNodeByPath("prop_coin1"))
          // // let node = new Node
          // // node.addComponent(Sprite)
          // let btnGo = this.getNodeByPath("ui")
          // UserData.getInstance().showGetAnimal(btnGo, node, [0, 0], [0, 800])
          // return
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          let curMap = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getCurMap() - 1;
          let mapData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getTable((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.map);

          if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().power < mapData[curMap].energy) {
            this.createNotice("体力不足");
            return;
          }

          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().usePower(0 - mapData[curMap].energy);
          let topUILayer = this.node.parent.parent.getChildByName("TopUILayer");
          topUILayer.getComponent(_crd && TopUILayer === void 0 ? (_reportPossibleCrUseOfTopUILayer({
            error: Error()
          }), TopUILayer) : TopUILayer).showUseAnimal(1, 0 - mapData[curMap].energy);
          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).addDayTaskNum(7, mapData[curMap].energy);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).enterMapWithMapId((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getCurMap());
        }

        onClickBtnMap() {
          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i("btnMap");
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.closeLayer();
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.LevelLayer);
        }

        onClickBtnChapter() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i("btnMap");
          this.closeLayer();
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.ChapterLayer, {
            chapter: 11
          });
        }

        onClickBtnPartol() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.PatrolLayer);
          (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
            error: Error()
          }), RedPointLogicMgr) : RedPointLogicMgr).ins().setRPointView(this.getNodeByPath("Map/btnPortal"), null, false);
        }

        onClickBtnSet() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.SettingLayer);
        }

        onClickBtnDayTask() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");

          if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().roleLv < (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.taksLock) {
            this.createNotice("角色" + (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.taksLock + "级后解锁");
            return;
          }

          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.DayTaskLayer);
        }

        onClickBtnDaySign() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.DaySignLayer);
        }

        onClickBtnGuess() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");

          if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().roleLv < (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.caiquanLock) {
            this.createNotice("角色" + (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.caiquanLock + "级后解锁");
            return;
          }

          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.GuessGameLayer);
        }

        onClickBtnPyramid() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");

          if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().roleLv < (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.qingdianLock) {
            this.createNotice("角色" + (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.qingdianLock + "级后解锁");
            return;
          }

          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.PyramidDrawLayer);
        }

        onClickOpenLayer(event, data) {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.openLayer(data);
        }

        onClickBtnLetter() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.LetterLayer);
        }

        onClickBtnEquipCompose() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.BlessLayer);
        }

        onClickBtnSkinChange() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.SkinChangeLayer);
        }

        onClickBtnVip() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.VipLayer);
        }

        onClickBtnShare() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.ShareLayer);
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).eventSendCustomEvent("参与活动分享");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnRedBox", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "handNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b8bca332a9f0d15217821b21affd8b71ab11d0f9.js.map