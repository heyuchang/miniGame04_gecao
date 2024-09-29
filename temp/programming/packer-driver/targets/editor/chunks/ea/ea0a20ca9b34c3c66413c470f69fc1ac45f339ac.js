System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, tween, Tween, UIOpacity, _decorator, cocosUtil, AnimationCtrl, _dec, _class, _crd, ccclass, property, bullet14;

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
      tween = _cc.tween;
      Tween = _cc.Tween;
      UIOpacity = _cc.UIOpacity;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      AnimationCtrl = _unresolved_3.AnimationCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "97454HzNdZJp7Cr1EZrtpWC", "Bullet14", undefined);

      __checkObsolete__(['Component', 'tween', 'Tween', 'UIOpacity', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 蝎子-电极扳手

      _export("bullet14", bullet14 = (_dec = ccclass('bullet14'), _dec(_class = class bullet14 extends Component {
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
          let uiOpacity = this.bullet.getComponent(UIOpacity);

          if (uiOpacity) {
            uiOpacity.opacity = 255;
          }

          if (!this.aniCtrl) {
            this.aniCtrl = this.bullet.addComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
              error: Error()
            }), AnimationCtrl) : AnimationCtrl);
          }

          this.aniCtrl.playAnimation("bashou", true, () => {
            this.startColliderAni();
          });
          this.startColliderAni();
          this.scheduleOnce(() => {
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).tweenFadeOut(this.bullet.node, 1, () => {
              this.bullet.recycleSelf();
            });
          }, 2.6);
        }

        startColliderAni() {
          Tween.stopAllByTarget(this.bullet.collider.size);
          Tween.stopAllByTarget(this.bullet.collider.offset);
          this.bullet.collider.size.width = 80;
          this.bullet.collider.size.height = 80;
          this.bullet.collider.offset.y = 0;
          tween(this.bullet.collider.size).delay(0.55).to(0.05, {
            width: 500,
            height: 180
          }).delay(0.3).to(0.05, {
            width: 80,
            height: 80
          }).start();
          tween(this.bullet.collider.offset).delay(0.55).to(0.05, {
            y: -30
          }).delay(0.3).to(0.05, {
            y: 0
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ea0a20ca9b34c3c66413c470f69fc1ac45f339ac.js.map