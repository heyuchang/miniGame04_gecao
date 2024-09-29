System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, constants, designManager, _dec, _class, _crd, ccclass, property, Prop1002;

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../../manager/designManager", _context.meta, extras);
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
      constants = _unresolved_2.constants;
    }, function (_unresolved_3) {
      designManager = _unresolved_3.designManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2417aZWpORBWYRBYefZ1EuS", "Prop1002", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 装备

      _export("Prop1002", Prop1002 = (_dec = ccclass('Prop1002'), _dec(_class = class Prop1002 extends Component {
        constructor(...args) {
          super(...args);
          this.prop = void 0;
        }

        init(prop) {
          this.prop = prop;
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, this.prop.extraObj.propId);
          this.prop.setSpriteFrame2(this.prop.bodyNode, "prop/" + row.icon);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7e3679aa85157893729eb9252fc13c7859508037.js.map