System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, tyqSDKConfig;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a09daxOR+NG0KJMyaVfvvK+", "tyqSDKConfig", undefined);

      _export("tyqSDKConfig", tyqSDKConfig = {
        /**游戏名称 */
        gameName: '末日特工队',

        /**游戏版本号 */
        gameVersion: '1.0.0',

        /**用于区分审核版和正式版，每次上传都需要改这个值 1和2*/
        appVersion: 1,
        //后台appid
        appId: '',
        //后台分配的key 
        apiKey: '',
        //后台app秘钥
        AppSecret: "1",
        // SDK服务端域名
        server: 'https://api.game.xmtyq.com/china_app_game_sdk/',
        // SDK日志输出开关
        isLogOpen: false,
        //是否关闭视频广告
        isCloseAd: true,

        /**
         * 是否开启激励托管
         */
        isOpenBeHavior: false,
        // 后台参数key值
        paramsKeys: {
          // 各种类型的广告id
          tyq_ad_banners: "tyq_ad_banners",
          tyq_ad_interstitial: "tyq_ad_interstitial",
          tyq_ad_custom_rect: "tyq_ad_custom_rect",
          tyq_ad_custom_v: "tyq_ad_custom_v",
          tyq_ad_custom_h: "tyq_ad_custom_h",
          tyq_ad_rewarded: "tyq_ad_rewarded",
          // banner轮流展示间隔时间（单位：毫秒，0表示关闭）
          tyq_banner_turns: "tyq_banner_turns",
          // 界面顶部水平格子广告（0：关闭 1：开启）
          tyq_custom_h_switch: "tyq_custom_h_switch",
          // 界面左右两侧垂直格子广告（0：关闭 1：开启）
          tyq_custom_v_switch: "tyq_custom_v_switch",
          // 进入主界面强弹插屏或者矩阵(0：关闭，1：插屏，2：矩阵格子）
          tyq_show_main_layer: "tyq_show_main_layer",
          // 完成（包括失败）任意局数强弹激励视频，与tyq_reward_level配合使用（0：关闭，>=1：局数）
          tyq_level_count: "tyq_level_count",
          // 强弹激励视频在指定关卡后才展示，不包括本身（0：关闭，>=1：关卡数）
          tyq_reward_level: "tyq_reward_level",
          // 底部bannner广告误触开关，与参数tyq_more_game_level配合使用(0：关闭，>=1：第x关之后开启，不包括x）
          tyq_banner_touch: "tyq_banner_touch",
          // 控制更多游戏页面在指定关卡后(0：关闭，>=1：第x关之后开启，不包括x）
          tyq_more_game_level: "tyq_more_game_level",
          tyq_ad_custom_rect_switch: "tyq_ad_custom_rect_switch"
        },
        // 广告点击类型
        adShowTypes: {
          rewardedAd: "激励视频广告点击",
          interstitialAd: "插屏广告点击",
          bannerAndCustomAd: "banner与原生广告点击"
        },
        eventNames: {
          enterLoadingLayer: "进入加载页",
          enterHomeLayer: "进入主界面",
          rewardedAdStart: "观看激励视频-",
          rewardedAdSuccess: "观看完激励视频-"
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c32aa032ef4efbb813ed9a8e23076b3ce5aff7f.js.map