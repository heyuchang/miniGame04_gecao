System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, instantiate, Label, PageView, Sprite, v3, Prefab, Button, myLog, sdkManager, constants, audioManager, designManager, RedPointLogicMgr, UserData, PropItemPrefab, BaseUILayer, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, ChapterLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../../common/myLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsdkManager(extras) {
    _reporterNs.report("sdkManager", "../../../sdk/sdkManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../../manager/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
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

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      PageView = _cc.PageView;
      Sprite = _cc.Sprite;
      v3 = _cc.v3;
      Prefab = _cc.Prefab;
      Button = _cc.Button;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      sdkManager = _unresolved_3.sdkManager;
    }, function (_unresolved_4) {
      constants = _unresolved_4.constants;
    }, function (_unresolved_5) {
      audioManager = _unresolved_5.audioManager;
    }, function (_unresolved_6) {
      designManager = _unresolved_6.designManager;
    }, function (_unresolved_7) {
      RedPointLogicMgr = _unresolved_7.RedPointLogicMgr;
    }, function (_unresolved_8) {
      UserData = _unresolved_8.UserData;
    }, function (_unresolved_9) {
      PropItemPrefab = _unresolved_9.PropItemPrefab;
    }, function (_unresolved_10) {
      BaseUILayer = _unresolved_10.BaseUILayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c8f32J3vFJNJYHqJPCCaOPS", "ChapterLayer", undefined);

      __checkObsolete__(['_decorator', 'Node', 'instantiate', 'Label', 'PageView', 'Sprite', 'Layout', 'v3', 'Prefab', 'Button']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ChapterLayer", ChapterLayer = (_dec = ccclass('ChapterLayer'), _dec2 = property({
        type: Node,
        tooltip: "地图名字"
      }), _dec3 = property({
        type: Node,
        tooltip: "地图节点"
      }), _dec4 = property({
        type: Node,
        tooltip: "pageView"
      }), _dec5 = property({
        type: Node,
        tooltip: "选择按钮"
      }), _dec6 = property({
        type: Node,
        tooltip: "地图详情"
      }), _dec7 = property({
        type: PageView,
        tooltip: "地图"
      }), _dec8 = property({
        type: Prefab,
        tooltip: "奖励节点"
      }), _dec9 = property({
        type: Label,
        tooltip: "提示1"
      }), _dec10 = property({
        type: Label,
        tooltip: "提示2"
      }), _dec11 = property({
        type: Node,
        tooltip: "单倍奖励"
      }), _dec12 = property({
        type: Node,
        tooltip: "双倍奖励"
      }), _dec(_class = (_class2 = class ChapterLayer extends (_crd && BaseUILayer === void 0 ? (_reportPossibleCrUseOfBaseUILayer({
        error: Error()
      }), BaseUILayer) : BaseUILayer) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mapName", _descriptor, this);

          _initializerDefineProperty(this, "mapItem", _descriptor2, this);

          _initializerDefineProperty(this, "pageContent", _descriptor3, this);

          _initializerDefineProperty(this, "selectBtn", _descriptor4, this);

          _initializerDefineProperty(this, "rewardLayer", _descriptor5, this);

          _initializerDefineProperty(this, "mapPage", _descriptor6, this);

          _initializerDefineProperty(this, "rewardItem", _descriptor7, this);

          _initializerDefineProperty(this, "tishiLabel", _descriptor8, this);

          _initializerDefineProperty(this, "tishiLabel2", _descriptor9, this);

          _initializerDefineProperty(this, "btn1", _descriptor10, this);

          _initializerDefineProperty(this, "btn2", _descriptor11, this);

          this._curPageId = 0;
          this._curOpenLevel = 1;
          this._curRewardList = [];
          this._curIndex = 0;
        }

        onLoad() {
          let mapData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getTable((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.map);
          let curMap = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getCurMap();
          this._curOpenLevel = curMap;
          this.setSpriteFrame2(this.mapName, "homeLayer/map_name" + mapData[curMap - 1].id, null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.wwqVec);

          for (let index = 0; index < 3; index++) {
            let item = instantiate(this.mapItem);
            this.pageContent.addChild(item);
            item.getChildByName("timeLabel").getComponent(Label).string = index * 5 + 5 + "分钟";
            item.getChildByName("chapterNum").getComponent(Label).string = "第" + curMap + "章";
          }
        }

        start() {
          // let curMap = UserData.getInstance().getCurMap() - 1
          // // this.setPage(curMap)
          let leveldata = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getLevelData((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getCurMap());

          for (let i = 0; i < 3; i++) if (leveldata.Time >= (this._curIndex * 5 + 5) * 60) {
            if (leveldata.ReceiveState[i] == 0) {
              this.mapPage.scrollToPage(i);
              this.setPage(i);
              return;
            }
          }

          this.mapPage.scrollToPage(0);
          this.setPage(0);
        }

        setPage(index) {
          let mapData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getTable((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.map);
          let curMap = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getCurMap();
          let children = this.pageContent.children;

          for (let i = 0; i < children.length; i++) {
            let element = children[i];
            element.getChildByName("light").active = i == index;

            if (i == index) {
              element.scale = v3(1, 1, 1);
            } else {
              element.scale = v3(0.8, 0.8, 1);
            }
          }

          this.tishiLabel.string = "生存超过" + (index * 5 + 5) + "分钟";
          this.tishiLabel2.string = "生存超过" + (index * 5 + 5) + "分钟才可领取";
          this._curIndex = index;
          this._curRewardList = mapData[curMap - 1]["reward" + (index + 1)]; //  this._curRewardList.push([204,1000])

          this.updateBtnState();
          this.rewardLayer.removeAllChildren();

          for (let i = 0; i < this._curRewardList.length; i++) {
            let element = this._curRewardList[i]; //  let dataArr = this.stringToArr(element)

            let item = instantiate(this.rewardItem);
            item.position = v3(0, 0, 0);
            this.rewardLayer.addChild(item);
            item.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setView(element[0], element[1]);
          }
        }

        updateBtnState() {
          let leveldata = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getLevelData((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getCurMap());
          this.btn1.getComponent(Button).interactable = false;
          this.btn2.getComponent(Button).interactable = false;
          this.btn2.getComponent(Sprite).color = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).colors.yin.parseColor();
          this.btn1.getComponent(Sprite).color = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).colors.yin.parseColor();
          (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
            error: Error()
          }), RedPointLogicMgr) : RedPointLogicMgr).ins().setRPointView(this.btn1, null, false);

          if (leveldata.Time >= (this._curIndex * 5 + 5) * 60) {
            if (leveldata.ReceiveState[this._curIndex] == 0) {
              this.btn1.getComponent(Button).interactable = true;
              this.btn1.getComponent(Sprite).color = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).colors.white.parseColor();
              this.btn1.getChildByName("Label").getComponent(Label).string = "领 取";
              (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
                error: Error()
              }), RedPointLogicMgr) : RedPointLogicMgr).ins().setRPointView(this.btn1, null, true);
            } else {
              this.btn1.getChildByName("Label").getComponent(Label).string = "已领取";
            }

            if (leveldata.ReceiveState[this._curIndex] < 2) {
              this.btn2.getComponent(Button).interactable = true;
              this.btn2.getComponent(Sprite).color = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).colors.white.parseColor();
            }
          } else {
            this.btn1.getChildByName("Label").getComponent(Label).string = "领 取";
          }
        }

        scrowPage(event) {
          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i("event ", event);
          this.setPage(event._curPageIdx);
        }

        onGetReward() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          let curRewardArr = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().tobePropItem(this._curRewardList);
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getRewardProp(curRewardArr, 1);
          this.showGetReward(curRewardArr);
          let leveldata = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getLevelData(this._curOpenLevel);
          leveldata.ReceiveState[this._curIndex] = 1;
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().setLevelData(leveldata);
          this.updateBtnState(); //   RedPointLogicMgr.ins().sendValueSettingMsg(RPointMask.RPM_PropWear, false)
        }

        onGetRewardDouble() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).openAd("章节宝箱双倍领取" + (this._curIndex * 5 + 5) + "分钟", st => {
            if (st == 1) {
              let curRewardArr = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().tobePropItem(this._curRewardList);
              (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().getRewardProp(curRewardArr, 2);
              this.showGetReward(curRewardArr);
              let leveldata = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().getLevelData(this._curOpenLevel);
              leveldata.ReceiveState[this._curIndex] = 2;
              (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().setLevelData(leveldata);
              this.updateBtnState();
            }
          });
        }

        onDisable() {}

        onDestroy() {}

        backHome() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i("backHome");
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.HomeLayer);
          this.closeLayer();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mapName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mapItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pageContent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "selectBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rewardLayer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "mapPage", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rewardItem", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "tishiLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "tishiLabel2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "btn1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "btn2", [_dec12], {
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
//# sourceMappingURL=c47311d893597d5b76384872ba396feca58ddd91.js.map