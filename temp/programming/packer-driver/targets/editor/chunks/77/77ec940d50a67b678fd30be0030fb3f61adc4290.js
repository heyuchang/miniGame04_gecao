System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Label, Sprite, UITransform, v3, _decorator, myLog, constants, audioManager, designManager, BaseUILayer, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _crd, ccclass, property, PropItemPrefab;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../../common/myLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../../manager/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseUILayer(extras) {
    _reporterNs.report("BaseUILayer", "../layer/BaseUILayer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      constants = _unresolved_3.constants;
    }, function (_unresolved_4) {
      audioManager = _unresolved_4.audioManager;
    }, function (_unresolved_5) {
      designManager = _unresolved_5.designManager;
    }, function (_unresolved_6) {
      BaseUILayer = _unresolved_6.BaseUILayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b4670hainVGb5mnYowtXuj5", "PropItemPrefab", undefined);

      __checkObsolete__(['Node', 'Label', 'Sprite', 'UITransform', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PropItemPrefab", PropItemPrefab = (_dec = ccclass('PropItemPrefab'), _dec2 = property({
        type: Sprite,
        tooltip: "图标"
      }), _dec3 = property({
        type: Sprite,
        tooltip: "图标背景"
      }), _dec4 = property({
        type: Node,
        tooltip: "灰色遮罩"
      }), _dec5 = property({
        type: Sprite,
        tooltip: "图标背景"
      }), _dec6 = property({
        type: Label,
        tooltip: "数量"
      }), _dec(_class = (_class2 = (_class3 = class PropItemPrefab extends (_crd && BaseUILayer === void 0 ? (_reportPossibleCrUseOfBaseUILayer({
        error: Error()
      }), BaseUILayer) : BaseUILayer) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "icon", _descriptor, this);

          _initializerDefineProperty(this, "bg", _descriptor2, this);

          _initializerDefineProperty(this, "greybg", _descriptor3, this);

          _initializerDefineProperty(this, "typeIcon", _descriptor4, this);

          _initializerDefineProperty(this, "numLabel", _descriptor5, this);

          this._propId = 0;
          this._propFlag = 0;
        }

        // 展示类型图标
        start() {}

        get propId() {
          return this._propId;
        }

        setView(id, num, flag = 0) {
          this._propId = id;
          let propdata = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, id);
          let self = this;

          let fun = function (sprite) {
            self.setImageCustomSize(sprite, 95);
          };

          this.node.off(Node.EventType.TOUCH_END, this.openInfo, this);

          if (flag & PropItemPrefab.Type_UnKnow) {
            this.numLabel.string = "x??";
            this.setSpriteFrame2(this.icon.node, "prop/prop_unknow", fun, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.icon);
            this.greybg.active = false;
            this.typeIcon.node.active = false;
            return;
          }

          if (propdata) {
            let icon = "prop/" + propdata.icon;

            if (propdata.type == 11) {
              let weaponData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.weapon, propdata.weaponid);
              icon = "weapon/" + weaponData.icon;
            }

            this.setSpriteFrame2(this.bg.node, "prop/propbg" + propdata.quality, null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.icon);
            this.setSpriteFrame2(this.typeIcon.node, "prop/propType" + propdata.quality, null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.icon);
            this.setSpriteFrame2(this.icon.node, icon, fun, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.icon);

            if (!(flag & PropItemPrefab.Type_UnTouch) && (propdata.type == 8 || propdata.type == 11)) {
              this.node.on(Node.EventType.TOUCH_END, this.openInfo, this);
            }
          } else {
            this.setSpriteFrame2(this.bg.node, "heroLayer/propbg", null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.wwqVec);
            this.setSpriteFrame2(this.icon.node, "prop/prop_seat_" + num, fun, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.icon);
            this.numLabel.node.active = false;
            this.greybg.active = false;
            this.typeIcon.node.active = false;
            return;
          }

          if (flag & PropItemPrefab.Type_OnlyIcon) {
            this.bg.node.active = false;
            this.greybg.active = false;
            this.typeIcon.node.active = false;
            this.numLabel.node.active = false;
            return;
          }

          if (flag & PropItemPrefab.Type_BigIcon) {
            this.greybg.active = false;
            this.typeIcon.node.active = false;
            this.bg.node.active = false;
            this.node.scale = v3(3, 3, 3);
            this.numLabel.node.active = false;
            return;
          }

          this.numLabel.string = "X" + num;
          this._propFlag = flag; //  myLog.i("prop : ", this._propId, flag)

          if (flag & PropItemPrefab.Type_HideNum) {
            this.numLabel.node.active = false;
          }

          if (flag & PropItemPrefab.Type_Grey) {
            this.greybg.active = true;
          } else {
            this.greybg.active = false;
          }

          if (flag & PropItemPrefab.Type_ShowType) {
            this.typeIcon.node.active = true;
          } else {
            this.typeIcon.node.active = false;
          }
        }

        openInfo() {
          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i("点击装备");
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.PropInfoLayer, {
            propId: this._propId,
            flag: this._propFlag
          });
        }

        setScale(width) {
          let bgWidth = this.bg.getComponent(UITransform).width;
          let bgHeight = this.bg.getComponent(UITransform).height;
          let scale = width / bgWidth;
          this.node.scale = v3(scale, scale, 1);
          this.node.getComponent(UITransform).width = bgWidth * scale;
          this.node.getComponent(UITransform).height = bgHeight * scale;
        }

        changeBg(resPath, bundleName) {
          this.setSpriteFrame2(this.bg.node, resPath, null, bundleName);
        }

      }, _class3.Type_HideNum = 1, _class3.Type_UnWear = 1 << 1, _class3.Type_ToWear = 1 << 2, _class3.Type_Bless = 1 << 3, _class3.Type_UnTouch = 1 << 4, _class3.Type_Grey = 1 << 5, _class3.Type_ShowType = 1 << 6, _class3.Type_UnKnow = 1 << 7, _class3.Type_BigIcon = 1 << 8, _class3.Type_OnlyIcon = 1 << 9, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "greybg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "typeIcon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "numLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=77ec940d50a67b678fd30be0030fb3f61adc4290.js.map