System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BoxCollider2D, Component, Contact2DType, find, Tween, v3, Vec2, Vec3, _decorator, cocosUtil, utilTools, constants, audioManager, designManager, mapModel, physicsGroup, Monster, _dec, _class, _crd, ccclass, property, Bullet;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../../../manager/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphysicsGroup(extras) {
    _reporterNs.report("physicsGroup", "../../../other/physicsGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "../monsters/Monster", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      BoxCollider2D = _cc.BoxCollider2D;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
      find = _cc.find;
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
      constants = _unresolved_4.constants;
    }, function (_unresolved_5) {
      audioManager = _unresolved_5.audioManager;
    }, function (_unresolved_6) {
      designManager = _unresolved_6.designManager;
    }, function (_unresolved_7) {
      mapModel = _unresolved_7.mapModel;
    }, function (_unresolved_8) {
      physicsGroup = _unresolved_8.physicsGroup;
    }, function (_unresolved_9) {
      Monster = _unresolved_9.Monster;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e223cwh0a9GWbHSl49R/0HT", "Bullet", undefined);

      __checkObsolete__(['BoxCollider2D', 'Collider2D', 'Component', 'Contact2DType', 'find', 'Node', 'Tween', 'v3', 'Vec2', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bullet", Bullet = (_dec = ccclass('Bullet'), _dec(_class = class Bullet extends Component {
        constructor(...args) {
          super(...args);
          this.id = void 0;
          this.row = void 0;
          this.direction = void 0;
          this.isDestroyInNoShow = void 0;
          this.extraObj = void 0;
          this.speed = void 0;
          this.atk = void 0;
          this.bodyNode = void 0;
          this.collider = void 0;
          this.bulletUtil = void 0;
          this.timeCount = void 0;
          this.contactItemArr = void 0;
          this.isFollow = false;
          this.rotateSpeed = Math.PI / 3;
          this.vec3Obj = {
            targetPos: v3(0, 0, 0),
            direction: v3(0, 0, 0),
            outVec3: v3(0, 0, 0)
          };
        }

        onLoad() {
          this.collider = this.node.getComponent(BoxCollider2D);

          if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.contactBegin, this);
            this.collider.on(Contact2DType.END_CONTACT, this.contactEnd, this);
          }

          this.bodyNode = find("body", this.node);
        }

        onDestroy() {}

        init(id, group, startWorldPos, direction, extraObj) {
          if (!this.bodyNode) {
            this.onLoad();
          }

          if (this.collider) {
            this.collider.group = group;
            this.collider.enabled = true;
          }

          this.id = id;
          this.extraObj = extraObj;

          if (!startWorldPos) {
            // 默认起始位置为玩家位置
            startWorldPos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpace((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).player.node);
          }

          let pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToNodeSpace(this.node, startWorldPos);
          this.node.setPosition(pos);

          if (!direction) {
            // 默认朝向玩家
            direction = this.getFacePlayerDirection();
          }

          if (direction.x == 0 && direction.y == 0) {
            direction.x = 1;
          }

          this.direction = direction.clone().normalize();
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.bullet, id);
          this.row = row;
          this.speed = row.speed;
          this.atk = row.atk;
          let angle = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).radianToAngle(Math.atan2(this.direction.y, this.direction.x));
          this.node.angle = angle;
          this.timeCount = 0;
          this.isFollow = false;
          this.contactItemArr = [];
          this.isDestroyInNoShow = false;
          Tween.stopAllByTarget(this.node);
          this.unscheduleAllCallbacks();

          try {
            let bulletUtilStr = this.node.name;

            switch (this.node.name) {
              case "bullet1011":
              case "bullet1012":
                bulletUtilStr = "bullet1011";
                break;

              case "bullet1021":
              case "bullet1022":
                bulletUtilStr = "bullet1021";
                break;

              case "bullet1041":
              case "bullet1043":
                bulletUtilStr = "bullet1041";
                break;

              case "bullet1042":
              case "bullet1044":
                bulletUtilStr = "bullet1042";
                break;

              case "bullet1051":
              case "bullet1053":
                bulletUtilStr = "bullet1051";
                break;

              case "bullet1052":
              case "bullet1054":
                bulletUtilStr = "bullet1052";
                break;

              case "bullet1061":
              case "bullet1062":
                bulletUtilStr = "bullet1061";
                break;

              case "bullet1081":
              case "bullet1082":
                bulletUtilStr = "bullet1081";
                break;

              case "bullet1091":
              case "bullet1092":
                bulletUtilStr = "bullet1091";
                break;

              case "bullet1101":
              case "bullet1104":
                bulletUtilStr = "bullet1101";
                break;

              case "bullet1102":
              case "bullet1105":
                bulletUtilStr = "bullet1102";
                break;

              case "bullet1103":
              case "bullet1106":
                bulletUtilStr = "bullet1103";
                break;

              default:
                break;
            }

            let bulletUtil = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).addComponentOnce(this, bulletUtilStr);
            bulletUtil.unscheduleAllCallbacks();
            this.bulletUtil = bulletUtil; // @ts-ignore

            bulletUtil.init(this);
          } catch (e) {}
        }

        getFacePlayerDirection() {
          let pos = this.node.getPosition();
          return (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.getPosition().subtract(pos);
        }

        setDirection(direction) {
          this.direction = direction.normalize();
        }

        contactBegin(selfCollider, otherCollider) {
          let contactItem = null;

          if (otherCollider.group == (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).MONSTER && otherCollider.tag == 0) {
            contactItem = otherCollider.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
              error: Error()
            }), Monster) : Monster);
          } else if (otherCollider.group == (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).PLAYER) {
            contactItem = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).player;
          }

          if (contactItem) {
            // 子弹打到敌方
            if (this.contactEnmeyCanHide()) {
              this.recycleSelf();
            } else {
              if (this.contactItemArr.indexOf(contactItem) == -1) {
                this.contactItemArr.push(contactItem);
                contactItem.contactBulletTime = 0;
              }
            }

            if (this.bulletUtil && this.bulletUtil.contactBegin) {
              this.bulletUtil.contactBegin(otherCollider.node);
            }

            let dam = this.atk;

            if (this.extraObj && this.extraObj.atkPercentAdd > 0) {
              dam = dam * (1 + this.extraObj.atkPercentAdd);
              dam = Math.ceil(dam);
            }

            contactItem.hitWithDam(dam, this.getShineColor());
            (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
              error: Error()
            }), audioManager) : audioManager).playEffect(this.row.audio);
          } // 玩家子弹打敌方子弹


          if (otherCollider.group == (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).MONSTER_BULLET) {
            let bullet = otherCollider.getComponent(Bullet);

            if (bullet.contactEnmeyCanHide()) {
              bullet.recycleSelf();
            }
          }
        }

        contactEnd(selfCollider, otherCollider) {
          let contactItem = null;

          if (otherCollider.group == (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).MONSTER) {
            contactItem = otherCollider.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
              error: Error()
            }), Monster) : Monster);
          } else if (otherCollider.group == (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).PLAYER) {
            contactItem = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).player;
          }

          if (contactItem) {
            let index = this.contactItemArr.indexOf(contactItem);

            if (index != -1) {
              this.contactItemArr.splice(index, 1);
            }
          }
        }

        getShineColor() {
          if (this.bulletUtil && this.bulletUtil.shineColor) {
            return this.bulletUtil.shineColor;
          }
        } // 碰到敌人是否消失


        contactEnmeyCanHide() {
          if (this.bulletUtil && this.bulletUtil.contactNotHide) {
            return false;
          }

          return true;
        } // 飞到屏幕外，是否可以销毁


        outScreenCanRecyle() {
          if (this.bulletUtil && this.bulletUtil.outScreenNotRecycle) {
            return false;
          }

          return true;
        }

        recycleSelf() {
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).bulletSystem.recycleBulletNode(this.node);

          if (this.bulletUtil && this.bulletUtil.recycleSelfEnd) {
            this.bulletUtil.recycleSelfEnd();
          }

          Tween.stopAllByTarget(this.node);
          Tween.stopAllByTarget(this.bodyNode);
          this.unscheduleAllCallbacks();

          if (this.bulletUtil) {
            this.bulletUtil.unscheduleAllCallbacks();
          }
        }

        getFollowTargetPos() {
          if (this.bulletUtil && this.bulletUtil.targetPos) {
            return (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).vec3CopyVal(this.vec3Obj.targetPos, this.bulletUtil.targetPos);
          } // 默认跟踪玩家


          return (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).vec3CopyVal(this.vec3Obj.targetPos, (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.position);
        }

        update(dt) {
          let canMove = true;

          if (this.bulletUtil && this.bulletUtil.moveStop) {
            canMove = false;
          }

          if (this.speed <= 0) {
            canMove = false;
          }

          if (canMove) {
            let dis = this.speed * dt;
            let pos = this.node.position;

            if (this.isFollow) {
              // 根据转速，慢慢调整角度
              let targetPos = this.getFollowTargetPos();
              let direction = targetPos.subtract(pos).normalize();
              let radian1 = Math.atan2(direction.y, direction.x);

              if (radian1 < 0) {
                radian1 += Math.PI * 2;
              }

              let radian2 = Math.atan2(this.direction.y, this.direction.x);

              if (radian2 < 0) {
                radian2 += Math.PI * 2;
              }

              let dr = this.rotateSpeed * dt;
              let maxDr = Math.abs(radian1 - radian2);

              if (dr > maxDr) {
                dr = maxDr;
              }

              if (radian1 > radian2) {
                if (radian1 - radian2 > Math.PI) {
                  dr = -dr;
                }
              } else {
                if (radian2 - radian1 < Math.PI) {
                  dr = -dr;
                }
              }

              this.direction = Vec3.rotateZ(this.vec3Obj.outVec3, this.direction, Vec3.ZERO, dr);
              let angle = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).radianToAngle(Math.atan2(this.direction.y, this.direction.x));
              this.node.angle = angle;
            } else {
              let angle = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).radianToAngle(Math.atan2(this.direction.y, this.direction.x));
              this.node.angle = angle;
            }

            let lastDirection = null;

            if (this.bulletUtil && this.bulletUtil.targetPos && this.bulletUtil.arriveTargetPos) {
              // 需要判断是否到达目的地
              let targetPos = this.getFollowTargetPos();
              lastDirection = targetPos.subtract(pos);
            }

            pos.add((_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).vec3CopyVal(this.vec3Obj.direction, this.direction).multiplyScalar(dis));
            this.node.position = pos;

            if (lastDirection) {
              let targetPos = this.getFollowTargetPos();
              let afterDirection = targetPos.subtract(pos);
              let afterAngle = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).radianToAngle(Vec2.angle(lastDirection, afterDirection));

              if (afterAngle > 90) {
                // 到达目的地
                this.bulletUtil.arriveTargetPos();
                return;
              }
            }
          }

          if (this.contactItemArr.length > 0) {
            (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).forArr(this.contactItemArr, contactItem => {
              contactItem.contactBulletTime += dt;
              let timeGap = 0.5;

              if (this.bulletUtil && this.bulletUtil.contactBulletTime > 0) {
                timeGap = this.bulletUtil.contactBulletTime;
              }

              if (contactItem.contactBulletTime >= timeGap) {
                contactItem.contactBulletTime = 0;
                contactItem.hitWithDam(this.atk, this.getShineColor());
                (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
                  error: Error()
                }), audioManager) : audioManager).playEffect(this.row.audio);
              }
            });
          }

          this.timeCount += dt;

          if (this.timeCount >= 2 && this.outScreenCanRecyle() && !(_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).isInScreenVisible(this.node)) {
            this.recycleSelf();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cab714196cd4237f514e3f251b6cb8c0e23d1ff6.js.map