System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, cocosUtil, mapModel, _dec, _class, _crd, ccclass, property, bullet1091;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
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
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      mapModel = _unresolved_3.mapModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc0ebvS2jlKk7UPVC1qONrd", "Bullet1091", undefined);

      __checkObsolete__(['Component', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 技能-钻头

      _export("bullet1091", bullet1091 = (_dec = ccclass('bullet1091'), _dec(_class = class bullet1091 extends Component {
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
          this.bullet.speed = this.bullet.speed * (1 + (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.getSkill2BulletSpeedAddPercent());
          let atk = this.bullet.atk * (1 + (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.getSkill2AtkAddPercent());
          this.bullet.atk = Math.floor(atk);
          this.scheduleOnce(() => {
            this.bullet.recycleSelf();
          }, this.bullet.extraObj.time);
        }

        mirrorReflex(isX, force = false) {
          if (this.isOutScreenReflex && !force) {
            return;
          }

          this.isOutScreenReflex = true; // 碰到边缘，做镜面反射

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
          }), mapModel) : mapModel).player.node.getPosition();
          let pos = this.node.getPosition();

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
//# sourceMappingURL=db8c954a6f6de8bf6d05aee59c463ab6aedf892f.js.map