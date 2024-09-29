System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, tween, v3, _decorator, mapModel, _dec, _class, _crd, ccclass, property, bullet1042;

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
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      mapModel = _unresolved_2.mapModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "025b70d3+tO+537adU1A+ju", "Bullet1042", undefined);

      __checkObsolete__(['Color', 'Component', 'tween', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 技能-油桶-火焰

      _export("bullet1042", bullet1042 = (_dec = ccclass('bullet1042'), _dec(_class = class bullet1042 extends Component {
        constructor(...args) {
          super(...args);
          this.bullet = void 0;
          this.contactNotHide = true;
          this.contactBulletTime = 0.5;
          this.shineColor = "#FF1313".parseColor();
        }

        init(bullet) {
          this.bullet = bullet;
          this.node.angle = 0;
          this.node.setScale(v3(0.3, 0.3, 1));
          let scale = this.getScale();
          tween(this.node).to(0.06, {
            scale: v3(scale, scale, 1)
          }).start();
          this.scheduleOnce(() => {
            tween(this.node).to(0.15, {
              scale: v3(0, 0, 1)
            }).call(() => {
              this.bullet.recycleSelf();
            }).start();
          }, this.bullet.extraObj);
        }

        getScale() {
          let scale = 1 + (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.getSkill2RangeAddScale();
          return scale;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ba4094bab841d86f7788b20f61739d2ed3e4f92f.js.map