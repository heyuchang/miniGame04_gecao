System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, find, instantiate, Label, NodePool, UIOpacity, UITransform, v3, _decorator, _dec, _class, _crd, ccclass, property, NoticeLayer;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      NodePool = _cc.NodePool;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dc0e5fXhFFDZaZfHn86Ba++", "NoticeLayer", undefined);

      __checkObsolete__(['Component', 'find', 'instantiate', 'Label', 'Node', 'NodePool', 'UIOpacity', 'UITransform', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NoticeLayer", NoticeLayer = (_dec = ccclass('NoticeLayer'), _dec(_class = class NoticeLayer extends Component {
        constructor(...args) {
          super(...args);
          this.contentLayer = void 0;
          this.textPool = void 0;
          this.textItem = void 0;
          this.maxContentWidth = 580;
          this.minContentWidth = 150;
          this.contentBGAdd = 150;
          this.orignHeight = 0;
          this.spaceY = 5;
          this.status = {
            fadeIn: 1,
            delay: 2,
            fadeOut: 3
          };
          this.speedY = 300;
          this.speedOpacity = 255 / 0.3;
          this.delayTime = 0.5;
          this.moveDy = 150;
          this.fadeOutNode = null;
        }

        onLoad() {
          this.contentLayer = find("contentLayer", this.node);
          this.textItem = find("contentLayer/textItem", this.node);
          this.textPool = new NodePool();
          this.textPool.put(this.textItem);
          this.textItem = instantiate(this.textItem);
          this.orignHeight = find("content", this.textItem).getComponent(UITransform).height;
        }

        noticeShow(content) {
          var node = this.textPool.get();

          if (!node) {
            node = instantiate(this.textItem);
          }

          node.active = true;
          let contentNode = find("content", node);
          contentNode.getComponent(UITransform).height = this.orignHeight;
          contentNode.getComponent(Label).overflow = Label.Overflow.NONE;
          contentNode.getComponent(Label).string = content + ""; // 调用这个方法之后，才能在本帧获得准确宽度

          contentNode.getComponent(Label).updateRenderData(true);
          let width = contentNode.getComponent(UITransform).width;

          if (width > this.maxContentWidth) {
            contentNode.getComponent(Label).overflow = Label.Overflow.SHRINK;
            contentNode.getComponent(UITransform).width = this.maxContentWidth;
            contentNode.getComponent(UITransform).height = this.orignHeight * 2 + 10;
            width = this.maxContentWidth;
          } else if (width < this.minContentWidth) {
            width = this.minContentWidth;
          } // 设置背景图片宽度和高度


          node.getComponent(UITransform).width = width + this.contentBGAdd;
          node.getComponent(UITransform).height = contentNode.getComponent(UITransform).height + 10;
          node.setPosition(0, -this.moveDy);
          node.moveY = this.moveDy;
          node.moveDy = 0;
          node.setScale(v3(1, 1, 1));
          node.getComponent(UIOpacity).opacity = 0;
          node.status = this.status.fadeIn;
          node.parent = this.contentLayer;
        }

        createNotice(content) {
          this.noticeShow(content + "");
        }

        update(dt) {
          let chs = this.contentLayer.children;
          let backArr = [];

          for (let i in chs) {
            let node = chs[i];

            switch (node.status) {
              case this.status.fadeIn:
                var dy = dt * this.speedY;
                var pos = node.getPosition();
                pos.y += dy;
                node.setPosition(pos);
                node.moveDy += dy;
                var opacity = node.getComponent(UIOpacity).opacity + this.speedOpacity * dt;

                if (opacity > 255) {
                  opacity = 255;
                }

                node.getComponent(UIOpacity).opacity = opacity;

                if (node.moveDy >= node.moveY) {
                  node.moveDy = 0;
                  node.getComponent(UIOpacity).opacity = 255;
                  node.status = this.status.delay;
                  node.time = 0;
                  node.delayTime = this.delayTime;
                }

                break;

              case this.status.delay:
                node.delayTime -= dt;

                if (node.delayTime <= 0) {
                  node.delayTime = 0;
                  node.status = this.status.fadeOut;
                }

                break;

              case this.status.fadeOut:
                if (this.fadeOutNode && this.fadeOutNode != node) {
                  break;
                }

                this.fadeOutNode = node;
                var dy = dt * this.speedY;
                var pos = node.getPosition();
                pos.y += dy;
                node.setPosition(pos);
                var opacity = node.getComponent(UIOpacity).opacity - this.speedOpacity * dt;

                if (opacity < 0) {
                  opacity = 0;
                }

                node.getComponent(UIOpacity).opacity = opacity;

                if (opacity <= 0) {
                  backArr.push(node);
                  this.fadeOutNode = null;
                }

                break;
            }
          }

          for (let i in backArr) {
            let node = backArr[i];
            node.parent = null;
            this.textPool.put(node);
          } // 修正位置，保证不重叠


          chs = this.contentLayer.children;

          if (chs.length >= 2) {
            let lastNode = chs[chs.length - 1];

            for (let i = chs.length - 2; i >= 0; i--) {
              let node = chs[i];
              let dy = (node.getComponent(UITransform).height + lastNode.getComponent(UITransform).height) * 0.5 + this.spaceY;

              if (node.position.y - lastNode.position.y < dy) {
                let pos = node.getPosition();
                pos.y = lastNode.position.y + dy;
                node.setPosition(pos);
              }

              lastNode = node;
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2fa4dbe5a518560a4b3982382c91555cde3edb0d.js.map