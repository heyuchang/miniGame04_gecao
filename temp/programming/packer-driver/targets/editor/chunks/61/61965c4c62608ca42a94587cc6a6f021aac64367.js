System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, find, tween, Tween, UIOpacity, v3, _decorator, cocosUtil, utilTools, constants, mapModel, _dec, _class, _crd, ccclass, property, bullet1071;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
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
      find = _cc.find;
      tween = _cc.tween;
      Tween = _cc.Tween;
      UIOpacity = _cc.UIOpacity;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      utilTools = _unresolved_3.utilTools;
    }, function (_unresolved_4) {
      constants = _unresolved_4.constants;
    }, function (_unresolved_5) {
      mapModel = _unresolved_5.mapModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "927fdRjIC5PqoToDG6jaxe2", "Bullet1071", undefined);

      __checkObsolete__(['Color', 'Component', 'find', 'Node', 'tween', 'Tween', 'UIOpacity', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 技能-力场

      _export("bullet1071", bullet1071 = (_dec = ccclass('bullet1071'), _dec(_class = class bullet1071 extends Component {
        constructor(...args) {
          super(...args);
          this.bullet = void 0;
          this.contactNotHide = true;
          this.contactBulletTime = 1;
          this.lv = void 0;
          this.shineColor = void 0;
        }

        init(bullet) {
          this.bullet = bullet;
          this.node.angle = 0;
          let lv = this.bullet.extraObj.lv;
          this.lv = lv;
          let frameColor = "#22D600".parseColor();

          if (lv == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).design.maxLv) {
            frameColor = "#FF00F5".parseColor();
          }

          this.shineColor = frameColor;
          this.initScale();
          Tween.stopAllByTarget(this.bullet.bodyNode);
          let uiOpacity = this.bullet.bodyNode.getComponent(UIOpacity);
          uiOpacity.opacity = 0;
          tween(uiOpacity).to(2, {
            opacity: 255
          }).start();
          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).setRenderableColor(this.bullet.bodyNode, frameColor);
          let frameLayer = find("frameLayer", this.node);
          let time = 0.8;
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(frameLayer.children, (frameNode, index) => {
            frameNode.active = false;
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).setRenderableColor(frameNode, frameColor);
            Tween.stopAllByTarget(frameNode);
            this.scheduleOnce(() => {
              tween(frameNode).call(() => {
                frameNode.active = true;
                frameNode.scale = v3(0, 0, 1);
                frameNode.getComponent(UIOpacity).opacity = 255;
                frameNode.angle = Math.random() * 360;
              }).to(time * 4, {
                scale: v3(0.8, 0.8, 1)
              }).to(time, {
                scale: v3(1, 1, 1)
              }, {
                onUpdate: (node, ratio) => {
                  frameNode.getComponent(UIOpacity).opacity = 255 * (1 - ratio);
                }
              }).union().repeatForever().start();
            }, index * time * 1.25);
          });
          this.bullet.extraObj.endCb(this);
        }

        initScale() {
          let scale = 0.8 + this.lv * 0.4;
          scale += (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.getSkill2RangeAddScale();
          this.node.scale = v3(scale, scale, 1);
        }

        update() {
          // 跟随玩家移动
          let playerPos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.getPosition();
          this.node.setPosition(playerPos);
        }

        recycleSelfEnd() {
          this.unscheduleAllCallbacks();
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(find("frameLayer", this.node).children, frameNode => {
            Tween.stopAllByTarget(frameNode);
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=61965c4c62608ca42a94587cc6a6f021aac64367.js.map