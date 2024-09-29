System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, _decorator, constants, localText, msgac, designManager, eventManager, UserData, BaseLayer, _dec, _class, _crd, ccclass, property, SkinChangeLayer;

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalText(extras) {
    _reporterNs.report("localText", "../../data/localText", _context.meta, extras);
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
      find = _cc.find;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      constants = _unresolved_2.constants;
    }, function (_unresolved_3) {
      localText = _unresolved_3.localText;
    }, function (_unresolved_4) {
      msgac = _unresolved_4.msgac;
    }, function (_unresolved_5) {
      designManager = _unresolved_5.designManager;
    }, function (_unresolved_6) {
      eventManager = _unresolved_6.eventManager;
    }, function (_unresolved_7) {
      UserData = _unresolved_7.UserData;
    }, function (_unresolved_8) {
      BaseLayer = _unresolved_8.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e7394qEzFdEHZl4XKRyeiOh", "SkinChangeLayer", undefined);

      __checkObsolete__(['find', 'Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SkinChangeLayer", SkinChangeLayer = (_dec = ccclass('SkinChangeLayer'), _dec(_class = class SkinChangeLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor(...args) {
          super(...args);
          this.listResetPos = true;
          this.btnEquip = void 0;
          this.btnGoGet = void 0;
          this.choseId = 0;
        }

        onLoad() {
          super.onLoad();
          this.btnEquip = this.getNodeByPath("ui/bottom/btns/btnEquip");
          this.btnGoGet = this.getNodeByPath("ui/bottom/btns/btnGoGet");
          this.choseId = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().heroSkin;
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
          let arr = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowsByType((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).propTypes.skin);
          this.scrollViewSetData(this.getNodeByPath("ui/bottom/list"), arr, this.refreshSkinItem.bind(this), this.listResetPos);
          this.listResetPos = false;
          this.setRoleSkin(this.getNodeByPath("ui/top/body"), this.choseId);
          let rank = this.choseId % 2000;
          this.setSpriteFrame2(this.getNodeByPath("ui/top/skin"), "skin/skin" + rank, null, "ui");
          this.btnEquip.active = false;
          this.btnGoGet.active = false;

          if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getPropById(this.choseId) > 0) {
            this.btnEquip.active = true;
          } else {
            this.btnGoGet.active = true;
          }
        }

        refreshSkinItem(itemUI, row) {
          this.setSpriteFrame2(find("icon", itemUI), "prop/" + row.icon);
          let num = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getPropById(row.id);
          let yinNode = find("yin", itemUI);
          let choseNode = find("chose", itemUI);

          if (num > 0) {
            yinNode.active = false;
          } else {
            yinNode.active = true;
          }

          if (row.id == this.choseId) {
            choseNode.active = true;
          } else {
            choseNode.active = false;
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

        onClickSkinItem(node) {
          let row = node.item;
          this.choseId = row.id;
          this.initUI();
        }

        closeLayer() {
          super.closeLayer();

          if (this.layerCb) {
            this.layerCb();
          }
        }

        onClickBtnGoGet() {
          this.closeLayer();
          let obj = {
            layerName: (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.RewardSkinLayer
          };

          if (this.choseId % 2000 == 5) {
            obj.layerName = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.DaySignLayer;
          }

          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).jumpLayer, obj);
        }

        onClickBtnEquip() {
          let num = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getPropById(this.choseId);

          if (num <= 0) {
            this.createNotice((_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
              error: Error()
            }), localText) : localText).notHas);
            return;
          }

          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().heroSkin = this.choseId;
          this.createNotice((_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
            error: Error()
          }), localText) : localText).equipSuccess);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e0d4b1183ebbc66dfe4d4585f3b8864d963e13c7.js.map