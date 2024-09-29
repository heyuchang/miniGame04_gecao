System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, myLog, constants, LocalStorageManager, _crd, localStorageManager;

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../common/myLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../data/constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      constants = _unresolved_3.constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "843feR3HERCO4ZE2g+iR7sM", "localStorageManager", undefined);

      __checkObsolete__(['sys']);

      LocalStorageManager = class LocalStorageManager {
        constructor() {
          this.uidKey = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).gameName + "_uid";
          this.openIdKey = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).gameName + "_openId";
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new LocalStorageManager();
          }

          return this._instance;
        }

        getKey() {
          if ((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).gameName) {
            return (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).gameName + "_gameData";
          }

          return "gameData";
        }

        getGameData() {
          var key = this.getKey();
          var data = sys.localStorage.getItem(key);

          if (data) {
            data = JSON.parse(data);
            return data;
          }

          return {};
        }

        setGameData(data) {
          var key = this.getKey();
          sys.localStorage.setItem(key, JSON.stringify(data));
        }

        set uid(uid) {
          sys.localStorage.setItem(this.uidKey, uid + "");
          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i("保存uid:" + uid);
        }

        get uid() {
          return sys.localStorage.getItem(this.uidKey);
        }

        set openId(openId) {
          sys.localStorage.setItem(this.openIdKey, openId + "");
          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i("保存openId：" + openId);
        }

        get openId() {
          return sys.localStorage.getItem(this.openIdKey);
        }

      };
      LocalStorageManager._instance = void 0;

      _export("localStorageManager", localStorageManager = LocalStorageManager.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2e5555fe18f071b4947c755707abc4bbf5ebc66d.js.map