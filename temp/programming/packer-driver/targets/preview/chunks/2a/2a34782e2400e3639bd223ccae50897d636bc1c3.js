System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, Node, Prefab, UITransform, _decorator, cocosUtil, constants, resManager, BaseLayer, NodePoolUtil, Hint, HintNames, _dec, _class, _crd, ccclass, property, HintSystem;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresManager(extras) {
    _reporterNs.report("resManager", "../../manager/resManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../base/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodePoolUtil(extras) {
    _reporterNs.report("NodePoolUtil", "../base/NodePoolUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHint(extras) {
    _reporterNs.report("Hint", "../item/hint/Hint", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHintNames(extras) {
    _reporterNs.report("HintNames", "../item/hint/Hint", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      constants = _unresolved_3.constants;
    }, function (_unresolved_4) {
      resManager = _unresolved_4.resManager;
    }, function (_unresolved_5) {
      BaseLayer = _unresolved_5.BaseLayer;
    }, function (_unresolved_6) {
      NodePoolUtil = _unresolved_6.NodePoolUtil;
    }, function (_unresolved_7) {
      Hint = _unresolved_7.Hint;
      HintNames = _unresolved_7.HintNames;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e5def4jLXtEnZXDiJCC8BFw", "HintSystem", undefined);

      __checkObsolete__(['find', 'Node', 'Prefab', 'UITransform', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HintSystem", HintSystem = (_dec = ccclass('HintSystem'), _dec(_class = class HintSystem extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          this.nameLayerObj = {};
          this.namePrefabObj = {};
          this.hintLayer = void 0;
          this.hintLayer2 = void 0;
        }

        onLoad() {
          super.onLoad();
          this.hintLayer = this.node;
          this.hintLayer2 = find("hintLayer2", this.node.parent);
        }

        onEnable() {
          super.onEnable();
        }

        onDestroy() {
          super.onDestroy();
        }

        getHintLayerNameById(name) {
          return name + "Layer";
        }

        getHintLayerByName(name) {
          var nameLayer = this.nameLayerObj[name];

          if (!nameLayer) {
            nameLayer = new Node(this.getHintLayerNameById(name));
            nameLayer.addComponent(UITransform);
            nameLayer.setPosition(0, 0);

            switch (name) {
              case (_crd && HintNames === void 0 ? (_reportPossibleCrUseOfHintNames({
                error: Error()
              }), HintNames) : HintNames).targetPos:
              case (_crd && HintNames === void 0 ? (_reportPossibleCrUseOfHintNames({
                error: Error()
              }), HintNames) : HintNames).targetPos2:
              case (_crd && HintNames === void 0 ? (_reportPossibleCrUseOfHintNames({
                error: Error()
              }), HintNames) : HintNames).targetPos3:
              case (_crd && HintNames === void 0 ? (_reportPossibleCrUseOfHintNames({
                error: Error()
              }), HintNames) : HintNames).feiBiao:
              case (_crd && HintNames === void 0 ? (_reportPossibleCrUseOfHintNames({
                error: Error()
              }), HintNames) : HintNames).blockArrow:
              case (_crd && HintNames === void 0 ? (_reportPossibleCrUseOfHintNames({
                error: Error()
              }), HintNames) : HintNames).comeShine:
                nameLayer.parent = this.hintLayer2;
                break;

              default:
                nameLayer.parent = this.hintLayer;
                break;
            }

            this.nameLayerObj[name] = nameLayer;
            var nodePoolUtil = nameLayer.addComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
              error: Error()
            }), NodePoolUtil) : NodePoolUtil);
            nodePoolUtil.init(this.namePrefabObj[name]);
          }

          return nameLayer;
        }

        addHint(name, worldPos, angle, extraObj) {
          if (angle === void 0) {
            angle = 0;
          }

          var nodePoolUtil = this.getHintLayerByName(name).getComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
            error: Error()
          }), NodePoolUtil) : NodePoolUtil);

          var tmpFunc = () => {
            if (!nodePoolUtil.node.activeInHierarchy) {
              return;
            }

            var hintNode = nodePoolUtil.getNode();
            var hint = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).addComponentOnce(hintNode, _crd && Hint === void 0 ? (_reportPossibleCrUseOfHint({
              error: Error()
            }), Hint) : Hint);
            hint.init(name, worldPos, angle, extraObj);
          };

          if (!this.namePrefabObj[name]) {
            (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
              error: Error()
            }), resManager) : resManager).loadAsset((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.hint, name, Prefab, null, (err, prefab) => {
              if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).isValid(this)) {
                return;
              }

              this.namePrefabObj[name] = prefab;
              nodePoolUtil.init(prefab);
              tmpFunc();
            });
            return;
          }

          tmpFunc();
        }

        recycleHintNode(hintNode) {
          var nodePoolUtil = this.getHintLayerByName(hintNode.name).getComponent(_crd && NodePoolUtil === void 0 ? (_reportPossibleCrUseOfNodePoolUtil({
            error: Error()
          }), NodePoolUtil) : NodePoolUtil);
          nodePoolUtil.recycleNode(hintNode);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2a34782e2400e3639bd223ccae50897d636bc1c3.js.map