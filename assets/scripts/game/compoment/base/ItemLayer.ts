import { Component, instantiate, Node, sys, _decorator } from 'cc';
import { BaseLayer } from './BaseLayer';
import { RenderChildBatch } from './RenderChildBatch';
const { ccclass, property } = _decorator;

@ccclass('ItemLayer')
export class ItemLayer extends Component {

    private itemUI: Node;

    // 缓存还未被使用的itemUI
    private itemUIFreeArr: any;
    // 正在显示的itemUI数组
    private itemUIArr: any;

    private idItemUIObj: any = {};

    private layerJS: BaseLayer;
    private callback: Function;

    public renderChildBatch: RenderChildBatch = null;

    private isFrameLoad: boolean = false;
    private dataArr: any[] = [];

    onLoad() {
        this.itemUI = this.node.children[0];
        this.itemUI.active = false;

        this.hideAllItems();

        this.addRenderChildBatch();
    }

    public addRenderChildBatch() {
        if (sys.isNative) {
            return;
        }
        this.renderChildBatch = this.getComponent(RenderChildBatch);
        if (this.renderChildBatch) {
            return;
        }
        this.renderChildBatch = this.addComponent(RenderChildBatch);
    }

    hideAllItems() {
        let chs = this.node.children;
        this.itemUIFreeArr = [];
        this.itemUIArr = [];
        this.idItemUIObj = {};

        for (let node of chs) {
            node.active = false;
            this.itemUIFreeArr.push(node);
        }
    }

    initUI(layerJS: BaseLayer, arr: any, callback: Function) {
        this.layerJS = layerJS;
        this.callback = callback;

        // 先全部回收隐藏
        this.hideAllItems();

        this.itemUIArr = [];
        this.idItemUIObj = {};

        if (!this.isFrameLoad) {
            for (let i in arr) {
                let item = arr[i];
                this.addItem(item);
            }
            return;
        }

        this.dataArr = arr;
        this.frameAddItem();
    }

    setFrameLoad(frameLoad: boolean) {
        this.isFrameLoad = frameLoad;
    }

    frameAddItem() {
        this.scheduleOnce(() => {
            if (!this.dataArr || this.dataArr.length <= 0) {
                return;
            }
            let item = this.dataArr.shift();
            this.addItem(item);
            this.frameAddItem();
        });
    }

    addItem(item: any, cb?: Function) {
        let itemUI = this.itemUIFreeArr.shift();
        if (!itemUI) {
            itemUI = instantiate(this.itemUI);
            itemUI.parent = this.node;
        }
        itemUI.active = true;
        itemUI.item = item;
        let index = this.itemUIArr.length;
        itemUI.index = index;

        if (typeof (item) == "object" && item && item.id != undefined) {
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

    getItemUIById(id: number) {
        if (id == undefined) {
            return null;
        }
        let itemUI = this.idItemUIObj[id];

        return itemUI;
    }

    getItemUIByIndex(index: number) {
        let itemUI = null;
        this.forShowItemUI((node: Node, item: any) => {
            if (node["index"] == index) {
                itemUI = node;
                return true;
            }
        });

        return itemUI;
    }

    loadAndRefreshItemUIByItem(item: any, cb?: Function) {
        if (!item || item.id == undefined) {
            return;
        }
        let itemUI = this.getItemUIById(item.id);
        if (!itemUI) {
            this.addItem(item, cb);
            return;
        }
        this.refreshItemUIByItem(item);
    }

    refreshItemUIByItem(item: any) {
        if (!item || item.id == undefined) {
            return;
        }
        let itemUI = this.getItemUIById(item.id);
        if (!itemUI) {
            return;
        }

        itemUI.item = item;
        this.refreshItemUIByItemUI(itemUI);
    }

    refreshItemUIByItemUI(itemUI: Node) {
        let item = itemUI["item"];
        if (this.callback) {
            this.callback(itemUI, item, itemUI["index"]);
        }
    }

    refreshItemUIById(id: number) {
        let itemUI = this.getItemUIById(id);
        if (!itemUI) {
            return;
        }
        this.refreshItemUIByItem(itemUI.item);
    }

    removeItemUIByIndex(index: number) {
        if (index < 0 || index >= this.itemUIArr.length) {
            return;
        }
        let itemUI = null;
        for (let i = 0; i < this.itemUIArr.length; i++) {
            let tmpItemUI = this.itemUIArr[i];
            if (!tmpItemUI.active || tmpItemUI["index"] != index) {
                continue;
            }
            itemUI = tmpItemUI;
            break;
        }
        this.removeItemUIByItemUI(itemUI);
    }

    removeItemUIById(id: number) {
        if (id == undefined) {
            return;
        }
        let itemUI = this.idItemUIObj[id];
        this.removeItemUIByItemUI(itemUI);
    }

    removeItemUIByItemUI(itemUI: Node) {
        if (!itemUI) {
            return;
        }
        itemUI.active = false;
        if (this.itemUIFreeArr.indexOf(itemUI) == -1) {
            // 返回缓存池
            itemUI["index"] = -1;
            this.itemUIFreeArr.push(itemUI);
        }

        let item = itemUI["item"];
        let index = this.itemUIArr.indexOf(itemUI);
        if (index != -1) {
            // 从正在显示的数组中移除
            this.itemUIArr.splice(index, 1);
            // 重新计算索引index
            for (let i = index; i < this.itemUIArr.length; i++) {
                this.itemUIArr[i]["index"] = i;
            }
        }

        if (typeof (item) == "object" && item && item.id != undefined) {
            delete this.idItemUIObj[item.id];
        }

        if (this.renderChildBatch) {
            this.renderChildBatch.removeRootItemNode(itemUI);
        }
    }

    forShowItemUI(cb: Function) {
        if (!cb) {
            return;
        }
        for (let itemUI of this.itemUIArr) {
            let ret = cb(itemUI, itemUI.item);
            if (ret) {
                break;
            }
        }
    }

    refreshUI() {
        if (!this.callback) {
            return;
        }
        for (let node of this.itemUIArr) {
            this.callback(node, node["item"], node["index"]);
        }
    }
}

