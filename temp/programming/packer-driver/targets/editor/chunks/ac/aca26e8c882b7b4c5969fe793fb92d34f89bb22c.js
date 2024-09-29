System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, _decorator, sdkManager, constants, audioManager, designManager, UserData, PropItemPrefab, BaseUILayer, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, RewardItemLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfsdkManager(extras) {
    _reporterNs.report("sdkManager", "../../../sdk/sdkManager", _context.meta, extras);
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

  function _reportPossibleCrUseOfPropItem(extras) {
    _reporterNs.report("PropItem", "../../model/UserData", _context.meta, extras);
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
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      sdkManager = _unresolved_2.sdkManager;
    }, function (_unresolved_3) {
      constants = _unresolved_3.constants;
    }, function (_unresolved_4) {
      audioManager = _unresolved_4.audioManager;
    }, function (_unresolved_5) {
      designManager = _unresolved_5.designManager;
    }, function (_unresolved_6) {
      UserData = _unresolved_6.UserData;
    }, function (_unresolved_7) {
      PropItemPrefab = _unresolved_7.PropItemPrefab;
    }, function (_unresolved_8) {
      BaseUILayer = _unresolved_8.BaseUILayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9da75dBS1FHWIYJMlL73pxg", "RewardItemLayer", undefined);

      __checkObsolete__(['Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RewardItemLayer", RewardItemLayer = (_dec = ccclass('RewardItemLayer'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = class RewardItemLayer extends (_crd && BaseUILayer === void 0 ? (_reportPossibleCrUseOfBaseUILayer({
        error: Error()
      }), BaseUILayer) : BaseUILayer) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "btnClose", _descriptor, this);

          _initializerDefineProperty(this, "propItem", _descriptor2, this);
        }

        onLoad() {
          super.onLoad();
        }

        onEnable() {
          let id = this.layerData.propId;
          let num = this.layerData.num;
          this.propItem.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
            error: Error()
          }), PropItemPrefab) : PropItemPrefab).setView(id, num, (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
            error: Error()
          }), PropItemPrefab) : PropItemPrefab).Type_UnTouch);
        }

        getRewardProp() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          let prop = {
            Id: this.layerData.propId,
            Num: this.layerData.num
          };
          let self = this;
          let propdata = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, this.layerData.propId);
          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).openAd("获得道具" + propdata.name, st => {
            if (st == 1) {
              (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().getRewardProp([prop]);
              self.closeLayer();
            }
          });
        }

        onDisable() {
          super.onDisable();
        }

        onDestroy() {
          super.onDestroy();
        }

        start() {}

        closeLayer() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          super.closeLayer();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "propItem", [_dec3], {
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
//# sourceMappingURL=aca26e8c882b7b4c5969fe793fb92d34f89bb22c.js.map