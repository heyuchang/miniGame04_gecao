System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, Node, Prefab, UITransform, _decorator, cocosUtil, utilTools, constants, designManager, resManager, mapModel, physicsGroup, BaseLayer, NodePoolUtil, Bullet, _dec, _class, _crd, ccclass, property, BulletSystem;

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
        constructor(...args) {
          super(...args);
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
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.bullet, id);
          let bulletLayer = this.idBulletLayerObj[id];

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
            let nodePoolUtil = bulletLayer.addComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
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

        async addBullet(id, group, startWorldPos, direction, extraObj) {
          let nodePoolUtil = this.getBulletLayerById(id).getComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
            error: Error()
          }), NodePoolUtil) : NodePoolUtil);
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.bullet, id);

          let tmpFunc = () => {
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
              let bullet = {};
              bullet.id = id;
              bullet.group = group;
              bullet.startWorldPos = startWorldPos;
              bullet.direction = direction;
              bullet.extraObj = extraObj;
              this.waitAddArr.push(bullet);
              return;
            }

            let bulletNode = nodePoolUtil.getNode();
            let bullet = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).addComponentOnce(bulletNode, _crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
              error: Error()
            }), Bullet) : Bullet);
            bullet.init(id, group, startWorldPos, direction, extraObj);
          };

          if (!(_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).bulletPrefabObj[row.prefab]) {
            let prefab = await this.loadBulletPrefab(row.prefab);
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).bulletPrefabObj[row.prefab] = prefab;
          }

          tmpFunc();
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

              let bullet = bulletNode.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
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
          let name = this.getBulletLayerNameById(id);
          let bulletLayer = find(name, this.bulletLayer);

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
          let bullet = bulletNode.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          let nodePoolUtil = this.getBulletLayerById(bullet.id).getComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
            error: Error()
          }), NodePoolUtil) : NodePoolUtil);
          nodePoolUtil.recycleNode(bulletNode);
        }

        updateLogic(dt) {
          let bullet = this.waitAddArr.shift();

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
//# sourceMappingURL=cf0210966ae3f00a22c128f93fd2d38d5039978f.js.map