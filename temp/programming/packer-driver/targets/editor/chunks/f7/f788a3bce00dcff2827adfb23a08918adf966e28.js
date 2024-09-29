System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, v3, _decorator, cocosUtil, AnimationCtrl, _dec, _class, _crd, ccclass, property, bullet19;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
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
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      AnimationCtrl = _unresolved_3.AnimationCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3ef6cc1Z8JHaoCfBKN/yXYy", "Bullet19", undefined);

      __checkObsolete__(['Component', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 武器-锤子-高级

      _export("bullet19", bullet19 = (_dec = ccclass('bullet19'), _dec(_class = class bullet19 extends Component {
        constructor(...args) {
          super(...args);
          this.bullet = void 0;
          this.moveStop = void 0;
          this.contactNotHide = true;
          this.aniCtrl = void 0;
        }

        init(bullet) {
          this.bullet = bullet;
          this.moveStop = true;
          this.bullet.node.angle = 0;
          this.bullet.collider.enabled = false;
          let scale = 1;

          if (this.bullet.extraObj && this.bullet.extraObj.scale > 0) {
            scale = this.bullet.extraObj.scale;
          }

          this.node.setScale(v3(scale, scale, 1));
          this.scheduleOnce(() => {
            this.bullet.collider.enabled = true;
          }, 0.1);
          this.aniCtrl = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).addComponentOnce(this, _crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
            error: Error()
          }), AnimationCtrl) : AnimationCtrl);
          this.aniCtrl.playAnimation("4", false, () => {
            this.bullet.recycleSelf();
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f788a3bce00dcff2827adfb23a08918adf966e28.js.map