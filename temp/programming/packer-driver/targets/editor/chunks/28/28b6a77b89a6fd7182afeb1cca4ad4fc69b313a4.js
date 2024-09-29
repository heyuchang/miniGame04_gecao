System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, ProgressBar, tween, v3, Vec3, view, _decorator, CountTimeUtil, constants, msgac, audioManager, designManager, eventManager, UserData, BaseUILayer, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, TopUILayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCountTimeUtil(extras) {
    _reporterNs.report("CountTimeUtil", "../../../utils/CountTimeUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgac(extras) {
    _reporterNs.report("msgac", "../../data/msgac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../../manager/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventManager(extras) {
    _reporterNs.report("eventManager", "../../manager/eventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../../model/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseUILayer(extras) {
    _reporterNs.report("BaseUILayer", "./BaseUILayer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      tween = _cc.tween;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
      view = _cc.view;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CountTimeUtil = _unresolved_2.CountTimeUtil;
    }, function (_unresolved_3) {
      constants = _unresolved_3.constants;
    }, function (_unresolved_4) {
      msgac = _unresolved_4.msgac;
    }, function (_unresolved_5) {
      audioManager = _unresolved_5.audioManager;
    }, function (_unresolved_6) {
      designManager = _unresolved_6.designManager;
    }, function (_unresolved_7) {
      eventManager = _unresolved_7.eventManager;
    }, function (_unresolved_8) {
      UserData = _unresolved_8.UserData;
    }, function (_unresolved_9) {
      BaseUILayer = _unresolved_9.BaseUILayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dbf2aqp5zZNAYd/7F6SGaP7", "TopUILayer", undefined);

      __checkObsolete__(['Label', 'Node', 'ProgressBar', 'tween', 'v3', 'Vec3', 'view', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TopUILayer", TopUILayer = (_dec = ccclass('TopUILayer'), _dec2 = property({
        type: Label,
        tooltip: "体力标签"
      }), _dec3 = property({
        type: Label,
        tooltip: "宝石标签"
      }), _dec4 = property({
        type: Label,
        tooltip: "金币标签"
      }), _dec5 = property({
        type: Label,
        tooltip: "玩家等级"
      }), _dec6 = property({
        type: Node,
        tooltip: "使用展示"
      }), _dec7 = property({
        type: ProgressBar,
        tooltip: "经验进度条"
      }), _dec8 = property({
        type: Label,
        tooltip: "体力时间"
      }), _dec9 = property({
        type: Node
      }), _dec(_class = (_class2 = class TopUILayer extends (_crd && BaseUILayer === void 0 ? (_reportPossibleCrUseOfBaseUILayer({
        error: Error()
      }), BaseUILayer) : BaseUILayer) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "powerLabel", _descriptor, this);

          _initializerDefineProperty(this, "baoshiLabel", _descriptor2, this);

          _initializerDefineProperty(this, "coinLabel", _descriptor3, this);

          _initializerDefineProperty(this, "lvLabel", _descriptor4, this);

          _initializerDefineProperty(this, "showNode", _descriptor5, this);

          _initializerDefineProperty(this, "expBar", _descriptor6, this);

          _initializerDefineProperty(this, "tiliLabel", _descriptor7, this);

          _initializerDefineProperty(this, "clearBtn", _descriptor8, this);
        }

        onLoad() {
          super.onLoad();
          this.initLayout();
        }

        onEnable() {
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).on((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).commonResRefresh, this.updateData, this);
          this.clearBtn.active = false; //playerModel.isInDevelopmentEnvironment()  //cocosUtil.isDesktopBrowser();
        }

        initLayout() {
          let screen1 = view.getVisibleSize();
          let scale = this.getScreenScale();

          if (screen1.height / screen1.width > 2) {
            this.node.position = new Vec3(this.node.position.x, screen1.height / scale / 2 - 220, this.node.position.z);
          } else {
            this.node.position = new Vec3(this.node.position.x, screen1.height / scale / 2 - 160, this.node.position.z);
          }
        }

        start() {
          this.updateData();
        }

        showUseAnimal(type, num) {
          this.showNode.active = true;
          this.showNode.getChildByName("numLabel").getComponent(Label).string = "" + num;
          tween(this.showNode).show().set({
            position: v3(-88, -9, 0)
          }).to(0.5, {
            position: v3(-88, -39, 0)
          }).hide().start();
          this.updateData();
        }

        onDisable() {
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).off((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).commonResRefresh, this.updateData, this);
        }

        onDestroy() {}

        updateData() {
          this.powerLabel.string = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().power + "/" + (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.energyMax;
          this.baoshiLabel.string = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().baoshi + "";
          this.coinLabel.string = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().coin + "";
          this.lvLabel.string = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().roleLv + "";
          this.expBar.progress = Math.min(1, (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().roleExp / (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getNextLevelExp());

          if (this.tiliLabel.node.getComponent(_crd && CountTimeUtil === void 0 ? (_reportPossibleCrUseOfCountTimeUtil({
            error: Error()
          }), CountTimeUtil) : CountTimeUtil)) {
            this.tiliLabel.node.getComponent(_crd && CountTimeUtil === void 0 ? (_reportPossibleCrUseOfCountTimeUtil({
              error: Error()
            }), CountTimeUtil) : CountTimeUtil).setTime((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().getCountTime(), function () {
              (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().checkPowerTime();
              (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
                error: Error()
              }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
                error: Error()
              }), msgac) : msgac).commonResRefresh);
            });
          }

          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().saveData();
        }

        clearData() {
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().remove();
        }

        showRewardItem(event, data) {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");

          if (data == 1) {
            if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().power < (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.energyMax) {
              this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).layers.RewardItemLayer, {
                propId: 105,
                num: Math.min((_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                  error: Error()
                }), designManager) : designManager).config.adenergy, (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                  error: Error()
                }), designManager) : designManager).config.energyMax - (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                  error: Error()
                }), UserData) : UserData).getInstance().power)
              });
            }
          } else if (data == 2) {
            this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.RewardItemLayer, {
              propId: 801,
              num: (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).config.adDiamond
            });
          } else if (data == 3) {
            this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.RewardItemLayer, {
              propId: 104,
              num: (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).config.adCoin
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "powerLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "baoshiLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "coinLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lvLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "showNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "expBar", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "tiliLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "clearBtn", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=28b6a77b89a6fd7182afeb1cca4ad4fc69b313a4.js.map