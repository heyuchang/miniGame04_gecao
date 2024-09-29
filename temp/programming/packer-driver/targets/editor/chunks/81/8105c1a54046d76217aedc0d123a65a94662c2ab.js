System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, tween, v3, Vec3, _decorator, mapModel, cocosUtil, _dec, _class, _crd, ccclass, property, bullet1021;

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "./Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
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
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      mapModel = _unresolved_2.mapModel;
    }, function (_unresolved_3) {
      cocosUtil = _unresolved_3.cocosUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "86474WEu6dJGYa5KdH3dG0s", "Bullet1021", undefined);

      __checkObsolete__(['Component', 'tween', 'v3', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 技能-转盘

      _export("bullet1021", bullet1021 = (_dec = ccclass('bullet1021'), _dec(_class = class bullet1021 extends Component {
        constructor(...args) {
          super(...args);
          this.bullet = void 0;
          this.contactNotHide = true;
          this.outVec3 = v3(0, 0, 0);
          this.direction = void 0;
          this.speed = -Math.PI * 1.5;
        }

        init(bullet) {
          this.bullet = bullet;
          let direction = this.bullet.extraObj.direction;
          this.direction = direction;
          let scale = this.getScale();
          this.node.setScale(v3(scale, scale, 1));
          tween(this.node).by(0.6, {
            angle: -360
          }).repeatForever().start();
          this.show();
          this.bullet.extraObj.endCb(this.bullet);
        }

        getScale() {
          let scale = 1 + (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.getSkill2RangeAddScale();
          return scale;
        }

        hide(isAtOnce = false) {
          if (isAtOnce) {
            this.bullet.recycleSelf();
            return;
          }

          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).tweenScaleOut(this.node, 0.5, () => {
            this.bullet.recycleSelf();
          });
        }

        show() {
          let scale = this.getScale();
          this.node.setScale(v3(0, 0, 0));
          this.node.active = true;
          tween(this.node).to(0.5, {
            scale: v3(scale, scale, 1)
          }).start();
        }

        update(dt) {
          // 围绕玩家进行旋转
          let radian = this.speed * dt;
          Vec3.rotateZ(this.direction, this.direction, Vec3.ZERO, radian);
          let playerPos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.position.clone();
          playerPos.add(this.direction);
          this.node.position = playerPos;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8105c1a54046d76217aedc0d123a65a94662c2ab.js.map