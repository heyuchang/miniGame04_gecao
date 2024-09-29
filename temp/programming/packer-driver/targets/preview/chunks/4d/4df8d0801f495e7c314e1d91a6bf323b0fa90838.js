System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, tween, UITransform, v3, view, _decorator, sdkManager, CronCtr, Channel, tyqAdManager, tyqSDK, tyqSDKConfig, cocosUtil, utilTools, constants, msgac, audioManager, designManager, mapModel, playerModel, UserData, serverMsg, AnimationCtrl, BaseLayer, _dec, _class, _crd, ccclass, property, SettlementLayer;

  function _reportPossibleCrUseOfsdkManager(extras) {
    _reporterNs.report("sdkManager", "../../../sdk/sdkManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCronCtr(extras) {
    _reporterNs.report("CronCtr", "../../../tyqSDK/network/CronCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannel(extras) {
    _reporterNs.report("Channel", "../../../tyqSDK/tyqAdManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqAdManager(extras) {
    _reporterNs.report("tyqAdManager", "../../../tyqSDK/tyqAdManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../../../tyqSDK/tyqSDK", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqSDKConfig(extras) {
    _reporterNs.report("tyqSDKConfig", "../../../tyqSDK/tyqSDKConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../utils/utilTools", _context.meta, extras);
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

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerModel(extras) {
    _reporterNs.report("playerModel", "../../model/playerModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropItem(extras) {
    _reporterNs.report("PropItem", "../../model/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../../model/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfserverMsg(extras) {
    _reporterNs.report("serverMsg", "../../other/serverMsg", _context.meta, extras);
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
      find = _cc.find;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      view = _cc.view;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      sdkManager = _unresolved_2.sdkManager;
    }, function (_unresolved_3) {
      CronCtr = _unresolved_3.default;
    }, function (_unresolved_4) {
      Channel = _unresolved_4.Channel;
      tyqAdManager = _unresolved_4.tyqAdManager;
    }, function (_unresolved_5) {
      tyqSDK = _unresolved_5.tyqSDK;
    }, function (_unresolved_6) {
      tyqSDKConfig = _unresolved_6.tyqSDKConfig;
    }, function (_unresolved_7) {
      cocosUtil = _unresolved_7.cocosUtil;
    }, function (_unresolved_8) {
      utilTools = _unresolved_8.utilTools;
    }, function (_unresolved_9) {
      constants = _unresolved_9.constants;
    }, function (_unresolved_10) {
      msgac = _unresolved_10.msgac;
    }, function (_unresolved_11) {
      audioManager = _unresolved_11.audioManager;
    }, function (_unresolved_12) {
      designManager = _unresolved_12.designManager;
    }, function (_unresolved_13) {
      mapModel = _unresolved_13.mapModel;
    }, function (_unresolved_14) {
      playerModel = _unresolved_14.playerModel;
    }, function (_unresolved_15) {
      UserData = _unresolved_15.UserData;
    }, function (_unresolved_16) {
      serverMsg = _unresolved_16.serverMsg;
    }, function (_unresolved_17) {
      AnimationCtrl = _unresolved_17.AnimationCtrl;
    }, function (_unresolved_18) {
      BaseLayer = _unresolved_18.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7026fGphVxC+bSB7DKVEyWa", "SettlementLayer", undefined);

      __checkObsolete__(['find', 'Node', 'tween', 'UITransform', 'v3', 'Vec3', 'view', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SettlementLayer", SettlementLayer = (_dec = ccclass('SettlementLayer'), _dec(_class = class SettlementLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          this.winAniCtrl = void 0;
          this.winMapNameNode = void 0;
          this.failAniCtrl = void 0;
          this.failMapNameNode = void 0;
          this.winTitleNode = void 0;
          this.timeNode = void 0;
          this.bestTimeNode = void 0;
          this.monsterNode = void 0;
          this.lineNode = void 0;
          this.itemLayerBg = void 0;
          this.itemLayerNode = void 0;
          this.btnDouble = void 0;
          this.btnDoublePos = void 0;
          this.btnSure = void 0;
          this.btnSurePos = void 0;
        }

        onLoad() {
          super.onLoad();
          this.winAniCtrl = this.getNodeByPath("bg2/win").addComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
            error: Error()
          }), AnimationCtrl) : AnimationCtrl);
          this.winMapNameNode = this.getNodeByPath("bg2/win/mapName");
          this.failAniCtrl = this.getNodeByPath("bg2/fail").addComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
            error: Error()
          }), AnimationCtrl) : AnimationCtrl);
          this.failMapNameNode = this.getNodeByPath("bg2/fail/mapName");
          this.winTitleNode = this.getNodeByPath("ui/winTitle");
          this.timeNode = this.getNodeByPath("ui/time");
          this.bestTimeNode = this.getNodeByPath("ui/bestTime");
          this.monsterNode = this.getNodeByPath("ui/monster");
          this.lineNode = this.getNodeByPath("ui/line");
          this.itemLayerBg = this.getNodeByPath("ui/itemLayer/bg");
          this.itemLayerNode = this.getNodeByPath("ui/itemLayer/itemLayer");
          this.btnDouble = this.getNodeByPath("ui/btns/btnDouble");
          this.btnDoublePos = this.btnDouble.position.clone();
          this.btnSure = this.getNodeByPath("ui/btns/btnSure");
          this.btnSurePos = this.btnSure.position.clone();
          this.isShowBannerAd = true;
        }

        onEnable() {
          super.onEnable();
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().mapData = null;

          if (this.layerData.isWin) {
            (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
              error: Error()
            }), audioManager) : audioManager).playEffect((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).audioNames.win); // 好友通关次数

            (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().$friendPassCnt++;
            (_crd && CronCtr === void 0 ? (_reportPossibleCrUseOfCronCtr({
              error: Error()
            }), CronCtr) : CronCtr).getInstance().saveDataToCloud("friendPassCnt", (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().$friendPassCnt);
          }
        }

        onDisable() {
          super.onDisable();
        }

        onDestroy() {
          super.onDestroy();
        }

        initUI() {
          if (this.layerData.isWin) {
            (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).addDayTaskNum(10);
          }

          this.winAniCtrl.node.active = false;
          this.winMapNameNode.active = false;
          this.failAniCtrl.node.active = false;
          this.failMapNameNode.active = false;
          this.winTitleNode.active = false;
          this.timeNode.active = false;
          this.bestTimeNode.active = false;
          this.monsterNode.active = false;
          this.lineNode.active = false;
          this.itemLayerBg.active = false;
          this.itemLayerNode.active = false;
          this.btnDouble.active = false;
          this.btnSure.active = false;
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).waterfall([(result, cb) => {
            if (this.layerData.isWin) {
              this.winAniCtrl.node.active = true;
              this.winAniCtrl.playAnimation("a", false, () => {
                this.winAniCtrl.playAnimation("b", true);
                cb();
              });
              return;
            }

            this.failAniCtrl.node.active = true;
            this.failAniCtrl.playAnimation("a", false, () => {
              this.failAniCtrl.playAnimation("b", true);
              cb();
            });
          }, (result, cb) => {
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.map, (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).mapId);

            if (this.layerData.isWin) {
              this.winMapNameNode.active = true;
              this.setString(find("text", this.winMapNameNode), row.name);
              (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).tweenScaleIn2(this.winMapNameNode, 0.2, () => {
                cb();
              });
              return;
            }

            this.failMapNameNode.active = true;
            this.setString(find("text", this.failMapNameNode), row.name);
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).tweenScaleIn2(this.failMapNameNode, 0.2, () => {
              cb();
            });
          }, (result, cb) => {
            if (this.layerData.isWin) {
              this.winTitleNode.active = true;
              (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).tweenScaleIn2(this.winTitleNode, 0.2, () => {
                cb();
              });
              return;
            }

            this.timeNode.active = true;
            this.setString(find("time", this.timeNode), (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).getTimeStr(this.layerData.time * 1000, true));
            var newNode = find("new", this.timeNode);

            if (this.layerData.isBest) {
              newNode.active = true;
              (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).tweenBlink(newNode);
            } else {
              newNode.active = false;
            }

            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).tweenScaleIn2(this.timeNode, 0.2, () => {
              this.bestTimeNode.active = true;
              (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).tweenScaleIn2(this.bestTimeNode, 0.2, () => {
                this.setString(find("info/time", this.bestTimeNode), (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                  error: Error()
                }), utilTools) : utilTools).getTimeStr(this.layerData.bestTime * 1000, true));
                cb();
              });
            });
          }, (result, cb) => {
            this.monsterNode.active = true;
            this.setString(find("info/num", this.monsterNode), (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).killMonsterNum);
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).tweenScaleIn2(this.monsterNode, 0.2, () => {
              cb();
            });
          }, (result, cb) => {
            this.lineNode.active = true;
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).tweenFadeIn(this.lineNode, 0.2, () => {
              cb();
            });
          }, (result, cb) => {
            this.itemLayerBg.active = true;
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).tweenFadeIn(this.itemLayerBg, 0.2, () => {
              cb();
            });
          }, (result, cb) => {
            this.itemLayerNode.active = true;
            this.setItemLayer(this.itemLayerNode, this.layerData.award, this.refreshPropItem.bind(this));
            var num = this.itemLayerNode.children.length;
            (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).forArr(this.itemLayerNode.children, (itemUI, index) => {
              itemUI.scale = v3(0, 0, 0);
              this.scheduleOnce(() => {
                tween(itemUI).set({
                  scale: v3(2, 2, 1)
                }).to(0.2, {
                  scale: v3(1, 1, 1)
                }).to(0.05, {
                  scale: v3(1.1, 1.1, 1)
                }).to(0.05, {
                  scale: v3(1, 1)
                }).call(() => {
                  if (index >= num - 1) {
                    cb();
                  }
                }).start();
              }, index * 0.2);
            });
          }, (result, cb) => {
            this.btnDouble.active = true;
            var pos = this.btnDoublePos.clone();
            pos.x += view.getVisibleSize().width * 0.5 + this.btnDouble.getComponent(UITransform).width;
            this.btnDouble.position = pos;
            this.btnSure.active = true;
            pos = this.btnSurePos.clone();
            pos.x -= view.getVisibleSize().width * 0.5 + this.btnSure.getComponent(UITransform).width;
            this.btnSure.position = pos;
            tween(this.btnDouble).to(0.5, {
              position: this.btnDoublePos
            }).start();
            tween(this.btnSure).to(0.5, {
              position: this.btnSurePos
            }).start();
          }]);
        }

        refreshPropItem(itemUI, data) {
          var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, data.Id);
          this.setSpriteFrame2(find("bg", itemUI), "prop/propbg" + row.quality);
          this.setSpriteFrame2(find("icon", itemUI), "prop/" + row.icon);
          var numNode = find("num", itemUI);

          if (row.type == 8 || row.type == 11) {
            numNode.active = false;
          } else {
            numNode.active = true;
            this.setNumString(find("num/num", itemUI), data.Num);
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

        closeLayer() {
          super.closeLayer();

          if (this.layerCb) {
            this.layerCb();
          }

          var obj = {};
          obj.mapId = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapId;
          obj.floor = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).floor;
          obj.isWin = this.layerData.isWin;
          (_crd && serverMsg === void 0 ? (_reportPossibleCrUseOfserverMsg({
            error: Error()
          }), serverMsg) : serverMsg).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).mapLeave, obj);

          if ((_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).getSwitchValue((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).paramsKeys.tyq_more_game_level) > 0 && (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).getSwitchValue((_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).paramsKeys.tyq_more_game_level) > (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().openLevel) {
            if ((_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
              error: Error()
            }), tyqAdManager) : tyqAdManager).getChannel() == (_crd && Channel === void 0 ? (_reportPossibleCrUseOfChannel({
              error: Error()
            }), Channel) : Channel).WECHAT) {
              this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).layers.MoreGameLayer);
            }
          }
        }

        onClickBtnSure(node) {
          this.closeLayer();
        }

        onClickBtnDouble() {
          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).openAd("结算奖励双倍", st => {
            if (st == 1) {
              (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().getRewardProp(this.layerData.award);
              this.closeLayer();
            }
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4df8d0801f495e7c314e1d91a6bf323b0fa90838.js.map