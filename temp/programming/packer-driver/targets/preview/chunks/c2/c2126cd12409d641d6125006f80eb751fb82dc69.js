System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, v3, _decorator, cocosUtil, mapModel, physicsGroup, _dec, _class, _crd, ccclass, property, Monster13;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
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
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      mapModel = _unresolved_3.mapModel;
    }, function (_unresolved_4) {
      physicsGroup = _unresolved_4.physicsGroup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a63cfrFt9BErbNZKvW8LFyP", "Monster13", undefined);

      __checkObsolete__(['Component', 'v3', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 精英机器人

      _export("Monster13", Monster13 = (_dec = ccclass('Monster13'), _dec(_class = class Monster13 extends Component {
        constructor() {
          super(...arguments);
          this.monster = void 0;
          this.moveStop = void 0;
          this.bulletId = 1013;
          this.outVec3 = v3(0, 0, 0);
        }

        init(monster) {
          this.monster = monster;
          this.moveStop = false;

          if (this.monster.id == 16) {
            this.bulletId = 1014;
          } else if (this.monster.id == 17) {
            this.bulletId = 1015;
          }

          this.scheduleOnce(() => {
            this.useSkill();
          }, 1 + Math.random() * 2);
        }

        startSkillLogic() {
          var time = 2 + Math.random();
          this.scheduleOnce(() => {
            this.useSkill();
          }, time);
        }

        useSkill() {
          if (this.monster.hp <= 0) {
            return;
          }

          var p = this.monster.getInfoPosition();
          var direction = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.getPosition().subtract(p);
          p = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpaceWithPos(this.node, p);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).bulletSystem.addBullet(this.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).MONSTER_BULLET, p, direction);
          this.startSkillLogic();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c2126cd12409d641d6125006f80eb751fb82dc69.js.map