System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, cocosUtil, mapModel, HintNames, constants, _dec, _class, _crd, ccclass, property, Weapon5;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHintNames(extras) {
    _reporterNs.report("HintNames", "../hint/Hint", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeapon(extras) {
    _reporterNs.report("Weapon", "./Weapon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../../data/constants", _context.meta, extras);
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
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      mapModel = _unresolved_3.mapModel;
    }, function (_unresolved_4) {
      HintNames = _unresolved_4.HintNames;
    }, function (_unresolved_5) {
      constants = _unresolved_5.constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e405cst8JNFQLZ6QAhoKYRD", "Weapon5", undefined);

      __checkObsolete__(['Component', 'Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 光剑

      _export("Weapon5", Weapon5 = (_dec = ccclass('Weapon5'), _dec(_class = class Weapon5 extends Component {
        constructor() {
          super(...arguments);
          this.weapon = void 0;
          this.weaponId = 10150;
        }

        init(weapon) {
          this.weapon = weapon;
        }

        atk() {
          var time = 0.05;
          var atkDis = 300;

          if (this.weapon.row.lv == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).design.maxLv) {
            atkDis = 400;
          }

          var ret = this.weapon.atkByFist(atkDis, time);

          if (!ret) {
            this.scheduleOnce(() => {
              if (this.weapon.row.lv == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).design.maxLv) {
                (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).hintSystem.addHint((_crd && HintNames === void 0 ? (_reportPossibleCrUseOfHintNames({
                  error: Error()
                }), HintNames) : HintNames).hit4, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                  error: Error()
                }), cocosUtil) : cocosUtil).convertToWorldSpace(this.weapon.node), this.weapon.node.angle);
              } else {
                (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).hintSystem.addHint((_crd && HintNames === void 0 ? (_reportPossibleCrUseOfHintNames({
                  error: Error()
                }), HintNames) : HintNames).hit6, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                  error: Error()
                }), cocosUtil) : cocosUtil).convertToWorldSpace(this.weapon.node), this.weapon.node.angle);
              }
            }, time * 2);
          }
        }

        contactBegin(node) {
          // 受击特效
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).hintSystem.addHint((_crd && HintNames === void 0 ? (_reportPossibleCrUseOfHintNames({
            error: Error()
          }), HintNames) : HintNames).hit5, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace(node));
          this.weapon.targetForceMoveBack(node);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=627eeaaf35a0e59debf5f50dfc964d73b5c28a5e.js.map