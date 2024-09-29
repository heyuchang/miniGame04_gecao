System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Label, Node, Prefab, sp, _decorator, myLog, tyqSDK, constants, msgac, audioManager, designManager, eventManager, RedPointLogicMgr, RedpointPos, RPointMask, UserData, PropItemPrefab, BaseUILayer, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, HeroLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../../common/myLog", _context.meta, extras);
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

  function _reportPossibleCrUseOfRedpointPos(extras) {
    _reporterNs.report("RedpointPos", "../../manager/RedPointLogicMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPointMask(extras) {
    _reporterNs.report("RPointMask", "../../manager/RedPointLogicMgr", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      sp = _cc.sp;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      tyqSDK = _unresolved_3.tyqSDK;
    }, function (_unresolved_4) {
      constants = _unresolved_4.constants;
    }, function (_unresolved_5) {
      msgac = _unresolved_5.msgac;
    }, function (_unresolved_6) {
      audioManager = _unresolved_6.audioManager;
    }, function (_unresolved_7) {
      designManager = _unresolved_7.designManager;
    }, function (_unresolved_8) {
      eventManager = _unresolved_8.eventManager;
    }, function (_unresolved_9) {
      RedPointLogicMgr = _unresolved_9.RedPointLogicMgr;
      RedpointPos = _unresolved_9.RedpointPos;
      RPointMask = _unresolved_9.RPointMask;
    }, function (_unresolved_10) {
      UserData = _unresolved_10.UserData;
    }, function (_unresolved_11) {
      PropItemPrefab = _unresolved_11.PropItemPrefab;
    }, function (_unresolved_12) {
      BaseUILayer = _unresolved_12.BaseUILayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "26adcAfOJ5CCJMDw2soV+18", "HeroLayer", undefined);

      __checkObsolete__(['instantiate', 'Label', 'Node', 'Prefab', 'sp', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroLayer", HeroLayer = (_dec = ccclass('HeroLayer'), _dec2 = property({
        type: Node,
        tooltip: "道具列表容器"
      }), _dec3 = property({
        type: Prefab,
        tooltip: "道具节点"
      }), _dec4 = property({
        type: Node,
        tooltip: "道具列表View"
      }), _dec5 = property({
        type: Node,
        tooltip: "道具列表View"
      }), _dec6 = property({
        type: Node,
        tooltip: "穿戴装备"
      }), _dec7 = property({
        type: Node,
        tooltip: "穿戴装备"
      }), _dec8 = property({
        type: Node,
        tooltip: "攻击力"
      }), _dec9 = property({
        type: Node,
        tooltip: "生命值"
      }), _dec10 = property({
        type: Node,
        tooltip: "排序按钮"
      }), _dec11 = property({
        type: sp.Skeleton,
        tooltip: "角色spine"
      }), _dec(_class = (_class2 = class HeroLayer extends (_crd && BaseUILayer === void 0 ? (_reportPossibleCrUseOfBaseUILayer({
        error: Error()
      }), BaseUILayer) : BaseUILayer) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "propLayer", _descriptor, this);

          _initializerDefineProperty(this, "rewardItem", _descriptor2, this);

          _initializerDefineProperty(this, "propView", _descriptor3, this);

          _initializerDefineProperty(this, "scrollView", _descriptor4, this);

          _initializerDefineProperty(this, "propNodeLeft", _descriptor5, this);

          _initializerDefineProperty(this, "propNodeRight", _descriptor6, this);

          _initializerDefineProperty(this, "attackLabel", _descriptor7, this);

          _initializerDefineProperty(this, "lifeLabel", _descriptor8, this);

          _initializerDefineProperty(this, "sortbtn", _descriptor9, this);

          _initializerDefineProperty(this, "heroSk", _descriptor10, this);

          this._propNodeList = [];
          this._isSort = false;
        }

        onLoad() {
          this.fitScrollView(this.propView, 320, 600);

          for (var i = 0; i < this.propNodeLeft.children.length; i++) {
            this._propNodeList.push(this.propNodeLeft.children[i]);
          }

          for (var _i = 0; _i < this.propNodeRight.children.length; _i++) {
            this._propNodeList.push(this.propNodeRight.children[_i]);
          } // test
          // UserData.getInstance().addPropByDesign([10155, 1]);

        }

        onEnable() {
          super.onEnable();
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).on((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).wearDrop, this.updateProp, this);
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).on((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).updateDropData, this.updateProp, this);
        }

        onDisable() {
          super.onDisable();
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).off((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).wearDrop, this.updateProp, this);
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).off((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).updateDropData, this.updateProp, this);
        }

        onDestroy() {
          super.onDestroy();
        }

        start() {
          this.initList();
          this.initWearDrop();
          this.attackLabel.getComponent(Label).string = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().attack + "";
          this.lifeLabel.getComponent(Label).string = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().life + "";
          (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
            error: Error()
          }), RedPointLogicMgr) : RedPointLogicMgr).ins().setRPointView(this.node.getChildByName("btnBless"), null, (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().checkPropCanBless());
          (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
            error: Error()
          }), RedPointLogicMgr) : RedPointLogicMgr).ins().on(this.node, [{
            mask: [(_crd && RPointMask === void 0 ? (_reportPossibleCrUseOfRPointMask({
              error: Error()
            }), RPointMask) : RPointMask).RPM_BlessProp],
            subPath: "btnBless"
          }]);
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).eventSendCustomEvent("进入装备界面");
          this.sortbtn.getChildByName("Label").getComponent(Label).string = "按品质排序";
          this.heroSk.setSkin((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getHeroSkin());
        }

        updateProp() {
          this.initList();
          this.initWearDrop();
          this.attackLabel.getComponent(Label).string = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().attack + "";
          this.lifeLabel.getComponent(Label).string = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().life + "";
        }

        initWearDrop() {
          var propdata = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().wearProp;
          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i("propdata = ", propdata);

          for (var i = 0; i < propdata.length && i < this._propNodeList.length; i++) {
            var item = this._propNodeList[i].getChildByName("PropItem");

            if (item == null) {
              item = instantiate(this.rewardItem);

              this._propNodeList[i].addChild(item);

              item.name = "PropItem";
            }

            item.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setView(propdata[i], i + 1, (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_HideNum | (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_UnWear);
            item.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setScale(130);
          }
        }

        initList() {
          if (this._isSort) {
            var dataArr = this.getPropList();

            var equipSort = (a, b) => {
              var equipDataA = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.prop, a);
              var equipDataB = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.prop, b);
              return equipDataB.quality - equipDataA.quality;
            };

            dataArr.sort(equipSort);
            this.scrollViewSetData(this.scrollView, dataArr, this.initItem);
          } else {
            var _dataArr = this.getPropList();

            var _equipSort = (a, b) => {
              var equipDataA = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.prop, a);
              var equipDataB = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.prop, b);
              return equipDataA.wearIndex - equipDataB.wearIndex;
            };

            _dataArr.sort(_equipSort);

            this.scrollViewSetData(this.scrollView, _dataArr, this.initItem);
          }
        }

        initItem(itemUI, item, index) {
          itemUI.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
            error: Error()
          }), PropItemPrefab) : PropItemPrefab).setView(item, 1, (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
            error: Error()
          }), PropItemPrefab) : PropItemPrefab).Type_HideNum | (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
            error: Error()
          }), PropItemPrefab) : PropItemPrefab).Type_ToWear);
          itemUI.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
            error: Error()
          }), PropItemPrefab) : PropItemPrefab).setScale(120);
          (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
            error: Error()
          }), RedPointLogicMgr) : RedPointLogicMgr).ins().setRPointView(itemUI, null, (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().checkThisPropBestToWear(item), null, (_crd && RedpointPos === void 0 ? (_reportPossibleCrUseOfRedpointPos({
            error: Error()
          }), RedpointPos) : RedpointPos).right);
        }

        updateRedPoint() {
          var children = this.propLayer.children;
          children.forEach(itemUI => {
            (_crd && RedPointLogicMgr === void 0 ? (_reportPossibleCrUseOfRedPointLogicMgr({
              error: Error()
            }), RedPointLogicMgr) : RedPointLogicMgr).ins().setRPointView(itemUI, null, (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().checkThisPropBestToWear(itemUI.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).propId));
          });
        }

        getPropList() {
          var arr = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getPropSort();
          var dataArr = [];
          arr.forEach(element => {
            var num = element.iswear == 1 ? element.num - 1 : element.num;
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop, element.id);

            if (row.type != 8 && row.type != 11) {
              return;
            }

            for (var i = 0; i < num; i++) {
              dataArr.push(element.id);
            }
          });
          return dataArr;
        }

        propSort() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");

          if (this._isSort) {
            this.sortbtn.getChildByName("Label").getComponent(Label).string = "按品质排序";
            this._isSort = false;
          } else {
            this.sortbtn.getChildByName("Label").getComponent(Label).string = "取消排序";
            this._isSort = true;
          }

          this.initList();
        }

        openBless() {
          //  this.closeLayer()
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.BlessLayer);
        }

        onClickBtnSkin() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.SkinChangeLayer, () => {
            this.heroSk.setSkin((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().getHeroSkin());
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "propLayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rewardItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "propView", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "propNodeLeft", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "propNodeRight", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "attackLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lifeLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "sortbtn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "heroSk", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=86dc477a062b1198e7cfc733ab213f2cc0ef44f9.js.map