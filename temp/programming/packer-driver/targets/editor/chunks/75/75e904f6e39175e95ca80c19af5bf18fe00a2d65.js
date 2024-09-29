System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, v3, _decorator, myLog, utilTools, constants, designManager, _dec, _class, _crd, ccclass, property, Prop201;

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../../../common/myLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../../utils/utilTools", _context.meta, extras);
  }

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
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      utilTools = _unresolved_3.utilTools;
    }, function (_unresolved_4) {
      constants = _unresolved_4.constants;
    }, function (_unresolved_5) {
      designManager = _unresolved_5.designManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "589beHTgXtCGJjDX4C17557", "Prop201", undefined);

      __checkObsolete__(['Component', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 经验

      _export("Prop201", Prop201 = (_dec = ccclass('Prop201'), _dec(_class = class Prop201 extends Component {
        constructor(...args) {
          super(...args);
          this.prop = void 0;
        }

        init(prop) {
          this.prop = prop;
          let num = this.prop.extraObj.num;
          let arr = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowsByType((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).propTypes.exp);
          let propRow = null;
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(arr, row => {
            if (num >= row.p1 && num <= row.p2) {
              propRow = row;
              return true;
            }
          });

          if (!propRow) {
            (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
              error: Error()
            }), myLog) : myLog).e("exp num:" + num + " not in prop table");
            return;
          } // 根据经验值大小显示缩放比


          let d = (propRow.p2 - propRow.p1) * 0.8;
          let scale = 1;

          if (num - propRow.p1 > d) {
            scale = 1.3;
          }

          this.prop.bodyNode.setScale(v3(scale, scale, 1));
          this.prop.setSpriteFrame(this.prop.bodyNode, propRow.icon);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=75e904f6e39175e95ca80c19af5bf18fe00a2d65.js.map