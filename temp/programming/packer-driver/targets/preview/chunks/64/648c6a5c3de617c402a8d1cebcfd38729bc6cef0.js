System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Texture2D, UIRenderer, Vec2, _decorator, Point, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _crd, ccclass, property, MotionStreakUtil;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Texture2D = _cc.Texture2D;
      UIRenderer = _cc.UIRenderer;
      Vec2 = _cc.Vec2;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd481rJ0FVFF62OVb/xaLFl", "MotionStreakUtil", undefined);

      __checkObsolete__(['Texture2D', 'UIRenderer', 'Vec2', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      Point = class Point {
        constructor(point, dir) {
          this.point = new Vec2();
          this.dir = new Vec2();
          this.distance = 0;
          this.time = 0;
          if (point) this.point.set(point);
          if (dir) this.dir.set(dir);
        }

        setPoint(x, y) {
          this.point.x = x;
          this.point.y = y;
        }

        setDir(x, y) {
          this.dir.x = x;
          this.dir.y = y;
        }

      };

      _export("MotionStreakUtil", MotionStreakUtil = (_dec = ccclass('MotionStreakUtil'), _dec2 = property(Texture2D), _dec(_class = (_class2 = (_class3 = class MotionStreakUtil extends UIRenderer {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "fadeTime", _descriptor, this);

          _initializerDefineProperty(this, "minSeg", _descriptor2, this);

          _initializerDefineProperty(this, "stroke", _descriptor3, this);

          _initializerDefineProperty(this, "texture", _descriptor4, this);

          _initializerDefineProperty(this, "fastMode", _descriptor5, this);

          this._points = [];
        }

        get points() {
          return this._points;
        }

        onLoad() {
          if (!this.texture) {// 动态加载拖尾纹理
          }
        }

        onEnable() {
          super.onEnable();
          this.reset();
        }

        _flushAssembler() {
          var assembler = MotionStreakUtil.Assembler.getAssembler(this);

          if (this._assembler !== assembler) {
            this._assembler = assembler;
          }

          if (!this.renderData) {
            if (this._assembler && this._assembler.createData) {
              this._renderData = this._assembler.createData(this);
              this.renderData.material = this.material;

              this._updateColor();
            }
          }
        }
        /**
         * @en Remove all living segments of the ribbon.
         * @zh 删除当前所有的拖尾片段。
         * @example
         * // Remove all living segments of the ribbon.
         * myMotionStreak.reset();
         */


        reset() {
          this._points.length = 0;
          if (this.renderData) this.renderData.clear();
        }

        lateUpdate(dt) {
          if (this._assembler) this._assembler.update(this, dt);
        }
        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */


        _render(render) {
          if (this.texture) {
            render.commitComp(this, this.renderData, this.texture, this._assembler, null);
          }
        }

      }, _class3.Point = Point, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fadeTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "minSeg", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "stroke", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "texture", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "fastMode", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=648c6a5c3de617c402a8d1cebcfd38729bc6cef0.js.map