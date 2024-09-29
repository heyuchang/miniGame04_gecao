System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, tween, Tween, UITransform, v3, _decorator, cocosUtil, mapModel, _dec, _class, _crd, ccclass, property, blockArrow;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "../monsters/Monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHint(extras) {
    _reporterNs.report("Hint", "./Hint", _context.meta, extras);
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
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      mapModel = _unresolved_3.mapModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "26082K0Kx9A84bAyKtyHwII", "blockArrow", undefined);

      __checkObsolete__(['Component', 'tween', 'Tween', 'UITransform', 'v3', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("blockArrow", blockArrow = (_dec = ccclass('blockArrow'), _dec(_class = class blockArrow extends Component {
        constructor() {
          super(...arguments);
          this.hint = void 0;
          this.monster = void 0;
          this.outVec1 = v3(0, 0, 0);
        }

        init(hint) {
          this.hint = hint;
          this.monster = this.hint.extraObj.monster;
          var duration = this.hint.extraObj.duration;
          var dis = this.hint.extraObj.dis;
          var tf = this.hint.bodyNode.getComponent(UITransform);
          tf.width = 120;
          Tween.stopAllByTarget(tf);
          tween(tf).to(duration, {
            width: dis
          }).call(() => {
            this.hint.recycleSelf();
          }).start();
        }

        update(dt) {
          // 角度
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.getPosition(this.outVec1).subtract(this.monster.node.position);
          this.node.angle = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).vec2XAngle(this.outVec1); // 位置

          this.node.position = this.monster.node.position;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d4a06a5c72d7559400cfe42e6ba7e1b52311a0ed.js.map