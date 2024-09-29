System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Http, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c064dJ3gUJMUrDuaXXLfsGc", "http", undefined);

      _export("default", Http = class Http {
        constructor() {
          this.xhr = null;
        }

        static getInstance() {
          if (!this._instance) {
            this._instance = new Http();
          }

          return this._instance;
        }
        /**
         * post请求
         * @param {string} url
         * @param {object} params
         * @param {function} callback
         */


        httpPost(url, params, callback, failCb) {
          // cc.myGame.gameUi.onShowLockScreen();
          let xhr = new XMLHttpRequest();

          xhr.onreadystatechange = function () {
            // cc.log('xhr.readyState=' + xhr.readyState + '  xhr.status=' + xhr.status);
            if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
              let respone = xhr.responseText;
              let rsp = JSON.parse(respone); // cc.myGame.gameUi.onHideLockScreen();

              callback(rsp);
            } else {
              callback(-1);
            }
          };

          xhr.open('POST', url, true); // if (cc.sys.isNative) {
          // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
          // xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
          // xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type');
          // xhr.setRequestHeader("Content-Type", "application/json");
          // xhr.setRequestHeader('Authorization', 'Bearer ' + cc.myGame.gameManager.getToken());
          // }
          // note: In Internet Explorer, the timeout property may be set only after calling the open()
          // method and before calling the send() method.

          xhr.timeout = 8000; // 8 seconds for timeout

          xhr.send(JSON.stringify(params));

          xhr.onerror = err => {
            console.log(err);

            if (failCb) {
              failCb(err);
            }
          };
        }

      });

      Http._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=10d4194a20fcd58c066c04131dd15551382ecf57.js.map