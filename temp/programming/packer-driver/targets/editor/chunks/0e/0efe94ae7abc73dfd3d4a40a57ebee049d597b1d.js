System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, tween, v3, Vec2, _decorator, Tween, cocosUtil, utilTools, mapModel, _dec, _class, _crd, ccclass, property, AnimationTrack;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../model/mapModel", _context.meta, extras);
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
      Tween = _cc.Tween;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      utilTools = _unresolved_3.utilTools;
    }, function (_unresolved_4) {
      mapModel = _unresolved_4.mapModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1aaeck613xITIbUbbtA/wml", "AnimationTrack", undefined);

      __checkObsolete__(['Component', 'tween', 'v3', 'Vec2', 'Vec3', '_decorator', 'Tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AnimationTrack", AnimationTrack = (_dec = ccclass('AnimationTrack'), _dec(_class = class AnimationTrack extends Component {
        constructor(...args) {
          super(...args);
          this.duration = 0.6;
          this.time = 0;
          this.g = -2000;
          this.v = 800;
          this.vx = 0;
          this.vy = 0;
          this.endY = 0;
          this.aniFlag = 0;
          this.targetPos = void 0;
          this.endCallback = void 0;
        }

        startShowThrow(cb) {
          this.endCallback = cb;
          this.aniFlag = 1;
          Tween.stopAllByTarget(this.node); // 抛出角度

          let radian = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).getFloatValue((_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).angleToRadian(75), (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).angleToRadian(85));

          if (Math.random() > 0.5) {
            radian = Math.PI - radian;
          }

          this.v = 800 + 200 * Math.random();
          this.vx = this.v * Math.cos(radian);
          this.vy = this.v * Math.sin(radian);
          this.endY = this.node.position.y - 20 - 50 * Math.random();
        }

        startBeiSaiEr() {
          this.aniFlag = 2;
          this.targetPos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapLayer.coinIconNode);
        }

        moveTargetUpdate(dt) {
          let targetPos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToNodeSpace(this.node, this.targetPos);
          let playerPos = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.position;
          targetPos.x += playerPos.x;
          targetPos.y += playerPos.y;
          let nodePos = this.node.getPosition();

          if (Vec2.distance(nodePos, targetPos) <= 20) {
            if (this.endCallback) {
              this.endCallback();
            }

            return;
          }

          let direction = targetPos.subtract(nodePos).normalize();
          let dis = dt * 1500;
          direction.multiplyScalar(dis);
          nodePos.add(direction);
          this.node.position = nodePos;
        }

        showThrowUpdate(dt) {
          let pos = this.node.getPosition();
          pos.x += this.vx * dt;
          pos.y += this.vy * dt;
          this.vy += this.g * dt;
          this.node.setPosition(pos);

          if (pos.y <= this.endY) {
            this.aniFlag = 0;
            let time = 0.1;
            let dy = 40;
            let dx = 15;

            if (this.vx < 0) {
              dx = -dx;
            }

            tween(this.node).by(time, {
              position: v3(dx, dy)
            }, {
              easing: "quadOut"
            }).by(time, {
              position: v3(dx, -dy)
            }, {
              easing: "quadIn"
            }).delay(0.5 + 0.3 * Math.random()).call(() => {
              this.startBeiSaiEr();
            }).start();
          }
        }

        update(dt) {
          switch (this.aniFlag) {
            case 1:
              this.showThrowUpdate(dt);
              break;

            case 2:
              this.moveTargetUpdate(dt);
              break;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0efe94ae7abc73dfd3d4a40a57ebee049d597b1d.js.map