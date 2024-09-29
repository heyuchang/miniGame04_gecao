System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, Prefab, myLog, cocosUtil, constants, resManager, LayerManager, _crd, layerManager;

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../common/myLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../compoment/base/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresManager(extras) {
    _reporterNs.report("resManager", "./resManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      cocosUtil = _unresolved_3.cocosUtil;
    }, function (_unresolved_4) {
      constants = _unresolved_4.constants;
    }, function (_unresolved_5) {
      resManager = _unresolved_5.resManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e4377T2MsZIL5G+/fK/7cUt", "layerManager", undefined);

      __checkObsolete__(['find', 'Node', 'Prefab']);

      LayerManager = class LayerManager {
        constructor() {
          this.layer1 = void 0;
          this.layerHint = void 0;
          this.openingLayerMap = new Map();
          this.openedLayerMap = new Map();
          this.layerNameIdArrMap = new Map();
          this.layerId = 0;
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new LayerManager();
          }

          return this._instance;
        }

        loadCommonLayers(onProgress, onComplete) {
          let arr = [(_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.HomeLayer];
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadAssetByPathArr((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.layer, arr, Prefab, onProgress, prefabArr => {
            for (let prefab of prefabArr) {
              prefab.addRef();
            }

            if (onComplete) {
              onComplete(prefabArr);
            }
          });
        }

        getPopLayerParentNode() {
          return this.layer1;
        }

        init(layer1, layerHint) {
          this.layer1 = layer1;
          this.layerHint = layerHint;
          this.openingLayerMap = new Map();
          this.openedLayerMap = new Map();
          this.layerNameIdArrMap = new Map();
          this.layerId = 0;
        }

        createNotice(content) {
          // 显示一条提示信息
          let noticeLayer = find((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.NoticeLayer, this.layerHint);

          if (noticeLayer) {
            noticeLayer.getComponent((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.NoticeLayer)["createNotice"](content);
          }
        }

        addLayerNameId(name, id) {
          let arr = this.layerNameIdArrMap.get(name);

          if (!arr) {
            arr = [];
            this.layerNameIdArrMap.set(name, arr);
          }

          arr.push(id);
        }

        removeLayerNameId(name, id) {
          let arr = this.layerNameIdArrMap.get(name);

          if (arr && arr.length > 0) {
            let index = arr.indexOf(id);

            if (index != -1) {
              arr.splice(index, 1);
            }
          }
        }

        openSingleLayer(layerName, obj, cb, openSuccessCb) {
          if (!obj) {
            obj = {};
          }

          let idArr = this.layerNameIdArrMap.get(layerName);

          if (!idArr || idArr.length <= 0) {
            this.openLayer(layerName, obj, cb, openSuccessCb);
            return;
          }

          let id = idArr[0];
          let layer = this.openedLayerMap.get(id);

          if (layer) {
            // 已显示，刷新数据
            layer.layerData = obj;
            layer.layerCb = cb;
            layer.onLoad();
            layer.onEnable();

            if (openSuccessCb) {
              openSuccessCb(layer);
            }

            return;
          }

          let layerParams = this.openingLayerMap.get(id);

          if (layerParams) {
            // 正准备显示，更新数据
            layerParams.layerName = layerName;
            layerParams.obj = obj;
            layerParams.cb = cb;
            layerParams.openSuccessCb = openSuccessCb;
          }
        }

        openLayer(layerName, obj, cb, openSuccessCb) {
          if (!obj) {
            obj = {};
          }

          this.layerId++;
          let layerId = this.layerId;
          let layerParams = {};
          layerParams.layerName = layerName;
          layerParams.obj = obj;
          layerParams.cb = cb;
          layerParams.openSuccessCb = openSuccessCb;
          this.openingLayerMap.set(layerId, layerParams);
          this.addLayerNameId(layerName, layerId);
          let bundleName = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.layer;
          let layerPath = layerName;
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadAsset(bundleName, layerPath, Prefab, null, (err, prefab) => {
            if (err) {
              (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
                error: Error()
              }), myLog) : myLog).e("LayerManager.openLayer error:" + err.message, layerName, err);
              return;
            }

            layerParams = this.openingLayerMap.get(layerId);

            if (!layerParams) {
              // 在打开之前，就已经被关闭了
              return;
            }

            let node = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).instantiate(prefab);
            let com = node.getComponent(layerName) || node.addComponent(layerName); // 加载每个layer特定需要的资源

            (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
              error: Error()
            }), resManager) : resManager).loadAssetConfigArr(com.preLoadAssetConfigArr, false, null, () => {
              com.layerData = layerParams.obj;
              com.layerCb = layerParams.cb;
              com.layerName = layerParams.layerName;
              com.layerId = layerId;
              this.openingLayerMap.delete(layerId);
              this.openedLayerMap.set(layerId, com); // 添加到节点上后，会马上触发onLoad和onEnable回调，而start方法是在首次执行update之前被调用

              node.parent = this.layer1;
              (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
                error: Error()
              }), myLog) : myLog).i("openLayer " + layerName, obj);

              if (layerParams.openSuccessCb) {
                layerParams.openSuccessCb(com, prefab);
              }
            });
          });
        }

        closeLayer(layerId) {
          if (typeof layerId == "string") {
            let idArr = this.layerNameIdArrMap.get(layerId);

            if (!idArr || idArr.length <= 0) {
              return;
            }

            layerId = idArr[idArr.length - 1];
          }

          let layer = this.openedLayerMap.get(layerId);

          if (layer) {
            layer.node.destroy();
            this.openedLayerMap.delete(layerId);
            this.removeLayerNameId(layer.layerName, layerId);
          }

          let layerParams = this.openingLayerMap.get(layerId);

          if (layerParams) {
            this.openingLayerMap.delete(layerId);
            this.removeLayerNameId(layerParams.layerName, layerId);
          }
        }

        isShowingLayer(layerName) {
          let idArr = this.layerNameIdArrMap.get(layerName);

          if (!idArr || idArr.length <= 0) {
            return false;
          }

          return true;
        }

      };
      LayerManager._instance = void 0;

      _export("layerManager", layerManager = LayerManager.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6263e0808d04d9ad15c99ea5120204f1e133b764.js.map