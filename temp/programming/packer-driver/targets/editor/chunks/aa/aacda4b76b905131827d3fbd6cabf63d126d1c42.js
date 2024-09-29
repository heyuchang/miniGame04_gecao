System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, find, UITransform, _decorator, _dec, _class, _crd, ccclass, property, bullet21;

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
      find = _cc.find;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "52be2gmUGBPe6z6QYqIIW/I", "Bullet21", undefined);

      __checkObsolete__(['Component', 'find', 'UITransform', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 武器-激光枪-高级

      _export("bullet21", bullet21 = (_dec = ccclass('bullet21'), _dec(_class = class bullet21 extends Component {
        constructor(...args) {
          super(...args);
          this.bullet = void 0;
          this.moveStop = true;
          this.contactNotHide = true;
          this.contactBulletTime = 1;
          this.bodyNodeTf = void 0;
          this.aniCtrl = void 0;
        }

        init(bullet) {
          this.bullet = bullet;
          this.bodyNodeTf = find("body", this.node).getComponent(UITransform);
          this.bullet.extraObj.invokeClass(bullet);
        }

        setBodyWidth(width) {
          this.bodyNodeTf.width = width;
          this.bullet.collider.size.width = width - 15;
          this.bullet.collider.offset.x = (width - 15) * 0.5 - 24;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aacda4b76b905131827d3fbd6cabf63d126d1c42.js.map