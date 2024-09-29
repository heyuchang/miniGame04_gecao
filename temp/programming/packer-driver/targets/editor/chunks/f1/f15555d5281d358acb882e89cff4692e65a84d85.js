System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, cocosUtil, constants, designManager, mapModel, _dec, _class, _crd, ccclass, property, Skill;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
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
      constants = _unresolved_3.constants;
    }, function (_unresolved_4) {
      designManager = _unresolved_4.designManager;
    }, function (_unresolved_5) {
      mapModel = _unresolved_5.mapModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dde34pvTzRH+5WvlfuMvxTK", "Skill", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Skill", Skill = (_dec = ccclass('Skill'), _dec(_class = class Skill extends Component {
        constructor(...args) {
          super(...args);
          this.info = void 0;
          this.id = void 0;
          this.row = void 0;
          this.skillUtil = void 0;
        }

        onLoad() {}

        async init(info) {
          this.info = info;
          let id = info.id;
          this.id = id;
          this.unscheduleAllCallbacks();
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.skill, id);
          this.row = row;

          try {
            let skillUtil = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).addComponentOnce(this, "Skill" + row.type);
            skillUtil.unscheduleAllCallbacks();
            this.skillUtil = skillUtil; // @ts-ignore

            skillUtil.init(this);
          } catch (e) {}
        }

        getDuration() {
          let duration = this.row.duration;
          duration = duration * (1 + (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.getSkill2DurationAddPercent());
          return duration;
        }

        getAtkCd() {
          let cd = this.row.cd;
          cd = cd * (1 - (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.getSkill2AtkCdSubPercent());
          return cd;
        }

        updateLogic(dt) {
          if (this.skillUtil && this.skillUtil.updateLogic) {
            this.skillUtil.updateLogic(dt);
          }
        }

        onDestroy() {
          this.unscheduleAllCallbacks();

          if (this.skillUtil) {
            this.skillUtil.unscheduleAllCallbacks();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f15555d5281d358acb882e89cff4692e65a84d85.js.map