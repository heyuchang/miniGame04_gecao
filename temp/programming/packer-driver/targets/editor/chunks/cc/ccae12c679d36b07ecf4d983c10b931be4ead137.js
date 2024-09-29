System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Intersection2D, PhysicsSystem2D, _decorator, utilTools, BoxColliderUtil, PhysicsWorld, _crd, ccclass, property, physicsWorld;

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoxColliderUtil(extras) {
    _reporterNs.report("BoxColliderUtil", "./BoxColliderUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Intersection2D = _cc.Intersection2D;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      utilTools = _unresolved_2.utilTools;
    }, function (_unresolved_3) {
      BoxColliderUtil = _unresolved_3.BoxColliderUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3f2ff/lDDdLSruB5HOM+uuJ", "PhysicsWorld", undefined);

      __checkObsolete__(['Intersection2D', 'Node', 'PhysicsSystem2D', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      PhysicsWorld = class PhysicsWorld {
        constructor() {
          this.cellSize = 100;
          this.colliderArr = void 0;
          this.posToColliderArr = {};
        }

        static getInstance() {
          if (this._instance == null) {
            this._instance = new PhysicsWorld(); // myLog.i(PhysicsSystem2D.instance.collisionMatrix);
          }

          return this._instance;
        }

        getPosKey(x, y) {
          return "" + x + "_" + y;
        }

        forColliderRectKeyArr(collider, cb) {
          const rect = collider.worldAabb;
          let minX = Math.floor(rect.x / this.cellSize);
          let maxX = Math.ceil((rect.x + rect.width) / this.cellSize);
          let minY = Math.floor(rect.y / this.cellSize);
          let maxY = Math.ceil((rect.y + rect.height) / this.cellSize);

          for (let i = minX; i <= maxX; i++) {
            for (let j = minY; j <= maxY; j++) {
              let key = this.getPosKey(i, j);
              cb(key);
            }
          }
        }

        addIntoPosToColliderArr(collider) {
          this.forColliderRectKeyArr(collider, key => {
            let arr = this.posToColliderArr[key];

            if (!arr) {
              arr = [];
              this.posToColliderArr[key] = arr;
            }

            arr.push(collider);
          });
        }

        collectCollider(node) {
          if (!node.active || !node.activeInHierarchy) {
            return;
          }

          let arr = node.getComponents(_crd && BoxColliderUtil === void 0 ? (_reportPossibleCrUseOfBoxColliderUtil({
            error: Error()
          }), BoxColliderUtil) : BoxColliderUtil);
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(arr, collider => {
            if (!collider.enabled) {
              return;
            }

            collider.updateCollider();
            this.colliderArr.push(collider);
            this.addIntoPosToColliderArr(collider);
          });
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(node.children, ch => {
            this.collectCollider(ch);
          });
        }

        step(node) {
          this.colliderArr = [];
          this.posToColliderArr = {}; // 收集所有碰撞器信息

          this.collectCollider(node); // 开始碰撞检测

          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.colliderArr, collider => {
            this.forColliderRectKeyArr(collider, key => {
              let arr = this.posToColliderArr[key];

              if (!arr) {
                return;
              }

              (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).forArr(arr, otherCollider => {
                this.doIntersection(collider, otherCollider);
              });
            });
          });
        }

        doIntersection(collider1, collider2) {
          if (collider1 == collider2 || collider1.node == collider2.node) {
            return;
          }

          const collisionMatrix = PhysicsSystem2D.instance.collisionMatrix;

          if (collisionMatrix[collider1.group] & collider2.group && collisionMatrix[collider2.group] & collider1.group) {
            let ret = Intersection2D.polygonPolygon(collider1.worldPoints, collider2.worldPoints);

            if (ret) {
              // 开始碰撞
              collider1.contactBegin(collider2); // myLog.i(collider1.group, collider2.group, ret);
            } else {
              // 结束碰撞
              collider1.contactEnd(collider2);
            }
          }
        }

      };
      PhysicsWorld._instance = null;

      _export("physicsWorld", physicsWorld = PhysicsWorld.getInstance());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ccae12c679d36b07ecf4d983c10b931be4ead137.js.map