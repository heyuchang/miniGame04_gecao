System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, myLog, msgac, EventManager, _crd, eventManager;

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../common/myLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgac(extras) {
    _reporterNs.report("msgac", "../data/msgac", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      msgac = _unresolved_3.msgac;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c2a1a1LsQRIE5uIjpvtQUe8", "eventManager", undefined);

      EventManager = class EventManager {
        constructor() {
          this.acList = {};
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new EventManager();
          }

          return this._instance;
        }

        on(ac, cb, sender) {
          let arr = this.acList[ac];

          if (!arr) {
            arr = [];
            this.acList[ac] = arr;
          } // 避免重复添加


          for (let i in arr) {
            let item = arr[i];

            if (item.sender == sender) {
              return;
            }
          }

          let item = {};
          item.cb = cb;
          item.sender = sender;
          arr.push(item);
        }

        off(ac, cb, sender) {
          let arr = this.acList[ac];

          if (!arr) {
            return;
          }

          let tmpArr = [];

          for (let i in arr) {
            let item = arr[i];

            if (item.cb == cb && item.sender == sender) {
              continue;
            }

            tmpArr.push(item);
          }

          this.acList[ac] = tmpArr;
        }

        offWithSender(sender) {
          for (let ac in this.acList) {
            let arr = this.acList[ac];
            let tmpArr = [];

            for (let i in arr) {
              let item = arr[i];

              if (item.sender == sender) {
                continue;
              }

              tmpArr.push(item);
            }

            this.acList[ac] = tmpArr;
          }
        }

        send(ac, data) {
          let arr = this.acList[ac];

          if (!arr) {
            return;
          }

          let isLog = true;

          if (data && data.notMyLog) {
            isLog = false;
          }

          if (ac == (_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).joystick) {
            isLog = false;
          }

          if (isLog) {
            let key = (_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
              error: Error()
            }), msgac) : msgac).ac2KeyObj[ac];
            (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
              error: Error()
            }), myLog) : myLog).i(key, data);
          }

          try {
            for (let i in arr) {
              let item = arr[i];
              let cb = item.cb;
              let sender = item.sender;
              let info = {
                ac: ac,
                data: data
              };
              cb.call(sender, info);
            }
          } catch (err) {
            (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
              error: Error()
            }), myLog) : myLog).e("eventManager send error:" + err.message, ac, data, err);
          }
        }

      };
      EventManager._instance = void 0;

      _export("eventManager", eventManager = EventManager.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=84aa33b556da83b6fe05ae00ec28eceaf5e2c74b.js.map