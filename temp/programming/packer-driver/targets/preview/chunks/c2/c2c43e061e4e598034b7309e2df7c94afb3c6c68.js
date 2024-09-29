System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, Component, find, _decorator, _dec, _class, _crd, ccclass, property, bullet22;

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
      Animation = _cc.Animation;
      Component = _cc.Component;
      find = _cc.find;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2dfabYDvF5NxLn0MN4pRg1w", "Bullet22", undefined);

      __checkObsolete__(['Animation', 'Component', 'find', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 武器-魔法弩

      _export("bullet22", bullet22 = (_dec = ccclass('bullet22'), _dec(_class = class bullet22 extends Component {
        constructor() {
          super(...arguments);
          this.bullet = void 0;
          this.contactNotHide = true;
        }

        init(bullet) {
          this.bullet = bullet;
          find("body", this.node).getComponent(Animation).play("ani");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c2c43e061e4e598034b7309e2df7c94afb3c6c68.js.map