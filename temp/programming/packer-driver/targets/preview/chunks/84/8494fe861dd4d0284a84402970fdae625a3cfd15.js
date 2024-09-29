System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, ScrollView, UITransform, v2, _decorator, sdkManager, cocosUtil, constants, localText, msgac, designManager, eventManager, playerModel, UserData, BaseLayer, _dec, _class, _crd, ccclass, property, EnergyLayer;

  function _reportPossibleCrUseOfsdkManager(extras) {
    _reporterNs.report("sdkManager", "../../../sdk/sdkManager", _context.meta, extras);
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
      ScrollView = _cc.ScrollView;
      UITransform = _cc.UITransform;
      v2 = _cc.v2;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      sdkManager = _unresolved_2.sdkManager;
    }, function (_unresolved_3) {
      cocosUtil = _unresolved_3.cocosUtil;
    }, function (_unresolved_4) {
      constants = _unresolved_4.constants;
    }, function (_unresolved_5) {
      localText = _unresolved_5.localText;
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

      _cclegacy._RF.push({}, "58190TnmwpE/YWd1ec95OgO", "EnergyLayer", undefined);

      __checkObsolete__(['find', 'Node', 'ScrollView', 'UITransform', 'v2', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnergyLayer", EnergyLayer = (_dec = ccclass('EnergyLayer'), _dec(_class = class EnergyLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          this.timeNode = void 0;
          this.barNode = void 0;
          this.contentNode = void 0;
          this.handNode = void 0;
          this.itemUIArr = [];
        }

        onLoad() {
          this.layerName = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.EnergyLayer;
          super.onLoad();
          this.timeNode = this.getNodeByPath("ui/time/text");
          this.barNode = this.getNodeByPath("ui/energyListNoUtil/view/content/bar");
          this.contentNode = this.getNodeByPath("ui/energyListNoUtil/view/content");
          this.handNode = this.getNodeByPath("ui/energyListNoUtil/view/content/hand");
          this.handNode.active = false;
          var rowArr = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getTable((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.energyAward);
          var energyItem = find("layer/energyItem", this.contentNode);
          var itemUI = energyItem;

          for (var i = 0; i < rowArr.length; i++) {
            var row = rowArr[i];

            if (i > 0) {
              itemUI = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).instantiate(energyItem);
              itemUI.parent = find("layer", this.contentNode);
            }

            itemUI.row = row;
            this.itemUIArr.push(itemUI);
          }

          var height = itemUI.getComponent(UITransform).height;
          this.contentNode.getComponent(UITransform).height = height * (rowArr.length + 0.5);
          this.barNode.getComponent(UITransform).height = height * rowArr.length; // test
          // UserData.getInstance().addPropNum(108, 600);
        }

        onEnable() {
          super.onEnable();
          this.addEventArr([(_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).energyObjRefresh]);
          this.scheduleOnce(() => {
            this.refreshShowList();
          });
        }

        refreshShowList() {
          this.handNode.active = false;
          var listNode = this.getNodeByPath("ui/energyListNoUtil"); // 自动滚动，优先到首个未领取奖励的地方，其次首个未完成的地方

          var targetItemUI = null;

          for (var i = 0; i < this.itemUIArr.length; i++) {
            var row = this.itemUIArr[i].row;
            var info = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).getEnergyAwardInfoById(row.id);

            if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().energy >= row.num && !info.award1) {
              targetItemUI = this.itemUIArr[i];
              break;
            }
          }

          if (targetItemUI) {
            this.handNode.active = true;

            var _pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpace(find("awardLayer/awardItem1", targetItemUI));

            _pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToNodeSpace(this.handNode, _pos);
            this.handNode.position = _pos;
          }

          if (!targetItemUI) {
            for (var _i = 0; _i < this.itemUIArr.length; _i++) {
              var _row = this.itemUIArr[_i].row;

              if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().energy < _row.num) {
                targetItemUI = this.itemUIArr[_i];
                break;
              }
            }
          }

          if (!targetItemUI) {
            targetItemUI = this.itemUIArr[this.itemUIArr.length - 1];
          }

          var my = Math.abs(targetItemUI.position.y) - targetItemUI.getComponent(UITransform).height;

          if (my < 0) {
            my = 0;
          }

          var pos = v2(0, 0);
          pos.y = my;
          listNode.getComponent(ScrollView).scrollToOffset(pos, 0.6);
        }

        onDisable() {
          super.onDisable();
          this.removeEventArr([(_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).energyObjRefresh]);
        }

        onDestroy() {
          super.onDestroy();
        }

        energyObjRefreshRet(data) {
          var scrollView = this.getNodeByPath("ui/energyListNoUtil").getComponent(ScrollView);
          scrollView.stopAutoScroll();
          scrollView.scrollToTop();
          this.initUI();
        }

        initUI() {
          this.refreshTimeNode();
          this.refreshItemUIArr();
          this.refrshProgress();
        }

        refreshTimeNode() {
          var duration = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).energyObj.endTime.getTime() - new Date().getTime();
          var day = Math.floor(duration / (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).times.day);
          var hour = Math.ceil((duration - day * (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).times.day) / (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).times.houre);
          this.setString(this.timeNode, (_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
            error: Error()
          }), localText) : localText).energyTimeHint.format(day, hour));
        }

        refrshProgress() {
          var tb = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getTable((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.energyAward);
          var id = 0;

          for (var i = 0; i < tb.length; i++) {
            var row = tb[i];

            if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().energy < row.num) {
              id = i + 1;
              break;
            }
          }

          var p = 1 / tb.length * (id - 1);

          if (id == 0) {
            p = 1;
          } else {
            var _row2 = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.energyAward, id);

            var lastRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.energyAward, id - 1);
            var lastNum = 0;

            if (lastRow) {
              lastNum = lastRow.num;
            }

            var max = _row2.num - lastNum;
            var r = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().energy - lastNum;
            var rp = 1 / tb.length * (r / max);
            p += rp;
          }

          this.setProgressBar(this.barNode, p);
        }

        refreshItemUIArr() {
          for (var i = 0; i < this.itemUIArr.length; i++) {
            var itemUI = this.itemUIArr[i];
            var row = itemUI.row;
            this.setString(find("flag/rank", itemUI), row.id);
            this.setString(find("flag/num", itemUI), row.num + (_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
              error: Error()
            }), localText) : localText).point);
            var info = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).getEnergyAwardInfoById(row.id); // 普通奖励

            find("awardLayer/awardItem1", itemUI).row = row;
            var shineNode1 = find("awardLayer/awardItem1/shine", itemUI);
            var lockNode1 = find("awardLayer/awardItem1/lock", itemUI);
            var hasGetNode1 = find("awardLayer/awardItem1/hasGet", itemUI);
            shineNode1.active = false;
            lockNode1.active = false;
            hasGetNode1.active = false;

            if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().energy >= row.num) {
              if (info.award1) {
                // 已领取
                hasGetNode1.active = true;
              } else {
                // 可领取
                shineNode1.active = true;
              }
            } else {
              lockNode1.active = true;
            } // 广告奖励


            find("awardLayer/awardItem2", itemUI).row = row;
            var shineNode2 = find("awardLayer/awardItem2/shine", itemUI);
            var lockNode2 = find("awardLayer/awardItem2/lock", itemUI);
            var hasGetNode2 = find("awardLayer/awardItem2/hasGet", itemUI);
            shineNode2.active = false;
            lockNode2.active = false;
            hasGetNode2.active = false;

            if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().energy >= row.num) {
              if (info.award2) {
                // 已领取
                hasGetNode2.active = true;
              } else {
                // 可领取
                shineNode2.active = true;
              }
            } else {
              lockNode2.active = true;
            }
          }
        }

        onClickAwardItem1(node) {
          var row = node.row;

          if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().energy < row.num) {
            // 还未完成
            this.openAwardInfoLayer(row.award1);
            return;
          }

          var info = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).getEnergyAwardInfoById(row.id);

          if (info.award1) {
            // 已领取
            this.openAwardInfoLayer(row.award1);
            return;
          }

          info.award1 = 1;
          var award = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().addPropArrByDesign(row.award1);
          this.openAwardGetLayer(award);
          this.initUI();
          this.refreshShowList();
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).refreshRedPoint);
        }

        onClickAwardItem2(node) {
          var row = node.row;

          if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().energy < row.num) {
            // 还未完成
            this.openAwardInfoLayer(row.award2);
            return;
          }

          var info = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).getEnergyAwardInfoById(row.id);

          if (info.award2) {
            // 已领取
            this.openAwardInfoLayer(row.award2);
            return;
          }

          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).openAd("能量战令", st => {
            if (st == 1) {
              info.award2 = 1;
              var award = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().addPropArrByDesign(row.award2);
              this.openAwardGetLayer(award);
              this.initUI();
            }
          });
        }

        onClickBar() {// playerModel.energyObj.endTime = new Date();
          // UserData.getInstance().addPropNum(108, 100);
          // this.initUI();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8494fe861dd4d0284a84402970fdae625a3cfd15.js.map