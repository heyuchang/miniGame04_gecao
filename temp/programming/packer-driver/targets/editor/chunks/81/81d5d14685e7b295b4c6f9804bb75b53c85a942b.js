System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, cocosUtil, utilTools, mapModel, physicsGroup, audioManager, _dec, _class, _crd, ccclass, property, Skill4;

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

  function _reportPossibleCrUseOfSkill(extras) {
    _reporterNs.report("Skill", "./Skill", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../../../manager/audioManager", _context.meta, extras);
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
      utilTools = _unresolved_3.utilTools;
    }, function (_unresolved_4) {
      mapModel = _unresolved_4.mapModel;
    }, function (_unresolved_5) {
      physicsGroup = _unresolved_5.physicsGroup;
    }, function (_unresolved_6) {
      audioManager = _unresolved_6.audioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7217e9uGeFO7pt9q5S+9EL8", "Skill4", undefined);

      __checkObsolete__(['Component', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 油桶

      _export("Skill4", Skill4 = (_dec = ccclass('Skill4'), _dec(_class = class Skill4 extends Component {
        constructor(...args) {
          super(...args);
          this.skill = void 0;
          this.timeCount = 0;
          this.isShowing = false;
          this.moveDis = 200;
        }

        init(skill) {
          this.skill = skill;
        } // 扔出油桶


        throwFire() {
          let arr = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).getCircleDirectionArr(this.skill.row.num);
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(arr, direction => {
            let targetPos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).player.node.getPosition().add(direction.multiplyScalar(this.moveDis));
            let extraObj = {
              targetPos: targetPos,
              time: this.skill.getDuration()
            };
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).bulletSystem.addBullet(this.skill.row.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
              error: Error()
            }), physicsGroup) : physicsGroup).PLAYER_BULLET, null, direction, extraObj);
          });
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect(this.skill.row.audio);
        }

        updateLogic(dt) {
          if (this.isShowing) {
            return;
          }

          this.timeCount += dt;

          if (this.timeCount < this.skill.getAtkCd()) {
            return;
          }

          this.timeCount = 0;
          this.isShowing = true;
          this.scheduleOnce(() => {
            this.isShowing = false;
          }, this.skill.getDuration());
          this.throwFire();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=81d5d14685e7b295b4c6f9804bb75b53c85a942b.js.map