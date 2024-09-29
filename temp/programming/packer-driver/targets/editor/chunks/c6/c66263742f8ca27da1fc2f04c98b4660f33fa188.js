System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, _decorator, localText, playerModel, UserData, BaseLayer, eventManager, msgac, _dec, _class, _crd, ccclass, property, LetterLayer;

  function _reportPossibleCrUseOflocalText(extras) {
    _reporterNs.report("localText", "../../data/localText", _context.meta, extras);
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

  function _reportPossibleCrUseOfeventManager(extras) {
    _reporterNs.report("eventManager", "../../manager/eventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgac(extras) {
    _reporterNs.report("msgac", "../../data/msgac", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      localText = _unresolved_2.localText;
    }, function (_unresolved_3) {
      playerModel = _unresolved_3.playerModel;
    }, function (_unresolved_4) {
      UserData = _unresolved_4.UserData;
    }, function (_unresolved_5) {
      BaseLayer = _unresolved_5.BaseLayer;
    }, function (_unresolved_6) {
      eventManager = _unresolved_6.eventManager;
    }, function (_unresolved_7) {
      msgac = _unresolved_7.msgac;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8c03DE/+JHxo1+olxbZkMD", "LetterLayer", undefined);

      __checkObsolete__(['find', 'Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LetterLayer", LetterLayer = (_dec = ccclass('LetterLayer'), _dec(_class = class LetterLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor(...args) {
          super(...args);
          this.awardArr = [[101, 10000], [801, 200]];
        }

        onLoad() {
          super.onLoad();
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
          this.setItemLayer(this.getNodeByPath("ui/awardLayer/itemLayer"), this.awardArr, this.refreshPropItem.bind(this));

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).isLetterAward) {
            this.setString(this.getNodeByPath("ui/btnGet/text"), (_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
              error: Error()
            }), localText) : localText).hasGet);
          } else {
            this.setString(this.getNodeByPath("ui/btnGet/text"), (_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
              error: Error()
            }), localText) : localText).get);
          }
        }

        refreshPropItem(itemUI, award) {
          this.setPropItem(award[0], find("icon", itemUI), award[1], find("bg", itemUI), find("num", itemUI));
          let getNode = find("get", itemUI);

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).isLetterAward) {
            getNode.active = true;
          } else {
            getNode.active = false;
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

        onClickBtnGet() {
          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).isLetterAward) {
            this.createNotice((_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
              error: Error()
            }), localText) : localText).hasGet);
            return;
          }

          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).isLetterAward = 1;
          let arr = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().addPropArrByDesign(this.awardArr);
          this.openAwardGetLayer(arr);
          this.initUI();
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).refreshRedPoint);
        }

        onClickBg() {
          this.closeLayer();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c66263742f8ca27da1fc2f04c98b4660f33fa188.js.map