System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, _decorator, Channel, tyqAdManager, tyqSDK, tyqSDKConfig, constants, msgac, audioManager, designManager, mapModel, UserData, serverMsg, BaseLayer, ItemLayer, _dec, _class, _crd, ccclass, property, PauseLayer;

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

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../../model/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfserverMsg(extras) {
    _reporterNs.report("serverMsg", "../../other/serverMsg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../base/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemLayer(extras) {
    _reporterNs.report("ItemLayer", "../base/ItemLayer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Channel = _unresolved_2.Channel;
      tyqAdManager = _unresolved_2.tyqAdManager;
    }, function (_unresolved_3) {
      tyqSDK = _unresolved_3.tyqSDK;
    }, function (_unresolved_4) {
      tyqSDKConfig = _unresolved_4.tyqSDKConfig;
    }, function (_unresolved_5) {
      constants = _unresolved_5.constants;
    }, function (_unresolved_6) {
      msgac = _unresolved_6.msgac;
    }, function (_unresolved_7) {
      audioManager = _unresolved_7.audioManager;
    }, function (_unresolved_8) {
      designManager = _unresolved_8.designManager;
    }, function (_unresolved_9) {
      mapModel = _unresolved_9.mapModel;
    }, function (_unresolved_10) {
      UserData = _unresolved_10.UserData;
    }, function (_unresolved_11) {
      serverMsg = _unresolved_11.serverMsg;
    }, function (_unresolved_12) {
      BaseLayer = _unresolved_12.BaseLayer;
    }, function (_unresolved_13) {
      ItemLayer = _unresolved_13.ItemLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5ccffM3vLNFzaO424mauG8D", "PauseLayer", undefined);

      __checkObsolete__(['find', 'Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PauseLayer", PauseLayer = (_dec = ccclass('PauseLayer'), _dec(_class = class PauseLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor(...args) {
          super(...args);
          this.weaponItemLayer = void 0;
          this.skill1ItemLayer = void 0;
          this.skill2ItemLayer = void 0;
          this.audioIconOpen = void 0;
          this.audioIconClose = void 0;
        }

        onLoad() {
          super.onLoad();
          this.weaponItemLayer = this.getNodeByPath("ui/weaponLayer/bg/itemLayer").addComponent(_crd && ItemLayer === void 0 ? (_reportPossibleCrUseOfItemLayer({
            error: Error()
          }), ItemLayer) : ItemLayer);
          this.skill1ItemLayer = this.getNodeByPath("ui/skill1Layer/itemLayer").addComponent(_crd && ItemLayer === void 0 ? (_reportPossibleCrUseOfItemLayer({
            error: Error()
          }), ItemLayer) : ItemLayer);
          this.skill2ItemLayer = this.getNodeByPath("ui/skill2Layer/itemLayer").addComponent(_crd && ItemLayer === void 0 ? (_reportPossibleCrUseOfItemLayer({
            error: Error()
          }), ItemLayer) : ItemLayer);
          this.audioIconOpen = this.getNodeByPath("btnAudio/open");
          this.audioIconClose = this.getNodeByPath("btnAudio/close");
        }

        onEnable() {
          super.onEnable();

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

          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).showDelayFullVideo();
          this.addEventArr([(_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).mapLeave]);
        }

        onDisable() {
          super.onDisable();
          this.removeEventArr([(_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).mapLeave]);
        }

        onDestroy() {
          super.onDestroy();
        }

        initUI() {
          this.refreshWeaponLayer();
          this.refreshSkill1Layer();
          this.refreshSkill2Layer();
          this.refreshAudioLayer();
        }

        refreshAudioLayer() {
          if ((_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).musicVolume > 0) {
            this.audioIconOpen.active = true;
            this.audioIconClose.active = false;
          } else {
            this.audioIconOpen.active = false;
            this.audioIconClose.active = true;
          }
        }

        refreshSkill2Layer() {
          this.setNumItemLayer(this.skill2ItemLayer.node, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).design.skillNum, (itemUI, num) => {
            this.refreshItem(itemUI, num, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill2);
          });
        }

        refreshSkill1Layer() {
          this.setNumItemLayer(this.skill1ItemLayer.node, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).design.skillNum, (itemUI, num) => {
            this.refreshItem(itemUI, num, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill);
          });
        }

        refreshWeaponLayer() {
          this.setNumItemLayer(this.weaponItemLayer.node, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).design.weaponNum, (itemUI, num) => {
            this.refreshItem(itemUI, num, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.weapon);
          });
        }

        refreshItem(itemUI, num, name) {
          let info = null;

          switch (name) {
            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.weapon:
              info = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).weaponSystem.weaponArr[num - 1];
              break;

            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill:
              info = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).skillSystem.skillArr[num - 1];
              break;

            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill2:
              info = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).skillSystem.skill2Arr[num - 1];
              break;

            default:
              break;
          }

          let iconNode = find("icon", itemUI);
          let starLayer = find("starLayer", itemUI);

          if (!info) {
            iconNode.active = false;
            starLayer.active = false;
            return;
          }

          iconNode.active = true;
          starLayer.active = true;
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById(name, info.id);
          this.setSpriteFrame(iconNode, row.icon);
          this.setNumItemLayer(starLayer, row.lv, node => {
            let icon = find("icon", node);
            let icon2 = find("icon2", node);

            if (row.lv >= (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.maxLv) {
              icon.active = false;
              icon2.active = true;
            } else {
              icon.active = true;
              icon2.active = false;
            }
          });
        }

        mapLeaveRet(data) {
          this.closeLayer();
        }

        closeLayer() {
          super.closeLayer();

          if (this.layerCb) {
            this.layerCb();
          }
        }

        onClickBtnGoOn(node) {
          this.closeLayer();
        }

        onClickBtnHome() {
          (_crd && serverMsg === void 0 ? (_reportPossibleCrUseOfserverMsg({
            error: Error()
          }), serverMsg) : serverMsg).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).mapLeave);
          return;
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.BackHomeLayer);
        }

        onClickBtnAudio() {
          if ((_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).musicVolume > 0) {
            (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
              error: Error()
            }), audioManager) : audioManager).setMusicVolume(0);
            (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
              error: Error()
            }), audioManager) : audioManager).setEffectVolume(0);
          } else {
            (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
              error: Error()
            }), audioManager) : audioManager).setMusicVolume(1);
            (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
              error: Error()
            }), audioManager) : audioManager).setEffectVolume(1);
          }

          this.refreshAudioLayer();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d9b8fd8ecde02d8da7163b084797fdff46be6ed7.js.map