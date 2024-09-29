System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BoxCollider2D, Component, find, UITransform, Vec2, _decorator, utilTools, mapModel, _dec, _class, _crd, ccclass, property, bullet8;

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../../utils/utilTools", _context.meta, extras);
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
      BoxCollider2D = _cc.BoxCollider2D;
      Component = _cc.Component;
      find = _cc.find;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      utilTools = _unresolved_2.utilTools;
    }, function (_unresolved_3) {
      mapModel = _unresolved_3.mapModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1442W07IpCMqaQMACJmBoZ", "Bullet8", undefined);

      __checkObsolete__(['BoxCollider2D', 'Component', 'find', 'Node', 'UITransform', 'Vec2', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 蝎子-闪电

      _export("bullet8", bullet8 = (_dec = ccclass('bullet8'), _dec(_class = class bullet8 extends Component {
        constructor() {
          super(...arguments);
          this.bullet = void 0;
          this.contactNotHide = true;
          this.moveStop = false;
          this.bodyNode = void 0;
          this.heightWidthRatio = 207 / 440;
          this.maxFollowDis = 600;
        }

        init(bullet) {
          this.bullet = bullet;
          this.moveStop = true;
          this.bodyNode = find("body", this.bullet.node);
          this.updateAngleAndDis();
          this.scheduleOnce(() => {
            this.bullet.recycleSelf();
          }, 2.3);
        }

        updateAngleAndDis() {
          // 角度
          var direction = this.bullet.getFacePlayerDirection();
          var angle = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).radianToAngle(Math.atan2(direction.y, direction.x));
          this.bullet.node.angle = angle; // 长度

          var dis = Vec2.distance(this.bullet.node.getPosition(), (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.node.getPosition()) + 40;

          if (dis > this.maxFollowDis) {
            dis = this.maxFollowDis;
          }

          this.bodyNode.getComponent(UITransform).width = dis;
          this.bodyNode.getComponent(UITransform).height = this.heightWidthRatio * dis;
          this.bullet.getComponent(BoxCollider2D).offset.x = dis - 50;
        }

        update(dt) {
          this.updateAngleAndDis();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e29e79740011869a620b5d22e20c943b123b27f1.js.map