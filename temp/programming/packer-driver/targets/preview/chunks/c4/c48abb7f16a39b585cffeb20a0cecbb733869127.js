System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, tween, v3, _decorator, sdkManager, Channel, tyqAdManager, cocosUtil, localText, designManager, mapModel, UserData, BaseLayer, _dec, _class, _crd, ccclass, property, BackLifeLayer;

  function _reportPossibleCrUseOfsdkManager(extras) {
    _reporterNs.report("sdkManager", "../../../sdk/sdkManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannel(extras) {
    _reporterNs.report("Channel", "../../../tyqSDK/tyqAdManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqAdManager(extras) {
    _reporterNs.report("tyqAdManager", "../../../tyqSDK/tyqAdManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalText(extras) {
    _reporterNs.report("localText", "../../data/localText", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../model/mapModel", _context.meta, extras);
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
      Color = _cc.Color;
      tween = _cc.tween;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      sdkManager = _unresolved_2.sdkManager;
    }, function (_unresolved_3) {
      Channel = _unresolved_3.Channel;
      tyqAdManager = _unresolved_3.tyqAdManager;
    }, function (_unresolved_4) {
      cocosUtil = _unresolved_4.cocosUtil;
    }, function (_unresolved_5) {
      localText = _unresolved_5.localText;
    }, function (_unresolved_6) {
      designManager = _unresolved_6.designManager;
    }, function (_unresolved_7) {
      mapModel = _unresolved_7.mapModel;
    }, function (_unresolved_8) {
      UserData = _unresolved_8.UserData;
    }, function (_unresolved_9) {
      BaseLayer = _unresolved_9.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3674+8/wVPk67jTPRnM3jt", "BackLifeLayer", undefined);

      __checkObsolete__(['Color', 'Node', 'tween', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BackLifeLayer", BackLifeLayer = (_dec = ccclass('BackLifeLayer'), _dec(_class = class BackLifeLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          this.timeNode = void 0;
          this.time = 9;
          this.diamondNumNode = void 0;
        }

        onLoad() {
          super.onLoad();
          this.timeNode = this.getNodeByPath("ui/time/time");
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
          if ((_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.backLifeCount > 0 && (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.backlifeCount >= (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.backLifeCount) {
            // 复活次数已达上限
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).mapSystem.doSettlement(false);
            this.closeLayer();
            return;
          }

          tween(this.timeNode).delay(0.2).to(0.6, {
            scale: v3(1.3, 1.3, 1)
          }).call(() => {
            this.time--;

            if (this.time < 0) {
              this.time = 0;

              if ((_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
                error: Error()
              }), tyqAdManager) : tyqAdManager).getChannel() == (_crd && Channel === void 0 ? (_reportPossibleCrUseOfChannel({
                error: Error()
              }), Channel) : Channel).H5_4399) {
                this.onClickBtnClose();
              }
            }

            this.setString(this.timeNode, this.time);
          }).to(0.6, {
            scale: v3(1, 1, 1)
          }).union().repeat(10).start();
          this.setString(this.diamondNumNode, "x" + (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.backLifeDiamond);

          if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().baoshi < (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.backLifeDiamond) {
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).setRenderableColor(this.diamondNumNode, Color.RED);
          } else {
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).setRenderableColor(this.diamondNumNode, Color.WHITE);
          }
        }

        processEvent(ac, data) {
          switch (ac) {
            default:
              break;
          }
        }

        onButtonClick(node, name) {
          switch (name) {
            default:
              break;
          }
        }

        roleBackLife() {
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.backlifeCount++;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.backLife();
          this.closeLayer();
        }

        onClickBtnClose() {
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.doSettlement(false);
          this.closeLayer();
        }

        onClickBtnAd() {
          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).openAd("复活", st => {
            if (st == 1) {
              this.roleBackLife();
            }
          });
        }

        onClickBtnDiamond() {
          if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().baoshi < (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.backLifeDiamond) {
            this.createNotice((_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
              error: Error()
            }), localText) : localText).lackDiamond);
            return;
          }

          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().useBaoShi(-(_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.backLifeDiamond, true);
          this.roleBackLife();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c48abb7f16a39b585cffeb20a0cecbb733869127.js.map