System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BoxCollider2D, Component, find, macro, PhysicsSystem2D, ProgressBar, sp, Tween, v2, v3, Vec2, Vec3, view, _decorator, cocosUtil, constants, designManager, mapModel, physicsGroup, AnimationCtrl, ShineColor, _dec, _class, _crd, ccclass, property, Monster;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphysicsGroup(extras) {
    _reporterNs.report("physicsGroup", "../../../other/physicsGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationCtrl(extras) {
    _reporterNs.report("AnimationCtrl", "../../base/AnimationCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShineColor(extras) {
    _reporterNs.report("ShineColor", "../../shader/ShineColor", _context.meta, extras);
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
      find = _cc.find;
      macro = _cc.macro;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      ProgressBar = _cc.ProgressBar;
      sp = _cc.sp;
      Tween = _cc.Tween;
      v2 = _cc.v2;
      v3 = _cc.v3;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      view = _cc.view;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      constants = _unresolved_3.constants;
    }, function (_unresolved_4) {
      designManager = _unresolved_4.designManager;
    }, function (_unresolved_5) {
      mapModel = _unresolved_5.mapModel;
    }, function (_unresolved_6) {
      physicsGroup = _unresolved_6.physicsGroup;
    }, function (_unresolved_7) {
      AnimationCtrl = _unresolved_7.AnimationCtrl;
    }, function (_unresolved_8) {
      ShineColor = _unresolved_8.ShineColor;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "078f39vCbpFAImUpwpfNSnW", "Monster", undefined);

      __checkObsolete__(['BoxCollider2D', 'Color', 'Component', 'find', 'macro', 'Node', 'PhysicsSystem2D', 'ProgressBar', 'sp', 'Tween', 'v2', 'v3', 'Vec2', 'Vec3', 'view', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Monster", Monster = (_dec = ccclass('Monster'), _dec(_class = class Monster extends Component {
        constructor(...args) {
          super(...args);
          this.id = void 0;
          this.hp = 0;
          this.hpMax = void 0;
          this.atk = 0;
          this.speed = 0;
          this.row = void 0;
          this.isBoss = 0;
          this.isPauseMove = void 0;
          this.canFace = true;
          this.distancePlayer = void 0;
          this.bodyNode = void 0;
          this.collider = void 0;
          this.hpProgress = void 0;
          this.isSpine = void 0;
          this.shineColor = void 0;
          this.animationCtrl = void 0;
          this.direction = void 0;
          this.touchPlayerTimeCount = 0;
          this.targetDirection = void 0;
          this.vec3Obj = {
            playerPos: v3(0, 0, 0),
            nodePos: v3(0, 0, 0),
            nodeScale: v3(0, 0, 0),
            hpScale: v3(0, 0, 0),
            bodyNodeScale: v3(0, 0, 0),
            outVec3: v3(0, 0, 0),
            vec3Temp: v3(0, 0, 0)
          };
          this.raycastDis = 0;
          this.sideRadian = 0;
          this.waitHit = void 0;
          this.monsterUtil = void 0;
        }

        onLoad() {
          this.bodyNode = find("body", this.node);
          this.collider = this.node.getComponent(BoxCollider2D);
          let hpProgressNode = find("hpProgress", this.node);

          if (hpProgressNode) {
            this.hpProgress = hpProgressNode.getComponent(ProgressBar);
          }

          if (this.bodyNode.getComponent(sp.Skeleton)) {
            this.isSpine = true;
          } else {
            this.isSpine = false;
          }

          this.shineColor = this.bodyNode.addComponent(_crd && ShineColor === void 0 ? (_reportPossibleCrUseOfShineColor({
            error: Error()
          }), ShineColor) : ShineColor);
          this.animationCtrl = this.bodyNode.addComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
            error: Error()
          }), AnimationCtrl) : AnimationCtrl);
          this.vec3Obj.bodyNodeScale = this.bodyNode.getScale().clone();
        }

        onEnable() {}

        onDisable() {}

        onDestroy() {}

        setBodySkin() {
          let sk = this.bodyNode.getComponent(sp.Skeleton);

          if (!sk) {
            return;
          }

          if (this.row.type != (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).monsterTypes.boss) {
            return;
          }

          let flag = 1;

          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapId == 3 || (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapId == 4) {
            flag = 2;
          }

          sk.setSkin("skin" + flag);
        }

        init(id) {
          if (!this.bodyNode) {
            this.onLoad();
          }

          this.node.setScale(v3(1, 1, 1));
          this.unscheduleAllCallbacks();
          Tween.stopAllByTarget(this.node);

          if (this.shineColor) {
            this.shineColor.removeShineColorMaterial();
          }

          this.canFace = true;
          this.isPauseMove = false;
          this.distancePlayer = 0;
          this.touchPlayerTimeCount = 0;
          this.targetDirection = null;
          this.collider.enabled = true;
          this.animationCtrl.playAnimation((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).animations.walk);
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.monster, id);
          this.row = row;
          this.waitHit = false;
          this.raycastDis = this.collider.size.width / 2;
          this.sideRadian = Math.random() > 0.5 ? Math.PI / 2 : -Math.PI / 2; // 初始位置生成规则：屏幕边缘的随机一个位置

          let size = view.getVisibleSize();
          let pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).getRectPos((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node, size.width + 100, size.height + 100);
          this.node.position = pos;
          this.id = id;
          this.atk = row.atk;
          this.hp = row.hp;
          this.speed = row.speed;

          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).floor > 0) {
            let floorRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.towerFloor, (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).floor);
            let hp = this.hp * (1 + floorRow.hp / 100);
            this.hp = Math.ceil(hp);
            this.atk = Math.ceil(this.atk * (1 + floorRow.atk / 100));
          }

          if (row.type != (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).monsterTypes.boss) {
            // 额外加强
            let mapRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.map, (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).mapId);
            let atkP = 1;

            if (mapRow && mapRow.atk > 0) {
              atkP = mapRow.atk;
            }

            let hpP = 1;

            if (mapRow && mapRow.hp > 0) {
              hpP = mapRow.hp;
            }

            this.atk = this.atk * atkP;
            this.hp = this.hp * hpP; // 怪物随着时间加强

            let arr = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getTable((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.monsterTimeAdd);
            let addRow = null;

            for (let i = 0; i < arr.length; i++) {
              let row = arr[i];

              if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).time <= row.time) {
                addRow = row;
                break;
              }
            }

            if (!addRow) {
              addRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getLastRow((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.monsterTimeAdd);
            }

            this.speed = Math.ceil(this.speed * addRow.speed);
            this.hp = Math.ceil(this.hp * addRow.hp);
            this.atk = Math.ceil(this.atk * addRow.atk);
          }

          this.hpMax = this.hp;
          this.isBoss = 0;
          this.refreshHpLayer();
          this.setBodySkin();

          try {
            let monsterStr = "Monster" + id;

            switch (id) {
              case 13:
              case 16:
              case 17:
                monsterStr = "Monster13";
                break;

              case 12:
              case 18:
                monsterStr = "Monster12";
                break;

              case 25:
                monsterStr = "Monster4";
                break;

              case 26:
                monsterStr = "Monster5";
                break;

              case 27:
                monsterStr = "Monster6";
                break;

              case 28:
                monsterStr = "Monster23";
                break;

              case 29:
                monsterStr = "Monster22";
                break;

              case 30:
                monsterStr = "Monster21";
                break;

              default:
                break;
            }

            let monsterUtil = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).addComponentOnce(this, monsterStr);
            monsterUtil.unscheduleAllCallbacks();
            this.monsterUtil = monsterUtil; // @ts-ignore

            monsterUtil.init(this);
          } catch (e) {}
        }

        getSaveData() {
          let data = {};
          data.id = this.id;
          data.hp = this.hp;
          data.atk = this.atk;
          data.pos = this.node.position;
          data.isBoss = this.isBoss;
          return data;
        }

        loadSaveData(data) {
          this.hp = data.hp;
          this.atk = data.atk;
          this.node.position = data.pos;
          this.isBoss = data.isBoss;
          this.refreshHpLayer();

          if (this.isBoss) {
            // 缓存boss对象
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).monsterSystem.bossMonster = this;
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).mapLayer.refreshBossHpLayer();
          }
        }

        animationEndCallback(aniName) {
          this.recycleSelf();
        }

        recycleSelf() {
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).monsterSystem.recycleMonsterNode(this.node);
        } // 蹭到玩家


        contactBeginPlayer() {
          this.touchPlayer();
          this.unschedule(this.touchPlayer);
          this.schedule(this.touchPlayer, this.row.touchTime, macro.REPEAT_FOREVER);
        } // 结束蹭玩家


        contactEndPlayer() {
          this.unschedule(this.touchPlayer);
        }

        touchPlayer() {
          if (this.touchPlayerTimeCount < this.row.touchTime) {
            return;
          }

          this.touchPlayerTimeCount = 0;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.hitWithDam(this.atk);
        } // 来自玩家的挤压


        playerForceMove(movePos) {
          let playerPos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.getPosition();
          let pos = this.node.getPosition();
          playerPos.subtract(pos).negative(); // 只有挡在玩家前进方向的怪物才需要推开

          let radian = Vec2.angle(playerPos, movePos);

          if (radian > Math.PI * 0.7) {
            return;
          }

          playerPos.normalize().multiplyScalar(movePos.length());
          pos.add(playerPos);
          this.node.setPosition(pos);
        } // 来自其他怪物的挤压


        monsterForceMove(monster, movePos) {
          if (this.isPauseMove) {
            return;
          }

          let monsterPos = monster.node.getPosition();
          let pos = this.node.getPosition();
          monsterPos.subtract(pos).negative(); // 只有挡在怪物前进方向的怪物才需要推开

          let radian = Vec2.angle(monsterPos, movePos);

          if (radian > Math.PI * 0.7) {
            return;
          }

          monsterPos.normalize().multiplyScalar(movePos.length());
          pos.add(monsterPos);
          this.node.setPosition(pos);
        } // 受到伤害


        hitWithDam(dam, shineColor) {
          if (this.hp <= 0 || dam <= 0) {
            return;
          } // 再加上玩家局外的攻击力


          dam = dam + (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.atk; // 缩放

          this.bodyNode.scale = this.vec3Obj.bodyNodeScale;
          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).tweenHitScale(this.bodyNode, 0.05);

          if (this.shineColor && this.row.type != (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).monsterTypes.boss) {
            // 闪白
            let materialPath = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).materials.shineColor;

            if (this.isSpine) {
              materialPath = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).materials.shineColorSpine;
            }

            this.shineColor.startShine(materialPath, shineColor);
          }

          this.hp -= dam;

          if (this.hp < 0) {
            this.hp = 0;
          }

          this.refreshHpLayer();

          if (this.isBoss) {
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).mapLayer.bossSubHp(dam);
          }

          if (this.id == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).monsterIds.boxMonster) {
            // 宝箱怪掉金币
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).propSystem.addProp((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.boxMonsterCoin, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpace(this.node));
          }

          if (this.hp <= 0) {
            // 怪物阵亡
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).mapSystem.monsterDead(this.id, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpace(this.node));
            this.unschedule(this.touchPlayer);
            this.collider.enabled = false;
            this.animationCtrl.playAnimation((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).animations.die, false, aniName => {
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).monsterSystem.monsterDead(this.id);
              this.animationEndCallback(aniName);

              if (this.monsterUtil && this.monsterUtil.selfDead) {
                this.monsterUtil.selfDead();
              }
            });

            if (this.monsterUtil) {
              this.monsterUtil.unscheduleAllCallbacks();
            }
          } // 伤害数字


          let color = null;

          if (dam >= (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.damColor2) {
            color = "#f56d0a";
          } else if (dam >= (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.damColor1) {
            color = "#e1b600";
          }

          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).numSystem.addNum(dam, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace(this.node), color);
        }

        refreshHpLayer() {
          if (!this.hpProgress) {
            return;
          }

          this.hpProgress.progress = this.hp / this.hpMax;
        }

        setDirection(direction) {
          this.direction = direction.normalize();
        }

        getBulletDirection() {
          let direction = null;

          if (this.node.getScale().x > 0) {
            // 向左
            direction = v3(-1, 0, 0);
          } else {
            // 向右
            direction = v3(1, 0, 0);
          }

          return direction;
        }

        getInfoPosition(index, isWorld) {
          let p = this.node.getPosition();
          let infoNode = find("info", this.node);

          if (index > 0) {
            infoNode = find("info" + index, this.node);
          }

          if (infoNode) {
            infoNode.active = false; // 位置修正

            let infoPos = infoNode.getPosition();

            if (this.node.scale.x < 0) {
              infoPos.x = -infoPos.x;
            }

            p.x += infoPos.x;
            p.y += infoPos.y;
          }

          if (isWorld) {
            p = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpaceWithPos(this.node, p);
          }

          return p;
        }

        getMoveSpeed() {
          return this.speed;
        }

        updateLogic(dt) {
          // 向目标点移动，默认是玩家
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.getPosition(this.vec3Obj.playerPos);
          this.node.getPosition(this.vec3Obj.nodePos);
          let direction = null;

          if (this.monsterUtil && this.monsterUtil.getDirection) {
            direction = this.monsterUtil.getDirection();
          } else {
            direction = this.vec3Obj.playerPos.subtract(this.vec3Obj.nodePos).normalize();
          }

          let targetDirection = null;

          for (let i = 0; i < 2; i++) {
            let dir = direction;

            if (i == 1) {
              dir = Vec3.rotateZ(this.vec3Obj.outVec3, direction, Vec3.ZERO, this.sideRadian);
              dir = dir.normalize();
            }

            let mp = dir.multiplyScalar(this.raycastDis);
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).vec3CopyVal(this.vec3Obj.vec3Temp, this.vec3Obj.nodePos);
            let endPos = this.vec3Obj.vec3Temp.add(mp);
            endPos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpaceWithPos(this.node, endPos);
            let colliderArr = PhysicsSystem2D.instance.testPoint(v2(endPos.x, endPos.y));
            let has = false;

            for (let k = 0; k < colliderArr.length; k++) {
              let collider = colliderArr[k];

              if (collider != this.collider && collider.node != this.node && collider.group == (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
                error: Error()
              }), physicsGroup) : physicsGroup).MONSTER) {
                has = true;
                break;
              }
            }

            if (!has) {
              targetDirection = dir;
              break;
            }
          }

          this.targetDirection = targetDirection;

          if (!this.targetDirection) {
            return;
          }

          this.targetDirection = this.targetDirection.clone();
        }

        move(dt) {
          this.touchPlayerTimeCount += dt;

          if (this.hp <= 0) {
            return;
          }

          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.getPosition(this.vec3Obj.playerPos);
          this.node.getPosition(this.vec3Obj.nodePos);
          this.distancePlayer = Vec2.distance(this.vec3Obj.nodePos, this.vec3Obj.playerPos); // 朝向玩家

          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.hp > 0 && this.canFace) {
            this.node.getScale(this.vec3Obj.nodeScale);

            if (this.hpProgress) {
              this.hpProgress.node.getScale(this.vec3Obj.hpScale);
            }

            if (this.vec3Obj.nodePos.x >= this.vec3Obj.playerPos.x) {
              this.vec3Obj.nodeScale.x = Math.abs(this.vec3Obj.nodeScale.x);

              if (this.hpProgress) {
                this.vec3Obj.hpScale.x = 1;
              }
            } else {
              this.vec3Obj.nodeScale.x = -Math.abs(this.vec3Obj.nodeScale.x);

              if (this.hpProgress) {
                this.vec3Obj.hpScale.x = -1;
              }
            }

            this.node.scale = this.vec3Obj.nodeScale;

            if (this.hpProgress) {
              this.hpProgress.node.scale = this.vec3Obj.hpScale;
            }
          }

          let speed = this.getMoveSpeed();

          if (speed <= 0 || this.isPauseMove) {
            return;
          }

          if (this.monsterUtil && this.monsterUtil.moveStop) {
            return;
          }

          if (this.monsterUtil && this.monsterUtil.minDisPlayer > 0 && this.distancePlayer <= this.monsterUtil.minDisPlayer) {
            return;
          }

          if (!this.targetDirection) {
            return;
          }

          let dis = speed * dt;
          let movePos = this.targetDirection.normalize().multiplyScalar(dis);
          this.direction = movePos;
          this.node.position = this.vec3Obj.nodePos.add(movePos);

          if (this.row.type == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).monsterTypes.boss) {
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).mapSystem.adjustInWall(this.node);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bbe42b0b93f72a21e7545b6cb5e1ecb4a119157a.js.map