System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, tween, UITransform, _decorator, cocosUtil, mapModel, HintNames, _dec, _class, _crd, ccclass, property, bullet1031;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHintNames(extras) {
    _reporterNs.report("HintNames", "../hint/Hint", _context.meta, extras);
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
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      mapModel = _unresolved_3.mapModel;
    }, function (_unresolved_4) {
      HintNames = _unresolved_4.HintNames;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65e7ficzCZFhI6xxZK1d3nb", "Bullet1031", undefined);

      __checkObsolete__(['Component', 'tween', 'UITransform', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 技能-飞镖

      _export("bullet1031", bullet1031 = (_dec = ccclass('bullet1031'), _dec(_class = class bullet1031 extends Component {
        constructor() {
          super(...arguments);
          this.bullet = void 0;
          this.contactNotHide = true;
          this.moveSpeed = void 0;
          this.yinTimeCount = void 0;
        }

        init(bullet) {
          this.bullet = bullet;
          this.moveSpeed = 1200;
          this.yinTimeCount = 0;
          tween(this.node).by(0.2, {
            angle: -360
          }).repeatForever().start();
        }

        update(dt) {
          var pos = this.node.getPosition();
          this.moveSpeed -= 30;
          var moveDis = this.moveSpeed * dt;
          var direction = this.bullet.direction.clone().multiplyScalar(moveDis);
          pos.add(direction);
          this.node.setPosition(pos);
          this.yinTimeCount += dt;

          if (this.yinTimeCount > 0.2) {
            this.yinTimeCount = 0;
            var tf = this.bullet.bodyNode.getComponent(UITransform);
            var extraObj = {
              width: tf.width,
              height: tf.height
            };
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).hintSystem.addHint((_crd && HintNames === void 0 ? (_reportPossibleCrUseOfHintNames({
              error: Error()
            }), HintNames) : HintNames).feiBiao, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpace(this.node), this.node.angle, extraObj);
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
//# sourceMappingURL=f50d4d5b9b854fead9dd568ce85197c2a3d1fb7d.js.map