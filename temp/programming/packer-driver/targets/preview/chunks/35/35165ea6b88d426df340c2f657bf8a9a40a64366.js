System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, instantiate, sys, _decorator, RenderChildBatch, _dec, _class, _crd, ccclass, property, ItemLayer;

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "./BaseLayer", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      sys = _cc.sys;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      RenderChildBatch = _unresolved_2.RenderChildBatch;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d4942V0aRFFFp6T4OnZGReu", "ItemLayer", undefined);

      __checkObsolete__(['Component', 'instantiate', 'Node', 'sys', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ItemLayer", ItemLayer = (_dec = ccclass('ItemLayer'), _dec(_class = class ItemLayer extends Component {
        constructor() {
          super(...arguments);
          this.itemUI = void 0;
          this.itemUIFreeArr = void 0;
          this.itemUIArr = void 0;
          this.idItemUIObj = {};
          this.layerJS = void 0;
          this.callback = void 0;
          this.renderChildBatch = null;
          this.isFrameLoad = false;
          this.dataArr = [];
        }

        onLoad() {
          this.itemUI = this.node.children[0];
          this.itemUI.active = false;
          this.hideAllItems();
          this.addRenderChildBatch();
        }

        addRenderChildBatch() {
          if (sys.isNative) {
            return;
          }

          this.renderChildBatch = this.getComponent(_crd && RenderChildBatch === void 0 ? (_reportPossibleCrUseOfRenderChildBatch({
            error: Error()
          }), RenderChildBatch) : RenderChildBatch);

          if (this.renderChildBatch) {
            return;
          }

          this.renderChildBatch = this.addComponent(_crd && RenderChildBatch === void 0 ? (_reportPossibleCrUseOfRenderChildBatch({
            error: Error()
          }), RenderChildBatch) : RenderChildBatch);
        }

        hideAllItems() {
          var chs = this.node.children;
          this.itemUIFreeArr = [];
          this.itemUIArr = [];
          this.idItemUIObj = {};

          for (var node of chs) {
            node.active = false;
            this.itemUIFreeArr.push(node);
          }
        }

        initUI(layerJS, arr, callback) {
          this.layerJS = layerJS;
          this.callback = callback; // 先全部回收隐藏

          this.hideAllItems();
          this.itemUIArr = [];
          this.idItemUIObj = {};

          if (!this.isFrameLoad) {
            for (var i in arr) {
              var item = arr[i];
              this.addItem(item);
            }

            return;
          }

          this.dataArr = arr;
          this.frameAddItem();
        }

        setFrameLoad(frameLoad) {
          this.isFrameLoad = frameLoad;
        }

        frameAddItem() {
          this.scheduleOnce(() => {
            if (!this.dataArr || this.dataArr.length <= 0) {
              return;
            }

            var item = this.dataArr.shift();
            this.addItem(item);
            this.frameAddItem();
          });
        }

        addItem(item, cb) {
          var itemUI = this.itemUIFreeArr.shift();

          if (!itemUI) {
            itemUI = instantiate(this.itemUI);
            itemUI.parent = this.node;
          }

          itemUI.active = true;
          itemUI.item = item;
          var index = this.itemUIArr.length;
          itemUI.index = index;

          if (typeof item == "object" && item && item.id != undefined) {
            this.idItemUIObj[item.id] = itemUI;
          }

          if (cb) {
            cb(itemUI, item, index);
          } else if (this.callback) {
            this.callback(itemUI, item, index);
          }

          if (this.layerJS && this.layerJS.addButtonListener) {
            this.layerJS.addButtonListener(itemUI);
          }

          this.itemUIArr.push(itemUI);

          if (this.renderChildBatch) {
            this.renderChildBatch.addRootItemNode(itemUI);
          }

          return itemUI;
        }

        getItemUIById(id) {
          if (id == undefined) {
            return null;
          }

          var itemUI = this.idItemUIObj[id];
          return itemUI;
        }

        getItemUIByIndex(index) {
          var itemUI = null;
          this.forShowItemUI((node, item) => {
            if (node["index"] == index) {
              itemUI = node;
              return true;
            }
          });
          return itemUI;
        }

        loadAndRefreshItemUIByItem(item, cb) {
          if (!item || item.id == undefined) {
            return;
          }

          var itemUI = this.getItemUIById(item.id);

          if (!itemUI) {
            this.addItem(item, cb);
            return;
          }

          this.refreshItemUIByItem(item);
        }

        refreshItemUIByItem(item) {
          if (!item || item.id == undefined) {
            return;
          }

          var itemUI = this.getItemUIById(item.id);

          if (!itemUI) {
            return;
          }

          itemUI.item = item;
          this.refreshItemUIByItemUI(itemUI);
        }

        refreshItemUIByItemUI(itemUI) {
          var item = itemUI["item"];

          if (this.callback) {
            this.callback(itemUI, item, itemUI["index"]);
          }
        }

        refreshItemUIById(id) {
          var itemUI = this.getItemUIById(id);

          if (!itemUI) {
            return;
          }

          this.refreshItemUIByItem(itemUI.item);
        }

        removeItemUIByIndex(index) {
          if (index < 0 || index >= this.itemUIArr.length) {
            return;
          }

          var itemUI = null;

          for (var i = 0; i < this.itemUIArr.length; i++) {
            var tmpItemUI = this.itemUIArr[i];

            if (!tmpItemUI.active || tmpItemUI["index"] != index) {
              continue;
            }

            itemUI = tmpItemUI;
            break;
          }

          this.removeItemUIByItemUI(itemUI);
        }

        removeItemUIById(id) {
          if (id == undefined) {
            return;
          }

          var itemUI = this.idItemUIObj[id];
          this.removeItemUIByItemUI(itemUI);
        }

        removeItemUIByItemUI(itemUI) {
          if (!itemUI) {
            return;
          }

          itemUI.active = false;

          if (this.itemUIFreeArr.indexOf(itemUI) == -1) {
            // 返回缓存池
            itemUI["index"] = -1;
            this.itemUIFreeArr.push(itemUI);
          }

          var item = itemUI["item"];
          var index = this.itemUIArr.indexOf(itemUI);

          if (index != -1) {
            // 从正在显示的数组中移除
            this.itemUIArr.splice(index, 1); // 重新计算索引index

            for (var i = index; i < this.itemUIArr.length; i++) {
              this.itemUIArr[i]["index"] = i;
            }
          }

          if (typeof item == "object" && item && item.id != undefined) {
            delete this.idItemUIObj[item.id];
          }

          if (this.renderChildBatch) {
            this.renderChildBatch.removeRootItemNode(itemUI);
          }
        }

        forShowItemUI(cb) {
          if (!cb) {
            return;
          }

          for (var itemUI of this.itemUIArr) {
            var ret = cb(itemUI, itemUI.item);

            if (ret) {
              break;
            }
          }
        }

        refreshUI() {
          if (!this.callback) {
            return;
          }

          for (var node of this.itemUIArr) {
            this.callback(node, node["item"], node["index"]);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=35165ea6b88d426df340c2f657bf8a9a40a64366.js.map