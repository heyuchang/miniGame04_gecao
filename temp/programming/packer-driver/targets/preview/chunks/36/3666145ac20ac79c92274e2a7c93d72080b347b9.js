System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, v3, Vec3, _decorator, utilTools, mapModel, physicsGroup, _dec, _class, _crd, ccclass, property, Monster4;

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
      Component = _cc.Component;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      utilTools = _unresolved_2.utilTools;
    }, function (_unresolved_3) {
      mapModel = _unresolved_3.mapModel;
    }, function (_unresolved_4) {
      physicsGroup = _unresolved_4.physicsGroup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e9e085vcxPeYkzY2qlwIgU", "Monster4", undefined);

      __checkObsolete__(['Component', 'v3', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 狙击手

      _export("Monster4", Monster4 = (_dec = ccclass('Monster4'), _dec(_class = class Monster4 extends Component {
        constructor() {
          super(...arguments);
          this.monster = void 0;
          this.moveStop = void 0;
          this.bulletId1 = 1002;
          this.bulletId2 = 1003;
          this.minDisPlayer = 300;
          this.outVec3 = v3(0, 0, 0);
        }

        init(monster) {
          this.monster = monster;
          this.moveStop = false;
          this.startSkillLogic();
        }

        startSkillLogic() {
          var time = 2;
          this.scheduleOnce(() => {
            var ret = Math.random();

            if (ret < 0.4) {
              this.useSkill1();
            } else if (ret < 0.7) {
              this.useSkill1(3);
            } else {
              this.useSkill2();
            }
          }, time);
        }

        useSkill2() {
          if (this.monster.hp <= 0) {
            return;
          }

          this.moveStop = true;
          this.monster.animationCtrl.playAnimationOnce("attack", () => {
            this.startSkillLogic();
            this.moveStop = false;
          });
          this.scheduleOnce(() => {
            // 发射一颗大子弹
            var pos = this.monster.getInfoPosition(0, true);
            var direction = this.monster.getBulletDirection();
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).bulletSystem.addBullet(this.bulletId2, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
              error: Error()
            }), physicsGroup) : physicsGroup).MONSTER_BULLET, pos, direction);
          }, 0.5);
        }

        useSkill1(num) {
          if (num === void 0) {
            num = 1;
          }

          if (this.monster.hp <= 0) {
            return;
          }

          this.monster.animationCtrl.playAnimationOnce("attack", () => {
            this.startSkillLogic();
          });
          this.scheduleOnce(() => {
            // 发射三颗跟踪子弹
            var pos = this.monster.getInfoPosition(0, true);
            var direction = this.monster.getBulletDirection();
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).bulletSystem.addBullet(this.bulletId1, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
              error: Error()
            }), physicsGroup) : physicsGroup).MONSTER_BULLET, pos, direction);

            if (num == 3) {
              var radian = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).angleToRadian(50);
              var direction2 = Vec3.rotateZ(this.outVec3, direction, Vec3.ZERO, radian);
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).bulletSystem.addBullet(this.bulletId1, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
                error: Error()
              }), physicsGroup) : physicsGroup).MONSTER_BULLET, pos, direction2);
              var direction3 = Vec3.rotateZ(this.outVec3, direction, Vec3.ZERO, -radian);
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).bulletSystem.addBullet(this.bulletId1, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
                error: Error()
              }), physicsGroup) : physicsGroup).MONSTER_BULLET, pos, direction3);
            }
          }, 0.5);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3666145ac20ac79c92274e2a7c93d72080b347b9.js.map