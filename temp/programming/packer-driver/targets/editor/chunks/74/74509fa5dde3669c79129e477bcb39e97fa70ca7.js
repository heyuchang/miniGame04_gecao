System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, find, Label, RichText, tyqSDK, tyqLayerManager, TyqBaseLayer, _crd;

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../../tyqSDK", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqLayerManager(extras) {
    _reporterNs.report("tyqLayerManager", "../manager/tyqLayerManager", _context.meta, extras);
  }

  _export("TyqBaseLayer", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Component = _cc.Component;
      find = _cc.find;
      Label = _cc.Label;
      RichText = _cc.RichText;
    }, function (_unresolved_2) {
      tyqSDK = _unresolved_2.tyqSDK;
    }, function (_unresolved_3) {
      tyqLayerManager = _unresolved_3.tyqLayerManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a66efz9BgNL7Z/VjLWB3zxY", "TyqBaseLayer", undefined);

      __checkObsolete__(['Button', 'Component', 'find', 'Label', 'Node', 'RichText']);

      _export("TyqBaseLayer", TyqBaseLayer = class TyqBaseLayer extends Component {
        constructor(...args) {
          super(...args);
          this.obj = {};
          this.cb = void 0;
          this.layerName = "DefaultLayer";
          this.pathNodeObj = new Map();
        }

        onLoad() {
          this.addButtonListener(this.node);
          this.addPathNode(this.node, "");
        }

        addPathNode(node, path) {
          if (node != this.node) {
            this.pathNodeObj.set(path, node);
          }

          if (path) {
            path += "/";
          }

          let chs = node.children;

          for (let i = 0, len = chs.length; i < len; i++) {
            let pNode = chs[i];
            this.addPathNode(pNode, path + pNode.name);
          }
        }

        getNodeByPath(path) {
          let node = this.pathNodeObj.get(path);

          if (node) {
            return node;
          }

          node = find(path, this.node);

          if (node) {
            this.pathNodeObj.set(path, node);
            return node;
          }

          return null;
        }

        addButtonListener(node) {
          if (node.getComponent(Button)) {
            node.on("click", this.preOnButtonClick, this);
          }

          let chs = node.children;

          for (let i = 0, max = chs.length; i < max; i++) {
            let ch = chs[i];
            this.addButtonListener(ch);
          }
        }

        preOnButtonClick(btn) {
          let node = btn.node;
          let name = node.name;
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).log(this.layerName + " onButtonClick " + name);
          this.onButtonClick(node, node.name);
        }

        onButtonClick(node, name) {}

        openLayer(layerName, data, cb) {
          (_crd && tyqLayerManager === void 0 ? (_reportPossibleCrUseOftyqLayerManager({
            error: Error()
          }), tyqLayerManager) : tyqLayerManager).openLayer(layerName, data, cb);
        }

        closeLayer() {
          (_crd && tyqLayerManager === void 0 ? (_reportPossibleCrUseOftyqLayerManager({
            error: Error()
          }), tyqLayerManager) : tyqLayerManager).closeLayer(this);
        }

        setString(node, info) {
          info = info + "";
          let label = node.getComponent(Label);

          if (label) {
            label.string = info;
            return;
          }

          let rich = node.getComponent(RichText);

          if (rich) {
            rich.string = info;
            return;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=74509fa5dde3669c79129e477bcb39e97fa70ca7.js.map