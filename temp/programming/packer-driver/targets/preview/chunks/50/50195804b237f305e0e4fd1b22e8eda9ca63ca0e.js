System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, cocosUtil, mapModel, physicsGroup, audioManager, _dec, _class, _crd, ccclass, property, Skill6;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
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
      mapModel = _unresolved_3.mapModel;
    }, function (_unresolved_4) {
      physicsGroup = _unresolved_4.physicsGroup;
    }, function (_unresolved_5) {
      audioManager = _unresolved_5.audioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a25caRHG6FLQY2ATbAvASZS", "Skill6", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 科技球

      _export("Skill6", Skill6 = (_dec = ccclass('Skill6'), _dec(_class = class Skill6 extends Component {
        constructor() {
          super(...arguments);
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
          } // 出射方向随机


          var direction = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).getCircleDirectionArr(1)[0];
          this.timeCount = 0;
          this.num++;
          var extrObj = {
            invokeClass: this,
            time: this.skill.getDuration()
          };
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).bulletSystem.addBullet(this.skill.row.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).PLAYER_BULLET2, null, direction, extrObj);
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect(this.skill.row.audio);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=50195804b237f305e0e4fd1b22e8eda9ca63ca0e.js.map