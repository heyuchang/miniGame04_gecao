System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Camera, find, Prefab, SpriteFrame, UITransform, view, cocosUtil, utilTools, constants, msgac, designManager, resManager, serverMsg, playerModel, UserData, MapModel, _crd, mapModel;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../compoment/item/Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapLayer(extras) {
    _reporterNs.report("MapLayer", "../compoment/layer/MapLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletSystem(extras) {
    _reporterNs.report("BulletSystem", "../compoment/sys/BulletSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHintSystem(extras) {
    _reporterNs.report("HintSystem", "../compoment/sys/HintSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapSystem(extras) {
    _reporterNs.report("MapSystem", "../compoment/sys/MapSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterSystem(extras) {
    _reporterNs.report("MonsterSystem", "../compoment/sys/MonsterSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNumSystem(extras) {
    _reporterNs.report("NumSystem", "../compoment/sys/NumSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropSystem(extras) {
    _reporterNs.report("PropSystem", "../compoment/sys/PropSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillSystem(extras) {
    _reporterNs.report("SkillSystem", "../compoment/sys/SkillSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponSystem(extras) {
    _reporterNs.report("WeaponSystem", "../compoment/sys/WeaponSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgac(extras) {
    _reporterNs.report("msgac", "../data/msgac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresManager(extras) {
    _reporterNs.report("resManager", "../manager/resManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfserverMsg(extras) {
    _reporterNs.report("serverMsg", "../other/serverMsg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerModel(extras) {
    _reporterNs.report("playerModel", "./playerModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropItem(extras) {
    _reporterNs.report("PropItem", "./UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "./UserData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Camera = _cc.Camera;
      find = _cc.find;
      Prefab = _cc.Prefab;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      view = _cc.view;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      utilTools = _unresolved_3.utilTools;
    }, function (_unresolved_4) {
      constants = _unresolved_4.constants;
    }, function (_unresolved_5) {
      msgac = _unresolved_5.msgac;
    }, function (_unresolved_6) {
      designManager = _unresolved_6.designManager;
    }, function (_unresolved_7) {
      resManager = _unresolved_7.resManager;
    }, function (_unresolved_8) {
      serverMsg = _unresolved_8.serverMsg;
    }, function (_unresolved_9) {
      playerModel = _unresolved_9.playerModel;
    }, function (_unresolved_10) {
      UserData = _unresolved_10.UserData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fac70kABNtOmop0VyXqqBln", "mapModel", undefined);

      __checkObsolete__(['Camera', 'find', 'Node', 'Prefab', 'SpriteFrame', 'UITransform', 'view']);

      MapModel = class MapModel {
        constructor() {
          this.visibleHalfSize = void 0;
          this.mapFightLayer = void 0;
          this.mapFightCamera = void 0;
          this.cameraOrthoHeight = void 0;
          this.mapLayer = void 0;
          this.player = void 0;
          this.mapSystem = void 0;
          this.monsterSystem = void 0;
          this.bulletSystem = void 0;
          this.numSystem = void 0;
          this.skillSystem = void 0;
          this.weaponSystem = void 0;
          this.hintSystem = void 0;
          this.propSystem = void 0;
          this.mapId = void 0;
          this.floor = void 0;
          this.time = void 0;
          this.expPool = void 0;
          this.expTypeRow = void 0;
          this.expNum = void 0;
          this.expLv = void 0;
          this.equipIdArr = [];
          this.coinNum = void 0;
          this.killMonsterNum = void 0;
          this.mapLevelArr = void 0;
          this.skillAllNum = void 0;
          this.monsterPrefabObj = {};
          this.bulletPrefabObj = {};
          this.dataRadius = void 0;
          this.destroyRadius = void 0;
          this.healAdCount = 0;
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new MapModel();
          }

          return this._instance;
        } // 半屏幕尺寸


        initData(data, now) {
          if (!data) {
            data = {};
          }

          var visibleSize = view.getVisibleSize();
          this.visibleHalfSize = {
            width: visibleSize.width * 0.5,
            height: visibleSize.height * 0.5
          };
          this.dataRadius = visibleSize.height * 0.6;
          this.destroyRadius = visibleSize.height * 1.5;
          this.mapFightCamera = find("CanvasMapFight/Camera").getComponent(Camera);
          this.cameraOrthoHeight = this.mapFightCamera.orthoHeight;
        }

        getSaveData() {
          var data = {};
          data.mapId = this.mapId;
          data.floor = this.floor;
          data.time = this.time;
          data.expPool = this.expPool;
          data.expTypeRow = this.expTypeRow;
          data.expNum = this.expNum;
          data.expLv = this.expLv;
          data.coinNum = this.coinNum;
          data.killMonsterNum = this.killMonsterNum;
          data.mapLevelArr = this.mapLevelArr;
          data.skillAllNum = this.skillAllNum;
          data.equipIdArr = this.equipIdArr;
          data.healAdCount = this.healAdCount;
          return data;
        }

        loadSaveData(data) {
          this.mapId = data.mapId;
          this.floor = data.floor;
          this.time = data.time;
          this.expPool = data.expPool;
          this.expTypeRow = data.expTypeRow;
          this.expNum = data.expNum;
          this.expLv = data.expLv;
          this.coinNum = data.coinNum;
          this.killMonsterNum = data.killMonsterNum;
          this.mapLevelArr = data.mapLevelArr;
          this.skillAllNum = data.skillAllNum;
          this.equipIdArr = data.equipIdArr;
          this.healAdCount = data.healAdCount;
        }

        enterMapWithMapId(mapId, floor) {
          if (floor === void 0) {
            floor = 0;
          }

          var obj = {};
          obj.mapId = mapId;
          obj.floor = floor;
          var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.map, mapId); // hp atk weaponId

          if (row.type == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).mapTypes.main) {
            obj.hp = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().life;
            obj.atk = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().attack;

            if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().wearProp[0] > 0) {
              var curDrop = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.prop, (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().wearProp[0]);

              if (curDrop && curDrop.type == 11) {
                obj.weaponId = curDrop.weaponid;
              } else {
                obj.weaponId = 0;
              }
            } else {
              obj.weaponId = 0;
            }
          } else if (row.type == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).mapTypes.tower) {
            var info = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().getTowerRoleProInfo(true);
            obj.hp = info.hp;
            obj.atk = info.atk;
            var propRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop, (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().$towerWeaponId);
            obj.weaponId = propRow.weaponid;
          }

          (_crd && serverMsg === void 0 ? (_reportPossibleCrUseOfserverMsg({
            error: Error()
          }), serverMsg) : serverMsg).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).mapEnter, obj);
        }

        loadMapFightLayer() {
          return new Promise(resolve => {
            if (this.mapFightLayer) {
              resolve();
              return;
            }

            (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
              error: Error()
            }), resManager) : resManager).loadAsset((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.layer, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.MapFightLayer, Prefab, () => {}, (err, prefab) => {
              this.mapFightLayer = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).instantiate(prefab);
              this.mapFightLayer.parent = find("CanvasMapFight");
              resolve();
            });
          });
        }

        setCompoments(mapLayer, player, mapSystem, monsterSystem, bulletSystem, numSystem, weaponSystem, skillSystem, hintSystem, propSystem) {
          this.mapLayer = mapLayer;
          this.player = player;
          this.mapSystem = mapSystem;
          this.monsterSystem = monsterSystem;
          this.bulletSystem = bulletSystem;
          this.numSystem = numSystem;
          this.weaponSystem = weaponSystem;
          this.skillSystem = skillSystem;
          this.hintSystem = hintSystem;
          this.propSystem = propSystem;
        }

        isInScreenVisible(node) {
          if (!node || !node.parent) {
            return false;
          }

          var pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace(node);
          var playerPos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace(this.player.node);
          var tf = node.getComponent(UITransform);
          var add = tf.width + tf.height;

          if (Math.abs(pos.x - playerPos.x) <= this.visibleHalfSize.width + add + 150 && Math.abs(pos.y - playerPos.y) <= this.visibleHalfSize.height + add) {
            return true;
          }

          return false;
        }

        mapEnter(data) {
          if (this.mapId) {
            data.st = 2;
            return;
          }

          this.mapFightCamera.orthoHeight = this.cameraOrthoHeight;
          var mapId = data.mapId;
          this.mapId = mapId;
          this.floor = data.floor;
          var mapRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.map, mapId); // test
          // arr = [arr[0]];

          this.time = 0;
          this.expPool = 0;
          this.expTypeRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.expType, mapRow.expType * 100 + 1);
          this.expNum = 0;
          this.expLv = 1;
          this.coinNum = 0;
          this.killMonsterNum = 0;
          this.healAdCount = 0;
          this.skillAllNum = 0;
          this.equipIdArr = [];
          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).skillBombNum = 1;
          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).skillHealNum = 1;
          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).skillMagnetNum = 0;
          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).skillLifeNum = 0;
          this.createMapLevelArr();
          data.st = 1;
        }

        createMapLevelArr() {
          this.mapLevelArr = [];
          var arr = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowsByType((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.level, this.mapId);

          if (!arr) {
            return;
          }

          arr.forEach(row => {
            if (row.startTime <= mapModel.time) {
              return;
            }

            var mapLevel = {};
            mapLevel.id = row.id;
            mapLevel.row = row;
            mapLevel.timeCount = 0;
            mapLevel.createCount = 0;
            this.mapLevelArr.push(mapLevel);
          });
        }

        mapLeave(data) {
          if (!this.mapId) {
            data.st = 2;
            return;
          }

          this.mapFightLayer.destroy();
          this.mapFightLayer = null;
          this.mapId = 0;
          this.floor = 0;
          data.st = 1;
        } // 进入地图之前，加载必要的资源


        loadMapRes(progressCb, endCb) {
          this.loadMonsterAndBulletRes(percent => {
            progressCb(percent);
          }, () => {
            this.loadMapFightLayer().then(() => {
              endCb();
            });
          });
        }

        loadMonsterAndBulletRes(progressCb, endCb) {
          var sum = 3;
          var onePercent = 1 / sum;
          var monsterPercent = 0;
          var bulletPercent = 0;
          var otherPercent = 0;

          var tmpFunc = () => {
            var p = monsterPercent * onePercent + bulletPercent * onePercent + otherPercent * onePercent;
            progressCb(p);
          };

          var tmpFunc2 = () => {
            if (monsterPercent + bulletPercent + otherPercent == sum) {
              endCb();
            }
          };

          this.loadMonsterPrefabArr(percent => {
            monsterPercent = percent;
            tmpFunc();
          }, () => {
            monsterPercent = 1;
            tmpFunc2();
          });
          this.loadBulletRes(percent => {
            bulletPercent = percent;
            tmpFunc();
          }, () => {
            bulletPercent = 1;
            tmpFunc2();
          });
          this.loadOtherRes(percent => {
            otherPercent = percent;
            tmpFunc();
          }, () => {
            otherPercent = 1;
            tmpFunc2();
          });
        } // 其他碎片资源，比如：背景图，围栏等


        loadOtherRes(progressCb, endCb) {
          var mapRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.map, this.mapId);
          var pathArr = ["map/" + mapRow.bg, "wall/" + mapRow.wall + "_v", "wall/" + mapRow.wall + "_h"];
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadAssetByPathArr((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.icon, pathArr, SpriteFrame, progressCb, endCb);
        } // 加载子弹的资源


        loadBulletRes(progressCb, endCb) {
          this.bulletPrefabObj = {};
          var arr = [];
          var pathArr = [];
          arr.forEach(id => {
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.bullet, id);
            var path = row.prefab;
            pathArr.push(path);
          });
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadAssetByPathArr((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.bullet, pathArr, Prefab, progressCb, assetArr => {
            assetArr.forEach(asset => {
              this.bulletPrefabObj[asset.name] = asset;
            });
            endCb();
          });
        } // 加载怪物资源


        loadMonsterPrefabArr(progressCb, endCb) {
          this.monsterPrefabObj = {};
          var idArr = [];
          var arr = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowsByType((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.level, this.mapId);
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(arr, row => {
            if (idArr.indexOf(row.monsterId) == -1) {
              idArr.push(row.monsterId);
            }
          }); // 召唤怪和通用怪目前较少，暂时直接在这里添加

          idArr.push(14);
          var pathArr = [];
          idArr.forEach(id => {
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.monster, id);
            var path = row.prefab + "/monster";
            pathArr.push(path);
          });
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadAssetByPathArr((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.monster, pathArr, Prefab, progressCb, assetArr => {
            assetArr.forEach(asset => {
              var path = asset.path;
              var name = path.split("/")[0];
              this.monsterPrefabObj[name] = asset;
            });
            endCb();
          });
        }

        parseDesignPropArr(reward) {
          var arr = [];
          reward.forEach(item => {
            var data = {
              Id: item[0],
              Num: item[1]
            };
            arr.push(data);
          });
          return arr;
        }

      };
      MapModel._instance = void 0;

      _export("mapModel", mapModel = MapModel.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4b29bbf707634489a179a45ada51d46124e2d2de.js.map