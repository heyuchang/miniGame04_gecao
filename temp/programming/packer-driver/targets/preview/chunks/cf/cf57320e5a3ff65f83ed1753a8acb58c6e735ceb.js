System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, cocosUtil, constants, audioManager, mapModel, physicsGroup, AnimationCtrl, _dec, _class, _crd, ccclass, property, Weapon6;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../../../manager/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphysicsGroup(extras) {
    _reporterNs.report("physicsGroup", "../../../other/physicsGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationCtrl(extras) {
    _reporterNs.report("AnimationCtrl", "../../base/AnimationCtrl", _context.meta, extras);
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
      audioManager = _unresolved_4.audioManager;
    }, function (_unresolved_5) {
      mapModel = _unresolved_5.mapModel;
    }, function (_unresolved_6) {
      physicsGroup = _unresolved_6.physicsGroup;
    }, function (_unresolved_7) {
      AnimationCtrl = _unresolved_7.AnimationCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f797baKKVlBaapupRSrfXVD", "Weapon6", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 锤子

      _export("Weapon6", Weapon6 = (_dec = ccclass('Weapon6'), _dec(_class = class Weapon6 extends Component {
        constructor() {
          super(...arguments);
          this.weapon = void 0;
          this.weaponId = 10155;
          this.isFixedPos = true;
          this.aniCtrl = void 0;
        }

        init(weapon) {
          this.weapon = weapon;
          this.unscheduleAllCallbacks(); // @ts-ignore

          this.aniCtrl = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).addComponentOnce(this, _crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
            error: Error()
          }), AnimationCtrl) : AnimationCtrl);
          this.aniCtrl.playAnimation("1", true);
        }

        atk() {
          var _this = this;

          if (this.weapon.getDisTargetNode() > 200) {
            return;
          }

          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect(this.weapon.row.audio);
          this.weapon.canFace = false;
          this.aniCtrl.playAnimationOnce("2");
          this.scheduleOnce(() => {
            var pos = this.weapon.getInfoPosition(0, true);
            var extraObj = {};
            extraObj.atkPercentAdd = this.weapon.atkPercentAdd;
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).bulletSystem.addBullet(this.weapon.row.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
              error: Error()
            }), physicsGroup) : physicsGroup).PLAYER_BULLET, pos, null, extraObj);

            if (this.weapon.row.lv == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.maxLv) {
              (function () {
                // 往外扩散
                var direction = _this.weapon.direction.clone().normalize();

                var dis = 0;
                var arr = [100, 80, 60, 40];

                var _loop = function _loop(i) {
                  _this.scheduleOnce(() => {
                    dis += arr[i] + arr[i + 1];
                    var target = pos.clone().add(direction.clone().multiplyScalar(dis));
                    var eobj = {};
                    eobj.scale = 0.8 - i * 0.2;
                    eobj.atkPercentAdd = _this.weapon.atkPercentAdd;
                    (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                      error: Error()
                    }), mapModel) : mapModel).bulletSystem.addBullet(_this.weapon.row.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
                      error: Error()
                    }), physicsGroup) : physicsGroup).PLAYER_BULLET, target, null, eobj);
                  }, i * 0.2 + 0.2);
                };

                for (var i = 0; i < 3; i++) {
                  _loop(i);
                }
              })();
            }
          }, 0.1);
          this.scheduleOnce(() => {
            this.weapon.canFace = true;
            this.weapon.timeCount = 0;
          }, 0.32);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cf57320e5a3ff65f83ed1753a8acb58c6e735ceb.js.map