System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, Tween, _decorator, sdkManager, Channel, tyqAdManager, tyqSDK, cocosUtil, constants, localText, msgac, designManager, eventManager, playerModel, UserData, BaseLayer, _dec, _class, _crd, ccclass, property, DaySignLayer;

  function _reportPossibleCrUseOfsdkManager(extras) {
    _reporterNs.report("sdkManager", "../../../sdk/sdkManager", _context.meta, extras);
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

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalText(extras) {
    _reporterNs.report("localText", "../../data/localText", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgac(extras) {
    _reporterNs.report("msgac", "../../data/msgac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventManager(extras) {
    _reporterNs.report("eventManager", "../../manager/eventManager", _context.meta, extras);
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

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      Tween = _cc.Tween;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      sdkManager = _unresolved_2.sdkManager;
    }, function (_unresolved_3) {
      Channel = _unresolved_3.Channel;
      tyqAdManager = _unresolved_3.tyqAdManager;
    }, function (_unresolved_4) {
      tyqSDK = _unresolved_4.tyqSDK;
    }, function (_unresolved_5) {
      cocosUtil = _unresolved_5.cocosUtil;
    }, function (_unresolved_6) {
      constants = _unresolved_6.constants;
    }, function (_unresolved_7) {
      localText = _unresolved_7.localText;
    }, function (_unresolved_8) {
      msgac = _unresolved_8.msgac;
    }, function (_unresolved_9) {
      designManager = _unresolved_9.designManager;
    }, function (_unresolved_10) {
      eventManager = _unresolved_10.eventManager;
    }, function (_unresolved_11) {
      playerModel = _unresolved_11.playerModel;
    }, function (_unresolved_12) {
      UserData = _unresolved_12.UserData;
    }, function (_unresolved_13) {
      BaseLayer = _unresolved_13.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7faeagfy2tN9JzWiIAnph2z", "DaySignLayer", undefined);

      __checkObsolete__(['find', 'Node', 'Tween', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DaySignLayer", DaySignLayer = (_dec = ccclass('DaySignLayer'), _dec(_class = class DaySignLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor(...args) {
          super(...args);
          this.itemUIArr = [];
          this.awardDay = 0;
        }

        onLoad() {
          super.onLoad();
          let itemLayer = this.getNodeByPath("ui/itemLayer");
          let propItem = find("propItem", itemLayer);

          for (let i = 0; i < 2; i++) {
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).instantiate(propItem).parent = itemLayer;
          }

          let itemLayer2 = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).instantiate(itemLayer);
          itemLayer2.parent = itemLayer.parent;
          let pos = itemLayer2.getPosition();
          pos.y -= 150;
          itemLayer2.position = pos;
          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).instantiate(propItem).parent = itemLayer;
          itemLayer.children.forEach(itemUI => {
            this.itemUIArr.push(itemUI);
          });
          itemLayer2.children.forEach(itemUI => {
            this.itemUIArr.push(itemUI);
          }); // test
          // let startTime = new Date(new Date().getTime() - constants.times.day * 6);
          // startTime.setHours(0);
          // startTime.setMinutes(0);
          // startTime.setSeconds(0);
          // startTime.setMilliseconds(0);
          // playerModel.daySignObj.startTime = startTime;
          // delete playerModel.daySignObj;

          if ((_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getChannel() == (_crd && Channel === void 0 ? (_reportPossibleCrUseOfChannel({
            error: Error()
          }), Channel) : Channel).OPPO_MINI_GAME) {
            (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).daySignObj.notBox = 1;
          }
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
          let now = new Date();
          let day = Math.floor((now.getTime() - (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).daySignObj.startTime) / (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).times.day);
          this.awardDay = day;

          for (let i = 0; i < this.itemUIArr.length; i++) {
            let itemUI = this.itemUIArr[i];
            let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.daySign, i + 1);
            this.setPropItem(row.award[0], find("icon", itemUI), row.award[1], find("bg", itemUI), find("num/val", itemUI));
            this.setString(find("day", itemUI), (_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
              error: Error()
            }), localText) : localText).dayIndex.format(i + 1));
            let getNode = find("get", itemUI);
            let patchNode = find("patch", itemUI);
            let targetNode = find("target", itemUI);
            getNode.active = false;
            patchNode.active = false;
            targetNode.active = false;
            let hasGet = false;

            if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).daySignObj.awardDayArr.indexOf(i) != -1) {
              hasGet = true;
            }

            if (hasGet) {
              getNode.active = true;
            } else if (i < day) {
              patchNode.active = true;
            } else if (i == day) {
              targetNode.active = true;
              Tween.stopAllByTarget(targetNode);
              (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).tweenBlink(targetNode, 0.3);
            }
          } // 已签到次数


          this.setString(this.getNodeByPath("ui/bottom/info/has/info/text"), (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).daySignObj.awardDayArr.length + (_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
            error: Error()
          }), localText) : localText).ci); // 未签到次数

          this.setString(this.getNodeByPath("ui/bottom/info/no/info/text"), 7 - (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).daySignObj.awardDayArr.length + (_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
            error: Error()
          }), localText) : localText).ci);
          this.setProgressBar(this.getNodeByPath("ui/bottom/bar"), (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).daySignObj.awardDayArr.length / 7);
          this.refreshFinalAwardLayer();
          this.refreshBoxLayer();
        }

        refreshFinalAwardLayer() {
          let getNode = this.getNodeByPath("ui/bottom/extraAward/get");
          let lockNode = this.getNodeByPath("ui/bottom/extraAward/lock");
          getNode.active = false;
          lockNode.active = false;

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).daySignObj.finalAward) {
            getNode.active = true;
          } else if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).daySignObj.awardDayArr.length < 7) {
            lockNode.active = true;
          }
        }

        refreshBoxLayer() {
          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).daySignObj.notBox) {
            this.getNodeByPath("ui/hintLayer/btnBox/gou").active = false;
          } else {
            this.getNodeByPath("ui/hintLayer/btnBox/gou").active = true;
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

        signWithDay(day, double = false) {
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.daySign, day + 1);

          if (!row) {
            return;
          }

          let awardArr = [row.award];

          if (double) {
            awardArr.push(row.award);
          }

          awardArr = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().addPropArrByDesign(awardArr);
          this.openAwardGetLayer(awardArr);
          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).daySignObj.awardDayArr.push(day);
          this.initUI();
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).refreshRedPoint);
        }

        onClickBtnGetAward() {
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.daySign, this.awardDay + 1);

          if (!row) {
            this.createNotice((_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
              error: Error()
            }), localText) : localText).daySignOutdate);
            return;
          }

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).daySignObj.awardDayArr.indexOf(this.awardDay) != -1) {
            // 已领取奖励了
            this.createNotice((_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
              error: Error()
            }), localText) : localText).daySignHasGet);
            return;
          }

          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).addDayTaskNum(2);
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).eventSendCustomEvent("签到玩家");

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).daySignObj.notBox) {
            this.signWithDay(this.awardDay);
          } else {
            (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
              error: Error()
            }), sdkManager) : sdkManager).openAd("签到双倍奖励", st => {
              if (st == 1) {
                this.signWithDay(this.awardDay, true);
              }
            });
          }
        }

        onClickBtnPatch() {
          let targetDay = -1;

          for (let i = 0; i < 7; i++) {
            if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).daySignObj.awardDayArr.indexOf(i) == -1) {
              targetDay = i;
              break;
            }
          }

          if (targetDay == -1 || targetDay >= this.awardDay) {
            this.createNotice((_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
              error: Error()
            }), localText) : localText).daySignNoLeave);
            return;
          }

          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).openAd("快速补签", st => {
            if (st == 1) {
              this.signWithDay(targetDay);
            }
          });
        }

        onClickBtnBox() {
          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).daySignObj.notBox) {
            (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).daySignObj.notBox = 0;
          } else {
            (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).daySignObj.notBox = 1;
          }

          this.refreshBoxLayer();
        }

        onClickExtraAward() {
          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).daySignObj.awardDayArr.length < 7) {
            this.createNotice((_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
              error: Error()
            }), localText) : localText).daySignFinalAwardHint);
            return;
          }

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).daySignObj.finalAward) {
            // 已领取
            this.createNotice((_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
              error: Error()
            }), localText) : localText).hasGet);
            return;
          }

          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).daySignObj.finalAward = 1;
          let propItem = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().addPropByDesign((_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.daySignFinalAward);
          this.openAwardGetLayer([propItem]);
          this.refreshFinalAwardLayer();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=05265965a485a9d6d0836b6d6031e9b8d18fdae1.js.map