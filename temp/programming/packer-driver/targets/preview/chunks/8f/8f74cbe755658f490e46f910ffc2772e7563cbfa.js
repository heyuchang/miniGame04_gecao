System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, _decorator, ChannelFlag, tyqSDK, cocosUtil, constants, designManager, mapModel, UserData, AnimationCtrl, BaseLayer, _dec, _class, _crd, ccclass, property, TowerFloorLayer;

  function _reportPossibleCrUseOfChannelFlag(extras) {
    _reporterNs.report("ChannelFlag", "../../../tyqSDK/tyqSDK", _context.meta, extras);
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

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../../model/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationCtrl(extras) {
    _reporterNs.report("AnimationCtrl", "../base/AnimationCtrl", _context.meta, extras);
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
      ChannelFlag = _unresolved_2.ChannelFlag;
      tyqSDK = _unresolved_2.tyqSDK;
    }, function (_unresolved_3) {
      cocosUtil = _unresolved_3.cocosUtil;
    }, function (_unresolved_4) {
      constants = _unresolved_4.constants;
    }, function (_unresolved_5) {
      designManager = _unresolved_5.designManager;
    }, function (_unresolved_6) {
      mapModel = _unresolved_6.mapModel;
    }, function (_unresolved_7) {
      UserData = _unresolved_7.UserData;
    }, function (_unresolved_8) {
      AnimationCtrl = _unresolved_8.AnimationCtrl;
    }, function (_unresolved_9) {
      BaseLayer = _unresolved_9.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4d212U2GFhJCIK5/tnFGhyY", "TowerFloorLayer", undefined);

      __checkObsolete__(['find', 'Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TowerFloorLayer", TowerFloorLayer = (_dec = ccclass('TowerFloorLayer'), _dec(_class = class TowerFloorLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          this.floorLayer = void 0;
          this.floor = 1;
        }

        onLoad() {
          super.onLoad();
          this.floorLayer = this.getNodeByPath("ui/floorLayer");

          if ((_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).getSwitchValue("tyq_HeroLayer_open") != 1) {
            this.getNodeByPath("ui/btnRole").active = false;
          }

          if ((_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).channel != (_crd && ChannelFlag === void 0 ? (_reportPossibleCrUseOfChannelFlag({
            error: Error()
          }), ChannelFlag) : ChannelFlag).WECHAT_JJWS) {
            this.getNodeByPath("ui/btnRole").active = true;
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
          var arr = [];
          var mapId = this.layerData.id;
          var floor = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getTowerMapInfo(mapId).floor;
          this.floor = floor;
          var tmp = 2;

          while (true) {
            var f = floor - tmp;
            tmp--;

            if (tmp < 0) {
              break;
            }

            if (f <= 0) {
              continue;
            }

            arr.push(f);
          }

          var maxFloor = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getTable((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.towerFloor).length;
          tmp = floor;

          while (arr.length <= 7) {
            arr.push(tmp);
            tmp++;

            if (tmp > maxFloor) {
              break;
            }
          }

          this.setItemLayer(this.floorLayer, arr, this.refreshFloorItem.bind(this));
        }

        refreshFloorItem(itemUI, floor) {
          this.setString(find("floor", itemUI), floor);
          var aniCtrl = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).addComponentOnce(find("spine", itemUI), _crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
            error: Error()
          }), AnimationCtrl) : AnimationCtrl);
          var mapId = this.layerData.id;
          var nowFloor = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getTowerMapInfo(mapId).floor;

          if (nowFloor == floor) {
            aniCtrl.playAnimationOnce("a2", () => {
              aniCtrl.playAnimation("a3", true);
            });
          } else if (floor > nowFloor) {
            aniCtrl.playAnimation("a1", true);
          } else {
            aniCtrl.playAnimation("a4", true);
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

        onClickBtnRole() {
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.TowerRoleLayer);
        }

        onClickFloorItem(node) {
          var floor = node.item;
          var mapId = this.layerData.id;

          if (floor != (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getTowerMapInfo(mapId).floor) {
            return;
          } // this.closeLayer();


          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).enterMapWithMapId(mapId, floor);
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).eventSendCustomEvent("参与无尽模式");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f74cbe755658f490e46f910ffc2772e7563cbfa.js.map