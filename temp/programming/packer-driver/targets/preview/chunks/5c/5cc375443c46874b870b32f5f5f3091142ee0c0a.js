System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, find, Tween, _decorator, cocosUtil, mapModel, AnimationCtrl, _dec, _class, _crd, ccclass, property, HintNames, Hint;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationCtrl(extras) {
    _reporterNs.report("AnimationCtrl", "../../base/AnimationCtrl", _context.meta, extras);
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
      Tween = _cc.Tween;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      mapModel = _unresolved_3.mapModel;
    }, function (_unresolved_4) {
      AnimationCtrl = _unresolved_4.AnimationCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d7328lgUsxDaYvB3Zr0hgZx", "Hint", undefined);

      __checkObsolete__(['Component', 'find', 'Node', 'Tween', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HintNames", HintNames = {
        targetPos: "targetPos",
        targetPos2: "targetPos2",
        targetPos3: "targetPos3",
        hit1: "hit1",
        hit2: "hit2",
        hit3: "hit3",
        hit4: "hit4",
        hit5: "hit5",
        hit6: "hit6",
        hit7: "hit7",
        boom1: "boom1",
        feiBiao: "feiBiao",
        blockArrow: "blockArrow",
        comeShine: "comeShine"
      });

      _export("Hint", Hint = (_dec = ccclass('Hint'), _dec(_class = class Hint extends Component {
        constructor() {
          super(...arguments);
          this.bodyNode = void 0;
          this.hintUtil = void 0;
          this.extraObj = void 0;
        }

        init(name, worldPos, angle, extraObj) {
          if (angle === void 0) {
            angle = 0;
          }

          this.bodyNode = find("body", this.node);
          this.extraObj = extraObj;
          this.unscheduleAllCallbacks();
          Tween.stopAllByTarget(this.node);
          var pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToNodeSpace(this.node, worldPos);
          this.node.setPosition(pos);
          this.node.angle = angle;
          var aniCtrl = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).addComponentOnce(find("body", this.node), _crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
            error: Error()
          }), AnimationCtrl) : AnimationCtrl);
          aniCtrl.playAnimation("ani", false, () => {
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).hintSystem.recycleHintNode(this.node);
          });

          try {
            this.hintUtil = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).addComponentOnce(this, name);
            this.hintUtil.unscheduleAllCallbacks();
            this.hintUtil.init(this);
          } catch (e) {}
        }

        recycleSelf() {
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).hintSystem.recycleHintNode(this.node);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5cc375443c46874b870b32f5f5f3091142ee0c0a.js.map