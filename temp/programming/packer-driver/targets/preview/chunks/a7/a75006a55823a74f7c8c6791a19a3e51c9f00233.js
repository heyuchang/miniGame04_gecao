System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, macro, Node, Prefab, sp, UITransform, v3, _decorator, cocosUtil, utilTools, audioManager, AnimationCtrl, PropItemPrefab, BaseUILayer, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, RewardLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../../manager/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationCtrl(extras) {
    _reporterNs.report("AnimationCtrl", "../base/AnimationCtrl", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      macro = _cc.macro;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      sp = _cc.sp;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      utilTools = _unresolved_3.utilTools;
    }, function (_unresolved_4) {
      audioManager = _unresolved_4.audioManager;
    }, function (_unresolved_5) {
      AnimationCtrl = _unresolved_5.AnimationCtrl;
    }, function (_unresolved_6) {
      PropItemPrefab = _unresolved_6.PropItemPrefab;
    }, function (_unresolved_7) {
      BaseUILayer = _unresolved_7.BaseUILayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "beb79qFxopP26nxiIZWSe0F", "RewardLayer", undefined);

      __checkObsolete__(['instantiate', 'macro', 'Node', 'Prefab', 'sp', 'UITransform', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RewardLayer", RewardLayer = (_dec = ccclass('RewardLayer'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = class RewardLayer extends (_crd && BaseUILayer === void 0 ? (_reportPossibleCrUseOfBaseUILayer({
        error: Error()
      }), BaseUILayer) : BaseUILayer) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "propItem", _descriptor, this);

          _initializerDefineProperty(this, "listLayer", _descriptor2, this);

          _initializerDefineProperty(this, "yanhua", _descriptor3, this);
        }

        onLoad() {
          super.onLoad();
        }

        onEnable() {
          super.onEnable();
          this.showReward();
          this.showYanhua();
        }

        showReward() {
          var arr = this.layerData.propArr;
          var self = this;

          if (!this.layerData.notMoveAni) {
            this.scheduleOnce(function () {
              self.showGetReward(arr);
            }, 0.5);
          }

          this.listLayer.getComponent(UITransform).width = Math.min(135 * arr.length, 675);

          for (var index = 0; index < arr.length; index++) {
            var element = arr[index]; //  UserData.getInstance().getRewardProp([propdata])

            var propItem = instantiate(this.propItem);
            this.listLayer.addChild(propItem);
            propItem.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setView(element.Id, element.Num, (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_UnTouch);
            propItem.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setScale(120);
          }
        }

        showYanhua() {
          // 放烟花
          var posArr = [v3(-100, 200, 0), v3(0, -100, 0), v3(150, -250, 0), v3(300, -500, 0), v3(100, -450, 0)];
          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).schedule(this, () => {
            if (posArr.length <= 0) {
              return;
            }

            var skinName = Math.random() > 0.5 ? "huang" : "lan";
            var scale = 0.8 + Math.random() * 0.2;
            var pos = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).getRandomItemByArr(posArr, true);
            var fireNode = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).instantiate(this.yanhua);
            fireNode.parent = this.node;
            fireNode.active = true;
            fireNode.position = pos;
            fireNode.scale = v3(scale, scale, 1);
            fireNode.getComponent(sp.Skeleton).setSkin(skinName);
            var aniCtrl = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).addComponentOnce(fireNode, _crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
              error: Error()
            }), AnimationCtrl) : AnimationCtrl);
            aniCtrl.playAnimationOnce("animation", () => {
              fireNode.parent = null;
            });
          }, 1.5, macro.REPEAT_FOREVER, 0, true);
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "propItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "listLayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "yanhua", [_dec4], {
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
//# sourceMappingURL=a75006a55823a74f7c8c6791a19a3e51c9f00233.js.map