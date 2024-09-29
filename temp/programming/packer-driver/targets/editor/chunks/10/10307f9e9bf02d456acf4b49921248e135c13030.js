System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BoxCollider2D, Component, macro, v3, _decorator, cocosUtil, utilTools, mapModel, physicsGroup, _dec, _class, _crd, ccclass, property, Monster6;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphysicsGroup(extras) {
    _reporterNs.report("physicsGroup", "../../../other/physicsGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "./Monster", _context.meta, extras);
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
      macro = _cc.macro;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      utilTools = _unresolved_3.utilTools;
    }, function (_unresolved_4) {
      mapModel = _unresolved_4.mapModel;
    }, function (_unresolved_5) {
      physicsGroup = _unresolved_5.physicsGroup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1277cfcSVMebPwJHxH+Lod", "Monster6", undefined);

      __checkObsolete__(['BoxCollider2D', 'Component', 'macro', 'v3', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 蝎子

      _export("Monster6", Monster6 = (_dec = ccclass('Monster6'), _dec(_class = class Monster6 extends Component {
        constructor(...args) {
          super(...args);
          this.monster = void 0;
          this.moveStop = void 0;
          this.bulletId1 = 1006;
          this.bulletId2 = 1007;
          this.bulletId3 = 1009;
          this.numCount = 0;
          this.otherCollider1 = void 0;
          this.outVec3 = v3(0, 0, 0);
        }

        init(monster) {
          this.monster = monster;
          this.moveStop = false;
          this.otherCollider1 = monster.getComponents(BoxCollider2D)[1];
          this.otherCollider1.enabled = false;
          this.startSkillLogic();
        } // 向指定目标方向移动


        getDirection() {
          let pos = this.monster.node.getPosition();
          let playerPos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.getPosition();

          if (pos.x < playerPos.x) {
            playerPos.x -= 150;
          } else {
            playerPos.x += 150;
          }

          playerPos.subtract(pos).normalize();
          return playerPos;
        }

        startSkillLogic() {
          let time = 1 + Math.random();
          this.scheduleOnce(() => {
            let arr = [{
              id: 3,
              weight: 10
            }, {
              id: 4,
              weight: 20
            }];

            if (this.monster.distancePlayer <= 260) {
              arr.push({
                id: 1,
                weight: 20
              });
            }

            if (this.monster.distancePlayer <= 460) {
              arr.push({
                id: 2,
                weight: 10
              });
            }

            let ret = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).getRowByWeight(arr);
            this["useSkill" + ret.id]();
          }, time);
        }

        useSkill4() {
          if (this.monster.hp <= 0) {
            return;
          }

          this.moveStop = true;
          this.monster.animationCtrl.playAnimation("attack4", true);
          this.numCount = 0;
          this.schedule(() => {
            this.numCount++;
            let pos = this.monster.getInfoPosition(3, true);
            let arr = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).getCircleDirectionArr(6, 150);

            for (let i = 0; i < 1; i++) {
              let index = Math.floor(Math.random() * arr.length);
              let targetPos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).player.node.getPosition().add(arr[index]);
              arr.splice(index, 1);
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).bulletSystem.addBullet(this.bulletId3, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
                error: Error()
              }), physicsGroup) : physicsGroup).MONSTER_BULLET, pos, null, targetPos);
            }

            if (this.numCount >= 3) {
              this.moveStop = false;
              this.monster.animationCtrl.playAnimation("walk", true);
              this.unscheduleAllCallbacks();
              this.startSkillLogic();
            }
          }, 2, macro.REPEAT_FOREVER, 0);
        }

        useSkill3() {
          if (this.monster.hp <= 0) {
            return;
          }

          this.moveStop = true;
          this.monster.animationCtrl.playAnimationOnce("attack3", () => {
            this.moveStop = false;
            this.startSkillLogic();
          });
          let pos = this.monster.getInfoPosition(2, true);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).bulletSystem.addBullet(this.bulletId2, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).MONSTER_BULLET, pos, null);
        } // 与玩家的距离<=460才会触发


        useSkill2() {
          if (this.monster.hp <= 0) {
            return;
          }

          this.moveStop = true;
          this.monster.canFace = false;
          this.monster.animationCtrl.playAnimationOnce("attack2", () => {
            this.moveStop = false;
            this.monster.canFace = true;
            this.startSkillLogic();
          });
          this.scheduleOnce(() => {
            let pos = this.monster.getInfoPosition(0, true);
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).bulletSystem.addBullet(this.bulletId1, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
              error: Error()
            }), physicsGroup) : physicsGroup).MONSTER_BULLET, pos);
          }, 1);
        } // 与玩家的距离<=260才会触发


        useSkill1() {
          if (this.monster.hp <= 0) {
            return;
          }

          this.moveStop = true;
          this.monster.animationCtrl.playAnimationOnce("attack1", () => {
            this.moveStop = false;
            this.otherCollider1.enabled = false;
            this.startSkillLogic();
          });
          this.scheduleOnce(() => {
            this.otherCollider1.enabled = true;
          }, 0.05);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=10307f9e9bf02d456acf4b49921248e135c13030.js.map