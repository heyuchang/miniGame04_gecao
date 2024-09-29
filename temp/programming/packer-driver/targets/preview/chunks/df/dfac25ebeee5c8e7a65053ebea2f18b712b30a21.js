System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, EventHandler, find, instantiate, Prefab, Sprite, tween, v3, _decorator, myLog, ServerCtr, tyqAdManager, ChannelFlag, tyqSDK, constants, msgac, audioManager, designManager, eventManager, RedPointLogicMgr, RPointMask, resManager, mapModel, playerModel, UserData, BaseLayer, ShineColor, BaseUILayer, HeroLayer, MainLayer, TopUILayer, TowerLayer, _dec, _class, _crd, ccclass, property, HomeLayer;

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../../common/myLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerCtr(extras) {
    _reporterNs.report("ServerCtr", "../../../tyqSDK/network/ServerCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqAdManager(extras) {
    _reporterNs.report("tyqAdManager", "../../../tyqSDK/tyqAdManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelFlag(extras) {
    _reporterNs.report("ChannelFlag", "../../../tyqSDK/tyqSDK", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../../../tyqSDK/tyqSDK", _context.meta, extras);
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

  function _reportPossibleCrUseOfRPointMask(extras) {
    _reporterNs.report("RPointMask", "../../manager/RedPointLogicMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresManager(extras) {
    _reporterNs.report("resManager", "../../manager/resManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerModel(extras) {
    _reporterNs.report("playerModel", "../../model/playerModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../../model/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../base/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShineColor(extras) {
    _reporterNs.report("ShineColor", "../shader/ShineColor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseUILayer(extras) {
    _reporterNs.report("BaseUILayer", "./BaseUILayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroLayer(extras) {
    _reporterNs.report("HeroLayer", "./HeroLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainLayer(extras) {
    _reporterNs.report("MainLayer", "./MainLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTopUILayer(extras) {
    _reporterNs.report("TopUILayer", "./TopUILayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTowerLayer(extras) {
    _reporterNs.report("TowerLayer", "./TowerLayer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      EventHandler = _cc.EventHandler;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      ServerCtr = _unresolved_3.default;
    }, function (_unresolved_4) {
      tyqAdManager = _unresolved_4.tyqAdManager;
    }, function (_unresolved_5) {
      ChannelFlag = _unresolved_5.ChannelFlag;
      tyqSDK = _unresolved_5.tyqSDK;
    }, function (_unresolved_6) {
      constants = _unresolved_6.constants;
    }, function (_unresolved_7) {
      msgac = _unresolved_7.msgac;
    }, function (_unresolved_8) {
      audioManager = _unresolved_8.audioManager;
    }, function (_unresolved_9) {
      designManager = _unresolved_9.designManager;
    }, function (_unresolved_10) {
      eventManager = _unresolved_10.eventManager;
    }, function (_unresolved_11) {
      RedPointLogicMgr = _unresolved_11.RedPointLogicMgr;
      RPointMask = _unresolved_11.RPointMask;
    }, function (_unresolved_12) {
      resManager = _unresolved_12.resManager;
    }, function (_unresolved_13) {
      mapModel = _unresolved_13.mapModel;
    }, function (_unresolved_14) {
      playerModel = _unresolved_14.playerModel;
    }, function (_unresolved_15) {
      UserData = _unresolved_15.UserData;
    }, function (_unresolved_16) {
      BaseLayer = _unresolved_16.BaseLayer;
    }, function (_unresolved_17) {
      ShineColor = _unresolved_17.ShineColor;
    }, function (_unresolved_18) {
      BaseUILayer = _unresolved_18.BaseUILayer;
    }, function (_unresolved_19) {
      HeroLayer = _unresolved_19.HeroLayer;
    }, function (_unresolved_20) {
      MainLayer = _unresolved_20.MainLayer;
    }, function (_unresolved_21) {
      TopUILayer = _unresolved_21.TopUILayer;
    }, function (_unresolved_22) {
      TowerLayer = _unresolved_22.TowerLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "be74cBlU0tDKKhGwwM56Gmm", "HomeLayer", undefined);

      __checkObsolete__(['Button', 'EventHandler', 'find', 'instantiate', 'Node', 'Prefab', 'Sprite', 'tween', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HomeLayer", HomeLayer = (_dec = ccclass('HomeLayer'), _dec(_class = class HomeLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          this.toggles = [];
          this.togglesLock = [false, false, false, false, false];
          this._PageLayer = [(_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.TowerLayer, "HeroLayer", "MainLayer", "ShopLayer", (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.EnergyLayer];
          this.jumpLayerData = void 0;
          this.tabMainRedPointNode = void 0;
          this.tabEnergyRedPointNode = void 0;
        }

        onLoad() {
          this.chooseDesignResolution();
          this.tabMainRedPointNode = this.getNodeByPath("Layout/ui_btn3/redPoint");
          this.tabEnergyRedPointNode = this.getNodeByPath("Layout/ui_btn5/redPoint");

          if ((_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).getSwitchValue("tyq_HeroLayer_open") == 1) {
            this.togglesLock[1] = false;
            (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
              error: Error()
            }), RedPointLogicMgr) : RedPointLogicMgr).ins().on(this.node, [{
              mask: [(_crd && RPointMask === void 0 ? (_reportPossibleCrUseOfRPointMask({
                error: Error()
              }), RPointMask) : RPointMask).RPM_PropWear, (_crd && RPointMask === void 0 ? (_reportPossibleCrUseOfRPointMask({
                error: Error()
              }), RPointMask) : RPointMask).RPM_BlessProp],
              subPath: "Layout/ui_btn2"
            }]);
          } else {
            this.togglesLock[1] = true;
          }

          if ((_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).channel != (_crd && ChannelFlag === void 0 ? (_reportPossibleCrUseOfChannelFlag({
            error: Error()
          }), ChannelFlag) : ChannelFlag).WECHAT_JJWS) {
            this.togglesLock[1] = false;
          }

          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().reqGetFriendVal();
          this.schedule(() => {
            (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().reqGetFriendVal();
          }, 60 * 5);
          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i("进游戏的url参数：", (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getEnterUrlQuery());
          var urlParmas = (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getEnterUrlQuery();

          if (urlParmas && urlParmas.uid) {
            (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().reqSetFriendCode(urlParmas.uid);
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).eventSendCustomEvent("参与分享活动成功进来的玩家");
          }
        }

        onEnable() {
          super.onEnable();
          this.addEventArr([(_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).homeHideMenu, (_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).mapEnter, (_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).jumpLayer]); //  eventManager.on(msgac.homeHideMenu, this.homeHideMenuRet, this)

          if (!(_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().mapHand) {
            // 直接进去爬塔第一关
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).enterMapWithMapId(101, 1);
            return;
          }

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).hasEnergyAward()) {
            this.setPage(4);
          } else {
            this.setPage(0);
          }

          if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().mapData) {
            this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.BackMapLayer, null, mapId => {
              if (mapId) {
                (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).enterMapWithMapId(mapId);
              }
            });
          } // RedPointLogicMgr.ins().setRPointView(this.getNodeByPath("Layout/ui_btn2") ,null, true)


          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playMusic((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).audioNames.home);

          if (this.layerData.isWin && this.layerData.floor > 0) {
            // 爬塔胜利
            (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().addTowerMapFloor(this.layerData.mapId); // 跳回去爬塔界面

            var obj = {};
            obj.layerName = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.TowerFloorLayer;
            obj.mapId = this.layerData.mapId;
            (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
              error: Error()
            }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
              error: Error()
            }), msgac) : msgac).jumpLayer, obj);
            var floorRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.towerFloor, this.layerData.floor);
            var propItem = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().addPropNum(floorRow.propId, floorRow.propNum);
            this.openAwardGetLayer([propItem]);
          } // 强制弹出巡逻收益


          if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getPatrolState() <= 0) {
            this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.PatrolLayer);
            (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
              error: Error()
            }), RedPointLogicMgr) : RedPointLogicMgr).ins().setRPointView(this.getNodeByPath("Map/btnPortal"), null, false);
          }
        }

        refreshRedPoint() {
          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).hasLetterAward() || (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).hasDaySignAward() || (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).hasDayTaskAward() || (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).hasVipAward()) {
            this.tabMainRedPointNode.active = true;
          } else {
            this.tabMainRedPointNode.active = false;
          }

          this.tabEnergyRedPointNode.active = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).hasEnergyAward();
        }

        onDisable() {
          super.onDisable();
        }

        onDestroy() {
          super.onDestroy();
        }

        initUI() {
          for (var i = 0; i < 5; i++) {
            this.toggles[i] = this.getNodeByPath("Layout/ui_btn" + (i + 1));
            this.toggles[i].getChildByName("icon").getComponent(Sprite).grayscale = this.togglesLock[i]; //  console.log(" this.toggles[i] = ", this.toggles[i])

            var clickEvent = new EventHandler();
            clickEvent.component = "HomeLayer";
            clickEvent.target = this.node;
            clickEvent.customEventData = i + "";
            clickEvent.handler = "selectPage";

            if (!this.toggles[i].getComponent(Button)) {
              this.toggles[i].addComponent(Button).clickEvents = [clickEvent];
            } // this.toggles[i].addComponent(Button).clickEvents.push(clickEvent)

          }
        }

        start() {}

        selectPage(node, event) {
          console.log("event =", event);
          this.setPage(parseInt(event));
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
        }

        setPage(index) {
          if (this.togglesLock[index]) {
            this.createNotice("还未解锁");
            return;
          }

          this.getNodeByPath("TopUILayer").active = index != 3;

          if (index == 2) {
            (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
              error: Error()
            }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
              error: Error()
            }), msgac) : msgac).commonResRefresh);
          } // if (index == 3) {
          //     this.openLayer(constants.layers.ShopLayer)
          //     return
          // }


          for (var i = 0; i < 5; i++) {
            if (i != index) {
              this.setSpriteFrame2(this.toggles[i], "homeLayer/ui_xk", null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).bundles.wwqVec); //  this.toggles[i].getChildByName("icon").scale = new Vec3(0.6, 0.6, 1)

              tween(this.toggles[i].getChildByName("icon")).to(0.15, {
                scale: v3(0.6, 0.6, 1)
              }).start();
              this.toggles[i].getChildByName("name").active = false;
            } else {
              this.setSpriteFrame2(this.toggles[i], "homeLayer/ui_hdmb", null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).bundles.wwqVec); //this.toggles[i].getChildByName("icon").scale = new Vec3(1, 1, 1)

              tween(this.toggles[i].getChildByName("icon")).to(0.15, {
                scale: v3(1, 1, 1)
              }).start();
              this.toggles[i].getChildByName("name").active = true;
            }
          }

          var uiNode = this.getNodeByPath("ui");

          if (this._PageLayer[index] != "") {
            (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
              error: Error()
            }), resManager) : resManager).loadAsset((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.layer, this._PageLayer[index], Prefab, null, (err, prefab) => {
              if (err) {
                (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
                  error: Error()
                }), myLog) : myLog).e("LayerManager.openLayer error:" + err.message, "MainLayer", err);
                return;
              }

              uiNode.removeAllChildren();
              var layerNode = instantiate(prefab);
              uiNode.addChild(layerNode);

              if (this.jumpLayerData) {
                if (layerNode && layerNode.getComponent(_crd && BaseUILayer === void 0 ? (_reportPossibleCrUseOfBaseUILayer({
                  error: Error()
                }), BaseUILayer) : BaseUILayer)) {
                  layerNode.getComponent(_crd && BaseUILayer === void 0 ? (_reportPossibleCrUseOfBaseUILayer({
                    error: Error()
                  }), BaseUILayer) : BaseUILayer).layerData = this.jumpLayerData;
                }

                switch (this.jumpLayerData.layerName) {
                  case "PatrolLayer":
                    layerNode.getComponent(_crd && MainLayer === void 0 ? (_reportPossibleCrUseOfMainLayer({
                      error: Error()
                    }), MainLayer) : MainLayer).onClickBtnPartol();
                    break;

                  case "BlessLayer":
                    layerNode.getComponent(_crd && HeroLayer === void 0 ? (_reportPossibleCrUseOfHeroLayer({
                      error: Error()
                    }), HeroLayer) : HeroLayer).openBless();
                    break;

                  case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                    error: Error()
                  }), constants) : constants).layers.TowerFloorLayer:
                    layerNode.getComponent(_crd && TowerLayer === void 0 ? (_reportPossibleCrUseOfTowerLayer({
                      error: Error()
                    }), TowerLayer) : TowerLayer).openTowerFloorLayer(this.jumpLayerData.mapId);
                    break;

                  case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                    error: Error()
                  }), constants) : constants).layers.DaySignLayer:
                    layerNode.getComponent(_crd && MainLayer === void 0 ? (_reportPossibleCrUseOfMainLayer({
                      error: Error()
                    }), MainLayer) : MainLayer).onClickBtnDaySign();
                    break;

                  default:
                    break;
                }

                delete this.jumpLayerData;
              }
            });
          }
        }

        jumpLayerRet(data) {
          this.jumpLayerData = data;

          switch (data.layerName) {
            case "ShopLayer":
              this.setPage(3);
              break;

            case "MainLayer":
            case "PatrolLayer":
            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.DaySignLayer:
              this.setPage(2);
              break;

            case "BlessLayer":
              this.setPage(1);
              break;

            case "RewardItemLayer":
              this.setPage(2);
              find("TopUILayer", this.node).getComponent(_crd && TopUILayer === void 0 ? (_reportPossibleCrUseOfTopUILayer({
                error: Error()
              }), TopUILayer) : TopUILayer).showRewardItem(null, 2);
              break;

            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.RewardSkinLayer:
              this.setPage(2);
              this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).layers.RewardSkinLayer);
              break;

            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.DaySignLayer:
              this.setPage(2);
              this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).layers.DaySignLayer);
              break;

            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.TowerFloorLayer:
              this.setPage(0);
              break;

            default:
              break;
          }
        }

        mapEnterRet(data) {
          // 显示加载进度
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.TransLayer);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).loadMapRes(percent => {// TODO 刷新加载进度
          }, () => {
            this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.MapLayer, data, null, () => {
              // 关闭加载进度
              this.closeLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).layers.TransLayer);
              this.closeLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).layers.TowerFloorLayer);
              this.closeLayer();
            });
          });
        }

        homeHideMenuRet(data) {
          if (data.hide) {
            this.getNodeByPath("Layout").active = false;
          } else {
            this.getNodeByPath("Layout").active = true;
          }
        }

        onClickBtnHit() {
          var bodyNode = this.getNodeByPath("monster"); // 闪白

          var shineColor = bodyNode.getComponent(_crd && ShineColor === void 0 ? (_reportPossibleCrUseOfShineColor({
            error: Error()
          }), ShineColor) : ShineColor);

          if (!shineColor) {
            shineColor = bodyNode.addComponent(_crd && ShineColor === void 0 ? (_reportPossibleCrUseOfShineColor({
              error: Error()
            }), ShineColor) : ShineColor);
          }

          shineColor.startShine((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).materials.shineColorSpine);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dfac25ebeee5c8e7a65053ebea2f18b712b30a21.js.map