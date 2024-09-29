System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, _decorator, tyqSDK, cocosUtil, utilTools, constants, msgac, designManager, eventManager, playerModel, UserData, BaseLayer, _dec, _class, _crd, ccclass, property, DayTaskLayer;

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../../../tyqSDK/tyqSDK", _context.meta, extras);
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
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      tyqSDK = _unresolved_2.tyqSDK;
    }, function (_unresolved_3) {
      cocosUtil = _unresolved_3.cocosUtil;
    }, function (_unresolved_4) {
      utilTools = _unresolved_4.utilTools;
    }, function (_unresolved_5) {
      constants = _unresolved_5.constants;
    }, function (_unresolved_6) {
      msgac = _unresolved_6.msgac;
    }, function (_unresolved_7) {
      designManager = _unresolved_7.designManager;
    }, function (_unresolved_8) {
      eventManager = _unresolved_8.eventManager;
    }, function (_unresolved_9) {
      playerModel = _unresolved_9.playerModel;
    }, function (_unresolved_10) {
      UserData = _unresolved_10.UserData;
    }, function (_unresolved_11) {
      BaseLayer = _unresolved_11.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e30ce7SVfRMu7LF0Te6TcB1", "DayTaskLayer", undefined);

      __checkObsolete__(['find', 'Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DayTaskLayer", DayTaskLayer = (_dec = ccclass('DayTaskLayer'), _dec(_class = class DayTaskLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          this.flagArr = [25, 50, 75, 100];
          this.taskListNode = void 0;
        }

        // preLoadAssetConfigArr = [
        //     { bundle: "ui", path: "day_task/item_bg", type: SpriteFrame }
        // ];
        onLoad() {
          super.onLoad();
          this.taskListNode = this.getNodeByPath("ui/listbg/list"); // test
          // UserData.getInstance().addPropNum(constants.propIds.dayAct, 90);
          // delete playerModel.dayTaskObj;
        }

        onEnable() {
          super.onEnable();
          this.addEventArr([(_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).overDay]);
        }

        onDisable() {
          super.onDisable();
        }

        onDestroy() {
          super.onDestroy();
        }

        initUI() {
          this.refreshTopLayer();
          var tb = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getTable((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.dayTask);
          var arr = [];

          for (var i = 0; i < tb.length; i++) {
            var row = tb[i];
            var task = {};
            task.id = row.id;
            arr.push(task);
          } // 排序 已完成(未领取)-进度快-已领取


          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).sortArr(arr, (task1, task2) => {
            var row1 = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.dayTask, task1.id);
            var row2 = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.dayTask, task2.id);
            var info1 = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).getTaskInfoById(task1.id);
            var info2 = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).getTaskInfoById(task2.id);
            var v1 = info1.num / row1.needNum;
            var v2 = info2.num / row2.needNum;

            if (info1.getAward) {
              v1 = -1;
            }

            if (info2.getAward) {
              v2 = -1;
            }

            if (v1 < v2) {
              return true;
            }

            return false;
          });
          this.scrollViewSetData(this.taskListNode, arr, this.refreshTaskItem.bind(this), true, true);
        }

        refreshTopLayer() {
          var actNum = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().dayAct;
          this.setString(this.getNodeByPath("ui/top/act/num"), actNum);
          this.setProgressBar(this.getNodeByPath("ui/top/progress"), actNum / 100);
          var chs = this.getNodeByPath("ui/top/progress/boxs").children;

          for (var i = 0; i < chs.length; i++) {
            var itemUI = chs[i];
            itemUI.index = i;
            var num = this.flagArr[i];
            this.setString(find("num", itemUI), num);
            var shineNode = find("shine", itemUI);
            var iconNode = find("icon", itemUI);
            var openNode = find("open", itemUI);
            shineNode.active = false;
            iconNode.active = false;
            openNode.active = false;

            if (actNum >= num) {
              var flag = this.getAwardFlag(i);

              if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).dayTaskObj.awardFlagArr.indexOf(flag) == -1) {
                // 还没领取
                iconNode.active = true;
                shineNode.active = true;
                (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                  error: Error()
                }), cocosUtil) : cocosUtil).tweenBreath(shineNode, 0.5, 1.2);
              } else {
                // 已领取
                openNode.active = true;
              }
            } else {
              shineNode.active = false;
              iconNode.active = true;
              openNode.active = false;
            }
          }
        }

        refreshTaskItem(itemUI, task) {
          var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.dayTask, task.id);
          this.setString(find("info", itemUI), row.info);
          find("awardLayer", itemUI).children.forEach((awardItem, index) => {
            var propId = row.award[index][0];
            var propNum = row.award[index][1];
            this.setPropItem(propId, find("icon", awardItem), propNum, null, find("num/val", awardItem));
            awardItem.award = row.award[index];
          });
          var info = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).getTaskInfoById(row.id);
          var num = info.num;

          if (row.id == 1 && num > 1) {
            num = 1;
          }

          this.setString(find("progress/hint", itemUI), num + "/" + row.needNum);
          this.setProgressBar(find("progress", itemUI), info.num / row.needNum);
          this.setString(find("btnGo/text", itemUI), row.btnText);
          var btnGet = find("btnGet", itemUI);
          var btnGo = find("btnGo", itemUI);
          var doneNode = find("done", itemUI);
          btnGet.item = task;
          btnGo.item = task;
          btnGet.active = false;
          btnGo.active = false;
          doneNode.active = false;

          if (info.num >= row.needNum) {
            if (info.getAward) {
              doneNode.active = true;
            } else {
              btnGet.active = true;
            }
          } else {
            btnGo.active = true;
          }

          if (row.type == 3 && (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.taskDoge > (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().$freeDraw) {
            btnGo.getChildByName("hand").active = true;
          } else {
            btnGo.getChildByName("hand").active = false;
          }
        }

        overDayRet() {
          this.initUI();
        }

        getAwardFlag(index) {
          return "dayTaskAward" + (index + 1);
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

        onClickBoxItem(node) {
          var awardArr = [];

          for (var i = 0; i < this.flagArr.length; i++) {
            var flag = this.getAwardFlag(i);
            var award = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config[flag];
            var num = this.flagArr[i];
            var actNum = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().dayAct;

            if (actNum < num) {
              // 还未达成
              continue;
            }

            if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).dayTaskObj.awardFlagArr.indexOf(flag) != -1) {
              // 已领取奖励
              continue;
            }

            var propItem = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().addPropNum(award[0], award[1]);
            (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).dayTaskObj.awardFlagArr.push(flag);
            awardArr.push(propItem);
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).eventSendCustomEvent("每日任务-完成" + this.flagArr[i]);
          }

          if (awardArr.length > 0) {
            this.openAwardGetLayer(awardArr);
            this.refreshTopLayer();
          } else {
            var _flag = this.getAwardFlag(node.index);

            var _award = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config[_flag];
            this.openAwardInfoLayer([_award]);
          }
        }

        onClickBtnGo(node) {
          var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.dayTask, node.item.id);
          var obj = {};

          switch (row.type) {
            case 2:
              obj.layerName = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).layers.DaySignLayer;
              break;

            case 3:
              obj.layerName = "ShopLayer";
              obj.taskGo = true;
              break;

            case 4:
            case 5:
            case 6:
            case 7:
            case 10:
              obj.layerName = "MainLayer";
              break;

            case 8:
              obj.layerName = "PatrolLayer";
              break;

            case 9:
              obj.layerName = "BlessLayer";
              break;

            case 11:
              obj.layerName = "RewardItemLayer";
              break;

            default:
              break;
          }

          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).jumpLayer, obj);
          this.closeLayer();
        }

        onClickBtnGet(node) {
          var info = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).getTaskInfoById(node.item.id);
          var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.dayTask, node.item.id);

          if (info.getAward) {
            // 已领取
            return;
          }

          if (info.num < row.needNum) {
            // 还未完成
            return;
          }

          var arr = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().addPropArrByDesign(row.award);
          this.openAwardGetLayer(arr);
          info.getAward = 1;
          this.refreshTopLayer();
          this.scrollViewRefreshList(this.taskListNode);
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).refreshRedPoint);
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).eventSendCustomEvent("每日任务-参与领取奖励");
        }

        onClickAwardItem(node) {
          var award = node.award;
          this.openPropInfoLayer2(award[0], award[1]);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e57120915d9f5f4a328d04a670b04ca786b2486b.js.map