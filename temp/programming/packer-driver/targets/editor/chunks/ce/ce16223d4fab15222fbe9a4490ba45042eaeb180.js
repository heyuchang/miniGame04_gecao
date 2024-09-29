System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, cocosUtil, AnimationTrack, _dec, _class, _crd, ccclass, property, Prop1001;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationTrack(extras) {
    _reporterNs.report("AnimationTrack", "../../base/AnimationTrack", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProp(extras) {
    _reporterNs.report("Prop", "./Prop", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      AnimationTrack = _unresolved_3.AnimationTrack;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7560dwr4i1A6LAme6E7aqDt", "Prop1001", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 宝箱怪金币

      _export("Prop1001", Prop1001 = (_dec = ccclass('Prop1001'), _dec(_class = class Prop1001 extends Component {
        constructor(...args) {
          super(...args);
          this.prop = void 0;
          this.autoGet = true;
          this.animationTrack = void 0;
        }

        init(prop) {
          this.prop = prop;
          this.animationTrack = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).addComponentOnce(this.node, _crd && AnimationTrack === void 0 ? (_reportPossibleCrUseOfAnimationTrack({
            error: Error()
          }), AnimationTrack) : AnimationTrack);
          this.animationTrack.startShowThrow(() => {
            this.prop.playerGetProp();
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ce16223d4fab15222fbe9a4490ba45042eaeb180.js.map