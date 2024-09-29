System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, find, game, instantiate, isValid, Layout, ScrollView, sys, tween, UITransform, v3, _decorator, myLog, RenderChildBatch, _dec, _class, _crd, ccclass, property, ScrollViewUtil;

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../../common/myLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRenderChildBatch(extras) {
    _reporterNs.report("RenderChildBatch", "./RenderChildBatch", _context.meta, extras);
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
      game = _cc.game;
      instantiate = _cc.instantiate;
      isValid = _cc.isValid;
      Layout = _cc.Layout;
      ScrollView = _cc.ScrollView;
      sys = _cc.sys;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      RenderChildBatch = _unresolved_3.RenderChildBatch;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "474e7yR1ohEFZ+vBo1l4dgO", "ScrollViewUtil", undefined);

      __checkObsolete__(['Component', 'find', 'game', 'instantiate', 'isValid', 'Layout', 'Node', 'ScrollView', 'sys', 'tween', 'UITransform', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScrollViewUtil", ScrollViewUtil = (_dec = ccclass('ScrollViewUtil'), _dec(_class = class ScrollViewUtil extends Component {
        constructor(...args) {
          super(...args);
          this.scrollView = void 0;
          this.vertical = true;
          this.gapX = 0;
          this.gapY = 0;
          this.paddingLeft = 0;
          this.paddingRight = 0;
          this.paddingTop = 0;
          this.paddingBottom = 0;
          this.contentNode = void 0;
          this.contentTransform = void 0;
          this.viewNode = void 0;
          this.viewWidth = void 0;
          this.viewHeight = void 0;
          this.viewTransform = void 0;
          this.itemUI = void 0;
          this.itemUITransform = void 0;
          this.itemUIWidth = 0;
          this.itemUIHeight = 0;
          this.itemUIFreeArr = [];
          this.startPosX = 0;
          this.startPosY = 0;
          this.viewNum = 0;
          this.changeNum = 1;
          this.maxLines = 1;
          this.frameUpdateArr = [];
          this.frameTime = Math.floor(1000 / (game.getFrameRate() + 10));
          this.itemArr = [];
          this.refreshItemFunc = void 0;
          this.itemTween = false;
          this.setDataFlag = false;
          this.startIndex = 0;
          this.stopIndex = 0;
          this.renderChildBatch = null;
        }

        onLoad() {
          this.scrollView = this.node.getComponent(ScrollView);
          this.contentNode = this.scrollView.content;
          this.itemUI = this.contentNode.children[0];

          if (!this.itemUI) {
            (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
              error: Error()
            }), myLog) : myLog).e("=============ScrollViewUtil itemUI is null:" + this.node.name);
          }

          this.itemUITransform = this.itemUI.getComponent(UITransform);
          this.itemUIWidth = this.itemUITransform.width;
          this.itemUIHeight = this.itemUITransform.height; // 获取排列间距参数

          this.vertical = this.scrollView.vertical;
          let contentLayout = this.contentNode.getComponent(Layout);
          this.gapX = contentLayout.spacingX;
          this.gapY = contentLayout.spacingY;
          this.paddingLeft = contentLayout.paddingLeft;
          this.paddingRight = contentLayout.paddingRight;
          this.paddingTop = contentLayout.paddingTop;
          this.paddingBottom = contentLayout.paddingBottom;
          contentLayout.enabled = false;
          this.contentTransform = this.contentNode.getComponent(UITransform);
          let contentWidth = this.contentTransform.width;
          let contentHeight = this.contentTransform.height;
          this.viewNode = find("view", this.node);
          this.viewTransform = this.viewNode.getComponent(UITransform);
          this.viewWidth = this.viewTransform.width;
          this.viewHeight = this.viewTransform.height;
          this.itemUIFreeArr = [];
          this.contentNode.children.forEach(node => {
            node.active = false;
            this.itemUIFreeArr.push(node);
          });

          if (this.vertical) {
            this.viewTransform.anchorX = 0.5;
            this.viewTransform.anchorY = 1;
            this.contentTransform.anchorX = 0.5;
            this.contentTransform.anchorY = 1;
            this.viewNum = Math.ceil(this.viewHeight / (this.itemUIHeight + this.gapY)) + 1;
            this.changeNum = Math.floor((contentWidth + this.gapX - this.paddingLeft - this.paddingRight) / (this.itemUIWidth + this.gapX));
          } else {
            this.viewTransform.anchorX = 0;
            this.viewTransform.anchorY = 0.5;
            this.contentTransform.anchorX = 0;
            this.contentTransform.anchorY = 0.5;
            this.viewNum = Math.ceil(this.viewWidth / (this.itemUIWidth + this.gapX)) + 1;
            this.changeNum = Math.floor((contentHeight + this.gapY - this.paddingTop - this.paddingBottom) / (this.itemUIHeight + this.gapY));
          }

          if (this.changeNum < 1) {
            this.changeNum = 1;
          } // 首个itemUI的坐标


          this.startPosX = this.itemUIWidth * this.itemUITransform.anchorX - this.contentTransform.width * this.contentTransform.anchorX + this.paddingLeft;
          this.startPosY = contentHeight * (1 - this.contentTransform.anchorY) - this.itemUIHeight * (1 - this.itemUITransform.anchorY) - this.paddingTop; // scrollView监听事件

          this.node.on('scrolling', this.onScrolling, this); // 记录每帧需要刷新的数据

          this.frameUpdateArr = [];
          this.addRenderChildBatch();
        }

        addRenderChildBatch() {
          if (sys.isNative) {
            return;
          }

          if (this.renderChildBatch) {
            return;
          }

          this.renderChildBatch = this.contentNode.addComponent(_crd && RenderChildBatch === void 0 ? (_reportPossibleCrUseOfRenderChildBatch({
            error: Error()
          }), RenderChildBatch) : RenderChildBatch);
        } // 滑动中回调


        onScrolling() {
          if (this.itemArr.length <= 0) {
            return;
          }

          let start = 0; // 垂直滚动

          if (this.vertical) {
            let posY = this.contentNode.getPosition().y;

            if (posY > this.contentTransform.height - this.viewHeight) {
              posY = this.contentTransform.height - this.viewHeight;
            }

            if (posY < 0) {
              posY = 0;
            } // 开始行


            start = Math.floor((posY + this.gapY - this.paddingTop) / (this.itemUIHeight + this.gapY));
          } else {
            // 水平滚动
            let posX = this.contentNode.getPosition().x;

            if (posX < this.viewWidth - this.contentTransform.width) {
              posX = this.viewWidth - this.contentTransform.width;
            }

            if (posX > 0) {
              posX = 0;
            }

            posX = Math.abs(posX); // 开始列

            start = Math.floor((posX + this.gapX - this.paddingLeft) / (this.itemUIWidth + this.gapX));
          }

          if (start < 0) {
            start = 0;
          }

          if (start > this.maxLines - 1) {
            start = this.maxLines - 1;
          } // 结束行


          let stop = start + this.viewNum;

          if (stop > this.maxLines - 1) {
            stop = this.maxLines - 1;
          } // 跟上屏显示范围不一样，才会进行刷新


          if (start != this.startIndex || stop != this.stopIndex) {
            this.startIndex = start;
            this.stopIndex = stop;
            this.renderItemArr();
          }
        } // 渲染屏幕范围内的itemArr


        renderItemArr() {
          let item = null; // 先回收屏幕范围外的item

          let hideIndex = this.startIndex * this.changeNum;

          for (let i = 0; i < hideIndex; i++) {
            item = this.itemArr[i];
            this.recycleItem(item);
          }

          hideIndex = (this.stopIndex + 1) * this.changeNum;

          for (let i = hideIndex; i < this.itemArr.length; i++) {
            item = this.itemArr[i];
            this.recycleItem(item);
          } // 再显示屏幕范围内的


          for (let i = this.startIndex; i <= this.stopIndex; i++) {
            let startIndex = i * this.changeNum;
            let stopIndex = startIndex + this.changeNum;

            for (let k = startIndex; k < stopIndex; k++) {
              if (!this.itemArr[k]) {
                continue;
              }

              item = this.itemArr[k];

              if (item.node) {
                // 已经刷新过了，就不再刷新，节省CPU开销
                continue;
              } // 更换到每帧去刷新


              item.needUpdate = true;
              this.frameUpdateArr.push(item);
            }
          }

          this.startFrameUpdate();
        } // 生成node


        createNode() {
          let node = null;

          if (this.itemUIFreeArr.length > 0) {
            node = this.itemUIFreeArr.shift();
          } else {
            node = instantiate(this.itemUI);
          }

          node.parent = this.contentNode;

          if (this.renderChildBatch) {
            this.renderChildBatch.addRootItemNode(node);
          }

          return node;
        }

        startFrameUpdate() {
          let startTime = new Date().getTime();

          while (true) {
            if (!this.frameUpdateArr || this.frameUpdateArr.length <= 0) {
              this.setDataFlag = false;
              break;
            }

            let item = this.frameUpdateArr.shift();

            if (!item.needUpdate) {
              continue;
            }

            if (!item.node) {
              item.node = this.createNode();
            }

            if (!item.node.active) {
              item.node.active = true;
            }

            item.node.setPosition(item.x, item.y);
            item.node.item = item.data;
            item.node.index = item.index;
            item.node.scale = v3(1, 1, 1);

            if (item.node.showTween) {
              item.node.showTween.stop();
              item.node.showTween = undefined;
            }

            this.refreshItemFunc(item.node, item.data, item.index);

            if (this.itemTween && this.setDataFlag) {
              item.node.setScale(0, 0, 1);
              let tn = tween(item.node).to(0.2, {
                scale: v3(1.2, 1.2, 1)
              }).to(0.1, {
                scale: v3(1, 1, 1)
              }).call(() => {
                item.node.showTween = undefined;
              }).start();
              item.node.showTween = tn;
              this.scheduleOnce(() => {
                this.startFrameUpdate();
              }, 0.05);
              break;
            } else {
              if (new Date().getTime() - startTime >= this.frameTime) {
                // 本帧跑满了，下一帧继续
                this.scheduleOnce(this.startFrameUpdate.bind(this));
                break;
              }
            }
          }
        } // 回收item.node


        recycleItem(item) {
          if (item.node && isValid(item.node)) {
            if (this.itemUIFreeArr.indexOf(item.node) == -1) {
              this.itemUIFreeArr.push(item.node);
            }

            item.node.active = false;
            item.node.showTween = undefined;
            item.node = null;
            item.needUpdate = undefined;
          }
        } // 清除所有items


        clearAllItems() {
          for (let item of this.itemArr) {
            this.recycleItem(item);
          }
        } // 初始化item


        initItem(data, index) {
          let item = {
            node: null,
            data: data,
            index: index,
            x: 0,
            y: 0
          };
          return item;
        }

        refreshItemIndex(item, index) {
          item.index = index;

          if (item.node) {
            item.node.index = index;
          }
        }

        setData(dataArr, refreshItemFunc, resetPos = true, itemTween = false) {
          if (!this.scrollView) {
            return;
          }

          this.itemTween = itemTween;
          this.setDataFlag = true;
          this.frameUpdateArr = [];
          this.unscheduleAllCallbacks();
          this.clearAllItems();
          this.itemArr = [];

          if (!dataArr) {
            dataArr = [];
          }

          this.refreshItemFunc = refreshItemFunc;

          for (let i = 0; i < dataArr.length; i++) {
            let data = dataArr[i];
            let item = this.initItem(data, i);
            this.itemArr.push(item);
          }

          this.maxLines = Math.ceil(this.itemArr.length / this.changeNum);

          if (this.maxLines < 1) {
            this.maxLines = 1;
          }

          this.refreshItemArr(0, resetPos);
        } // 布局itemArr，计算出每个item摆放的坐标信息


        layoutItemArr(start) {
          if (this.itemArr.length <= 0) {
            return;
          }

          for (let index = start; index < this.itemArr.length; index++) {
            let line = Math.floor(index / this.changeNum);
            let line2 = index % this.changeNum;
            let item = this.itemArr[index];

            if (this.vertical) {
              item.x = this.startPosX + line2 * (this.itemUIWidth + this.gapX);
              item.y = this.startPosY - line * (this.itemUIHeight + this.gapY);
            } else {
              item.x = this.startPosX + line * (this.itemUIWidth + this.gapX);
              item.y = this.startPosY - line2 * (this.itemUIHeight + this.gapY);
            }
          }
        } // 调整content节点大小


        resizeContentNode() {
          if (!this.contentNode || !this.itemUI) {
            return;
          }

          if (this.itemArr.length <= 0) {
            this.contentTransform.width = 0;
            this.contentTransform.height = 0;
            return;
          }

          let lastItem = this.itemArr[this.itemArr.length - 1];

          if (this.vertical) {
            let height = -lastItem.y + this.itemUIHeight * this.itemUITransform.anchorY;
            this.contentTransform.height = height + this.paddingBottom;
          } else {
            let width = lastItem.x + this.itemUIWidth * (1 - this.itemUITransform.anchorX);
            this.contentTransform.width = width + this.paddingRight;
          }
        } // 计算每个item的坐标位置和contentNode大小


        refreshItemArr(start, resetPos = true) {
          if (!this.scrollView) {
            return;
          }

          this.layoutItemArr(start);
          this.resizeContentNode();
          this.startIndex = -1;
          this.stopIndex = -1;
          this.scrollView.stopAutoScroll();
          let maxOffset = this.scrollView.getMaxScrollOffset();
          let offset = this.scrollView.getScrollOffset();

          if (this.vertical) {
            let posY = 0;

            if (!resetPos) {
              posY = this.contentNode.getPosition().y;

              if (posY > maxOffset.y) {
                posY = maxOffset.y;
              }

              if (posY < 0) {
                posY = 0;
              }
            }

            offset.y = posY;
            this.scrollView.scrollToOffset(offset, 0);
          } else {
            let posX = 0;

            if (!resetPos) {
              posX = Math.abs(this.contentNode.getPosition().x);

              if (posX > Math.abs(maxOffset.x)) {
                posX = Math.abs(maxOffset.x);
              }

              if (posX < 0) {
                posX = 0;
              }
            }

            offset.x = posX;
            this.scrollView.scrollToOffset(offset, 0);
          }

          this.onScrolling();
        } // 刷新整个列表


        refreshList() {
          if (!this.refreshItemFunc) {
            return;
          }

          this.itemArr.forEach(item => {
            if (!item.node) {
              return;
            }

            this.refreshItemFunc(item.node, item.data, item.index);
          });
        } // 移除某个索引item，会重新排列索引


        removeByIndex(index, resetPos = false) {
          if (index < 0 || index >= this.itemArr.length) {
            console.log("无效的index", index);
            return;
          }

          let item = this.itemArr[index];

          if (!item || !this.refreshItemFunc) {
            return;
          }

          this.itemArr.splice(index, 1);
          this.recycleItem(item); // 重新排列索引

          for (let i = index; i < this.itemArr.length; i++) {
            let item = this.itemArr[i];
            this.refreshItemIndex(item, i);
          }

          this.maxLines = Math.ceil(this.itemArr.length / this.changeNum);

          if (this.maxLines < 1) {
            this.maxLines = 1;
          }

          this.refreshItemArr(index, resetPos);
        } // 刷新指定索引的itemUI


        refreshIndex(index, data) {
          if (index == undefined || index < 0 || index >= this.itemArr.length) {
            console.log("无效的index", index);
            return;
          }

          let item = this.itemArr[index];

          if (!item) {
            return;
          }

          if (data != undefined) {
            item.data = data;
          }

          if (item.node) {
            item.node.item = item.data;

            if (this.refreshItemFunc) {
              this.refreshItemFunc(item.node, item.data, index);
            }
          }
        } // 插入数据


        insertData(index, arr, resetPos = false) {
          if (!arr || arr.length == 0) {
            console.log("没有要添加的数据");
            return;
          }

          if (index < 0 || index > this.itemArr.length) {
            console.log("无效的index", index);
            return;
          }

          if (!this.refreshItemFunc) {
            console.log("首次请调用setData方法");
            return;
          }

          for (let i = 0; i < arr.length; i++) {
            let pIndex = index + i;
            let item = this.initItem(arr[i], pIndex);
            this.itemArr.splice(pIndex, 0, item);
          }

          for (let i = index + arr.length; i < this.itemArr.length; i++) {
            let item = this.itemArr[i];
            this.refreshItemIndex(item, i);
          }

          this.maxLines = Math.ceil(this.itemArr.length / this.changeNum);

          if (this.maxLines < 1) {
            this.maxLines = 1;
          }

          this.refreshItemArr(index, resetPos);
        } // 追加数据


        pushData(arr, resetPos = false) {
          this.insertData(this.itemArr.length, arr, resetPos);
        } // 是否滑动到尽头了


        isScrollEnd() {
          let maxOffset = this.scrollView.getMaxScrollOffset();
          let offset = this.scrollView.getScrollOffset();

          if (Math.abs(maxOffset.x) - Math.abs(offset.x) <= 10 && Math.abs(maxOffset.y) - Math.abs(offset.y) <= 10) {
            return true;
          }

          return false;
        } // 滑动到尽头


        scrollToEnd(time) {
          this.scrollView.stopAutoScroll();

          if (time == undefined || time < 0) {
            time = 0.5;
          }

          if (this.vertical) {
            this.scrollView.scrollToBottom(time);
          } else {
            this.scrollView.scrollToRight(time);
          }
        } // 滑动到指定索引位置，该位置将定位到最底下(垂直滚动)或者最右边(水平滚动)


        scrollToIndex(index, time) {
          if (time == undefined || time < 0) {
            time = 0;
          }

          if (index < 0) {
            return;
          }

          let item = this.itemArr[index];

          if (!item) {
            return;
          }

          this.scrollView.stopAutoScroll();
          let maxOffset = this.scrollView.getMaxScrollOffset();
          let offset = this.scrollView.getScrollOffset();

          if (this.vertical) {
            let dy = Math.abs(item.y) + this.itemUIHeight - this.viewHeight;

            if (dy < 0) {
              dy = 0;
            }

            if (dy > maxOffset.y) {
              dy = maxOffset.y;
            }

            offset.y = dy;
            this.scrollView.scrollToOffset(offset, time);
          } else {
            let dx = Math.abs(item.x) + this.itemUIWidth - this.viewWidth;

            if (dx < 0) {
              dx = 0;
            }

            if (dx > Math.abs(maxOffset.x)) {
              dx = Math.abs(maxOffset.x);
            }

            offset.x = dx;
            this.scrollView.scrollToOffset(offset, time);
          }

          this.onScrolling();
        }

        onDestroy() {
          this.itemUIFreeArr = [];
          this.itemArr = [];
          this.frameUpdateArr = [];
          this.refreshItemFunc = null;
          this.node.off("scrolling", this.onScrolling, this);
          this.unscheduleAllCallbacks();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8d2a367151348656472cb1980f9e941fa2423bda.js.map