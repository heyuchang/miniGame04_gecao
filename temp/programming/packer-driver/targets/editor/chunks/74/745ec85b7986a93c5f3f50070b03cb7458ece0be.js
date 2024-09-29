System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, tween, Vec3, _decorator, cocosUtil, utilTools, mapModel, _dec, _class, _crd, ccclass, property, bullet1061;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      utilTools = _unresolved_3.utilTools;
    }, function (_unresolved_4) {
      mapModel = _unresolved_4.mapModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6cefy75lZGXpoB4YkWctUm", "Bullet1061", undefined);

      __checkObsolete__(['Component', 'tween', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 技能-科技球

      _export("bullet1061", bullet1061 = (_dec = ccclass('bullet1061'), _dec(_class = class bullet1061 extends Component {
        constructor(...args) {
          super(...args);
          this.bullet = void 0;
          this.contactNotHide = true;
          this.outScreenNotRecycle = true;
          this.isOutScreenReflex = void 0;
        }

        init(bullet) {
          this.bullet = bullet;
          this.isOutScreenReflex = false;
          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).tweenScaleIn(this.node, 0.5);
          tween(this.node).by(0.6, {
            angle: 360
          }).repeatForever().start();
          this.scheduleOnce(() => {
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).tweenScaleOut(this.node, 0.5, () => {
              this.bullet.recycleSelf();
            });
          }, this.bullet.extraObj.time);
        }

        contactBegin() {
          if (this.isOutScreenReflex) {
            return;
          } // 打到怪物，反方向随机角度


          let direction = this.bullet.direction.negative();
          let radian = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).angleToRadian(60);
          radian = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).getFloatValue(-radian, radian);
          Vec3.rotateZ(direction, direction, Vec3.ZERO, radian);
          this.bullet.setDirection(direction);
        }

        mirrorReflex(isX, force = false) {
          if (this.isOutScreenReflex && !force) {
            return;
          }

          this.isOutScreenReflex = true; // 碰到屏幕边缘，做镜面反射

          if (isX) {
            this.bullet.direction.x *= -1;
            return;
          }

          this.bullet.direction.y *= -1;
        }

        outScreenX(pos, playerPos) {
          return Math.abs(playerPos.x - pos.x) >= (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).visibleHalfSize.width;
        }

        outScreenY(pos, playerPos) {
          return Math.abs(playerPos.y - pos.y) >= (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).visibleHalfSize.height;
        }

        outWallX(pos) {
          if (!(_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.wallLayer.active) {
            return false;
          }

          if (pos.x >= (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.wallRightVal || pos.x <= (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.wallLeftVal) {
            return true;
          }

          return false;
        }

        outWallY(pos) {
          if (!(_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.wallLayer.active) {
            return false;
          }

          if (pos.y >= (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.wallTopVal || pos.y <= (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.wallBottomVal) {
            return true;
          }

          return false;
        }

        update(dt) {
          let playerPos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.position;
          let pos = this.node.position;

          if (this.outScreenX(pos, playerPos)) {
            this.mirrorReflex(true);
            return;
          }

          if (this.outWallX(pos)) {
            this.mirrorReflex(true, true);
            return;
          }

          if (this.outScreenY(pos, playerPos)) {
            this.mirrorReflex(false);
            return;
          }

          if (this.outWallY(pos)) {
            this.mirrorReflex(false, true);
            return;
          }

          this.isOutScreenReflex = false;
        }

        recycleSelfEnd() {
          // 通知上级数量减少了
          if ((_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(this.bullet.extraObj.invokeClass)) {
            this.bullet.extraObj.invokeClass.subNum();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=745ec85b7986a93c5f3f50070b03cb7458ece0be.js.map