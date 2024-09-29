System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BoxCollider2D, director, find, macro, Node, RenderTexture, Sprite, SpriteFrame, tween, Tween, UIOpacity, UITransform, v3, Vec2, view, _decorator, tyqSDK, cocosUtil, utilTools, constants, physicsWorld, designManager, mapModel, playerModel, UserData, AnimationCtrl, BaseLayer, _dec, _class, _crd, ccclass, property, MapSystem;

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../../../tyqSDK/tyqSDK", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphysicsWorld(extras) {
    _reporterNs.report("physicsWorld", "../../engine/PhysicsWorld", _context.meta, extras);
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

  function _reportPossibleCrUseOfPropItem(extras) {
    _reporterNs.report("PropItem", "../../model/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../../model/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationCtrl(extras) {
    _reporterNs.report("AnimationCtrl", "../base/AnimationCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../base/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../item/bullet/Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "../item/monsters/Monster", _context.meta, extras);
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
      BoxCollider2D = _cc.BoxCollider2D;
      director = _cc.director;
      find = _cc.find;
      macro = _cc.macro;
      Node = _cc.Node;
      RenderTexture = _cc.RenderTexture;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      Tween = _cc.Tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      Vec2 = _cc.Vec2;
      view = _cc.view;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      tyqSDK = _unresolved_2.tyqSDK;
    }, function (_unresolved_3) {
      cocosUtil = _unresolved_3.cocosUtil;
    }, function (_unresolved_4) {
      utilTools = _unresolved_4.utilTools;
    }, function (_unresolved_5) {
      constants = _unresolved_5.constants;
    }, function (_unresolved_6) {
      physicsWorld = _unresolved_6.physicsWorld;
    }, function (_unresolved_7) {
      designManager = _unresolved_7.designManager;
    }, function (_unresolved_8) {
      mapModel = _unresolved_8.mapModel;
    }, function (_unresolved_9) {
      playerModel = _unresolved_9.playerModel;
    }, function (_unresolved_10) {
      UserData = _unresolved_10.UserData;
    }, function (_unresolved_11) {
      AnimationCtrl = _unresolved_11.AnimationCtrl;
    }, function (_unresolved_12) {
      BaseLayer = _unresolved_12.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c2f8bkzNcBJiq/l+SnYqOo5", "MapSystem", undefined);

      __checkObsolete__(['BoxCollider2D', 'director', 'find', 'macro', 'Node', 'RenderTexture', 'Sprite', 'SpriteFrame', 'tween', 'Tween', 'UIOpacity', 'UITransform', 'v3', 'Vec2', 'Vec3', 'view', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MapSystem", MapSystem = (_dec = ccclass('MapSystem'), _dec(_class = class MapSystem extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor(...args) {
          super(...args);
          this.mapFightBgLayer = void 0;
          this.staticNode = void 0;
          this.bombAnimationCtrl = void 0;
          this.warnAnimationCtrl = void 0;
          this.skillBombAniCtrl = void 0;
          this.bossPosHintAnimationCtrl = void 0;
          this.boxHintNode = void 0;
          this.boxArrowNode = void 0;
          this.mapRow = void 0;
          this.pauseVal = void 0;
          this.wallLayer = void 0;
          this.wallShineNode = void 0;
          this.wallTopNode = void 0;
          this.wallBottomNode = void 0;
          this.wallLeftNode = void 0;
          this.wallRightNode = void 0;
          this.wallTopVal = void 0;
          this.wallBottomVal = void 0;
          this.wallLeftVal = void 0;
          this.wallRightVal = void 0;
          this.wallCenterPos = void 0;
          this.stopTimeCount = void 0;
          this.expTimeCount = void 0;
          this.killMonsterCount = void 0;
          this.backlifeCount = 0;
          this.skillBombCd = 0;
          this.skillHealCd = 0;
          this.nineForArr = [{
            x: -1,
            y: 1
          }, {
            x: 0,
            y: 1
          }, {
            x: 1,
            y: 1
          }, {
            x: -1,
            y: 0
          }, {
            x: 0,
            y: 0
          }, {
            x: 1,
            y: 0
          }, {
            x: -1,
            y: -1
          }, {
            x: 0,
            y: -1
          }, {
            x: 1,
            y: -1
          }];
          this.vec3Obj = {
            nodePos: v3(0, 0, 0)
          };
        }

        onLoad() {
          super.onLoad();
          this.mapFightBgLayer = this.getNodeByPath("map/bg");
          this.wallLayer = this.getNodeByPath("map/wallLayer");
          this.wallTopNode = this.getNodeByPath("map/wallLayer/top");
          this.wallBottomNode = this.getNodeByPath("map/wallLayer/bottom");
          this.wallLeftNode = this.getNodeByPath("map/wallLayer/left");
          this.wallRightNode = this.getNodeByPath("map/wallLayer/right");
          this.wallShineNode = this.getNodeByPath("map/wallLayer/shine");
          this.wallLayer.active = false;
          this.staticNode = this.getNodeByPath("static");
          this.bombAnimationCtrl = this.getNodeByPath("static/bomb").addComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
            error: Error()
          }), AnimationCtrl) : AnimationCtrl);
          this.bombAnimationCtrl.node.active = false;
          this.skillBombAniCtrl = this.getNodeByPath("static/skillBomb").addComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
            error: Error()
          }), AnimationCtrl) : AnimationCtrl);
          this.skillBombAniCtrl.node.active = false;
          this.warnAnimationCtrl = this.getNodeByPath("static/warn").addComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
            error: Error()
          }), AnimationCtrl) : AnimationCtrl);
          this.warnAnimationCtrl.node.active = false;
          this.screenAdapterBG(this.warnAnimationCtrl.node);
          this.bossPosHintAnimationCtrl = this.getNodeByPath("map/bossPosHint").addComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
            error: Error()
          }), AnimationCtrl) : AnimationCtrl);
          this.bossPosHintAnimationCtrl.node.active = false;
          this.boxHintNode = this.getNodeByPath("static/boxHint");
          this.boxHintNode.active = false;
          this.boxArrowNode = this.getNodeByPath("static/boxHint/arrow");
          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).tweenBreath(this.getNodeByPath("static/boxHint/icon"), 0.4, 1.2);
          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).tweenBreath(this.getNodeByPath("static/boxHint/arrow/icon"), 0.2, 1.2); // if (playerModel.isInDevelopmentEnvironment()) {
          //     PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Shape;
          // }
          // PhysicsSystem2D.instance.enable = false;

          this.mapRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.map, (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapId);
          this.expTimeCount = 0;
          this.pauseVal = 0;
          this.killMonsterCount = 0;
          this.stopTimeCount = false; // 镜头视角慢恢复

          this.schedule(this.refreshCamera, 0.5, macro.REPEAT_FOREVER); // 开启逻辑帧

          this.schedule(this.updateLogic, 0.1, macro.REPEAT_FOREVER);
        }

        onEnable() {
          super.onEnable();
        }

        start() {
          this.scheduleOnce(() => {
            if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().mapData) {
              // 战斗中断恢复的
              return;
            } // 初始经验


            for (let i = 0; i < 20; i++) {
              let pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).getRectPos((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).player.node, 400, 700, 600, 1000, true);
              this.createExp(1, pos, true);
            }
          }, 0.5);
          this.refreshMapFightWindow();
        }

        onDestroy() {
          super.onDestroy();
        }

        initUI() {
          this.initMapFightBg();
          this.initWallLayer();
        }

        initWallLayer() {
          let path = "wall/" + this.mapRow.wall + "_h";
          this.setSpriteFrame2(this.wallTopNode, path);
          this.setSpriteFrame2(this.wallBottomNode, path);
          path = "wall/" + this.mapRow.wall + "_v";
          this.setSpriteFrame2(this.wallLeftNode, path);
          this.setSpriteFrame2(this.wallRightNode, path);
        }

        initMapFightBg() {
          this.mapFightBgLayer.children.forEach(node => {
            let path = "map/" + this.mapRow.bg;
            this.setSpriteFrame2(node, path);
          });
        }

        refreshMapFightWindow() {
          // 相机跟随
          let pos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.getPosition();
          pos.z = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapFightCamera.node.getPosition().z;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapFightCamera.node.setPosition(pos);
          this.refreshMapBgLayer();
        }

        refreshMapBgLayer() {
          // 计算出玩家当前位置是属于哪个格子
          let x = Math.floor(((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.getPosition().x + 512) / 1024);
          let y = Math.floor(((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.getPosition().y + 512) / 1024); // 遍历九宫调整位置

          this.nineForArr.forEach((info, index) => {
            let bgNode = this.mapFightBgLayer.children[index];

            if (!bgNode) {
              return;
            }

            let posX = (x + info.x) * 1024;
            let posY = (y + info.y) * 1024;
            bgNode.setPosition(posX, posY);
          });
        }

        getSaveData() {
          let data = {};
          data.expTimeCount = this.expTimeCount;
          data.killMonsterCount = this.killMonsterCount;
          data.backlifeCount = this.backlifeCount;
          data.skillBombCd = this.skillBombCd;
          data.skillHealCd = this.skillHealCd;
          data.stopTimeCount = this.stopTimeCount; // 镜头高度

          data.orthoHeight = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapFightCamera.orthoHeight; // 围栏

          let wall = null;

          if (this.wallLayer.active) {
            wall = {};
            wall.centerPos = this.wallCenterPos;
          }

          data.wall = wall;
          return data;
        }

        loadSaveData(data) {
          this.expTimeCount = data.expTimeCount;
          this.killMonsterCount = data.killMonsterCount;
          this.backlifeCount = data.backlifeCount;
          this.skillBombCd = data.skillBombCd;
          this.skillHealCd = data.skillHealCd;
          this.stopTimeCount = data.stopTimeCount;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapFightCamera.orthoHeight = data.orthoHeight; // 围栏

          if (data.wall) {
            let wall = data.wall;
            this.showWallLayer(wall.centerPos);
          }
        }

        bossDead() {
          this.stopTimeCount = false;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.hideWallLayer();

          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).monsterSystem.bossMonster.isBoss == 2) {
            // 最后一个BOSS
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).mapSystem.doSettlement(true);
          } else {
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).createMapLevelArr();
          }

          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).monsterSystem.bossMonster = null;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapLayer.refreshBossHpLayer();
        }

        doSettlement(isWin = false) {
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.map, (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapId);
          let arr = []; // 金币

          let coinNum = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).coinNum + Math.floor((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).time / 60 * 100) + Math.floor((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).killMonsterNum / 5);
          arr.push({
            Id: (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.coin,
            Num: coinNum
          }); // 装备

          for (let i in (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).equipIdArr) {
            arr.push({
              Id: (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).equipIdArr[i],
              Num: 1
            });
          } // 必拿奖励


          if (row.reward4) {
            arr = arr.concat((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).parseDesignPropArr(row.reward4));
          } // 通关奖励 


          if (isWin && row.reward5) {
            arr = arr.concat((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).parseDesignPropArr(row.reward5));
          } // 按照品质排序


          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).sortArr(arr, (prop1, prop2) => {
            let row1 = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop, prop1.Id);
            let row2 = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop, prop2.Id);

            if (row1.quality < row2.quality) {
              return true;
            }

            return false;
          });
          let obj = {};
          let time = Math.floor((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).time);
          obj.time = time;
          let levelData = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getLevelData((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapId);

          if (time >= levelData.Time) {
            levelData.Time = time;
            (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().setLevelData(levelData);
            obj.isBest = true;
          }

          obj.bestTime = levelData.Time;
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getRewardProp(arr);
          obj.isWin = isWin;
          obj.award = arr;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapLayer.popLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.SettlementLayer, obj);
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).eventLevelEnd((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapId, isWin);
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).showInterstitialAd();

          if (time >= 15 * 60) {
            //  myLog.i("第" + mapModel.mapId +"关-15分钟")
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).eventSendCustomEvent("第" + (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).mapId + "关-15分钟");
          } else if (time >= 10 * 60) {
            // myLog.i("第" + mapModel.mapId +"关-10分钟")
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).eventSendCustomEvent("第" + (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).mapId + "关-10分钟");
          } else if (time >= 5 * 60) {
            //  myLog.i("第" + mapModel.mapId +"关-5分钟")
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).eventSendCustomEvent("第" + (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).mapId + "关-5分钟");
          }
        }
        /**
         * 获得距离参考点pos最近的怪物或者宝箱节点
         * @param pos 参考点，默认是玩家位置
         */


        getMinDisTargetNode(pos) {
          let minDis = 999999;
          let minDisNode = null;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).monsterSystem.forVisibleMonster(monster => {
            if (!monster.node.activeInHierarchy) {
              return;
            }

            let dis = monster.distancePlayer;

            if (pos) {
              dis = Vec2.distance(pos, monster.node.position);
            }

            if (dis < minDis) {
              minDis = monster.distancePlayer;
              minDisNode = monster.node;
            }
          });
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).propSystem.forVisiblePropCollider(prop => {
            let propNode = prop.node;
            let propPos = propNode.getPosition();

            if (!pos) {
              pos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).player.node.position;
            }

            let tmpDis = Vec2.distance(pos, propPos);

            if (tmpDis > minDis) {
              return;
            }

            minDis = tmpDis;
            minDisNode = propNode;
          });
          return minDisNode;
        } // 开始播放预警动画


        startWarning(aniName) {
          if (!aniName) {
            return;
          }

          this.warnAnimationCtrl.node.active = true;
          this.warnAnimationCtrl.playAnimation(aniName, false, () => {
            this.warnAnimationCtrl.node.active = false;

            if (aniName == "11") {
              // 镜头拉远
              this.cameraMove((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).cameraOrthoHeight + 200);
            }
          });
        } // 镜头拉动


        cameraMove(orthoHeight) {
          if (orthoHeight == (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapFightCamera.orthoHeight) {
            return;
          }

          tween((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapFightCamera).to(3, {
            orthoHeight: orthoHeight
          }).start();
        } // 主动技能：治疗


        useSkillHeal() {
          // this.skillHealCd = designManager.config.hp_cd;
          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).skillHealNum--;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.useSkillHeal(0.25);
        }

        useSkillMagnet() {
          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).skillMagnetNum--;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).propSystem.getProp((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).propIds.magnet);
        } // 主动技能：炸弹


        async useSkillBomb() {
          // this.skillBombCd = designManager.config.boom_cd;
          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).skillBombNum--;
          this.skillBombAniCtrl.node.active = true;
          this.skillBombAniCtrl.playAnimation("1", false, () => {
            this.skillBombAniCtrl.node.active = false;
          });
          await (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).waitTimeAsync(this, 0.8); // 屏幕内的小怪全部阵亡

          let hitArr = [];
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).monsterSystem.forVisibleMonster(monster => {
            if (monster.row.type != (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).monsterTypes.common) {
              return;
            }

            let dam = monster.hp;
            monster.waitHit = true;
            let hitInfo = {};
            hitInfo.monster = monster;
            hitInfo.dam = dam;
            hitArr.push(hitInfo);
          });
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).monsterSystem.batchHitMonster(hitArr); // 怪物子弹全部消失

          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).bulletSystem.forVisibleMonsterBullet(bullet => {
            bullet.recycleSelf();
          });
        } // 玩家吃到炸弹


        bomb() {
          // 屏幕闪白
          this.bombAnimationCtrl.node.active = true;
          this.bombAnimationCtrl.playAnimationOnce("bomb", () => {
            this.bombAnimationCtrl.node.active = false;
          }); // 范围内的小怪全部阵亡

          let hitArr = [];
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).monsterSystem.forVisibleMonster(monster => {
            if (monster.row.type != (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).monsterTypes.common) {
              return;
            }

            if (monster.distancePlayer > 300) {
              return;
            }

            let dam = monster.hp;
            monster.waitHit = true;
            let hitInfo = {};
            hitInfo.monster = monster;
            hitInfo.dam = dam;
            hitArr.push(hitInfo);
          });
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).monsterSystem.batchHitMonster(hitArr); // 怪物子弹全部消失

          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).bulletSystem.forVisibleMonsterBullet(bullet => {
            bullet.recycleSelf();
          });
        } // 怪物阵亡


        monsterDead(id, worldPos) {
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.monster, id); // 经验产生

          if ((_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).isProb(row.expProb)) {
            let exp = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).getFloatValue(row.expMin, row.expMax, true);
            this.createExp(exp, worldPos);
          } // 击杀数量统计


          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).killMonsterNum++;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapLayer.refreshResLayer(); // 木箱产生

          this.killMonsterCount++;

          if (this.killMonsterCount >= 10) {
            this.killMonsterCount -= 10; // 玩家周围随机位置

            let pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).getAroundPos((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).player.node, 300, view.getVisibleSize().height * 2, true);
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).propSystem.addProp((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.box1, pos);
          } // 道具掉落


          if (row.propProbArr) {
            for (let i = 0; i < row.propProbArr.length; i++) {
              let prob = row.propProbArr[i];

              if (!(_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).isProb(prob)) {
                continue;
              }

              let propId = row.propIdArr[i];
              let propNum = row.propNumArr[i];
              let direction = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).getCircleDirectionArr(1)[0];
              let pos = worldPos.clone().add(direction.multiplyScalar(80));
              let extraObj = {};
              extraObj.num = propNum;
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).propSystem.addProp(propId, pos, extraObj);
            }
          } // 每日任务


          switch (row.type) {
            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).monsterTypes.common:
              (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).addDayTaskNum(4, 1);
              break;

            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).monsterTypes.elite:
              (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).addDayTaskNum(5, 1);
              break;

            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).monsterTypes.boss:
              (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).addDayTaskNum(6, 1);
              break;

            default:
              break;
          } // // test
          // if (Math.random() > 0.5) {
          //     // 炸弹
          //     mapModel.propSystem.addProp(501, worldPos);
          // } else {
          //     // 磁铁
          //     mapModel.propSystem.addProp(301, worldPos);
          // }

        } // 经验产生


        createExp(exp, worldPos, force = false) {
          if (!force) {
            if (exp > (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).expPool) {
              exp = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).expPool;
            }

            if (exp <= 0) {
              return;
            }

            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).expPool -= exp;
          }

          let extraObj = {};
          extraObj.num = exp;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).propSystem.addProp((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).propIds.exp, worldPos, extraObj);
        }

        addExp(num) {
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).expNum += num;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapLayer.refreshExpLayer();
        }

        addCoin(num) {
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).coinNum += num;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapLayer.refreshResLayer();
        }

        adjustInWall(node, height = 0) {
          if (!this.wallLayer.active) {
            return;
          }

          let tf = null;
          let pos = null;

          if (node instanceof Node) {
            tf = node.getComponent(UITransform);
            pos = node.getPosition(this.vec3Obj.nodePos);
          } else {
            pos = node;
          }

          if (pos.x >= this.wallRightVal) {
            pos.x = this.wallRightVal;
          }

          if (pos.x <= this.wallLeftVal) {
            pos.x = this.wallLeftVal;
          }

          if (pos.y >= this.wallTopVal) {
            pos.y = this.wallTopVal;
          }

          if (tf) {
            height = tf.height;
          }

          if (pos.y <= this.wallBottomVal + height * 0.4) {
            pos.y = this.wallBottomVal + height * 0.4;
          }

          if (node instanceof Node) {
            node.position = pos;
          }
        }

        showWallLayer(centerPos) {
          this.wallLayer.active = true;
          let hWidth = 33;
          let hHeight = 51;
          let vWidth = 32;
          let vHeight = 27;

          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapId == 2) {
            hWidth = 36;
            hHeight = 32;
            vWidth = 43;
            vHeight = 55;
          } // 宽1200 高1500


          let width = Math.ceil(1200 / hWidth) * hWidth;
          let height = Math.ceil(1500 / vHeight) * vHeight;

          if (!centerPos) {
            centerPos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).player.node.getPosition().clone();
            centerPos.y += 400;
          }

          this.wallCenterPos = centerPos;
          let top = this.wallTopNode;
          top.getComponent(UITransform).width = width;
          top.getComponent(UITransform).height = hHeight;
          top.getComponent(BoxCollider2D).size.width = width;
          top.getComponent(BoxCollider2D).size.height = hHeight;
          let pos = v3(centerPos.x, centerPos.y + height * 0.5, 0);
          top.setPosition(pos);
          let bottom = this.wallBottomNode;
          bottom.getComponent(UITransform).width = top.getComponent(UITransform).width;
          bottom.getComponent(UITransform).height = top.getComponent(UITransform).height;
          bottom.getComponent(BoxCollider2D).size.width = top.getComponent(BoxCollider2D).size.width;
          bottom.getComponent(BoxCollider2D).size.height = top.getComponent(BoxCollider2D).size.height;
          pos = v3(centerPos.x, centerPos.y - height * 0.5, 0);
          bottom.setPosition(pos);
          let left = this.wallLeftNode;
          left.getComponent(UITransform).width = vWidth;
          left.getComponent(UITransform).height = height;
          left.getComponent(BoxCollider2D).size.width = vWidth;
          left.getComponent(BoxCollider2D).size.height = height;
          pos = v3(centerPos.x - width * 0.5 + vWidth * 0.5, centerPos.y, 0);
          left.setPosition(pos);
          let right = this.wallRightNode;
          right.getComponent(UITransform).width = left.getComponent(UITransform).width;
          right.getComponent(UITransform).height = left.getComponent(UITransform).height;
          right.getComponent(BoxCollider2D).size.width = left.getComponent(BoxCollider2D).size.width;
          right.getComponent(BoxCollider2D).size.height = left.getComponent(BoxCollider2D).size.height;
          pos = v3(centerPos.x + width * 0.5 - vWidth * 0.5, centerPos.y, 0);
          right.setPosition(pos);
          this.refreshWallSideVal();
          this.wallTopNode.getComponent(UIOpacity).opacity = 0;
          this.wallBottomNode.getComponent(UIOpacity).opacity = 0;
          this.wallLeftNode.getComponent(UIOpacity).opacity = 0;
          this.wallRightNode.getComponent(UIOpacity).opacity = 0;
          this.wallShineNode.active = true;
          this.wallShineNode.position = v3(centerPos.x, centerPos.y - 15);
          this.wallShineNode.getComponent(UITransform).width = width * 0.5 + 10;
          this.wallShineNode.getComponent(UITransform).height = height * 0.5 + 10;
          let shineOpacity = this.wallShineNode.getComponent(UIOpacity);
          Tween.stopAllByTarget(shineOpacity);
          tween(shineOpacity).to(0.3, {
            opacity: 255
          }).to(0.3, {
            opacity: 0
          }).union().repeat(3).call(() => {
            this.wallShineNode.active = false;
            this.wallTopNode.getComponent(UIOpacity).opacity = 255;
            this.wallBottomNode.getComponent(UIOpacity).opacity = 255;
            this.wallLeftNode.getComponent(UIOpacity).opacity = 255;
            this.wallRightNode.getComponent(UIOpacity).opacity = 255;
          }).start();
        }

        refreshWallSideVal() {
          this.wallTopVal = this.wallTopNode.position.y - 20;
          this.wallBottomVal = this.wallBottomNode.position.y + 30;
          this.wallLeftVal = this.wallLeftNode.position.x + 20;
          this.wallRightVal = this.wallRightNode.position.x - 20;
        }

        hideWallLayer() {
          this.wallLayer.active = false;
        }

        fightPause() {
          this.pauseVal++;

          if (this.pauseVal > 1) {
            return;
          }

          let camera = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapFightCamera;
          let width = view.getVisibleSize().width;
          let height = view.getVisibleSize().height;
          let texture = new RenderTexture();
          texture.reset({
            width: width,
            height: height
          }); // 原生平台上会出现花屏（UI摄像机残留问题），因此暂时隐藏UI根节点，等待截屏完成后再恢复

          find("Canvas/Camera").active = false;
          camera.targetTexture = texture; // 执行渲染，单个渲染会报错，那就直接全部渲染一次吧（单个渲染：cc.director.root.pipeline.render([camera.camera]);）

          director.root.frameMove(0);
          camera.targetTexture = null;
          find("Canvas/Camera").active = true;
          let sp = new SpriteFrame();
          sp.texture = texture;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapLayer.fightCapNode.getComponent(Sprite).spriteFrame = sp;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapLayer.fightCapNode.active = true;
          this.node.active = false;
        }

        fightResume() {
          this.pauseVal--;

          if (this.pauseVal > 0) {
            return;
          }

          let camera = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapFightCamera;
          camera.targetTexture = null;
          this.node.active = true;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapLayer.fightCapNode.active = false;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.stopMove();
        }

        updateLogic(dt) {
          if (!this.stopTimeCount) {
            // 时间
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).time += dt; // 经验池

            this.expTimeCount += dt;

            while (this.expTimeCount >= 1) {
              this.expTimeCount--;

              if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).expTypeRow) {
                if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).time >= (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).expTypeRow.startTime && (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).time <= (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).expTypeRow.endTime) {
                  (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                    error: Error()
                  }), mapModel) : mapModel).expPool += (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                    error: Error()
                  }), mapModel) : mapModel).expTypeRow.expSpeed;
                } else {
                  (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                    error: Error()
                  }), mapModel) : mapModel).expTypeRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                    error: Error()
                  }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                    error: Error()
                  }), constants) : constants).tableName.expType, (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                    error: Error()
                  }), mapModel) : mapModel).expTypeRow.id + 1);
                }

                this.setString((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).mapLayer.expNumNode, (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).expPool);
              }
            }
          }

          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapLayer.refreshTimeNode();

          if (this.skillBombCd > 0) {
            this.skillBombCd -= dt;
          } else {
            this.skillBombCd = 0;
          }

          if (this.skillHealCd > 0) {
            this.skillHealCd -= dt;
          } else {
            this.skillHealCd = 0;
          } // 各个子系统


          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).weaponSystem.updateLogic(dt);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).monsterSystem.updateLogic(dt);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.updateLogic(dt);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).propSystem.updateLogic(dt);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).bulletSystem.updateLogic(dt);
        }

        updatePhysicsWorld() {
          (_crd && physicsWorld === void 0 ? (_reportPossibleCrUseOfphysicsWorld({
            error: Error()
          }), physicsWorld) : physicsWorld).step((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapFightLayer);
        }

        updateBoxHintLayer(dt) {
          let minDis = 999999;
          let minProp = null;
          let playerPos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.position;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).propSystem.forAllPropById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).propIds.box2, prop => {
            let node = prop.node;
            let pos = node.position;
            let tf = node.getComponent(UITransform);
            let add = (tf.width + tf.height) * 0.5;

            if (Math.abs(pos.x - playerPos.x) <= (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).visibleHalfSize.width + add && Math.abs(pos.y - playerPos.y) <= (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).visibleHalfSize.height + add) {
              return;
            }

            let dis = Vec2.distance(pos, playerPos);

            if (dis < minDis) {
              minDis = dis;
              minProp = prop;
            }
          });

          if (!minProp) {
            this.boxHintNode.active = false;
            return;
          }

          this.boxHintNode.active = true;
          let direction = minProp.node.getPosition().subtract(playerPos);
          let angle = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).radianToAngle(Math.atan2(direction.y, direction.x));
          this.boxArrowNode.angle = angle;
          let propPos = minProp.node.position;
          let gap = 80;
          let x = propPos.x - playerPos.x;
          let halfWidth = view.getVisibleSize().width * 0.5 - gap;

          if (x > halfWidth) {
            x = halfWidth;
          } else if (x < -halfWidth) {
            x = -halfWidth;
          }

          let y = propPos.y - playerPos.y;
          let halfHeight = view.getVisibleSize().height * 0.5 - gap;

          if (y > halfHeight - 320) {
            y = halfHeight - 320;
          } else if (y < -halfHeight) {
            y = -halfHeight;
          }

          this.boxHintNode.position = v3(x, y);
        } // 获得3选1数组


        getSelectItemArr() {
          let arr = []; // 武器

          let hasFull = false;

          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).weaponSystem.weaponArr.length >= (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).design.weaponNum) {
            hasFull = true;
          }

          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getLastRow((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.weapon);

          for (let i = 1; i <= row.type; i++) {
            let info = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).weaponSystem.getWeaponInfoByType(i);

            if (info) {
              let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.weapon, info.id);

              if (row.lv >= (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).design.maxLv) {
                continue;
              }
            } else if (hasFull) {
              continue;
            }

            let item = {};
            item.name = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.weapon;
            item.weight = 1;
            item.type = i;
            item.info = info;
            arr.push(item);
          } // 主动技能


          hasFull = false;

          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.skillArr.length >= (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).design.skillNum) {
            hasFull = true;
          }

          row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getLastRow((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.skill);

          for (let i = 1; i <= row.type; i++) {
            let info = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).skillSystem.getSkillInfoByType(i);

            if (info) {
              let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.skill, info.id);

              if (row.lv >= (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).design.maxLv) {
                continue;
              }
            } else if (hasFull) {
              continue;
            }

            let item = {};
            item.name = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill;
            item.weight = 1;
            item.type = i;
            item.info = info;
            arr.push(item);
          } // 被动技能


          hasFull = false;

          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.skill2Arr.length >= (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).design.skillNum) {
            hasFull = true;
          }

          row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getLastRow((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.skill2);

          for (let i = 1; i <= row.type; i++) {
            let info = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).skillSystem.getSkill2InfoByType(i);

            if (info) {
              let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.skill2, info.id);

              if (row.lv >= (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).design.maxLv) {
                continue;
              }
            } else if (hasFull) {
              continue;
            }

            let item = {};
            item.name = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill2;
            item.weight = 1;
            item.type = i;
            item.info = info;
            arr.push(item);
          }

          arr = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).getRowsByWeightAndNum(arr, 3);

          while (arr.length < 3) {
            // 补充鸡腿
            let item = {};
            item.name = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop;
            item.id = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.addHpPercent;
            arr.push(item);
          }

          return arr;
        }

        refreshCamera(dt) {
          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapFightCamera.orthoHeight <= (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).cameraOrthoHeight) {
            return;
          }

          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapFightCamera.orthoHeight--;
        }

        update(dt) {
          this.updateBoxHintLayer(dt);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7522555ac8fb34954c7583f567f4439eb0e0259b.js.map