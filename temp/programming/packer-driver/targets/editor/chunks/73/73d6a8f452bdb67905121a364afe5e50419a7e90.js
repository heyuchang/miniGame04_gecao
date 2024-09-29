System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, cocosUtil, audioManager, mapModel, physicsGroup, _dec, _class, _crd, ccclass, property, Skill8;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../../../manager/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphysicsGroup(extras) {
    _reporterNs.report("physicsGroup", "../../../other/physicsGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "../monsters/Monster", _context.meta, extras);
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
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      audioManager = _unresolved_3.audioManager;
    }, function (_unresolved_4) {
      mapModel = _unresolved_4.mapModel;
    }, function (_unresolved_5) {
      physicsGroup = _unresolved_5.physicsGroup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e67c7liWxNJYobtbo6ozbz", "Skill8", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 闪电

      _export("Skill8", Skill8 = (_dec = ccclass('Skill8'), _dec(_class = class Skill8 extends Component {
        constructor(...args) {
          super(...args);
          this.skill = void 0;
          this.timeCount = 0;
        }

        init(skill) {
          this.skill = skill;
        }

        updateLogic(dt) {
          this.timeCount += dt;

          if (this.timeCount < this.skill.getAtkCd()) {
            return;
          }

          let arr = [];
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).monsterSystem.forVisibleMonster(monster => {
            let pos = monster.node.position;
            let playerPos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).player.node.position;

            if (Math.abs(pos.x - playerPos.x) > (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).visibleHalfSize.width - 100) {
              return;
            }

            if (Math.abs(pos.y - playerPos.y) > (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).visibleHalfSize.height - 150) {
              return;
            }

            arr.push(monster);
          });

          if (arr.length <= 0) {
            return;
          }

          this.timeCount = 0;

          for (let i = 0; i < this.skill.row.num; i++) {
            this.scheduleOnce(() => {
              if (arr.length <= 0) {
                return;
              }

              let index = Math.floor(Math.random() * arr.length);
              let monster = arr[index];

              if (monster.hp <= 0) {
                return;
              }

              let pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).convertToWorldSpace(monster.node);
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).bulletSystem.addBullet(this.skill.row.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
                error: Error()
              }), physicsGroup) : physicsGroup).PLAYER_BULLET, pos);
              (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
                error: Error()
              }), audioManager) : audioManager).playEffect(this.skill.row.audio);
            }, i * 0.3);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=73d6a8f452bdb67905121a364afe5e50419a7e90.js.map