System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, _decorator, sdkManager, constants, localText, msgac, designManager, eventManager, playerModel, UserData, BaseLayer, _dec, _class, _crd, ccclass, property, VipLayer;

  function _reportPossibleCrUseOfsdkManager(extras) {
    _reporterNs.report("sdkManager", "../../../sdk/sdkManager", _context.meta, extras);
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
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      sdkManager = _unresolved_2.sdkManager;
    }, function (_unresolved_3) {
      constants = _unresolved_3.constants;
    }, function (_unresolved_4) {
      localText = _unresolved_4.localText;
    }, function (_unresolved_5) {
      msgac = _unresolved_5.msgac;
    }, function (_unresolved_6) {
      designManager = _unresolved_6.designManager;
    }, function (_unresolved_7) {
      eventManager = _unresolved_7.eventManager;
    }, function (_unresolved_8) {
      playerModel = _unresolved_8.playerModel;
    }, function (_unresolved_9) {
      UserData = _unresolved_9.UserData;
    }, function (_unresolved_10) {
      BaseLayer = _unresolved_10.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65d95RVlY1HpbS1t/Mm0AZ0", "VipLayer", undefined);

      __checkObsolete__(['find', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("VipLayer", VipLayer = (_dec = ccclass('VipLayer'), _dec(_class = class VipLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor(...args) {
          super(...args);
          this.choseVip = void 0;
        }

        onLoad() {
          super.onLoad();
          this.choseVip = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).vipObj.vip;
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
          let vip = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).vipObj.vip;
          this.setString(this.getNodeByPath("ui/top/rank/val"), vip);
          let infoLayer = this.getNodeByPath("ui/top/bar/info");
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.vip, vip);
          let nextRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.vip, vip + 1);
          let btnGet = this.getNodeByPath("ui/top/btnGet");

          if (nextRow) {
            infoLayer.active = true;
            btnGet.active = true;
            this.setString(find("val", infoLayer), row.adNum);
            this.setString(find("vip", infoLayer), "VIP" + nextRow.id);
            this.setProgressBar(this.getNodeByPath("ui/top/bar"), (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).vipObj.adNum / row.adNum);
            this.setString(this.getNodeByPath("ui/top/bar/val"), (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).vipObj.adNum + "/" + row.adNum);
          } else {
            btnGet.active = false;
            infoLayer.active = false;
            this.setProgressBar(this.getNodeByPath("ui/top/bar"), 1);
            this.setString(this.getNodeByPath("ui/top/bar/val"), (_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
              error: Error()
            }), localText) : localText).full);
          }

          this.setString(this.getNodeByPath("ui/vip"), "VIP" + this.choseVip + "特权");
          let choseRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.vip, this.choseVip);
          this.setString(this.getNodeByPath("ui/text"), (_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
            error: Error()
          }), localText) : localText).weaponEquipAdd.format(choseRow.atkAdd * 100));
          let btnGetBox1 = this.getNodeByPath("ui/info/itemLayer/btnBox1/btnGetBox1");
          let hasGet1 = this.getNodeByPath("ui/info/itemLayer/btnBox1/hasGet");
          btnGetBox1.active = false;
          hasGet1.active = false;

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).vipObj.onceObj[this.choseVip]) {
            // 已领取首次奖励
            hasGet1.active = true;
          } else if (this.choseVip <= vip) {
            btnGetBox1.active = true;
          }

          let btnGetBox2 = this.getNodeByPath("ui/info/itemLayer/btnBox2/btnGetBox2");
          let hasGet2 = this.getNodeByPath("ui/info/itemLayer/btnBox2/hasGet");
          btnGetBox2.active = false;
          hasGet2.active = false;

          if (this.choseVip == vip) {
            if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).vipObj.dayAward) {
              hasGet2.active = true;
            } else {
              btnGetBox2.active = true;
            }
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

        onClickBtnGetBox1() {
          if (this.choseVip > (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).vipObj.vip) {
            return;
          }

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).vipObj.onceObj[this.choseVip]) {
            // 已领取
            return;
          }

          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.vip, this.choseVip);
          let awardArr = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().addPropArrByDesign(row.award);
          this.openAwardGetLayer(awardArr);
          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).vipObj.onceObj[this.choseVip] = 1;
          this.initUI();
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).refreshRedPoint);
        }

        onClickBtnGetBox2() {
          if (this.choseVip > (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).vipObj.vip) {
            return;
          }

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).vipObj.dayAward) {
            // 已领取
            return;
          }

          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.vip, this.choseVip);
          let awardArr = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().addPropArrByDesign(row.dayAward);
          this.openAwardGetLayer(awardArr);
          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).vipObj.dayAward = 1;
          this.initUI();
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).refreshRedPoint);
        }

        onClickBtnLeft() {
          if (this.choseVip <= 1) {
            return;
          }

          this.choseVip--;
          this.initUI();
        }

        onClickBtnRight() {
          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.vip, this.choseVip + 1);

          if (!row) {
            return;
          }

          this.choseVip++;
          this.initUI();
        }

        onClickBtnBox1() {
          if (!(_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).vipObj.onceObj[this.choseVip]) {
            this.onClickBtnGetBox1();
            return;
          }

          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.vip, this.choseVip);
          this.openAwardInfoLayer(row.award);
        }

        onClickBtnBox2() {
          if (!(_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).vipObj.dayAward) {
            this.onClickBtnGetBox2();
            return;
          }

          let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.vip, this.choseVip);
          this.openAwardInfoLayer(row.dayAward);
        }

        onClickBtnGet() {
          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).openAd("VIP特权", st => {
            if (st == 1) {
              let hasUp = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                error: Error()
              }), playerModel) : playerModel).addVipAdNum();

              if (hasUp) {
                this.choseVip = (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                  error: Error()
                }), playerModel) : playerModel).vipObj.vip;
              }

              this.initUI();
              (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
                error: Error()
              }), eventManager) : eventManager).send((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
                error: Error()
              }), msgac) : msgac).refreshRedPoint);
            }
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0349fe139af08675cfea703b3afcdb84ae51f8b1.js.map