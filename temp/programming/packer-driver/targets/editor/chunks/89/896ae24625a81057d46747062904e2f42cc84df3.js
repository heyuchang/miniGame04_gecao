System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, mapModel, physicsGroup, _dec, _class, _crd, ccclass, property, Skill1;

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphysicsGroup(extras) {
    _reporterNs.report("physicsGroup", "../../../other/physicsGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkill(extras) {
    _reporterNs.report("Skill", "./Skill", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      mapModel = _unresolved_2.mapModel;
    }, function (_unresolved_3) {
      physicsGroup = _unresolved_3.physicsGroup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "830f6qSuddKTprK/5yh1tKg", "Skill1", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 锤子

      _export("Skill1", Skill1 = (_dec = ccclass('Skill1'), _dec(_class = class Skill1 extends Component {
        constructor(...args) {
          super(...args);
          this.skill = void 0;
          this.num = 0;
          this.timeCount = 0;
        }

        init(skill) {
          this.skill = skill;
        }

        subNum() {
          this.num--;
        }

        updateLogic(dt) {
          this.timeCount += dt;

          if (this.num >= this.skill.row.num) {
            // 数量已达上限
            return;
          }

          if (this.timeCount < this.skill.getAtkCd()) {
            return;
          }

          this.timeCount = 0;
          this.num++;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).bulletSystem.addBullet(this.skill.row.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).PLAYER_BULLET2, null, null, this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=896ae24625a81057d46747062904e2f42cc84df3.js.map