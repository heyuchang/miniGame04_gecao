System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BoxCollider2D, Contact2DType, find, tween, Tween, v3, Vec2, Vec3, _decorator, cocosUtil, utilTools, constants, audioManager, designManager, mapModel, playerModel, UserData, physicsGroup, BaseLayer, Monster, _dec, _class, _crd, ccclass, property, Weapon;

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

  function _reportPossibleCrUseOfplayerModel(extras) {
    _reporterNs.report("playerModel", "../../../model/playerModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../../../model/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphysicsGroup(extras) {
    _reporterNs.report("physicsGroup", "../../../other/physicsGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../../base/BaseLayer", _context.meta, extras);
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
      Contact2DType = _cc.Contact2DType;
      find = _cc.find;
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
      constants = _unresolved_4.constants;
    }, function (_unresolved_5) {
      audioManager = _unresolved_5.audioManager;
    }, function (_unresolved_6) {
      designManager = _unresolved_6.designManager;
    }, function (_unresolved_7) {
      mapModel = _unresolved_7.mapModel;
    }, function (_unresolved_8) {
      playerModel = _unresolved_8.playerModel;
    }, function (_unresolved_9) {
      UserData = _unresolved_9.UserData;
    }, function (_unresolved_10) {
      physicsGroup = _unresolved_10.physicsGroup;
    }, function (_unresolved_11) {
      BaseLayer = _unresolved_11.BaseLayer;
    }, function (_unresolved_12) {
      Monster = _unresolved_12.Monster;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f10f3YlgP5L4LOzHlrtQCU3", "Weapon", undefined);

      __checkObsolete__(['BoxCollider2D', 'Collider2D', 'Contact2DType', 'find', 'Node', 'tween', 'Tween', 'v3', 'Vec2', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Weapon", Weapon = (_dec = ccclass('Weapon'), _dec(_class = class Weapon extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor(...args) {
          super(...args);
          this.info = void 0;
          this.id = void 0;
          this.direction = void 0;
          this.row = void 0;
          this.atk = void 0;
          this.atkPercentAdd = void 0;
          this.bodyNode = void 0;
          this.collider = void 0;
          this.lightNode = void 0;
          this.forward = void 0;
          this.targetNode = void 0;
          this.outV3 = v3(0, 0, 0);
          this.canFace = true;
          this.parentPos = void 0;
          this.timeCount = 0;
          this.weaponUtil = void 0;
        }

        onLoad() {
          this.collider = this.node.getComponent(BoxCollider2D);

          if (this.collider) {
            this.collider.enabled = false;
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.contactBegin, this);
          }

          this.bodyNode = find("body", this.node);
          this.lightNode = find("light", this.node);
          this.parentPos = this.node.parent.getPosition();
        }

        onDestroy() {
          this.unscheduleAllCallbacks();

          if (this.weaponUtil) {
            this.weaponUtil.unscheduleAllCallbacks();
          }
        }

        init(info) {
          if (!this.bodyNode) {
            this.onLoad();
          }

          this.info = info;
          let id = info.id;
          this.id = id;
          this.unscheduleAllCallbacks();
          Tween.stopAllByTarget(this.bodyNode);
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.weapon, id);
          this.row = row;
          this.atk = row.atk;

          try {
            let weaponUtil = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).addComponentOnce(this, "Weapon" + row.type);
            weaponUtil.unscheduleAllCallbacks();
            this.weaponUtil = weaponUtil; // @ts-ignore

            weaponUtil.init(this);
          } catch (e) {}

          if (this.weaponUtil && this.weaponUtil.isFixedPos) {
            let scale = this.node.getScale();

            if (info.uiIndex == 0 || info.uiIndex == 3) {
              this.node.setScale(v3(Math.abs(scale.x), scale.y, scale.z));
            } else {
              this.node.setScale(v3(-Math.abs(scale.x), scale.y, scale.z));
            }
          }

          this.atkPercentAdd = 0;

          if (this.weaponUtil && this.weaponUtil.weaponId > 0 && (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).floor > 0) {
            // 爬塔武器等级加成
            let lv = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().getWeaponLv(this.weaponUtil.weaponId);
            let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.weaponOpt, lv);
            this.atkPercentAdd = row.atk / 100;
          }

          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).weaponSystem.weaponArr[0] == info) {
            // 主武器攻击力收到vip等级加成
            let vipRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.vip, (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).vipObj.vip);

            if (vipRow) {
              this.atkPercentAdd += vipRow.atkAdd;
            }
          }
        } // 飞镖类


        atkByDart() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect(this.row.audio);
          let p = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace(this.node);
          let extraObj = {};
          extraObj.atkPercentAdd = this.atkPercentAdd;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).bulletSystem.addBullet(this.row.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).PLAYER_BULLET, p, this.direction, extraObj);
          this.timeCount = 0;
          this.bodyNode.active = false;
          tween(this.bodyNode).delay(this.row.atkTime - 0.2).call(() => {
            this.bodyNode.active = true;
            this.bodyNode.setScale(v3(0.1, 0.1, 1));
          }).to(0.2, {
            scale: v3(1, 1, 1)
          }, {
            easing: "quadOut"
          }).start();
        } // 子弹类


        atkByShot() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect(this.row.audio);

          if (this.lightNode) {
            // 枪口闪光
            this.lightNode.active = true;
            this.scheduleOnce(() => {
              this.lightNode.active = false;
            }, 0.03);
          } // 后摇动作


          this.canFace = false;
          let back = this.direction.clone().normalize().negative().multiplyScalar(20);
          let orignPos = this.node.getPosition();
          let time = 0.05;
          tween(this.node).to(time, {
            position: back
          }, {
            easing: "quadOut"
          }).to(time, {
            position: orignPos
          }, {
            easing: "quadIn"
          }).call(() => {
            this.canFace = true;
            this.timeCount = 0;
          }).start();
        } // 拳头类


        atkByFist(atkDis, time) {
          // 攻击距离判断
          if (this.getDisTargetNode() > atkDis) {
            return true;
          }

          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect(this.row.audio);
          let back = this.direction.clone().normalize().negative().multiplyScalar(20);
          let target = this.direction.clone().normalize().multiplyScalar(atkDis);
          let pos = this.node.getPosition();
          this.canFace = false;
          this.forward = false;
          tween(this.node).to(time, {
            position: back
          }, {
            easing: "quadOut"
          }).call(() => {
            this.forward = true;
            this.collider.enabled = true;
          }).to(time * 2, {
            position: target
          }, {
            easing: "quadOut"
          }).call(() => {
            this.forward = false;
            this.collider.enabled = false;

            if (this.weaponUtil && this.weaponUtil.moveMaxFar) {
              this.weaponUtil.moveMaxFar();
            }
          }).to(time * 2, {
            position: pos
          }, {
            easing: "quadIn"
          }).call(() => {
            this.canFace = true;
            this.timeCount = 0;
          }).start();
        } // 甩棍类


        atkByStick(atkDis) {
          // 攻击距离判断
          if (this.getDisTargetNode() > atkDis) {
            return;
          }

          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect(this.row.audio);
          this.canFace = false;
          let angle = this.node.angle;
          let da = 90;
          let time = 0.03;
          tween(this.node).to(time, {
            angle: angle + da
          }).call(() => {
            let extraObj = {};
            extraObj.atkPercentAdd = this.atkPercentAdd;
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).bulletSystem.addBullet(this.row.bulletId, (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
              error: Error()
            }), physicsGroup) : physicsGroup).PLAYER_BULLET, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpace(this.node), this.direction, extraObj);
          }).to(time, {
            angle: angle
          }).to(time, {
            angle: angle - da
          }).call(() => {
            this.canFace = true;
            this.timeCount = 0;
          }).start();
        } // 强制敌人后退一点点


        targetForceMoveBack(node) {
          if (!this.forward) {
            return;
          }

          let monster = node.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
            error: Error()
          }), Monster) : Monster);

          if (!monster || monster.row.type == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).monsterTypes.boss) {
            return;
          }

          let direction = this.direction.clone().normalize().multiplyScalar(50);
          tween(node).by(0.02, {
            position: direction
          }).start();
        }

        getInfoPosition(index, isWorld) {
          let pos = this.node.getPosition();
          let infoNode = find("info", this.node);

          if (index > 0) {
            infoNode = find("info" + index, this.node);
          }

          if (infoNode) {
            infoNode.active = false; // 位置修正

            let infoPos = infoNode.getPosition();
            Vec3.rotateZ(infoPos, infoPos, Vec3.ZERO, (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).angleToRadian(this.node.angle));
            pos.x += infoPos.x;
            pos.y += infoPos.y;
          }

          if (this.weaponUtil && this.weaponUtil.isFixedPos) {
            if (this.node.scale.x < 0) {
              pos.x = -pos.x;
            }
          }

          if (isWorld) {
            pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpaceWithPos(this.node, pos);
          }

          return pos;
        }

        contactBegin(selfCollider, otherCollider) {
          if (otherCollider.group == (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).MONSTER) {
            let monster = otherCollider.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
              error: Error()
            }), Monster) : Monster);

            if (monster) {
              let dam = this.atk;

              if (this.atkPercentAdd > 0) {
                dam = dam * (1 + this.atkPercentAdd);
                dam = Math.ceil(dam);
              }

              monster.hitWithDam(dam);
            }
          }

          if (this.weaponUtil && this.weaponUtil.contactBegin) {
            this.weaponUtil.contactBegin(otherCollider.node);
          }
        }

        getCalPosition() {
          let pos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.getPosition();
          pos.x += this.parentPos.x;
          pos.y += this.parentPos.y;
          return pos;
        }

        getDisTargetNode() {
          if (!this.targetNode) {
            return 999999;
          }

          let dis = Vec2.distance(this.getCalPosition(), this.targetNode.position);
          return dis;
        }

        updateLogic(dt) {
          this.targetNode = null; // 找出距离最近的怪物或木箱

          let targetNode = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.getMinDisTargetNode(this.getCalPosition());

          if (!targetNode) {
            return;
          }

          if (!this.canFace) {
            return;
          }

          this.targetNode = targetNode;
          let pos1 = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace(this.node);
          let pos2 = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace(targetNode); // 左右情况

          let scale = this.node.getScale();

          if (!this.weaponUtil || !this.weaponUtil.isFixedPos) {
            if (pos1.x <= pos2.x) {
              this.node.setScale(v3(scale.x, Math.abs(scale.y), scale.z));
            } else {
              this.node.setScale(v3(scale.x, -Math.abs(scale.y), scale.z));
            }
          } // 瞄准最近怪物


          pos2.subtract(pos1);
          this.direction = pos2;
          let angle = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).radianToAngle(Math.atan2(pos2.y, pos2.x));

          if (this.weaponUtil) {
            if (this.weaponUtil.isFixedDirection) {
              if (angle > -90 && angle <= 90) {
                angle = 0;
              } else {
                angle = 180;
              }
            }

            if (this.weaponUtil.isFixedPos) {
              angle = 0;
            }
          }

          this.node.angle = angle;

          if (!this.weaponUtil || !this.weaponUtil.stopTimeCount) {
            this.timeCount += dt;

            if (this.timeCount >= this.row.atkTime) {
              if (this.weaponUtil && (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).isValid(this.targetNode)) {
                this.weaponUtil.atk();
              }
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=92a32b5a2d1c9b5730335500bc183f83dd89fbf9.js.map