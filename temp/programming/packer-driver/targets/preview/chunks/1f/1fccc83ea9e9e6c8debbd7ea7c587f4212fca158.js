System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Color, find, _decorator, sdkManager, cocosUtil, utilTools, constants, localText, designManager, mapModel, BaseLayer, _dec, _class, _crd, ccclass, property, BoxMonsterLayer;

  function _reportPossibleCrUseOfsdkManager(extras) {
    _reporterNs.report("sdkManager", "../../../sdk/sdkManager", _context.meta, extras);
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

  function _reportPossibleCrUseOflocalText(extras) {
    _reporterNs.report("localText", "../../data/localText", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../model/mapModel", _context.meta, extras);
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
      Button = _cc.Button;
      Color = _cc.Color;
      find = _cc.find;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      sdkManager = _unresolved_2.sdkManager;
    }, function (_unresolved_3) {
      cocosUtil = _unresolved_3.cocosUtil;
    }, function (_unresolved_4) {
      utilTools = _unresolved_4.utilTools;
    }, function (_unresolved_5) {
      constants = _unresolved_5.constants;
    }, function (_unresolved_6) {
      localText = _unresolved_6.localText;
    }, function (_unresolved_7) {
      designManager = _unresolved_7.designManager;
    }, function (_unresolved_8) {
      mapModel = _unresolved_8.mapModel;
    }, function (_unresolved_9) {
      BaseLayer = _unresolved_9.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a9bbcOj/dPkYkW2JkTGGD8", "BoxMonsterLayer", undefined);

      __checkObsolete__(['Button', 'Color', 'find', 'Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BoxMonsterLayer", BoxMonsterLayer = (_dec = ccclass('BoxMonsterLayer'), _dec(_class = class BoxMonsterLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          this.getIndexs = {};
          this.canRefresh = true;
          this.refreshCount = 0;
        }

        onLoad() {
          super.onLoad();
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
          var itemUIArr = this.getNodeByPath("ui/bg/itemLayer").children;
          var arr = this.getItemArr();
          itemUIArr.forEach((node, index) => {
            var item = arr[index];
            node.item = item;
            node.index = index;
            this.refreshSelectItem(node, item, index);
          });
          this.refreshBtnsLayer();
        }

        refreshBtnsLayer() {
          var btnRefresh = this.getNodeByPath("ui/bg/btnRefresh");
          btnRefresh.getComponent(Button).enabled = true;

          if (this.canRefresh && this.refreshCount < (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.carTime) {
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).setRenderableColor(btnRefresh, Color.WHITE, true);
          } else {
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).setRenderableColor(btnRefresh, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).colors.yin.parseColor(), true);
            btnRefresh.getComponent(Button).enabled = false;
          }

          var limitNode = this.getNodeByPath("ui/bg/btnRefresh/limit");
          this.setString(limitNode, "(%d/%d)".format(this.refreshCount, (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config.carTime));
        }

        refreshSelectLayer() {
          var itemUIArr = this.getNodeByPath("ui/bg/itemLayer").children;
          itemUIArr.forEach((node, index) => {
            this.refreshSelectItem(node, node.item, node.index);
          });
        }

        refreshSelectItem(itemUI, item, index) {
          var skillItem = find("skillItem", itemUI);
          var propItem = find("propItem", itemUI);

          if (skillItem) {
            skillItem.active = false;
          }

          propItem.active = false;
          find("hasGet", itemUI).active = this.getIndexs[index] ? true : false;

          if (item.name == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop) {
            propItem.active = true;
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop, item.id);
            var info = row.info;

            if (item.id == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.coin || item.id == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.diamond) {
              info = (_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
                error: Error()
              }), localText) : localText).propGet.format(item.num, row.name);
            }

            this.setString(find("info", propItem), info);
          } else {
            skillItem.active = true;
            var _info = item.info;
            var id = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getFirstIdByType(item.type);

            if (_info) {
              id = _info.id + 1;
            }

            var _row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById(item.name, id);

            this.setSpriteFrame(find("icon", skillItem), _row.icon);
            var starLayer = find("starLayer", skillItem);
            this.setNumItemLayer(starLayer, _row.lv, starNode => {
              var iconNode = find("icon", starNode);
              var icon2Node = find("icon2", starNode);

              if (_row.lv >= (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).design.maxLv) {
                iconNode.active = false;
                icon2Node.active = true;
              } else {
                iconNode.active = true;
                icon2Node.active = false;
              }
            });
          }
        }

        getItemArr() {
          var arr = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.getSelectItemArr();
          arr.forEach(item => {
            if (item.name == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop) {
              // 随机金币
              item.id = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).propIds.coin;
              item.num = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).getFloatValue((_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).config.carGoldNum[0], (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).config.carGoldNum[1], true);
            }
          }); // 金币

          arr.push({
            name: (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop,
            id: (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.coin,
            num: (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.carGold
          }); // 钻石

          arr.push({
            name: (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop,
            id: (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.diamond,
            num: (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config.carDiamond
          }); // 回血

          arr.push({
            name: (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop,
            id: (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.addHpPercent
          });
          return arr;
        }

        closeLayer() {
          super.closeLayer();

          if (this.layerCb) {
            this.layerCb();
          }
        }

        onClickBtnRefresh() {
          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).openAd("宝箱怪换一批", st => {
            if (st == 1) {
              this.refreshCount++;
              this.initUI();
            }
          });
        }

        onClickBtnGetAd(node) {
          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).openAd("宝箱怪奖励", st => {
            if (st == 1) {
              var item = node.parent.item;

              switch (item.name) {
                case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).tableName.weapon:
                  (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                    error: Error()
                  }), mapModel) : mapModel).weaponSystem.addWeapon(item.type);
                  break;

                case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).tableName.skill:
                  (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                    error: Error()
                  }), mapModel) : mapModel).skillSystem.addSkill(item.type);
                  break;

                case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).tableName.skill2:
                  (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                    error: Error()
                  }), mapModel) : mapModel).skillSystem.addSkill2(item.type);
                  break;

                case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).tableName.prop:
                  (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                    error: Error()
                  }), mapModel) : mapModel).propSystem.getProp(item.id, item.num);
                  break;

                default:
                  break;
              }

              this.canRefresh = false;
              var index = node.parent.index;
              this.getIndexs[index] = 1;
              this.refreshSelectLayer();
              this.refreshBtnsLayer();
            }
          });
        }

        onClickBtnGet(node) {
          var item = node.parent.parent.item;
          var index = node.parent.parent.index;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).propSystem.getProp(item.id, item.num);
          this.getIndexs[index] = 1;
          this.refreshSelectLayer();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1fccc83ea9e9e6c8debbd7ea7c587f4212fca158.js.map