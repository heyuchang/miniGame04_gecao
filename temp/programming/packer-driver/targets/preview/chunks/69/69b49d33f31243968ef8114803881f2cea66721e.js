System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, instantiate, Label, Node, Prefab, sp, Sprite, tween, v3, _decorator, CountTimeUtil, utilTools, constants, audioManager, designManager, RedPointLogicMgr, UserData, PropItemPrefab, BaseUILayer, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, PatrolLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCountTimeUtil(extras) {
    _reporterNs.report("CountTimeUtil", "../../../utils/CountTimeUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../../manager/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedPointLogicMgr(extras) {
    _reporterNs.report("RedPointLogicMgr", "../../manager/RedPointLogicMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../../model/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropItemPrefab(extras) {
    _reporterNs.report("PropItemPrefab", "../item/PropItemPrefab", _context.meta, extras);
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
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CountTimeUtil = _unresolved_2.CountTimeUtil;
    }, function (_unresolved_3) {
      utilTools = _unresolved_3.utilTools;
    }, function (_unresolved_4) {
      constants = _unresolved_4.constants;
    }, function (_unresolved_5) {
      audioManager = _unresolved_5.audioManager;
    }, function (_unresolved_6) {
      designManager = _unresolved_6.designManager;
    }, function (_unresolved_7) {
      RedPointLogicMgr = _unresolved_7.RedPointLogicMgr;
    }, function (_unresolved_8) {
      UserData = _unresolved_8.UserData;
    }, function (_unresolved_9) {
      PropItemPrefab = _unresolved_9.PropItemPrefab;
    }, function (_unresolved_10) {
      BaseUILayer = _unresolved_10.BaseUILayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e1aabDu4XBJPLTRY3gJflVk", "PatrolLayer", undefined);

      __checkObsolete__(['Button', 'instantiate', 'Label', 'Node', 'Prefab', 'sp', 'Sprite', 'tween', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PatrolLayer", PatrolLayer = (_dec = ccclass('PatrolLayer'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Label
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Label
      }), _dec8 = property({
        type: Label
      }), _dec9 = property({
        type: Prefab
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Node
      }), _dec(_class = (_class2 = class PatrolLayer extends (_crd && BaseUILayer === void 0 ? (_reportPossibleCrUseOfBaseUILayer({
        error: Error()
      }), BaseUILayer) : BaseUILayer) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "btnPatrol", _descriptor, this);

          _initializerDefineProperty(this, "patrolTimelabel", _descriptor2, this);

          _initializerDefineProperty(this, "addCoinlabel", _descriptor3, this);

          _initializerDefineProperty(this, "addExplabel", _descriptor4, this);

          _initializerDefineProperty(this, "addPropLayer", _descriptor5, this);

          _initializerDefineProperty(this, "maxPatrolTimelabel", _descriptor6, this);

          _initializerDefineProperty(this, "curPatrolTimelabel", _descriptor7, this);

          _initializerDefineProperty(this, "propIten", _descriptor8, this);

          _initializerDefineProperty(this, "monster", _descriptor9, this);

          _initializerDefineProperty(this, "handNode", _descriptor10, this);

          this._rewardArr = [];
        }

        onLoad() {
          super.onLoad();
          this.handNode.active = false;
        }

        start() {
          this.initBtnPatrol();
          this.addCoinlabel.string = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.towerCoin * 60 + "/小时";
          this.addExplabel.string = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.towerExp * 60 + "/小时";
          this.maxPatrolTimelabel.string = "最长巡逻时间" + (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.towerTop / 60 + "小时";
          this.curPatrolTimelabel.string = "巡逻时间：" + (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).getTimeStrChinese((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getPatrolTime() * 1000, false);
          var rewardArr = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getPatrolReward();
          this._rewardArr = rewardArr;
          rewardArr.forEach(element => {
            var item = instantiate(this.propIten);
            item.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setView(element.Id, element.Num, (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_UnWear);
            item.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setScale(100);
            this.addPropLayer.addChild(item);
          });
          var monster = this.monster;
          tween(this.monster).show().set({
            position: v3(222, -95, 0)
          }).call(function () {
            monster.getComponent(sp.Skeleton).animation = "walk";
            monster.getComponent(sp.Skeleton).loop = true;
          }).to(1, {
            position: v3(50, -95, 0)
          }).call(function () {
            monster.getComponent(sp.Skeleton).animation = "die";
            monster.getComponent(sp.Skeleton).loop = false;
          }).delay(0.3).hide().delay(0.8).union().repeatForever().start();
        }

        initBtnPatrol() {
          var curTime = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getPatrolState();

          if (curTime > 0) {
            this.btnPatrol.getComponent(Button).interactable = false;
            this.btnPatrol.getComponent(Sprite).grayscale = true;
            var self = this;
            this.btnPatrol.getChildByName("Label").getComponent(_crd && CountTimeUtil === void 0 ? (_reportPossibleCrUseOfCountTimeUtil({
              error: Error()
            }), CountTimeUtil) : CountTimeUtil).setTime(curTime, function () {
              self.btnPatrol.getComponent(Button).interactable = true;
              self.btnPatrol.getComponent(Sprite).grayscale = false;
              self.btnPatrol.getChildByName("Label").getComponent(Label).string = "领 取";
            });
            (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
              error: Error()
            }), RedPointLogicMgr) : RedPointLogicMgr).ins().setRPointView(this.btnPatrol, null, false);
          } else {
            (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
              error: Error()
            }), RedPointLogicMgr) : RedPointLogicMgr).ins().setRPointView(this.btnPatrol, null, true);
            this.btnPatrol.getChildByName("Label").getComponent(Label).string = "领 取";
            this.handNode.active = true;
          }
        }

        onGetRewardNormal() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.handNode.active = false;
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getCurPatrolData();
          this.showGetReward(this._rewardArr);
          this.initBtnPatrol();
          this.curPatrolTimelabel.string = "巡逻时间：" + (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).getTimeStrChinese((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getPatrolTime() * 1000, false); //   this.playCoinFlyAnim(10, v3(0,0,0), v3(0,600,0),null,0)
        }

        onGetRewardVideo() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");

          if (this.handNode.active) {
            return;
          }

          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.PatrolFastLayer); // sdkManager.openAd("快速巡逻", (state: number) => {
          //     if (state == 1) {
          //         UserData.getInstance().getPatrolRewardByTime(designManager.config.towerPressTime * 60)
          //         this.showGetReward(this._rewardArr)
          //     }
          // })
          //   cc.find('Canvas').addChild(coin);
          //   this.playCoinFlyAnim(10, v3(0,0,0), v3(0,600,0),null,0)
        }

        closeLayer() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");

          if (this.handNode.active) {
            return;
          }

          super.closeLayer();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnPatrol", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "patrolTimelabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "addCoinlabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "addExplabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "addPropLayer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "maxPatrolTimelabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "curPatrolTimelabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "propIten", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "monster", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "handNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=69b49d33f31243968ef8114803881f2cea66721e.js.map