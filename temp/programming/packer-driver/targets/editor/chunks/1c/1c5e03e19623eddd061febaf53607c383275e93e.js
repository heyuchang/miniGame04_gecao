System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Label, Node, Sprite, SpriteFrame, tween, v3, _decorator, tyqSDK, constants, designManager, eventManager, UserData, BaseUILayer, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, GuessGameLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../../../tyqSDK/tyqSDK", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      tyqSDK = _unresolved_2.tyqSDK;
    }, function (_unresolved_3) {
      constants = _unresolved_3.constants;
    }, function (_unresolved_4) {
      designManager = _unresolved_4.designManager;
    }, function (_unresolved_5) {
      eventManager = _unresolved_5.eventManager;
    }, function (_unresolved_6) {
      UserData = _unresolved_6.UserData;
    }, function (_unresolved_7) {
      BaseUILayer = _unresolved_7.BaseUILayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "109e3kYaCtJkr3flGDsZSB5", "GuessGameLayer", undefined);

      __checkObsolete__(['instantiate', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'tween', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GuessGameLayer", GuessGameLayer = (_dec = ccclass('GuessGameLayer'), _dec2 = property({
        type: Node
      }), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property({
        type: Node
      }), _dec10 = property(SpriteFrame), _dec11 = property(Node), _dec12 = property(Node), _dec(_class = (_class2 = class GuessGameLayer extends (_crd && BaseUILayer === void 0 ? (_reportPossibleCrUseOfBaseUILayer({
        error: Error()
      }), BaseUILayer) : BaseUILayer) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "btnClose", _descriptor, this);

          _initializerDefineProperty(this, "armNodeGuess", _descriptor2, this);

          _initializerDefineProperty(this, "selectBetNode", _descriptor3, this);

          _initializerDefineProperty(this, "itemLayer", _descriptor4, this);

          _initializerDefineProperty(this, "selectGuessNode", _descriptor5, this);

          _initializerDefineProperty(this, "guessLayer", _descriptor6, this);

          _initializerDefineProperty(this, "tipLabel", _descriptor7, this);

          _initializerDefineProperty(this, "btnlayer", _descriptor8, this);

          _initializerDefineProperty(this, "guessSprite", _descriptor9, this);

          _initializerDefineProperty(this, "items", _descriptor10, this);

          _initializerDefineProperty(this, "guessItems", _descriptor11, this);

          this._curSelectGuess = -1;
          this._curSelectBet = -1;
          this._index = 0;
          this._dtTime = 0;
          this._isStartRun = false;
        }

        onLoad() {}

        onEnable() {
          this.addTopUILayer("TopUILayer");
          this.fitNodeWidget(this.btnlayer, 30);
        }

        onDisable() {
          super.onDisable();
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).off("initGuess", this.initGuess, this);
        }

        onDestroy() {
          super.onDestroy();
        }

        start() {
          ///   console.log("tyqSDK.showCustomRectCenterAd")
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).on("initGuess", this.initGuess, this);
          let stone1 = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config["stone1"];
          console.log("stone1 = ", stone1);

          for (let index = 0; index < 6; index++) {
            if (stone1[index] && this.items[index]) {
              this.items[index].getChildByName("numLab").getComponent(Label).string = "" + stone1[index][1]; //	this.items[index].getChildByName("gou").active = false
            }
          }
        }

        closeBless() {
          this.closeLayer();
        }

        initGuess() {
          this.selectBetNode.removeAllChildren();
          this.armNodeGuess.active = false;
          let selectGuess = this.selectGuessNode.getChildByName("selectGuess");

          if (selectGuess) {
            selectGuess.removeFromParent();
          }

          this._index = 0;
          this._dtTime = 0;
          this._isStartRun = false;
          this._curSelectGuess = -1;
          this.itemLayer.active = true;
          this.guessLayer.active = true;
          this.tipLabel.node.active = true;
          this.tipLabel.string = "默认上次选择金额，可重新选择";

          if (this._curSelectBet > -1) {
            for (let index = 0; index < 6; index++) {
              if (this.items[index]) {
                this.items[index].getChildByName("gou").active = this._curSelectBet == index;
              }
            }
          }
        }

        onSelectBet(event, data) {
          if (this._curSelectBet == data && this.selectBetNode.children.length > 0) {
            this.selectBetNode.removeAllChildren();
            this._curSelectBet = -1;
            this.itemLayer.active = true;

            for (let index = 0; index < 6; index++) {
              if (this.items[index]) {
                this.items[index].getChildByName("gou").active = this._curSelectBet == index;
              }
            }

            this.tipLabel.string = "请选择下注金额";
            return;
          }

          this._curSelectBet = data; //this.items[this._curSelectBet].getChildByName("icon").color = cc.Color.GRAY

          console.log("select bet = ", data); //	console.log("select event.target = ", event)

          let selectItem = instantiate(this.items[this._curSelectBet]);
          selectItem.getChildByName("gou").active = false;
          this.selectBetNode.addChild(selectItem);
          tween(selectItem).to(0.5, {
            position: v3(0, -30, 0)
          }).start();
          this.tipLabel.string = "请猜拳";
          this.itemLayer.active = false;
        }

        onSelectBtn(event, data) {
          if (this._curSelectGuess >= 0) {
            return;
          }

          if (this._curSelectBet < 0) {
            this.toast("请先下注");
            return;
          }

          let curBet = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config["stone1"][this._curSelectBet];
          let propItem = {
            Id: curBet[0],
            Num: curBet[1]
          };

          if (!(_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().checkUseProp(propItem)) {
            this.toast("资源不足");
            return;
          }

          this._curSelectGuess = parseInt(data + ""); // let selectItem = instantiate(this.guessItems[this._curSelectGuess])
          // selectItem.name = "selectGuess"
          // selectItem.position = v3(-300, 0, 0)
          // this.selectGuessNode.addChild(selectItem)

          this._isStartRun = true; // let self = this
          // tween(selectItem).to(0.6, { position: v3(0, 0, 0) }).call(function () {
          //     self._isStartRun = true
          // //    self.armNodeGuess.active = true
          // }).start()

          this.tipLabel.node.active = false;
          this.guessLayer.active = false;
        }

        openResult() {
          let result = Math.floor(Math.random() * 3);
          let str = ["石头", "剪刀", "布"];
          console.log("我方：", str[this._curSelectGuess]);
          console.log("敌方：", str[result]);
          this.armNodeGuess.getChildByName("icon").getComponent(Sprite).spriteFrame = this.guessSprite[result];
          let stoneDraw = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config["stoneDraw"]; //console.log("stoneDraw ", stoneDraw)

          let multiplier = 1;

          if (this._curSelectGuess - result == -1 || this._curSelectGuess - result == 2) {
            //	console.log(" ---- win")
            multiplier = stoneDraw[0];
          } else if (this._curSelectGuess == result) {
            //console.log(" ---- 平局")
            multiplier = stoneDraw[1];
          } else {
            //console.log(" ---- lose")
            multiplier = stoneDraw[2];
          }

          let curBet = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config["stone1"][this._curSelectBet];
          let propItem = {
            Id: curBet[0],
            Num: curBet[1] * multiplier
          };
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getRewardProp([propItem]);
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.GuessResultLayer, {
            propArr: [propItem],
            myGuess: this._curSelectGuess,
            otherGuess: result
          });
          this.initGuess();
        }

        update(dt) {
          if (!this._isStartRun) {
            return;
          }

          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.GuessResultLayer, {
            myGuess: this._curSelectGuess,
            selectBet: this._curSelectBet
          });
          this._isStartRun = false;
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).eventSendCustomEvent("参与猜拳");
          return;
          this._dtTime += dt;

          if (this._dtTime > 0.1) {
            this._dtTime = 0;
            this.armNodeGuess.getChildByName("icon").getComponent(Sprite).spriteFrame = this.guessSprite[this._index % 3];
            this._index++;

            if (this._index > 20) {
              this._isStartRun = false;
              this.openResult();
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "armNodeGuess", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "selectBetNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemLayer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "selectGuessNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "guessLayer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "tipLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnlayer", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "guessSprite", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "items", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "guessItems", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1c5e03e19623eddd061febaf53607c383275e93e.js.map