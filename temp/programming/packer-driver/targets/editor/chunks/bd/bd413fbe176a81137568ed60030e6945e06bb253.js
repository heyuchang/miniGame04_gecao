System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, AudioSource, director, find, Node, _decorator, myLog, GLoginState, GNetCmd, GNetConst, CronCtr, ServerCtr, tyqAdManager, cocosUtil, BaseLayer, constants, msgac, audioManager, eventManager, layerManager, localStorageManager, playerModel, _dec, _class, _crd, ccclass, property, GameLaunch;

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../common/myLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGLoginState(extras) {
    _reporterNs.report("GLoginState", "../tyqSDK/network/conf", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGNetCmd(extras) {
    _reporterNs.report("GNetCmd", "../tyqSDK/network/conf", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGNetConst(extras) {
    _reporterNs.report("GNetConst", "../tyqSDK/network/conf", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCronCtr(extras) {
    _reporterNs.report("CronCtr", "../tyqSDK/network/CronCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerCtr(extras) {
    _reporterNs.report("ServerCtr", "../tyqSDK/network/ServerCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqAdManager(extras) {
    _reporterNs.report("tyqAdManager", "../tyqSDK/tyqAdManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "./compoment/base/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "./data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgac(extras) {
    _reporterNs.report("msgac", "./data/msgac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "./manager/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventManager(extras) {
    _reporterNs.report("eventManager", "./manager/eventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflayerManager(extras) {
    _reporterNs.report("layerManager", "./manager/layerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalStorageManager(extras) {
    _reporterNs.report("localStorageManager", "./manager/localStorageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerModel(extras) {
    _reporterNs.report("playerModel", "./model/playerModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
      AudioSource = _cc.AudioSource;
      director = _cc.director;
      find = _cc.find;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      GLoginState = _unresolved_3.GLoginState;
      GNetCmd = _unresolved_3.GNetCmd;
      GNetConst = _unresolved_3.GNetConst;
    }, function (_unresolved_4) {
      CronCtr = _unresolved_4.default;
    }, function (_unresolved_5) {
      ServerCtr = _unresolved_5.default;
    }, function (_unresolved_6) {
      tyqAdManager = _unresolved_6.tyqAdManager;
    }, function (_unresolved_7) {
      cocosUtil = _unresolved_7.cocosUtil;
    }, function (_unresolved_8) {
      BaseLayer = _unresolved_8.BaseLayer;
    }, function (_unresolved_9) {
      constants = _unresolved_9.constants;
    }, function (_unresolved_10) {
      msgac = _unresolved_10.msgac;
    }, function (_unresolved_11) {
      audioManager = _unresolved_11.audioManager;
    }, function (_unresolved_12) {
      eventManager = _unresolved_12.eventManager;
    }, function (_unresolved_13) {
      layerManager = _unresolved_13.layerManager;
    }, function (_unresolved_14) {
      localStorageManager = _unresolved_14.localStorageManager;
    }, function (_unresolved_15) {
      playerModel = _unresolved_15.playerModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0ca88Ac39FHk6N+9LN2sjMi", "GameLaunch", undefined);

      __checkObsolete__(['assetManager', 'AudioSource', 'director', 'EventTouch', 'find', 'Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameLaunch", GameLaunch = (_dec = ccclass('GameLaunch'), _dec(_class = class GameLaunch extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        onLoad() {
          super.onLoad();

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).isInDevelopmentEnvironment()) {
            (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
              error: Error()
            }), myLog) : myLog).isOpen = true;
          }

          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).init();
          (_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).init();
          super.onLoad();
          let btnTest = this.getNodeByPath("btnTest");
          btnTest.active = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).isInDevelopmentEnvironment();
          let layer1 = find("layer1", this.node);
          let layerHint = find("layerHint", this.node);
          (_crd && layerManager === void 0 ? (_reportPossibleCrUseOflayerManager({
            error: Error()
          }), layerManager) : layerManager).init(layer1, layerHint); // 设置音频播放组件

          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).setMusicAudioSource(this.getNodeByPath("audio/music").getComponent(AudioSource));
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).setEffectAudioSource(this.getNodeByPath("audio/effect").getComponent(AudioSource));
          let loadingName = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.LoadingLayer;
          this.getNodeByPath(loadingName).addComponent(loadingName);
          let noticeName = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.NoticeLayer;
          find(noticeName, layerHint).addComponent(noticeName);
          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i("========启动参数：", (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getEnterUrlQuery());
          director.on((_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
            error: Error()
          }), GNetCmd) : GNetCmd).GetFriendVal.toString(), this.onMessageEvent, this);
          director.on((_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
            error: Error()
          }), GNetCmd) : GNetCmd).ReqWxSession.toString(), this.onMessageEvent, this);
          director.on((_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
            error: Error()
          }), GNetCmd) : GNetCmd).GetRegionData.toString(), this.onMessageEvent, this);
        }

        onEnable() {
          super.onEnable();
          this.addEventArr([(_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).openLayer, (_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).showNotice]);
        }

        onDisable() {
          super.onDisable();
        }

        start() {
          let canvasNode = find("Canvas");
          canvasNode.on(Node.EventType.TOUCH_START, event => {
            (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
              error: Error()
            }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
              error: Error()
            }), msgac) : msgac).globalTouchStart, event);
          });
        }

        onMessageEvent(value) {
          console.log("处理服务端发送的消息:", value);

          if (value.status != (_crd && GNetConst === void 0 ? (_reportPossibleCrUseOfGNetConst({
            error: Error()
          }), GNetConst) : GNetConst).ResSuccess) {
            console.error("服务端响应失败~!");
            (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().isLogin = false;
            (_crd && CronCtr === void 0 ? (_reportPossibleCrUseOfCronCtr({
              error: Error()
            }), CronCtr) : CronCtr).getInstance().isPutEnable = false;
            (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().loginState = (_crd && GLoginState === void 0 ? (_reportPossibleCrUseOfGLoginState({
              error: Error()
            }), GLoginState) : GLoginState).loginWithAccount;
            return;
          }

          let ctr = (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance();

          switch (value.cmd) {
            case (_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
              error: Error()
            }), GNetCmd) : GNetCmd).GetFriendVal:
              (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).shareObj.friendNum = value.friendCnt;
              let friendData = JSON.parse(value.friendData);
              (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).shareObj.friendAdNum = friendData.videoCalCnt;
              (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).shareObj.friendPassNum = friendData.friendPassCnt;
              break;

            case (_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
              error: Error()
            }), GNetCmd) : GNetCmd).ReqWxSession:
              ctr.token = value.token;
              ctr.regionDataList = value.regionDataList;

              if (value.nickName && value.nickName != '') {
                ctr.nickName = value.nickName;
              } //直接请求服务端数据


              (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
                error: Error()
              }), ServerCtr) : ServerCtr).GetInstance().reqRegionData();

              if (value.wxRes && value.wxRes.openid) {
                (_crd && localStorageManager === void 0 ? (_reportPossibleCrUseOflocalStorageManager({
                  error: Error()
                }), localStorageManager) : localStorageManager).openId = value.wxRes.openid;
              }

              if (value.uid) {
                (_crd && localStorageManager === void 0 ? (_reportPossibleCrUseOflocalStorageManager({
                  error: Error()
                }), localStorageManager) : localStorageManager).uid = value.uid;
              }

              break;

            case (_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
              error: Error()
            }), GNetCmd) : GNetCmd).GetRegionData:
              ctr.token = value.token;
              ctr.isLogin = true; //标记是账号登录

              (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
                error: Error()
              }), ServerCtr) : ServerCtr).GetInstance().serverDataVersion = value.dataVersion; //如果服务端的版本大于本地，直接赋值

              if (value.dataVersionFlag == (_crd && GNetConst === void 0 ? (_reportPossibleCrUseOfGNetConst({
                error: Error()
              }), GNetConst) : GNetConst).ServerIsNew) {
                (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
                  error: Error()
                }), ServerCtr) : ServerCtr).GetInstance().serverData = JSON.parse(value.jsonData);
              }

              ctr.loginState = (_crd && GLoginState === void 0 ? (_reportPossibleCrUseOfGLoginState({
                error: Error()
              }), GLoginState) : GLoginState).loginWithAccount;
              (_crd && CronCtr === void 0 ? (_reportPossibleCrUseOfCronCtr({
                error: Error()
              }), CronCtr) : CronCtr).getInstance().isPutEnable = false;
              console.log("获得服务端数据!", (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
                error: Error()
              }), ServerCtr) : ServerCtr).GetInstance().serverData);
              ctr.uid = value.uid;
              ctr.regionId = value.regionId;
              break;

            default:
              break;
          }
        }

        openLayerRet(data) {
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers[data.name], data);
        }

        showNoticeRet(data) {
          this.createNotice(data);
        }

        onClickBtnTest(node) {
          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i(assetManager.assets);
        }

        onClickBtnHintClose() {
          this.hideHintLayer();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bd413fbe176a81137568ed60030e6945e06bb253.js.map