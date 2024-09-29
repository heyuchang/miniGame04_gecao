System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, tween, v3, _decorator, _dec, _class, _crd, ccclass, property, DialogEffect;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      tween = _cc.tween;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41530QtsZtBv5/oXgY+vRZP", "DialogEffect", undefined);

      __checkObsolete__(['Component', 'tween', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DialogEffect", DialogEffect = (_dec = ccclass('DialogEffect'), _dec(_class = class DialogEffect extends Component {
        onEnable() {
          tween(this.node).set({
            scale: v3(0, 0, 0)
          }).to(0.17, {
            scale: v3(1.1, 1.1, 1.2)
          }).to(0.06, {
            scale: v3(1, 1, 1)
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=02d07e0d929808a50c2a5ed74cc6f8d4e351b9e7.js.map