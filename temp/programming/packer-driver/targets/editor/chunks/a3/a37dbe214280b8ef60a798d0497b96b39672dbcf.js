System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Prefab, UITransform, Vec2, _decorator, cocosUtil, utilTools, constants, designManager, resManager, mapModel, UserData, BaseLayer, NodePoolUtil, Prop, _dec, _class, _crd, ccclass, property, PropSystem;

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

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../../model/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../base/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodePoolUtil(extras) {
    _reporterNs.report("NodePoolUtil", "../base/NodePoolUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProp(extras) {
    _reporterNs.report("Prop", "../item/prop/Prop", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
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
      UserData = _unresolved_8.UserData;
    }, function (_unresolved_9) {
      BaseLayer = _unresolved_9.BaseLayer;
    }, function (_unresolved_10) {
      NodePoolUtil = _unresolved_10.NodePoolUtil;
    }, function (_unresolved_11) {
      Prop = _unresolved_11.Prop;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da5bcFxzQ1DAoJmyXVA6IfZ", "PropSystem", undefined);

      __checkObsolete__(['Node', 'Prefab', 'UITransform', 'Vec2', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PropSystem", PropSystem = (_dec = ccclass('PropSystem'), _dec(_class = class PropSystem extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor(...args) {
          super(...args);
          this.idPropLayerObj = {};
          this.idPrefabObj = {};
        }

        onLoad() {
          super.onLoad();
        }

        onEnable() {
          super.onEnable();
        }

        onDestroy() {
          super.onDestroy();
        }

        getPropLayerNameById(id) {
          return "propLayer" + id;
        }

        getPropLayerById(id) {
          let propLayer = this.idPropLayerObj[id];

          if (!propLayer) {
            propLayer = new Node(this.getPropLayerNameById(id));
            propLayer.addComponent(UITransform);
            propLayer.setPosition(0, 0);
            propLayer.parent = this.node;
            this.idPropLayerObj[id] = propLayer;
            let nodePoolUtil = propLayer.addComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
              error: Error()
            }), NodePoolUtil) : NodePoolUtil);
            nodePoolUtil.init(this.idPrefabObj[id]);
          }

          return propLayer;
        }

        saveDataBefore() {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.node.children, propLayer => {
            let nodePoolUtil = propLayer.getComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
              error: Error()
            }), NodePoolUtil) : NodePoolUtil);
            nodePoolUtil.forEachUseNode(node => {
              let prop = node.getComponent(_crd && Prop === void 0 ? (_reportPossibleCrUseOfProp({
                error: Error()
              }), Prop) : Prop);

              if (prop.id == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).propIds.boxMonsterCoin) {
                prop.playerGetProp();
                return;
              }
            });
          });
        }

        getSaveData() {
          let propData = {};
          propData.arr = [];
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.node.children, propLayer => {
            let nodePoolUtil = propLayer.getComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
              error: Error()
            }), NodePoolUtil) : NodePoolUtil);
            nodePoolUtil.forEachUseNode(node => {
              let prop = node.getComponent(_crd && Prop === void 0 ? (_reportPossibleCrUseOfProp({
                error: Error()
              }), Prop) : Prop);

              if (prop.id == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).propIds.boxMonsterCoin) {
                prop.playerGetProp();
                return;
              }

              let info = {};
              info.id = prop.id;
              info.worldPos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).convertToWorldSpace(node);
              info.extraObj = prop.extraObj;
              propData.arr.push(info);
            });
          });
          return propData;
        }

        loadSaveData(data) {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(data.arr, prop => {
            this.addProp(prop.id, prop.worldPos, prop.extraObj);
          });
        }

        addProp(id, worldPos, extraObj) {
          let nodePoolUtil = this.getPropLayerById(id).getComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
            error: Error()
          }), NodePoolUtil) : NodePoolUtil);

          let tmpFunc = () => {
            let propNode = nodePoolUtil.getNode();
            let prop = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).addComponentOnce(propNode, _crd && Prop === void 0 ? (_reportPossibleCrUseOfProp({
              error: Error()
            }), Prop) : Prop);
            prop.init(id, worldPos, extraObj);
          };

          if (!this.idPrefabObj[id]) {
            let name = "prop" + id;
            (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
              error: Error()
            }), resManager) : resManager).loadAsset((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.prefab, "prop/" + name + "/" + name, Prefab, null, (err, prefab) => {
              if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).isValid(this)) {
                return;
              }

              this.idPrefabObj[id] = prefab;
              nodePoolUtil.init(prefab);
              tmpFunc();
            });
            return;
          }

          tmpFunc();
        } // 玩家获得道具


        getProp(id, num = 1, extraObj) {
          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.hp <= 0) {
            return;
          }

          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, id);

          switch (id) {
            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.exp:
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).mapSystem.addExp(num + (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).skillSystem.getSkill2AddExp());
              break;

            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.coin:
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).mapSystem.addCoin(num + (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).skillSystem.getSkill2AddCoin());
              break;

            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.magnet:
              // 磁铁-只吸经验
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).propSystem.forAllPropById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).propIds.exp, prop => {
                prop.contactPlayer();
              });
              break;

            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.addHpPercent:
              // 回血
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).player.addHpPercent(row.p1);
              break;

            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.bomb:
              // 炸弹
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).mapSystem.bomb();
              break;

            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.box2:
              // 水果机
              if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).player.hp > 0) {
                (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).mapLayer.popLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).layers.LuckyDrawLayer);
              }

              break;

            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.boxMonsterCoin:
              // 宝箱怪金币
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).mapSystem.addCoin(1);
              break;

            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.diamond:
              // 钻石，直接塞给玩家
              (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().useBaoShi(num, true);
              break;

            default:
              break;
          }

          if (row.type == 8 || row.type == 11) {
            // 装备
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).equipIdArr.push(id);
          }
        } // 遍历所有存在的指定道具id


        forAllPropById(propId, cb) {
          let layer = this.getPropLayerById(propId);
          let nodePoolUtil = layer.getComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
            error: Error()
          }), NodePoolUtil) : NodePoolUtil);
          nodePoolUtil.forEachUseNode(node => {
            let prop = node.getComponent(_crd && Prop === void 0 ? (_reportPossibleCrUseOfProp({
              error: Error()
            }), Prop) : Prop);

            if (prop.isFollowPlayer) {
              return;
            }

            cb(prop);
          });
        } // 遍历屏幕范围内的碰撞道具


        forVisiblePropCollider(cb) {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.node.children, propLayer => {
            (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).forArr(propLayer.children, propNode => {
              if (!propNode.active) {
                return;
              }

              if (!(_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).isInScreenVisible(propNode)) {
                return;
              }

              let prop = propNode.getComponent(_crd && Prop === void 0 ? (_reportPossibleCrUseOfProp({
                error: Error()
              }), Prop) : Prop);

              if (!prop.collider) {
                return;
              }

              cb(prop);
            });
          });
        } // 遍历屏幕范围内的所有可直接吃的道具


        forVisiblePropContact(cb) {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.node.children, propLayer => {
            (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).forArr(propLayer.children, propNode => {
              if (!propNode.active) {
                return;
              }

              if (!(_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).isInScreenVisible(propNode)) {
                return;
              }

              let prop = propNode.getComponent(_crd && Prop === void 0 ? (_reportPossibleCrUseOfProp({
                error: Error()
              }), Prop) : Prop);

              if (prop.collider) {
                return;
              }

              cb(prop);
            });
          });
        } // 遍历所有可直接吃的道具


        forAllPropContact(cb) {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.node.children, propLayer => {
            (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).forArr(propLayer.children, propNode => {
              // @ts-ignore
              if (!propNode.use) {
                return;
              }

              let prop = propNode.getComponent(_crd && Prop === void 0 ? (_reportPossibleCrUseOfProp({
                error: Error()
              }), Prop) : Prop);

              if (prop.collider) {
                return;
              }

              cb(prop);
            });
          });
        }

        recyclePropNode(propNode) {
          let prop = propNode.getComponent(_crd && Prop === void 0 ? (_reportPossibleCrUseOfProp({
            error: Error()
          }), Prop) : Prop);
          let nodePoolUtil = this.getPropLayerById(prop.id).getComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
            error: Error()
          }), NodePoolUtil) : NodePoolUtil);
          nodePoolUtil.recycleNode(propNode);
        }

        updateLogic(dt) {
          // 显示优化
          for (let i in this.idPropLayerObj) {
            let nodePoolUtil = this.getPropLayerById(parseFloat(i)).getComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
              error: Error()
            }), NodePoolUtil) : NodePoolUtil);
            nodePoolUtil.forEachUseNode(node => {
              let dis = Vec2.distance(node.getPosition(), (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).player.node.getPosition());
              let prop = node.getComponent(_crd && Prop === void 0 ? (_reportPossibleCrUseOfProp({
                error: Error()
              }), Prop) : Prop);

              if (dis <= (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).dataRadius || prop.propUtil && prop.propUtil.autoGet) {
                node.active = true;
                prop.doDisPlayerGet(dis);
                return;
              }

              if (prop.isFollowPlayer) {
                return;
              }

              node.active = false;
            });
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a37dbe214280b8ef60a798d0497b96b39672dbcf.js.map