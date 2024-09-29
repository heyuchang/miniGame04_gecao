System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Label, Node, PageView, Sprite, _decorator, myLog, constants, audioManager, designManager, UserData, BaseUILayer, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, LevelLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../../common/myLog", _context.meta, extras);
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

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../../model/UserData", _context.meta, extras);
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
      PageView = _cc.PageView;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      constants = _unresolved_3.constants;
    }, function (_unresolved_4) {
      audioManager = _unresolved_4.audioManager;
    }, function (_unresolved_5) {
      designManager = _unresolved_5.designManager;
    }, function (_unresolved_6) {
      UserData = _unresolved_6.UserData;
    }, function (_unresolved_7) {
      BaseUILayer = _unresolved_7.BaseUILayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f7b2f8wUMtDD4XQTFEkH0tV", "LevelLayer", undefined);

      __checkObsolete__(['instantiate', 'Label', 'Node', 'PageView', 'Sprite', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LevelLayer", LevelLayer = (_dec = ccclass('LevelLayer'), _dec2 = property({
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
        type: Label,
        tooltip: "地图详情"
      }), _dec7 = property({
        type: PageView,
        tooltip: "地图"
      }), _dec(_class = (_class2 = class LevelLayer extends (_crd && BaseUILayer === void 0 ? (_reportPossibleCrUseOfBaseUILayer({
        error: Error()
      }), BaseUILayer) : BaseUILayer) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "mapName", _descriptor, this);

          _initializerDefineProperty(this, "mapItem", _descriptor2, this);

          _initializerDefineProperty(this, "pageContent", _descriptor3, this);

          _initializerDefineProperty(this, "selectBtn", _descriptor4, this);

          _initializerDefineProperty(this, "mapInfo", _descriptor5, this);

          _initializerDefineProperty(this, "mapPage", _descriptor6, this);

          this._curPageId = 0;
          this._curOpenLevel = 1;
        }

        onLoad() {
          var mapData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowsByType((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.map, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).mapTypes.main);
          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i("----- LevelLayer", mapData);
          this._curOpenLevel = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().openLevel;
          mapData.forEach((element, index) => {
            var item = instantiate(this.mapItem);
            this.pageContent.addChild(item);
            var icon = item.getChildByName("icon");
            var iconIndex = (mapData[index].id - 1) % 2 + 1;
            this.setSpriteFrame2(icon, "homeLayer/ui_map" + iconIndex, null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.wwqVec);

            if (mapData[index].id <= this._curOpenLevel) {
              icon.getComponent(Sprite).color = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).colors.white.parseColor();
              item.getChildByName("lock").active = false;
            } else {
              icon.getComponent(Sprite).color = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).colors.yin.parseColor();
              item.getChildByName("lock").active = true;
            }
          });
        }

        start() {
          var curMap = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getCurMap() - 1; // this.setPage(curMap)

          this.mapPage.scrollToPage(curMap);
          this.setPage(curMap);
        }

        setPage(index) {
          var mapData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getTable((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.map);
          this.setSpriteFrame2(this.mapName, "homeLayer/map_name" + mapData[index].id, null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.wwqVec);
          this.mapInfo.string = mapData[index].mapInfo;
          console.log("mapData[index].id=", mapData[index].id);
          this._curPageId = mapData[index].id;
          this.selectBtn.active = mapData[index].id <= this._curOpenLevel;
        }

        scrowPage(event) {
          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i("event ", event);
          this.setPage(event._curPageIdx);
        }

        onEnable() {}

        onDisable() {}

        onDestroy() {}

        chooseMap() {
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().setCurMap(this._curPageId);
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.HomeLayer);
          this.closeLayer();
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
        }

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
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mapItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pageContent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "selectBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "mapInfo", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "mapPage", [_dec7], {
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
//# sourceMappingURL=439a97ae829cd7e43352007c725696ad391ce80f.js.map