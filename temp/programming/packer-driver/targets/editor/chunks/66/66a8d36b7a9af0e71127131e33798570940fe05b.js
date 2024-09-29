System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Prefab, _decorator, myLog, cocosUtil, utilTools, _dec, _class, _crd, ccclass, property, NodePoolUtil;

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../../common/myLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../utils/utilTools", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      cocosUtil = _unresolved_3.cocosUtil;
    }, function (_unresolved_4) {
      utilTools = _unresolved_4.utilTools;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "84610XoI4JE3psEDQhJyjiP", "NodePoolUtil", undefined);

      __checkObsolete__(['Component', 'Node', 'Prefab', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NodePoolUtil", NodePoolUtil = (_dec = ccclass('NodePoolUtil'), _dec(_class = class NodePoolUtil extends Component {
        constructor(...args) {
          super(...args);
          this.itemNode = void 0;
          this.freeNodeArr = [];
          this.itemNodeArr = [];
        }

        onLoad() {}

        init(itemNode) {
          if (itemNode instanceof Prefab) {
            itemNode = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).instantiate(itemNode);
          }

          this.itemNode = itemNode;
        }

        getNode() {
          let node = this.freeNodeArr.shift();

          if (!node) {
            if (!this.itemNode) {
              (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
                error: Error()
              }), myLog) : myLog).e(this.node);
            }

            node = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).instantiate(this.itemNode);
            node.parent = this.node;
          }

          if (!node.active) {
            node.active = true;
          }

          node.use = true;
          return node;
        }

        recycleNode(node) {
          if (!this.itemNode) {
            this.itemNode = node;
          }

          node.active = false;

          if (this.freeNodeArr.indexOf(node) == -1) {
            this.freeNodeArr.push(node);
          } // @ts-ignore


          node.use = false;
        }

        recycleAllNode() {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.node.children, node => {
            this.recycleNode(node);
          });
        }

        forEachUseNode(cb) {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.node.children, (node, index) => {
            if (!node.use) {
              return;
            }

            cb(node, index);
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=66a8d36b7a9af0e71127131e33798570940fe05b.js.map