System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, sp, Sprite, SpriteFrame, tween, v3, _decorator, sdkManager, constants, designManager, eventManager, UserData, RewardLayer, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, GuessResultLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfsdkManager(extras) {
    _reporterNs.report("sdkManager", "../../../sdk/sdkManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventManager(extras) {
    _reporterNs.report("eventManager", "../../manager/eventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropItem(extras) {
    _reporterNs.report("PropItem", "../../model/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../../model/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardLayer(extras) {
    _reporterNs.report("RewardLayer", "./RewardLayer", _context.meta, extras);
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
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      sdkManager = _unresolved_2.sdkManager;
    }, function (_unresolved_3) {
      constants = _unresolved_3.constants;
    }, function (_unresolved_4) {
      designManager = _unresolved_4.designManager;
    }, function (_unresolved_5) {
      eventManager = _unresolved_5.eventManager;
    }, function (_unresolved_6) {
      UserData = _unresolved_6.UserData;
    }, function (_unresolved_7) {
      RewardLayer = _unresolved_7.RewardLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d47f185DCpGq4YQ2fvT43RX", "GuessResultLayer", undefined);

      __checkObsolete__(['Label', 'Node', 'sp', 'Sprite', 'SpriteFrame', 'tween', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GuessResultLayer", GuessResultLayer = (_dec = ccclass('GuessResultLayer'), _dec2 = property({
        type: Node
      }), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(sp.Skeleton), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(Node), _dec12 = property(Node), _dec(_class = (_class2 = class GuessResultLayer extends (_crd && RewardLayer === void 0 ? (_reportPossibleCrUseOfRewardLayer({
        error: Error()
      }), RewardLayer) : RewardLayer) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "btnClose", _descriptor, this);

          _initializerDefineProperty(this, "guessItem2", _descriptor2, this);

          _initializerDefineProperty(this, "guessItem1", _descriptor3, this);

          _initializerDefineProperty(this, "spk", _descriptor4, this);

          _initializerDefineProperty(this, "btnNode", _descriptor5, this);

          _initializerDefineProperty(this, "resultNode", _descriptor6, this);

          _initializerDefineProperty(this, "rewardNode", _descriptor7, this);

          _initializerDefineProperty(this, "guessSprite", _descriptor8, this);

          _initializerDefineProperty(this, "guessNameSprite", _descriptor9, this);

          this._curSelectGuess = -1;
          this._curSelectBet = void 0;
          this._propItem = null;
          this._index = 0;
          this._dtTime = 0;
          this._isStartRun = false;

          _initializerDefineProperty(this, "armNodeGuess", _descriptor10, this);

          _initializerDefineProperty(this, "selfNodeGuess", _descriptor11, this);
        }

        onLoad() {}

        onEnable() {}

        onDisable() {
          super.onDisable();
        }

        onDestroy() {
          super.onDestroy();
        }

        start() {
          ///   console.log("tyqSDK.showCustomRectCenterAd")
          let curGuess = this.layerData.myGuess;
          this._curSelectBet = this.layerData.selectBet;
          this.guessItem1.spriteFrame = this.guessSprite[parseInt(curGuess)];
          this.selfNodeGuess.getChildByName("cloth1").getComponent(Sprite).spriteFrame = this.guessNameSprite[parseInt(curGuess)];
          this._curSelectGuess = this.layerData.myGuess;
          this.selfNodeGuess.position = v3(-380, 0, 0);
          this.armNodeGuess.position = v3(380, 0, 0);
          let self = this;
          tween(this.selfNodeGuess).to(0.2, {
            position: v3(-190, 0, 0)
          }).call(function () {
            self._isStartRun = true;
          }).start();
          tween(this.armNodeGuess).to(0.2, {
            position: v3(190, 0, 0)
          }).start();
          this.resultNode.active = false;
          this.rewardNode.active = false;
          this.btnNode.active = false;
        }

        closeBless() {
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send("initGuess");
          this.closeLayer();
        }

        update(dt) {
          if (!this._isStartRun) {
            return;
          }

          this._dtTime += dt;

          if (this._dtTime > 0.1) {
            this._dtTime = 0;
            this.armNodeGuess.getChildByName("icon").getComponent(Sprite).spriteFrame = this.guessSprite[this._index % 3];
            this.armNodeGuess.getChildByName("cloth1").getComponent(Sprite).spriteFrame = this.guessNameSprite[this._index % 3];
            this._index++;

            if (this._index > 20) {
              this._isStartRun = false;
              this.openResult();
            }
          }
        }

        openResult() {
          let result = Math.floor(Math.random() * 3);
          let str = ["石头", "剪刀", "布"];
          console.log("我方：", str[this._curSelectGuess]);
          console.log("敌方：", str[result]);
          this.armNodeGuess.getChildByName("icon").getComponent(Sprite).spriteFrame = this.guessSprite[result];
          this.armNodeGuess.getChildByName("cloth1").getComponent(Sprite).spriteFrame = this.guessNameSprite[result];
          let stoneDraw = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config["stoneDraw"]; //console.log("stoneDraw ", stoneDraw)

          let multiplier = 1;
          this.resultNode.active = true;
          this.resultNode.position = v3(0, 550, 0);
          tween(this.resultNode).to(0.2, {
            position: v3(0, 480, 0)
          }).start();
          let result1 = this.resultNode.getChildByName("result1");
          result1.position = v3(0, 150, 0);
          let self = this;
          tween(result1).to(0.2, {
            position: v3(0, 33, 0)
          }).call(function () {
            self.btnNode.active = true;
          }).start();

          if (this._curSelectGuess - result == -1 || this._curSelectGuess - result == 2) {
            console.log(" ---- win");
            multiplier = stoneDraw[0];
            this.setSpriteFrame2(result1, "activityRes/result1", null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.wwqVec);
            this.showYanhua();
          } else if (this._curSelectGuess == result) {
            console.log(" ---- 平局");
            multiplier = stoneDraw[1];
            this.setSpriteFrame2(result1, "activityRes/result2", null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.wwqVec);
          } else {
            this.setSpriteFrame2(result1, "activityRes/result3", null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.wwqVec);
            console.log(" ---- lose");
            multiplier = stoneDraw[2];
          }

          let curBet = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config["stone1"][this._curSelectBet];
          let propItem = {
            Id: curBet[0],
            Num: curBet[1] * multiplier
          };
          let propdata = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, curBet[0]);
          this.setSpriteFrame2(this.rewardNode.getChildByName("icon"), "prop/" + propdata.icon);
          this.rewardNode.active = true;
          this.rewardNode.getChildByName("numLab").getComponent(Label).string = curBet[1] * multiplier + "";
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getRewardProp([propItem]);
          this._propItem = [propItem]; //    this.openLayer(constants.layers.GuessResultLayer, { propArr: [propItem], myGuess: this._curSelectGuess, otherGuess: result });
        }

        doubleGet() {
          let self = this;
          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).openAd("猜拳双倍奖励", st => {
            if (st == 1) {
              if (self._propItem) (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().getRewardProp(self._propItem);
              self.closeBless();
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "guessItem2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "guessItem1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spk", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "resultNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rewardNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "guessSprite", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "guessNameSprite", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "armNodeGuess", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "selfNodeGuess", [_dec12], {
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
//# sourceMappingURL=09f7a5ff6cf85bcc6399c28198dadbe2f8902ddd.js.map