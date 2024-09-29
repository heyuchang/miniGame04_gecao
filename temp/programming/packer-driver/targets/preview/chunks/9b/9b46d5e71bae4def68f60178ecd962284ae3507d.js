System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, find, UITransform, v3, _decorator, myLog, GNetCmd, GNetConst, ServerCtr, tyqSDK, cocosUtil, constants, localText, designManager, localStorageManager, playerModel, UserData, BaseLayer, _dec, _class, _crd, ccclass, property, ShareLayer;

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../../common/myLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGNetCmd(extras) {
    _reporterNs.report("GNetCmd", "../../../tyqSDK/network/conf", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGNetConst(extras) {
    _reporterNs.report("GNetConst", "../../../tyqSDK/network/conf", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerCtr(extras) {
    _reporterNs.report("ServerCtr", "../../../tyqSDK/network/ServerCtr", _context.meta, extras);
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

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalStorageManager(extras) {
    _reporterNs.report("localStorageManager", "../../manager/localStorageManager", _context.meta, extras);
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
      director = _cc.director;
      find = _cc.find;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      GNetCmd = _unresolved_3.GNetCmd;
      GNetConst = _unresolved_3.GNetConst;
    }, function (_unresolved_4) {
      ServerCtr = _unresolved_4.default;
    }, function (_unresolved_5) {
      tyqSDK = _unresolved_5.tyqSDK;
    }, function (_unresolved_6) {
      cocosUtil = _unresolved_6.cocosUtil;
    }, function (_unresolved_7) {
      constants = _unresolved_7.constants;
    }, function (_unresolved_8) {
      localText = _unresolved_8.localText;
    }, function (_unresolved_9) {
      designManager = _unresolved_9.designManager;
    }, function (_unresolved_10) {
      localStorageManager = _unresolved_10.localStorageManager;
    }, function (_unresolved_11) {
      playerModel = _unresolved_11.playerModel;
    }, function (_unresolved_12) {
      UserData = _unresolved_12.UserData;
    }, function (_unresolved_13) {
      BaseLayer = _unresolved_13.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a69bOacQpHYYT2KSFaEeC1", "ShareLayer", undefined);

      __checkObsolete__(['director', 'find', 'Node', 'UITransform', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShareLayer", ShareLayer = (_dec = ccclass('ShareLayer'), _dec(_class = class ShareLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          this.tabLayer = void 0;
          this.tabArr = [{
            id: 1,
            name: "邀请好友"
          }, {
            id: 2,
            name: "通关奖励"
          }, {
            id: 3,
            name: "视频好友"
          }];
          this.choseTabIndex = 0;
        }

        onLoad() {
          super.onLoad();
          var tabLayer = this.getNodeByPath("ui/tabLayer");
          this.tabLayer = tabLayer;
          var tabItem = tabLayer.children[0];
          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).instantiate(tabItem).parent = tabLayer;
          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).instantiate(tabItem).parent = tabLayer;
          var chs = tabLayer.children;
          chs.forEach((itemUI, index) => {
            var info = this.tabArr[index];
            this.setString(find("text", itemUI), info.name); // @ts-ignore

            itemUI.index = index;
          });
          this.refreshTabLayer();
          (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().reqGetFriendVal();
        }

        onEnable() {
          super.onEnable();
          director.on((_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
            error: Error()
          }), GNetCmd) : GNetCmd).GetFriendVal.toString(), this.onMessageEvent, this);
        }

        onDisable() {
          super.onDisable();
          director.on((_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
            error: Error()
          }), GNetCmd) : GNetCmd).GetFriendVal.toString(), this.onMessageEvent, this);
        }

        onDestroy() {
          super.onDestroy();
        }

        initUI() {
          this.refreshTopLayer();
          this.refreshTabLayer();
          this.refreshListLayer();
        }

        onMessageEvent(value) {
          if (value.status != (_crd && GNetConst === void 0 ? (_reportPossibleCrUseOfGNetConst({
            error: Error()
          }), GNetConst) : GNetConst).ResSuccess) {
            return;
          }

          switch (value.cmd) {
            case (_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
              error: Error()
            }), GNetCmd) : GNetCmd).GetFriendVal:
              this.initUI();
              break;
          }
        }

        refreshTopLayer() {
          var remainNum = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.shareDayNum - (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).shareObj.dayNum;

          if (remainNum < 0) {
            remainNum = 0;
          }

          this.setString(this.getNodeByPath("ui/top/hintLayer/day/num"), remainNum);
          this.setString(this.getNodeByPath("ui/top/shareAwardItem/num/val"), "x" + (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.shareDayDiamond);
        }

        refreshListLayer() {
          var arr = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowsByType((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.share, this.choseTabIndex + 1);
          this.scrollViewSetData(this.getNodeByPath("ui/listbg/list"), arr, this.refreshShareItem.bind(this));
        }

        refreshShareItem(itemUI, row) {
          find("awardLayer", itemUI).children.forEach((awardItem, index) => {
            var propId = row.award[index][0];
            var propNum = row.award[index][1];
            this.setPropItem(propId, find("icon", awardItem), propNum, find("bg", awardItem), find("num/val", awardItem));
            awardItem.award = row.award[index];
          });
          var infoLayer1 = find("infoLayer1", itemUI);
          var infoLayer2 = find("infoLayer2", itemUI);
          var infoLayer3 = find("infoLayer3", itemUI);
          infoLayer1.active = false;
          infoLayer2.active = false;
          infoLayer3.active = false;
          var nowNum = 0;

          switch (this.choseTabIndex + 1) {
            case 1:
              nowNum = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).shareObj.friendNum;
              infoLayer1.active = true;
              this.setString(find("textLayer/val", infoLayer1), row.num + (_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
                error: Error()
              }), localText) : localText).wei);
              break;

            case 2:
              nowNum = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).shareObj.friendPassNum;
              infoLayer2.active = true;
              this.setString(find("textLayer/val", infoLayer2), row.num + (_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
                error: Error()
              }), localText) : localText).ci);
              break;

            case 3:
              nowNum = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).shareObj.friendAdNum;
              infoLayer3.active = true;
              this.setString(find("textLayer/val", infoLayer3), row.num + (_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
                error: Error()
              }), localText) : localText).ge);
              break;

            default:
              break;
          }

          var btnGet = find("btnGet", itemUI);
          var doneNode = find("done", itemUI);
          btnGet.active = false;
          doneNode.active = false;

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).shareObj.idAwardObj[row.id]) {
            doneNode.active = true;
          } else {
            btnGet.active = true; // @ts-ignore

            btnGet.row = row;

            if (nowNum >= row.num) {
              // 可领取奖励
              (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).setRenderableColor(btnGet, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).colors.white, true);
            } else {
              // 还未满足条件
              (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).setRenderableColor(btnGet, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).colors.yin, true);
            }
          }
        }

        refreshTabLayer() {
          var chs = this.tabLayer.children;
          chs.forEach((itemUI, index) => {
            var normalNode = find("normal", itemUI);
            var choseNode = find("chose", itemUI);
            var textNode = find("text", itemUI);
            normalNode.active = false;
            choseNode.active = false;

            if (this.choseTabIndex == index) {
              choseNode.active = true;
              itemUI.getComponent(UITransform).width = choseNode.getComponent(UITransform).width;
              textNode.scale = v3(1.3, 1.3, 1);
            } else {
              normalNode.active = true;
              itemUI.getComponent(UITransform).width = normalNode.getComponent(UITransform).width;
              textNode.scale = v3(1, 1, 1);
            }
          });
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

        onClickTabItem(node) {
          this.choseTabIndex = node.index;
          this.initUI();
        }

        onClickBtnShare() {
          var uid = (_crd && localStorageManager === void 0 ? (_reportPossibleCrUseOflocalStorageManager({
            error: Error()
          }), localStorageManager) : localStorageManager).uid;

          if (!uid) {
            uid = "";
          }

          var urlParmas = "uid=" + uid;
          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i("开始分享：" + urlParmas);
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).share(urlParmas, () => {
            // 分享成功
            (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
              error: Error()
            }), myLog) : myLog).i("分享结果回调");
            var remain = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.shareDayNum - (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).shareObj.dayNum;

            if (remain > 0) {
              var propItem = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().addPropNum((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).propIds.diamond, (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).config.shareDayDiamond);
              (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).shareObj.dayNum++;
              this.openAwardGetLayer([propItem]);
              this.refreshTopLayer();
            }
          });
        }

        onClickBtnGet(node) {
          var row = node.row;

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).shareObj.idAwardObj[row.id]) {
            this.createNotice((_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
              error: Error()
            }), localText) : localText).hasGet);
            return;
          }

          var nowNum = 0;

          switch (this.choseTabIndex + 1) {
            case 1:
              nowNum = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).shareObj.friendNum;
              break;

            case 2:
              nowNum = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).shareObj.friendPassNum;
              break;

            case 3:
              nowNum = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).shareObj.friendAdNum;
              break;

            default:
              break;
          }

          if (nowNum < row.num) {
            this.createNotice((_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
              error: Error()
            }), localText) : localText).notGet.format(nowNum));
            return;
          }

          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).shareObj.idAwardObj[row.id] = 1;
          var arr = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().addPropArrByDesign(row.award);
          this.openAwardGetLayer(arr);
          this.initUI();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9b46d5e71bae4def68f60178ecd962284ae3507d.js.map