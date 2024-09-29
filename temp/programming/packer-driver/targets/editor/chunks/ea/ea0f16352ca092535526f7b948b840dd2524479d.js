System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, find, Tween, tween, UIOpacity, v3, _decorator, _dec, _class, _crd, ccclass, property, targetPos2;

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
      find = _cc.find;
      Tween = _cc.Tween;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9866dcdqCVBH7LK3VKub6sv", "targetPos2", undefined);

      __checkObsolete__(['Component', 'find', 'Tween', 'tween', 'UIOpacity', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("targetPos2", targetPos2 = (_dec = ccclass('targetPos2'), _dec(_class = class targetPos2 extends Component {
        constructor(...args) {
          super(...args);
          this.hint = void 0;
          this.body2Opacity = void 0;
        }

        init(hint) {
          this.hint = hint;

          if (!this.body2Opacity) {
            this.body2Opacity = find("body2", this.node).getComponent(UIOpacity);
          }

          Tween.stopAllByTarget(this.body2Opacity);
          this.body2Opacity.opacity = 0;
          tween(this.body2Opacity).to(0.5, {
            opacity: 255
          }).start();
          this.node.scale = v3(1, 1, 1);
          tween(this.node).to(0.6, {
            scale: v3(0.2, 0.2, 1)
          }).start();
          this.hint.extraObj(this);
          this.scheduleOnce(() => {
            this.hint.recycleSelf();
          }, 1);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ea0f16352ca092535526f7b948b840dd2524479d.js.map