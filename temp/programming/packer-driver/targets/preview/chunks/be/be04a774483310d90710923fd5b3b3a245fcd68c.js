System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, UIOpacity, v3, _decorator, cocosUtil, AnimationCtrl, _dec, _class, _crd, ccclass, property, bullet10200;

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
      UIOpacity = _cc.UIOpacity;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      AnimationCtrl = _unresolved_3.AnimationCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa3e2m2O79H3ax5qkQRjVv4", "bullet10200", undefined);

      __checkObsolete__(['Color', 'Component', 'UIOpacity', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 粘稠怪-泥浆

      _export("bullet10200", bullet10200 = (_dec = ccclass('bullet10200'), _dec(_class = class bullet10200 extends Component {
        constructor() {
          super(...arguments);
          this.bullet = void 0;
          this.contactNotHide = true;
          this.contactBulletTime = 1;
          this.animationCtrl = void 0;
          this.shineColor = "#2AA32A".parseColor();
        }

        init(bullet) {
          this.bullet = bullet;
          this.animationCtrl = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).addComponentOnce(this, _crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
            error: Error()
          }), AnimationCtrl) : AnimationCtrl);
          this.node.angle = 0;
          this.animationCtrl.playAnimation("ani", true);
          this.getComponent(UIOpacity).opacity = 255;
          this.node.scale = v3(1, 1, 1);
          var scale = this.bullet.extraObj;

          if (scale > 0) {
            this.node.scale = v3(scale, scale, 1);
          }

          this.scheduleOnce(() => {
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).tweenFadeOut(this.node, 1, () => {
              this.bullet.recycleSelf();
            });
          }, 2);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=be04a774483310d90710923fd5b3b3a245fcd68c.js.map