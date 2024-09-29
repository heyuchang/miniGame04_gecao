System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, tween, UITransform, v3, _decorator, cocosUtil, mapModel, HintNames, _dec, _class, _crd, ccclass, property, targetPos3;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHint(extras) {
    _reporterNs.report("Hint", "./Hint", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHintNames(extras) {
    _reporterNs.report("HintNames", "./Hint", _context.meta, extras);
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
      v3 = _cc.v3;
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

      _cclegacy._RF.push({}, "25c7f6OwVNBUpx/MCLFCtec", "targetPos3", undefined);

      __checkObsolete__(['Component', 'tween', 'UITransform', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("targetPos3", targetPos3 = (_dec = ccclass('targetPos3'), _dec(_class = class targetPos3 extends Component {
        constructor() {
          super(...arguments);
          this.hint = void 0;
        }

        init(hint) {
          this.hint = hint;
          this.node.scale = v3(4, 4, 1);
          tween(this.node).to(0.3, {
            scale: v3(0.9, 0.9, 1)
          }).to(0.1, {
            scale: v3(1.1, 1.1, 1)
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).call(() => {
            this.hint.recycleSelf();
            var worldPos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpace(this.node);
            worldPos.y += this.node.getComponent(UITransform).height * 0.5;
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).hintSystem.addHint((_crd && HintNames === void 0 ? (_reportPossibleCrUseOfHintNames({
              error: Error()
            }), HintNames) : HintNames).comeShine, worldPos, 0, this.hint.extraObj);
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b7d3935395688d14258b83a60764dff3f56688dd.js.map