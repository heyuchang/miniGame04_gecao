System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, tween, v3, _decorator, BaseLayer, _dec, _class, _crd, ccclass, property, TransLayer;

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
      tween = _cc.tween;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseLayer = _unresolved_2.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1dfd8zP8FFNVqkhq8sr/YEs", "TransLayer", undefined);

      __checkObsolete__(['Node', 'tween', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TransLayer", TransLayer = (_dec = ccclass('TransLayer'), _dec(_class = class TransLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          this.iconNode = void 0;
          this.blackNode = void 0;
        }

        onLoad() {
          super.onLoad();
          this.iconNode = this.getNodeByPath("icon");
          this.blackNode = this.getNodeByPath("black");
        }

        initUI() {
          this.blackNode.active = false;
          this.iconNode.scale = v3(5, 5, 1);
          tween(this.iconNode).to(0.5, {
            scale: v3(0.05, 0.05, 1)
          }, {
            easing: "quadOut"
          }).call(() => {
            this.blackNode.active = true;
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ff9f0af24e83a5b31e91862b3d7e4ff369d235e0.js.map