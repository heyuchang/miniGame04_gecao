System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, SingleInstance, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "385c2e7ZDBH5qgn7YCLSLIp", "SingleInstance", undefined);

      _export("SingleInstance", SingleInstance = class SingleInstance {
        constructor() {}

        static getInstance() {
          if (this.instance == null) {
            this.instance = new this();
          }

          return this.instance;
        }

      });

      SingleInstance.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dc2d4f0d077ee310ec32f6e7237c5537bcf2e321.js.map