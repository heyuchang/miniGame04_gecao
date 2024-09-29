System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, UITransform, _decorator, cocosUtil, constants, audioManager, mapModel, physicsGroup, _dec, _class, _crd, ccclass, property, Weapon7;

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

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../bullet/Bullet", _context.meta, extras);
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
      UITransform = _cc.UITransform;
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cb7391UjCxAgIU9XcT27b6W", "Weapon7", undefined);

      __checkObsolete__(['Component', 'UITransform', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 激光枪

      _export("Weapon7", Weapon7 = (_dec = ccclass('Weapon7'), _dec(_class = class Weapon7 extends Component {
        constructor(...args) {
          super(...args);
          this.weapon = void 0;
          this.weaponId = 10160;
          this.stopTimeCount = void 0;
          this.atkDis = 400;
          this.isHitPass = false;
          this.bullet = void 0;
        }

        init(weapon) {
          this.weapon = weapon;
          this.stopTimeCount = false;

          if (this.weapon.row.lv == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).design.maxLv) {
            this.isHitPass = true;
            this.atkDis = 1000;
          } else {
            this.isHitPass = false;
            this.atkDis = 400;
          }
        }

        atk() {
          // 攻击距离判断
          if (this.weapon.getDisTargetNode() > this.atkDis) {
            return;
          }

          this.stopTimeCount = true;
          let pos = this.weapon.getInfoPosition(0, true);
          this.bullet = null;
          let extraObj = {};
          extraObj.atkPercentAdd = this.weapon.atkPercentAdd;

          extraObj.invokeClass = bullet => {
            if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).isValid(this.node)) {
              this.bullet.recycleSelf();
              return;
            }

            (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
              error: Error()
            }), audioManager) : audioManager).playEffect(this.weapon.row.audio);
            this.bullet = bullet;
            this.update();
          };

          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).bulletSystem.addBullet(this.weapon.row.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).PLAYER_BULLET, pos, this.weapon.direction, extraObj);
          this.scheduleOnce(this.atkEnd, this.weapon.row.lv);
        }

        atkEnd() {
          this.unschedule(this.atkEnd);
          this.weapon.timeCount = 0;
          this.stopTimeCount = false;

          if ((_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(this.bullet)) {
            this.bullet.recycleSelf();
            this.bullet = null;
          }
        }

        forceDestroy() {
          this.atkEnd();
        }

        update() {
          if (!this.bullet) {
            return;
          } // 旋转角度


          this.bullet.node.angle = this.node.angle; // 位置

          let pos = this.weapon.getInfoPosition(0, true);
          pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToNodeSpace(this.bullet.node, pos);
          this.bullet.node.setPosition(pos);

          if (!this.weapon.targetNode) {
            return;
          } // 长度


          let width = this.weapon.getDisTargetNode();

          if (this.isHitPass) {
            width = this.atkDis;
          }

          this.bullet.bulletUtil.setBodyWidth(width - this.weapon.targetNode.getComponent(UITransform).height * 0.2);

          if (width > this.atkDis) {
            this.atkEnd();
            return;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8d4327317ca36a3d60fbc7ad32436f483a27abe8.js.map