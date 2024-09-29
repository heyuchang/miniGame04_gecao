System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, sys, view, NATIVE, VIVO, msgac, eventManager, VivoManager, Wechat, EType, WXCustomAd, tyqSDK, tyqSDKConfig, TyqAdManager, _crd, Channel, tyqAdManager;

  function _reportPossibleCrUseOfmsgac(extras) {
    _reporterNs.report("msgac", "../game/data/msgac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventManager(extras) {
    _reporterNs.report("eventManager", "../game/manager/eventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVivoManager(extras) {
    _reporterNs.report("VivoManager", "./platform/Vivo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWechat(extras) {
    _reporterNs.report("Wechat", "./platform/wechat/wechat", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEType(extras) {
    _reporterNs.report("EType", "./platform/wechat/WXCustomAd", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPos(extras) {
    _reporterNs.report("IPos", "./platform/wechat/WXCustomAd", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWXCustomAd(extras) {
    _reporterNs.report("WXCustomAd", "./platform/wechat/WXCustomAd", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "./tyqSDK", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqSDKConfig(extras) {
    _reporterNs.report("tyqSDKConfig", "./tyqSDKConfig", _context.meta, extras);
  }

  _export("Channel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      native = _cc.native;
      sys = _cc.sys;
      view = _cc.view;
    }, function (_ccEnv) {
      NATIVE = _ccEnv.NATIVE;
      VIVO = _ccEnv.VIVO;
    }, function (_unresolved_2) {
      msgac = _unresolved_2.msgac;
    }, function (_unresolved_3) {
      eventManager = _unresolved_3.eventManager;
    }, function (_unresolved_4) {
      VivoManager = _unresolved_4.VivoManager;
    }, function (_unresolved_5) {
      Wechat = _unresolved_5.Wechat;
    }, function (_unresolved_6) {
      EType = _unresolved_6.EType;
      WXCustomAd = _unresolved_6.WXCustomAd;
    }, function (_unresolved_7) {
      tyqSDK = _unresolved_7.tyqSDK;
    }, function (_unresolved_8) {
      tyqSDKConfig = _unresolved_8.tyqSDKConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5016fHIeplPW6XZXXcWsDos", "tyqAdManager", undefined);

      __checkObsolete__(['native', 'sys', 'view']);

      (function (Channel) {
        Channel[Channel["DEFAULT"] = 0] = "DEFAULT";
        Channel[Channel["WECHAT"] = 1] = "WECHAT";
        Channel[Channel["ANDROID"] = 2] = "ANDROID";
        Channel[Channel["IOS"] = 3] = "IOS";
        Channel[Channel["ANDROID_233"] = 4] = "ANDROID_233";
        Channel[Channel["ANDROID_4399"] = 5] = "ANDROID_4399";
        Channel[Channel["H5_4399"] = 6] = "H5_4399";
        Channel[Channel["VIVO_MINI_GAME"] = 7] = "VIVO_MINI_GAME";
        Channel[Channel["OPPO_MINI_GAME"] = 8] = "OPPO_MINI_GAME";
      })(Channel || _export("Channel", Channel = {}));

      TyqAdManager = class TyqAdManager {
        static get instance() {
          if (!this._instance) {
            this._instance = new TyqAdManager();
          }

          return this._instance;
        }

        constructor() {
          this.channel = Channel.DEFAULT;
          this.customAdSizeObj = {
            // 矩阵 行数：5
            rect: {
              width: 360,
              height: 506
            },
            // 横向 尺寸：80%  默认数：5
            horizontal: {
              width: 288,
              height: 90
            },
            // 竖向 尺寸：90%  默认数：5
            vertical: {
              width: 62,
              height: 388
            },
            // 单个格子 尺寸：90%
            grid: {
              width: 68,
              height: 102
            }
          };
          this.adShowType = void 0;
          this.bannerAdShowing = false;
          this.showBannerCount = 0;
          this.shareTime = 0;
          this.shareListenerSuccess = null;
          this.shareListenerFail = null;
          this.openID = "";
          this.strategy = 1;

          this.videoCallBack = () => {};

          this.videoCallBackFail = () => {};

          this.shareopenID = "";
          this._delayTime = 0;

          if (sys.platform == sys.Platform.WECHAT_GAME) {
            this.channel = Channel.WECHAT;
            var windowSize = view.getVisibleSize();

            if (windowSize.width / windowSize.height > 720 / 1440) {
              (_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
                error: Error()
              }), Wechat) : Wechat).bannerSize = {
                width: 300,
                height: 120
              };
            }
          } else {
            this.channel = Channel.DEFAULT;
          }

          if (NATIVE) {
            this.channel = Channel.ANDROID_233;
          }

          this.channel = Channel.OPPO_MINI_GAME;
        }

        getEnterUrlQuery() {
          if (this.channel == Channel.WECHAT) {
            // 冷启动 wx.getLaunchOptionsSync()
            // 冷启动和热启动 wx.getEnterOptionsSync()
            if (wx.getEnterOptionsSync) {
              var options = wx.getEnterOptionsSync(); //    console.log("options", options)

              if (options && options.query) {
                //  console.log("options.query", options.query.toString())
                var openID = options.query.shareGameSync; //    console.log("login openID = ", openID)

                if (openID) {
                  // this.reportShareBehavior(6, 1, openID)
                  this.shareopenID = openID;
                  (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                    error: Error()
                  }), tyqSDK) : tyqSDK).eventSendCustomEvent("参与激励托管分享成功进来的玩家");
                }

                return options.query;
              }
            }
          }

          return null;
        }

        showAppMessage() {
          this.shareTime = new Date().getTime();
          console.log("this.openID = ", this.openID);
          (_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
            error: Error()
          }), Wechat) : Wechat).shareAppMessage("挑战未知敌人，化身特工", "", "shareGameSync=" + this.openID);
        }

        getOpenID() {
          //只能在服务端请求
          wx.login({
            success: res => {
              if (res.code) {
                var URL = 'https://api.weixin.qq.com/sns/jscode2session?appid=###&secret=********&js_code=' + res.code + '&grant_type=authorization_code';
                wx.request({
                  url: URL,
                  success: function success(res) {
                    console.log(res.data); //res.data中有openid
                  }
                });
              }
            }
          });
        }

        getChannel() {
          return this.channel;
        }

        initAdIds() {
          if (this.channel == Channel.WECHAT) {
            // 显示当前页面的转发按钮
            // "shareAppMessage"表示“发送给朋友”按钮，"shareTimeline"表示“分享到朋友圈”按钮
            wx.showShareMenu({
              withShareTicket: true,
              menus: ['shareAppMessage', 'shareTimeline']
            });
            wx.onHide(this.wxOnHide.bind(this));
            wx.onShow(this.wxOnShow.bind(this)); // banner广告参数

            var bannerIds = (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).getSwitchValue((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
              error: Error()
            }), tyqSDKConfig) : tyqSDKConfig).paramsKeys.tyq_ad_banners);

            if (bannerIds) {
              (_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
                error: Error()
              }), Wechat) : Wechat)._bannerAdUnitId = bannerIds.split(";");
            } else {
              (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).log("未配置banner广告参数");
            } // 插屏广告参数


            var interstitialIds = (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).getSwitchValue((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
              error: Error()
            }), tyqSDKConfig) : tyqSDKConfig).paramsKeys.tyq_ad_interstitial);

            if (interstitialIds) {
              (_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
                error: Error()
              }), Wechat) : Wechat)._interstitialAdUnitId = interstitialIds.split(";");
            } else {
              (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).log("未配置banner广告参数");
            } // 原生广告参数


            var customRectIds = (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).getSwitchValue((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
              error: Error()
            }), tyqSDKConfig) : tyqSDKConfig).paramsKeys.tyq_ad_custom_rect);

            if (customRectIds) {
              (_crd && WXCustomAd === void 0 ? (_reportPossibleCrUseOfWXCustomAd({
                error: Error()
              }), WXCustomAd) : WXCustomAd)._customc_rect_adunit = customRectIds.split(";"); //  console.log(" WXCustomAd._customc_rect_adunit = ",WXCustomAd._customc_rect_adunit)
            } else {
              (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).log("未配置原生矩阵广告参数");
            }

            var customVIds = (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).getSwitchValue((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
              error: Error()
            }), tyqSDKConfig) : tyqSDKConfig).paramsKeys.tyq_ad_custom_v);

            if (customVIds) {
              (_crd && WXCustomAd === void 0 ? (_reportPossibleCrUseOfWXCustomAd({
                error: Error()
              }), WXCustomAd) : WXCustomAd)._customc_v_adunit = customVIds.split(";");
            } else {
              (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).log("未配置原生垂直广告参数");
            }

            var customHIds = (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).getSwitchValue((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
              error: Error()
            }), tyqSDKConfig) : tyqSDKConfig).paramsKeys.tyq_ad_custom_h);

            if (customHIds) {
              (_crd && WXCustomAd === void 0 ? (_reportPossibleCrUseOfWXCustomAd({
                error: Error()
              }), WXCustomAd) : WXCustomAd)._customc_h_adunit = customHIds.split(";");
            } else {
              (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).log("未配置原生水平广告参数");
            } // 激励视频广告参数


            var rewardedIds = (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).getSwitchValue((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
              error: Error()
            }), tyqSDKConfig) : tyqSDKConfig).paramsKeys.tyq_ad_rewarded);

            if (rewardedIds) {
              (_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
                error: Error()
              }), Wechat) : Wechat)._rewardedVideoAdUnitId = rewardedIds.split(";");
            } else {
              (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).log("未配置激励视频广告参数");
            } // 预加载广告
            // banner广告必须要预加载后才能使用


            (_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
              error: Error()
            }), Wechat) : Wechat).preLoadBanner(); // 为了减少初始化卡顿时间，激励视频广告可以不预加载

            (_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
              error: Error()
            }), Wechat) : Wechat).createRewardedVideoAd(); // 为了减少初始化卡顿时间，插屏广告可以不预加载
            // Wechat.createInterstitialAd();
          } else if (this.channel == Channel.ANDROID_233 || this.channel == Channel.ANDROID_4399) {
            //  if (NATIVE) {
            console.log(" NATIVE android 平台 initAdIds ");

            window.rewardedVideoAdCallBack = res => {
              //EventHelper.DispatchEvent("showTips", "获得奖励");
              console.log("AD_DEMO rewardedVideoAdCallBack ", res);
              (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
                error: Error()
              }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
                error: Error()
              }), msgac) : msgac).showNotice, " 发放视频奖励 ");

              if (this.videoCallBack) {
                this.videoCallBack();
              }
            };

            window.rewardedVideoAdFailCallBack = res => {
              //EventHelper.DispatchEvent("showTips", "获得奖励");
              console.log("AD_DEMO rewardedVideoAdCallBack ", res); //    eventManager.send(msgac.showNotice, " 视频奖励 失败");

              if (this.videoCallBackFail) {
                this.videoCallBackFail();
              }
            }; //  jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "RewardVideoShow", "(Ljava/lang/String;)V", "展示广告");


            return; // }
          }
        }

        wxOnHide(res) {
          // tyqSDK.log("wx onHide:", res, this.adShowType);
          if (!res) {
            return;
          }

          var mode = res.mode;
          var action = res.targetAction;
          var pagePath = res.targetPagePath; // 8：跳转到小游戏内部页面WCCanvasPageViewController
          // 9：跳转到其他微信小游戏
          // 10：跳转到一个链接

          var actions = [8, 9, 10];

          if (actions.indexOf(action) == -1) {
            // 不感兴趣的跳转，直接返回，比如：右上角的圆点或者home键最小化
            return;
          }

          if (this.adShowType) {
            // 已判断到的广告类型，直接使用
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).adClickUpload(this.adShowType, mode, action, pagePath);
            return;
          } // 要判断出是banner或者原生广告点击


          if (action == 9) {
            // 跳转其他微信小游戏
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).adClickUpload((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
              error: Error()
            }), tyqSDKConfig) : tyqSDKConfig).adShowTypes.bannerAndCustomAd, mode, action, pagePath);
            return;
          }

          if (pagePath) {
            // 跳转内部页或者广告链接
            if (pagePath == "WCCanvasPageViewController" || pagePath.indexOf("ad.weixin.qq.com") != -1 || pagePath.indexOf("ad_biz_info") != -1 || pagePath.indexOf("weixinadkey") != -1) {
              (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).adClickUpload((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
                error: Error()
              }), tyqSDKConfig) : tyqSDKConfig).adShowTypes.bannerAndCustomAd, mode, action, pagePath);
            }

            return;
          }
        }

        wxOnShow(res) {
          console.log("wx onShow:", res);

          if (this.shareTime > 0 && new Date().getTime() - this.shareTime >= 2000) {
            this.shareListenerSuccess && this.shareListenerSuccess();
          } else {
            this.reportShareBehavior(5, this.strategy, 1);
            this.shareListenerFail && this.shareListenerFail();
          }

          this.shareListenerFail = null;
          this.shareListenerSuccess = null;
          this.shareTime = 0;
        }
        /**
         * 显示底部banner轮播广告
         * @param time 轮播间隔时间，单位：毫秒，默认5秒 
         */


        showBannerAd(time) {
          this.showBannerCount++;

          if (this.channel == Channel.WECHAT) {
            if (this.bannerAdShowing) {
              return true;
            }

            if (!time) {
              time = 5000;
            }

            (_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
              error: Error()
            }), Wechat) : Wechat).showBannerTurns(time);
            this.bannerAdShowing = true;
          } else if (this.channel == Channel.ANDROID_4399) {
            native.reflection.callStaticMethod("com/cocos/game/SdkUtil4399", "showBanner", "(Ljava/lang/String;)Z", "展示banner广告");
          } else if (this.channel == Channel.VIVO_MINI_GAME) {
            if (VIVO) {
              (_crd && VivoManager === void 0 ? (_reportPossibleCrUseOfVivoManager({
                error: Error()
              }), VivoManager) : VivoManager).showBannerAd();
              return;
            }
          }
        }
        /**
         * 隐藏banner广告
         */


        hideBannerAd(isForce) {
          this.showBannerCount--;

          if (isForce) {
            this.showBannerCount = 0;
          }

          if (this.showBannerCount > 0) {
            return;
          }

          if (this.channel == Channel.WECHAT) {
            (_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
              error: Error()
            }), Wechat) : Wechat).hideBannerAd();
            this.bannerAdShowing = false;
          } else if (this.channel == Channel.ANDROID_4399) {
            native.reflection.callStaticMethod("com/cocos/game/SdkUtil4399", "hideBanner", "(Ljava/lang/String;)Z", "隐藏banner广告");
          } else if (this.channel == Channel.VIVO_MINI_GAME) {
            if (VIVO) {
              (_crd && VivoManager === void 0 ? (_reportPossibleCrUseOfVivoManager({
                error: Error()
              }), VivoManager) : VivoManager).hideBannerAd();
              return;
            }
          }
        }
        /**
         * banner广告是否正在显示中
         */


        isBannerAdShowing() {
          return this.bannerAdShowing;
        }
        /**
         * 显示插屏广告
         */


        showInterstitialAd() {
          if (this.channel == Channel.WECHAT) {
            (_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
              error: Error()
            }), Wechat) : Wechat).showInterstitialAd(() => {
              // 关闭或者发生错误
              this.adShowType = "";
            }, () => {
              // 成功展示
              this.adShowType = (_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
                error: Error()
              }), tyqSDKConfig) : tyqSDKConfig).adShowTypes.interstitialAd;
            });
          } else if (this.channel == Channel.ANDROID_233) {
            this.showFullRewarded(); // native.reflection.callStaticMethod("com/cocos/game/MetaAdApiUtil", "showInterstitialAd", "(Ljava/lang/String;)Z", "展示插屏广告")
          } else if (this.channel == Channel.ANDROID_4399) {
            native.reflection.callStaticMethod("com/cocos/game/SdkUtil4399", "InterstitialShow", "(Ljava/lang/String;)Z", "展示插屏广告");
          }
        }

        showDelayFullVideo() {
          if (this.channel == Channel.ANDROID_233) {
            var time = new Date().getTime(); // console.log("time - this._delayTime = ",time - this._delayTime)

            if (time - this._delayTime >= 120000) {
              this.showFullRewarded();
              this._delayTime = time;
            }
          }
        }

        showDelayInterstitialAd() {
          if (this.channel == Channel.ANDROID_4399) {
            if (this._delayTime <= 0) {
              this._delayTime = new Date().getTime();
              return;
            }

            var time = new Date().getTime();

            if (time - this._delayTime >= 200000) {
              this.showInterstitialAd();
              this._delayTime = time;
            }
          }
        }
        /**
         * 显示原生矩阵广告
         */


        showCustomRectCenterAd(failcb) {
          if (failcb === void 0) {
            failcb = null;
          }

          if (this.channel == Channel.WECHAT) {
            //  console.log("showCustomRectCenterAd")
            (_crd && WXCustomAd === void 0 ? (_reportPossibleCrUseOfWXCustomAd({
              error: Error()
            }), WXCustomAd) : WXCustomAd).createCustomAd("default_custom_ad_rect", (_crd && EType === void 0 ? (_reportPossibleCrUseOfEType({
              error: Error()
            }), EType) : EType).rect, {
              centerX: 0,
              centerY: 0
            }, this.customAdSizeObj.rect, null, failcb);
          }
        }
        /**
         * 隐藏原生矩阵广告
         */


        hideCustomRectCenterAd() {
          if (this.channel == Channel.WECHAT) {
            (_crd && WXCustomAd === void 0 ? (_reportPossibleCrUseOfWXCustomAd({
              error: Error()
            }), WXCustomAd) : WXCustomAd).hideCustomAd("default_custom_ad_rect");
          }
        }
        /**
         * 显示原生垂直广告，显示在左右两边
         */


        showCustomVerticalLeftRightAd() {
          if (this.channel == Channel.WECHAT) {
            (_crd && WXCustomAd === void 0 ? (_reportPossibleCrUseOfWXCustomAd({
              error: Error()
            }), WXCustomAd) : WXCustomAd).createCustomAd("default_custom_ad_v_left", (_crd && EType === void 0 ? (_reportPossibleCrUseOfEType({
              error: Error()
            }), EType) : EType).vertical, {
              left: 0
            }, this.customAdSizeObj.vertical);
            (_crd && WXCustomAd === void 0 ? (_reportPossibleCrUseOfWXCustomAd({
              error: Error()
            }), WXCustomAd) : WXCustomAd).createCustomAd("default_custom_ad_v_right", (_crd && EType === void 0 ? (_reportPossibleCrUseOfEType({
              error: Error()
            }), EType) : EType).vertical, {
              right: 0
            }, this.customAdSizeObj.vertical);
          }
        }
        /**
         * 隐藏原生垂直广告
         */


        hideCustomVerticalLeftRightAd() {
          if (this.channel == Channel.WECHAT) {
            (_crd && WXCustomAd === void 0 ? (_reportPossibleCrUseOfWXCustomAd({
              error: Error()
            }), WXCustomAd) : WXCustomAd).hideCustomAd("default_custom_ad_v_left");
            (_crd && WXCustomAd === void 0 ? (_reportPossibleCrUseOfWXCustomAd({
              error: Error()
            }), WXCustomAd) : WXCustomAd).hideCustomAd("default_custom_ad_v_right");
          }
        }
        /**
         * 显示原生水平广告，显示在顶部
         */


        showCustomHorizontalTopAd() {
          if (this.channel == Channel.WECHAT) {
            (_crd && WXCustomAd === void 0 ? (_reportPossibleCrUseOfWXCustomAd({
              error: Error()
            }), WXCustomAd) : WXCustomAd).createCustomAd("default_custom_ad_h", (_crd && EType === void 0 ? (_reportPossibleCrUseOfEType({
              error: Error()
            }), EType) : EType).horizontal, {
              top: 0
            }, this.customAdSizeObj.horizontal);
          }
        }
        /**
        * 隐藏原生水平广告
        */


        hideCustomHorizontalTopAd() {
          if (this.channel == Channel.WECHAT) {
            (_crd && WXCustomAd === void 0 ? (_reportPossibleCrUseOfWXCustomAd({
              error: Error()
            }), WXCustomAd) : WXCustomAd).hideCustomAd("default_custom_ad_h");
          }
        }
        /**
         * 通用显示原生广告接口
         * @param flag 标识 
         * @param type 类型
         * @param pos 位置信息
         * @param adSize 尺寸
         * @param adId 广告id
         * @param failcb 失败回调
         */


        showCustomAd(flag, type, pos, adSize, adId, failcb) {
          if (this.channel == Channel.WECHAT) {
            (_crd && WXCustomAd === void 0 ? (_reportPossibleCrUseOfWXCustomAd({
              error: Error()
            }), WXCustomAd) : WXCustomAd).createCustomAd(flag, type, pos, adSize, adId, failcb);
          }
        }
        /**
         * 根据创建标识隐藏原生广告
         * @param flag
         */


        hideCustomAd(flag) {
          if (this.channel == Channel.WECHAT) {
            (_crd && WXCustomAd === void 0 ? (_reportPossibleCrUseOfWXCustomAd({
              error: Error()
            }), WXCustomAd) : WXCustomAd).hideCustomAd(flag);
          }
        }
        /**
         * 隐藏所有原生广告
         */


        hideCustomAllAd() {
          if (this.channel == Channel.WECHAT) {
            (_crd && WXCustomAd === void 0 ? (_reportPossibleCrUseOfWXCustomAd({
              error: Error()
            }), WXCustomAd) : WXCustomAd).hideAllAd();
          }
        }

        showFullRewarded() {
          if (this.channel == Channel.ANDROID_233) {
            // successCb && successCb()
            console.log("showFullRewarded");
            native.reflection.callStaticMethod("com/cocos/game/MetaAdApiUtil", "ShowFullRewardVideoShow", "(Ljava/lang/String;)Z", "展示全屏视频广告");
            return;
          }
        }

        reportShareBehavior(operation, strategy, currentShow) {
          if (strategy === void 0) {
            strategy = 1;
          }

          if (currentShow === void 0) {
            currentShow = null;
          }

          if ((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).isOpenBeHavior) {
            if (this.shareopenID != "") {
              (_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
                error: Error()
              }), Wechat) : Wechat).reportShareBehavior({
                operation: 6,
                strategy: 1,
                inviteUser: this.shareopenID
              });
              this.shareopenID = "";
            }

            (_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
              error: Error()
            }), Wechat) : Wechat).reportShareBehavior({
              operation: operation,
              strategy: strategy,
              currentShow: currentShow
            });
          }
        }
        /**
         * 显示激励视频广告
         */


        showRewardedAd(successCb, failCb, forceVideo) {
          if (forceVideo === void 0) {
            forceVideo = false;
          }

          this.strategy = 1;

          if ((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).isOpenBeHavior && this.channel == Channel.WECHAT) {
            if ((_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
              error: Error()
            }), Wechat) : Wechat).isShareBehavior()) {
              if (!forceVideo) {
                tyqAdManager.showAppMessage();
                this.shareListenerSuccess = successCb;
                this.shareListenerFail = failCb;
                (_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
                  error: Error()
                }), Wechat) : Wechat).reportShareBehavior({
                  operation: 2,
                  strategy: 1,
                  currentShow: 1
                });
                return;
              } else {
                this.strategy = 0;
                (_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
                  error: Error()
                }), Wechat) : Wechat).reportShareBehavior({
                  operation: 2,
                  strategy: 0,
                  currentShow: 0
                });
              }
            } else {
              (_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
                error: Error()
              }), Wechat) : Wechat).reportShareBehavior({
                operation: 2,
                strategy: 1,
                currentShow: 0
              });
            }
          }

          if ((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).isCloseAd) {
            successCb && successCb();
            return;
          }

          if (this.channel == Channel.ANDROID_233) {
            this.videoCallBack = successCb;
            this.videoCallBackFail = failCb; // console.log(" NATIVE android 平台 ")

            if (!native.reflection.callStaticMethod("com/cocos/game/MetaAdApiUtil", "RewardVideoShow", "(Ljava/lang/String;)Z", "展示广告")) {
              failCb && failCb();
            }

            return;
          }

          if (this.channel == Channel.ANDROID_4399) {
            this.videoCallBack = successCb;
            this.videoCallBackFail = failCb;
            console.log(" NATIVE android 平台 com/cocos/game/SdkUtil4399");

            if (!native.reflection.callStaticMethod("com/cocos/game/SdkUtil4399", "RewardVideoShow", "(Ljava/lang/String;)Z", "展示广告")) {
              failCb && failCb();
            }

            return;
          }

          if (this.channel == Channel.WECHAT) {
            (_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
              error: Error()
            }), Wechat) : Wechat).showRewardVideoAd(() => {
              this.adShowType = (_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
                error: Error()
              }), tyqSDKConfig) : tyqSDKConfig).adShowTypes.rewardedAd;
            }).then(isSuccess => {
              this.adShowType = "";

              if (isSuccess) {
                if (successCb) {
                  successCb();
                }
              } else {
                this.reportShareBehavior(5, this.strategy, 0);

                if (failCb) {
                  failCb();
                }
              }
            }, () => {
              this.adShowType = "";
              this.reportShareBehavior(5, this.strategy, 0);

              if (failCb) {
                failCb();
              }
            });
          }

          if (this.channel == Channel.VIVO_MINI_GAME) {
            (_crd && VivoManager === void 0 ? (_reportPossibleCrUseOfVivoManager({
              error: Error()
            }), VivoManager) : VivoManager).showRewardVideoAd(state => {
              if (state == 1) {
                successCb && successCb();
              } else {
                failCb && failCb(state);
              }
            });
            return;
          }
        }

      };
      TyqAdManager._instance = void 0;

      _export("tyqAdManager", tyqAdManager = TyqAdManager.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=52c18f8fcd8aace89bf0ac38c4bd6484486106ea.js.map