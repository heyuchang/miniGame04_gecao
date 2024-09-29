System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, macro, sp, tween, Tween, UIOpacity, UITransform, v3, _decorator, cocosUtil, utilTools, constants, localText, msgac, designManager, mapModel, AnimationCtrl, BaseLayer, _dec, _class, _crd, ccclass, property, LuckyDrawLayer;

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
        constructor(...args) {
          super(...args);
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
          let itemNode = this.itemLayer.children[0];
          itemNode.parent = null;
          let arr = [{
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
          let lastItemNode = itemNode;

          for (let i = 0; i < arr.length; i++) {
            let info = arr[i];

            for (let k = 1; k <= 4; k++) {
              let node = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).instantiate(itemNode);
              node.parent = this.itemLayer;
              let pos = lastItemNode.getPosition();
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
          let showArr = []; // 最终随机到的

          this.choseArr = []; // 选择的个数

          this.choseNum = Math.random() > 0.5 ? 3 : 5; // 随机池子

          let arr = []; // 强制选择

          let forceChoseArr = []; // 武器

          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).weaponSystem.weaponArr, info => {
            let item = {};
            item.name = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.weapon;
            item.info = info;
            let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById(item.name, info.id);

            if (row.lv == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.maxLv - 1) {
              // 4级必选中
              let temp = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).copyObj(item);
              temp.info.id++;
              forceChoseArr.push(temp);
              return;
            }

            let lv = row.lv;

            while (lv < (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.maxLv) {
              let temp = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).copyObj(item);
              arr.push(temp);
              lv++;
            }
          }); // 主动技能

          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.skillArr, info => {
            let item = {};
            item.name = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill;
            item.info = info;
            let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById(item.name, info.id);

            if (row.lv == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.maxLv - 1) {
              // 4级必选中
              let temp = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).copyObj(item);
              temp.info.id++;
              forceChoseArr.push(temp);
              return;
            }

            let lv = row.lv;

            while (lv < (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.maxLv) {
              let temp = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).copyObj(item);
              arr.push(temp);
              lv++;
            }
          }); // 被动技能

          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr((_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).skillSystem.skill2Arr, info => {
            let item = {};
            item.name = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill2;
            item.info = info;
            let row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById(item.name, info.id);

            if (row.lv == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.maxLv - 1) {
              // 4级必选中
              let temp = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).copyObj(item);
              temp.info.id++;
              forceChoseArr.push(temp);
              return;
            }

            let lv = row.lv;

            while (lv < (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.maxLv) {
              let temp = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
                error: Error()
              }), utilTools) : utilTools).copyObj(item);
              arr.push(temp);
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
            let item = {};
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
            let item = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).getRandomItemByArr(arr, true);

            if (!item) {
              break;
            }

            this.choseArr.push(item);
            showArr.push(item);
          } // 补满转盘


          while (showArr.length < this.circleNodeNum) {
            let item = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).getRandomItemByArr(arr, true);

            if (!item) {
              break;
            }

            showArr.push(item);
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
            let item = showArr[index];
            let row = this.getRowByItem(item);
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

          let posArr = [v3(-100, 200, 0), v3(0, -100, 0), v3(150, -250, 0), v3(300, -500, 0), v3(100, -450, 0)];
          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).schedule(this, () => {
            if (posArr.length <= 0) {
              return;
            }

            let skinName = Math.random() > 0.5 ? "huang" : "lan";
            let scale = 0.8 + Math.random() * 0.2;
            let pos = (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).getRandomItemByArr(posArr, true);
            let fireNode = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).instantiate(this.fireNode);
            fireNode.parent = this.fireNode.parent;
            fireNode.active = true;
            fireNode.position = pos;
            fireNode.scale = v3(scale, scale, 1);
            fireNode.getComponent(sp.Skeleton).setSkin(skinName);
            let aniCtrl = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
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
          let chs = this.itemLayer.children;
          let index = 5;
          this.starShineArr = [];
          this.starShineIndex = index + this.choseNum - 1;
          this.showChoseIndex = 0;
          this.showChoseItemUI = null;

          for (let i = 0; i < this.choseNum; i++) {
            let itemUI = chs[index];
            index++;
            this.initStarShineItemUI(itemUI);
            this.starShineArr.push(itemUI);
          }

          this.schedule(this.addNextStarShine, 0.05, macro.REPEAT_FOREVER);
          this.scheduleOnce(this.startShowChoseItem, 3 + 2 * Math.random());
        }

        startShowChoseItem() {
          let item = this.choseArr[this.showChoseIndex];

          if (!item) {
            return;
          }

          this.showChoseItemUI = this.itemLayer.children[item.uiIndex];
          this.showChoseIndex++;
        }

        initStarShineItemUI(itemUI) {
          let uiOpacity = find("shine", itemUI).getComponent(UIOpacity);
          uiOpacity.node.active = true;
          uiOpacity.opacity = 255;
          let starNode = find("star", itemUI);
          starNode.angle = Math.random() * 360;
          let animationCtrl = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
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
          let chs = this.itemLayer.children;
          this.starShineIndex++;

          if (this.starShineIndex >= this.circleNodeNum) {
            this.starShineIndex = 0;
          }

          let itemUI = chs[this.starShineIndex];

          if (this.showChoseItemUI == itemUI) {
            // 选中了
            this.showChoseItemUI = null;
            this.unschedule(this.addNextStarShine);
            find("chose", itemUI).active = true;
            let starNode = find("star", itemUI);
            starNode.active = true;
            starNode.angle = 0;
            starNode.getComponent(UIOpacity).opacity = 255;
            let animationCtrl = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
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
          let outItemUI = this.starShineArr.shift();
          let shineNode = find("shine", outItemUI);
          tween(shineNode.getComponent(UIOpacity)).to(dt * 6, {
            opacity: 0
          }).start();
        }

        playerAddItem(item) {
          let row = this.getRowByItem(item);

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


        async showChoseResult() {
          this.unscheduleAllCallbacks();
          this.circleEnd = true;
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).propSystem.getProp((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).propIds.coin, this.coinNum);
          this.itemLayer.children.forEach(itemUI => {
            find("shine", itemUI).active = false;
            find("star", itemUI).active = false;
          });
          this.resultUILayer.active = true;
          this.resultBtnSure.active = false;
          this.resultItemLayer.removeAllChildren();
          await (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).tweenFadeIn(this.resultBgNode, 0.5);
          let itemTransform = this.resultItemNode.getComponent(UITransform);
          let itemHeight = itemTransform.height;
          let itemGap = 20;
          let chs = this.itemLayer.children;

          for (let i = 0; i < this.choseArr.length; i++) {
            let item = this.choseArr[i];
            this.scheduleOnce(() => {
              let node = chs[item.uiIndex];
              let pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).convertToWorldSpace(node);
              node = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).instantiate(node);
              node.parent = this.resultItemLayer;
              node.position = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                error: Error()
              }), cocosUtil) : cocosUtil).convertToNodeSpace(node, pos);
              let targetPos = v3(0, 0, 0);
              targetPos.y = -itemHeight * 0.5 - (itemHeight + itemGap) * i;
              tween(node).to(0.2, {
                position: targetPos
              }).to(0.1, {
                scale: v3(0.3, 0.3, 1)
              }).call(() => {
                let itemUI = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                  error: Error()
                }), cocosUtil) : cocosUtil).instantiate(this.resultItemNode);
                itemUI.parent = this.resultItemLayer;
                itemUI.position = targetPos;
                this.refreshResultItemUI(itemUI, item);
                let shineNode = find("shine", itemUI);
                shineNode.active = true;
                (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                  error: Error()
                }), cocosUtil) : cocosUtil).tweenScaleIn2(itemUI, 0.2, () => {
                  (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                    error: Error()
                  }), cocosUtil) : cocosUtil).tweenFadeOut(shineNode, 0.6);

                  if (i == this.choseArr.length - 1) {
                    this.resultBtnSure.active = true;
                    (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
                      error: Error()
                    }), cocosUtil) : cocosUtil).tweenScaleIn2(this.resultBtnSure);
                  }
                });
              }).start();
            }, i * 0.3);
          }
        }

        refreshResultItemUI(itemUI, item) {
          let row = this.getRowByItem(item);
          this.setSpriteFrame(find("icon", itemUI), row.icon);
          this.setString(find("name", itemUI), row.name);
          let info = row.info;

          if (item.name == (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop) {
            info = (_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
              error: Error()
            }), localText) : localText).coinGetHint.format(item.num);
          }

          this.setString(find("info", itemUI), info);
          let starLayer = find("starLayer", itemUI);

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
            let iconNode = find("icon", starNode);
            let icon2Node = find("icon2", starNode);
            let yinNode = find("yin", starNode);

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
          let chs = this.itemLayer.children;
          let index = 5;
          let arr = [];

          for (let i = 0; i < this.choseNum; i++) {
            let itemUI = chs[index];
            arr.push(itemUI);
            index++;
            this.scheduleOnce(() => {
              let uiOpacity = find("shine", itemUI).getComponent(UIOpacity);
              uiOpacity.node.active = true;
              uiOpacity.opacity = 0;
              tween(uiOpacity).to(0.1, {
                opacity: 255
              }).delay(0.15).to(0.1, {
                opacity: 0
              }).union().repeatForever().start();

              if (i == this.choseNum - 1) {
                this.scheduleOnce(() => {
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
          }
        }

        totalShineAnimation(endCb) {
          let time = 0.3;
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.itemLayer.children, (itemUI, index) => {
            let uiOpacity = find("shine", itemUI).getComponent(UIOpacity);
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
          let chs = this.itemLayer.children;
          let count = 0;
          let opacityTime = 0.1;
          let delayTime = 0.5;

          for (let i = 13; i >= 5; i--) {
            let node = chs[i];
            let time = count * 0.05;
            let shineNode = find("shine", node);
            shineNode.active = true;
            let uiOpacity = shineNode.getComponent(UIOpacity);
            uiOpacity.opacity = 0;
            this.scheduleOnce(() => {
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
              let sideNode = chs[(26 - i) % this.circleNodeNum];
              let sideShineNode = find("shine", sideNode);
              sideShineNode.active = true;
              let sideOpacity = sideShineNode.getComponent(UIOpacity);
              sideOpacity.opacity = 0;
              this.scheduleOnce(() => {
                tween(sideOpacity).to(opacityTime, {
                  opacity: 255
                }).delay(delayTime).to(opacityTime, {
                  opacity: 0
                }).start();
              }, time);
            }

            count++;
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

          let coin = 300;

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
//# sourceMappingURL=d3b5d2acc2259eb6082c82b1abee1a5973cf96e8.js.map