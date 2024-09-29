System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, macro, tween, Tween, v3, Vec2, Vec3, _decorator, cocosUtil, utilTools, mapModel, physicsGroup, _dec, _class, _crd, ccclass, property, bullet1101;

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
      tween = _cc.tween;
      Tween = _cc.Tween;
      v3 = _cc.v3;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
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

      _cclegacy._RF.push({}, "75d79Ach4RMub5Zg6PHH5wP", "Bullet1101", undefined);

      __checkObsolete__(['Component', 'macro', 'tween', 'Tween', 'v3', 'Vec2', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 技能-轰炸机

      _export("bullet1101", bullet1101 = (_dec = ccclass('bullet1101'), _dec(_class = class bullet1101 extends Component {
        constructor(...args) {
          super(...args);
          this.bullet = void 0;
          this.hasTweenPlay = false;
          this.outScreenNotRecycle = true;
          this.lv = void 0;
          this.targetDis = 260;
          this.radianSpeed = void 0;
          this.radian = void 0;
          this.shotTimeCount = void 0;
        }

        init(bullet) {
          this.bullet = bullet;
          this.node.angle = 0;
          this.radianSpeed = 0;
          this.setUpDownTween(true);
          let playerPos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.getPosition();
          playerPos.x += 80;
          playerPos.y += 80;
          this.node.setPosition(playerPos);
          this.lv = this.bullet.extraObj.lv;
          this.bullet.extraObj.endCb(this);
        }

        setUpDownTween(isOpen) {
          if (isOpen) {
            if (!this.hasTweenPlay) {
              this.hasTweenPlay = true;
              tween(this.node).by(1, {
                position: v3(0, 20, 0)
              }).by(1, {
                position: v3(0, -20, 0)
              }).union().repeatForever().start();
            }

            return;
          }

          if (this.hasTweenPlay) {
            this.hasTweenPlay = false;
            Tween.stopAllByTarget(this.node);
          }
        }

        startShot(duration) {
          this.radianSpeed = Math.PI * 2 / duration; // 随机一个开始角度

          this.radian = Math.random() * Math.PI * 2; // 每隔一定时间发射一枚子弹

          this.schedule(this.shot, 0.1 - this.lv * 0.01, macro.REPEAT_FOREVER); // duration后，停止轰炸

          this.scheduleOnce(() => {
            this.radianSpeed = 0;
            this.unschedule(this.shot);
          }, duration);
        }

        shot() {
          let pos = v3(this.targetDis + (Math.random() - 0.5) * 50, 0, 0);
          Vec3.rotateZ(pos, pos, Vec3.ZERO, this.radian + (Math.random() - 0.5) * (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).angleToRadian(20));
          let targetPos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.getPosition().add(pos); // 发射角度

          let direction = targetPos.clone().subtract(this.node.getPosition());
          let radian = (Math.random() - 0.5) * (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).angleToRadian(180);
          Vec3.rotateZ(direction, direction, Vec3.ZERO, radian);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).bulletSystem.addBullet(this.bullet.id + 1, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).PLAYER_BULLET, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace(this.node), direction, targetPos);
        }

        update(dt) {
          let pos = this.node.getPosition();
          let playerPos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.getPosition();

          if (pos.x > playerPos.x) {
            this.node.scale = v3(-1, 1, 1);
          } else {
            this.node.scale = v3(1, 1, 1);
          } // 目标位置


          playerPos.x += 80;
          playerPos.y += 80;
          let speed = 0;
          let dis = Vec2.distance(pos, playerPos);

          if (dis > 5) {
            speed = dis * 2;
            let maxSpeed = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).player.getMoveSpeed() * 1.5;

            if (speed > maxSpeed) {
              speed = maxSpeed;
            }
          }

          if (this.hasTweenPlay && dis <= 30) {
            speed = 0;
          }

          if (speed > 0) {
            this.setUpDownTween(false);
            let direction = playerPos.subtract(pos).normalize();
            direction.multiplyScalar(dt * speed);
            pos.add(direction);
            this.node.setPosition(pos);
          } else {
            this.setUpDownTween(true);
          }

          if (this.radianSpeed > 0) {
            this.radian -= this.radianSpeed * dt;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=09530b25ae52573f37323045ca1646594634f8f8.js.map