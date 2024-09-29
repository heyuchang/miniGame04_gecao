System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BoxCollider2D, Component, _decorator, cocosUtil, utilTools, mapModel, HintNames, _dec, _class, _crd, ccclass, property, Monster23;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
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
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      utilTools = _unresolved_3.utilTools;
    }, function (_unresolved_4) {
      mapModel = _unresolved_4.mapModel;
    }, function (_unresolved_5) {
      HintNames = _unresolved_5.HintNames;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5cf27RV66tLlKtXXvh9WZ1E", "Monster23", undefined);

      __checkObsolete__(['BoxCollider2D', 'Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 盾兵

      _export("Monster23", Monster23 = (_dec = ccclass('Monster23'), _dec(_class = class Monster23 extends Component {
        constructor(...args) {
          super(...args);
          this.monster = void 0;
          this.moveStop = void 0;
          this.otherCollider = void 0;
          this.isFollow = void 0;
          this.monsterId = 14;
        }

        init(monster) {
          this.monster = monster;
          this.moveStop = false;
          this.isFollow = false;
          this.otherCollider = this.getComponents(BoxCollider2D)[1];
          this.resetCollider();
          this.startSkillLogic();
        }

        resetCollider() {
          this.otherCollider.enabled = false;
        }

        startSkillLogic() {
          this.scheduleOnce(() => {
            let arr = [{
              id: 1,
              weight: 10
            }, {
              id: 2,
              weight: 10
            }];
            let ret = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).getRowByWeight(arr);

            if (ret) {
              this["useSkill" + ret.id]();
            } else {
              this.startSkillLogic();
            }
          }, 1.5 + Math.random());
        }

        useSkill1() {
          if (this.monster.hp <= 0) {
            return;
          }

          this.moveStop = true;
          this.monster.canFace = false;
          this.isFollow = true;
          this.monster.collider.enabled = false;
          this.scheduleOnce(() => {
            this.isFollow = false;
          }, 1);
          this.scheduleOnce(() => {
            this.otherCollider.enabled = true;
            this.monster.collider.enabled = true;
          }, 1.5);
          this.monster.animationCtrl.playAnimationOnce("attack1", () => {
            this.monster.canFace = true;
            this.moveStop = false;
            this.resetCollider();
            this.startSkillLogic();
          });
        }

        useSkill2() {
          if (this.monster.hp <= 0) {
            return;
          } // 召唤小怪


          for (let i = 0; i < 3; i++) {
            this.scheduleOnce(() => {
              let pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).getAroundPos(this.node, 150 + 50 * Math.random(), 300);
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).mapSystem.adjustInWall(pos, 160);
              let worldPos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).convertToWorldSpaceWithPos(this.node, pos);
              let extraObj = {};
              extraObj.monsterId = this.monsterId;
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).hintSystem.addHint((_crd && HintNames === void 0 ? (_reportPossibleCrUseOfHintNames({
                error: Error()
              }), HintNames) : HintNames).targetPos3, worldPos, 0, extraObj);
            }, i * 0.6);
          }

          this.startSkillLogic();
        }

        update(dt) {
          if (this.isFollow) {
            this.node.position = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).player.node.getPosition();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f694c12e37873b41dbab841fcaf298146b1adb48.js.map