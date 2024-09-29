System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Toggle, audioManager, BaseUILayer, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, SettingLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../../manager/audioManager", _context.meta, extras);
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
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      audioManager = _unresolved_2.audioManager;
    }, function (_unresolved_3) {
      BaseUILayer = _unresolved_3.BaseUILayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7756A5YIhNEI1iqg1Luk/T", "SettingLayer", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SettingLayer", SettingLayer = (_dec = ccclass('SettingLayer'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = class SettingLayer extends (_crd && BaseUILayer === void 0 ? (_reportPossibleCrUseOfBaseUILayer({
        error: Error()
      }), BaseUILayer) : BaseUILayer) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "musicToggle", _descriptor, this);

          _initializerDefineProperty(this, "effectToggle", _descriptor2, this);
        }

        onLoad() {
          super.onLoad();
        }

        onDisable() {
          super.onDisable();
        }

        onDestroy() {
          super.onDestroy();
        }

        start() {
          let isMusic = (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).getMusiceVolume();
          let isEffect = (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).getEffectVolume(); // this.musicToggle.getComponent(Toggle).isChecked = isMusic > 0
          //  this.effectToggle.getComponent(Toggle).isChecked = isEffect > 0
          //this.musicToggle.getChildByName("Toggle1").getComponent(Toggle).isChecked == isMusic > 0
        }

        onMusicCheck() {
          console.log("onMusicCheck", this.musicToggle.getComponent(Toggle).isChecked); // let isMusic = audioManager.getMusiceVolume()
          // if (isMusic <= 0) {
          //     isMusic = 1
          // } else {
          //     isMusic = 0
          // }

          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).setMusicVolume(this.musicToggle.getComponent(Toggle).isChecked ? 1 : 0); //  this.musicToggle.getComponent(Toggle).isChecked = isMusic > 0
        }

        onSoundCheck() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).setEffectVolume(this.musicToggle.getComponent(Toggle).isChecked ? 1 : 0);
        }

        closeLayer() {
          super.closeLayer();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "musicToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "effectToggle", [_dec3], {
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
//# sourceMappingURL=b3e9d2a8fa0bff173d43fdbc87e8f7b15b9106a6.js.map