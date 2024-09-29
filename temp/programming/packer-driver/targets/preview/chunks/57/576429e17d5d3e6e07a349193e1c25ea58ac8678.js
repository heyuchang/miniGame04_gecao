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

        i() {
          if (!this.isOpen) {
            return;
          }

          for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
            params[_key] = arguments[_key];
          }

          params.unshift(new Date().toLocaleTimeString());
          console.info.apply(console, params);
        }

        w() {
          if (!this.isOpen) {
            return;
          }

          for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            params[_key2] = arguments[_key2];
          }

          params.unshift(new Date().toLocaleTimeString());
          console.warn.apply(console, params);
        }

        e() {
          for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            params[_key3] = arguments[_key3];
          }

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
//# sourceMappingURL=576429e17d5d3e6e07a349193e1c25ea58ac8678.js.map