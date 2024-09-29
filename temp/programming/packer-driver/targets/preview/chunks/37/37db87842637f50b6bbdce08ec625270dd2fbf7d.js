System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BoxCollider2D, Contact2DType, find, Vec2, _decorator, cocosUtil, utilTools, constants, designManager, mapModel, physicsGroup, AnimationCtrl, BaseLayer, _dec, _class, _crd, ccclass, property, Prop;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../../utils/utilTools", _context.meta, extras);
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

  function _reportPossibleCrUseOfphysicsGroup(extras) {
    _reporterNs.report("physicsGroup", "../../../other/physicsGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationCtrl(extras) {
    _reporterNs.report("AnimationCtrl", "../../base/AnimationCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../../base/BaseLayer", _context.meta, extras);
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
      Vec2 = _cc.Vec2;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      utilTools = _unresolved_3.utilTools;
    }, function (_unresolved_4) {
      constants = _unresolved_4.constants;
    }, function (_unresolved_5) {
      designManager = _unresolved_5.designManager;
    }, function (_unresolved_6) {
      mapModel = _unresolved_6.mapModel;
    }, function (_unresolved_7) {
      physicsGroup = _unresolved_7.physicsGroup;
    }, function (_unresolved_8) {
      AnimationCtrl = _unresolved_8.AnimationCtrl;
    }, function (_unresolved_9) {
      BaseLayer = _unresolved_9.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b480cN5zOtEI7gfMoQqAALv", "Prop", undefined);

      __checkObsolete__(['BoxCollider2D', 'Collider2D', 'Contact2DType', 'find', 'Node', 'Vec2', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Prop", Prop = (_dec = ccclass('Prop'), _dec(_class = class Prop extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          this.id = void 0;
          this.row = void 0;
          this.extraObj = void 0;
          this.bodyNode = void 0;
          this.aniNode = void 0;
          this.collider = void 0;
          this.animationCtrl = void 0;
          this.propUtil = void 0;
          this.isFollowPlayer = void 0;
          this.followSpeed = void 0;
        }

        onLoad() {
          this.collider = this.getComponent(BoxCollider2D);
          this.animationCtrl = this.addComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
            error: Error()
          }), AnimationCtrl) : AnimationCtrl);
          this.bodyNode = find("body", this.node);
          this.aniNode = find("ani", this.node);

          if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.contactBegin, this);
          }
        }

        onEnable() {}

        init(id, worldPos, extraObj) {
          if (!this.bodyNode) {
            this.onLoad();
          }

          this.id = id;
          this.row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, id);
          this.extraObj = extraObj;
          this.unscheduleAllCallbacks();

          if (this.collider) {
            this.collider.enabled = true;
          }

          this.isFollowPlayer = false;
          this.followSpeed = -1000;
          var pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToNodeSpace(this.node, worldPos);
          this.node.setPosition(pos);

          if (this.aniNode) {
            this.aniNode.active = true;
          }

          this.setSpriteFrame(this.bodyNode, this.row.icon);

          try {
            this.propUtil = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).addComponentOnce(this, "Prop" + id);
            this.propUtil.unscheduleAllCallbacks();
            this.propUtil.init(this);
          } catch (e) {}
        }

        contactBegin(selfCollider, otherCollider) {
          if (otherCollider.group == (_crd && physicsGroup === void 0 ? (_reportPossibleCrUseOfphysicsGroup({
            error: Error()
          }), physicsGroup) : physicsGroup).PLAYER_BULLET) {
            if (this.id == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.box1) {
              // 打到木箱
              this.collider.enabled = false;
              this.animationCtrl.playAnimationOnce("ani", () => {
                this.recycleSelf(); // 按照权重，产生道具

                var tb = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                  error: Error()
                }), designManager) : designManager).getTable((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).tableName.box1);
                var arr = [];

                for (var i in tb) {
                  var _row = tb[i];

                  if (_row.mapId == 0 || _row.mapId == (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                    error: Error()
                  }), mapModel) : mapModel).mapId) {
                    arr.push(_row);
                  }
                }

                var ret = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                  error: Error()
                }), utilTools) : utilTools).getRowByWeight(arr);
                var num = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                  error: Error()
                }), utilTools) : utilTools).getFloatValue(ret.minNum, ret.maxNum, true);
                var extraObj = {};
                extraObj.num = num;
                extraObj.propId = ret.propId;
                var propId = ret.propId;
                var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                  error: Error()
                }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).tableName.prop, propId);

                if (row.type == 8 || row.type == 11) {
                  propId = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                    error: Error()
                  }), constants) : constants).propIds.equip;
                }

                (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).propSystem.addProp(propId, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                  error: Error()
                }), cocosUtil) : cocosUtil).convertToWorldSpace(this.node), extraObj);
              });
              return;
            }
          }
        }

        contactPlayer() {
          if (this.propUtil && this.propUtil.notContact) {
            return;
          }

          if (this.propUtil && this.propUtil.autoGet) {
            // 自动获得
            return;
          }

          this.node.active = true;

          if (this.collider) {
            this.collider.enabled = false;
          }

          this.isFollowPlayer = true;

          if (this.aniNode) {
            this.aniNode.active = false;
          }

          if (this.propUtil && this.propUtil.contactStart) {
            this.propUtil.contactStart();
          }
        }

        doDisPlayerGet(dis) {
          if (this.collider) {
            // 碰撞体来管理的
            return;
          }

          if (dis > 100 + (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.getSkill2PropGetAddDis()) {
            return;
          }

          this.contactPlayer();
        } // 玩家吃到道具


        playerGetProp() {
          this.recycleSelf();
          this.isFollowPlayer = false;
          var num = 1;

          if (this.extraObj && this.extraObj.num > 0) {
            num = this.extraObj.num;
          }

          var propId = this.id;

          if (this.id == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).propIds.equip) {
            propId = this.extraObj.propId;
          }

          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).propSystem.getProp(propId, num);
        }

        recycleSelf() {
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).propSystem.recyclePropNode(this.node);
        }

        update(dt) {
          if (!this.isFollowPlayer) {
            return;
          }

          var playerPos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.getPosition();
          var pos = this.node.getPosition();
          this.followSpeed += 50;
          var moveDis = this.followSpeed * dt;
          var direction = playerPos.subtract(pos).normalize().multiplyScalar(moveDis);
          pos.add(direction);
          this.node.setPosition(pos);

          if (moveDis > 0) {
            playerPos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).player.node.getPosition();
            var afterDirection = playerPos.subtract(pos);
            var afterAngle = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).radianToAngle(Vec2.angle(direction, afterDirection));

            if (afterAngle > 90) {
              this.playerGetProp();
              return;
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=37db87842637f50b6bbdce08ec625270dd2fbf7d.js.map