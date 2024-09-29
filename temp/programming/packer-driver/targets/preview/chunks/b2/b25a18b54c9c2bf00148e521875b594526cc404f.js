System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, tween, UIOpacity, UITransform, _decorator, _dec, _class, _crd, ccclass, property, feiBiao;

  function _reportPossibleCrUseOfHint(extras) {
    _reporterNs.report("Hint", "./Hint", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "93580dXRklK6LDsaqgFZDJp", "feiBiao", undefined);

      __checkObsolete__(['Component', 'tween', 'UIOpacity', 'UITransform', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("feiBiao", feiBiao = (_dec = ccclass('feiBiao'), _dec(_class = class feiBiao extends Component {
        constructor() {
          super(...arguments);
          this.hint = void 0;
        }

        init(hint) {
          this.hint = hint;
          var tf = this.hint.bodyNode.getComponent(UITransform);
          tf.width = this.hint.extraObj.width;
          tf.height = this.hint.extraObj.height;
          var uiOpacity = this.getComponent(UIOpacity);
          uiOpacity.opacity = 255;
          tween(uiOpacity).to(0.3, {
            opacity: 0
          }).call(() => {
            this.hint.recycleSelf();
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b25a18b54c9c2bf00148e521875b594526cc404f.js.map