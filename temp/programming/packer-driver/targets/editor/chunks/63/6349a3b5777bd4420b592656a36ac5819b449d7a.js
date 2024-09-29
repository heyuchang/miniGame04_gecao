System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, tween, _decorator, cocosUtil, utilTools, mapModel, _dec, _class, _crd, ccclass, property, bullet1011;

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

      _cclegacy._RF.push({}, "01617jEdq9KILpUXdznmc6J", "Bullet1011", undefined);

      __checkObsolete__(['Component', 'tween', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 技能-锤子

      _export("bullet1011", bullet1011 = (_dec = ccclass('bullet1011'), _dec(_class = class bullet1011 extends Component {
        constructor(...args) {
          super(...args);
          this.bullet = void 0;
          this.contactNotHide = true;
          this.g = -800;
          this.v = 800;
          this.vx = 0;
          this.vy = 0;
        }

        init(bullet) {
          this.bullet = bullet;
          tween(this.node).by(1, {
            angle: 360
          }).repeatForever().start(); // 抛射角度

          let floatRadian = Math.PI / 15;
          let radian = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).getFloatValue(Math.PI / 2 - floatRadian, Math.PI / 2 + floatRadian);
          this.vx = this.v * Math.cos(radian);
          this.vy = this.v * Math.sin(radian);
        }

        update(dt) {
          let pos = this.node.getPosition();
          pos.x += this.vx * dt;
          pos.y += this.vy * dt;
          this.vy += this.g * dt;
          this.node.setPosition(pos);

          if (!(_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).isInScreenVisible(this.node)) {
            this.bullet.recycleSelf();
          }
        }

        recycleSelfEnd() {
          // 通知上级数量减少了
          if ((_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(this.bullet.extraObj)) {
            this.bullet.extraObj.subNum();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6349a3b5777bd4420b592656a36ac5819b449d7a.js.map