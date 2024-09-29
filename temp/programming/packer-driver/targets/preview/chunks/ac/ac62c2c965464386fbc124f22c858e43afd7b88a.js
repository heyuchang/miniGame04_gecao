System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, macro, tween, UIOpacity, v3, Vec3, _decorator, cocosUtil, mapModel, physicsGroup, _dec, _class, _crd, ccclass, property, bullet5;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphysicsGroup(extras) {
    _reporterNs.report("physicsGroup", "../../../other/physicsGroup", _context.meta, extras);
  }

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
      macro = _cc.macro;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      mapModel = _unresolved_3.mapModel;
    }, function (_unresolved_4) {
      physicsGroup = _unresolved_4.physicsGroup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cd56afYd4RCRrD+B541mM04", "Bullet5", undefined);

      __checkObsolete__(['Component', 'macro', 'tween', 'UIOpacity', 'v3', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 狙击手-大子弹

      _export("bullet5", bullet5 = (_dec = ccclass('bullet5'), _dec(_class = class bullet5 extends Component {
        constructor() {
          super(...arguments);
          this.bullet = void 0;
          this.contactNotHide = true;
          this.moveStop = false;
          this.direction1 = void 0;
          this.direction2 = void 0;
          this.bulletId = 1005;
          this.turnSpeed = Math.PI / 3;
        }

        init(bullet) {
          this.bullet = bullet;
          this.bullet.node.setScale(v3(1, 1, 1));
          var uiOpacity = this.bullet.getComponent(UIOpacity);

          if (uiOpacity) {
            uiOpacity.opacity = 255;
          }

          this.moveStop = true;
          var dx = 200;

          if (this.bullet.direction.x < 0) {
            dx = -dx;
          }

          tween(this.bullet.node).by(0.3, {
            position: v3(dx, 0, 0)
          }, {
            easing: "quadOut"
          }).call(() => {
            this.moveStop = false;
            this.bullet.direction = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).player.node.getPosition().subtract(this.bullet.node.getPosition()).normalize();
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).tweenBlink(this.bullet.node, 0.5); // 开始不断产生小子弹

            this.direction1 = v3(0, 1, 0);
            this.direction2 = v3(0, -1, 0);
            this.schedule(this.createSmallBullet, 0.2, macro.REPEAT_FOREVER);
          }).start();
          this.scheduleOnce(() => {
            this.unschedule(this.createSmallBullet);
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).tweenScaleOut(this.bullet.node, 0.2, () => {
              this.bullet.recycleSelf();
            });
          }, 6);
        }

        createSmallBullet(dt) {
          var radian = dt * this.turnSpeed;
          var startPos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace(this.bullet.node);
          Vec3.rotateZ(this.direction1, this.direction1, Vec3.ZERO, radian);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).bulletSystem.addBullet(this.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).MONSTER_BULLET, startPos, this.direction1);
          Vec3.rotateZ(this.direction2, this.direction2, Vec3.ZERO, radian);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).bulletSystem.addBullet(this.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).MONSTER_BULLET, startPos, this.direction2);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ac62c2c965464386fbc124f22c858e43afd7b88a.js.map