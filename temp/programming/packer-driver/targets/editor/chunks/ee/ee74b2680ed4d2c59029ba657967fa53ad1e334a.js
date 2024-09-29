System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BoxCollider2D, Component, tween, _decorator, cocosUtil, utilTools, constants, mapModel, physicsGroup, _dec, _class, _crd, ccclass, property, Monster5;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../../data/constants", _context.meta, extras);
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
      tween = _cc.tween;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      utilTools = _unresolved_3.utilTools;
    }, function (_unresolved_4) {
      constants = _unresolved_4.constants;
    }, function (_unresolved_5) {
      mapModel = _unresolved_5.mapModel;
    }, function (_unresolved_6) {
      physicsGroup = _unresolved_6.physicsGroup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90aa12+8vBIH4eHQiBCHUgL", "Monster5", undefined);

      __checkObsolete__(['BoxCollider2D', 'Component', 'tween', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 电锯人

      _export("Monster5", Monster5 = (_dec = ccclass('Monster5'), _dec(_class = class Monster5 extends Component {
        constructor(...args) {
          super(...args);
          this.monster = void 0;
          this.moveStop = void 0;
          this.otherCollider1 = void 0;
          this.otherCollider2 = void 0;
          this.bulletId = 1004;
          this.otherColliderOffset = void 0;
          this.otherColliderSize = void 0;
        }

        init(monster) {
          this.monster = monster;
          this.moveStop = false;
          this.otherCollider1 = monster.getComponents(BoxCollider2D)[1];
          this.otherCollider2 = monster.getComponents(BoxCollider2D)[2];
          this.resetOtherCollider();
          this.startSkillLogic();
        }

        resetOtherCollider() {
          this.otherCollider1.enabled = true;
          this.otherCollider2.enabled = false;
        }

        startSkillLogic() {
          let time = 2 + Math.random() * 2;
          this.scheduleOnce(() => {
            if (this.monster.hp <= 0) {
              return;
            }

            if (Math.random() < 0.6) {
              this.attackWithSkill1();
              return;
            }

            this.attackWithSkill2();
          }, time);
        }

        attackWithSkill1() {
          this.otherCollider1.enabled = false;
          this.otherCollider2.enabled = true;
          this.monster.animationCtrl.playAnimation("attack1", true);
          let speed = this.monster.speed;
          this.monster.speed += speed * 2;
          this.scheduleOnce(() => {
            this.resetOtherCollider();
            this.monster.animationCtrl.playAnimation((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).animations.walk, true);
            this.monster.speed = speed;
            this.startSkillLogic();
          }, 3);
        }

        attackWithSkill2() {
          this.monster.animationCtrl.playAnimationOnce("attack2", () => {
            this.startSkillLogic();
          });
          let pos = this.monster.node.getPosition();
          let direction = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.getPosition().subtract(pos).normalize();
          direction.multiplyScalar(200);
          pos.add(direction);
          tween(this.monster.node).to(0.5, {
            position: pos
          }, {
            easing: "quadOut"
          }).start();
          this.scheduleOnce(() => {
            // 一圈子弹
            let p = this.monster.getInfoPosition();
            let arr = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).getCircleDirectionArr(10);
            p = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpaceWithPos(this.monster.node, p);
            (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).forArr(arr, direction => {
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).bulletSystem.addBullet(this.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
                error: Error()
              }), physicsGroup) : physicsGroup).MONSTER_BULLET, p, direction);
            });
          }, 0.5);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ee74b2680ed4d2c59029ba657967fa53ad1e334a.js.map