System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Collider2D, Color, Contact2DType, macro, v3, _decorator, cocosUtil, utilTools, constants, msgac, designManager, eventManager, mapModel, playerModel, physicsGroup, AnimationCtrl, BaseLayer, ShineColor, Monster, _dec, _class, _crd, ccclass, property, Player;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgac(extras) {
    _reporterNs.report("msgac", "../../data/msgac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventManager(extras) {
    _reporterNs.report("eventManager", "../../manager/eventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerModel(extras) {
    _reporterNs.report("playerModel", "../../model/playerModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphysicsGroup(extras) {
    _reporterNs.report("physicsGroup", "../../other/physicsGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationCtrl(extras) {
    _reporterNs.report("AnimationCtrl", "../base/AnimationCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../base/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShineColor(extras) {
    _reporterNs.report("ShineColor", "../shader/ShineColor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJoystickData(extras) {
    _reporterNs.report("JoystickData", "./GameCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "./monsters/Monster", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Collider2D = _cc.Collider2D;
      Color = _cc.Color;
      Contact2DType = _cc.Contact2DType;
      macro = _cc.macro;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
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
      eventManager = _unresolved_7.eventManager;
    }, function (_unresolved_8) {
      mapModel = _unresolved_8.mapModel;
    }, function (_unresolved_9) {
      playerModel = _unresolved_9.playerModel;
    }, function (_unresolved_10) {
      physicsGroup = _unresolved_10.physicsGroup;
    }, function (_unresolved_11) {
      AnimationCtrl = _unresolved_11.AnimationCtrl;
    }, function (_unresolved_12) {
      BaseLayer = _unresolved_12.BaseLayer;
    }, function (_unresolved_13) {
      ShineColor = _unresolved_13.ShineColor;
    }, function (_unresolved_14) {
      Monster = _unresolved_14.Monster;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf7c7EXLGBBJYgKGeHmF0f7", "Player", undefined);

      __checkObsolete__(['Collider2D', 'Color', 'Contact2DType', 'macro', 'Node', 'v3', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Player", Player = (_dec = ccclass('Player'), _dec(_class = class Player extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor(...args) {
          super(...args);
          this.moveSpeed = 350;
          this.hp = 100;
          this.hpMax = 100;
          this.hpMaxOrign = 100;
          this.atk = 0;
          this.bodyNode = void 0;
          this.effectAnimationCtrl = void 0;
          this.lightShine = false;
          this.collider = void 0;
          this.animationCtrl = void 0;
          this.shineColor = void 0;
          this.hpProgress = void 0;
          this.movePos = void 0;
          this.outVec3 = v3(0, 0, 0);
          this.monsterArr = [];
          this.wallCollider = void 0;
        }

        onLoad() {
          super.onLoad();
          this.collider = this.getComponent(Collider2D);
          this.bodyNode = this.getNodeByPath("body");
          this.hpProgress = this.getNodeByPath("hpProgress");
          this.animationCtrl = this.bodyNode.addComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
            error: Error()
          }), AnimationCtrl) : AnimationCtrl);
          this.shineColor = this.bodyNode.addComponent(_crd && ShineColor === void 0 ? (_reportPossibleCrUseOfShineColor({
            error: Error()
          }), ShineColor) : ShineColor);
          this.effectAnimationCtrl = this.getNodeByPath("body/effect").addComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
            error: Error()
          }), AnimationCtrl) : AnimationCtrl);
          this.effectAnimationCtrl.node.active = false;
          this.collider.on(Contact2DType.BEGIN_CONTACT, this.contactBegin, this);
          this.collider.on(Contact2DType.END_CONTACT, this.contactEnd, this);
          this.moveSpeed = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.roleSpeed;
          this.setRoleSkin(this.bodyNode);
        }

        onEnable() {
          super.onEnable();
          this.addEventArr([(_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).joystick]);
        }

        onDestroy() {}

        initData(data) {
          this.hp = data.hp;
          this.hpMax = this.hp;
          this.hpMaxOrign = this.hp;
          this.atk = data.atk;
          this.initUI();
        }

        initUI() {
          this.collider.enabled = true;
          this.refreshHpLayer();
        }

        getSaveData() {
          let data = {};
          data.moveSpeed = this.moveSpeed;
          data.hp = this.hp;
          data.hpMax = this.hpMax;
          data.hpMaxOrign = this.hpMaxOrign;
          data.atk = this.atk;
          data.pos = this.node.position;
          return data;
        }

        loadSaveData(data) {
          this.moveSpeed = data.moveSpeed;
          this.hp = data.hp;
          this.hpMax = data.hpMax;
          this.hpMaxOrign = data.hpMaxOrign;
          this.atk = data.atk;
          this.node.position = data.pos;
          this.refreshHpLayer();
        } // 提高生命上限百分比


        addHpMaxPercent(p) {
          let lastHpMax = this.hpMax;
          let nowHpMax = this.hpMaxOrign * (1 + p);
          nowHpMax = Math.round(nowHpMax);
          let addHp = nowHpMax - lastHpMax;
          this.hpMax = nowHpMax;
          this.addHp(addHp);
        } // 增加血量百分比


        addHpPercent(p) {
          this.effectAnimationCtrl.node.active = true;
          this.effectAnimationCtrl.playAnimation("zhiliao", false, () => {
            this.effectAnimationCtrl.node.active = false;
          });
          let val = this.hpMax * p;
          this.addHp(val);
        }

        addHp(num) {
          if (this.hp <= 0) {
            // 已阵亡
            return;
          }

          num = Math.ceil(num);
          this.hp += num;

          if (num > 0) {
            // 回复血量
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).numSystem.addNum(num, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpace(this.node), Color.GREEN);
          } else {
            // 伤害数字
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).numSystem.addNum(num, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpace(this.node), Color.RED);
          }

          if (this.hp > this.hpMax) {
            this.hp = this.hpMax;
          }

          if (this.hp < 0) {
            this.hp = 0;
          }

          this.refreshHpLayer();
        }

        refreshHpLayer() {
          this.setProgressBar(this.hpProgress, this.hp / this.hpMax);
        }

        useSkillHeal(percent) {
          this.addHpPercent(percent);
        }

        backLife() {
          this.hp = this.hpMax;
          this.animationCtrl.playAnimation((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).animations.walk, true);
          this.effectAnimationCtrl.node.active = true;
          this.effectAnimationCtrl.playAnimation("hudun", true);
          this.lightShine = true;
          this.scheduleOnce(() => {
            this.effectAnimationCtrl.node.active = false;
            this.lightShine = false;
          }, 3);
          this.refreshHpLayer();
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapLayer.gameFightResume();
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapLayer.onSkillSelect();
        }

        hitWithDam(dam, shineColor) {
          if (dam <= 0 || this.hp <= 0) {
            return;
          }

          if (this.lightShine) {
            // 无敌状态
            return;
          }

          dam = dam * (1 - (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.getSkill2DamSubPercent());
          dam = Math.ceil(dam);
          this.addHp(-dam); // 闪白

          this.shineColor.startShine((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).materials.shineColorSpine, shineColor);

          if (this.hp <= 0) {
            if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).skillLifeNum > 0) {
              // 自动复活
              (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).skillLifeNum--;
              this.backLife();
              (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
                error: Error()
              }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
                error: Error()
              }), msgac) : msgac).mapRefreshSkill);
              return;
            }

            this.collider.enabled = false;
            this.animationCtrl.playAnimation((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).animations.die, false, () => {
              // 弹出复活界面
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).mapLayer.popLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).layers.BackLifeLayer);
            });
          }
        }

        addMonster(collider) {
          if (collider.tag != 0) {
            return;
          }

          let monster = collider.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
            error: Error()
          }), Monster) : Monster);
          let index = this.monsterArr.indexOf(monster);

          if (index == -1) {
            monster.isPauseMove = true;
            this.monsterArr.push(monster);
          }
        }

        removeMonster(collider) {
          if (collider.tag != 0) {
            return;
          }

          let monster = collider.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
            error: Error()
          }), Monster) : Monster);
          let index = this.monsterArr.indexOf(monster);

          if (index != -1) {
            monster.isPauseMove = false;
            this.monsterArr.splice(index, 1);
          }
        }

        contactBegin(selfCollider, otherCollider) {
          if (otherCollider.group == (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).MONSTER) {
            let monster = otherCollider.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
              error: Error()
            }), Monster) : Monster);

            if (!monster) {
              monster = otherCollider.node.parent.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
                error: Error()
              }), Monster) : Monster);
            }

            this.addMonster(otherCollider);
            monster.contactBeginPlayer();
            return;
          }

          if (otherCollider.group == (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).WALL) {
            this.touchWall();
            this.unschedule(this.touchWall);
            this.wallCollider = otherCollider;
            this.schedule(this.touchWall, 0.5, macro.REPEAT_FOREVER, 0);
            return;
          }
        }

        contactEnd(selfCollider, otherCollider) {
          if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(otherCollider)) {
            return;
          }

          if (otherCollider.group == (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).MONSTER) {
            let monster = otherCollider.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
              error: Error()
            }), Monster) : Monster);

            if (!monster) {
              monster = otherCollider.node.parent.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
                error: Error()
              }), Monster) : Monster);
            }

            this.removeMonster(otherCollider);
            monster.contactEndPlayer();
            return;
          }

          if (otherCollider.group == (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).WALL) {
            if (this.wallCollider == otherCollider) {
              this.unschedule(this.touchWall);
            }

            return;
          }
        }

        touchWall() {
          let dam = this.hpMax * 0.05;
          dam = Math.ceil(dam);
          this.hitWithDam(dam);
        }

        joystickRet(data) {
          if (data.type == "start") {
            if (this.hp <= 0) {
              return;
            }

            this.animationCtrl.playAnimation((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).animations.walk, true);
            return;
          }

          if (data.type == "move") {
            this.movePos = data.pos;
            return;
          }

          if (data.type == "end") {
            this.stopMove();
          }
        }

        stopMove() {
          this.movePos = null;

          if (this.hp > 0) {
            this.animationCtrl.playAnimation((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).animations.standBy, true);
          }
        }

        getMoveSpeed() {
          return this.moveSpeed * (1 + (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.getSkill2PlayerSpeedAddPercent());
        }

        move(dt) {
          if (!this.movePos || this.hp <= 0) {
            return;
          }

          let nowPos = this.node.getPosition(this.outVec3);
          let dis = this.getMoveSpeed() * dt;
          let movePos = this.movePos.clone().multiplyScalar(dis);
          nowPos.add(movePos);
          this.node.setPosition(nowPos);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.adjustInWall(this.node);
          let scale = this.bodyNode.getScale();

          if (movePos.x >= 0) {
            // 向右
            this.bodyNode.setScale(-Math.abs(scale.x), scale.y);
          } else {
            // 向左
            this.bodyNode.setScale(Math.abs(scale.x), scale.y);
          }

          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.refreshMapFightWindow();

          if (this.monsterArr.length > 0) {
            // 模拟推开怪物
            (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).forArr(this.monsterArr, monster => {
              monster.playerForceMove(movePos.clone());
            });
          }

          this.setString((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapLayer.playerPosNode, Math.floor(nowPos.x) + "," + Math.floor(nowPos.y));
        }

        update(dt) {
          this.move(dt);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=32464e539e4f66129399e03ba6e82c8bd3c0cc1e.js.map