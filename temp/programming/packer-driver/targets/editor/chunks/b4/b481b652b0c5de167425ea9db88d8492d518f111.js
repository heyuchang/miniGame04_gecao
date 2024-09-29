System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, instantiate, Label, Node, PageView, sp, UITransform, v3, _decorator, sdkManager, constants, msgac, audioManager, designManager, eventManager, RedPointLogicMgr, UserData, PropItemPrefab, BaseUILayer, playerModel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, ShopLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfsdkManager(extras) {
    _reporterNs.report("sdkManager", "../../../sdk/sdkManager", _context.meta, extras);
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

  function _reportPossibleCrUseOfplayerModel(extras) {
    _reporterNs.report("playerModel", "../../model/playerModel", _context.meta, extras);
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
      PageView = _cc.PageView;
      sp = _cc.sp;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      sdkManager = _unresolved_2.sdkManager;
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
      RedPointLogicMgr = _unresolved_8.RedPointLogicMgr;
    }, function (_unresolved_9) {
      UserData = _unresolved_9.UserData;
    }, function (_unresolved_10) {
      PropItemPrefab = _unresolved_10.PropItemPrefab;
    }, function (_unresolved_11) {
      BaseUILayer = _unresolved_11.BaseUILayer;
    }, function (_unresolved_12) {
      playerModel = _unresolved_12.playerModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5fb7L1gGZDloukFZbgJ7r4", "ShopLayer", undefined);

      __checkObsolete__(['Button', 'instantiate', 'Label', 'Node', 'PageView', 'sp', 'UITransform', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShopLayer", ShopLayer = (_dec = ccclass('ShopLayer'), _dec2 = property({
        type: Node,
        tooltip: "道具节点"
      }), _dec3 = property({
        type: Node,
        tooltip: "宣传页"
      }), _dec4 = property({
        type: sp.Skeleton,
        tooltip: ""
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Label
      }), _dec12 = property({
        type: Label
      }), _dec13 = property({
        type: Node
      }), _dec14 = property({
        type: Node
      }), _dec(_class = (_class2 = class ShopLayer extends (_crd && BaseUILayer === void 0 ? (_reportPossibleCrUseOfBaseUILayer({
        error: Error()
      }), BaseUILayer) : BaseUILayer) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mangItem", _descriptor, this);

          _initializerDefineProperty(this, "pageView", _descriptor2, this);

          _initializerDefineProperty(this, "mangheSpine", _descriptor3, this);

          _initializerDefineProperty(this, "btnManghe", _descriptor4, this);

          _initializerDefineProperty(this, "uiNode", _descriptor5, this);

          _initializerDefineProperty(this, "btnSure", _descriptor6, this);

          _initializerDefineProperty(this, "propItem", _descriptor7, this);

          _initializerDefineProperty(this, "btnVideo", _descriptor8, this);

          _initializerDefineProperty(this, "btnSingle", _descriptor9, this);

          _initializerDefineProperty(this, "num1", _descriptor10, this);

          _initializerDefineProperty(this, "num2", _descriptor11, this);

          _initializerDefineProperty(this, "layer1", _descriptor12, this);

          _initializerDefineProperty(this, "layer2", _descriptor13, this);

          this._mangheType = 0;
          this._curState = 0;
          this._isDrawIng = false;
          this.gaojiProp = [];
          this._rewardArr = [];
        }

        onLoad() {}

        onEnable() {
          // for (let index = 0; index < 12; index++) {
          //     let item = instantiate(this.mangItem)
          //     this.listLayer.addChild(item)
          // }
          this.mangItem.active = false;
          this.num1.string = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.extra2 - (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().$drawNormalNum + "";
          this.num2.string = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.extra1 - (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().$drawGradeNum + "";
          (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
            error: Error()
          }), RedPointLogicMgr) : RedPointLogicMgr).ins().setRPointView(this.btnManghe, null, true);
          this.setSpriteFrame2(this.btnManghe, "shopLayer/mangheNormal", null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.wwqVec);
          this.pageView.getComponent(PageView).scrollToPage(0, 0);
          this._mangheType = 0;
          this.mangheSpine.animation = "purple1";
          this.mangheSpine.timeScale = 1;
          this.btnSure.active = false;
          let self = this;

          let callfun = function () {
            self.animalFinish();
          };

          this.mangheSpine.setCompleteListener(callfun);
          let arr = [10082, 10113, 10010];
          let arr1 = [10066, 10155, 10118];

          for (let i = 0; i < arr.length; i++) {
            let propItem = instantiate(self.propItem);
            this.layer1.addChild(propItem);
            propItem.position = v3(0, 0, 0);
            propItem.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setView(arr[i], 1, (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_UnTouch | (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_HideNum);
            propItem.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setScale(100);
          }

          for (let i = 0; i < arr1.length; i++) {
            let propItem = instantiate(self.propItem);
            this.layer2.addChild(propItem);
            propItem.position = v3(0, 0, 0);
            propItem.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setView(arr1[i], 1, (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_UnTouch | (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_HideNum);
            propItem.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setScale(100);
          }

          this.onClickChangeManghe();
        }

        start() {
          console.log("layerData = ", this.layerData);
          this.initVideoBtn();
        }

        initVideoBtn() {
          if (this.layerData.taskGo && (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().$freeDraw < (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.taskDoge) {
            this.btnVideo.getChildByName("ui_video").active = false;
            this.btnVideo.getChildByName("Layout").active = false;
            this.btnVideo.getChildByName("videoLabel").position = v3(0, 0, 0);
            return;
          }

          if (this._mangheType == 1) {
            this.btnVideo.getChildByName("Layout").getChildByName("zsLabel").getComponent(Label).string = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.tenCard + "";
            this.btnSingle.getChildByName("Layout").getChildByName("zsLabel").getComponent(Label).string = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.onceCard + "";
            this.setSpriteFrame2(this.btnSingle.getChildByName("Layout").getChildByName("prop_zs"), "prop/prop_diamond2");
            this.setSpriteFrame2(this.btnVideo.getChildByName("Layout").getChildByName("prop_zs"), "prop/prop_diamond2");

            if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().baoshi >= (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.tenCard) {
              this.btnVideo.getChildByName("videoLabel").position = v3(0, -10, 0);
              this.btnVideo.getChildByName("ui_video").active = false;
              this.btnVideo.getChildByName("Layout").active = true;
            } else {
              this.btnVideo.getChildByName("videoLabel").position = v3(20, 0, 0);
              this.btnVideo.getChildByName("ui_video").active = true;
              this.btnVideo.getChildByName("Layout").active = false;
            }
          } else {
            this.btnVideo.getChildByName("Layout").getChildByName("zsLabel").getComponent(Label).string = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.tenCard2 + "";
            this.btnSingle.getChildByName("Layout").getChildByName("zsLabel").getComponent(Label).string = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.onceCard2 + "";
            this.setSpriteFrame2(this.btnSingle.getChildByName("Layout").getChildByName("prop_zs"), "prop/prop_coin1");
            this.setSpriteFrame2(this.btnVideo.getChildByName("Layout").getChildByName("prop_zs"), "prop/prop_coin1");

            if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().coin >= (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.tenCard2) {
              this.btnVideo.getChildByName("videoLabel").position = v3(0, -10, 0);
              this.btnVideo.getChildByName("ui_video").active = false;
              this.btnVideo.getChildByName("Layout").active = true;
            } else {
              this.btnVideo.getChildByName("videoLabel").position = v3(20, 0, 0);
              this.btnVideo.getChildByName("ui_video").active = true;
              this.btnVideo.getChildByName("Layout").active = false;
            }
          }
        }

        onOnceCard() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.mangItem.active = false;
          this.mangItem.getChildByName("Layout").removeAllChildren();
          let isEnougth = false;

          if (this._mangheType == 1) {
            isEnougth = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().checkAndUseBaoshi((_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.onceCard, true);
          } else {
            isEnougth = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().cheackAndUseCoin((_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.onceCard2, true);
          }

          if (isEnougth) {
            let obj = {};
            obj.hide = true;
            (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
              error: Error()
            }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
              error: Error()
            }), msgac) : msgac).homeHideMenu, obj);
            this.showChouAnimale();
            this.cancelButtonTouch(false);
            this._isDrawIng = true;
            this.gaojiProp = [];
            this._rewardArr = [];
            let item = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().getDrawItem(this._mangheType);
            let propData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop, item.award[0]);

            if (propData.quality >= 4) {
              this.gaojiProp.push(propData);
            }

            this._rewardArr.push({
              Id: item.award[0],
              Num: 1
            });

            this.initVideoBtn(); // if (item) {
            //     arr.push(item)
            //     this.openLayer(constants.layers.RewardLayer, { propArr: arr })
            // }
          } else {
            this.toast(this._mangheType == 1 ? "钻石不足" : "金币不足");
          }
        }

        onTenCard() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.mangItem.getChildByName("Layout").removeAllChildren();
          this.mangItem.active = false;
          let self = this;
          this.mangItem.getChildByName("Layout").getComponent(UITransform).width = 540;
          this.mangItem.getChildByName("Layout").getComponent(UITransform).height = 200;

          let getReward = function () {
            self.showChouAnimale();
            let obj = {};
            obj.hide = true;
            self.cancelButtonTouch(false);
            self._isDrawIng = true;
            self.gaojiProp = [];
            self._rewardArr = [];
            (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
              error: Error()
            }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
              error: Error()
            }), msgac) : msgac).homeHideMenu, obj);

            for (let i = 0; i < 10; i++) {
              let item = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().getDrawItem(self._mangheType);

              if (item) {
                // let propItem = instantiate(self.propItem)
                // self.mangItem.getChildByName("Layout").addChild(propItem)
                // propItem.getComponent(PropItemPrefab).setView(item.award[0], item.award[2], PropItemPrefab.Type_UnTouch)
                // propItem.getComponent(PropItemPrefab).setScale(100)
                let propData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                  error: Error()
                }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).tableName.prop, item.award[0]);

                if (propData.quality >= 4) {
                  self.gaojiProp.push(propData);
                }

                self._rewardArr.push({
                  Id: item.award[0],
                  Num: 1
                });
              }
            }

            self.initVideoBtn(); //    self.openLayer(constants.layers.RewardLayer, { propArr: arr })
          };

          let isEnougth = false;

          if (this.layerData.taskGo && (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().$freeDraw < (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.taskDoge) {
            isEnougth = true;
            (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().$freeDraw++;
          } else {
            if (this._mangheType == 1) {
              isEnougth = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().checkAndUseBaoshi((_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).config.tenCard, true);
            } else {
              isEnougth = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().cheackAndUseCoin((_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).config.tenCard2, true);
            }
          }

          if (isEnougth) {
            getReward && getReward();
          } else {
            (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
              error: Error()
            }), sdkManager) : sdkManager).openAd(this._mangheType == 1 ? "盲盒高级抽奖" : "盲盒普通抽奖", state => {
              if (state == 1) {
                getReward && getReward();
              }
            });
          }
        }

        onClickChangeManghe() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");

          if (this.pageView.getComponent(PageView).getCurrentPageIndex() == 0) {
            this.pageView.getComponent(PageView).scrollToPage(1, 0.2);
          } else {
            this.pageView.getComponent(PageView).scrollToPage(0, 0.2);
          }

          this.updatebtnState();
        }

        updatebtnState() {
          if (this._isDrawIng) {
            return;
          }

          if (this.pageView.getComponent(PageView).getCurrentPageIndex() == 1) {
            this._mangheType = 1;
            this.setSpriteFrame2(this.btnManghe, "shopLayer/manggaoji", null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.wwqVec);
            this.mangheSpine.setAnimation(0, "qiehuan1", false);
            this.mangheSpine.timeScale = 1;
          } else {
            this.mangheSpine.setAnimation(0, "qiehuan2", false);
            this.mangheSpine.timeScale = 1;
            this._mangheType = 0;
            this.setSpriteFrame2(this.btnManghe, "shopLayer/mangheNormal", null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.wwqVec);
          }

          this.initVideoBtn();
        }

        showChouAnimale() {
          let aniName = "purple";

          if (this._mangheType == 1) {
            aniName = "yellow";
          }

          this.mangheSpine.setAnimation(0, aniName + "2", false); // this.mangheSpine.animation = aniName + "2"

          this.mangheSpine.timeScale = 1;
          this._curState = 2;
        }

        animalFinish() {
          let aniName = "purple";

          if (this._mangheType == 1) {
            aniName = "yellow";
          }

          this.mangheSpine.loop = false;

          if (this._curState == 2) {
            this.uiNode.active = false;
            this.mangheSpine.timeScale = 1;
            this.mangheSpine.setAnimation(0, "bai3", false);
            this._curState = 3;
          } else if (this._curState == 3) {
            this.checkShowGaoji(); // this.mangheSpine.animation = aniName + "4"
            // this.btnSure.active = true

            this.mangItem.active = true; // this._curState = 4
          } else if (this._curState == 4) {// this.mangheSpine.animation = this.mangheSpine.animation
          }
        }

        checkShowGaoji() {
          if (this.gaojiProp.length > 0) {
            let propData = this.gaojiProp.shift();

            if (propData) {
              if (propData.quality >= 4) {
                this.mangheSpine.setAnimation(0, propData.quality == 4 ? "purple4" : "yellow4", true);
                this.mangheSpine.timeScale = 1;
                this.mangItem.getChildByName("Layout").removeAllChildren();
                let propItem = instantiate(this.propItem);
                this.mangItem.getChildByName("Layout").getComponent(UITransform).width = 300;
                this.mangItem.getChildByName("Layout").getComponent(UITransform).height = 300;
                this.mangItem.getChildByName("Layout").addChild(propItem);
                propItem.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
                  error: Error()
                }), PropItemPrefab) : PropItemPrefab).setView(propData.id, 1, (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
                  error: Error()
                }), PropItemPrefab) : PropItemPrefab).Type_BigIcon);
                propItem.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
                  error: Error()
                }), PropItemPrefab) : PropItemPrefab).setScale(300);
                this.btnSure.active = true;
                this._curState = 4;
                return;
              }
            }
          }

          let aniName = "purple";

          if (this._mangheType == 1) {
            aniName = "yellow";
          }

          this.mangheSpine.setAnimation(0, aniName + "1", false);
          this.mangheSpine.timeScale = 1;
          this.mangItem.active = false;
          this.mangItem.getChildByName("Layout").removeAllChildren();
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getRewardProp(this._rewardArr);
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.RewardLayer, {
            propArr: this._rewardArr
          });
          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).addDayTaskNum(3, this._rewardArr.length);
          this.drawFinish();
          this._curState = 5;
        }

        onBtnClickSure() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.checkShowGaoji();
          this.mangItem.active = true;
          return;
        }

        drawFinish() {
          this.num1.string = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.extra2 - (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().$drawNormalNum + "";
          this.num2.string = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.extra1 - (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().$drawGradeNum + "";
          this.uiNode.active = true;
          this.btnSure.active = false;
          this.mangItem.active = false;
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).homeHideMenu, {
            hide: false
          });
          let aniName = "purple";

          if (this._mangheType == 1) {
            aniName = "yellow";
          }

          this._curState = 0;
          this.mangheSpine.setAnimation(0, aniName + "1", false);
          this.cancelButtonTouch(true);
          this._isDrawIng = false;
        }

        cancelButtonTouch(state) {
          this.btnSingle.getComponent(Button).interactable = state;
          this.btnVideo.getComponent(Button).interactable = state;
          this.btnManghe.getComponent(Button).interactable = state;
        }

        onDisable() {
          super.onDisable();
        }

        onDestroy() {
          super.onDestroy();
        }

        closeLayer() {
          super.closeLayer();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mangItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pageView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mangheSpine", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnManghe", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "uiNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnSure", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "propItem", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnVideo", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btnSingle", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "num1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "num2", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "layer1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "layer2", [_dec14], {
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
//# sourceMappingURL=b481b652b0c5de167425ea9db88d8492d518f111.js.map