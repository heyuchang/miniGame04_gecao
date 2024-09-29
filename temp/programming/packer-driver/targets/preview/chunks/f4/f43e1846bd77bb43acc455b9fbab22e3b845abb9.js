System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, find, _decorator, cocosUtil, constants, localText, audioManager, designManager, UserData, BaseLayer, _dec, _class, _crd, ccclass, property, TowerRoleLayer;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalText(extras) {
    _reporterNs.report("localText", "../../data/localText", _context.meta, extras);
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
      Color = _cc.Color;
      find = _cc.find;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      constants = _unresolved_3.constants;
    }, function (_unresolved_4) {
      localText = _unresolved_4.localText;
    }, function (_unresolved_5) {
      audioManager = _unresolved_5.audioManager;
    }, function (_unresolved_6) {
      designManager = _unresolved_6.designManager;
    }, function (_unresolved_7) {
      UserData = _unresolved_7.UserData;
    }, function (_unresolved_8) {
      BaseLayer = _unresolved_8.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fe276yQJclO3oD0Z2Lncy//", "TowerRoleLayer", undefined);

      __checkObsolete__(['Color', 'find', 'Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TowerRoleLayer", TowerRoleLayer = (_dec = ccclass('TowerRoleLayer'), _dec(_class = class TowerRoleLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          this.propItemUIArr = [];
          this.atkNode = void 0;
          this.hpNode = void 0;
          this.weaponList = void 0;
          this.costPropIcon = void 0;
          this.costPropNum = void 0;
        }

        onLoad() {
          super.onLoad();
          var chs = this.getNodeByPath("ui/herobg/propLeft").children;

          for (var i in chs) {
            this.propItemUIArr.push(chs[i]);
          }

          chs = this.getNodeByPath("ui/herobg/propRight").children;

          for (var _i in chs) {
            this.propItemUIArr.push(chs[_i]);
          }

          this.atkNode = this.getNodeByPath("ui/herobg/attackbg/Label");
          this.hpNode = this.getNodeByPath("ui/herobg/lifebg/Label");
          this.weaponList = this.getNodeByPath("ui/herobg/list");
          this.costPropIcon = this.getNodeByPath("ui/herobg/bar/btnOpt/info/icon");
          this.costPropNum = this.getNodeByPath("ui/herobg/bar/btnOpt/info/num");
          this.setRoleSkin(this.getNodeByPath("ui/herobg/role")); // test
          // UserData.getInstance().addPropNum(106, 99999);
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
          var idArr = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().wearProp;

          for (var i = 0; i < idArr.length; i++) {
            var itemUI = this.propItemUIArr[i];
            var emptyNode = find("empty", itemUI);
            var uiNode = find("ui", itemUI);
            var id = idArr[i];

            if (i == 0) {
              id = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().$towerWeaponId;
            }

            if (id > 0) {
              itemUI.id = id;
              emptyNode.active = false;
              uiNode.active = true;
              this.setPropItemIcon(uiNode, id);
              this.setWeaponbLv(find("lv", uiNode), id);
            } else {
              itemUI.id = 0;
              emptyNode.active = true;
              uiNode.active = false;
            }
          }

          var info = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getTowerRoleProInfo();
          this.setString(this.atkNode, info.atk);
          this.setString(this.hpNode, info.hp);
          this.scrollViewSetData(this.weaponList, (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().$towerWeaponIdArr, this.refreshWeaponItem.bind(this));
          var lv = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getWeaponLv((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().$towerWeaponId);
          var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.weaponOpt, lv);
          var propRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, row.propId);
          var nextRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.weaponOpt, lv + 1);

          if (nextRow) {
            this.getNodeByPath("ui/herobg/bar/btnOpt/Label").active = true;
            this.getNodeByPath("ui/herobg/bar/btnOpt/info").active = true;
            this.getNodeByPath("ui/herobg/bar/btnOpt/max").active = false;
            this.setSpriteFrame(this.costPropIcon, propRow.icon);
            this.setString(this.costPropNum, "X" + row.propNum);

            if ((_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().getPropNumById(row.propId) >= row.propNum) {
              (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).setRenderableColor(this.costPropNum, Color.WHITE);
            } else {
              (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).setRenderableColor(this.costPropNum, Color.RED);
            }
          } else {
            this.getNodeByPath("ui/herobg/bar/btnOpt/Label").active = false;
            this.getNodeByPath("ui/herobg/bar/btnOpt/info").active = false;
            this.getNodeByPath("ui/herobg/bar/btnOpt/max").active = true;
          }

          this.setSpriteFrame(this.getNodeByPath("ui/itemLayer/icon"), propRow.icon);
          this.setNumString(this.getNodeByPath("ui/itemLayer/num"), (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getPropNumById(row.propId));
        }

        setPropItemIcon(itemUI, id) {
          var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, id);
          var icon = "prop/" + row.icon;

          if (row.type == 11) {
            var wRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.weapon, row.weaponid);
            icon = "weapon/" + wRow.icon;
          }

          this.setSpriteFrame2(find("icon", itemUI), icon);
          this.setSpriteFrame2(find("bg", itemUI), "prop/propbg" + row.quality);
        }

        setWeaponbLv(lvNode, id) {
          if (!lvNode) {
            return;
          }

          var lv = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getWeaponLv(id);
          this.setString(lvNode, (_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
            error: Error()
          }), localText) : localText).lv + lv);
        }

        refreshWeaponItem(itemUI, id) {
          this.setPropItemIcon(itemUI, id);
          this.setWeaponbLv(find("lv", itemUI), id);
          var choseNode = find("chose", itemUI);

          if (id == (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().$towerWeaponId) {
            choseNode.active = true;
          } else {
            choseNode.active = false;
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

        onClickPropItem(node) {
          var id = node.id;

          if (id > 0) {
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop, id);
            var obj = {
              propId: id
            };

            if (row.type == 11) {
              obj.weaponLv = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                error: Error()
              }), UserData) : UserData).getInstance().getWeaponLv();
            }

            this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.PropInfoLayer, obj);
          }
        }

        onClickWeaponItem(node) {
          var id = node.item;
          (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().$towerWeaponId = id;
          this.initUI();
        }

        onClickBtnOpt() {
          var ret = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().towerWeaponAddLv();

          switch (ret.st) {
            case 1:
              this.initUI();
              break;

            case 2:
              this.createNotice((_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
                error: Error()
              }), localText) : localText).maxLv);
              break;

            case 3:
              this.showLackItem(ret.propId);
              break;

            default:
              break;
          }
        }

        onClickBtnSkin() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.SkinChangeLayer, () => {
            this.setRoleSkin(this.getNodeByPath("ui/herobg/role"));
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f43e1846bd77bb43acc455b9fbab22e3b845abb9.js.map