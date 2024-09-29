System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, find, ScrollView, _decorator, constants, designManager, UserData, AnimationCtrl, BaseLayer, _dec, _class, _crd, ccclass, property, TowerLayer;

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../../model/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationCtrl(extras) {
    _reporterNs.report("AnimationCtrl", "../base/AnimationCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../base/BaseLayer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      find = _cc.find;
      ScrollView = _cc.ScrollView;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      constants = _unresolved_2.constants;
    }, function (_unresolved_3) {
      designManager = _unresolved_3.designManager;
    }, function (_unresolved_4) {
      UserData = _unresolved_4.UserData;
    }, function (_unresolved_5) {
      AnimationCtrl = _unresolved_5.AnimationCtrl;
    }, function (_unresolved_6) {
      BaseLayer = _unresolved_6.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c1c4Tl1StISoHbTPrNaBuO", "TowerLayer", undefined);

      __checkObsolete__(['Animation', 'find', 'Node', 'ScrollView', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TowerLayer", TowerLayer = (_dec = ccclass('TowerLayer'), _dec(_class = class TowerLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          this.qianShouNode = void 0;
          this.dianJvNode = void 0;
          this.xieZiNode = void 0;
          this.nianChouNode = void 0;
          this.paoDangRenNode = void 0;
          this.btnsLayer = void 0;
        }

        onLoad() {
          this.layerName = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.TowerLayer;
          super.onLoad();
          this.btnsLayer = this.getNodeByPath("ui/listNoUtil/view/content/map");
          var chs = this.btnsLayer.children;

          for (var i = 0; i < chs.length; i++) {
            find("monster", chs[i]).addComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
              error: Error()
            }), AnimationCtrl) : AnimationCtrl);
            var textNode = find("name/text", chs[i]);
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.map, 101 + i);
            this.setString(textNode, row.name);
          }

          this.qianShouNode = find("monster", chs[0]);
          this.dianJvNode = find("monster", chs[1]);
          this.xieZiNode = find("monster", chs[2]);
          this.nianChouNode = find("monster", chs[4]);
          this.paoDangRenNode = find("monster", chs[5]);
        }

        onEnable() {
          super.onEnable();
        }

        onDisable() {
          super.onDisable();
        }

        onDestroy() {
          super.onDestroy();
        }

        initUI() {
          this.getNodeByPath("ui/listNoUtil").getComponent(ScrollView).scrollToTop();
          var chs = this.btnsLayer.children;

          for (var i = 0; i < chs.length; i++) {
            var itemUI = chs[i];
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.map, 100 + i + 1); // @ts-ignore

            itemUI.row = row;
            this.setString(find("name", itemUI), row.name);
            var handNode = find("hand", itemUI);

            if (handNode) {
              handNode.active = false;
            }

            if (this.needHand()) {
              if (i == 0) {
                itemUI.active = true;
                handNode.active = true;
              } else {
                itemUI.active = false;
              }
            } else {
              itemUI.active = true;
            }
          }

          this.scheduleOnce(() => {
            this.startQianShouUpdate();

            if (!this.needHand()) {
              this.startDianJvUpdate();
              this.startXieziUpdate();
              this.startNianChouUpdate();
              this.startPaoDangRenUpdate();
            }
          }, 1 + Math.random());
        }

        needHand() {
          var floorId = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getTowerMapInfo(101).floor;

          if (floorId <= 1) {
            return true;
          }

          return false;
        }

        startPaoDangRenUpdate() {
          if (Math.random() > 0.3) {
            if (this.paoDangRenNode.getComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
              error: Error()
            }), AnimationCtrl) : AnimationCtrl).spineSkeleton.animation != "walk") {
              this.paoDangRenNode.getComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
                error: Error()
              }), AnimationCtrl) : AnimationCtrl).playAnimation("walk", true);
            }

            this.scheduleOnce(() => {
              this.startPaoDangRenUpdate();
            }, 1 + Math.random());
          } else {
            var name = Math.random() > 0.7 ? "attack1" : "attack3";

            if (name == "attack1") {
              var num = Math.random();

              if (num < 0.33) {
                name = "attackHand1";
              } else if (num < 0.66) {
                name = "attackHand2";
              } else {
                name = "attackHand3";
              }
            }

            var animation = this.paoDangRenNode.getComponent(Animation);
            animation.pause();
            this.paoDangRenNode.getComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
              error: Error()
            }), AnimationCtrl) : AnimationCtrl).playAnimationOnce(name, () => {
              animation.resume();
              this.startPaoDangRenUpdate();
            });
          }
        }

        startNianChouUpdate() {
          if (Math.random() > 0.2) {
            if (this.nianChouNode.getComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
              error: Error()
            }), AnimationCtrl) : AnimationCtrl).spineSkeleton.animation != "walk") {
              this.nianChouNode.getComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
                error: Error()
              }), AnimationCtrl) : AnimationCtrl).playAnimation("walk", true);
            }

            this.scheduleOnce(() => {
              this.startNianChouUpdate();
            }, 1 + Math.random());
          } else {
            this.nianChouNode.getComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
              error: Error()
            }), AnimationCtrl) : AnimationCtrl).playAnimationOnce("attack1", () => {
              this.startNianChouUpdate();
            });
          }
        }

        startXieziUpdate() {
          if (Math.random() > 0.2) {
            if (this.xieZiNode.getComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
              error: Error()
            }), AnimationCtrl) : AnimationCtrl).spineSkeleton.animation != "walk") {
              this.xieZiNode.getComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
                error: Error()
              }), AnimationCtrl) : AnimationCtrl).playAnimation("walk", true);
            }

            this.scheduleOnce(() => {
              this.startXieziUpdate();
            }, 1 + Math.random());
          } else {
            var name = Math.random() > 0.5 ? "attack1" : "attack4";
            this.xieZiNode.getComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
              error: Error()
            }), AnimationCtrl) : AnimationCtrl).playAnimationOnce(name, () => {
              this.startXieziUpdate();
            });
          }
        }

        startDianJvUpdate() {
          if (Math.random() > 0.3) {
            if (this.dianJvNode.getComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
              error: Error()
            }), AnimationCtrl) : AnimationCtrl).spineSkeleton.animation != "walk") {
              this.dianJvNode.getComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
                error: Error()
              }), AnimationCtrl) : AnimationCtrl).playAnimation("walk", true);
            }

            this.scheduleOnce(() => {
              this.startDianJvUpdate();
            }, 1 + Math.random());
          } else {
            var name = Math.random() > 0.5 ? "attack1" : "attack2";
            this.dianJvNode.getComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
              error: Error()
            }), AnimationCtrl) : AnimationCtrl).playAnimationOnce(name, () => {
              this.startDianJvUpdate();
            });
          }
        }

        startQianShouUpdate() {
          if (Math.random() > 0.5) {
            if (this.qianShouNode.getComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
              error: Error()
            }), AnimationCtrl) : AnimationCtrl).spineSkeleton.animation != "walk") {
              this.qianShouNode.getComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
                error: Error()
              }), AnimationCtrl) : AnimationCtrl).playAnimation("walk", true);
            }

            this.scheduleOnce(() => {
              this.startQianShouUpdate();
            }, 1 + Math.random());
          } else {
            this.qianShouNode.getComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
              error: Error()
            }), AnimationCtrl) : AnimationCtrl).playAnimationOnce("attack", () => {
              this.startQianShouUpdate();
            });
          }
        }

        processEvent(ac, data) {
          switch (ac) {
            default:
              break;
          }
        }

        onButtonClick(node, name) {
          switch (name) {
            default:
              break;
          }
        }

        openTowerFloorLayer(mapId) {
          var obj = {
            id: mapId
          };
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.TowerFloorLayer, obj);
        }

        onClickBtnTower(node) {
          var row = node.row;
          this.openTowerFloorLayer(row.id);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=26359d74d149c7b3406f432a50a4dbe8ab3e1d0d.js.map