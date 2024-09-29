System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, _dec, _class, _crd, ccclass, property, Weapon1;

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

      _cclegacy._RF.push({}, "eb75cIxY7pCw4EqtaskfNq3", "Weapon1", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 勇士匕首

      _export("Weapon1", Weapon1 = (_dec = ccclass('Weapon1'), _dec(_class = class Weapon1 extends Component {
        constructor(...args) {
          super(...args);
          this.weapon = void 0;
          this.weaponId = 10130;
        }

        init(weapon) {
          this.weapon = weapon;
        }

        atk() {
          this.weapon.atkByDart();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7ce11d91807cc160a761c335ee59130ea58234f7.js.map