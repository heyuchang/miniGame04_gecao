System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Label, Node, v3, _decorator, sdkManager, tyqSDK, constants, designManager, UserData, PropItemPrefab, BaseUILayer, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, PyramidDrawLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfsdkManager(extras) {
    _reporterNs.report("sdkManager", "../../../sdk/sdkManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../../../tyqSDK/tyqSDK", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropItem(extras) {
    _reporterNs.report("PropItem", "../../model/UserData", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      sdkManager = _unresolved_2.sdkManager;
    }, function (_unresolved_3) {
      tyqSDK = _unresolved_3.tyqSDK;
    }, function (_unresolved_4) {
      constants = _unresolved_4.constants;
    }, function (_unresolved_5) {
      designManager = _unresolved_5.designManager;
    }, function (_unresolved_6) {
      UserData = _unresolved_6.UserData;
    }, function (_unresolved_7) {
      PropItemPrefab = _unresolved_7.PropItemPrefab;
    }, function (_unresolved_8) {
      BaseUILayer = _unresolved_8.BaseUILayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0be3fNof/RKgZVm96nTa8+r", "PyramidDrawLayer", undefined);

      __checkObsolete__(['instantiate', 'Label', 'Node', 'Prefab', 'sp', 'Sprite', 'SpriteFrame', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PyramidDrawLayer", PyramidDrawLayer = (_dec = ccclass('PyramidDrawLayer'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Label
      }), _dec(_class = (_class2 = class PyramidDrawLayer extends (_crd && BaseUILayer === void 0 ? (_reportPossibleCrUseOfBaseUILayer({
        error: Error()
      }), BaseUILayer) : BaseUILayer) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "btnClose", _descriptor, this);

          _initializerDefineProperty(this, "propItem", _descriptor2, this);

          _initializerDefineProperty(this, "itemLayer", _descriptor3, this);

          _initializerDefineProperty(this, "coinLabel", _descriptor4, this);

          this.items = [];
          this._index = 0;
          this._dtTime = 0;
          this._isStartRun = false;
          this._endIndex = 0;
          this._drawItemArr = [];
          this._isDoubleDraw = false;
        }

        onLoad() {}

        onDisable() {
          super.onDisable();
        }

        onDestroy() {
          super.onDestroy();
        }

        start() {
          this.initItems();
        }

        closeBless() {
          this.closeLayer();
        }

        initItems() {
          let data = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowsByType((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.CNTM, 3);

          for (let index = 0; index < data.length; index++) {
            this._drawItemArr.push(data[index].award);

            let propItem = instantiate(this.propItem);
            this.itemLayer.getChildByName("node" + (index + 1)).addChild(propItem);
            this.items[index] = propItem;
            propItem.position = v3(0, 0, 0);
            propItem.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setView(data[index].award[0][0], data[index].award[0][1], (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_UnTouch);
            propItem.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setScale(109);
            propItem.getChildByName("xuanzhong").active = false;
          }

          this.initItemState();
        }

        initItemState() {
          for (let index = 0; index < 10 && index < this.items.length; index++) {
            let drawItem = this.items[index];
            drawItem.getChildByName("grayMask").active = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().$pyramidState[index] == 1;
            drawItem.getChildByName("xuanzhong").active = false;
          }

          let drawItem = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config["jinzita"];
          this.coinLabel.string = drawItem[(_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().$pyramidDrawTime];
        }

        update(dt) {
          if (!this._isStartRun) {
            return;
          }

          this._dtTime += dt;

          if (this._dtTime > 0.1) {
            this._dtTime = 0;
            this._index++;

            for (let index = 0; index < 10; index++) {
              this.items[index].getChildByName("xuanzhong").active = false;
            }

            let itemsIndex = this.getDrawIndex(this._index, this._index >= this._endIndex);
            this.items[itemsIndex].getChildByName("xuanzhong").active = true;

            if (this._index >= this._endIndex) {
              this._isStartRun = false;
              let curBet = this._drawItemArr[itemsIndex][0];
              let propItem = {
                Id: curBet[0],
                Num: this._isDoubleDraw ? curBet[1] * 2 : curBet[1]
              };
              (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().getRewardProp([propItem]);
              this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).layers.RewardLayer, {
                propArr: [propItem]
              });
              (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().setPyramidState(itemsIndex);
              (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().$pyramidDrawTime++;

              if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().$pyramidDrawTime >= 10) {
                (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                  error: Error()
                }), UserData) : UserData).getInstance().$pyramidDrawTime = 0;
                (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                  error: Error()
                }), UserData) : UserData).getInstance().$pyramidState = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              }

              this.initItemState();
            }
          }
        }

        getDrawIndex(index, isHero) {
          if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().$pyramidDrawTime == 9) {
            return 0;
          }

          let arr = [];

          for (let i = isHero ? 1 : 0; i < (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().$pyramidState.length; i++) {
            if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().$pyramidState[i] == 0) {
              arr.push(i);
            }
          }

          return arr[index % arr.length];
        }

        startDraw() {
          if (this._isStartRun) {
            return;
          }

          let drawItem = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config["jinzita"];

          if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().checkAndUseBaoshi(drawItem[(_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().$pyramidDrawTime])) {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).eventSendCustomEvent("庆典消耗钻石——" + drawItem[(_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().$pyramidDrawTime]);
            this._isStartRun = true;
            this._isDoubleDraw = false;

            if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().$pyramidDrawTime == 9) {
              this._endIndex = 10;
            } else {
              this._endIndex = Math.floor(Math.random() * 10) + 20 - (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().$pyramidDrawTime;
            }

            this._index = 0;
          } else {
            this.toast("钻石不足");
            this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.RewardItemLayer, {
              propId: 801,
              num: (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).config.adDiamond
            });
          }
        }

        doubleDraw() {
          let self = this;
          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).openAd("参与庆典", function (st) {
            if (st == 1) {
              if (self._isStartRun) {
                return;
              }

              self._isStartRun = true;

              if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().$pyramidDrawTime == 9) {
                self._endIndex = 10;
              } else {
                self._endIndex = Math.floor(Math.random() * 10) + 20 - (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                  error: Error()
                }), UserData) : UserData).getInstance().$pyramidDrawTime;
              }

              self._index = 0; //  self._isDoubleDraw = true
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "propItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemLayer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "coinLabel", [_dec5], {
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
//# sourceMappingURL=82aca84dc44ec3b1b056f5973bc97ee6bbdd6518.js.map