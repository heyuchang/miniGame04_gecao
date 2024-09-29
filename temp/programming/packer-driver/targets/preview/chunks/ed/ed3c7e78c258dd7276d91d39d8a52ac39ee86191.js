System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, tween, Label, Sprite, _decorator, UITransform, v3, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, BtnLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      tween = _cc.tween;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7a63e1JJGZOm5XaOX2JTDIM", "BtnLayer", undefined);

      __checkObsolete__(['Component', 'tween', 'Label', 'Node', 'Sprite', '_decorator', 'UITransform', 'v3', 'Tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BtnLayer", BtnLayer = (_dec = ccclass('BtnLayer'), _dec2 = property({
        type: Label,
        tooltip: "发光"
      }), _dec(_class = (_class2 = class BtnLayer extends Component {
        constructor() {
          super(...arguments);
          this.bolInit = false;
          this.intCheckTime = 1;
          this.runTime = void 0;
          this.runTimeLast = void 0;
          this.tween = void 0;

          _initializerDefineProperty(this, "light", _descriptor, this);
        }

        onLoad() {
          this.bolInit = false;
          this.runTime = 0;
          this.runTimeLast = 0;
          this.intCheckTime = 1;
          this.tween = null;
          this.node.getChildByName("light").active = false;
        }

        setStart() {
          if (this.node.parent && this.tween == null) {
            this.runTime = 0;
            this.runTimeLast = 0;
            if (this.node.getComponent(Sprite).spriteFrame == null) this.node.getComponent(Sprite).spriteFrame = this.node.parent.getComponent(Sprite).spriteFrame;
            this.node.getComponent(UITransform).width = this.node.parent.getComponent(UITransform).width;
            this.node.getComponent(UITransform).height = this.node.parent.getComponent(UITransform).height; //光放大

            var nodeLight = this.node.getChildByName("light");
            var xscale = this.node.parent.getComponent(UITransform).width / nodeLight.getComponent(UITransform).width;
            var yscale = this.node.parent.getComponent(UITransform).height / nodeLight.getComponent(UITransform).height;
            var scale = Math.max(xscale, yscale);
            nodeLight.scale = v3(scale, scale, 1);
            this.node.getChildByName("light").active = true;
            this.tween = tween(nodeLight).show().set({
              position: v3(-(this.node.parent.getComponent(UITransform).width + nodeLight.getComponent(UITransform).width) * 0.5, 0)
            }).to(0.8, {
              position: v3((this.node.parent.getComponent(UITransform).width + nodeLight.getComponent(UITransform).width) * 0.5, 0, 0)
            }).hide().delay(0.2 + Math.random() * 0.5).union().repeatForever();
            this.tween.start();
          }
        }

        setStop() {
          if (this.tween) {
            this.tween.stop();
            this.tween = null;
            this.node.getChildByName("light").active = false;
            this.node.getChildByName("light").position = v3(-(this.node.parent.getComponent(UITransform).width + this.node.getChildByName("light").getComponent(UITransform).width) * 0.5, 0, 0);
          }
        }

        update(dt) {
          this.runTime += dt; // if(!this.bolInit)
          // {
          //     this.bolInit = true;
          //     this.setStart();
          // }

          if (this.runTime > this.intCheckTime) {
            this.runTime = 0;

            if (this.node.parent.getComponent(Sprite).color.toHEX("#rrggbb").toLowerCase() == "ffffff") {
              this.setStart();
            } else this.setStop();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "light", [_dec2], {
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
//# sourceMappingURL=ed3c7e78c258dd7276d91d39d8a52ac39ee86191.js.map