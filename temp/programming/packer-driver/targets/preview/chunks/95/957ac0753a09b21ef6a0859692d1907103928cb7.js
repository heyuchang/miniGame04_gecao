System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, msgac, BaseLayer, _dec, _class, _crd, ccclass, property, HandLayer;

  function _reportPossibleCrUseOfmsgac(extras) {
    _reporterNs.report("msgac", "../../data/msgac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../base/BaseLayer", _context.meta, extras);
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
      msgac = _unresolved_2.msgac;
    }, function (_unresolved_3) {
      BaseLayer = _unresolved_3.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a4c8xwp8pKy4PtBA/7pPD5", "HandLayer", undefined);

      __checkObsolete__(['Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HandLayer", HandLayer = (_dec = ccclass('HandLayer'), _dec(_class = class HandLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        onLoad() {
          super.onLoad();
        }

        onEnable() {
          super.onEnable();
          this.addEventArr([(_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).globalTouchStart]);
        }

        onDisable() {
          super.onDisable();
        }

        onDestroy() {
          super.onDestroy();
        }

        initUI() {}

        globalTouchStartRet(data) {
          this.closeLayer();

          if (this.layerCb) {
            this.layerCb();
          }
        }

        processEvent(ac, data) {
          switch (ac) {
            default:
              break;
          }
        }

        onButtonClick(node, name) {
          switch (name) {
            default:
              break;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=957ac0753a09b21ef6a0859692d1907103928cb7.js.map