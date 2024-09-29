System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, cocosUtil, utilTools, mapModel, physicsGroup, _dec, _class, _crd, ccclass, property, Skill2;

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

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../bullet/Bullet", _context.meta, extras);
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
      utilTools = _unresolved_3.utilTools;
    }, function (_unresolved_4) {
      mapModel = _unresolved_4.mapModel;
    }, function (_unresolved_5) {
      physicsGroup = _unresolved_5.physicsGroup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cbd1f3j4KpGZ7/YK+g+k7hQ", "Skill2", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 转盘

      _export("Skill2", Skill2 = (_dec = ccclass('Skill2'), _dec(_class = class Skill2 extends Component {
        constructor(...args) {
          super(...args);
          this.skill = void 0;
          this.isShowing = false;
          this.timeCount = 0;
          this.bulletArr = void 0;
        }

        init(skill) {
          this.skill = skill;
          this.bulletArr = [];
          this.isShowing = false;
        }

        showDisks() {
          let arr = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).getCircleDirectionArr(this.skill.row.num, 160);
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(arr, direction => {
            let extraObj = {
              direction: direction,
              endCb: bullet => {
                if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                  error: Error()
                }), cocosUtil) : cocosUtil).isValid(this.node)) {
                  bullet.recycleSelf();
                  return;
                }

                if (this.bulletArr.indexOf(bullet) == -1) {
                  this.bulletArr.push(bullet);
                }
              }
            };
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).bulletSystem.addBullet(this.skill.row.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
              error: Error()
            }), physicsGroup) : physicsGroup).PLAYER_BULLET2, null, null, extraObj);
          });
        }

        hideDisks(isAtOnce = false) {
          this.bulletArr.forEach(bullet => {
            if ((_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).isValid(bullet)) {
              bullet.bulletUtil.hide(isAtOnce);
            }
          });
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
            this.hideDisks();
          }, this.skill.getDuration());
          this.showDisks();
        }

        forceDestroy() {
          this.hideDisks(true);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e6450f1b8acb596668b87feeef7e5c557fc96bd3.js.map