System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, constants, msgac, eventManager, SingleInstance, RedPointManager, _crd, redPointManager;

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../game/data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgac(extras) {
    _reporterNs.report("msgac", "../game/data/msgac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventManager(extras) {
    _reporterNs.report("eventManager", "../game/manager/eventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleInstance(extras) {
    _reporterNs.report("SingleInstance", "./SingleInstance", _context.meta, extras);
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
      constants = _unresolved_2.constants;
    }, function (_unresolved_3) {
      msgac = _unresolved_3.msgac;
    }, function (_unresolved_4) {
      eventManager = _unresolved_4.eventManager;
    }, function (_unresolved_5) {
      SingleInstance = _unresolved_5.SingleInstance;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d76b4ECTxFBeJW28SdyuHMm", "redPointManager", undefined);

      __checkObsolete__(['sys']);

      RedPointManager = class RedPointManager extends (_crd && SingleInstance === void 0 ? (_reportPossibleCrUseOfSingleInstance({
        error: Error()
      }), SingleInstance) : SingleInstance) {
        constructor() {
          super(...arguments);
          this.key = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).gameName + "_redPoint";
        }

        getRedPointByLayer(layer) {
          var obj = sys.localStorage.getItem(this.key);
          var needSave = false;

          if (!obj) {
            obj = {};
            needSave = true;
          } else {
            obj = JSON.parse(obj);
          }

          var layerObj = obj[layer];

          if (!layerObj) {
            layerObj = {};
            obj[layer] = layerObj;
            needSave = true;
          }

          if (needSave) {
            sys.localStorage.setItem(this.key, JSON.stringify(obj));
          }

          return layerObj;
        }

        setRedPointByLayer(layer, layerObj) {
          var obj = sys.localStorage.getItem(this.key);

          if (!obj) {
            obj = {};
          } else {
            obj = JSON.parse(obj);
          }

          obj[layer] = layerObj;
          sys.localStorage.setItem(this.key, JSON.stringify(obj));
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).refreshRedPoint);
        }

        hasRedPointValue(layerName, key, value) {
          var obj = this.getRedPointByLayer(layerName);

          if (value != undefined) {
            if (Array.isArray(obj[key])) {
              var rpIndex = obj[key].indexOf(value);

              if (rpIndex != -1) {
                return true;
              }
            }

            return false;
          }

          if (Array.isArray(obj[key])) {
            if (obj[key].length > 0) {
              return true;
            }

            return false;
          }

          if (obj[key]) {
            return true;
          }

          return false;
        }

        addRedPointValue(layerName, key, value) {
          var obj = this.getRedPointByLayer(layerName);

          if (value) {
            if (!Array.isArray(obj[key])) {
              obj[key] = [];
            }

            var rpIndex = obj[key].indexOf(value);

            if (rpIndex == -1) {
              obj[key].push(value);
              this.setRedPointByLayer(layerName, obj);
            }
          } else {
            obj[key] = 1;
            this.setRedPointByLayer(layerName, obj);
          }
        }

        removeRedPointValue(layerName, key, value) {
          var obj = this.getRedPointByLayer(layerName);
          var info = obj[key];

          if (value != undefined) {
            if (Array.isArray(info)) {
              var rpIndex = info.indexOf(value);

              if (rpIndex != -1) {
                obj[key].splice(rpIndex, 1);
                this.setRedPointByLayer(layerName, obj);
                return true;
              }
            }

            return false;
          }

          if (info) {
            delete obj[key];
            this.setRedPointByLayer(layerName, obj);
            return true;
          }

          return false;
        }

        clearRedPointLayer(layerName, key) {
          var obj = this.getRedPointByLayer(layerName);

          if (key == undefined) {
            // 清空所有
            this.setRedPointByLayer(layerName, undefined);
          } else {
            delete obj[key];
            this.setRedPointByLayer(layerName, obj);
          }
        }

      };

      _export("redPointManager", redPointManager = RedPointManager.getInstance());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=41ad6e61c72f005a85cab11d073a32eb7449ca2c.js.map