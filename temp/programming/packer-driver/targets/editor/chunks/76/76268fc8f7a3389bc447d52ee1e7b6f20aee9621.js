System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, localText, msgac, audioManager, eventManager, mapModel, playerModel, UserData, H5AdSdk4399, CronCtr, Channel, tyqAdManager, tyqSDK, SdkManager, _crd, sdkManager;

  function _reportPossibleCrUseOflocalText(extras) {
    _reporterNs.report("localText", "../game/data/localText", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgac(extras) {
    _reporterNs.report("msgac", "../game/data/msgac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../game/manager/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventManager(extras) {
    _reporterNs.report("eventManager", "../game/manager/eventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../game/model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerModel(extras) {
    _reporterNs.report("playerModel", "../game/model/playerModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../game/model/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfH5AdSdk(extras) {
    _reporterNs.report("H5AdSdk4399", "../tyqSDK/H5AdSdk4399", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCronCtr(extras) {
    _reporterNs.report("CronCtr", "../tyqSDK/network/CronCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannel(extras) {
    _reporterNs.report("Channel", "../tyqSDK/tyqAdManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqAdManager(extras) {
    _reporterNs.report("tyqAdManager", "../tyqSDK/tyqAdManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../tyqSDK/tyqSDK", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      localText = _unresolved_2.localText;
    }, function (_unresolved_3) {
      msgac = _unresolved_3.msgac;
    }, function (_unresolved_4) {
      audioManager = _unresolved_4.audioManager;
    }, function (_unresolved_5) {
      eventManager = _unresolved_5.eventManager;
    }, function (_unresolved_6) {
      mapModel = _unresolved_6.mapModel;
    }, function (_unresolved_7) {
      playerModel = _unresolved_7.playerModel;
    }, function (_unresolved_8) {
      UserData = _unresolved_8.UserData;
    }, function (_unresolved_9) {
      H5AdSdk4399 = _unresolved_9.H5AdSdk4399;
    }, function (_unresolved_10) {
      CronCtr = _unresolved_10.default;
    }, function (_unresolved_11) {
      Channel = _unresolved_11.Channel;
      tyqAdManager = _unresolved_11.tyqAdManager;
    }, function (_unresolved_12) {
      tyqSDK = _unresolved_12.tyqSDK;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "93823ORdqxLXK57adD53UST", "sdkManager", undefined);

      SdkManager = class SdkManager {
        constructor() {}

        static get instance() {
          if (!this._instance) {
            this._instance = new SdkManager();
          }

          return this._instance;
        } // 注意!!!每次打包前，要检查该变量值是否为对应的渠道，git上的版本默认为：WECHAT_MRTGD
        // public channel: ChannelFlag = ChannelFlag.WECHAT_JJWS;


        initSDK() {
          if ((_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getChannel() == (_crd && Channel === void 0 ? (_reportPossibleCrUseOfChannel({
            error: Error()
          }), Channel) : Channel).H5_4399) {
            (_crd && H5AdSdk4399 === void 0 ? (_reportPossibleCrUseOfH5AdSdk({
              error: Error()
            }), H5AdSdk4399) : H5AdSdk4399).instance.checkDownUrl();
          }
        }
        /**
         * 激励视频广告统一播放接口
         * 完整观看广告后，获得奖励，调用：tmpFunc(1)
         * 中途退出或者观看失败，调用：tmpFunc(0)
         * @param cb 
         */


        openAd(info, cb) {
          let tmpFunc = st => {
            if (st == 0) {
              (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
                error: Error()
              }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
                error: Error()
              }), msgac) : msgac).showNotice, (_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
                error: Error()
              }), localText) : localText).adAwardHint);
            } else if (st == -1) {
              (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
                error: Error()
              }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
                error: Error()
              }), msgac) : msgac).showNotice, (_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
                error: Error()
              }), localText) : localText).noRewardAd);
            } else if (st == 2) {
              (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
                error: Error()
              }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
                error: Error()
              }), msgac) : msgac).showNotice, (_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
                error: Error()
              }), localText) : localText).noAd);
            }

            cb(st);

            if (st == 1) {
              (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).addDayTaskNum(11); // 好友观看视频广告累计数量

              (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().$videoCalCnt++;
              (_crd && CronCtr === void 0 ? (_reportPossibleCrUseOfCronCtr({
                error: Error()
              }), CronCtr) : CronCtr).getInstance().saveDataToCloud("videoCalCnt", (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().$videoCalCnt);
            }

            (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
              error: Error()
            }), audioManager) : audioManager).gameOnShow(true);
          }; // // test
          // tmpFunc(1);
          // return;


          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).isInDevelopmentEnvironment() || (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).isRecordAd) {
            // 开发环境，默认直接成功
            tmpFunc(1);
            return;
          }

          if ((_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getChannel() == (_crd && Channel === void 0 ? (_reportPossibleCrUseOfChannel({
            error: Error()
          }), Channel) : Channel).DEFAULT) {
            // 电脑测试直接返回观看成功
            tmpFunc(1);
            return;
          }

          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapId > 0) {
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).mapSystem.fightPause();
          }

          if ((_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getChannel() == (_crd && Channel === void 0 ? (_reportPossibleCrUseOfChannel({
            error: Error()
          }), Channel) : Channel).H5_4399) {
            (_crd && H5AdSdk4399 === void 0 ? (_reportPossibleCrUseOfH5AdSdk({
              error: Error()
            }), H5AdSdk4399) : H5AdSdk4399).instance.showRewardedAd(state => {
              if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).mapId > 0) {
                (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).mapSystem.fightResume();
              }

              tmpFunc(state);
            });
          } else {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).showRewardedAd(info, state => {
              if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).mapId > 0) {
                (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).mapSystem.fightResume();
              }

              tmpFunc(state);
            });
          }
        }

        getShareUid() {
          let query = (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getEnterUrlQuery();

          if (query && query.uid) {
            return query.uid;
          }

          return "";
        }

      };
      SdkManager._instance = void 0;

      _export("sdkManager", sdkManager = SdkManager.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=76268fc8f7a3389bc447d52ee1e7b6f20aee9621.js.map