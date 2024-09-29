System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BoxCollider2D, Component, Enum, Rect, Size, Vec2, _decorator, EDITOR, physicsGroup, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, executeInEditMode, BoxColliderUtil;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfphysicsGroup(extras) {
    _reporterNs.report("physicsGroup", "../other/physicsGroup", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      BoxCollider2D = _cc.BoxCollider2D;
      Component = _cc.Component;
      Enum = _cc.Enum;
      Rect = _cc.Rect;
      Size = _cc.Size;
      Vec2 = _cc.Vec2;
      _decorator = _cc._decorator;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      physicsGroup = _unresolved_2.physicsGroup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "83984O8uZdGNKPCi1VRIjBN", "BoxColliderUtil", undefined);

      __checkObsolete__(['BoxCollider2D', 'Component', 'Enum', 'Rect', 'Size', 'Vec2', '_decorator']);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("BoxColliderUtil", BoxColliderUtil = (_dec = ccclass('BoxColliderUtil'), _dec2 = executeInEditMode(true), _dec3 = property({
        type: Enum(_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
          error: Error()
        }), physicsGroup) : physicsGroup)
      }), _dec(_class = _dec2(_class = (_class2 = class BoxColliderUtil extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_offset", _descriptor, this);

          _initializerDefineProperty(this, "_size", _descriptor2, this);

          _initializerDefineProperty(this, "tag", _descriptor3, this);

          _initializerDefineProperty(this, "group", _descriptor4, this);

          _initializerDefineProperty(this, "isSync", _descriptor5, this);

          this.worldPoints = [new Vec2(), new Vec2(), new Vec2(), new Vec2()];
          this.worldAabb = new Rect();
          this.contactColliderObj = {};
          this.contactBeginCb = void 0;
          this.contactEndCb = void 0;
        }

        get offset() {
          return this._offset;
        }

        set offset(v) {
          this._offset = v;
        }

        get size() {
          return this._size;
        }

        set size(v) {
          this._size = v;
        }

        onDisable() {
          // 通知碰撞中的碰撞结束了
          for (var i in this.contactColliderObj) {
            var collider = this.contactColliderObj[i];

            if (!collider) {
              continue;
            }

            this.contactEnd(collider);
          }
        }

        getContactKey(collider) {
          return this.uuid + "_" + collider.uuid;
        }

        updateCollider() {
          var aabb = this.worldAabb;
          aabb.x = this.offset.x - this.size.width * 0.5;
          aabb.y = this.offset.y - this.size.height * 0.5;
          aabb.width = this.size.width;
          aabb.height = this.size.height;
          var wp0 = this.worldPoints[0];
          var wp1 = this.worldPoints[1];
          var wp2 = this.worldPoints[2];
          var wp3 = this.worldPoints[3];
          aabb.transformMat4ToPoints(this.node.worldMatrix, wp0, wp1, wp2, wp3);
          var minX = Math.min(wp0.x, wp1.x, wp2.x, wp3.x);
          var maxX = Math.max(wp0.x, wp1.x, wp2.x, wp3.x);
          var minY = Math.min(wp0.y, wp1.y, wp2.y, wp3.y);
          var maxY = Math.max(wp0.y, wp1.y, wp2.y, wp3.y);
          aabb.x = minX;
          aabb.y = minY;
          aabb.width = maxX - minX;
          aabb.height = maxY - minY;
        }

        setContactBegin(cb) {
          this.contactBeginCb = cb;
        }

        setContactEnd(cb) {
          this.contactEndCb = cb;
        }

        contactBegin(collider) {
          var key1 = this.getContactKey(collider);
          var key2 = collider.getContactKey(this);

          if (!this.contactColliderObj[key1]) {
            this.contactColliderObj[key1] = collider;

            if (this.contactBeginCb) {
              this.contactBeginCb(this, collider);
            }
          }

          if (!collider.contactColliderObj[key2]) {
            collider.contactColliderObj[key2] = this;

            if (collider.contactBeginCb) {
              collider.contactBeginCb(collider, this);
            }
          }
        }

        contactEnd(collider) {
          var key1 = this.getContactKey(collider);
          var key2 = collider.getContactKey(this);
          var collider1 = this.contactColliderObj[key1];

          if (collider1 && collider1 == collider) {
            this.contactColliderObj[key1] = undefined;

            if (this.contactEndCb) {
              this.contactEndCb(this, collider);
            }
          }

          var collider2 = collider.contactColliderObj[key2];

          if (collider2 && collider2 == this) {
            collider.contactColliderObj[key2] = undefined;

            if (collider.contactEndCb) {
              collider.contactEndCb(collider, this);
            }
          }
        }

        update() {
          // @ts-ignore
          if (!EDITOR || cc.GAME_VIEW) {
            return;
          }

          if (!this.isSync) {
            return;
          }

          var boxCollider = null;
          var colliderArr = this.getComponents(BoxCollider2D);

          for (var i = 0; i < colliderArr.length; i++) {
            var collider = colliderArr[i];

            if (collider.tag == this.tag) {
              boxCollider = collider;
              break;
            }
          }

          if (!boxCollider) {
            return;
          }

          this.offset.x = boxCollider.offset.x;
          this.offset.y = boxCollider.offset.y;
          this.size.width = boxCollider.size.width;
          this.size.height = boxCollider.size.height;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_offset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2();
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "offset", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "offset"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_size", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Size(1, 1);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "size", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "size"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tag", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "group", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).DEFAULT;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "isSync", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=59e313e90ead058a3502696157264e031d9b2f0a.js.map