System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, _decorator, constants, designManager, BaseLayer, _dec, _class, _crd, ccclass, property, PropInfoLayer2;

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
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
      designManager = _unresolved_3.designManager;
    }, function (_unresolved_4) {
      BaseLayer = _unresolved_4.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a0b33/wThhFnLP+QJRzeEWB", "PropInfoLayer2", undefined);

      __checkObsolete__(['find', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PropInfoLayer2", PropInfoLayer2 = (_dec = ccclass('PropInfoLayer2'), _dec(_class = class PropInfoLayer2 extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
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
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, this.layerData.id);
          this.setString(this.getNodeByPath("ui/info"), row.info);
          this.setString(this.getNodeByPath("ui/name/text"), row.name);
          this.setPropItem(row.id, this.getNodeByPath("ui/propItem/icon"), 0, this.getNodeByPath("ui/propItem/bg"));
          let numNode = this.getNodeByPath("ui/propItem/num");

          if (this.layerData.num != undefined) {
            numNode.active = true;
            this.setString(find("val", numNode), this.layerData.num);
          } else {
            numNode.active = false;
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

        onClickBg() {
          this.closeLayer();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=409921583f4919b1c19300f0bc2fd1b8e165101d.js.map