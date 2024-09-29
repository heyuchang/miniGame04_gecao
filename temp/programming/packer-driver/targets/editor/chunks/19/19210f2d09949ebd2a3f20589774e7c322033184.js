System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, _decorator, BaseLayer, _dec, _class, _crd, ccclass, property, AwardInfoLayer;

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
      BaseLayer = _unresolved_2.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "24d91kKegVDn5us4NfnRGDS", "AwardInfoLayer", undefined);

      __checkObsolete__(['find', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AwardInfoLayer", AwardInfoLayer = (_dec = ccclass('AwardInfoLayer'), _dec(_class = class AwardInfoLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        onLoad() {
          super.onLoad();
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
          this.setItemLayer(this.getNodeByPath("ui/itemLayer"), this.layerData.awardArr, this.refreshAwardItem.bind(this));
        }

        refreshAwardItem(itemUI, award) {
          this.setPropItem(award[0], find("icon", itemUI), award[1], find("bg", itemUI), find("num", itemUI));
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

        onClickBtnSure() {
          this.closeLayer();
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
//# sourceMappingURL=19210f2d09949ebd2a3f20589774e7c322033184.js.map