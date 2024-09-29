System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, tween, Vec2, _decorator, cocosUtil, mapModel, physicsGroup, HintNames, _dec, _class, _crd, ccclass, property, bullet13;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphysicsGroup(extras) {
    _reporterNs.report("physicsGroup", "../../../other/physicsGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHintNames(extras) {
    _reporterNs.report("HintNames", "../hint/Hint", _context.meta, extras);
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
      Vec2 = _cc.Vec2;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      mapModel = _unresolved_3.mapModel;
    }, function (_unresolved_4) {
      physicsGroup = _unresolved_4.physicsGroup;
    }, function (_unresolved_5) {
      HintNames = _unresolved_5.HintNames;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aede7nqKw5NJo4zrdexd5GL", "Bullet13", undefined);

      __checkObsolete__(['Component', 'tween', 'Vec2', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 蝎子-静态扳手

      _export("bullet13", bullet13 = (_dec = ccclass('bullet13'), _dec(_class = class bullet13 extends Component {
        constructor() {
          super(...arguments);
          this.bullet = void 0;
          this.moveStop = void 0;
          this.bulletId = 1010;
        }

        init(bullet) {
          this.bullet = bullet;
          this.moveStop = true;
          this.bullet.node.angle = 0;
          var targetPos = this.bullet.extraObj;
          var dis = Vec2.distance(this.bullet.node.getPosition(), targetPos);
          var time = dis / this.bullet.speed;
          tween(this.bullet.node).by(time, {
            angle: 360
          }).start();
          tween(this.bullet.node).to(time, {
            position: targetPos
          }).call(() => {
            this.bullet.recycleSelf();
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).bulletSystem.addBullet(this.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
              error: Error()
            }), physicsGroup) : physicsGroup).MONSTER_BULLET, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpace(this.bullet.node));
          }).start();
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).hintSystem.addHint((_crd && HintNames === void 0 ? (_reportPossibleCrUseOfHintNames({
            error: Error()
          }), HintNames) : HintNames).targetPos, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpaceWithPos(this.bullet.node, targetPos), 0, time);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fd78efff08e4b8bb7605c454680a44b6f2ec9c75.js.map