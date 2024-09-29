System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, RichText, _decorator, constants, msgac, designManager, eventManager, UserData, PropItemPrefab, BaseUILayer, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, PropInfoLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
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

  function _reportPossibleCrUseOfPropItemPrefab(extras) {
    _reporterNs.report("PropItemPrefab", "../item/PropItemPrefab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseUILayer(extras) {
    _reporterNs.report("BaseUILayer", "./BaseUILayer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Node = _cc.Node;
      RichText = _cc.RichText;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      constants = _unresolved_2.constants;
    }, function (_unresolved_3) {
      msgac = _unresolved_3.msgac;
    }, function (_unresolved_4) {
      designManager = _unresolved_4.designManager;
    }, function (_unresolved_5) {
      eventManager = _unresolved_5.eventManager;
    }, function (_unresolved_6) {
      UserData = _unresolved_6.UserData;
    }, function (_unresolved_7) {
      PropItemPrefab = _unresolved_7.PropItemPrefab;
    }, function (_unresolved_8) {
      BaseUILayer = _unresolved_8.BaseUILayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0e500nZEB1BLK5g1Nf5CtGr", "PropInfoLayer", undefined);

      __checkObsolete__(['Label', 'Node', 'RichText', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PropInfoLayer", PropInfoLayer = (_dec = ccclass('PropInfoLayer'), _dec2 = property({
        type: Node,
        tooltip: "道具节点"
      }), _dec3 = property({
        type: Node,
        tooltip: "按钮"
      }), _dec4 = property({
        type: Node,
        tooltip: "属性图标"
      }), _dec5 = property({
        type: Label,
        tooltip: "属性"
      }), _dec6 = property({
        type: Label,
        tooltip: "属性值"
      }), _dec7 = property({
        type: Label,
        tooltip: "装备详情"
      }), _dec8 = property({
        type: Label,
        tooltip: "装备名字"
      }), _dec9 = property({
        type: Label,
        tooltip: "套装名字"
      }), _dec10 = property({
        type: RichText,
        tooltip: "3套属性"
      }), _dec11 = property({
        type: RichText,
        tooltip: "5套属性"
      }), _dec12 = property({
        type: Label,
        tooltip: "套装数量"
      }), _dec13 = property({
        type: Node,
        tooltip: "套装节点"
      }), _dec(_class = (_class2 = class PropInfoLayer extends (_crd && BaseUILayer === void 0 ? (_reportPossibleCrUseOfBaseUILayer({
        error: Error()
      }), BaseUILayer) : BaseUILayer) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "propItem", _descriptor, this);

          _initializerDefineProperty(this, "btnWear", _descriptor2, this);

          _initializerDefineProperty(this, "attrIcon", _descriptor3, this);

          _initializerDefineProperty(this, "attrlabel", _descriptor4, this);

          _initializerDefineProperty(this, "attrNumLab", _descriptor5, this);

          _initializerDefineProperty(this, "propInfoLab", _descriptor6, this);

          _initializerDefineProperty(this, "propNameLab", _descriptor7, this);

          _initializerDefineProperty(this, "suitNameLab", _descriptor8, this);

          _initializerDefineProperty(this, "suitAttr3", _descriptor9, this);

          _initializerDefineProperty(this, "suitAttr5", _descriptor10, this);

          _initializerDefineProperty(this, "suitNum", _descriptor11, this);

          _initializerDefineProperty(this, "suitNode", _descriptor12, this);

          this._propId = 0;
          this._propFlag = 0;
          this._weaponLv = 0;
        }

        onLoad() {
          super.onLoad();
          this._propId = this.layerData.propId;
          this._propFlag = this.layerData.flag;
          this._weaponLv = this.layerData.weaponLv;
          var propData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, this._propId);

          if (propData.atk > 0) {
            this.setSpriteFrame2(this.attrIcon, "heroLayer/ui_gj", null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.wwqVec);
            var atk = propData.atk;

            if (this._weaponLv > 0) {
              atk = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().weaponOptLvEffect(atk, this._weaponLv);
            }

            this.attrNumLab.string = "+" + atk;
            this.attrNumLab.color = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).colors.blue.parseColor();
            this.attrlabel.string = "攻击";
          } else if (propData.hp > 0) {
            this.attrNumLab.string = "+" + propData.hp;
            this.setSpriteFrame2(this.attrIcon, "heroLayer/ui_sm", null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.wwqVec);
            this.attrlabel.string = "生命";
            this.attrNumLab.color = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).colors.green.parseColor();
          }

          this.propInfoLab.string = "" + propData.info;
          this.propNameLab.string = "" + propData.name;
          this.propItem.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
            error: Error()
          }), PropItemPrefab) : PropItemPrefab).setView(this._propId, 0, (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
            error: Error()
          }), PropItemPrefab) : PropItemPrefab).Type_HideNum | (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
            error: Error()
          }), PropItemPrefab) : PropItemPrefab).Type_ShowType);
          this.btnWear.off(Node.EventType.TOUCH_END, this.unWearProp, this);
          this.btnWear.off(Node.EventType.TOUCH_END, this.wearProp, this);

          if (this._propFlag & (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
            error: Error()
          }), PropItemPrefab) : PropItemPrefab).Type_ToWear) {
            this.btnWear.getChildByName("Label").getComponent(Label).string = "穿戴";
            this.setSpriteFrame2(this.btnWear, "btnres/ui_yellow", null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.common);
            this.btnWear.on(Node.EventType.TOUCH_END, this.wearProp, this);
          } else if (this._propFlag & (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
            error: Error()
          }), PropItemPrefab) : PropItemPrefab).Type_UnWear) {
            this.btnWear.getChildByName("Label").getComponent(Label).string = "卸下";
            this.btnWear.on(Node.EventType.TOUCH_END, this.unWearProp, this);
            this.setSpriteFrame2(this.btnWear, "btnres/btn_purple", null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.common);
          } else {
            this.btnWear.active = false;
          }

          var suitId = propData.suit_id;

          if (suitId) {
            this.suitNode.active = true;
            var suitData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.suit, suitId);
            this.suitNameLab.string = suitData.name;
            var suitNum = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().getSuitNum(propData);
            this.suitNum.string = "(" + suitNum + "/5)";

            var getColor = function getColor(num, color1, color2, str) {
              var color = suitNum >= num ? color1 : color2;
              return "<color=" + color + ">" + str + "</color>";
            };

            var atkStr3 = "";

            if (suitData.effectAtk_3 > 0) {
              atkStr3 += getColor(3, "#ffffff", "#4c5061", "攻击") + getColor(3, "#1096fd", "#4c5061", " +" + suitData.effectAtk_3 + "%");
            }

            if (suitData.effectHP_3 > 0) {
              if (atkStr3 != "") {
                atkStr3 += " ";
              }

              atkStr3 += getColor(3, "#ffffff", "#4c5061", "血量") + getColor(3, "#38ff38", "#4c5061", " +" + suitData.effectHP_3 + "%");
            }

            this.suitAttr3.string = atkStr3;
            var atkStr5 = "";

            if (suitData.effectAtk_5 > 0) {
              atkStr5 += getColor(5, "#ffffff", "#4c5061", "攻击") + getColor(5, "#1096fd", "#4c5061", " +" + suitData.effectAtk_5 + "%");
            }

            if (suitData.effectHP_5 > 0) {
              if (atkStr5 != "") {
                atkStr5 += " ";
              }

              atkStr5 += getColor(5, "#ffffff", "#4c5061", "血量") + getColor(5, "#38ff38", "#4c5061", " +" + suitData.effectHP_5 + "%");
            }

            this.suitAttr5.string = atkStr5;
          } else {
            this.suitNode.active = false;
          }
        }

        initBtnInfo() {}

        wearProp() {
          var propdata = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, this._propId);
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().setWearProp(propdata);
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).wearDrop);
          this.onClose();
        }

        unWearProp() {
          var propdata = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, this._propId);
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().unWearProp(propdata);
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).wearDrop);
          this.onClose();
        }

        onClose() {
          this.closeLayer();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "propItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnWear", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "attrIcon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "attrlabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "attrNumLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "propInfoLab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "propNameLab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "suitNameLab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "suitAttr3", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "suitAttr5", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "suitNum", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "suitNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=41e25d6d8fc4f7f7034dc7ba6d5798cdfc454837.js.map