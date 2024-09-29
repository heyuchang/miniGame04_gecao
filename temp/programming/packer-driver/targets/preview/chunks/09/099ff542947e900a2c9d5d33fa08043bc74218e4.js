System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, macro, sp, tween, Tween, UIOpacity, UITransform, v3, _decorator, cocosUtil, utilTools, constants, localText, msgac, designManager, mapModel, AnimationCtrl, BaseLayer, _dec, _class, _crd, ccclass, property, LuckyDrawLayer;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  function _reportPossibleCrUseOfmsgac(extras) {
    _reporterNs.report("msgac", "../../data/msgac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../model/mapModel", _context.meta, extras);
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
      macro = _cc.macro;
      sp = _cc.sp;
      tween = _cc.tween;
      Tween = _cc.Tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      utilTools = _unresolved_3.utilTools;
    }, function (_unresolved_4) {
      constants = _unresolved_4.constants;
    }, function (_unresolved_5) {
      localText = _unresolved_5.localText;
    }, function (_unresolved_6) {
      msgac = _unresolved_6.msgac;
    }, function (_unresolved_7) {
      designManager = _unresolved_7.designManager;
    }, function (_unresolved_8) {
      mapModel = _unresolved_8.mapModel;
    }, function (_unresolved_9) {
      AnimationCtrl = _unresolved_9.AnimationCtrl;
    }, function (_unresolved_10) {
      BaseLayer = _unresolved_10.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9a419rDrwhAl6a5INizAZcz", "LuckyDrawLayer", undefined);

      __checkObsolete__(['find', 'macro', 'Node', 'sp', 'tween', 'Tween', 'UIOpacity', 'UITransform', 'v3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LuckyDrawLayer", LuckyDrawLayer = (_dec = ccclass('LuckyDrawLayer'), _dec(_class = class LuckyDrawLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          this.uiNode = void 0;
          this.itemLayer = void 0;
          this.circleNodeNum = 16;
          this.choseNum = 0;
          this.choseArr = [];
          this.starShineArr = [];
          this.starShineIndex = 0;
          this.showChoseIndex = 0;
          this.showChoseItemUI = void 0;
          this.startCircle = false;
          this.circleEnd = false;
          this.btnStart = void 0;
          this.hintNode = void 0;
          this.coinLayer = void 0;
          this.coinNumNode = void 0;
          this.coinNum = 0;
          this.resultUILayer = void 0;
          this.resultBgNode = void 0;
          this.resultItemLayer = void 0;
          this.resultItemNode = void 0;
          this.resultBtnSure = void 0;
          this.pdNode = void 0;
          this.fireNode = void 0;
        }

        onLoad() {
          super.onLoad();
          this.uiNode = this.getNodeByPath("ui");
          this.btnStart = this.getNodeByPath("ui/btnStart");
          this.hintNode = this.getNodeByPath("ui/hint");
          this.itemLayer = this.getNodeByPath("ui/itemLayer");
          var itemNode = this.itemLayer.children[0];
          itemNode.parent = null;
          var arr = [{
            x: 0,
            y: 100
          }, {
            x: 100,
            y: 0
          }, {
            x: 0,
            y: -100
          }, {
            x: -100,
            y: 0
          }];
          var lastItemNode = itemNode;

          for (var i = 0; i < arr.length; i++) {
            var info = arr[i];

            for (var k = 1; k <= 4; k++) {
              var node = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).instantiate(itemNode);
              node.parent = this.itemLayer;
              var pos = lastItemNode.getPosition();
              pos.x += info.x;
              pos.y += info.y;
              node.position = pos;
              lastItemNode = node;
            }
          }

          this.coinLayer = this.getNodeByPath("ui/coinLayer");
          this.coinNumNode = this.getNodeByPath("ui/coinLayer/num");
          this.pdNode = this.getNodeByPath("pd");
          this.fireNode = this.getNodeByPath("fire");
          this.resultUILayer = this.getNodeByPath("resultUi");
          this.resultBgNode = this.getNodeByPath("resultUi/resultBg");
          this.resultItemLayer = this.getNodeByPath("resultUi/itemLayer");
          this.resultItemNode = this.resultItemLayer.children[0];
          this.resultItemNode.parent = null;
          this.resultBtnSure = this.getNodeByPath("resultUi/btnSure");
          this.isShowBannerAd = true;
        }

        onEnable() {
          super.onEnable();
          this.addEventArr([(_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).mapLeave]);
        }

        onDisable() {
          super.onDisable();
          this.removeEventArr([(_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).mapLeave]);
        }

        initUI() {
          this.resultUILayer.active = false;
          this.pdNode.active = false;
          this.fireNode.active = false;
          this.hintNode.active = false;
          this.setString(this.coinNumNode, this.coinNum);
          this.initItemArr();
          this.btnStart.active = false;
          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).tweenScaleIn(this.uiNode, 0.3, () => {
            this.btnStart.active = true;
            (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).tweenScaleIn(this.btnStart);
          });
        }

        initItemArr() {
          // 转盘上显示的
          var showArr = []; // 最终随机到的

          this.choseArr = []; // 选择的个数

          this.choseNum = Math.random() > 0.5 ? 3 : 5; // 随机池子

          var arr = []; // 强制选择

          var forceChoseArr = []; // 武器

          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).weaponSystem.weaponArr, info => {
            var item = {};
            item.name = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.weapon;
            item.info = info;
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById(item.name, info.id);

            if (row.lv == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.maxLv - 1) {
              // 4级必选中
              var temp = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).copyObj(item);
              temp.info.id++;
              forceChoseArr.push(temp);
              return;
            }

            var lv = row.lv;

            while (lv < (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.maxLv) {
              var _temp = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).copyObj(item);

              arr.push(_temp);
              lv++;
            }
          }); // 主动技能

          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.skillArr, info => {
            var item = {};
            item.name = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill;
            item.info = info;
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById(item.name, info.id);

            if (row.lv == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.maxLv - 1) {
              // 4级必选中
              var temp = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).copyObj(item);
              temp.info.id++;
              forceChoseArr.push(temp);
              return;
            }

            var lv = row.lv;

            while (lv < (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.maxLv) {
              var _temp2 = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).copyObj(item);

              arr.push(_temp2);
              lv++;
            }
          }); // 被动技能

          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.skill2Arr, info => {
            var item = {};
            item.name = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill2;
            item.info = info;
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById(item.name, info.id);

            if (row.lv == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.maxLv - 1) {
              // 4级必选中
              var temp = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).copyObj(item);
              temp.info.id++;
              forceChoseArr.push(temp);
              return;
            }

            var lv = row.lv;

            while (lv < (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.maxLv) {
              var _temp3 = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).copyObj(item);

              arr.push(_temp3);
              lv++;
            }
          });
          showArr = showArr.concat(forceChoseArr); // 处理强制选择的

          while (forceChoseArr.length > this.choseNum) {
            // 超过选择的数量要移除
            (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).getRandomItemByArr(forceChoseArr, true);
          }

          this.choseArr = this.choseArr.concat(forceChoseArr); // 随机池子补满金币

          while (arr.length < this.circleNodeNum - showArr.length) {
            var item = {};
            item.name = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop;
            item.id = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.coin;
            item.num = Math.floor(Math.random() * 100) + 1;
            arr.push(item);
          } // 接下来从池子中随机


          while (this.choseArr.length < this.choseNum) {
            var _item = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).getRandomItemByArr(arr, true);

            if (!_item) {
              break;
            }

            this.choseArr.push(_item);
            showArr.push(_item);
          } // 补满转盘


          while (showArr.length < this.circleNodeNum) {
            var _item2 = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).getRandomItemByArr(arr, true);

            if (!_item2) {
              break;
            }

            showArr.push(_item2);
          } // 随机打乱


          showArr = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).randomArr(showArr, true);
          this.choseArr = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).randomArr(this.choseArr, true);
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.itemLayer.children, (itemUI, index) => {
            var item = showArr[index];
            var row = this.getRowByItem(item);
            item.uiIndex = index;
            itemUI.item = item;
            this.setSpriteFrame(find("icon", itemUI), row.icon);
            find("shine", itemUI).active = false;
            find("star", itemUI).active = false;
            find("chose", itemUI).active = false; // 出场动画

            itemUI.active = false;
            this.scheduleOnce(() => {
              itemUI.active = true;
              (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).tweenScaleIn(itemUI);
            }, 0.2 + Math.random() * 0.2);
          }); // myLog.i(showArr, this.choseArr);
        }

        getRowByItem(item) {
          var row = null;

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
              row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById(item.name, item.info.id);
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

          return row;
        } // 开始处理动画表现


        startAnimation() {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).waterfall([(result, cb) => {
            // 转一圈
            this.circleShineAnimation(() => {
              cb();
            });
          }, (result, cb) => {
            // 转第二圈
            this.circleShineAnimation(() => {
              cb();
            });
          }, (result, cb) => {
            // 整圈闪烁
            this.totalShineAnimation(() => {
              cb();
            });
          }, (result, cb) => {
            // 选择数量闪烁
            this.choseNumAnimation(() => {
              cb();
            });
          }, (result, cb) => {
            this.unscheduleAllCallbacks();
            this.pdNode.active = true;
            this.startCircle = true;
            tween(this.coinLayer).to(0.2, {
              scale: v3(1.1, 1.1, 1)
            }).to(0.2, {
              scale: v3(1, 1, 1)
            }).union().repeatForever().start(); // 加金币

            this.schedule(() => {
              if (this.startCircle && !this.circleEnd) {
                this.coinNum += 2;
                this.setString(this.coinNumNode, this.coinNum);
              }
            }, 0.02, macro.REPEAT_FOREVER); // 提示跳过动画

            this.scheduleOnce(() => {
              this.hintNode.active = true;
              tween(this.hintNode.getComponent(UIOpacity)).delay(0.5).to(0.5, {
                opacity: 0
              }).to(0.5, {
                opacity: 255
              }).union().repeatForever().start();
            }, 0.5); // 开始转圈

            this.startShineStarCircle();
          }]); // 放烟花

          var posArr = [v3(-100, 200, 0), v3(0, -100, 0), v3(150, -250, 0), v3(300, -500, 0), v3(100, -450, 0)];
          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).schedule(this, () => {
            if (posArr.length <= 0) {
              return;
            }

            var skinName = Math.random() > 0.5 ? "huang" : "lan";
            var scale = 0.8 + Math.random() * 0.2;
            var pos = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).getRandomItemByArr(posArr, true);
            var fireNode = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).instantiate(this.fireNode);
            fireNode.parent = this.fireNode.parent;
            fireNode.active = true;
            fireNode.position = pos;
            fireNode.scale = v3(scale, scale, 1);
            fireNode.getComponent(sp.Skeleton).setSkin(skinName);
            var aniCtrl = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).addComponentOnce(fireNode, _crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
              error: Error()
            }), AnimationCtrl) : AnimationCtrl);
            aniCtrl.playAnimationOnce("animation", () => {
              fireNode.parent = null;
            });
          }, 1.5, macro.REPEAT_FOREVER, 0, true);
        }

        startShineStarCircle() {
          var chs = this.itemLayer.children;
          var index = 5;
          this.starShineArr = [];
          this.starShineIndex = index + this.choseNum - 1;
          this.showChoseIndex = 0;
          this.showChoseItemUI = null;

          for (var i = 0; i < this.choseNum; i++) {
            var itemUI = chs[index];
            index++;
            this.initStarShineItemUI(itemUI);
            this.starShineArr.push(itemUI);
          }

          this.schedule(this.addNextStarShine, 0.05, macro.REPEAT_FOREVER);
          this.scheduleOnce(this.startShowChoseItem, 3 + 2 * Math.random());
        }

        startShowChoseItem() {
          var item = this.choseArr[this.showChoseIndex];

          if (!item) {
            return;
          }

          this.showChoseItemUI = this.itemLayer.children[item.uiIndex];
          this.showChoseIndex++;
        }

        initStarShineItemUI(itemUI) {
          var uiOpacity = find("shine", itemUI).getComponent(UIOpacity);
          uiOpacity.node.active = true;
          uiOpacity.opacity = 255;
          var starNode = find("star", itemUI);
          starNode.angle = Math.random() * 360;
          var animationCtrl = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).addComponentOnce(starNode, _crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
            error: Error()
          }), AnimationCtrl) : AnimationCtrl);
          animationCtrl.getComponent(UIOpacity).opacity = 255;
          animationCtrl.node.active = true;
          animationCtrl.playAnimation("3", false, () => {
            animationCtrl.node.active = false;
          });
        }

        addNextStarShine(dt) {
          var chs = this.itemLayer.children;
          this.starShineIndex++;

          if (this.starShineIndex >= this.circleNodeNum) {
            this.starShineIndex = 0;
          }

          var itemUI = chs[this.starShineIndex];

          if (this.showChoseItemUI == itemUI) {
            // 选中了
            this.showChoseItemUI = null;
            this.unschedule(this.addNextStarShine);
            find("chose", itemUI).active = true;
            var starNode = find("star", itemUI);
            starNode.active = true;
            starNode.angle = 0;
            starNode.getComponent(UIOpacity).opacity = 255;
            var animationCtrl = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).addComponentOnce(starNode, _crd && AnimationCtrl === void 0 ? (_reportPossibleCrUseOfAnimationCtrl({
              error: Error()
            }), AnimationCtrl) : AnimationCtrl);
            animationCtrl.playAnimation("2", false, () => {
              starNode.active = false;
            }); // @ts-ignore

            this.playerAddItem(itemUI.item);
            tween(itemUI).to(0.2, {
              scale: v3(1.5, 1.5, 1)
            }).to(0.2, {
              scale: v3(1, 1, 1)
            }).call(() => {
              if (this.showChoseIndex >= this.choseArr.length) {
                // 已经全部完成
                this.showChoseResult();
              } else {
                // 继续展示下一个
                this.schedule(this.addNextStarShine, 0.05, macro.REPEAT_FOREVER);
                this.startShowChoseItem();
              }
            }).start();
            return;
          }

          this.initStarShineItemUI(itemUI);
          this.starShineArr.push(itemUI);
          var outItemUI = this.starShineArr.shift();
          var shineNode = find("shine", outItemUI);
          tween(shineNode.getComponent(UIOpacity)).to(dt * 6, {
            opacity: 0
          }).start();
        }

        playerAddItem(item) {
          var row = this.getRowByItem(item);

          switch (item.name) {
            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.weapon:
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).weaponSystem.addWeapon(row.type);
              item.info = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).copyObj((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).weaponSystem.getWeaponInfoByType(row.type));
              break;

            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill:
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).skillSystem.addSkill(row.type);
              item.info = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).copyObj((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).skillSystem.getSkillInfoByType(row.type));
              break;

            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill2:
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).skillSystem.addSkill2(row.type);
              item.info = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).copyObj((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).skillSystem.getSkill2InfoByType(row.type));
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
        } // 已全部完成


        showChoseResult() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.unscheduleAllCallbacks();

            _this.circleEnd = true;
            (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
              error: Error()
            }), mapModel) : mapModel).propSystem.getProp((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).propIds.coin, _this.coinNum);

            _this.itemLayer.children.forEach(itemUI => {
              find("shine", itemUI).active = false;
              find("star", itemUI).active = false;
            });

            _this.resultUILayer.active = true;
            _this.resultBtnSure.active = false;

            _this.resultItemLayer.removeAllChildren();

            yield (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).tweenFadeIn(_this.resultBgNode, 0.5);

            var itemTransform = _this.resultItemNode.getComponent(UITransform);

            var itemHeight = itemTransform.height;
            var itemGap = 20;
            var chs = _this.itemLayer.children;

            var _loop = function _loop(i) {
              var item = _this.choseArr[i];

              _this.scheduleOnce(() => {
                var node = chs[item.uiIndex];
                var pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                  error: Error()
                }), cocosUtil) : cocosUtil).convertToWorldSpace(node);
                node = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                  error: Error()
                }), cocosUtil) : cocosUtil).instantiate(node);
                node.parent = _this.resultItemLayer;
                node.position = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                  error: Error()
                }), cocosUtil) : cocosUtil).convertToNodeSpace(node, pos);
                var targetPos = v3(0, 0, 0);
                targetPos.y = -itemHeight * 0.5 - (itemHeight + itemGap) * i;
                tween(node).to(0.2, {
                  position: targetPos
                }).to(0.1, {
                  scale: v3(0.3, 0.3, 1)
                }).call(() => {
                  var itemUI = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                    error: Error()
                  }), cocosUtil) : cocosUtil).instantiate(_this.resultItemNode);
                  itemUI.parent = _this.resultItemLayer;
                  itemUI.position = targetPos;

                  _this.refreshResultItemUI(itemUI, item);

                  var shineNode = find("shine", itemUI);
                  shineNode.active = true;
                  (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                    error: Error()
                  }), cocosUtil) : cocosUtil).tweenScaleIn2(itemUI, 0.2, () => {
                    (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                      error: Error()
                    }), cocosUtil) : cocosUtil).tweenFadeOut(shineNode, 0.6);

                    if (i == _this.choseArr.length - 1) {
                      _this.resultBtnSure.active = true;
                      (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                        error: Error()
                      }), cocosUtil) : cocosUtil).tweenScaleIn2(_this.resultBtnSure);
                    }
                  });
                }).start();
              }, i * 0.3);
            };

            for (var i = 0; i < _this.choseArr.length; i++) {
              _loop(i);
            }
          })();
        }

        refreshResultItemUI(itemUI, item) {
          var row = this.getRowByItem(item);
          this.setSpriteFrame(find("icon", itemUI), row.icon);
          this.setString(find("name", itemUI), row.name);
          var info = row.info;

          if (item.name == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop) {
            info = (_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
              error: Error()
            }), localText) : localText).coinGetHint.format(item.num);
          }

          this.setString(find("info", itemUI), info);
          var starLayer = find("starLayer", itemUI);

          if (item.name == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop) {
            starLayer.active = false;
            return;
          }

          starLayer.active = true;
          this.setNumItemLayer(starLayer, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).design.maxLv, (starNode, num) => {
            var iconNode = find("icon", starNode);
            var icon2Node = find("icon2", starNode);
            var yinNode = find("yin", starNode);

            if (row.lv >= num) {
              iconNode.active = true;
              icon2Node.active = false;
              yinNode.active = false;

              if (row.lv >= (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).design.maxLv) {
                iconNode.active = false;
                icon2Node.active = true;
              }
            } else {
              iconNode.active = false;
              yinNode.active = true;
            }
          });
        }

        choseNumAnimation(endCb) {
          var _this2 = this;

          var chs = this.itemLayer.children;
          var index = 5;
          var arr = [];

          var _loop2 = function _loop2(i) {
            var itemUI = chs[index];
            arr.push(itemUI);
            index++;

            _this2.scheduleOnce(() => {
              var uiOpacity = find("shine", itemUI).getComponent(UIOpacity);
              uiOpacity.node.active = true;
              uiOpacity.opacity = 0;
              tween(uiOpacity).to(0.1, {
                opacity: 255
              }).delay(0.15).to(0.1, {
                opacity: 0
              }).union().repeatForever().start();

              if (i == _this2.choseNum - 1) {
                _this2.scheduleOnce(() => {
                  (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                    error: Error()
                  }), utilTools) : utilTools).forArr(arr, node => {
                    find("shine", node).active = false;
                    Tween.stopAllByTarget(find("shine", node).getComponent(UIOpacity));
                  });
                  endCb();
                }, 0.35);
              }
            }, i * 0.35);
          };

          for (var i = 0; i < this.choseNum; i++) {
            _loop2(i);
          }
        }

        totalShineAnimation(endCb) {
          var time = 0.3;
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.itemLayer.children, (itemUI, index) => {
            var uiOpacity = find("shine", itemUI).getComponent(UIOpacity);
            uiOpacity.node.active = true;
            uiOpacity.opacity = 0;
            tween(uiOpacity).to(time, {
              opacity: 255
            }).to(time, {
              opacity: 0
            }).union().repeat(3).call(() => {
              if (index == 0) {
                endCb();
              }
            }).start();
          });
        }

        circleShineAnimation(endCb) {
          var _this3 = this;

          var chs = this.itemLayer.children;
          var count = 0;
          var opacityTime = 0.1;
          var delayTime = 0.5;

          var _loop3 = function _loop3(i) {
            var node = chs[i];
            var time = count * 0.05;
            var shineNode = find("shine", node);
            shineNode.active = true;
            var uiOpacity = shineNode.getComponent(UIOpacity);
            uiOpacity.opacity = 0;

            _this3.scheduleOnce(() => {
              tween(uiOpacity).to(opacityTime, {
                opacity: 255
              }).delay(delayTime).to(opacityTime, {
                opacity: 0
              }).call(() => {
                if (i == 5) {
                  endCb();
                }
              }).start();
            }, time);

            if (i != 13 && i != 5) {
              var sideNode = chs[(26 - i) % _this3.circleNodeNum];
              var sideShineNode = find("shine", sideNode);
              sideShineNode.active = true;
              var sideOpacity = sideShineNode.getComponent(UIOpacity);
              sideOpacity.opacity = 0;

              _this3.scheduleOnce(() => {
                tween(sideOpacity).to(opacityTime, {
                  opacity: 255
                }).delay(delayTime).to(opacityTime, {
                  opacity: 0
                }).start();
              }, time);
            }

            count++;
          };

          for (var i = 13; i >= 5; i--) {
            _loop3(i);
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

        onClickBtnStart() {
          this.btnStart.active = false;
          this.startAnimation();
        }

        onButtonClick(node, name) {
          switch (name) {
            default:
              break;
          }
        }

        onClickBg() {
          if (!this.hintNode.active) {
            return;
          }

          this.hintNode.active = false;

          if (this.showChoseIndex >= 1) {
            return;
          }

          this.circleEnd = true; // 一次性给金币

          var coin = 300;

          if (this.choseNum >= 3) {
            coin = 450;
          }

          coin = coin + 100 * Math.random();
          coin = Math.floor(coin);

          if (coin <= this.coinNum) {
            coin = coin + 50 * Math.random();
            coin = Math.floor(coin);
          }

          this.coinNum = coin;
          this.setString(this.coinNumNode, this.coinNum);
          this.unschedule(this.startShowChoseItem);
          this.startShowChoseItem();
        }

        closeLayer() {
          super.closeLayer();

          if (this.layerCb) {
            this.layerCb();
          }
        }

        onClickBtnSure() {
          this.closeLayer();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=099ff542947e900a2c9d5d33fa08043bc74218e4.js.map