System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, cocosUtil, utilTools, constants, audioManager, designManager, layerManager, mapModel, playerModel, _crd;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../manager/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflayerManager(extras) {
    _reporterNs.report("layerManager", "../manager/layerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "./mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerModel(extras) {
    _reporterNs.report("playerModel", "./playerModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      utilTools = _unresolved_3.utilTools;
    }, function (_unresolved_4) {
      constants = _unresolved_4.constants;
    }, function (_unresolved_5) {
      audioManager = _unresolved_5.audioManager;
    }, function (_unresolved_6) {
      designManager = _unresolved_6.designManager;
    }, function (_unresolved_7) {
      layerManager = _unresolved_7.layerManager;
    }, function (_unresolved_8) {
      mapModel = _unresolved_8.mapModel;
    }, function (_unresolved_9) {
      playerModel = _unresolved_9.playerModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a9bfcKNUT1MqpA94+oMlUD8", "devModel", undefined);

      // 开发阶段，为了调试方便，把单例放入window
      if ((_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
        error: Error()
      }), cocosUtil) : cocosUtil).isDesktopBrowser()) {
        window.designManager = _crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
          error: Error()
        }), designManager) : designManager;
        window.audioManager = _crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
          error: Error()
        }), audioManager) : audioManager;
        window.utilTools = _crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
          error: Error()
        }), utilTools) : utilTools;
        window.constants = _crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
          error: Error()
        }), constants) : constants;
        window.layerManager = _crd && layerManager === void 0 ? (_reportPossibleCrUseOflayerManager({
          error: Error()
        }), layerManager) : layerManager;
        window.mapModel = _crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
          error: Error()
        }), mapModel) : mapModel;
        window.playerModel = _crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
          error: Error()
        }), playerModel) : playerModel;
      }

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=12f8987a93d7782a86b04cde8a69841c9c37bd9e.js.map