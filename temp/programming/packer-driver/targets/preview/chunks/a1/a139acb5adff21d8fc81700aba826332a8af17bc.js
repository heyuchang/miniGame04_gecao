System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, sdkManager, msgac, designManager, eventManager, playerModel, UserData, BaseLayer, _dec, _class, _crd, ccclass, property, BuyLifeLayer;

  function _reportPossibleCrUseOfsdkManager(extras) {
    _reporterNs.report("sdkManager", "../../../sdk/sdkManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgac(extras) {
    _reporterNs.report("msgac", "../../data/msgac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventManager(extras) {
    _reporterNs.report("eventManager", "../../manager/eventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerModel(extras) {
    _reporterNs.report("playerModel", "../../model/playerModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../../model/UserData", _context.meta, extras);
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
      sdkManager = _unresolved_2.sdkManager;
    }, function (_unresolved_3) {
      msgac = _unresolved_3.msgac;
    }, function (_unresolved_4) {
      designManager = _unresolved_4.designManager;
    }, function (_unresolved_5) {
      eventManager = _unresolved_5.eventManager;
    }, function (_unresolved_6) {
      playerModel = _unresolved_6.playerModel;
    }, function (_unresolved_7) {
      UserData = _unresolved_7.UserData;
    }, function (_unresolved_8) {
      BaseLayer = _unresolved_8.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "92b8crcdL5PUopsmiVmqHrj", "BuyLifeLayer", undefined);

      __checkObsolete__(['Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BuyLifeLayer", BuyLifeLayer = (_dec = ccclass('BuyLifeLayer'), _dec(_class = class BuyLifeLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          this.diamondNumNode = void 0;
        }

        onLoad() {
          super.onLoad();
          this.diamondNumNode = this.getNodeByPath("ui/btns/btnDiamond/info/num");
          this.isShowBannerAd = true;
        }

        onEnable() {
          super.onEnable();
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().mapData = null;
        }

        onDisable() {
          super.onDisable();
        }

        onDestroy() {
          super.onDestroy();
        }

        initUI() {
          this.setString(this.diamondNumNode, "x" + (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.backLifeDiamond);
        }

        onClickBtnDiamond() {
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().useBaoShi(-(_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.backLifeDiamond);
          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).skillLifeNum++;
          this.closeLayer();
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).mapRefreshSkill);
        }

        onClickBtnAd() {
          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).openAd("购买复活", st => {
            if (st == 1) {
              (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).skillLifeNum++;
              this.closeLayer();
              (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
                error: Error()
              }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
                error: Error()
              }), msgac) : msgac).mapRefreshSkill);
            }
          });
        }

        closeLayer() {
          super.closeLayer();

          if (this.layerCb) {
            this.layerCb();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a139acb5adff21d8fc81700aba826332a8af17bc.js.map