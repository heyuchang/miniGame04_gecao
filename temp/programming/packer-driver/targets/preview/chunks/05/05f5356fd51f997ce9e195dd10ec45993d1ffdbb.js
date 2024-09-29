System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, instantiate, Prefab, UITransform, tyqSDK, tyqConstants, tyqResManager, TyqLayerManager, _crd, tyqLayerManager;

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../../tyqSDK", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqConstants(extras) {
    _reporterNs.report("tyqConstants", "../tyqConstants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTyqBaseLayer(extras) {
    _reporterNs.report("TyqBaseLayer", "./../layer/TyqBaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqResManager(extras) {
    _reporterNs.report("tyqResManager", "./tyqResManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      tyqSDK = _unresolved_2.tyqSDK;
    }, function (_unresolved_3) {
      tyqConstants = _unresolved_3.tyqConstants;
    }, function (_unresolved_4) {
      tyqResManager = _unresolved_4.tyqResManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f9b90DrhuNGUIR8MI8kci08", "tyqLayerManager", undefined);

      __checkObsolete__(['find', 'instantiate', 'Prefab', 'UITransform']);

      TyqLayerManager = class TyqLayerManager {
        constructor() {}

        static get instance() {
          if (this._instance == null) {
            this._instance = new TyqLayerManager();
          }

          return this._instance;
        }

        openLayer(layerName, obj, cb) {
          var path = (_crd && tyqConstants === void 0 ? (_reportPossibleCrUseOftyqConstants({
            error: Error()
          }), tyqConstants) : tyqConstants).paths.layer + layerName;
          (_crd && tyqResManager === void 0 ? (_reportPossibleCrUseOftyqResManager({
            error: Error()
          }), tyqResManager) : tyqResManager).loadAsset((_crd && tyqConstants === void 0 ? (_reportPossibleCrUseOftyqConstants({
            error: Error()
          }), tyqConstants) : tyqConstants).bundles.tyqSDKBundle, path, Prefab, null, (err, prefab) => {
            if (err) {
              (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).log("LayerManager.openLayer error:" + err.message, layerName, err);
              return;
            }

            var node = instantiate(prefab);
            var com = node.addComponent(layerName);
            com.obj = obj;
            com.cb = cb;
            com.layerName = layerName; // 设置显示层级，保证在最上面

            node.getComponent(UITransform).priority = 999;
            node.parent = find("Canvas");
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log("openLayer " + layerName, obj);
          });
        }

        closeLayer(layer) {
          var layerName = layer.layerName;
          layer.node.destroy();
        }

      };
      TyqLayerManager._instance = void 0;

      _export("tyqLayerManager", tyqLayerManager = TyqLayerManager.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=05f5356fd51f997ce9e195dd10ec45993d1ffdbb.js.map