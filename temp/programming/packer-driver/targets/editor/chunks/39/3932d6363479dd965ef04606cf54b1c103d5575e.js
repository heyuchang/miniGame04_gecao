System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Material, sp, UIRenderer, v4, _decorator, constants, resManager, _dec, _class, _crd, ccclass, property, ShineColor;

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresManager(extras) {
    _reporterNs.report("resManager", "../../manager/resManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Material = _cc.Material;
      sp = _cc.sp;
      UIRenderer = _cc.UIRenderer;
      v4 = _cc.v4;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      constants = _unresolved_2.constants;
    }, function (_unresolved_3) {
      resManager = _unresolved_3.resManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "51f17l4w0hAfKBU6Sgpl5Cc", "ShineColor", undefined);

      __checkObsolete__(['Color', 'Component', 'Material', 'sp', 'UIRenderer', 'v4', 'Vec4', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShineColor", ShineColor = (_dec = ccclass('ShineColor'), _dec(_class = class ShineColor extends Component {
        constructor(...args) {
          super(...args);
          this.duration = 0.3;
          this._median = 0;
          this._time = 0;
          this.isSpine = false;
          this.uiRenderer = void 0;
          this.orignMaterial = void 0;
          this.vColor = void 0;
        }

        onLoad() {
          this.uiRenderer = this.node.getComponent(UIRenderer);
          this.orignMaterial = this.uiRenderer.customMaterial;

          if (this.node.getComponent(sp.Skeleton)) {
            this.isSpine = true;
          }
        }

        setMaterialProperty(val) {
          if (this.isSpine) {
            // @ts-ignore 
            let cache = this.uiRenderer._materialCache;

            for (let i in cache) {
              let material = cache[i];
              material.setProperty("u_rate", val);

              if (this.vColor) {
                material.setProperty("u_color", this.vColor);
              }
            }

            return;
          }

          let material = this.uiRenderer.getMaterialInstance(0);
          let uRate = material.passes[0].getHandle("u_rate");
          material.passes[0].setUniform(uRate, val);

          if (this.vColor) {
            let vColor = v4(1, 0, 0, 1);
            let uColor = material.passes[0].getHandle("u_color");
            material.passes[0].setUniform(uColor, this.vColor);
          }

          this.uiRenderer.setMaterialInstance(material, 0);
        }

        update(dt) {
          if (this._time > 0) {
            this._time -= dt;
            this._time = this._time < 0 ? 0 : this._time;
            let rate = Math.abs(this._time - this._median) * 2 / this.duration;
            this.setMaterialProperty(rate);
          } else {
            this.removeShineColorMaterial();
          }
        }

        removeShineColorMaterial() {
          this.uiRenderer.customMaterial = this.orignMaterial;

          if (this.isSpine) {
            // spine动画，需要重新激活，否则替换材质后会不显示
            this.uiRenderer.enabled = false;
            this.uiRenderer.enabled = true;
          }
        }
        /**
         * 闪颜色
         * @param materialPath 材质路径 
         * @param color 闪的颜色
         * @param duration 闪的时间
         */


        startShine(materialPath, color, duration = 0.3) {
          this.duration = duration;
          this._median = this.duration / 2;

          if (color) {
            this.vColor = v4(color.r / 255, color.g / 255, color.b / 255, color.a / 255);
          } else {
            // 默认闪白
            this.vColor = v4(1, 1, 1, 1);
          }

          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadAsset((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.common, materialPath, Material, null, (err, material) => {
            this._time = this.duration;
            this.uiRenderer.customMaterial = material;
            this.setMaterialProperty(1);
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3932d6363479dd965ef04606cf54b1c103d5575e.js.map