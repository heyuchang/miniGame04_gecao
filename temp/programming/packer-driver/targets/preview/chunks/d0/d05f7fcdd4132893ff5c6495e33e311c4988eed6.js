System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Prefab, instantiate, v3, tween, Label, myLog, constants, audioManager, designManager, PropItemPrefab, BaseUILayer, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, BlessResultLayer;

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
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      tween = _cc.tween;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      constants = _unresolved_3.constants;
    }, function (_unresolved_4) {
      audioManager = _unresolved_4.audioManager;
    }, function (_unresolved_5) {
      designManager = _unresolved_5.designManager;
    }, function (_unresolved_6) {
      PropItemPrefab = _unresolved_6.PropItemPrefab;
    }, function (_unresolved_7) {
      BaseUILayer = _unresolved_7.BaseUILayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cec72TRsr9PIb7D7iP2MQX0", "BlessResultLayer", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Prefab', 'instantiate', 'v3', 'Button', 'tween', 'UIOpacity', 'UITransform', 'Label', 'RichText', 'Quat']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BlessResultLayer", BlessResultLayer = (_dec = ccclass('BlessResultLayer'), _dec2 = property({
        type: Node,
        tooltip: "道具选择容器"
      }), _dec3 = property({
        type: Node,
        tooltip: "道具结果容器"
      }), _dec4 = property({
        type: Prefab,
        tooltip: "道具节点"
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Label
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Label
      }), _dec9 = property({
        type: Label
      }), _dec10 = property({
        type: Label
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Node
      }), _dec(_class = (_class2 = class BlessResultLayer extends (_crd && BaseUILayer === void 0 ? (_reportPossibleCrUseOfBaseUILayer({
        error: Error()
      }), BaseUILayer) : BaseUILayer) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "propBlessLayer", _descriptor, this);

          _initializerDefineProperty(this, "BlessResultLayer", _descriptor2, this);

          _initializerDefineProperty(this, "propItem", _descriptor3, this);

          _initializerDefineProperty(this, "btnlayer", _descriptor4, this);

          _initializerDefineProperty(this, "propNameLab", _descriptor5, this);

          _initializerDefineProperty(this, "attrIcon", _descriptor6, this);

          _initializerDefineProperty(this, "attrlabel", _descriptor7, this);

          _initializerDefineProperty(this, "attrNumLab1", _descriptor8, this);

          _initializerDefineProperty(this, "attrNumLab", _descriptor9, this);

          _initializerDefineProperty(this, "attrNodebg", _descriptor10, this);

          _initializerDefineProperty(this, "title", _descriptor11, this);
        }

        onLoad() {
          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i("BlessResultLayer onLoad");
          this.fitNodeWidget(this.btnlayer, 0);
        }

        onEnable() {
          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i("BlessResultLayer onEnable");
          super.onEnable();
          var blessId = this.layerData.blessId;
          var getPropId = this.layerData.getPropId;

          for (var i = 0; i < 3; i++) {
            var item = instantiate(this.propItem);
            item.position = i == 2 ? v3(0, 0, 0) : v3(0, 10, 0);
            item.name = "prop";
            this.propBlessLayer[i].addChild(item);
            item.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setScale(120);
            item.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setView(blessId, 1, (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_HideNum | (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_UnTouch);
          }

          this.startAnimal();
          var propData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, blessId);
          var propData2 = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, getPropId);
          this.propNameLab.string = propData.name;

          if (propData.atk > 0) {
            this.setSpriteFrame2(this.attrIcon, "heroLayer/ui_gj", null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.wwqVec);
            this.attrNumLab.string = "+" + propData2.atk;
            this.attrNumLab.color = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).colors.blue.parseColor();
            this.attrlabel.string = "攻击";
            this.attrNumLab1.string = "" + propData.atk;
          } else if (propData.hp > 0) {
            this.attrNumLab.string = "+" + propData2.hp;
            this.setSpriteFrame2(this.attrIcon, "heroLayer/ui_sm", null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.wwqVec);
            this.attrlabel.string = "生命";
            this.attrNumLab.color = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).colors.green.parseColor();
            this.attrNumLab1.string = "" + propData.hp;
          }

          this.attrNodebg.active = false;
        }

        startAnimal() {
          // let quat: Quat = new Quat();
          // let quat2: Quat = new Quat();
          // Quat.fromEuler(quat, 0, 30, 0);
          // Quat.fromEuler(quat2, 0, -30, 0);
          tween(this.propBlessLayer[0]).delay(1).to(0.1, {
            position: v3(15, 268, 0)
          }).hide().start();
          tween(this.propBlessLayer[1]).delay(1).to(0.1, {
            position: v3(15, 268, 0)
          }).hide().start();
          var getPropId = this.layerData.getPropId;
          var item = this.propBlessLayer[2].getChildByName("prop");
          var self = this;
          tween(this.propBlessLayer[2]).delay(1).hide().delay(0.8).call(function () {
            item.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setView(getPropId, 1, (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_HideNum | (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_UnTouch);
            self.attrNodebg.active = true;
            self.btnlayer.active = true;
          }).show().set({
            scale: v3(0, 0, 0)
          }).to(0.2, {
            scale: v3(1, 1, 1)
          }).start();
          tween(this.attrNodebg).delay(1.8).to(0.1, {
            scale: v3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).start();
          tween(this.attrIcon).hide().delay(1.9).show().start();
          tween(this.propNameLab.node).hide().delay(1.9).show().start();
          tween(this.attrNumLab.node).hide().delay(2.1).show().start();
          tween(this.attrNumLab1.node).hide().delay(2.1).show().start();
          tween(this.title).hide().delay(1.7).show().start(); // tween(this.propBlessLayer[0]).to(0.2, { rotation:quat}).to(0.2, { rotation:quat2}).to(0.2, { rotation:quat}).to(0.2, { rotation:quat2}).to(0.3,{position:v3(15,268, 0)}).start()
          // tween(this.propBlessLayer[1]).to(0.2, { rotation:quat}).to(0.2, { rotation:quat2}).to(0.2, { rotation:quat}).to(0.2, { rotation:quat2}).to(0.3,{position:v3(15,268, 0)}).start()
        }

        onDisable() {
          super.onDisable();
        }

        onDestroy() {
          super.onDestroy();
        }

        start() {
          this.btnlayer.active = false;
        }

        closeBless() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.closeLayer();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "propBlessLayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BlessResultLayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "propItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnlayer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "propNameLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "attrIcon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "attrlabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "attrNumLab1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "attrNumLab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "attrNodebg", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec12], {
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
//# sourceMappingURL=d05f7fcdd4132893ff5c6495e33e311c4988eed6.js.map