System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Label, Node, Prefab, RichText, tween, UIOpacity, UITransform, v3, _decorator, tyqSDK, cocosUtil, constants, msgac, audioManager, designManager, eventManager, playerModel, UserData, PropItemPrefab, BaseUILayer, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _crd, ccclass, property, BlessLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../../../tyqSDK/tyqSDK", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../utils/cocosUtil", _context.meta, extras);
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

  function _reportPossibleCrUseOfplayerModel(extras) {
    _reporterNs.report("playerModel", "../../model/playerModel", _context.meta, extras);
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
      RichText = _cc.RichText;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      tyqSDK = _unresolved_2.tyqSDK;
    }, function (_unresolved_3) {
      cocosUtil = _unresolved_3.cocosUtil;
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
      playerModel = _unresolved_9.playerModel;
    }, function (_unresolved_10) {
      UserData = _unresolved_10.UserData;
    }, function (_unresolved_11) {
      PropItemPrefab = _unresolved_11.PropItemPrefab;
    }, function (_unresolved_12) {
      BaseUILayer = _unresolved_12.BaseUILayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3e45cpHFthAM6Ybsh9jqa6H", "BlessLayer", undefined);

      __checkObsolete__(['instantiate', 'Label', 'Node', 'Prefab', 'RichText', 'tween', 'UIOpacity', 'UITransform', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BlessLayer", BlessLayer = (_dec = ccclass('BlessLayer'), _dec2 = property({
        type: Node,
        tooltip: "道具选择容器"
      }), _dec3 = property({
        type: Node,
        tooltip: "道具结果容器"
      }), _dec4 = property({
        type: Prefab,
        tooltip: "道具节点"
      }), _dec5 = property({
        type: Node,
        tooltip: "道具列表View"
      }), _dec6 = property({
        type: Node,
        tooltip: "道具列表View"
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node,
        tooltip: "合成按钮"
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Label
      }), _dec13 = property({
        type: Label
      }), _dec14 = property({
        type: Label
      }), _dec15 = property({
        type: RichText
      }), _dec16 = property({
        type: Node
      }), _dec17 = property({
        type: Node
      }), _dec18 = property({
        type: Label
      }), _dec19 = property({
        type: Node
      }), _dec(_class = (_class2 = class BlessLayer extends (_crd && BaseUILayer === void 0 ? (_reportPossibleCrUseOfBaseUILayer({
        error: Error()
      }), BaseUILayer) : BaseUILayer) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "propBlessLayer", _descriptor, this);

          _initializerDefineProperty(this, "BlessResultLayer", _descriptor2, this);

          _initializerDefineProperty(this, "propItem", _descriptor3, this);

          _initializerDefineProperty(this, "propView", _descriptor4, this);

          _initializerDefineProperty(this, "scrollView", _descriptor5, this);

          _initializerDefineProperty(this, "resultLight", _descriptor6, this);

          _initializerDefineProperty(this, "btnBless", _descriptor7, this);

          _initializerDefineProperty(this, "btnlayer", _descriptor8, this);

          _initializerDefineProperty(this, "blessPropNode", _descriptor9, this);

          _initializerDefineProperty(this, "attrIcon", _descriptor10, this);

          _initializerDefineProperty(this, "attrlabel", _descriptor11, this);

          _initializerDefineProperty(this, "propNameLab", _descriptor12, this);

          _initializerDefineProperty(this, "attrNumLab", _descriptor13, this);

          _initializerDefineProperty(this, "tishiText", _descriptor14, this);

          _initializerDefineProperty(this, "selectListNode", _descriptor15, this);

          _initializerDefineProperty(this, "selectBtnNode", _descriptor16, this);

          _initializerDefineProperty(this, "needCoinLabel", _descriptor17, this);

          _initializerDefineProperty(this, "needIcon", _descriptor18, this);

          this._curBlessId = 0;
          this._curBlessNum = 0;
          this.NeedBlessNum = 3;
          this._curAutoIndex = 0;
          this._curIndex = 0;
        }

        onLoad() {
          this.fitScrollView(this.propView, 320, 600);
          this.fitNodeWidget(this.btnlayer, 30);
        }

        onEnable() {
          super.onEnable();
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).on((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).wearDrop, this.initList, this);
          this.btnBless.active = false;
        }

        onDisable() {
          super.onDisable();
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).off((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).wearDrop, this.initList, this);
        }

        onDestroy() {
          super.onDestroy();
        }

        start() {
          this.selectListNode.active = false;
          this._curIndex = 0;
          this.initSelectData();
          this.blessPropNode.active = false;
          this.tishiText.string = "";
        }

        initList() {
          var arr = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getPropSort();
          var dataArr = [];

          if (this._curIndex == 0) {
            arr.forEach(element => {
              // let num = (this._curBlessId == element.id) ? element.num - this._curBlessNum : element.num
              if (this._curBlessId == element.id || this._curBlessId <= 0) {
                var curprop = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                  error: Error()
                }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).tableName.prop, element.id);

                if (curprop.quality < 5) {
                  var num = element.num;

                  for (var i = 0; i < num; i++) {
                    dataArr.push([element.id, element.iswear == 1 && i == 0, i < this._curBlessNum]);
                  }
                }
              }
            });
          } else {
            arr.forEach(element => {
              // let num = (this._curBlessId == element.id) ? element.num - this._curBlessNum : element.num
              if (this._curBlessId == element.id || this._curBlessId <= 0) {
                var curprop = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                  error: Error()
                }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).tableName.prop, element.id);

                if (curprop.wearIndex == this._curIndex && curprop.quality < 5) {
                  var num = element.num;

                  for (var i = 0; i < num; i++) {
                    dataArr.push([element.id, element.iswear == 1 && i == 0, i < this._curBlessNum]);
                  }
                }
              }
            });
          }

          this.scrollViewSetData(this.scrollView, dataArr, this.initItem, [this._curBlessId]);
        }

        initItem(itemUI, item, index, data) {
          if (item[0] == data[0] || data[0] == 0) {
            itemUI.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setView(item[0], 1, (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_HideNum | (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_UnTouch);
          } else {
            itemUI.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setView(item[0], 1, (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_HideNum | (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_UnTouch | (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_Grey);
          }

          itemUI.getChildByName("wear").active = item[1];
          itemUI.getChildByName("gou").active = item[2];

          if (item[2]) {
            itemUI.getChildByName("grayMask").active = true;
          }

          itemUI.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
            error: Error()
          }), PropItemPrefab) : PropItemPrefab).setScale(125);
        }

        selectProp(event) {
          var itemData = event.target.item;

          if (itemData[2]) {
            return;
          }

          if (this._curBlessNum >= this.NeedBlessNum) {
            this.toast("合成材料已经足够");
            return;
          }

          var propid = itemData[0];
          var pos = event.target.parent.getComponent(UITransform).convertToWorldSpaceAR(event.target.position);

          if (propid != this._curBlessId && this._curBlessId != 0) {
            return;
          }

          this.addSelectProp(propid, 1, pos);
        }

        addSelectProp(propid, num, startp) {
          if (num === void 0) {
            num = 1;
          }

          if (startp === void 0) {
            startp = null;
          }

          this._curBlessId = propid;

          for (var index = 0; index < num; index++) {
            var item = this.propBlessLayer[this._curBlessNum].getChildByName("prop");

            if (item == null) {
              item = instantiate(this.propItem);
              item.position = v3(0, 0, 0);
              item.name = "prop";

              this.propBlessLayer[this._curBlessNum].addChild(item);

              item.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
                error: Error()
              }), PropItemPrefab) : PropItemPrefab).setScale(120);
            }

            item.on(Node.EventType.TOUCH_END, this.unSelectProp, this);
            item.active = true;
            item.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).setView(propid, 1, (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_HideNum | (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
              error: Error()
            }), PropItemPrefab) : PropItemPrefab).Type_UnTouch);

            if (startp) {
              var p = this.propBlessLayer[this._curBlessNum].getComponent(UITransform).convertToNodeSpaceAR(startp);

              item.position = p;
              tween(item).to(0.2, {
                position: v3(0, 0, 0)
              }).start();
            }

            this._curBlessNum += 1;
          }

          if (this._curBlessNum < this.NeedBlessNum) {
            for (var _index = this._curBlessNum; _index < this.NeedBlessNum; _index++) {
              var _item = this.propBlessLayer[_index].getChildByName("prop");

              if (_item == null) {
                _item = instantiate(this.propItem);
                _item.position = v3(0, 0, 0);
                _item.name = "prop";

                this.propBlessLayer[_index].addChild(_item);

                _item.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
                  error: Error()
                }), PropItemPrefab) : PropItemPrefab).setScale(120); //   item.on(Node.EventType.TOUCH_END, this.unSelectProp, this);

              }

              _item.active = true;

              _item.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
                error: Error()
              }), PropItemPrefab) : PropItemPrefab).setView(propid, 1, (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
                error: Error()
              }), PropItemPrefab) : PropItemPrefab).Type_HideNum | (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
                error: Error()
              }), PropItemPrefab) : PropItemPrefab).Type_UnTouch | (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
                error: Error()
              }), PropItemPrefab) : PropItemPrefab).Type_Grey);
            }

            this.btnBless.active = false;
          } else {
            this.btnBless.active = true;
          }

          var curProp = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, this._curBlessId); // if(curProp.quality ==1){

          this.needCoinLabel.string = "x" + (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).config["compose" + curProp.quality];

          if (curProp.quality == 4) {
            this.setSpriteFrame2(this.needIcon, "prop/prop_diamond2");
          } else {
            this.setSpriteFrame2(this.needIcon, "prop/prop_coin1");
          } //  }


          if (curProp && curProp.blessId && curProp.blessId > 0) {
            this.showResultProp([curProp.blessId]);
          }

          this.selectBtnNode.active = this._curBlessNum <= 0;
          this.initList();
        }

        showResultProp() {
          this.BlessResultLayer.removeAllChildren();

          for (var _len = arguments.length, propid = new Array(_len), _key = 0; _key < _len; _key++) {
            propid[_key] = arguments[_key];
          }

          if (propid) {
            propid.forEach(element => {
              var item = instantiate(this.propItem);
              item.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
                error: Error()
              }), PropItemPrefab) : PropItemPrefab).setView(element, 1, (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
                error: Error()
              }), PropItemPrefab) : PropItemPrefab).Type_HideNum);
              item.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
                error: Error()
              }), PropItemPrefab) : PropItemPrefab).setScale(130);
              item.position = v3(0, 0, 0); // item.getComponent(Button).clickEvents = []

              this.BlessResultLayer.addChild(item);
            });
            this.showLight(this.BlessResultLayer.children.length > 0);
            this.blessPropNode.active = this.BlessResultLayer.children.length > 0;
            this.showPropInfo();

            if (this.BlessResultLayer.children.length <= 0) {
              this.tishiText.string = "";
            }
          } else {
            this.showLight(false);
            this.blessPropNode.active = false;
            this.tishiText.string = "";
          }
        }

        showPropInfo() {
          if (this._curBlessId <= 0) {
            return;
          }

          var propData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, this._curBlessId);

          if (propData == null) {
            return;
          }

          if (propData && propData.blessId && propData.blessId > 0) {
            var propData2 = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop, propData.blessId);
          }

          if (propData.atk > 0) {
            this.setSpriteFrame2(this.attrIcon, "heroLayer/ui_gj", null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.wwqVec);
            this.attrNumLab.string = "" + (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).formatNumString(propData2.atk);
            this.attrNumLab.color = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).colors.blue.parseColor();
            this.attrlabel.string = "攻击 " + "" + (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).formatNumString(propData.atk);
          } else if (propData.hp > 0) {
            this.attrNumLab.string = "" + (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).formatNumString(propData2.hp);
            this.setSpriteFrame2(this.attrIcon, "heroLayer/ui_sm", null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.wwqVec);
            this.attrlabel.string = "生命 " + "" + (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).formatNumString(propData.hp);
            this.attrNumLab.color = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).colors.green.parseColor();
          }

          this.propNameLab.string = "" + propData2.name;

          if (this.NeedBlessNum - this._curBlessNum <= 0) {
            this.tishiText.string = "";
          } else {
            var propColor = ["灰色", "绿色", "蓝色", "紫色", "黄色"];
            var propColor2 = ["#818ca0", "#38ff38", "#328adc", "#ff48d7", "#ffb848"];
            this.tishiText.string = "<color=#ffffff>需要材料：" + (this.NeedBlessNum - this._curBlessNum) + "x</color><color=" + propColor2[propData.quality - 1] + ">" + propColor[propData.quality - 1] + "</color><color=#ffffff>" + propData.name + "</color>";
          }
        }

        showLight(isShow) {
          this.resultLight.active = false;

          if (isShow) {
            this.resultLight.active = true;
            tween(this.resultLight.getComponent(UIOpacity)).stop();
            tween(this.resultLight.getComponent(UIOpacity)).to(0.7, {
              opacity: 0
            }).to(0.4, {
              opacity: 255
            }).union().repeatForever().start();
          }
        }

        unSelectProp() {
          this._curBlessNum--;

          var item = this.propBlessLayer[this._curBlessNum].getChildByName("prop");

          if (this._curBlessNum <= 0) {
            this._curBlessId = 0;

            for (var index = 0; index < this.NeedBlessNum; index++) {
              var _item2 = this.propBlessLayer[index].getChildByName("prop");

              if (_item2) {
                _item2.active = false;

                _item2.off(Node.EventType.TOUCH_END, this.unSelectProp, this);
              }
            }

            this.showResultProp(); //  return
          } else if (item) {
            //  item.active = false
            //  item.off(Node.EventType.TOUCH_END, this.unSelectProp, this);
            if (this._curBlessId > 0) {
              item.active = true;
              item.getComponent(_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
                error: Error()
              }), PropItemPrefab) : PropItemPrefab).setView(this._curBlessId, 1, (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
                error: Error()
              }), PropItemPrefab) : PropItemPrefab).Type_HideNum | (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
                error: Error()
              }), PropItemPrefab) : PropItemPrefab).Type_UnTouch | (_crd && PropItemPrefab === void 0 ? (_reportPossibleCrUseOfPropItemPrefab({
                error: Error()
              }), PropItemPrefab) : PropItemPrefab).Type_Grey);
            }
          }

          this.btnBless.active = false;
          this.selectBtnNode.active = this._curBlessNum <= 0;
          this.initList();
        }

        blessAction() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");

          if (this._curBlessNum < this.NeedBlessNum) {
            this.toast("需要3个合成材料");
            return;
          }

          var curProp = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, this._curBlessId);

          if (curProp) {
            var coinNum = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).config["compose" + curProp.quality] || 100;

            if (curProp.quality == 4 && (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().checkAndUseBaoshi(coinNum, true) || curProp.quality != 4 && (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().cheackAndUseCoin(coinNum, true)) {
              if (curProp && curProp.blessId && curProp.blessId > 0) {
                (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                  error: Error()
                }), UserData) : UserData).getInstance().blessProp(this._curBlessId, curProp.blessId, 0 - this._curBlessNum);
                this.showResultProp([curProp.blessId]);
                this.clearBlessLayer();
                this.showResultProp();
                this.initList();
                (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                  error: Error()
                }), tyqSDK) : tyqSDK).eventSendCustomEvent("合成装备成功");
                this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).layers.BlessResultLayer, {
                  blessId: curProp.id,
                  getPropId: curProp.blessId
                });
                (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
                  error: Error()
                }), playerModel) : playerModel).addDayTaskNum(9);
              }
            } else {
              if (curProp.quality != 4) {
                (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                  error: Error()
                }), tyqSDK) : tyqSDK).eventSendCustomEvent("合成装备金币不足");
                this.toast("金币不足");
                this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).layers.RewardItemLayer, {
                  propId: 101,
                  num: (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                    error: Error()
                  }), designManager) : designManager).config.adCoin
                });
              } else {
                (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                  error: Error()
                }), tyqSDK) : tyqSDK).eventSendCustomEvent("合成装备钻石不足");
                this.toast("钻石不足");
                this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).layers.RewardItemLayer, {
                  propId: 801,
                  num: (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                    error: Error()
                  }), designManager) : designManager).config.adDiamond
                });
              }
            }
          }
        }

        clearBlessLayer() {
          this._curBlessId = 0;
          this._curBlessNum = 0;
          this.tishiText.string = "";
          this.propBlessLayer[0].removeAllChildren();
          this.propBlessLayer[1].removeAllChildren();
          this.propBlessLayer[2].removeAllChildren();
        }

        allBlessProp() {
          var arr = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().propData;
          var result = [];

          for (var index = 0; index < arr.length; index++) {
            if (arr[index].num >= this.NeedBlessNum) {
              var curProp = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.prop, arr[index].id);

              if (curProp && curProp.blessId && curProp.blessId > 0) {
                result.push(curProp.blessId);
                (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                  error: Error()
                }), UserData) : UserData).getInstance().blessProp(arr[index].id, curProp.blessId, 0 - this.NeedBlessNum);
              }
            }
          }

          this.showResultProp(result);
          this.clearBlessLayer();
          this.initList();
        }

        autoBlessAction() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          var arr = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().propData;

          if (this._curBlessId > 0) {
            if (this._curBlessNum < this.NeedBlessNum) {
              for (var i = this._curAutoIndex + 1; i < arr.length + this._curAutoIndex + 1; i++) {
                var index = i % arr.length;

                if (arr[index].id == this._curBlessId && arr[index].num - this._curBlessNum > 0) {
                  var curprop = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                    error: Error()
                  }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                    error: Error()
                  }), constants) : constants).tableName.prop, arr[index].id);

                  if (curprop.quality < 5) {
                    this._curAutoIndex = index;
                    this.addSelectProp(arr[index].id, Math.min(arr[index].num - this._curBlessNum, this.NeedBlessNum - this._curBlessNum));
                    return;
                  }
                }
              }
            } else {
              for (var _i = this._curAutoIndex + 1; _i < arr.length + this._curAutoIndex + 1; _i++) {
                var _index2 = _i % arr.length;

                if (arr[_index2].num >= this.NeedBlessNum) {
                  var _curprop = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                    error: Error()
                  }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                    error: Error()
                  }), constants) : constants).tableName.prop, arr[_index2].id);

                  if (_curprop.quality < 5) {
                    this.clearBlessLayer();
                    this._curAutoIndex = _index2;
                    this.addSelectProp(arr[_index2].id, this.NeedBlessNum);
                    return;
                  }
                }
              }
            }
          } else {
            for (var _i2 = this._curAutoIndex + 1; _i2 < arr.length + this._curAutoIndex + 1; _i2++) {
              var _index3 = _i2 % arr.length;

              if (arr[_index3].num >= this.NeedBlessNum) {
                var _curprop2 = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                  error: Error()
                }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).tableName.prop, arr[_index3].id);

                if (_curprop2.quality < 5) {
                  this.clearBlessLayer();
                  this._curAutoIndex = _index3;
                  this.addSelectProp(arr[_index3].id, this.NeedBlessNum);
                  return;
                }
              }
            }
          }

          this.toast("没有可以合成的装备");
        }

        closeBless() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.closeLayer();
        }

        onSelectBtnClick() {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this.selectListNode.active = !this.selectListNode.active;
          this.setSpriteFrame2(this.selectBtnNode.getChildByName("jianxia"), this.selectListNode.active ? "heroLayer/jianshang" : "heroLayer/jianxia", null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.wwqVec);
        }

        onSelectItemClick(event, data) {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("btnClick");
          this._curIndex = parseInt(data);
          this.onSelectBtnClick();
          this.initSelectData();
        }

        initSelectData() {
          var selectcurbg = this.selectBtnNode.getChildByName("selectcurbg");

          if (this._curIndex == 0) {
            selectcurbg.getChildByName("propicon").active = false;
            selectcurbg.getChildByName("Label").active = true;
          } else {
            selectcurbg.getChildByName("propicon").active = true;
            selectcurbg.getChildByName("Label").active = false;
            this.setSpriteFrame2(selectcurbg.getChildByName("propicon"), "heroLayer/propicon" + this._curIndex, null, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.wwqVec);
          }

          this.initList();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "propBlessLayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BlessResultLayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "propItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "propView", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "resultLight", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnBless", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnlayer", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "blessPropNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "attrIcon", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "attrlabel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "propNameLab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "attrNumLab", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "tishiText", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "selectListNode", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "selectBtnNode", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "needCoinLabel", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "needIcon", [_dec19], {
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
//# sourceMappingURL=9dc735cbe22307bf025c62d3257a6422b6a583d1.js.map