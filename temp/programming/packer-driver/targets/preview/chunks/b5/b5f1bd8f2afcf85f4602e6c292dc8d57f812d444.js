System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Game, game, sys, tyqLayerManager, tyqConstants, GNetConf, EType, Channel, tyqAdManager, tyqSDKConfig, Http, NetworkMgr, TyqSDK, _crd, TyqSDKAppVersion, ChannelFlag, tyqSDK;

  function _reportPossibleCrUseOftyqLayerManager(extras) {
    _reporterNs.report("tyqLayerManager", "./cocos/manager/tyqLayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqConstants(extras) {
    _reporterNs.report("tyqConstants", "./cocos/tyqConstants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGNetConf(extras) {
    _reporterNs.report("GNetConf", "./network/conf", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEType(extras) {
    _reporterNs.report("EType", "./platform/wechat/WXCustomAd", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPos(extras) {
    _reporterNs.report("IPos", "./platform/wechat/WXCustomAd", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannel(extras) {
    _reporterNs.report("Channel", "./tyqAdManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqAdManager(extras) {
    _reporterNs.report("tyqAdManager", "./tyqAdManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqSDKConfig(extras) {
    _reporterNs.report("tyqSDKConfig", "./tyqSDKConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttp(extras) {
    _reporterNs.report("Http", "./utils/weHttp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkMgr(extras) {
    _reporterNs.report("NetworkMgr", "./utils/weNetworkMgr", _context.meta, extras);
  }

  _export({
    TyqSDKAppVersion: void 0,
    ChannelFlag: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Game = _cc.Game;
      game = _cc.game;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      tyqLayerManager = _unresolved_2.tyqLayerManager;
    }, function (_unresolved_3) {
      tyqConstants = _unresolved_3.tyqConstants;
    }, function (_unresolved_4) {
      GNetConf = _unresolved_4.GNetConf;
    }, function (_unresolved_5) {
      EType = _unresolved_5.EType;
    }, function (_unresolved_6) {
      Channel = _unresolved_6.Channel;
      tyqAdManager = _unresolved_6.tyqAdManager;
    }, function (_unresolved_7) {
      tyqSDKConfig = _unresolved_7.tyqSDKConfig;
    }, function (_unresolved_8) {
      Http = _unresolved_8.Http;
    }, function (_unresolved_9) {
      NetworkMgr = _unresolved_9.NetworkMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "83a26NRnL5AdYsLDFN660As", "tyqSDK", undefined);

      __checkObsolete__(['Game', 'game', 'sys']);

      (function (TyqSDKAppVersion) {
        TyqSDKAppVersion[TyqSDKAppVersion["VERSION_1"] = 1] = "VERSION_1";
        TyqSDKAppVersion[TyqSDKAppVersion["VERSION_2"] = 2] = "VERSION_2";
      })(TyqSDKAppVersion || _export("TyqSDKAppVersion", TyqSDKAppVersion = {}));

      (function (ChannelFlag) {
        ChannelFlag[ChannelFlag["WECHAT_MRTGD"] = 1] = "WECHAT_MRTGD";
        ChannelFlag[ChannelFlag["WECHAT_JJWS"] = 2] = "WECHAT_JJWS";
        ChannelFlag[ChannelFlag["WECHAT_Box4399"] = 3] = "WECHAT_Box4399";
        ChannelFlag[ChannelFlag["VIVO_MINI_GAME"] = 4] = "VIVO_MINI_GAME";
        ChannelFlag[ChannelFlag["OPPO_MINI_GAME"] = 5] = "OPPO_MINI_GAME";
      })(ChannelFlag || _export("ChannelFlag", ChannelFlag = {}));

      TyqSDK = class TyqSDK {
        constructor() {
          this.switch_info = {};
          this.master_switch = 0;
          this.openid = "";
          this._playTime = 0;
          this._gameLevel = 0;
          this.item_openId = "tyq_item_openid";
          this.item_watermark = "tyq_item_watermark_";
          this._watermark = "";
          this._onlineTime = 0;
          this.weixin_ads_data = null;
          this.wxGameIconData = [];
          this.levelCount = 0;
          this.timeDiff = 0;
          this.channel = void 0;
          this.shareTime = void 0;
          this.shareCallback = void 0;
        }

        initGame() {
          this.channel = ChannelFlag.WECHAT_MRTGD;
          this.setLogOpen(true);
          this.setAppVersion(1);

          if ((_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getChannel() == (_crd && Channel === void 0 ? (_reportPossibleCrUseOfChannel({
            error: Error()
          }), Channel) : Channel).ANDROID_233) {
            this.init("TyqApp20230213163724", "1iK3I97Mx6VuTjPKgUur1RUeV2eHH3OB"); //233apk
          } else if ((_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getChannel() == (_crd && Channel === void 0 ? (_reportPossibleCrUseOfChannel({
            error: Error()
          }), Channel) : Channel).ANDROID_4399) {
            this.init("TyqApp20230214154427", "o4gt48BCrJHyAxBco6aY6ydxwhPsJUxl"); //4399apk
          } else if ((_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getChannel() == (_crd && Channel === void 0 ? (_reportPossibleCrUseOfChannel({
            error: Error()
          }), Channel) : Channel).WECHAT) {
            switch (this.channel) {
              case ChannelFlag.WECHAT_MRTGD:
                this.init("TyqApp20221110115330", "VE3URwtUCEWyoxCdOqxDs8SxBNTnNpm1"); // 微信小游戏

                break;

              case ChannelFlag.WECHAT_JJWS:
                this.init("TyqApp20230302154121", "J1PRD20Bu8rPTtHj2A64xrTiplCRvqbu"); // 微信小游戏

                break;

              case ChannelFlag.WECHAT_Box4399:
                this.init("TyqApp20230214154438", "NXdhVUkArhQO3izZAdkMUDeYd4XVNSQl"); //4399 游戏盒小游戏

                break;
            }
          } else if ((_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getChannel() == (_crd && Channel === void 0 ? (_reportPossibleCrUseOfChannel({
            error: Error()
          }), Channel) : Channel).VIVO_MINI_GAME) {
            this.init("TyqApp20230506150422", "RFJowvHuA3CX3ArprdniQo93OPmrN8Sq"); //vivo小游戏
          } else if ((_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getChannel() == (_crd && Channel === void 0 ? (_reportPossibleCrUseOfChannel({
            error: Error()
          }), Channel) : Channel).OPPO_MINI_GAME) {
            this.init("TyqApp20230518113406", "Mo9qrwx4GKfZuFPdW5qp8BZLD1qlUA8S"); //oppo小游戏
          }
        }
        /**
         * @returns 返回真实的url
         */


        getUrl() {
          if (this.channel == ChannelFlag.WECHAT_MRTGD) {
            return {
              httpUrl: (_crd && GNetConf === void 0 ? (_reportPossibleCrUseOfGNetConf({
                error: Error()
              }), GNetConf) : GNetConf).mrtgd_HttpUrl,
              wsUrl: (_crd && GNetConf === void 0 ? (_reportPossibleCrUseOfGNetConf({
                error: Error()
              }), GNetConf) : GNetConf).mrtgd_WsUrl
            };
          } else if (this.channel == ChannelFlag.WECHAT_JJWS) {
            return {
              httpUrl: (_crd && GNetConf === void 0 ? (_reportPossibleCrUseOfGNetConf({
                error: Error()
              }), GNetConf) : GNetConf).mrtgd_jjws_HttpUrl,
              wsUrl: (_crd && GNetConf === void 0 ? (_reportPossibleCrUseOfGNetConf({
                error: Error()
              }), GNetConf) : GNetConf).mrtgd_jjws_WsUrl
            };
          }
        }
        /**
         * 初始化接口，尽量早调用
         * @param appId 运营后台提供 
         * @param apiKey 运营后台提供 
         * @param cb 初始化结果回调 st:1成功  st:0失败
         */


        init(appId, apiKey, cb) {
          (_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).appId = appId;
          (_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).apiKey = apiKey;
          (_crd && Http === void 0 ? (_reportPossibleCrUseOfHttp({
            error: Error()
          }), Http) : Http).init((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).server, (_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).apiKey);
          this._watermark = sys.localStorage.getItem(this.item_watermark) || "";
          this.openid = this.initOpenId();

          if ((_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getChannel() != (_crd && Channel === void 0 ? (_reportPossibleCrUseOfChannel({
            error: Error()
          }), Channel) : Channel).WECHAT) {
            (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
              error: Error()
            }), tyqAdManager) : tyqAdManager).initAdIds();
          }

          this.httpPost("api/v1/switch_info", null, ret => {
            if (ret.data) {
              this.timeDiff = ret.data.current_time_stamp - this.getTimeStamp(true);
              this.switch_info = ret.data.switch_info;
              this.master_switch = ret.data.master_switch;

              if ((_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
                error: Error()
              }), tyqAdManager) : tyqAdManager).getChannel() == (_crd && Channel === void 0 ? (_reportPossibleCrUseOfChannel({
                error: Error()
              }), Channel) : Channel).WECHAT) {
                (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
                  error: Error()
                }), tyqAdManager) : tyqAdManager).initAdIds();
              }

              if (ret.data.weixin_ads_data) {
                this.weixin_ads_data = ret.data.weixin_ads_data;

                for (var key in this.weixin_ads_data) {
                  var arr = [];
                  this.log('key', key);

                  if (typeof key) {
                    for (var i = 0; i < this.weixin_ads_data[key].length; i++) {
                      arr = [];

                      for (var keys in this.weixin_ads_data[key][i]) {
                        arr.push(this.weixin_ads_data[key][i][keys]);
                      }

                      var jumpIconData = {
                        name: arr[0],
                        appid: arr[1],
                        imgUrl: arr[2],
                        weixin_ads_data: arr[3],
                        key: key
                      };
                      this.wxGameIconData.push(jumpIconData);
                    }
                  }
                }
              }
            }

            this.login();

            if (cb) {
              cb(1);
            }
          }, () => {
            if (cb) {
              cb(0);
            }
          }); //开始统计玩家停留时间

          this._onlineTime = this.getTimeStamp();
          game.on(Game.EVENT_HIDE, () => {
            this.collectPlayeTime();
          });
          game.on(Game.EVENT_SHOW, () => {
            this._onlineTime = this.getTimeStamp();

            if (this.shareTime) {
              var dt = new Date().getTime() - this.shareTime.getTime();
              this.shareTime = undefined;

              if (dt >= 3000) {
                if (this.shareCallback) {
                  this.shareCallback();
                  this.shareCallback = undefined;
                }
              }
            }
          });
        }
        /**
         * 登陆接口，初始化接口回调成功后调用
         */


        login() {
          if (!this.openid) {
            this.error("openId为空");
            return;
          }

          var urlQuery = (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getEnterUrlQuery();
          var obj = {};

          if (urlQuery) {
            if (urlQuery.ads_id) {
              obj.ads_id = urlQuery.ads_id;
            }

            if (urlQuery.source_openid) {
              obj.source_openid = urlQuery.source_openid;
            }

            if (urlQuery.pull_in_ads_id) {
              obj.pull_in_ads_id = urlQuery.pull_in_ads_id;
            }
          }

          this.httpPost("api/v1/login", obj, res => {
            this.log("登陆：" + this.openid);

            if (res.data) {
              this._watermark = encodeURIComponent(res.data.watermark);
              sys.localStorage.setItem(this.item_watermark, this._watermark);
            }
          }, () => {
            this.error("登录失败,网络错误");
          });
        }
        /**
         * 分享
         * @param params 分享url参数 格式：key1=val1&key2=val2
         * @param cb 有回调，就代表分享成功
         */


        share(params, cb) {
          if ((_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getChannel() == (_crd && Channel === void 0 ? (_reportPossibleCrUseOfChannel({
            error: Error()
          }), Channel) : Channel).WECHAT) {
            this.shareTime = new Date();
            this.shareCallback = cb;
            wx.shareAppMessage({
              query: params
            });
          }
        }
        /**
         * 用于区分审核版和正式版的开关参数 1和2，对应后台版本一和版本二参数设置 默认值：1
         * 注意：该接口要在init接口调用之前调用才有效
         * @param version 
         */


        setAppVersion(version) {
          (_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).appVersion = version;
        }
        /**
         * 直接获取开关值，优先判断总开关，总开关如果是关的，那将全部返回关闭状态
         */


        getSwitchValue(str, df) {
          if (this.master_switch == 0) {
            return 0;
          }

          if (!this.switch_info[str]) {
            //不存在这个开关
            this.log(str + "开关不存在");
            return df || 0;
          } else if (this.switch_info[str] == "0") {
            return 0;
          } else {
            return this.switch_info[str];
          }
        }
        /**
         * 概率开关值
         * @param str 
         * @returns 
         */


        getConfigProbability(str) {
          var value = this.getSwitchValue(str);

          if (!value) {
            return false;
          }

          var rand = Math.random();

          if (rand < value) {
            return true;
          } else {
            return false;
          }
        }
        /**
         * 收集用户玩游戏停留时间
         */


        collectPlayeTime() {
          if (!this.openid) {
            this.error("没有openid");
            return;
          }

          var nowTime = this.getTimeStamp();
          var elapsed = nowTime - this._onlineTime;
          this.log("上传停留", elapsed);
          var info = {
            duration_time: elapsed
          };
          this.httpPost("api/v1/collect_open_game_play_time", info);
        }

        httpPost(url, info, successCb, failCb) {
          if (!info) {
            info = {};
          } // 添加公共参数


          info.appid = (_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).appId;
          info.nonce_str = this.randomStr();
          info.time_stamp = this.getTimeStamp(true) + this.timeDiff;
          info.app_version = (_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).appVersion;
          info.openid = this.openid;
          info.watermark = this._watermark;
          this.log("请求", url, info);
          (_crd && NetworkMgr === void 0 ? (_reportPossibleCrUseOfNetworkMgr({
            error: Error()
          }), NetworkMgr) : NetworkMgr).xhrPost(url, info, ret => {
            // 成功回调
            this.log("请求返回", url, ret);

            if (successCb) {
              successCb(ret);
            }
          }, () => {
            // 失败回调
            if (failCb) {
              failCb();
            }
          });
        }

        wxIconData() {
          return this.wxGameIconData;
        }

        wxJumpData() {
          return this.weixin_ads_data;
        }
        /**
         * 收集用户点击跳转信息，关于跳转后台小游戏接口触活量统计
         * @param event 时间名称
         * @param weixin_ads_id 后台所对应图片展示位
         */


        collectClickEventGame(event, weixin_ads_id) {
          if (!this.openid) {
            this.error("没有openid");
            return;
          }

          var info = {
            event_id: event,
            weixin_ads_id: weixin_ads_id
          };
          this.httpPost("api/v1/collect_weixin_ads_jumb_ok_cb", info);
        }
        /**
         * 获取随机字符串
        */


        randomStr(strLen) {
          if (strLen === void 0) {
            strLen = 32;
          }

          var len = strLen;
          var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
          /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/

          var maxPos = $chars.length;
          var pwd = '';

          for (var idx = 0; idx < len; idx++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
          }

          return pwd;
        }
        /**
         * 获取时间戳
         * @param isSecond true 单位：秒    默认单位：毫秒
         * @returns 
         */


        getTimeStamp(isSecond) {
          if (isSecond === void 0) {
            isSecond = false;
          }

          var time = Date.now();

          if (isSecond) {
            time = Math.floor(time / 1000);
          }

          return time;
        }
        /**
         * openId初始化
         */


        initOpenId() {
          var openId = sys.localStorage.getItem(this.item_openId);

          if (!openId) {
            openId = this.randOpenId();
            sys.localStorage.setItem(this.item_openId, openId);
            this.log("注册：" + openId);
          }

          this.log("openid=", openId);
          return openId;
        }

        randOpenId() {
          var s = [],
              hexDigits = "0123456789abcdef";

          for (var i = 0; i < 40; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
          }

          s[14] = "4";
          s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1);
          s[8] = s[13] = s[18] = s[23] = s[28] = "-";
          return s.join("");
        }
        /**
         * 埋点事件：某个关卡开始时调用
         * @param level 第几个关卡
         */


        eventLevelStart(level) {
          this._gameLevel = level;
          this.collectLevelInfo(1);
        }
        /**
         * 埋点事件：关卡挑战结束时调用
         * @param level 第几个关卡
         * @param isWin 是否成功
         */


        eventLevelEnd(level, isWin) {
          this._gameLevel = level;
          this.collectLevelInfo(isWin ? 2 : 3);
        }
        /**
         * 自定义埋点事件
         * @param eventType 事件类型 
         * @param eventName 事件名称
         */


        eventSendCustomEvent(eventType, eventName) {
          if (!this.openid) {
            this.error("没有openid");
            return;
          }

          var name = eventName ? eventType + "-" + eventName : eventType;
          this.log("%cevent:" + name, "color:#FF0000");
          var info = {
            event_id: name
          };
          this.httpPost("api/v1/collect_click_event", info);
        }

        adClickUpload(adType, mode, action, pagePath) {
          if (!this.openid) {
            this.error("没有openid");
            return;
          }

          if (pagePath) {
            pagePath = encodeURIComponent(pagePath);
          }

          this.log("广告点击上报：" + adType, mode, action, pagePath);
          var status = 0;

          if (adType == (_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).adShowTypes.rewardedAd) {
            status == 1;
          } else if (adType == (_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).adShowTypes.interstitialAd) {
            status = 2;
          } else if (adType == (_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).adShowTypes.bannerAndCustomAd) {
            status = 3;
          }

          var info = {};
          info.status = status;
          var urlQuery = (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getEnterUrlQuery();

          if (urlQuery && urlQuery.pull_in_ads_id) {
            info.pull_in_ads_id = urlQuery.pull_in_ads_id;
          }

          this.httpPost("api/v1/collect_weixin_ads_mb_act_info", info);
        }
        /**
         * 收集关卡游玩信息
         * @param stata 1：关卡挑战开始  2：胜利  3：失败
         */


        collectLevelInfo(stata) {
          if (!this.openid) {
            this.error("没有openid");
            return;
          }

          var curTime = this.getTimeStamp(false);
          var play_time = 0;

          if (stata == 1) {
            // 关卡开始，记录下开始时间点
            this._playTime = curTime;
          } else {
            // 关卡结束，计算花费时长
            play_time = curTime - this._playTime;
            this._playTime = 0;
          }

          var info = {
            game_level: this._gameLevel,
            status: stata,
            play_time: play_time
          };
          this.httpPost("api/v1/collect_user_play_game_level", info);
        }
        /**
         * 设置SDK输出日志开关，默认是关闭的
         * @param isOpen 
         */


        setLogOpen(isOpen) {
          (_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).isLogOpen = isOpen;
        }

        log(message) {
          if (!(_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).isLogOpen) {
            return;
          }

          for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            optionalParams[_key - 1] = arguments[_key];
          }

          if (typeof message == "string") {
            console.log("[TyqSDK]" + message, ...optionalParams);
          } else {
            console.log("[TyqSDK]", message, ...optionalParams);
          }
        }

        error(message) {
          if (!(_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).isLogOpen) {
            return;
          }

          for (var _len2 = arguments.length, optionalParams = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            optionalParams[_key2 - 1] = arguments[_key2];
          }

          console.error("[TyqSDK]" + message, ...optionalParams);
        } // 广告相关接口===========================================start

        /**
         * 显示底部banner广告，内部有调用计数机制，调用+1，调用hideBannerAd会减1，计数为0才会真正隐藏banner广告
         * @param forceShow true:表示强制显示，不管后台开关配置如何 
         */


        showBannerAd(forceShow) {
          var time = this.getSwitchValue((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).paramsKeys.tyq_banner_turns);

          if (time) {
            (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
              error: Error()
            }), tyqAdManager) : tyqAdManager).showBannerAd(parseInt(time));
            return;
          }

          if (forceShow) {
            (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
              error: Error()
            }), tyqAdManager) : tyqAdManager).showBannerAd();
            return;
          }
        }
        /**
         * 隐藏bannner广告
         * @param isForce 是否强制将计数置为零，并强制隐藏
         */


        hideBannerAd(isForce) {
          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).hideBannerAd(isForce);
        }
        /**
         * banner广告是否正在显示中
         */


        isBannerAdShowing() {
          return (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).isBannerAdShowing();
        }
        /**
         * 显示插屏广告
         */


        showInterstitialAd() {
          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).showInterstitialAd();
        }
        /**
         * 显示原生矩阵广告
         */


        showCustomRectCenterAd(failcb) {
          if (failcb === void 0) {
            failcb = null;
          }

          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).showCustomRectCenterAd(failcb);
        }
        /**
         * 隐藏原生矩阵广告
         */


        hideCustomRectCenterAd() {
          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).hideCustomRectCenterAd();
        }
        /**
         * 显示原生垂直广告，显示在左右两边
         * @param forceShow true:表示强制显示，不管后台开关配置如何 
         */


        showCustomVerticalLeftRightAd(forceShow) {
          if (forceShow || this.getSwitchValue((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).paramsKeys.tyq_custom_v_switch)) {
            (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
              error: Error()
            }), tyqAdManager) : tyqAdManager).showCustomVerticalLeftRightAd();
          }
        }
        /**
         * 隐藏原生垂直广告
         */


        hideCustomVerticalLeftRightAd() {
          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).hideCustomVerticalLeftRightAd();
        }
        /**
         * 显示原生水平广告，显示在顶部
         * @param forceShow true:表示强制显示，不管后台开关配置如何 
         */


        showCustomHorizontalTopAd(forceShow) {
          if (forceShow || this.getSwitchValue((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).paramsKeys.tyq_custom_h_switch)) {
            (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
              error: Error()
            }), tyqAdManager) : tyqAdManager).showCustomHorizontalTopAd();
          }
        }
        /**
         * 隐藏原生水平广告
         */


        hideCustomHorizontalTopAd() {
          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).hideCustomHorizontalTopAd();
        }
        /**
         * 通用显示原生广告接口
         * @param flag 标识 
         * @param type 类型 1矩阵；2横向；3竖向；4单格子
         * @param pos 位置信息
         * @param adSize 尺寸
         * @param adId 广告id
         * @param failcb 失败回调
         */


        showCustomAd(flag, type, pos, adSize, adId, failcb) {
          if (!adSize) {
            switch (type) {
              case (_crd && EType === void 0 ? (_reportPossibleCrUseOfEType({
                error: Error()
              }), EType) : EType).rect:
                adSize = (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
                  error: Error()
                }), tyqAdManager) : tyqAdManager).customAdSizeObj.rect;
                break;

              case (_crd && EType === void 0 ? (_reportPossibleCrUseOfEType({
                error: Error()
              }), EType) : EType).horizontal:
                adSize = (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
                  error: Error()
                }), tyqAdManager) : tyqAdManager).customAdSizeObj.horizontal;
                break;

              case (_crd && EType === void 0 ? (_reportPossibleCrUseOfEType({
                error: Error()
              }), EType) : EType).vertical:
                adSize = (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
                  error: Error()
                }), tyqAdManager) : tyqAdManager).customAdSizeObj.vertical;
                break;

              default:
                adSize = (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
                  error: Error()
                }), tyqAdManager) : tyqAdManager).customAdSizeObj.gird;
                break;
            }
          }

          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).showCustomAd(flag, type, pos, adSize, adId, failcb);
        }
        /**
         * 根据创建标识隐藏原生广告
         * @param flag 
         */


        hideCustomAd(flag) {
          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).hideCustomAd(flag);
        }
        /**
         * 隐藏所有原生广告
         */


        hideCustomAllAd() {
          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).hideCustomAllAd();
        }
        /**
         * 修改通用原生矩阵广告的尺寸
         * 后台默认参数 行数：5
         * @param width 
         * @param height 
         */


        setCustomRectAdSize(width, height) {
          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).customAdSizeObj.rect.width = width;
          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).customAdSizeObj.rect.height = height;
        }
        /**
         * 修改通用原生水平广告的尺寸
         * 后台默认参数 尺寸：80%  默认数：5
         * @param width 
         * @param height 
         */


        setCustomHorizontalAdSize(width, height) {
          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).customAdSizeObj.horizontal.width = width;
          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).customAdSizeObj.horizontal.height = height;
        }
        /**
         * 修改通用原生垂直广告的尺寸
         * 后台默认参数 尺寸：90%  默认数：5
         * @param width 
         * @param height 
         */


        setCustomVerticalAdSize(width, height) {
          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).customAdSizeObj.vertical.width = width;
          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).customAdSizeObj.vertical.height = height;
        }
        /**
         * 修改通用原生单个格子广告的尺寸
         * 后台默认参数 单个格子 尺寸：90%
         * @param width 
         * @param height 
         */


        setCustomGridAdSize(width, height) {
          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).customAdSizeObj.grid.width = width;
          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).customAdSizeObj.grid.height = height;
        }
        /**
         * 显示激励视频广告
         * @param info 观看激励视频位置描述，如果有值，会自动埋点该位置的观看激励视频与观看完激励视频事件
         * @param cb 结果回调，参数st  1成功，发放奖励   其他失败
         */


        showRewardedAd(info, cb) {
          if (info) {
            this.eventSendCustomEvent((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
              error: Error()
            }), tyqSDKConfig) : tyqSDKConfig).eventNames.rewardedAdStart + info);
          }

          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).showRewardedAd(() => {
            if (info) {
              this.eventSendCustomEvent((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
                error: Error()
              }), tyqSDKConfig) : tyqSDKConfig).eventNames.rewardedAdSuccess + info);
            }

            if (cb) {
              cb(1);
            }
          }, state => {
            if (cb) {
              if (state) {
                cb(state);
              } else {
                cb(0);
              }
            }
          });
        } // 广告相关接口===========================================end

        /**
         * 进入加载页，需要调用该接口
         */


        onShowLoadingLayer() {
          this.eventSendCustomEvent((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).eventNames.enterLoadingLayer);
        }
        /**
         * 游戏显示主界面，需要调用该接口
         */


        onShowHomeLayer() {
          this.eventSendCustomEvent((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).eventNames.enterHomeLayer);
          var val = this.getSwitchValue((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).paramsKeys.tyq_show_main_layer);

          if (!val) {
            return;
          }

          val = parseInt(val);

          if (val == 1) {
            // 显示插屏广告
            this.showInterstitialAd();
          } else if (val == 2) {
            // 显示矩阵广告
            this.showCustomRectCenterAd(null);
          }
        }
        /**
         * 完成某局或者某个关卡，需要调用该接口，不管成功或者失败，都要调用
         * @param level 当前进行到的关卡
         */


        addLevelCount(level) {
          var startLevel = this.getSwitchValue((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).paramsKeys.tyq_reward_level);

          if (!startLevel) {
            return;
          }

          startLevel = parseInt(startLevel);

          if (level <= startLevel) {
            return;
          }

          this.levelCount++;
          var val = tyqSDK.getSwitchValue((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).paramsKeys.tyq_level_count);

          if (val) {
            val = parseInt(val);

            if (this.levelCount >= val) {
              this.levelCount = 0;
              this.showRewardedAd();
            }
          }
        }
        /**
         * 游戏显示结算界面，需要调用该接口
         */


        onShowSettlementLayer() {
          this.showInterstitialAd();
        }
        /**
         * 在游戏结算界面展示之前，调用该接口，显示SDK的【更多游戏】界面
         * @param level 当前进行到的关卡
         * @param closeCb 更多游戏界面关闭后的回调，继续执行展示游戏结算界面的逻辑
         */


        showMoreGameLayer(level, closeCb) {
          if ((_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getChannel() != (_crd && Channel === void 0 ? (_reportPossibleCrUseOfChannel({
            error: Error()
          }), Channel) : Channel).WECHAT) {
            return;
          }

          var startLevel = this.getSwitchValue((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).paramsKeys.tyq_more_game_level);

          if (!startLevel) {
            closeCb();
            return;
          }

          startLevel = parseInt(startLevel);

          if (level <= startLevel) {
            closeCb();
            return;
          }

          var obj = {};
          obj.level = level;
          (_crd && tyqLayerManager === void 0 ? (_reportPossibleCrUseOftyqLayerManager({
            error: Error()
          }), tyqLayerManager) : tyqLayerManager).openLayer((_crd && tyqConstants === void 0 ? (_reportPossibleCrUseOftyqConstants({
            error: Error()
          }), tyqConstants) : tyqConstants).layers.TyqMoreGameLayer, obj, () => {
            closeCb();
          });
        }

      };
      TyqSDK.instance = new TyqSDK();

      _export("tyqSDK", tyqSDK = TyqSDK.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b5f1bd8f2afcf85f4602e6c292dc8d57f812d444.js.map