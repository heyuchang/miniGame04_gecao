System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, JsonAsset, constants, resManager, DesignManager, _crd, designManager;

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
      JsonAsset = _cc.JsonAsset;
    }, function (_unresolved_2) {
      constants = _unresolved_2.constants;
    }, function (_unresolved_3) {
      resManager = _unresolved_3.resManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2f587trJmZF/Y4kXjIZp9XA", "designManager", undefined);

      __checkObsolete__(['JsonAsset']);

      DesignManager = class DesignManager {
        constructor() {
          this.tb2Arr = {};
          this.tb2Obj = {};
          this.tbType2Arr = {};
          this.config = {};
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new DesignManager();
          }

          return this._instance;
        } // 原始对象 {表名:[记录1]]}


        loadAllDesignTable(onProgress, onComplete) {
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadAsset((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.design, "design", JsonAsset, percent => {
            if (onProgress) {
              onProgress(percent);
            }
          }, (err, asset) => {
            if (err) {
              return;
            }

            this.tb2Arr = asset.json; // 数据格式化

            for (var tbName in this.tb2Arr) {
              var tbData = this.tb2Arr[tbName];
              this.initTable(tbName, tbData);
            } // 释放资源


            (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
              error: Error()
            }), resManager) : resManager).releaseAsset(asset);

            if (onComplete) {
              onComplete();
            }
          });
        }

        initTable(tbName, tbData) {
          this.tb2Obj[tbName] = {};

          for (var i in tbData) {
            var row = tbData[i]; // id索引

            this.tb2Obj[tbName][row.id] = row;

            if (row.hasOwnProperty("type") && row.type != "" && row.type != null) {
              // type索引
              if (!this.tbType2Arr[tbName]) {
                this.tbType2Arr[tbName] = {};
              }

              if (!this.tbType2Arr[tbName][row.type]) {
                this.tbType2Arr[tbName][row.type] = [];
              }

              var tmpArr = this.tbType2Arr[tbName][row.type];
              tmpArr.push(row);
            }

            if (tbName == "config") {
              this.config[row.name] = row.val || row.val2;
            }
          }
        }

        getTable(tableName) {
          return this.tb2Arr[tableName];
        }

        getRowById(tableName, id) {
          return this.tb2Obj[tableName][id];
        }

        getRowsByType(tableName, type) {
          if (this.tbType2Arr[tableName] && this.tbType2Arr[tableName][type]) {
            return this.tbType2Arr[tableName][type];
          }

          return [];
        }

        getLastRow(tableName) {
          var tb = this.getTable(tableName);
          return tb[tb.length - 1];
        }

        getFirstIdByType(type) {
          return type * 10 + 1;
        }

      };
      DesignManager._instance = void 0;

      _export("designManager", designManager = DesignManager.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5b82f7bdc371b073ca590a2072620fdc8a85c160.js.map