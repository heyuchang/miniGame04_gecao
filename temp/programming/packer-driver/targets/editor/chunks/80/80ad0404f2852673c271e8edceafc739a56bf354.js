System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ProgressBar, Sprite, _decorator, WECHAT, sdkManager, GLoginState, CronCtr, ServerCtr, ChannelFlag, tyqSDK, constants, designManager, layerManager, resManager, playerModel, BaseLayer, _dec, _class, _crd, ccclass, property, LoadingLayer;

  function _reportPossibleCrUseOfsdkManager(extras) {
    _reporterNs.report("sdkManager", "../../../sdk/sdkManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGLoginState(extras) {
    _reporterNs.report("GLoginState", "../../../tyqSDK/network/conf", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCronCtr(extras) {
    _reporterNs.report("CronCtr", "../../../tyqSDK/network/CronCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerCtr(extras) {
    _reporterNs.report("ServerCtr", "../../../tyqSDK/network/ServerCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelFlag(extras) {
    _reporterNs.report("ChannelFlag", "../../../tyqSDK/tyqSDK", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../../../tyqSDK/tyqSDK", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflayerManager(extras) {
    _reporterNs.report("layerManager", "../../manager/layerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresManager(extras) {
    _reporterNs.report("resManager", "../../manager/resManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerModel(extras) {
    _reporterNs.report("playerModel", "../../model/playerModel", _context.meta, extras);
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
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
    }, function (_ccEnv) {
      WECHAT = _ccEnv.WECHAT;
    }, function (_unresolved_2) {
      sdkManager = _unresolved_2.sdkManager;
    }, function (_unresolved_3) {
      GLoginState = _unresolved_3.GLoginState;
    }, function (_unresolved_4) {
      CronCtr = _unresolved_4.default;
    }, function (_unresolved_5) {
      ServerCtr = _unresolved_5.default;
    }, function (_unresolved_6) {
      ChannelFlag = _unresolved_6.ChannelFlag;
      tyqSDK = _unresolved_6.tyqSDK;
    }, function (_unresolved_7) {
      constants = _unresolved_7.constants;
    }, function (_unresolved_8) {
      designManager = _unresolved_8.designManager;
    }, function (_unresolved_9) {
      layerManager = _unresolved_9.layerManager;
    }, function (_unresolved_10) {
      resManager = _unresolved_10.resManager;
    }, function (_unresolved_11) {
      playerModel = _unresolved_11.playerModel;
    }, function (_unresolved_12) {
      BaseLayer = _unresolved_12.BaseLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bf333MQLIJKFoSmNUD9RvOw", "LoadingLayer", undefined);

      __checkObsolete__(['Node', 'ProgressBar', 'Sprite', 'SpriteFrame', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadingLayer", LoadingLayer = (_dec = ccclass('LoadingLayer'), _dec(_class = class LoadingLayer extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor(...args) {
          super(...args);
          this.progressBar = void 0;
          this.progress = 0;
          this.percentNode = void 0;
          this.flagNode = void 0;
          this.progressLength = 428;
          this.startGap = -202;
          this.designResProgress = 0;
          this.designResPercent = 0.1;
          this.bundleArrProgress = 0;
          this.bundleArrPercent = 0.8;
          this.bundleLoadingTime = -1;
          this.bundleLoadingMaxTime = 6;
          this.layerProgress = 0;
          this.layerPercent = 0.1;
          this.spriteFrameArr = [];
          this.isLogined = false;
        }

        onLoad() {
          super.onLoad();
          this.percentNode = this.getNodeByPath("ui/progressBar/percent");
          this.setString(this.percentNode, "0%");
          this.progressBar = this.getNodeByPath("ui/progressBar").getComponent(ProgressBar);
          this.setProgressBar(this.progressBar, this.progress);
          this.flagNode = this.getNodeByPath("ui/progressBar/flag");
          let pos = this.flagNode.getPosition();
          pos.x = this.startGap;
          this.flagNode.setPosition(pos);
          this.screenAdapterBG(this.getNodeByPath("bg"));
          this.collectAllSpriteFrame(this.node);
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).initGame();
          (_crd && sdkManager === void 0 ? (_reportPossibleCrUseOfsdkManager({
            error: Error()
          }), sdkManager) : sdkManager).initSDK();

          if ((_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).channel == (_crd && ChannelFlag === void 0 ? (_reportPossibleCrUseOfChannelFlag({
            error: Error()
          }), ChannelFlag) : ChannelFlag).WECHAT_JJWS) {
            (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).gameName = "jjws";
          } // 游戏名字处理


          let chs = this.getNodeByPath("ui/logo").children;

          for (let node of chs) {
            node.active = false;
          } // switch (tyqSDK.channel) {
          //     case ChannelFlag.WECHAT_JJWS:
          //         this.getNodeByPath("ui/logo/jjws").active = true;
          //         break;
          //     default:
          //         this.getNodeByPath("ui/logo/mrtgd").active = true;
          //         break;
          // }
          //使用本地登录微信账号
          //  let accountNode = this.getNodeByPath("account")
          // accountNode.active = false
          // if(playerModel.isInDevelopmentEnvironment() && HTML5){
          //     accountNode.active = HTML5
          // }
          //微信登录


          if (WECHAT) {
            (_crd && CronCtr === void 0 ? (_reportPossibleCrUseOfCronCtr({
              error: Error()
            }), CronCtr) : CronCtr).getInstance().init(); //开启心跳
          } else {
            (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().loginState = (_crd && GLoginState === void 0 ? (_reportPossibleCrUseOfGLoginState({
              error: Error()
            }), GLoginState) : GLoginState).loginWithoutAccount;
          }
        }

        onClickLoginBtn() {// let account = this.getNodeByPath("account/AccountLabel").getComponent(Label)!
          // ServerCtr.GetInstance().reqLoginByAccount(account.string, "")
        }

        onEnable() {
          super.onEnable();
          this.loadDesignRes(() => {
            // 加载bundle
            this.bundleLoadingTime = 0;
            let bundleArr = [(_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.common, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.hint, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.icon, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.layer, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.monster, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.prefab, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.spine, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.ui, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.bullet, (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.wwqVec];
            (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
              error: Error()
            }), resManager) : resManager).loadBundleArr(bundleArr, percent => {
              this.bundleArrProgress = percent;
            }, () => {
              this.bundleArrProgress = 1; // 再去加载其他需要的资源

              this.loadCommonLayerRes();
            });
          });
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).eventSendCustomEvent("进入加载页", "玩家人数");
        }

        onDisable() {
          super.onDisable();
        }

        onDestroy() {
          super.onDestroy();
          this.releaseAllSpriteFrame();
        }

        collectAllSpriteFrame(node) {
          let sp = node.getComponent(Sprite);

          if (sp && sp.spriteFrame) {
            this.spriteFrameArr.push(sp.spriteFrame);
          }

          let chs = node.children;

          for (let i = 0; i < chs.length; i++) {
            let ch = chs[i];
            this.collectAllSpriteFrame(ch);
          }
        }

        releaseAllSpriteFrame() {
          for (let i = 0; i < this.spriteFrameArr.length; i++) {
            let spriteFrame = this.spriteFrameArr[i];
            spriteFrame.decRef();
          }

          this.spriteFrameArr = [];
        }

        loadDesignRes(cb) {
          // 加载策划表格数据
          (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).loadAllDesignTable(percent => {
            this.designResProgress = percent;
          }, () => {
            this.designResProgress = 1;

            if (cb) {
              cb();
            }
          });
        }

        loadCommonLayerRes() {
          // 加载layer资源
          (_crd && layerManager === void 0 ? (_reportPossibleCrUseOflayerManager({
            error: Error()
          }), layerManager) : layerManager).loadCommonLayers(percent => {
            this.layerProgress = percent;
          }, () => {
            this.layerProgress = 1;
          });
        }

        openHomeLayer() {
          this.closeLayer();
          this.openLayer((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).layers.HomeLayer);
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).eventSendCustomEvent("进入游戏主界面", "玩家人数");
        }

        onButtonClick(node, name) {
          switch (name) {
            default:
              break;
          }
        }

        update(dt) {
          if (!this.progressBar) {
            return;
          }

          if (this.bundleLoadingTime >= 0) {
            this.bundleLoadingTime += dt;
            let p = this.bundleLoadingTime / this.bundleLoadingMaxTime;

            if (p > 1) {
              p = 1;
            }

            if (p > this.bundleArrProgress) {
              this.bundleArrProgress = p;
            }

            if (this.bundleArrProgress >= 1) {
              // 去除小数
              this.bundleArrProgress = 1;
            }
          }

          let progress = this.designResProgress * this.designResPercent + this.bundleArrProgress * this.bundleArrPercent + this.layerProgress * this.layerPercent; // 防止计算过后，是0.999999的情况    

          progress = Math.ceil(progress * 10000) / 10000;

          if (progress > this.progressBar.progress) {
            this.setProgressBar(this.progressBar, progress);
            this.setString(this.percentNode, Math.ceil(progress * 100) + "%");
            let pos = this.flagNode.getPosition();
            pos.x = progress * this.progressLength + this.startGap;
            this.flagNode.setPosition(pos);
          }

          if (progress >= 1) {
            // myLog.i("load end:" + ServerCtr.GetInstance().loginState);
            if ((_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().loginState == (_crd && GLoginState === void 0 ? (_reportPossibleCrUseOfGLoginState({
              error: Error()
            }), GLoginState) : GLoginState).noYet) {
              return;
            } // if (ServerCtr.GetInstance().loginState == GLoginState.loginFail) {
            //     this.showHintLayer("登陆失败，请保证网络畅通后，重启游戏", () => {
            //         game.restart();
            //     });
            //     return;
            // }


            this.progressBar = undefined;
            (_crd && playerModel === void 0 ? (_reportPossibleCrUseOfplayerModel({
              error: Error()
            }), playerModel) : playerModel).init();
            this.openHomeLayer();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=80ad0404f2852673c271e8edceafc739a56bf354.js.map