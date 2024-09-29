System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, macro, _decorator, utilTools, _dec, _class, _crd, ccclass, property, CountTimeUtil;

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "./utilTools", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Label = _cc.Label;
      macro = _cc.macro;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      utilTools = _unresolved_2.utilTools;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa2e7PxHLFHprbziHo7Pp5S", "CountTimeUtil", undefined);

      __checkObsolete__(['Component', 'Label', 'macro', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CountTimeUtil", CountTimeUtil = (_dec = ccclass('CountTimeUtil'), _dec(_class = class CountTimeUtil extends Component {
        constructor() {
          super(...arguments);
          this._time = 0;
          this._callFun = null;
        }

        onLoad() {
          this.node.getComponent(Label).string = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).getTimeStr(this._time * 1000, true);
        }

        setTime(time, callFun) {
          if (callFun === void 0) {
            callFun = null;
          }

          this._time = time;
          this._callFun = callFun;

          if (this._time > 0) {
            this.node.getComponent(Label).string = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).getTimeStr(this._time * 1000, true);
            this.schedule(this.updateTime, 1, macro.REPEAT_FOREVER);
          } else {
            this.node.getComponent(Label).string = "";
          }
        }

        start() {// this.schedule(this.updateTime, 1, macro.REPEAT_FOREVER)
        }

        updateTime() {
          if (this._time > 0) {
            this._time--;
            this.node.getComponent(Label).string = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).getTimeStr(this._time * 1000, true);
          }

          if (this._time <= 0) {
            this.unschedule(this.updateTime);
            this.node.getComponent(Label).string = "";
            this._callFun && this._callFun(); // UserData.getInstance().checkPowerTime()
            // eventManager.send(msgac.commonResRefresh);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ed00682aa84657b3e7a526d27047da670eb106b6.js.map