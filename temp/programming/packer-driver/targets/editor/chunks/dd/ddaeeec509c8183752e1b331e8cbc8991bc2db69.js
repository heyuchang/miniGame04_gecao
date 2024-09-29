System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, tween, v3, Vec2, _decorator, cocosUtil, utilTools, mapModel, physicsGroup, HintNames, _dec, _class, _crd, ccclass, property, bullet9;

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
      v3 = _cc.v3;
      Vec2 = _cc.Vec2;
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
      HintNames = _unresolved_6.HintNames;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9af4fCsYKhK9q9CNw1YrS3I", "Bullet9", undefined);

      __checkObsolete__(['Component', 'tween', 'v3', 'Vec2', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 蝎子-大闪电球

      _export("bullet9", bullet9 = (_dec = ccclass('bullet9'), _dec(_class = class bullet9 extends Component {
        constructor(...args) {
          super(...args);
          this.bullet = void 0;
          this.moveStop = false;
          this.contactNotHide = true;
          this.bulletId = 1008;
          this.timeCount = 0;
        }

        init(bullet) {
          this.bullet = bullet;
          this.timeCount = 0;
          this.moveStop = true;
          let time = 0.7;
          this.bullet.node.setScale(v3(0.1, 0.1, 1));
          tween(this.bullet.node).to(time, {
            scale: v3(1.5, 1.5, 1)
          }).start();
          this.scheduleOnce(() => {
            this.bullet.direction = this.bullet.getFacePlayerDirection().normalize();
            let playerPos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).player.node.getPosition();
            let dis = Vec2.distance(playerPos, this.bullet.node.getPosition());
            let time = dis / this.bullet.speed;
            tween(this.bullet.node).to(time, {
              position: playerPos
            }).call(() => {
              this.bullet.recycleSelf(); // 生成一圈小子弹

              let p = this.bullet.node.getPosition();
              let arr = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).getCircleDirectionArr(10);
              p = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).convertToWorldSpaceWithPos(this.bullet.node, p);
              (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).forArr(arr, direction => {
                (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).bulletSystem.addBullet(this.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
                  error: Error()
                }), physicsGroup) : physicsGroup).MONSTER_BULLET, p, direction);
              }); // 爆炸特效

              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).hintSystem.addHint((_crd && HintNames === void 0 ? (_reportPossibleCrUseOfHintNames({
                error: Error()
              }), HintNames) : HintNames).boom1, p);
            }).start();
          }, time);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ddaeeec509c8183752e1b331e8cbc8991bc2db69.js.map