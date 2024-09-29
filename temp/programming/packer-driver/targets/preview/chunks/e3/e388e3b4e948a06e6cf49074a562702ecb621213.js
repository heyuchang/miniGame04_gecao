System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, macro, Node, UITransform, _decorator, cocosUtil, utilTools, constants, designManager, mapModel, playerModel, BaseLayer, NodePoolUtil, Monster, _dec, _class, _crd, ccclass, property, MonsterSystem;

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

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerModel(extras) {
    _reporterNs.report("playerModel", "../../model/playerModel", _context.meta, extras);
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

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "../item/monsters/Monster", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      macro = _cc.macro;
      Node = _cc.Node;
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
      mapModel = _unresolved_6.mapModel;
    }, function (_unresolved_7) {
      playerModel = _unresolved_7.playerModel;
    }, function (_unresolved_8) {
      BaseLayer = _unresolved_8.BaseLayer;
    }, function (_unresolved_9) {
      NodePoolUtil = _unresolved_9.NodePoolUtil;
    }, function (_unresolved_10) {
      Monster = _unresolved_10.Monster;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91a8cbgectOgIg5lZnN8xP/", "MonsterSystem", undefined);

      __checkObsolete__(['macro', 'Node', 'UITransform', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MonsterSystem", MonsterSystem = (_dec = ccclass('MonsterSystem'), _dec(_class = class MonsterSystem extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          this.idMonsterLayerObj = {};
          this.monsterCreateArr = [];
          this.bossMonster = void 0;
          this.bossCreateInfo = void 0;
          this.monsterNum = 0;
          this.showMonsterNum = 0;
        }

        onLoad() {
          super.onLoad();
          this.schedule(this.refreshMonsterShow, 0.5, macro.REPEAT_FOREVER);
          this.schedule(this.createMonsterLogic, 0.1, macro.REPEAT_FOREVER);
        }

        onEnable() {
          super.onEnable();
        }

        getSaveData() {
          var monsterData = {};
          monsterData.arr = [];
          monsterData.bossCreateInfo = this.bossCreateInfo;
          this.forAliveMonster(monster => {
            var info = monster.getSaveData();
            monsterData.arr.push(info);
          });
          return monsterData;
        }

        loadSaveData(data) {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(data.arr, info => {
            var monster = this.createMonster(info.id);
            monster.loadSaveData(info);
          });
          this.bossCreateInfo = data.bossCreateInfo;

          if (this.bossCreateInfo) {
            this.createMonsterWithInfo(this.bossCreateInfo.id, this.bossCreateInfo.isBoss, this.bossCreateInfo.warn);
          }
        } // 怪物显示优化


        refreshMonsterShow(dt) {
          var destroyCount = 1;
          var showCount = 3;
          var hideCount = 1;
          var showNum = 0;
          var tmpArr = [];
          this.forAliveMonster((monster, monsterNode) => {
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.monster, monster.id);

            if (monster.distancePlayer < (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).dataRadius || !row.isData) {
              // 显示怪物
              showNum++;

              if (!monsterNode.active && showCount > 0) {
                monsterNode.active = true;
                showCount--;
              }
            } else if (monster.distancePlayer < (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).destroyRadius) {
              // 隐藏怪物
              if (monsterNode.active && hideCount > 0) {
                hideCount--;
                monsterNode.active = false;
              }
            } else {
              if (row.type == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).monsterTypes.common && destroyCount > 0) {
                // 销毁怪物
                destroyCount--;
                tmpArr.push(monsterNode);
              }
            }
          });
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(tmpArr, monsterNode => {
            monsterNode.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
              error: Error()
            }), Monster) : Monster).recycleSelf();
          });
          this.setString((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapLayer.showNumNode, showNum);
          this.showMonsterNum = showNum;
        } // 怪物生成逻辑


        updateMapLevel(dt) {
          var removeIdArr = [];
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapLevelArr, mapLevel => {
            // test
            // mapLevel.row.maxNum = 100;
            // mapLevel.row.createTime = 0.1;
            if (mapLevel.row.maxNum > 0 && mapLevel.createCount >= mapLevel.row.maxNum) {
              removeIdArr.push(mapLevel.id);
              return;
            }

            if (mapLevel.row.endTime > 0 && (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).time > mapLevel.row.endTime + 0.5) {
              removeIdArr.push(mapLevel.id);
              return;
            } // 预警动画


            if (mapLevel.row.warn && !mapLevel.hasWarn && (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).time >= mapLevel.row.startTime && !mapLevel.row.isBoss) {
              mapLevel.hasWarn = true;
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).mapSystem.startWarning(mapLevel.row.warn);
            } // 还没到达生成时间点


            if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).time < mapLevel.row.startTime) {
              return;
            }

            mapLevel.timeCount += dt;

            if (mapLevel.timeCount >= mapLevel.row.createTime || mapLevel.createCount == 0) {
              // 生成怪物
              mapLevel.timeCount -= mapLevel.row.createTime;
              mapLevel.createCount++;

              if (mapLevel.row.isBoss) {
                this.createMonsterWithInfo(mapLevel.row.monsterId, mapLevel.row.isBoss, mapLevel.row.warn);
                return true;
              }

              this.monsterCreateArr.push({
                monsterId: mapLevel.row.monsterId,
                isBoss: mapLevel.row.isBoss
              });

              if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).isRecordAd && (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).mapLayer.monsterAddFlag > 0) {
                for (var i = 0; i < (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).mapLayer.monsterAddFlag; i++) {
                  this.monsterCreateArr.push({
                    monsterId: mapLevel.row.monsterId,
                    isBoss: mapLevel.row.isBoss
                  });
                }
              }
            }
          });
          var tmpArr = [];
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapLevelArr, mapLevel => {
            if (removeIdArr.indexOf(mapLevel.id) != -1) {
              return;
            }

            tmpArr.push(mapLevel);
          });
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapLevelArr = tmpArr;
        }

        createMonsterLogic(dt) {
          if (!(_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).isRecordAd && this.showMonsterNum >= 200) {
            return;
          }

          var count = Math.ceil(this.monsterCreateArr.length / 10);

          for (var i = 0; i < count; i++) {
            var info = this.monsterCreateArr.shift();

            if (!info) {
              return;
            }

            this.createMonsterWithInfo(info.monsterId, info.isBoss);
          }
        }

        getMonsterLayerNameById(id) {
          return "monsterLayer" + id;
        }

        getMonsterLayerById(monsterId) {
          var monsterLayer = this.idMonsterLayerObj[monsterId];

          if (!monsterLayer) {
            monsterLayer = new Node(this.getMonsterLayerNameById(monsterId));
            monsterLayer.addComponent(UITransform);
            monsterLayer.setPosition(0, 0);
            monsterLayer.parent = this.node;
            this.idMonsterLayerObj[monsterId] = monsterLayer;
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.monster, monsterId);
            var nodePoolUtil = monsterLayer.addComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
              error: Error()
            }), NodePoolUtil) : NodePoolUtil);
            nodePoolUtil.init((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).monsterPrefabObj[row.prefab]);
          }

          return monsterLayer;
        }

        createMonster(monsterId, worldPos) {
          var nodePoolUtil = this.getMonsterLayerById(monsterId).getComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
            error: Error()
          }), NodePoolUtil) : NodePoolUtil);
          var monsterNode = nodePoolUtil.getNode();
          var monster = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).addComponentOnce(monsterNode, _crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
            error: Error()
          }), Monster) : Monster);
          monster.init(monsterId);

          if (worldPos) {
            monster.node.position = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToNodeSpace(monster.node, worldPos);
          }

          this.monsterNum++;
          this.setString((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapLayer.monsterNumNode, this.monsterNum);
          return monster;
        }

        createMonsterWithInfo(monsterId, isBoss, warn) {
          var _this = this;

          return _asyncToGenerator(function* () {
            // // test
            // if (isBoss) {
            //     monsterId = 23;
            // }
            if (isBoss) {
              // 停止计时
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).mapSystem.stopTimeCount = true; // 移除所有怪物计划

              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).mapLevelArr = [];
              _this.monsterCreateArr = [];
              _this.bossCreateInfo = {
                id: monsterId,
                isBoss: isBoss,
                warn: warn
              };

              if (_this.getMonsterNumByType((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).monsterTypes.elite) > 0) {
                // 如果有精英怪，就要等精英怪打死后才能出现
                return;
              }

              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).mapSystem.startWarning(warn);
              yield (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).waitTimeAsync(_this, 2);
              _this.bossCreateInfo = undefined;
            }

            var monster = _this.createMonster(monsterId);

            if (isBoss) {
              monster.isBoss = isBoss; // BOSS产生位置和预警

              var pos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).player.node.getPosition();
              pos.y += 400;
              monster.node.position = pos;
              monster.monsterUtil.moveStop = true;
              monster.canFace = false;
              monster.node.parent.active = false;
              monster.collider.enabled = false;

              _this.scheduleOnce(() => {
                monster.node.parent.active = true;
                (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                  error: Error()
                }), cocosUtil) : cocosUtil).tweenScaleIn(monster.node, 0.5, () => {
                  monster.monsterUtil.moveStop = false;
                  monster.canFace = true;
                  monster.collider.enabled = true;
                }); // let time = 0.5;
                // monster.node.setScale(0, 0, 1);
                // tween(monster.node).to(time, {
                //     scale: v3(1.2, 1.2, 1)
                // }).to(time / 2, {
                //     scale: v3(1, 1, 1)
                // }).call(() => {
                //     monster.monsterUtil.moveStop = false;
                //     monster.canFace = true;
                // }).start();
              }, 0.8);

              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).mapSystem.bossPosHintAnimationCtrl.node.active = true;
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).mapSystem.bossPosHintAnimationCtrl.node.position = pos;
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).mapSystem.bossPosHintAnimationCtrl.playAnimation("aa", false, () => {
                (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).mapSystem.bossPosHintAnimationCtrl.node.active = false;
              }); // 销毁所有普通怪物

              var hitArr = [];

              _this.forAliveMonster(monster => {
                if (monster.row.type != (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).monsterTypes.common) {
                  return;
                }

                monster.waitHit = true;
                var info = {};
                info.monster = monster;
                hitArr.push(info);
              });

              _this.batchHitMonster(hitArr); // 怪物子弹全部消失


              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).bulletSystem.forVisibleMonsterBullet(bullet => {
                bullet.recycleSelf();
              }); // 显示围栏

              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).mapSystem.showWallLayer(); // 缓存boss对象

              _this.bossMonster = monster;
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).mapLayer.refreshBossHpLayer();
            }

            return monster;
          })();
        }

        getMonsterNumByType(type) {
          if (type === void 0) {
            type = 0;
          }

          var num = 0;
          this.forAliveMonster(monster => {
            if (!type) {
              num++;
              return;
            }

            if (monster.row.type == type) {
              num++;
            }
          });
          return num;
        }

        monsterDead(id) {
          var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.monster, id);

          if (row.type == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).monsterTypes.boss) {
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).mapSystem.bossDead();
          }

          if (id == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).monsterIds.boxMonster) {
            // 宝箱怪阵亡弹窗
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).mapLayer.popLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.BoxMonsterLayer);
          }

          if (row.type == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).monsterTypes.elite && this.bossCreateInfo) {
            this.createMonsterWithInfo(this.bossCreateInfo.id, this.bossCreateInfo.isBoss, this.bossCreateInfo.warn);
          }
        } // 分批怪物受击


        batchHitMonster(hitArr, num) {
          if (num === void 0) {
            num = 2;
          }

          var killMonsterFunc = () => {
            for (var i = 0; i < num; i++) {
              var hitInfo = hitArr.shift();

              if (!hitInfo) {
                return;
              }

              var _monster = hitInfo.monster;

              if (_monster.waitHit) {
                var dam = _monster.hp;

                if (hitInfo.dam) {
                  dam = hitInfo.dam;
                }

                _monster.hitWithDam(dam);

                _monster.waitHit = false;
              }
            }

            this.scheduleOnce(() => {
              killMonsterFunc();
            });
          };

          killMonsterFunc();
        }

        recycleMonsterNode(monsterNode) {
          var monster = monsterNode.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
            error: Error()
          }), Monster) : Monster);
          monster.hp = 0;
          var monsterId = monster.id;
          var nodePoolUtil = this.getMonsterLayerById(monsterId).getComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
            error: Error()
          }), NodePoolUtil) : NodePoolUtil);
          nodePoolUtil.recycleNode(monsterNode);
        } // 遍历屏幕范围内的存活怪物


        forVisibleMonster(cb) {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.node.children, monsterLayer => {
            (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).forArr(monsterLayer.children, monsterNode => {
              if (!monsterNode.active) {
                return;
              }

              if (!(_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).isInScreenVisible(monsterNode)) {
                return;
              }

              var monster = monsterNode.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
                error: Error()
              }), Monster) : Monster);

              if (monster.hp <= 0) {
                return;
              }

              cb(monster);
            });
          });
        } // 遍历所有的存活怪物


        forAliveMonster(cb) {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.node.children, monsterLayer => {
            (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).forArr(monsterLayer.children, monsterNode => {
              var monster = monsterNode.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
                error: Error()
              }), Monster) : Monster);

              if (monster.hp <= 0) {
                return;
              }

              cb(monster, monsterNode);
            });
          });
        }

        updateLogic(dt) {
          this.updateMapLevel(dt);
          this.forAliveMonster(monster => {
            monster.updateLogic(dt);
          });
        }

        update(dt) {
          // 怪物移动
          this.forAliveMonster(monster => {
            monster.move(dt);
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e388e3b4e948a06e6cf49074a562702ecb621213.js.map