System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, audioManager, mapModel, physicsGroup, _dec, _class, _crd, ccclass, property, Skill5;

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
      audioManager = _unresolved_2.audioManager;
    }, function (_unresolved_3) {
      mapModel = _unresolved_3.mapModel;
    }, function (_unresolved_4) {
      physicsGroup = _unresolved_4.physicsGroup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "382170aGEJCa4mWodqatRyD", "Skill5", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 导弹

      _export("Skill5", Skill5 = (_dec = ccclass('Skill5'), _dec(_class = class Skill5 extends Component {
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

          let targetNode = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.getMinDisTargetNode();

          if (!targetNode) {
            return;
          }

          this.timeCount = 0;
          let direction = targetNode.getPosition().subtract((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.getPosition());
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).bulletSystem.addBullet(this.skill.row.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).PLAYER_BULLET2, null, direction);
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
//# sourceMappingURL=936515d5798cf264b00bbaa34d4506e18a8820a4.js.map