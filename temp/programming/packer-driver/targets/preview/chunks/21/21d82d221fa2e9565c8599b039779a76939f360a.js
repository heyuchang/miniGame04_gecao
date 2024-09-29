System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, cocosUtil, constants, mapModel, HintNames, _dec, _class, _crd, ccclass, property, Weapon3;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../../data/constants", _context.meta, extras);
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
      constants = _unresolved_3.constants;
    }, function (_unresolved_4) {
      mapModel = _unresolved_4.mapModel;
    }, function (_unresolved_5) {
      HintNames = _unresolved_5.HintNames;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5930HqAsFLYJwEoWUnW3U5", "Weapon3", undefined);

      __checkObsolete__(['Component', 'Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 雷霆之拳

      _export("Weapon3", Weapon3 = (_dec = ccclass('Weapon3'), _dec(_class = class Weapon3 extends Component {
        constructor() {
          super(...arguments);
          this.weapon = void 0;
          this.weaponId = 10140;
        }

        init(weapon) {
          this.weapon = weapon;
        }

        atk() {
          this.weapon.atkByFist(300, 0.1);
        }

        contactBegin(node) {
          // 受击特效
          if (this.weapon.row.lv == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).design.maxLv) {
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).hintSystem.addHint((_crd && HintNames === void 0 ? (_reportPossibleCrUseOfHintNames({
              error: Error()
            }), HintNames) : HintNames).hit7, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpace(node));
          } else {
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).hintSystem.addHint((_crd && HintNames === void 0 ? (_reportPossibleCrUseOfHintNames({
              error: Error()
            }), HintNames) : HintNames).hit3, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpace(node));
          }

          this.weapon.targetForceMoveBack(node);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21d82d221fa2e9565c8599b039779a76939f360a.js.map