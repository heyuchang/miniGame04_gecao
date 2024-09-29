System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, Component, find, v3, _decorator, cocosUtil, AnimationCtrl, _dec, _class, _crd, ccclass, property, Prop701;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationCtrl(extras) {
    _reporterNs.report("AnimationCtrl", "../../base/AnimationCtrl", _context.meta, extras);
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
      Animation = _cc.Animation;
      Component = _cc.Component;
      find = _cc.find;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      AnimationCtrl = _unresolved_3.AnimationCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b3c0Dk5rJItYvaImNFjUUe", "Prop701", undefined);

      __checkObsolete__(['Animation', 'Component', 'find', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 宝箱

      _export("Prop701", Prop701 = (_dec = ccclass('Prop701'), _dec(_class = class Prop701 extends Component {
        constructor() {
          super(...arguments);
          this.prop = void 0;
          this.notContact = void 0;
          this.animationCtrl = void 0;
        }

        init(prop) {
          this.prop = prop;
          this.notContact = true;
          this.animationCtrl = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).addComponentOnce(find("ani", this.node), _crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
            error: Error()
          }), AnimationCtrl) : AnimationCtrl);
          this.animationCtrl.node.active = true;
          this.animationCtrl.playAnimationOnce("1", () => {
            this.animationCtrl.playAnimation("2", true);
            this.notContact = false;
          });
          this.prop.bodyNode.scale = v3(0, 0, 1);
          this.prop.bodyNode.getComponent(Animation).play("boxAni");
        }

        contactStart() {
          this.animationCtrl.node.active = false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c7fe5b2aa15e26e75799cdf8767fbf8bc8e08952.js.map