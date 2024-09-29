System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, myLog, msgac, eventManager, mapModel, playerModel, ServerMsg, _crd, serverMsg;

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../common/myLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgac(extras) {
    _reporterNs.report("msgac", "../data/msgac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventManager(extras) {
    _reporterNs.report("eventManager", "../manager/eventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerModel(extras) {
    _reporterNs.report("playerModel", "../model/playerModel", _context.meta, extras);
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
    }, function (_unresolved_4) {
      eventManager = _unresolved_4.eventManager;
    }, function (_unresolved_5) {
      mapModel = _unresolved_5.mapModel;
    }, function (_unresolved_6) {
      playerModel = _unresolved_6.playerModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9acdeoqlPRAM5oguGl4n3Cp", "serverMsg", undefined);

      ServerMsg = class ServerMsg {
        constructor() {}

        static get instance() {
          if (!this._instance) {
            this._instance = new ServerMsg();
          }

          return this._instance;
        } // 模拟客户端与服务端的通信，为以后接入服务端做预留


        send(ac, data) {
          let key = (_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).ac2KeyObj[ac];

          if (!data) {
            data = {};
          } // myLog.i(key, data);


          if (ac > (_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).playerMsgStart && ac < (_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).playerMsgEnd) {
            if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel)[key]) {
              (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel)[key](data);
            }
          }

          if (ac > (_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).mapMsgStart && ac < (_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).mapMsgEnd) {
            if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel)[key]) {
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel)[key](data);
            }
          }

          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i(key + "Ret", data);
          data.notMyLog = true; // // 公共消息处理
          // switch (data.st) {
          //     case -1:
          //         // 缺少道具
          //         eventManager.send(msgac.playerLackItemHint, data);
          //         return;
          // }

          if (data.st == 1) {
            (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
              error: Error()
            }), eventManager) : eventManager).send(ac, data);
          }
        }

      };
      ServerMsg._instance = void 0;

      _export("serverMsg", serverMsg = ServerMsg.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fcde0de865de85f9b3b4c66a246c6cd09ac8b90f.js.map