System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, tyqSDK, TyqResManager, _crd, tyqResManager;

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../../tyqSDK", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
    }, function (_unresolved_2) {
      tyqSDK = _unresolved_2.tyqSDK;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fa238FBPppPF5f/CBCqj0Uj", "tyqResManager", undefined);

      __checkObsolete__(['assetManager']);

      TyqResManager = class TyqResManager {
        constructor() {}

        static get instance() {
          if (this._instance == null) {
            this._instance = new TyqResManager();
          }

          return this._instance;
        }
        /**
         * 从bundle中加载某个资源，优先使用缓存中的
         * @param bundleName bundle名称
         * @param path 资源路径
         * @param assetType 资源类型
         * @param onProgress 加载进度回调
         * @param onComplete 加载完成回调
         */


        loadAsset(bundleName, path, assetType, onProgress, onComplete) {
          let bundle = assetManager.getBundle(bundleName);

          if (bundle && bundle.get(path, assetType)) {
            if (onComplete) {
              onComplete(null, bundle.get(path, assetType));
            }

            return;
          }

          let loadAssetFunc = () => {
            bundle.load(path, assetType, (finish, total) => {
              if (onProgress) {
                onProgress(finish, total);
              }
            }, (err, asset) => {
              if (err) {
                (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                  error: Error()
                }), tyqSDK) : tyqSDK).log("ResManager.loadAsset error:" + err.message, bundleName, path, err);

                if (onComplete) {
                  onComplete(err);
                }

                return;
              }

              if (onComplete) {
                onComplete(null, asset);
              }
            });
          };

          if (!bundle) {
            assetManager.loadBundle(bundleName, (err, retBundle) => {
              if (err) {
                if (onComplete) {
                  onComplete(err);
                }

                return;
              }

              bundle = retBundle;
              loadAssetFunc();
            });
            return;
          }

          loadAssetFunc();
        }

      };
      TyqResManager._instance = void 0;

      _export("tyqResManager", tyqResManager = TyqResManager.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=49f9b5b0e85303ab6c1b9a22965d1cf7459d0bb5.js.map