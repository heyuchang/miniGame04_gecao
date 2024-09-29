System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, instantiate, Node, Prefab, Sprite, v3, _decorator, sdkManager, constants, designManager, UserData, PropItemPrefab, BaseUILayer, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, RewardRedBoxLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfsdkManager(extras) {
    _reporterNs.report("sdkManager", "../../../sdk/sdkManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
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
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      sdkManager = _unresolved_2.sdkManager;
    }, function (_unresolved_3) {
      constants = _unresolved_3.constants;
    }, function (_unresolved_4) {
      designManager = _unresolved_4.designManager;
    }, function (_unresolved_5) {
      UserData = _unresolved_5.UserData;
    }, function (_unresolved_6) {
      PropItemPrefab = _unresolved_6.PropItemPrefab;
    }, function (_unresolved_7) {
      BaseUILayer = _unresolved_7.BaseUILayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "51b53hI06BLVL3P2aPng4a3", "RewardRedBoxLayer", undefined);

      __checkObsolete__(['Button', 'instantiate', 'Node', 'Prefab', 'Sprite', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RewardRedBoxLayer", RewardRedBoxLayer = (_dec = ccclass('RewardRedBoxLayer'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class RewardRedBoxLayer extends (_crd && BaseUILayer === void 0 ? (_reportPossibleCrUseOfBaseUILayer({
        error: Error()
      }), BaseUILayer) : BaseUILayer) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "itemProp", _descriptor, this);

          _initializerDefineProperty(this, "proplayer", _descriptor2, this);

          _initializerDefineProperty(this, "propItem", _descriptor3, this);
        }

        onLoad() {}

        onDisable() {
          super.onDisable();
        }

        onDestroy() {
          super.onDestroy();
        }

        start() {
          this.initList();
          this.itemProp.active = false;
        }

        initList() {
          let propArr = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowsByType((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.CNTM, 1);
          this.proplayer.removeAllChildren();

          for (let i = 0; i < propArr.length; i++) {
            let data = propArr[i].award[0];
            let item = instantiate(this.itemProp);
            item.position = v3(0, 0, 0);
            item.active = true;
            this.proplayer.addChild(item);
            let propItem = instantiate(this.propItem);
            propItem.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setView(data[0], 0, (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_UnTouch | (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_HideNum);
            propItem.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).changeBg("activityRes/itembg", (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.wwqVec);
            propItem.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setScale(99);
            item.addChild(propItem);
            propItem.position = v3(0, -20, 0);
            this.addButtonHander(item.getChildByName("btnGet"), this.node, "RewardRedBoxLayer", "onClickVideoGet", data[0]);

            if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().isHaveProp(data[0])) {
              item.getChildByName("btnGet").getComponent(Sprite).grayscale = true;
              item.getChildByName("btnGet").getComponent(Button).interactable = false;
            }
          }
        }

        onClickVideoGet(event, data) {
          console.log("onClickVideoGet = ", data);
          let self = this;
          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).openAd("领取皮肤", function (st) {
            if (st == 1) {
              let propItem = {
                Id: data,
                Num: 1
              };
              (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().getRewardProp([propItem]);
              self.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).layers.RewardLayer, {
                propArr: [propItem]
              });
              self.initList();
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemProp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "proplayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "propItem", [_dec4], {
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
//# sourceMappingURL=e0b9e3840049048009bbcdcabd7bf84bb9c1f6af.js.map