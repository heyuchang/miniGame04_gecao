System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, find, Node, Vec3, _decorator, cocosUtil, msgac, eventManager, _dec, _class, _crd, ccclass, property, GameCtrl;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgac(extras) {
    _reporterNs.report("msgac", "../../data/msgac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventManager(extras) {
    _reporterNs.report("eventManager", "../../manager/eventManager", _context.meta, extras);
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
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      msgac = _unresolved_3.msgac;
    }, function (_unresolved_4) {
      eventManager = _unresolved_4.eventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e325KYY1ZPsLTs0SuYv9z+", "GameCtrl", undefined);

      __checkObsolete__(['Component', 'EventTouch', 'find', 'Node', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameCtrl", GameCtrl = (_dec = ccclass('GameCtrl'), _dec(_class = class GameCtrl extends Component {
        constructor(...args) {
          super(...args);
          this.joystickNode = void 0;
          this.blockNode = void 0;
          this.radius = 70;
          this.orignPosition = void 0;
        }

        onLoad() {
          this.joystickNode = find("joystick", this.node);
          this.blockNode = find("block", this.joystickNode);
          this.orignPosition = this.joystickNode.getPosition().clone();
        }

        start() {
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
        }

        touchStart(event) {
          let location = event.getUILocation();
          let pos = new Vec3(location.x, location.y, 0);
          pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToNodeSpace(this.joystickNode, pos);
          this.joystickNode.setPosition(pos);
          this.blockNode.setPosition(0, 0);
          this.sendTouchEvent("start", event);
        }

        touchMove(event) {
          let location = event.getUILocation();
          let pos = new Vec3(location.x, location.y, 0);
          pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToNodeSpace(this.blockNode, pos);
          let dis = pos.length();

          if (dis > this.radius) {
            pos.normalize().multiplyScalar(this.radius);
          }

          this.blockNode.setPosition(pos);
          this.sendTouchEvent("move", event, pos);
        }

        touchEnd(event) {
          this.joystickNode.setPosition(this.orignPosition);
          this.blockNode.setPosition(0, 0);
          this.sendTouchEvent("end", event);
        }

        touchCancel(event) {
          this.joystickNode.setPosition(this.orignPosition);
          this.blockNode.setPosition(0, 0);
          this.sendTouchEvent("end", event);
        }

        sendTouchEvent(type, event, pos) {
          if (pos) {
            pos = pos.normalize().clone();
          }

          let data = {
            type,
            event,
            pos
          };
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).joystick, data);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f8739375d348c6da65ecbd3753f9e34bc008b3cd.js.map