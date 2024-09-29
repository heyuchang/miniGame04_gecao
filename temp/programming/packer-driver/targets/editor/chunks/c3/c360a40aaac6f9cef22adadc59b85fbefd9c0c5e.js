System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, tween, _decorator, _dec, _class, _crd, ccclass, property, bullet12;

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

      _cclegacy._RF.push({}, "a2151oUN3xParIX0Hp7FqxX", "Bullet12", undefined);

      __checkObsolete__(['Component', 'Tween', 'tween', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 蝎子-大闪电球分出来的小闪电球

      _export("bullet12", bullet12 = (_dec = ccclass('bullet12'), _dec(_class = class bullet12 extends Component {
        constructor(...args) {
          super(...args);
          this.bullet = void 0;
        }

        init(bullet) {
          this.bullet = bullet;
          tween(this.bullet.node).by(4, {
            angle: -360
          }).repeatForever().start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c360a40aaac6f9cef22adadc59b85fbefd9c0c5e.js.map