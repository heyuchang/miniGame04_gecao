System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tyqSDK, tyqSDKConfig, TyqBaseLayer, _dec, _class, _crd, ccclass, property, TyqMoreGameLayer;

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../../tyqSDK", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqSDKConfig(extras) {
    _reporterNs.report("tyqSDKConfig", "../../tyqSDKConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTyqBaseLayer(extras) {
    _reporterNs.report("TyqBaseLayer", "./TyqBaseLayer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      tyqSDK = _unresolved_2.tyqSDK;
    }, function (_unresolved_3) {
      tyqSDKConfig = _unresolved_3.tyqSDKConfig;
    }, function (_unresolved_4) {
      TyqBaseLayer = _unresolved_4.TyqBaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "522e5j5xKlP9bCP6zpiZ0RM", "TyqMoreGameLayer", undefined);

      __checkObsolete__(['Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TyqMoreGameLayer", TyqMoreGameLayer = (_dec = ccclass('TyqMoreGameLayer'), _dec(_class = class TyqMoreGameLayer extends (_crd && TyqBaseLayer === void 0 ? (_reportPossibleCrUseOfTyqBaseLayer({
        error: Error()
      }), TyqBaseLayer) : TyqBaseLayer) {
        constructor(...args) {
          super(...args);
          this.level = 0;
          this.isShowBanner = false;
          this.lastBannerShow = false;
        }

        onLoad() {
          super.onLoad();
          this.level = this.obj.level;
          this.lastBannerShow = (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).isBannerAdShowing();
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).hideBannerAd();
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).showCustomHorizontalTopAd(true);
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).showCustomRectCenterAd();
        }

        onButtonClick(node, name) {
          switch (name) {
            case "btnGoOn":
              this.onClickBtnGoOn(node);
              break;

            default:
              break;
          }
        }

        onClickBtnGoOn(node) {
          let val = (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).getSwitchValue((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).paramsKeys.tyq_banner_touch);

          if (val && this.level > parseInt(val)) {
            if (!this.isShowBanner) {
              this.isShowBanner = true;
              (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).showBannerAd();
              this.scheduleOnce(() => {
                (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                  error: Error()
                }), tyqSDK) : tyqSDK).hideBannerAd();
              }, 1.5 + Math.random());
              return;
            }
          }

          this.unscheduleAllCallbacks();
          this.closeLayer();

          if (this.cb) {
            this.cb();
          }

          if (this.lastBannerShow) {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).showBannerAd();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f0cd7ae0fff420ba5a8eb1f07e1b61e9e01fb56d.js.map