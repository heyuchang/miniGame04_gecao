System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Component, find, Label, tween, UIOpacity, v3, _decorator, cocosUtil, NodePoolUtil, _dec, _class, _crd, ccclass, property, NumSystem;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodePoolUtil(extras) {
    _reporterNs.report("NodePoolUtil", "../base/NodePoolUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Component = _cc.Component;
      find = _cc.find;
      Label = _cc.Label;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      NodePoolUtil = _unresolved_3.NodePoolUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b3cf9KfFVL27ZleqxUIIbA", "NumSystem", undefined);

      __checkObsolete__(['Color', 'Component', 'find', 'Label', 'Node', 'tween', 'UIOpacity', 'v3', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NumSystem", NumSystem = (_dec = ccclass('NumSystem'), _dec(_class = class NumSystem extends Component {
        constructor(...args) {
          super(...args);
          this.numNode = void 0;
          this.nodePoolUtil = void 0;
        }

        onLoad() {
          this.numNode = find("num", this.node);
          this.nodePoolUtil = this.addComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
            error: Error()
          }), NodePoolUtil) : NodePoolUtil);
          this.nodePoolUtil.recycleNode(this.numNode);
        }

        addNum(num, worldPos, color) {
          let numNode = this.nodePoolUtil.getNode();
          let pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToNodeSpace(numNode, worldPos);
          let dx = Math.random() * 20;
          dx = Math.random() > 0.5 ? dx : -dx;
          pos.x += dx;
          numNode.setPosition(pos);
          numNode.setScale(v3(1, 1, 1));
          numNode.getComponent(UIOpacity).opacity = 255;
          numNode.getComponent(Label).string = "" + num;

          if (!color) {
            color = Color.WHITE;
          }

          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).setRenderableColor(numNode, color);
          let dy = 20 + Math.random() * 10;
          tween(numNode).by(0.3, {
            position: v3(0, dy, 0),
            scale: v3(0.5, 0.5, 0)
          }).by(0.3, {
            scale: v3(-0.3, -0.3, 0)
          }, {
            onUpdate(node, ratio) {
              numNode.getComponent(UIOpacity).opacity = (1 - ratio) * 255;
            }

          }).call(() => {
            this.nodePoolUtil.recycleNode(numNode);
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4f42f812bbc37c0dadf3ab2e3729da9f9935f792.js.map