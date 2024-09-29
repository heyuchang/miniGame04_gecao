System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, find, Label, Node, ProgressBar, ResolutionPolicy, RichText, ScrollView, sp, Sprite, v3, view, Widget, myLog, tyqSDK, cocosUtil, constants, localText, msgac, audioManager, designManager, eventManager, layerManager, ResLoader, resManager, playerModel, UserData, ItemLayer, ScrollViewUtil, BaseLayer, _crd;

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

  function _reportPossibleCrUseOflocalText(extras) {
    _reporterNs.report("localText", "../../data/localText", _context.meta, extras);
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

  function _reportPossibleCrUseOflayerManager(extras) {
    _reporterNs.report("layerManager", "../../manager/layerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetConfig(extras) {
    _reporterNs.report("AssetConfig", "../../manager/resManager", _context.meta, extras);
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

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../../model/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemLayer(extras) {
    _reporterNs.report("ItemLayer", "./ItemLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScrollViewUtil(extras) {
    _reporterNs.report("ScrollViewUtil", "./ScrollViewUtil", _context.meta, extras);
  }

  _export("BaseLayer", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Component = _cc.Component;
      find = _cc.find;
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      ResolutionPolicy = _cc.ResolutionPolicy;
      RichText = _cc.RichText;
      ScrollView = _cc.ScrollView;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      v3 = _cc.v3;
      view = _cc.view;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      tyqSDK = _unresolved_3.tyqSDK;
    }, function (_unresolved_4) {
      cocosUtil = _unresolved_4.cocosUtil;
    }, function (_unresolved_5) {
      constants = _unresolved_5.constants;
    }, function (_unresolved_6) {
      localText = _unresolved_6.localText;
    }, function (_unresolved_7) {
      msgac = _unresolved_7.msgac;
    }, function (_unresolved_8) {
      audioManager = _unresolved_8.audioManager;
    }, function (_unresolved_9) {
      designManager = _unresolved_9.designManager;
    }, function (_unresolved_10) {
      eventManager = _unresolved_10.eventManager;
    }, function (_unresolved_11) {
      layerManager = _unresolved_11.layerManager;
    }, function (_unresolved_12) {
      ResLoader = _unresolved_12.ResLoader;
      resManager = _unresolved_12.resManager;
    }, function (_unresolved_13) {
      playerModel = _unresolved_13.playerModel;
    }, function (_unresolved_14) {
      UserData = _unresolved_14.UserData;
    }, function (_unresolved_15) {
      ItemLayer = _unresolved_15.ItemLayer;
    }, function (_unresolved_16) {
      ScrollViewUtil = _unresolved_16.ScrollViewUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2672bmyPkFNdbrkVilq/shn", "BaseLayer", undefined);

      __checkObsolete__(['Button', 'Component', 'EventTouch', 'find', 'Label', 'Node', 'Prefab', 'ProgressBar', 'ResolutionPolicy', 'RichText', 'ScrollView', 'sp', 'Sprite', 'SpriteFrame', 'v3', 'view', 'Widget']);

      _export("BaseLayer", BaseLayer = class BaseLayer extends Component {
        constructor() {
          super(...arguments);
          this.layerName = "DefaultLayer";
          this.layerData = {};
          this.layerCb = null;
          this.layerId = -1;
          this.pathNodeObj = new Map();
          this.resLoader = new (_crd && ResLoader === void 0 ? (_reportPossibleCrUseOfResLoader({
            error: Error()
          }), ResLoader) : ResLoader)();
          this.autoReleaseAsset = false;
          this.preLoadAssetConfigArr = void 0;
          this.eventArr = void 0;
          this.openUpdateSecond = false;
          this.updateSecondInterval = void 0;
          this.openAllBtnInteractive = true;
          this.openBtnLongPress = false;
          this.btnLongTrigTime = 0.5;
          this.btnLognTrigTimeCount = 0;
          this.btnLongTrigCount = 0;
          this.btnLongNode = null;
          this.isShowBannerAd = false;
        }

        onLoad() {
          // // 背景适配
          // let bgNode = find("bg", this.node);
          // this.screenAdapterBG(bgNode);
          // let bgNode2 = find("bg2", this.node);
          // this.screenAdapterBG(bgNode2);
          // // ui适配
          // let uiNode = find("ui", this.node);
          // this.screenAdapterUI(uiNode);
          // let uiNode2 = find("ui2", this.node);
          // this.screenAdapterUI(uiNode2);
          this.addPathNode(this.node, ""); // this.DesignResolutionHeight()
        }

        DesignResolutionHeight() {
          view.setDesignResolutionSize(720, 1660, ResolutionPolicy.FIXED_HEIGHT);
          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i("-----ResolutionPolicy.FIXED_HEIGHT");
        }

        chooseDesignResolution() {
          //    let resolute = view.getDesignResolutionSize()
          var screen1 = view.getVisibleSize();

          if (screen1.width / screen1.height > 720 / 1280) {
            view.setDesignResolutionSize(720, 1280, ResolutionPolicy.FIXED_HEIGHT);
            (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
              error: Error()
            }), myLog) : myLog).i("choose  ResolutionPolicy.FIXED_HEIGHT");
          } else {
            (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
              error: Error()
            }), myLog) : myLog).i("choose  ResolutionPolicy.FIXED_WIDTH");
            view.setDesignResolutionSize(720, 1280, ResolutionPolicy.FIXED_WIDTH);
          }
        }

        onEnable() {
          this.addButtonListener(this.node);
          this.initUI();
          this.refreshRedPoint();

          if (this.openUpdateSecond) {
            if (this.updateSecondInterval) {
              clearInterval(this.updateSecondInterval);
            }

            this.updateSecondInterval = setInterval(() => {
              this.updateSecond();
            }, 1000);
            this.updateSecond();
          }

          if (this.isShowBannerAd && !(_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
            error: Error()
          }), playerModel) : playerModel).isRecordAd) {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).showBannerAd();
          }

          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).on((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).refreshRedPoint, this.refreshRedPoint, this);
        }

        updateSecond() {}

        refreshRedPoint() {}

        initUI() {}

        onDisable() {
          this.removeEventArr(this.eventArr);
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).off((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).refreshRedPoint, this.refreshRedPoint, this);

          if (this.updateSecondInterval) {
            clearInterval(this.updateSecondInterval);
            this.updateSecondInterval = undefined;
          }

          if (this.isShowBannerAd) {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).hideBannerAd();
          }
        }

        onDestroy() {
          switch (this.layerName) {
            case (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).layers.HomeLayer:
              // 这些UI不释放资源
              return;

            default:
              break;
          }

          if (this.autoReleaseAsset) {
            this.resLoader.releaseAllAsset();
          }
        }

        addPathNode(node, path) {
          if (node != this.node) {
            this.pathNodeObj.set(path, node);
          }

          if (path) {
            path += "/";
          }

          var chs = node.children;

          for (var i = 0, len = chs.length; i < len; i++) {
            var pNode = chs[i];
            this.addPathNode(pNode, path + pNode.name);
          }
        }

        getNodeByPath(path) {
          var node = this.pathNodeObj.get(path);

          if (node) {
            return node;
          }

          node = find(path, this.node);

          if (node) {
            this.pathNodeObj.set(path, node);
            return node;
          }

          return null;
        }
        /**
         * 缩放背景图，达到满屏显示，背景图部分内容超出屏幕也没事
         * @param node 背景图节点
         */


        screenAdapterBG(node) {
          if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(node)) {
            return;
          }

          var widget = node.getComponent(Widget);

          if (widget) {
            widget.enabled = false;
          }

          var scale = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).getScreenBgAdapterScale();
          var scaleX = node.getScale().x;
          var scaleY = node.getScale().y;
          node.setScale(v3(scaleX * scale, scaleY * scale, 1));
        }
        /**
         * 缩放UI，达到屏幕适配，ui上的全部内容在屏幕内显示，如果是全屏UI，ui节点如果有widget，缩放后依然有效
         * @param node ui根节点
         */


        screenAdapterUI(node) {
          if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(node)) {
            return;
          }

          var scale = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).getScreenAdapterScale();
          var scaleX = node.getScale().x;
          var scaleY = node.getScale().y;
          node.setScale(v3(scaleX * scale, scaleY * scale, 1));
        }

        addButtonListener(node) {
          if (node.getComponent(Button)) {
            node.on("click", this.preOnButtonClick, this);

            if (this.openBtnLongPress) {
              node.on(Node.EventType.TOUCH_START, this.preOnButtonTouchStart, this);
              node.on(Node.EventType.TOUCH_MOVE, this.preOnButtonTouchMove, this);
              node.on(Node.EventType.TOUCH_END, this.preOnButtonTouchEnd, this);
              node.on(Node.EventType.TOUCH_CANCEL, this.preOnButtonTouchCancel, this);
            }
          }

          if (node.getComponent(ScrollView)) {
            var name = node.name;

            if (name.indexOf("NoUtil") == -1 && !node.getComponent(_crd && ScrollViewUtil === void 0 ? (_reportPossibleCrUseOfScrollViewUtil({
              error: Error()
            }), ScrollViewUtil) : ScrollViewUtil)) {
              node.addComponent(_crd && ScrollViewUtil === void 0 ? (_reportPossibleCrUseOfScrollViewUtil({
                error: Error()
              }), ScrollViewUtil) : ScrollViewUtil);
            }
          } // if (node.getComponent(Label)) {
          //     let label = node.getComponent(Label);
          //     label.useSystemFont = true;
          // }
          // if (node.getComponent(RichText)) {
          //     let richText = node.getComponent(RichText);
          //     richText.useSystemFont = true;
          // }


          var chs = node.children;

          for (var i = 0, max = chs.length; i < max; i++) {
            var ch = chs[i];
            this.addButtonListener(ch);
          }
        }

        preOnButtonClick(btn) {
          if (!this.openAllBtnInteractive) {
            return;
          }

          if (this.openBtnLongPress && this.btnLongTrigCount > 0) {
            this.btnLongTrigCount = 0;
            return;
          }

          var node = btn.node;
          var name = node.name;
          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i(this.layerName + " onButtonClick " + name);

          if (this["onButtonClick"]) {
            this["onButtonClick"](node, node.name);
          }

          if (name.length >= 2) {
            var top = name.substring(0, 1);
            var remain = name.substring(1, name.length);
            var key = "onClick" + top.toLocaleUpperCase() + remain;

            if (this[key]) {
              this[key](node);
            }
          }

          if (!node.hasPlayAudio) {// 如果还没播放按钮音效，就播放通用按钮音效
          }
        }

        preOnButtonLongClick(btnNode) {
          if (!this.openAllBtnInteractive) {
            return;
          }

          var name = btnNode.name;
          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i(this.layerName + " onButtonLongClick " + name);

          if (this["onButtonLongClick"]) {
            return this["onButtonLongClick"](btnNode, name);
          }

          if (name.length >= 2) {
            var top = name.substring(0, 1);
            var remain = name.substring(1, name.length);
            var key = "onLongClick" + top.toLocaleUpperCase() + remain;

            if (this[key]) {
              return this[key](btnNode);
            }
          }

          return false;
        }

        preOnButtonTouchStart(event) {
          var btnNode = event.target;
          var touch = event.touch;
          this.btnLongNode = btnNode;
          this.btnLognTrigTimeCount = 0;
          this.btnLongTrigCount = 0;
        }

        preOnButtonTouchMove(event) {}

        preOnButtonTouchEnd(event) {
          this.btnLongNode = null;
        }

        preOnButtonTouchCancel(event) {
          this.btnLongNode = null;
        }

        openPropInfoLayer2(id, num) {
          if (num === void 0) {
            num = undefined;
          }

          if (num == undefined) {
            num = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData).getInstance().getPropNumById(id);
          }

          var obj = {
            id: id,
            num: num
          };
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.PropInfoLayer2, obj);
        }

        isShowingLayer(layerName) {
          return (_crd && layerManager === void 0 ? (_reportPossibleCrUseOflayerManager({
            error: Error()
          }), layerManager) : layerManager).isShowingLayer(layerName);
        }

        showHintLayer(msg, cb) {
          var hintLayer = find("Canvas/hintLayer");
          hintLayer.active = true; // @ts-ignore

          hintLayer.cb = cb;
          this.setString(find("ui/hint", hintLayer), msg);
        }

        hideHintLayer() {
          var hintLayer = find("Canvas/hintLayer");
          hintLayer.active = false; // @ts-ignore

          if (hintLayer.cb) {
            // @ts-ignore
            hintLayer.cb();
          }
        }

        openMsgBoxLayer(hint) {
          var obj = {
            hint: hint
          };
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.MsgBoxLayer, obj);
        }

        openAwardGetLayer(awardArr) {
          if (!awardArr || awardArr.length <= 0) {
            return;
          }

          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.RewardLayer, {
            propArr: awardArr,
            notMoveAni: true
          });
        }

        openAwardInfoLayer(awardArr) {
          if (!awardArr || awardArr.length <= 0) {
            return;
          }

          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.AwardInfoLayer, {
            awardArr: awardArr
          });
        }

        setRoleSkin(roleNode, id) {
          if (id === void 0) {
            id = 0;
          }

          var skin = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData).getInstance().getHeroSkin(id);
          roleNode.getComponent(sp.Skeleton).setSkin(skin);
        }

        playAudioEffect(name, btnNode, delayTime) {
          if (!delayTime) {
            delayTime = 0;
          }

          if ((_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(btnNode)) {
            btnNode.hasPlayAudio = true;
          }

          this.scheduleOnce(() => {
            (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
              error: Error()
            }), audioManager) : audioManager).playEffect(name);

            if ((_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).isValid(btnNode)) {
              btnNode.hasPlayAudio = undefined;
            }
          }, delayTime);
        }

        onClickBtnClose(node) {
          this.closeLayer();
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
            if (baseLayer.autoReleaseAsset && baseLayer.resLoader) {
              baseLayer.resLoader.addAsset(prefab);

              if (baseLayer.preLoadAssetConfigArr) {
                baseLayer.preLoadAssetConfigArr.forEach(assetConfig => {
                  if (assetConfig.asset) {
                    baseLayer.resLoader.addAsset(assetConfig.asset);
                  }
                });
              }
            }

            if (showCb) {
              showCb();
            }
          });
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

        addEventArr(arr) {
          this.eventArr = arr;

          for (var i in arr) {
            var val = arr[i];

            if (!val) {
              continue;
            }

            (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
              error: Error()
            }), eventManager) : eventManager).on(val, this.preProcessEvent, this);
          }
        }

        removeEventArr(arr) {
          for (var i in arr) {
            var val = arr[i];

            if (!val) {
              continue;
            }

            (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
              error: Error()
            }), eventManager) : eventManager).off(val, this.preProcessEvent, this);
          }
        }

        preProcessEvent(event) {
          var ac = event.ac;
          var data = event.data;
          var key = (_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).ac2KeyObj[ac] + "Ret";

          if (this[key]) {
            this[key].call(this, data);
          }

          this.processEvent(ac, data);
        }

        processEvent(ac, data) {}

        showLackItem(itemId) {
          var itemRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, itemId);

          if (!itemRow) {
            return;
          }

          this.createNotice((_crd && localText === void 0 ? (_reportPossibleCrUseOflocalText({
            error: Error()
          }), localText) : localText).lackItemHint.format(itemRow.name));
        }

        showGetItem(itemId, num) {// let itemRow = designManager.getRowById(constants.tableName.item, itemId);
          // this.createNotice(localText.textObj.itemGet.format(itemRow.name, num));
        }

        createNotice(content) {
          (_crd && layerManager === void 0 ? (_reportPossibleCrUseOflayerManager({
            error: Error()
          }), layerManager) : layerManager).createNotice(content);
        }

        scrollViewSetData(scrollViewNode, arr, refreshItemFunc, resetPos, itemTween) {
          if (resetPos === void 0) {
            resetPos = true;
          }

          if (itemTween === void 0) {
            itemTween = false;
          }

          var scrollViewUtil = scrollViewNode.getComponent(_crd && ScrollViewUtil === void 0 ? (_reportPossibleCrUseOfScrollViewUtil({
            error: Error()
          }), ScrollViewUtil) : ScrollViewUtil);

          if (!scrollViewUtil) {
            return;
          }

          scrollViewUtil.setData(arr, (itemUI, item, index) => {
            if (refreshItemFunc) {
              refreshItemFunc(itemUI, item, index);
            }

            this.addButtonListener(itemUI);
          }, resetPos, itemTween);
        }

        scrollViewAddData(scrollViewNode, arr, resetPos) {
          if (resetPos === void 0) {
            resetPos = false;
          }

          var scrollViewUtil = scrollViewNode.getComponent(_crd && ScrollViewUtil === void 0 ? (_reportPossibleCrUseOfScrollViewUtil({
            error: Error()
          }), ScrollViewUtil) : ScrollViewUtil);

          if (!scrollViewUtil) {
            return;
          }

          scrollViewUtil.pushData(arr, resetPos);
        }

        scrollViewRefreshList(scrollViewNode) {
          var scrollViewUtil = scrollViewNode.getComponent(_crd && ScrollViewUtil === void 0 ? (_reportPossibleCrUseOfScrollViewUtil({
            error: Error()
          }), ScrollViewUtil) : ScrollViewUtil);

          if (!scrollViewUtil) {
            return;
          }

          scrollViewUtil.refreshList();
        }

        scrollViewRefreshItemUI(scrollViewNode, itemUI, item) {
          var scrollViewUtil = scrollViewNode.getComponent(_crd && ScrollViewUtil === void 0 ? (_reportPossibleCrUseOfScrollViewUtil({
            error: Error()
          }), ScrollViewUtil) : ScrollViewUtil);

          if (!scrollViewUtil) {
            return;
          }

          scrollViewUtil.refreshIndex(itemUI["index"], item);
        }

        scrollViewRefreshItemUIByIndex(scrollViewNode, index, item) {
          var scrollViewUtil = scrollViewNode.getComponent(_crd && ScrollViewUtil === void 0 ? (_reportPossibleCrUseOfScrollViewUtil({
            error: Error()
          }), ScrollViewUtil) : ScrollViewUtil);

          if (!scrollViewUtil) {
            return;
          }

          scrollViewUtil.refreshIndex(index, item);
        }

        scrollViewRemoveItemUI(scrollViewNode, itemUI, resetPos) {
          if (resetPos === void 0) {
            resetPos = false;
          }

          var scrollViewUtil = scrollViewNode.getComponent(_crd && ScrollViewUtil === void 0 ? (_reportPossibleCrUseOfScrollViewUtil({
            error: Error()
          }), ScrollViewUtil) : ScrollViewUtil);

          if (!scrollViewUtil) {
            return;
          }

          scrollViewUtil.removeByIndex(itemUI["index"], resetPos);
        }

        scrollViewRemoveItemUIByIndex(scrollViewNode, index, resetPos) {
          if (resetPos === void 0) {
            resetPos = false;
          }

          var scrollViewUtil = scrollViewNode.getComponent(_crd && ScrollViewUtil === void 0 ? (_reportPossibleCrUseOfScrollViewUtil({
            error: Error()
          }), ScrollViewUtil) : ScrollViewUtil);

          if (!scrollViewUtil) {
            return;
          }

          scrollViewUtil.removeByIndex(index, resetPos);
        }

        scrollViewScrollToEnd(scrollViewNode, time) {
          var scrollViewUtil = scrollViewNode.getComponent(_crd && ScrollViewUtil === void 0 ? (_reportPossibleCrUseOfScrollViewUtil({
            error: Error()
          }), ScrollViewUtil) : ScrollViewUtil);

          if (!scrollViewUtil) {
            return;
          }

          scrollViewUtil.scrollToEnd(time);
        }

        scrollViewScrollToItemUI(scrollViewNode, itemUI, time) {
          this.scrollViewScrollToIndex(scrollViewNode, itemUI["index"], time);
        }

        scrollViewScrollToIndex(scrollViewNode, index, time) {
          var scrollViewUtil = scrollViewNode.getComponent(_crd && ScrollViewUtil === void 0 ? (_reportPossibleCrUseOfScrollViewUtil({
            error: Error()
          }), ScrollViewUtil) : ScrollViewUtil);

          if (!scrollViewUtil || index == undefined) {
            return;
          }

          scrollViewUtil.scrollToIndex(index);
        }

        setProgressBar(progressBar, percent) {
          if (progressBar instanceof Node) {
            progressBar = progressBar.getComponent(ProgressBar);
          }

          if (progressBar) {
            progressBar.progress = percent;
          }
        }

        setNumString(node, num) {
          num = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).formatNum(num);
          this.setString(node, num);
        }

        setItemLayer(node, arr, cb) {
          var itemLayer = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).addComponentOnce(node, _crd && ItemLayer === void 0 ? (_reportPossibleCrUseOfItemLayer({
            error: Error()
          }), ItemLayer) : ItemLayer);
          itemLayer.initUI(this, arr, cb);
        }

        setNumItemLayer(node, num, cb) {
          var arr = [];

          for (var i = 0; i < num; i++) {
            arr.push(i + 1);
          }

          var itemLayer = node.getComponent(_crd && ItemLayer === void 0 ? (_reportPossibleCrUseOfItemLayer({
            error: Error()
          }), ItemLayer) : ItemLayer);

          if (!itemLayer) {
            itemLayer = node.addComponent(_crd && ItemLayer === void 0 ? (_reportPossibleCrUseOfItemLayer({
              error: Error()
            }), ItemLayer) : ItemLayer);
          }

          itemLayer.initUI(this, arr, (itemUI, item, index) => {
            if (cb) {
              cb(itemUI, item, index);
            }
          });
        }

        setPropItem(id, iconNode, num, bgNode, numNode) {
          if (num === void 0) {
            num = 0;
          }

          var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.prop, id);

          if (!row) {
            (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
              error: Error()
            }), myLog) : myLog).e("setPropItem error id:" + id);
          }

          var icon = "prop/" + row.icon;

          if (row.type == 11) {
            var wRow = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.weapon, row.weaponid);
            icon = "weapon/" + wRow.icon;
          }

          this.setSpriteFrame2(iconNode, icon);

          if (bgNode) {
            this.setSpriteFrame2(bgNode, "prop/propbg" + row.quality);
          }

          if (num > 0 && numNode) {
            this.setString(numNode, "x" + num);
          }
        } // 屏幕振动


        shakeScreen() {
          (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).tweenShakeNode((_crd && layerManager === void 0 ? (_reportPossibleCrUseOflayerManager({
            error: Error()
          }), layerManager) : layerManager).getPopLayerParentNode());
        }

        removeRenderBatch(node) {
          var itemLayer = node.parent.getComponent(_crd && ItemLayer === void 0 ? (_reportPossibleCrUseOfItemLayer({
            error: Error()
          }), ItemLayer) : ItemLayer);

          if (itemLayer && itemLayer.renderChildBatch) {
            itemLayer.renderChildBatch.removeRootItemNode(node);
          }
        }

        addRenderBatch(node) {
          var itemLayer = node.parent.getComponent(_crd && ItemLayer === void 0 ? (_reportPossibleCrUseOfItemLayer({
            error: Error()
          }), ItemLayer) : ItemLayer);

          if (itemLayer && itemLayer.renderChildBatch) {
            itemLayer.renderChildBatch.addRootItemNode(node);
          }
        }

        setString(node, info) {
          if (!node) {
            (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
              error: Error()
            }), myLog) : myLog).e("setString error:node is null", info);
            return;
          }

          info = info + "";
          var label = node.getComponent(Label);

          if (label) {
            label.string = info;
            return;
          }

          var rich = node.getComponent(RichText);

          if (rich) {
            rich.string = info;
            return;
          }
        }

        setSpriteFrame(node, name, showCb, bundleName1) {
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
          var d = name.split("_");
          var path = d[0] + "/" + name;
          var arr = name.split("|");

          if (arr.length >= 2) {
            bundleName = arr[0];
            path = arr[1];
          }

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

            if (this.autoReleaseAsset) {
              this.resLoader.addAsset(spriteFrame);
            }

            sprite.enabled = true;
            sprite.spriteFrame = spriteFrame;

            if (showCb) {
              showCb();
            }
          });
        }

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

            if (this.autoReleaseAsset) {
              this.resLoader.addAsset(spriteFrame);
            }

            sprite.enabled = true;
            sprite.spriteFrame = spriteFrame;

            if (showCb) {
              showCb();
            }
          });
        }

        setSpineData(node, name, showCb) {
          if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(node)) {
            return;
          }

          var skeleton = node.getComponent(sp.Skeleton);

          if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(skeleton)) {
            return;
          }

          skeleton.enabled = false;
          node["loadName"] = name;
          var bundleName = (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.spine;
          var spinePath = name + "/" + name;
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadSpineData(bundleName, spinePath, (err, skeletonData) => {
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
            }), cocosUtil) : cocosUtil).isValid(skeleton)) {
              return;
            }

            if (node["loadName"] != name) {
              return;
            }

            if (this.autoReleaseAsset) {
              this.resLoader.addAsset(skeletonData);
            }

            skeleton.enabled = true;
            skeleton.skeletonData = skeletonData;

            if (showCb) {
              showCb(skeleton);
            }
          });
        }

        setSpineData2(node, bundleName, name, showCb) {
          if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(node)) {
            return;
          }

          var skeleton = node.getComponent(sp.Skeleton);

          if (!(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).isValid(skeleton)) {
            return;
          }

          skeleton.enabled = false;
          node["loadName"] = name;
          var spinePath = name;
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadSpineData(bundleName, spinePath, (err, skeletonData) => {
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
            }), cocosUtil) : cocosUtil).isValid(skeleton)) {
              return;
            }

            if (node["loadName"] != name) {
              return;
            }

            if (this.autoReleaseAsset) {
              this.resLoader.addAsset(skeletonData);
            }

            skeleton.enabled = true;
            skeleton.skeletonData = skeletonData;

            if (showCb) {
              showCb(skeleton);
            }
          });
        }

        update(dt) {
          if (this.openBtnLongPress && this.btnLongNode) {
            this.btnLognTrigTimeCount += dt;

            if (this.btnLognTrigTimeCount >= this.btnLongTrigTime) {
              var isGoOn = this.preOnButtonLongClick(this.btnLongNode);
              this.btnLongTrigCount++;

              if (!isGoOn) {
                // 默认只会触发一次
                this.btnLongNode = null;
                this.btnLognTrigTimeCount = 0;
              }
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=96eb3928e6f1c55652091270430293e37f7d9f4e.js.map