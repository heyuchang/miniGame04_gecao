System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, Node, Prefab, Sprite, tween, UITransform, v3, view, _decorator, myLog, tyqSDK, cocosUtil, constants, audioManager, designManager, layerManager, ResLoader, resManager, playerModel, ScrollViewUtil, _dec, _class, _class2, _descriptor, _crd, ccclass, property, BaseUILayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../../common/myLog", _context.meta, extras);
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

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../../manager/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflayerManager(extras) {
    _reporterNs.report("layerManager", "../../manager/layerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResLoader(extras) {
    _reporterNs.report("ResLoader", "../../manager/resManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresManager(extras) {
    _reporterNs.report("resManager", "../../manager/resManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerModel(extras) {
    _reporterNs.report("playerModel", "../../model/playerModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScrollViewUtil(extras) {
    _reporterNs.report("ScrollViewUtil", "../base/ScrollViewUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      view = _cc.view;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      tyqSDK = _unresolved_3.tyqSDK;
    }, function (_unresolved_4) {
      cocosUtil = _unresolved_4.cocosUtil;
    }, function (_unresolved_5) {
      constants = _unresolved_5.constants;
    }, function (_unresolved_6) {
      audioManager = _unresolved_6.audioManager;
    }, function (_unresolved_7) {
      designManager = _unresolved_7.designManager;
    }, function (_unresolved_8) {
      layerManager = _unresolved_8.layerManager;
    }, function (_unresolved_9) {
      ResLoader = _unresolved_9.ResLoader;
      resManager = _unresolved_9.resManager;
    }, function (_unresolved_10) {
      playerModel = _unresolved_10.playerModel;
    }, function (_unresolved_11) {
      ScrollViewUtil = _unresolved_11.ScrollViewUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "309d0hb9ntM15cYJx7d98Qw", "BaseUILayer", undefined);

      __checkObsolete__(['Button', 'Component', 'Node', 'Prefab', 'Sprite', 'SpriteFrame', 'tween', 'UITransform', 'v3', 'view', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BaseUILayer", BaseUILayer = (_dec = ccclass('BaseUILayer'), _dec(_class = (_class2 = class BaseUILayer extends Component {
        constructor() {
          super(...arguments);
          this.resLoader = new (_crd && ResLoader === void 0 ? (_reportPossibleCrUseOfResLoader({
            error: Error()
          }), ResLoader) : ResLoader)();
          this.layerId = -1;
          this.layerData = {};

          _initializerDefineProperty(this, "isShowBanner", _descriptor, this);
        }

        onLoad() {// super.onLoad();
          // this.initLayout()
        }

        onEnable() {
          if (this.isShowBanner && !(_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).isRecordAd) {
            //  myLog.i("展示banner")
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).showBannerAd();
          }
        }

        getScreenScale() {
          var screen1 = view.getVisibleSize();
          var resolute = view.getDesignResolutionSize();
          var scale = 1;

          if (screen1.width / screen1.height <= 720 / 1280) {
            scale = screen1.width / resolute.width;
          } else {
            scale = screen1.height / resolute.height;
          }

          return scale;
        }

        toast(content) {
          (_crd && layerManager === void 0 ? (_reportPossibleCrUseOflayerManager({
            error: Error()
          }), layerManager) : layerManager).createNotice(content);
        }

        onDisable() {
          if (this.isShowBanner) {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).hideBannerAd();
          }
        }

        onDestroy() {}

        setSpriteFrame2(node, name, showCb, bundleName1) {
          if (bundleName1 === void 0) {
            bundleName1 = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.icon;
          }

          if (!name) {
            return;
          }

          if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(node)) {
            return;
          }

          var sprite = node.getComponent(Sprite);

          if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(sprite)) {
            return;
          }

          sprite.enabled = false;
          node["loadName"] = name;
          var bundleName = bundleName1;
          var path = name;
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadSpriteFrame(bundleName, path, (err, spriteFrame) => {
            if (err) {
              return;
            }

            if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).isValid(node)) {
              return;
            }

            if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).isValid(sprite)) {
              return;
            }

            if (node["loadName"] != name) {
              return;
            }

            this.resLoader.addAsset(spriteFrame);
            sprite.enabled = true;
            sprite.spriteFrame = spriteFrame;

            if (showCb) {
              showCb(sprite.node);
            }
          });
        }

        openLayer(layerName, data, cb, showCb) {
          // 默认每个弹窗只允许同时显示一个
          if (typeof data == "function") {
            cb = data;
            data = null;
          }

          (_crd && layerManager === void 0 ? (_reportPossibleCrUseOflayerManager({
            error: Error()
          }), layerManager) : layerManager).openSingleLayer(layerName, data, cb, (baseLayer, prefab) => {
            if (baseLayer.resLoader && prefab) {
              baseLayer.resLoader.addAsset(prefab);
            }

            if (showCb) {
              showCb();
            }
          });
        }

        addTopUILayer(layerName) {
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadAsset((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.layer, layerName, Prefab, null, (err, prefab) => {
            if (err) {
              (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
                error: Error()
              }), myLog) : myLog).e("LayerManager.openLayer error:" + err.message, layerName, err);
              return;
            }

            var node = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).instantiate(prefab);
            var com = node.getComponent(layerName) || node.addComponent(layerName); // 添加到节点上后，会马上触发onLoad和onEnable回调，而start方法是在首次执行update之前被调用

            node.parent = this.node;
          });
        }

        onClickClose() {
          this.closeLayer();
        }

        closeLayer(layerId) {
          if (!layerId) {
            layerId = this.layerId;
          }

          if (layerId && layerId != -1) {
            (_crd && layerManager === void 0 ? (_reportPossibleCrUseOflayerManager({
              error: Error()
            }), layerManager) : layerManager).closeLayer(layerId);
            return;
          }

          this.node.destroy();
        }

        stringToArr(str) {
          var index = str.indexOf("[");
          var endIndex = str.indexOf("]");
          var newStr = str.substring(index + 1, endIndex);
          return newStr.split(",");
        }

        fitScrollView(curview, minHeigth, maxHeigth) {
          var windowSize = view.getVisibleSize();
          var resolute = view.getDesignResolutionSize();
          var scale = 1;

          if (windowSize.width / windowSize.height <= 720 / 1280) {
            scale = windowSize.width / resolute.width;
          } else {
            scale = windowSize.height / resolute.height;
          }

          curview.getComponent(UITransform).height = Math.min(maxHeigth, minHeigth + (windowSize.height / scale / 2 - 1280 / 2));
        }

        fitNodeWidget(node, posy) {
          var windowSize = view.getVisibleSize();
          var resolute = view.getDesignResolutionSize();
          var scale = 1;

          if (windowSize.width / windowSize.height <= 720 / 1280) {
            scale = windowSize.width / resolute.width;
          } else {
            scale = windowSize.height / resolute.height;
          }

          node.position = v3(node.position.x, 0 - windowSize.height / scale / 2 + posy, node.position.z);
          console.log("fitNodeWidget " + node.name, node.position.y);
        }

        scrollViewSetData(scrollViewNode, arr, refreshItemFunc, data, notResetPos) {
          var scrollViewUtil = scrollViewNode.getComponent(_crd && ScrollViewUtil === void 0 ? (_reportPossibleCrUseOfScrollViewUtil({
            error: Error()
          }), ScrollViewUtil) : ScrollViewUtil);

          if (!scrollViewUtil) {
            return;
          }

          scrollViewUtil.setData(arr, (itemUI, item, index) => {
            if (refreshItemFunc) {
              refreshItemFunc(itemUI, item, index, data);
            } //  this.addButtonListener(itemUI);

          });
        }

        setImageCustomSize(node, size) {
          var width = node.getComponent(UITransform).width;
          var height = node.getComponent(UITransform).height;
          var scale = Math.min(size / width, size / height);
          var newWidth = width * scale;
          var newHeight = height * scale;
          node.getComponent(UITransform).width = newWidth;
          node.getComponent(UITransform).height = newHeight; //node.scale = v3(scale, scale, 1)
        }

        addButtonHander(btnComponent, target, com, hander, customEventData) {
          if (btnComponent instanceof Button) {} else {
            if (btnComponent.getComponent(Button)) {
              btnComponent = btnComponent.getComponent(Button);
            } else {
              btnComponent = btnComponent.addComponent(Button);
            }
          }

          btnComponent.transition = Button.Transition.SCALE;
          var eventHander = new Component.EventHandler();
          eventHander.target = target;
          eventHander.component = com;
          eventHander.handler = hander;
          eventHander.customEventData = customEventData;
          btnComponent.clickEvents = [eventHander];
        }

        showGetReward(rewardArr) {
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).playEffect("coin");
          rewardArr.forEach((element, index) => {
            var propData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.prop, element.Id);
            var icon = "prop/" + propData.icon;

            if (propData.type == 11) {
              var weaponData = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.weapon, propData.weaponid);
              icon = "weapon/" + weaponData.icon;
            }

            if (propData.type == 1) {
              this.playCoinFlyAnim(8, icon, v3(0, 60, 0), v3(200, 600, 0), 40);
            } else if (propData.type == 10) {
              this.playCoinFlyAnim(8, icon, v3(0, -60, 0), v3(-300, 600, 0), 40);
            } else if (propData.type == 9) {
              this.playCoinFlyAnim(8, icon, v3(0, -60, 0), v3(50, 600, 0), 40);
            } else if (propData.type == 8 || propData.type == 11 || propData.type == 17) {
              this.playCoinFlyAnim(element.Num, icon, v3(0, 0, 0), v3(-150, -600, 0), 20, 100, index * 0.02);
            } else {
              this.playCoinFlyAnim(8, icon, v3(0, 0, 0), v3(-150, -600, 0), 20, 100, index * 0.01);
            }
          });
        }
        /**金币落袋具体实现方法 */


        playCoinFlyAnim(count, iconpath, startPos, endPos, r, iconSize, delay) {
          if (r === void 0) {
            r = 50;
          }

          if (iconSize === void 0) {
            iconSize = 0;
          }

          if (delay === void 0) {
            delay = 0;
          }

          //金币分散成圆
          var points = this.getCirclePoints(r, startPos, count);
          var coinNodeList = points.map(pos => {
            var coin = new Node("Sprite");
            coin.addComponent(Sprite);

            if (iconSize > 0) {
              var self = this;

              var fun = function fun(sprite) {
                self.setImageCustomSize(sprite, iconSize);
              };

              this.setSpriteFrame2(coin, iconpath, fun);
            } else {
              this.setSpriteFrame2(coin, iconpath);
            }

            coin.layer = this.node.layer; // cc.find('Canvas').addChild(coin);

            this.node.addChild(coin);
            coin.setPosition(pos.x, pos.y, 0);
            coin.scale = v3(0, 0, 0);
            tween(coin).to(0.2, {
              scale: v3(1.2, 1.2, 1.2)
            }).to(0.2, {
              scale: v3(1, 1, 1)
            }).union().repeatForever().start();
            return {
              node: coin,
              startPos: startPos,
              midPos: pos,
              endPos: endPos,
              dis: this.calcDistance(pos, endPos)
            };
          }); //执行动作

          var i = 0;
          coinNodeList.forEach((item, idx) => {
            i++;
            tween(item.node).to(0.15, {
              position: v3(item.midPos.x, item.midPos.y, 0)
            }) //初始位置
            .delay(idx * 0.05 + 0.5 + delay).to(0.35, {
              position: v3(item.endPos.x, item.endPos.y, 0)
            }) //终点
            .call(() => {
              item.node.destroy();
            }).union().start();
          });
        }

        getCirclePoints(r, pos, count, randomScope) {
          if (randomScope === void 0) {
            randomScope = 50;
          }

          var points = [];

          for (var i = 0; i < count; i++) {
            var radians = Math.PI / 180 * Math.round(360 / count);
            var x = pos.x + r * Math.sin(radians * i);
            var y = pos.y + r * Math.cos(radians * i);
            points.unshift(v3(x + Math.random() * randomScope, y + Math.random() * randomScope, 0));
          }

          return points;
        }
        /**
        * 已知两点求距离
        * @param {cc.Vec2} pos1
        * @param {cc.Vec2} pos2
        */


        calcDistance(pos1, pos2) {
          var xdiff = pos1.x - pos2.x;
          var ydiff = pos1.y - pos2.y;
          var dis = Math.pow(xdiff * xdiff + ydiff * ydiff, 0.5);
          return dis;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isShowBanner", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e9b9a1eddab8d552c1994a8de0131fe59f222de2.js.map