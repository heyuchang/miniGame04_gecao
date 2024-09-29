System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BoxCollider2D, Component, find, tween, _decorator, cocosUtil, utilTools, mapModel, physicsGroup, HintNames, _dec, _class, _crd, ccclass, property, Monster21;

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

  function _reportPossibleCrUseOfHintNames(extras) {
    _reporterNs.report("HintNames", "../hint/Hint", _context.meta, extras);
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
      find = _cc.find;
      tween = _cc.tween;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      utilTools = _unresolved_3.utilTools;
    }, function (_unresolved_4) {
      mapModel = _unresolved_4.mapModel;
    }, function (_unresolved_5) {
      physicsGroup = _unresolved_5.physicsGroup;
    }, function (_unresolved_6) {
      HintNames = _unresolved_6.HintNames;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a9b34fAHwBDCLZD4fzme57X", "Monster21", undefined);

      __checkObsolete__(['BoxCollider2D', 'Component', 'find', 'tween', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 炸弹巨人

      _export("Monster21", Monster21 = (_dec = ccclass('Monster21'), _dec(_class = class Monster21 extends Component {
        constructor() {
          super(...arguments);
          this.monster = void 0;
          this.moveStop = void 0;
          this.bulletId = 1017;
          this.otherCollider1 = void 0;
          this.otherCollider2 = void 0;
          this.otherCollider3 = void 0;
        }

        init(monster) {
          this.monster = monster;
          this.moveStop = false;
          this.otherCollider1 = find("collider1", this.node).getComponent(BoxCollider2D);
          this.otherCollider2 = find("collider2", this.node).getComponent(BoxCollider2D);
          this.otherCollider3 = find("collider3", this.node).getComponent(BoxCollider2D);
          this.resetColliders();
          this.startSkillLogic();
        }

        resetColliders() {
          this.otherCollider1.enabled = false;
          this.otherCollider2.enabled = false;
          this.otherCollider3.enabled = false;
        }

        startSkillLogic() {
          this.scheduleOnce(() => {
            var arr = [{
              id: 2,
              weight: 10
            }, {
              id: 3,
              weight: 10
            }];
            var skill1Tag = this.getSkill1Tag();

            if (skill1Tag > 0) {
              arr.push({
                id: 1,
                weight: 100,
                tag: skill1Tag
              });
            }

            var ret = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).getRowByWeight(arr);

            if (ret) {
              this["useSkill" + ret.id](ret);
            } else {
              this.startSkillLogic();
            }
          }, 1.5 + Math.random());
        }

        getSkill1Tag() {
          if (this.monster.distancePlayer >= 560) {
            return 0;
          }

          var pos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.position.clone().subtract(this.node.position);
          var angle = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).vec2XAngle(pos);

          if (angle >= 345 || angle <= 15 || angle >= 165 && angle <= 195) {
            // 中间
            return 1;
          }

          if (angle >= 30 && angle <= 60 || angle >= 120 && angle <= 150) {
            // 上面
            return 2;
          }

          if (angle >= 300 && angle <= 330 || angle >= 210 && angle <= 240) {
            // 下面
            return 3;
          }

          return 0;
        }

        useSkill1(info) {
          if (this.monster.hp <= 0) {
            return;
          }

          this.moveStop = true;
          this.monster.canFace = false;
          var otherCollider = this["otherCollider" + info.tag];
          otherCollider.enabled = true;
          this.monster.animationCtrl.playAnimationOnce("attackHand" + info.tag, () => {
            otherCollider.enabled = false;
            this.monster.canFace = true;
            this.moveStop = false;
            this.startSkillLogic();
          });
        }

        useSkill2() {
          if (this.monster.hp <= 0) {
            return;
          }

          var dis = 500 + Math.random() * 100;
          var time = 1;
          var extraObj = {};
          extraObj.duration = time;
          extraObj.monster = this.monster;
          extraObj.dis = dis;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).hintSystem.addHint((_crd && HintNames === void 0 ? (_reportPossibleCrUseOfHintNames({
            error: Error()
          }), HintNames) : HintNames).blockArrow, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace(this.node), 0, extraObj);
          this.scheduleOnce(() => {
            this.moveStop = true;
            this.monster.canFace = false;
            var pos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).player.node.position.clone();
            pos.subtract(this.node.position).normalize().multiplyScalar(dis);
            var targetPos = this.node.position.clone().add(pos);
            tween(this.node).to(1, {
              position: targetPos
            }, {
              easing: "smooth",
              onUpdate: () => {
                (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).mapSystem.adjustInWall(this.node);
              }
            }).start();
            this.monster.animationCtrl.playAnimationOnce("attack2", () => {
              this.monster.canFace = true;
              this.moveStop = false;
              this.startSkillLogic();
            });
          }, time);
        }

        useSkill3() {
          var _this = this;

          if (this.monster.hp <= 0) {
            return;
          }

          this.moveStop = true;
          this.monster.canFace = false; // 发射4个跟踪子弹

          var direction = this.monster.getBulletDirection();
          this.scheduleOnce(() => {
            var _loop = function _loop(i) {
              _this.scheduleOnce(() => {
                var pos = _this.monster.getInfoPosition(i, true);

                (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).bulletSystem.addBullet(_this.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
                  error: Error()
                }), physicsGroup) : physicsGroup).MONSTER_BULLET, pos, direction);
              }, i * 0.2);
            };

            for (var i = 0; i < 4; i++) {
              _loop(i);
            }
          }, 0.45);
          this.monster.animationCtrl.playAnimationOnce("attack3", () => {
            this.moveStop = false;
            this.monster.canFace = true;
            this.startSkillLogic();
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7e8a874808d8771da8a1ea9c3f3c37199d217cb3.js.map