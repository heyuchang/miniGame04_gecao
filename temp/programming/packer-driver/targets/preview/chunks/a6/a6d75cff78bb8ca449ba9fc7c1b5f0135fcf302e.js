System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, find, Tween, tween, UIOpacity, _decorator, _dec, _class, _crd, ccclass, property, targetPos;

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
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fd808cYOr1C8a0AZJRh6bh6", "TargetPos", undefined);

      __checkObsolete__(['Component', 'find', 'Tween', 'tween', 'UIOpacity', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("targetPos", targetPos = (_dec = ccclass('targetPos'), _dec(_class = class targetPos extends Component {
        constructor() {
          super(...arguments);
          this.hint = void 0;
          this.body2Opacity = void 0;
        }

        init(hint) {
          this.hint = hint;

          if (!this.body2Opacity) {
            this.body2Opacity = find("body2", this.node).getComponent(UIOpacity);
          }

          Tween.stopAllByTarget(this.body2Opacity);
          this.body2Opacity.opacity = 80;
          tween(this.body2Opacity).to(0.2, {
            opacity: 255
          }).to(0.2, {
            opacity: 80
          }).union().repeatForever().start();
          var time = this.hint.extraObj;
          this.scheduleOnce(() => {
            this.hint.recycleSelf();
          }, time);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a6d75cff78bb8ca449ba9fc7c1b5f0135fcf302e.js.map