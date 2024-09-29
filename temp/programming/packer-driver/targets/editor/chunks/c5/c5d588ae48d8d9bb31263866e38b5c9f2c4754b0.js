System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, find, Tween, tween, UIOpacity, v3, _decorator, myLog, sdkManager, tyqAdManager, cocosUtil, utilTools, constants, msgac, designManager, mapModel, playerModel, AnimationCtrl, BaseLayer, ItemLayer, _dec, _class, _crd, ccclass, property, SkillSelectLayer;

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../../common/myLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsdkManager(extras) {
    _reporterNs.report("sdkManager", "../../../sdk/sdkManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqAdManager(extras) {
    _reporterNs.report("tyqAdManager", "../../../tyqSDK/tyqAdManager", _context.meta, extras);
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

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerModel(extras) {
    _reporterNs.report("playerModel", "../../model/playerModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationCtrl(extras) {
    _reporterNs.report("AnimationCtrl", "../base/AnimationCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../base/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemLayer(extras) {
    _reporterNs.report("ItemLayer", "../base/ItemLayer", _context.meta, extras);
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
      Tween = _cc.Tween;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      sdkManager = _unresolved_3.sdkManager;
    }, function (_unresolved_4) {
      tyqAdManager = _unresolved_4.tyqAdManager;
    }, function (_unresolved_5) {
      cocosUtil = _unresolved_5.cocosUtil;
    }, function (_unresolved_6) {
      utilTools = _unresolved_6.utilTools;
    }, function (_unresolved_7) {
      constants = _unresolved_7.constants;
    }, function (_unresolved_8) {
      msgac = _unresolved_8.msgac;
    }, function (_unresolved_9) {
      designManager = _unresolved_9.designManager;
    }, function (_unresolved_10) {
      mapModel = _unresolved_10.mapModel;
    }, function (_unresolved_11) {
      playerModel = _unresolved_11.playerModel;
    }, function (_unresolved_12) {
      AnimationCtrl = _unresolved_12.AnimationCtrl;
    }, function (_unresolved_13) {
      BaseLayer = _unresolved_13.BaseLayer;
    }, function (_unresolved_14) {
      ItemLayer = _unresolved_14.ItemLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9230fuNiqpEvJ8HMtcAJSj/", "SkillSelectLayer", undefined);

      __checkObsolete__(['Color', 'find', 'Node', 'Tween', 'tween', 'UIOpacity', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SkillSelectLayer", SkillSelectLayer = (_dec = ccclass('SkillSelectLayer'), _dec(_class = class SkillSelectLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor(...args) {
          super(...args);
          this.skill1ItemLayer = void 0;
          this.skill2ItemLayer = void 0;
          this.selectItemLayer = void 0;
          this.hasSelect = void 0;
          this.uiNode = void 0;
          this.btnRefresh = void 0;
          this.btnGetAll = void 0;
          this.textHint = void 0;
          this.allHint = void 0;
        }

        onLoad() {
          super.onLoad();
          this.uiNode = this.getNodeByPath("ui");
          this.skill1ItemLayer = this.getNodeByPath("ui/skillLayer1/itemLayer").addComponent(_crd && ItemLayer === void 0 ? (_reportPossibleCrUseOfItemLayer({
            error: Error()
          }), ItemLayer) : ItemLayer);
          this.skill2ItemLayer = this.getNodeByPath("ui/skillLayer2/itemLayer").addComponent(_crd && ItemLayer === void 0 ? (_reportPossibleCrUseOfItemLayer({
            error: Error()
          }), ItemLayer) : ItemLayer);
          this.selectItemLayer = this.getNodeByPath("ui/selectLayer").addComponent(_crd && ItemLayer === void 0 ? (_reportPossibleCrUseOfItemLayer({
            error: Error()
          }), ItemLayer) : ItemLayer);
          this.btnRefresh = this.getNodeByPath("ui/btns/btnRefresh");
          this.btnGetAll = this.getNodeByPath("ui/btns/btnGetAll");
          this.textHint = this.getNodeByPath("ui/textHint");
          this.allHint = this.getNodeByPath("ui/allHint");
          this.isShowBannerAd = true;
        }

        onEnable() {
          super.onEnable();
          this.addEventArr([(_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).mapLeave]);
          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).showDelayFullVideo();
          (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).showDelayInterstitialAd();
        }

        onDisable() {
          super.onDisable();
          this.removeEventArr([(_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).mapLeave]);
        }

        initUI() {
          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).tweenScaleIn2(this.uiNode);
          this.hasSelect = false;
          this.setString(this.getNodeByPath("expProgress/lv"), (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).expLv);
          this.refreshSkillLayer();
          this.refreshSelectLayer();
          this.refreshInfoLayer();
        }

        refreshInfoLayer() {
          // 2023-03-13 改成一直显示欧皇附体按钮
          return;
          let lvCount = this.layerData.lvCount;

          if (!lvCount) {
            lvCount = 1;
          }

          if ((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillAllNum > 0) {
            this.btnRefresh.active = false;
            this.btnGetAll.active = true;
            this.textHint.active = false;
            this.allHint.active = true;
          } else {
            this.btnRefresh.active = true;
            this.btnGetAll.active = false;
            this.textHint.active = true;
            this.allHint.active = false;
            let refreshInfoNode = this.getNodeByPath("ui/btns/btnRefresh/info");
            let refreshFreeNode = this.getNodeByPath("ui/btns/btnRefresh/free");

            if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).skillFreeRefreshCount > 0) {
              refreshInfoNode.active = true;
              refreshFreeNode.active = false;
            } else {
              refreshInfoNode.active = false;
              refreshFreeNode.active = true;
            }
          }
        }

        refreshSkillLayer() {
          this.setNumItemLayer(this.skill1ItemLayer.node, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).design.skillNum, this.refreshSkill1Item.bind(this));
          this.setNumItemLayer(this.skill2ItemLayer.node, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).design.skillNum, this.refreshSkill2Item.bind(this));
        }

        refreshSkill2Item(itemUI, num) {
          let info = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.skill2Arr[num - 1];
          let iconNode = find("icon", itemUI);

          if (info) {
            iconNode.active = true;
            let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill2, info.id);
            this.setSpriteFrame(iconNode, row.icon);
          } else {
            iconNode.active = false;
          }
        }

        refreshSkill1Item(itemUI, num) {
          let info = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.skillArr[num - 1];
          let iconNode = find("icon", itemUI);

          if (info) {
            iconNode.active = true;
            let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill, info.id);
            this.setSpriteFrame(iconNode, row.icon);
          } else {
            iconNode.active = false;
          }
        }

        refreshSelectLayer() {
          let arr = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).mapSystem.getSelectItemArr();
          this.selectItemLayer.initUI(this, arr, this.refreshSelectItem.bind(this));
        }

        refreshSelectItem(itemUI, item) {
          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).setRenderableColor(itemUI, Color.WHITE, true);
          let newNode = find("new", itemUI);
          let info = item.info;

          if (info) {
            newNode.active = false;
          } else {
            newNode.active = true;
            Tween.stopAllByTarget(newNode);
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).tweenBreath(newNode, 0.5, 1.1);
          }

          let row = null;

          switch (item.name) {
            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.weapon:
            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill:
            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill2:
              let id = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getFirstIdByType(item.type);

              if (info) {
                id = info.id + 1;
              }

              row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById(item.name, id);
              break;

            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop:
              row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById(item.name, item.id);
              break;

            default:
              break;
          }

          if (!row) {
            (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
              error: Error()
            }), myLog) : myLog).e("row is undefined:", row, item);
          }

          itemUI.row = row;
          this.setString(find("name", itemUI), row.name);
          this.setSpriteFrame(find("icon", itemUI), row.icon);
          this.setString(find("info", itemUI), row.info);
          let btnDoubleSelect = find("btnDoubleSelect", itemUI);
          btnDoubleSelect.active = false;
          let selectEffect = find("selectEffect", itemUI);
          selectEffect.active = false;
          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).addComponentOnce(selectEffect, _crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
            error: Error()
          }), AnimationCtrl) : AnimationCtrl);
          let starLayer = find("starLayer", itemUI);
          let bgNode = find("bg", itemUI);
          let bg2Node = find("bg2", itemUI);

          if (row.lv >= (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).design.maxLv) {
            bgNode.active = false;
            bg2Node.active = true;
          } else {
            bgNode.active = true;
            bg2Node.active = false;
          }

          if (item.name == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop) {
            starLayer.active = false;
          } else {
            starLayer.active = true;
            this.setNumItemLayer(starLayer, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.maxLv, (starItemUI, starLv) => {
              let uiOpacity = starItemUI.getComponent(UIOpacity);
              uiOpacity.opacity = 255;
              Tween.stopAllByTarget(uiOpacity);
              let starIcon = find("icon", starItemUI);
              let starIcon2 = find("icon2", starItemUI);
              let yinIcon = find("yin", starItemUI);

              if (row.lv >= starLv) {
                yinIcon.active = false;

                if (row.lv == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).design.maxLv) {
                  starIcon.active = false;
                  starIcon2.active = true;
                } else {
                  starIcon.active = true;
                  starIcon2.active = false;
                }

                if (row.lv == starLv) {
                  (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                    error: Error()
                  }), cocosUtil) : cocosUtil).tweenBlink(starItemUI, 0.3);
                  itemUI.starNode = starItemUI;
                }
              } else {
                yinIcon.active = true;
                starIcon.active = false;
                starIcon2.active = false;
              }
            });

            if (row.lv <= (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.maxLv - 1) {
              btnDoubleSelect.active = true;
            }
          }

          let combLayer = find("comb", itemUI);

          if (row.skillArr) {
            combLayer.active = true;
            let iconNode = find("icon", combLayer);
            let skillId = 0;
            (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).forArr(row.skillArr, type => {
              let sInfo = (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).skillSystem.getSkillInfoByType(type);

              if (sInfo) {
                skillId = sInfo.id;
                return true;
              }
            });

            if (skillId == 0) {
              skillId = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getFirstIdByType(row.skillArr[0]);
            }

            let skillRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill, skillId);
            this.setSpriteFrame(iconNode, skillRow.icon);
            Tween.stopAllByTarget(iconNode);
            tween(iconNode).delay(1).to(0.3, {
              scale: v3(1.5, 1.5, 1)
            }).to(0.15, {
              scale: v3(1, 1, 1)
            }).union().repeatForever().start();
          } else {
            combLayer.active = false;
          }
        }

        mapLeaveRet() {
          this.closeLayer();
        }

        processEvent(ac, data) {
          switch (ac) {
            default:
              break;
          }
        }

        onClickBtnRefresh() {
          if (this.hasSelect) {
            return;
          }

          if ((_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).skillFreeRefreshCount > 0) {
            (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
              error: Error()
            }), sdkManager) : sdkManager).openAd("3选1刷新", st => {
              if (st == 1) {
                this.refreshSelectLayer();
              }
            });
            return;
          }

          (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).skillFreeRefreshCount++;
          this.refreshSelectLayer();
          this.refreshInfoLayer();
        }

        onClickBtnGetAll() {
          if (this.hasSelect) {
            return;
          }

          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).openAd("3选1欧皇附体", st => {
            if (st == 1) {
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).skillAllNum--;
              this.hasSelect = true;
              let arr = [];
              this.selectItemLayer.node.children.forEach(node => {
                arr.push(node);
              });

              let tempFunc = () => {
                let node = arr.shift();

                if (!node) {
                  this.goNext();
                  return;
                }

                this.doSelectItem(node, false, () => {
                  tempFunc();
                });
              };

              tempFunc();
            }
          });
        }

        doSelectItem(node, isYin = true, callback, isDouble = false) {
          let starNode = node.starNode;
          let item = node.item;
          let row = node.row;
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).waterfall([(result, cb) => {
            if (isYin) {
              // 弱化其它选项
              (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).forArr(this.selectItemLayer.node.children, itemUI => {
                if (node == itemUI) {
                  return;
                }

                (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                  error: Error()
                }), cocosUtil) : cocosUtil).setRenderableColor(itemUI, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).colors.yin, true);
              });
            }

            if (starNode && starNode.activeInHierarchy) {
              // 星星选中特效
              let selectEffect = find("selectEffect", node);
              selectEffect.active = true;
              let pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).convertToNodeSpace(selectEffect, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).convertToWorldSpace(starNode));
              selectEffect.setPosition(pos);
              selectEffect.getComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
                error: Error()
              }), AnimationCtrl) : AnimationCtrl).playAnimationOnce("2", () => {
                selectEffect.active = false;
              });
              starNode.scale = v3(1, 1, 1);
              tween(starNode).to(0.1, {
                scale: v3(1.5, 1.5, 1)
              }).delay(0.15).to(0.15, {
                scale: v3(1, 1, 1)
              }).call(() => {
                cb();
              }).start();

              if (isDouble) {
                // 连升两星
                let starNode2 = find("starLayer", node).children[row.lv];

                if (starNode2) {
                  let selectEffect2 = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                    error: Error()
                  }), cocosUtil) : cocosUtil).instantiate(selectEffect);
                  selectEffect2.parent = selectEffect.parent;
                  pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                    error: Error()
                  }), cocosUtil) : cocosUtil).convertToNodeSpace(selectEffect2, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                    error: Error()
                  }), cocosUtil) : cocosUtil).convertToWorldSpace(starNode2));
                  selectEffect2.position = pos;
                  selectEffect2.getComponent(_crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
                    error: Error()
                  }), AnimationCtrl) : AnimationCtrl).playAnimationOnce("2", () => {
                    selectEffect2.removeFromParent();
                  });
                  starNode2.scale = v3(1, 1, 1);
                  find("icon", starNode2).active = true;
                  tween(starNode2).to(0.1, {
                    scale: v3(1.5, 1.5, 1)
                  }).delay(0.15).to(0.15, {
                    scale: v3(1, 1, 1)
                  }).start();
                }
              }

              return;
            }

            this.scheduleOnce(() => {
              cb();
            }, 0.2);
          }, (result, cb) => {
            switch (item.name) {
              case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.weapon:
                (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).weaponSystem.addWeapon(item.type);

                if (isDouble) {
                  (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                    error: Error()
                  }), mapModel) : mapModel).weaponSystem.addWeapon(item.type);
                }

                break;

              case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.skill:
                (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).skillSystem.addSkill(item.type);

                if (isDouble) {
                  (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                    error: Error()
                  }), mapModel) : mapModel).skillSystem.addSkill(item.type);
                }

                break;

              case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.skill2:
                (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).skillSystem.addSkill2(item.type);

                if (isDouble) {
                  (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                    error: Error()
                  }), mapModel) : mapModel).skillSystem.addSkill2(item.type);
                }

                break;

              case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.prop:
                (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                  error: Error()
                }), mapModel) : mapModel).propSystem.getProp(item.id);
                break;

              default:
                break;
            }

            cb();
          }, (result, cb) => {
            if (callback) {
              callback();
            }
          }]);
        }

        goNext() {
          this.layerData.lvCount--;

          if (this.layerData.lvCount > 0) {
            this.initUI();
          } else {
            this.closeLayer();

            if (this.layerCb) {
              this.layerCb();
            }
          }
        }

        onClickSelectItem(node) {
          if (this.hasSelect) {
            return;
          }

          this.hasSelect = true;
          this.doSelectItem(node, true, () => {
            this.goNext();
          });
        }

        onClickBtnDoubleSelect(node) {
          if (this.hasSelect) {
            return;
          }

          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).openAd("3选1连升两星", st => {
            if (st == 1) {
              this.hasSelect = true;
              let starNode = node.parent.starNode;
              Tween.stopAllByTarget(starNode.getComponent(UIOpacity));
              starNode.getComponent(UIOpacity).opacity = 255;
              find("yin", starNode).active = true;
              find("icon", starNode).active = false;
              this.scheduleOnce(() => {
                find("yin", starNode).active = false;
                find("icon", starNode).active = true;
                this.doSelectItem(node.parent, true, () => {
                  this.goNext();
                }, true);
              }, 0.3);
            }
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c5d588ae48d8d9bb31263866e38b5c9f2c4754b0.js.map