System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, cocosUtil, constants, mapModel, physicsGroup, _dec, _class, _crd, ccclass, property, Weapon8;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphysicsGroup(extras) {
    _reporterNs.report("physicsGroup", "../../../other/physicsGroup", _context.meta, extras);
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
      physicsGroup = _unresolved_5.physicsGroup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c8d8yDhG9J8Yg5i2BgCTFf", "Weapon8", undefined);

      __checkObsolete__(['Component', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 魔法弩

      _export("Weapon8", Weapon8 = (_dec = ccclass('Weapon8'), _dec(_class = class Weapon8 extends Component {
        constructor(...args) {
          super(...args);
          this.weapon = void 0;
          this.weaponId = 10165;
        }

        init(weapon) {
          this.weapon = weapon;
        }

        atk() {
          // 发出子弹
          let pos = this.weapon.getInfoPosition(0, true);
          let num = 1;

          if (this.weapon.row.lv == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).design.maxLv) {
            num = 3;
          }

          let directionArr = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).getSectorDirectionArr(this.weapon.direction, 15, num);
          let extraObj = {};
          extraObj.atkPercentAdd = this.weapon.atkPercentAdd;
          directionArr.forEach(dir => {
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).bulletSystem.addBullet(this.weapon.row.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
              error: Error()
            }), physicsGroup) : physicsGroup).PLAYER_BULLET, pos, dir, extraObj);
          }); // 枪口发光和后摇动作

          this.weapon.atkByShot();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2e8f728c2e2061dd6e4d948d027e5f460b09bf2f.js.map