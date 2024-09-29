System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, _dec, _class, _crd, ccclass, property, Weapon4;

  function _reportPossibleCrUseOfWeapon(extras) {
    _reporterNs.report("Weapon", "./Weapon", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "87f193XmIVPsoGBgcT84RKn", "Weapon4", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 葱

      _export("Weapon4", Weapon4 = (_dec = ccclass('Weapon4'), _dec(_class = class Weapon4 extends Component {
        constructor(...args) {
          super(...args);
          this.weapon = void 0;
          this.weaponId = 10145;
          this.isFixedDirection = true;
        }

        init(weapon) {
          this.weapon = weapon;
        }

        atk() {
          this.weapon.atkByStick(500);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=73092fbd29dd5d3990d70618018761c2b2990720.js.map