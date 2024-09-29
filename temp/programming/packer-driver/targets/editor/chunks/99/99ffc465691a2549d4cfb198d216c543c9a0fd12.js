System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, macro, Vec2, _decorator, cocosUtil, mapModel, physicsGroup, HintNames, _dec, _class, _crd, ccclass, property, bullet1102;

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
      macro = _cc.macro;
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

      _cclegacy._RF.push({}, "abffdk5IzhFA42U89k/78pc", "Bullet1102", undefined);

      __checkObsolete__(['Component', 'macro', 'Vec2', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 技能-轰炸机-子弹

      _export("bullet1102", bullet1102 = (_dec = ccclass('bullet1102'), _dec(_class = class bullet1102 extends Component {
        constructor(...args) {
          super(...args);
          this.bullet = void 0;
          this.outScreenNotRecycle = true;
          this.targetPos = void 0;
          this.hint = void 0;
        }

        init(bullet) {
          this.bullet = bullet;
          this.targetPos = this.bullet.extraObj;
          this.hint = null;
          this.scheduleOnce(() => {
            this.bullet.isFollow = true;
            this.bullet.rotateSpeed = Math.PI * 6;
          }, 0.02 + Math.random() * 0.02);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).hintSystem.addHint((_crd && HintNames === void 0 ? (_reportPossibleCrUseOfHintNames({
            error: Error()
          }), HintNames) : HintNames).targetPos2, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpaceWithPos(this.node, this.targetPos), 0, hint => {
            if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).isValid(this) || !this.node.activeInHierarchy) {
              hint.recycleSelf();
              return;
            }

            this.hint = hint;
          });
          this.schedule(dt => {
            let speed = this.bullet.speed;
            speed -= 20;

            if (speed < 200) {
              speed = 200;
            }

            this.bullet.speed = speed;

            if (Vec2.distance(this.targetPos, this.node.getPosition()) <= 100) {
              this.arriveTargetPos();
            }
          }, 0.1, macro.REPEAT_FOREVER);
        }

        arriveTargetPos() {
          this.bullet.recycleSelf();

          if ((_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(this.hint)) {
            this.hint.hint.recycleSelf();
          } // 爆炸


          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).bulletSystem.addBullet(this.bullet.id + 1, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).PLAYER_BULLET, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace(this.node));
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=99ffc465691a2549d4cfb198d216c543c9a0fd12.js.map