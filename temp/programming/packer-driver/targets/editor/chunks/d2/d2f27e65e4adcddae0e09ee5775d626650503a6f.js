System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, MyLog, _crd, myLog;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "49bd1nqTqNChbAN3BXD0yoE", "myLog", undefined);

      MyLog = class MyLog {
        constructor() {
          this.isOpen = true;
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new MyLog();
          }

          return this._instance;
        }

        i(...params) {
          if (!this.isOpen) {
            return;
          }

          params.unshift(new Date().toLocaleTimeString());
          console.info.apply(console, params);
        }

        w(...params) {
          if (!this.isOpen) {
            return;
          }

          params.unshift(new Date().toLocaleTimeString());
          console.warn.apply(console, params);
        }

        e(...params) {
          params.unshift(new Date().toLocaleTimeString());
          console.error.apply(console, params);
        }

      };
      MyLog._instance = void 0;

      _export("myLog", myLog = MyLog.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d2f27e65e4adcddae0e09ee5775d626650503a6f.js.map