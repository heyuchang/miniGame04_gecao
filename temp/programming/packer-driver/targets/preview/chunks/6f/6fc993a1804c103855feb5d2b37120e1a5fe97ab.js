System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, cocosUtil, audioManager, mapModel, physicsGroup, _dec, _class, _crd, ccclass, property, Skill10;

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

      _cclegacy._RF.push({}, "2ec28RxfxxHDoN+BZbdSRbr", "Skill10", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 轰炸机

      _export("Skill10", Skill10 = (_dec = ccclass('Skill10'), _dec(_class = class Skill10 extends Component {
        constructor() {
          super(...arguments);
          this.skill = void 0;
          this.timeCount = 0;
          this.isShoting = void 0;
          this.robotBullet = void 0;
        }

        init(skill) {
          this.skill = skill;
          this.isShoting = false;
          this.robotBullet = null;
          var extraObj = {
            endCb: bulletUtil => {
              if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).isValid(this.node)) {
                bulletUtil.bullet.recycleSelf();
                return;
              }

              this.robotBullet = bulletUtil;
            },
            lv: this.skill.row.lv
          };
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).bulletSystem.addBullet(this.skill.row.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).PLAYER_BULLET, null, null, extraObj);
        }

        forceDestroy() {
          if ((_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(this.robotBullet)) {
            this.robotBullet.bullet.recycleSelf();
          }
        } // 开始轰炸


        startShoting() {
          var duration = this.skill.getDuration();
          this.isShoting = true;
          this.robotBullet.startShot(duration);
          this.scheduleOnce(() => {
            this.isShoting = false;
            this.timeCount = 0;
          }, duration);
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect(this.skill.row.audio);
        }

        updateLogic(dt) {
          if (!this.robotBullet) {
            return;
          }

          this.timeCount += dt;

          if (this.timeCount < this.skill.getAtkCd()) {
            return;
          }

          if (this.isShoting) {
            return;
          }

          this.startShoting();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6fc993a1804c103855feb5d2b37120e1a5fe97ab.js.map