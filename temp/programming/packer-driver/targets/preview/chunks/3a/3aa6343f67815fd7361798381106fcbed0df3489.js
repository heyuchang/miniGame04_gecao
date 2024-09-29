System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, Node, Prefab, UITransform, _decorator, cocosUtil, utilTools, constants, designManager, resManager, mapModel, physicsGroup, BaseLayer, NodePoolUtil, Bullet, _dec, _class, _crd, ccclass, property, BulletSystem;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresManager(extras) {
    _reporterNs.report("resManager", "../../manager/resManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphysicsGroup(extras) {
    _reporterNs.report("physicsGroup", "../../other/physicsGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../base/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodePoolUtil(extras) {
    _reporterNs.report("NodePoolUtil", "../base/NodePoolUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../item/bullet/Bullet", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      utilTools = _unresolved_3.utilTools;
    }, function (_unresolved_4) {
      constants = _unresolved_4.constants;
    }, function (_unresolved_5) {
      designManager = _unresolved_5.designManager;
    }, function (_unresolved_6) {
      resManager = _unresolved_6.resManager;
    }, function (_unresolved_7) {
      mapModel = _unresolved_7.mapModel;
    }, function (_unresolved_8) {
      physicsGroup = _unresolved_8.physicsGroup;
    }, function (_unresolved_9) {
      BaseLayer = _unresolved_9.BaseLayer;
    }, function (_unresolved_10) {
      NodePoolUtil = _unresolved_10.NodePoolUtil;
    }, function (_unresolved_11) {
      Bullet = _unresolved_11.Bullet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9db09W/rHhFgJ7o4TJVZW7b", "BulletSystem", undefined);

      __checkObsolete__(['find', 'Node', 'Prefab', 'UITransform', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletSystem", BulletSystem = (_dec = ccclass('BulletSystem'), _dec(_class = class BulletSystem extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          this.idBulletLayerObj = {};
          this.bulletLayer = void 0;
          this.bulletLayer2 = void 0;
          this.waitAddArr = [];
        }

        onLoad() {
          super.onLoad();
          this.bulletLayer = this.node;
          this.bulletLayer2 = find("bulletLayer2", this.node.parent);
        }

        onEnable() {
          super.onEnable();
        }

        onDestroy() {
          super.onDestroy();
        }

        getBulletLayerNameById(id) {
          return "bulletLayer" + id;
        }

        getBulletLayerById(id) {
          var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.bullet, id);
          var bulletLayer = this.idBulletLayerObj[id];

          if (!bulletLayer) {
            bulletLayer = new Node(this.getBulletLayerNameById(id));
            bulletLayer.addComponent(UITransform);
            bulletLayer.setPosition(0, 0);

            switch (row.prefab) {
              case "bullet1042": // 油桶燃烧-普通

              case "bullet1044": // 油桶燃烧-高级

              case "bullet1071": // 力场

              case "bullet10200":
                // 泥浆
                bulletLayer.parent = this.bulletLayer2;
                break;

              default:
                bulletLayer.parent = this.bulletLayer;
                break;
            }

            this.idBulletLayerObj[id] = bulletLayer;
            var nodePoolUtil = bulletLayer.addComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
              error: Error()
            }), NodePoolUtil) : NodePoolUtil);
            nodePoolUtil.init((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).bulletPrefabObj[row.prefab]);
          }

          return bulletLayer;
        }

        loadBulletPrefab(path) {
          return new Promise((resolve, reject) => {
            (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
              error: Error()
            }), resManager) : resManager).loadAsset((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.bullet, path, Prefab, null, (err, prefab) => {
              if (err) {
                reject();
                return;
              }

              resolve(prefab);
            });
          });
        }

        addBullet(id, group, startWorldPos, direction, extraObj) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var nodePoolUtil = _this.getBulletLayerById(id).getComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
              error: Error()
            }), NodePoolUtil) : NodePoolUtil);

            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.bullet, id);

            var tmpFunc = () => {
              if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).isValid(nodePoolUtil)) {
                return;
              }

              if (!nodePoolUtil.itemNode) {
                nodePoolUtil.init((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).bulletPrefabObj[row.prefab]);
              }

              if (!nodePoolUtil.node.activeInHierarchy) {
                var _bullet = {};
                _bullet.id = id;
                _bullet.group = group;
                _bullet.startWorldPos = startWorldPos;
                _bullet.direction = direction;
                _bullet.extraObj = extraObj;

                _this.waitAddArr.push(_bullet);

                return;
              }

              var bulletNode = nodePoolUtil.getNode();
              var bullet = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).addComponentOnce(bulletNode, _crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
                error: Error()
              }), Bullet) : Bullet);
              bullet.init(id, group, startWorldPos, direction, extraObj);
            };

            if (!(_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).bulletPrefabObj[row.prefab]) {
              var prefab = yield _this.loadBulletPrefab(row.prefab);
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).bulletPrefabObj[row.prefab] = prefab;
            }

            tmpFunc();
          })();
        } // 遍历屏幕范围内的怪物子弹


        forVisibleMonsterBullet(cb) {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.node.children, bulletLayer => {
            (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).forArr(bulletLayer.children, bulletNode => {
              if (!bulletNode.active) {
                return;
              }

              if (!(_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).isInScreenVisible(bulletNode)) {
                return;
              }

              var bullet = bulletNode.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
                error: Error()
              }), Bullet) : Bullet);

              if (bullet.collider && bullet.collider.group == (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
                error: Error()
              }), physicsGroup) : physicsGroup).MONSTER_BULLET) {
                cb(bullet);
              }
            });
          });
        }

        recycleAllBulletNodeById(id) {
          var name = this.getBulletLayerNameById(id);
          var bulletLayer = find(name, this.bulletLayer);

          if (bulletLayer) {
            (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).forArr(bulletLayer.children, node => {
              node.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
                error: Error()
              }), Bullet) : Bullet).recycleSelf();
            });
          }

          bulletLayer = find(name, this.bulletLayer2);

          if (bulletLayer) {
            (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).forArr(bulletLayer.children, node => {
              node.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
                error: Error()
              }), Bullet) : Bullet).recycleSelf();
            });
          }
        }

        recycleBulletNode(bulletNode) {
          var bullet = bulletNode.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          var nodePoolUtil = this.getBulletLayerById(bullet.id).getComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
            error: Error()
          }), NodePoolUtil) : NodePoolUtil);
          nodePoolUtil.recycleNode(bulletNode);
        }

        updateLogic(dt) {
          var bullet = this.waitAddArr.shift();

          if (bullet) {
            this.addBullet(bullet.id, bullet.group, bullet.startWorldPos, bullet.direction, bullet.extraObj);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3aa6343f67815fd7361798381106fcbed0df3489.js.map