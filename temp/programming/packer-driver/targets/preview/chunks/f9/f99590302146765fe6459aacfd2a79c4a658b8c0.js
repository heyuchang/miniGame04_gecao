System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, tween, _decorator, _dec, _class, _crd, ccclass, property, bullet6;

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "./Bullet", _context.meta, extras);
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
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fa5eb6DaCBL0aeL+J9waOT1", "Bullet6", undefined);

      __checkObsolete__(['Component', 'tween', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 电锯人-齿轮

      _export("bullet6", bullet6 = (_dec = ccclass('bullet6'), _dec(_class = class bullet6 extends Component {
        constructor() {
          super(...arguments);
          this.bullet = void 0;
        }

        init(bullet) {
          this.bullet = bullet;
          tween(this.bullet.node).by(0.5, {
            angle: -360
          }).repeatForever().start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f99590302146765fe6459aacfd2a79c4a658b8c0.js.map