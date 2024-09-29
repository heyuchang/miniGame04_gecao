System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, mapModel, AnimationCtrl, _dec, _class, _crd, ccclass, property, bullet17;

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationCtrl(extras) {
    _reporterNs.report("AnimationCtrl", "../../base/AnimationCtrl", _context.meta, extras);
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
      mapModel = _unresolved_2.mapModel;
    }, function (_unresolved_3) {
      AnimationCtrl = _unresolved_3.AnimationCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cfb425XKhxK+pvFspil2GnJ", "Bullet17", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 如来神掌

      _export("bullet17", bullet17 = (_dec = ccclass('bullet17'), _dec(_class = class bullet17 extends Component {
        constructor() {
          super(...arguments);
          this.bullet = void 0;
          this.moveStop = true;
          this.contactNotHide = true;
        }

        init(bullet) {
          this.bullet = bullet;
          this.bullet.collider.enabled = false;
          this.scheduleOnce(() => {
            this.bullet.collider.enabled = true;
          }, 0.2);
          this.bullet.node.angle = this.bullet.extraObj;
          var aniCtrl = this.addComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
            error: Error()
          }), AnimationCtrl) : AnimationCtrl);
          aniCtrl.playAnimation("2", false, () => {
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).bulletSystem.recycleBulletNode(this.node);
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=812615c1c523f7f92bedab9a08bb277bc08ed782.js.map