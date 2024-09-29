System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, cocosUtil, msgac, serverMsg, BaseLayer, _dec, _class, _crd, ccclass, property, BackHomeLayer;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgac(extras) {
    _reporterNs.report("msgac", "../../data/msgac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfserverMsg(extras) {
    _reporterNs.report("serverMsg", "../../other/serverMsg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../base/BaseLayer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      msgac = _unresolved_3.msgac;
    }, function (_unresolved_4) {
      serverMsg = _unresolved_4.serverMsg;
    }, function (_unresolved_5) {
      BaseLayer = _unresolved_5.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7122ITL3dBxJTT4wZtwJfh", "BackHomeLayer", undefined);

      __checkObsolete__(['Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BackHomeLayer", BackHomeLayer = (_dec = ccclass('BackHomeLayer'), _dec(_class = class BackHomeLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor(...args) {
          super(...args);
          this.uiNode = void 0;
        }

        onLoad() {
          super.onLoad();
          this.uiNode = this.getNodeByPath("ui");
          this.isShowBannerAd = true;
        }

        onEnable() {
          super.onEnable();
        }

        onDisable() {
          super.onDisable();
        }

        onDestroy() {
          super.onDestroy();
        }

        initUI() {
          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).tweenScaleIn2(this.uiNode);
        }

        onButtonClick(node, name) {
          switch (name) {
            default:
              break;
          }
        }

        onClickBtnGoOn() {
          this.closeLayer();
        }

        onClickBtnExit() {
          this.closeLayer();
          (_crd && serverMsg === void 0 ? (_reportPossibleCrUseOfserverMsg({
            error: Error()
          }), serverMsg) : serverMsg).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).mapLeave);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=25bbd0bfe7e24d33c9f932d1a3a5de5eaf4ad6c4.js.map