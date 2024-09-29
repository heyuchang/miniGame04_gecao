System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, tween, _decorator, cocosUtil, mapModel, physicsGroup, _dec, _class, _crd, ccclass, property, bullet1041;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphysicsGroup(extras) {
    _reporterNs.report("physicsGroup", "../../../other/physicsGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "./Bullet", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      tween = _cc.tween;
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

      _cclegacy._RF.push({}, "5a38fyki0NACYwygEQJj3a1", "Bullet1041", undefined);

      __checkObsolete__(['Component', 'tween', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 技能-油桶

      _export("bullet1041", bullet1041 = (_dec = ccclass('bullet1041'), _dec(_class = class bullet1041 extends Component {
        constructor(...args) {
          super(...args);
          this.bullet = void 0;
        }

        init(bullet) {
          this.bullet = bullet;
          this.node.angle = 0;
          tween(this.node).by(0.6, {
            angle: -360
          }).repeatForever().start();
          let targetPos = this.bullet.extraObj.targetPos;
          tween(this.node).to(0.6, {
            position: targetPos
          }, {
            easing: "quadOut"
          }).call(() => {
            this.bullet.recycleSelf(); // 燃烧火焰

            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).bulletSystem.addBullet(this.bullet.id + 1, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
              error: Error()
            }), physicsGroup) : physicsGroup).PLAYER_BULLET, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpace(this.node), null, this.bullet.extraObj.time);
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7c35a9eba2172018fe2a62dd549cd470b3c28e21.js.map