System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, Component, SpriteFrame, Texture2D, _decorator, Node, Sprite, Wechat, Channel, tyqAdManager, tyqSDKConfig, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, beHaviorComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWechat(extras) {
    _reporterNs.report("Wechat", "./platform/wechat/wechat", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannel(extras) {
    _reporterNs.report("Channel", "./tyqAdManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqAdManager(extras) {
    _reporterNs.report("tyqAdManager", "./tyqAdManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftyqSDKConfig(extras) {
    _reporterNs.report("tyqSDKConfig", "./tyqSDKConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
      Component = _cc.Component;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      Wechat = _unresolved_2.Wechat;
    }, function (_unresolved_3) {
      Channel = _unresolved_3.Channel;
      tyqAdManager = _unresolved_3.tyqAdManager;
    }, function (_unresolved_4) {
      tyqSDKConfig = _unresolved_4.tyqSDKConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06ca9tRK/tHx7wBwgTDyozz", "beHaviorComponent", undefined);

      __checkObsolete__(['assetManager', 'Component', 'SpriteFrame', 'Texture2D', '_decorator', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("beHaviorComponent", beHaviorComponent = (_dec = ccclass('beHaviorComponent'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        tooltip: "广告业务1：系统分配，0：自定义"
      }), _dec4 = property({
        tooltip: "强制0：广告，1分享，strategy == 1时才生效"
      }), _dec(_class = (_class2 = class beHaviorComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "icon", _descriptor, this);

          _initializerDefineProperty(this, "strategy", _descriptor2, this);

          _initializerDefineProperty(this, "currentShow", _descriptor3, this);

          this.isClick = false;
        }

        onEnable() {}

        start() {
          if (!(_crd && tyqSDKConfig === void 0 ? (_reportPossibleCrUseOftyqSDKConfig({
            error: Error()
          }), tyqSDKConfig) : tyqSDKConfig).isOpenBeHavior) {
            console.log("beHaviorComponent destroy");
            this.destroy();
            return;
          }

          this.node.on(Node.EventType.TOUCH_START, () => {
            console.log("beHaviorComponent 点击");
            this.isClick = true;
          }, this);

          if ((_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getChannel() != (_crd && Channel === void 0 ? (_reportPossibleCrUseOfChannel({
            error: Error()
          }), Channel) : Channel).WECHAT) {
            return;
          }

          if (this.strategy == 1) {
            if ((_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
              error: Error()
            }), Wechat) : Wechat).isShareBehavior()) {
              this.loadAsset("icon", "prop/ui_Share", SpriteFrame, null, (err, sp) => {
                this.icon.getComponent(Sprite).spriteFrame = sp;
              });
              (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
                error: Error()
              }), tyqAdManager) : tyqAdManager).reportShareBehavior(1, this.strategy, 1);
            } else {
              (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
                error: Error()
              }), tyqAdManager) : tyqAdManager).reportShareBehavior(1, this.strategy, 0);
            }
          } else {
            if (this.currentShow == 1) {
              this.loadAsset("icon", "prop/ui_Share", SpriteFrame, null, (err, sp) => {
                this.icon.getComponent(Sprite).spriteFrame = sp;
              });
              (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
                error: Error()
              }), tyqAdManager) : tyqAdManager).reportShareBehavior(1, this.strategy, 1);
            } else {
              (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
                error: Error()
              }), tyqAdManager) : tyqAdManager).reportShareBehavior(1, this.strategy, 0);
            }
          }
        }

        onDisable() {
          if ((_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
            error: Error()
          }), tyqAdManager) : tyqAdManager).getChannel() != (_crd && Channel === void 0 ? (_reportPossibleCrUseOfChannel({
            error: Error()
          }), Channel) : Channel).WECHAT) {
            return;
          }

          if (this.strategy == 1) {
            if ((_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
              error: Error()
            }), Wechat) : Wechat).isShareBehavior()) {
              this.loadAsset("icon", "prop/ui_Share", SpriteFrame, null, (err, sp) => {
                this.icon.getComponent(Sprite).spriteFrame = sp;
              });
              (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
                error: Error()
              }), tyqAdManager) : tyqAdManager).reportShareBehavior(this.isClick ? 4 : 3, this.strategy, 1);
            } else {
              (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
                error: Error()
              }), tyqAdManager) : tyqAdManager).reportShareBehavior(this.isClick ? 4 : 3, this.strategy, 0);
            }
          } else {
            if (this.currentShow == 1) {
              this.loadAsset("icon", "prop/ui_Share", SpriteFrame, null, (err, sp) => {
                this.icon.getComponent(Sprite).spriteFrame = sp;
              });
              (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
                error: Error()
              }), tyqAdManager) : tyqAdManager).reportShareBehavior(this.isClick ? 4 : 3, this.strategy, 1);
            } else {
              (_crd && tyqAdManager === void 0 ? (_reportPossibleCrUseOftyqAdManager({
                error: Error()
              }), tyqAdManager) : tyqAdManager).reportShareBehavior(this.isClick ? 4 : 3, this.strategy, 0);
            }
          }
        }
        /**
        * 从bundle中加载某个资源，优先使用缓存中的
        * @param bundleName bundle名称
        * @param path 资源路径
        * @param assetType 资源类型
        * @param onProgress 加载进度回调
        * @param onComplete 加载完成回调
        */


        loadAsset(bundleName, path, assetType, onProgress, onComplete) {
          if (assetType == SpriteFrame) {
            path += "/spriteFrame";
          } else if (assetType == Texture2D) {
            path += "/texture";
          }

          let bundle = assetManager.getBundle(bundleName);

          if (bundle && bundle.get(path, assetType)) {
            if (onComplete) {
              onComplete(null, bundle.get(path, assetType));
            }

            return;
          }

          let loadAssetFunc = () => {
            bundle.load(path, assetType, (finish, total) => {
              if (onProgress) {
                onProgress(finish / total);
              }
            }, (err, asset) => {
              if (err) {
                console.log("ResManager.loadAsset error:" + err.message, "bundleName:" + bundleName, "path:" + path, err);

                if (onComplete) {
                  onComplete(err);
                }

                return;
              }

              if (onComplete) {
                onComplete(null, asset);
              }
            });
          };

          if (!bundle) {
            assetManager.loadBundle(bundleName, (err, retBundle) => {
              if (err) {
                if (onComplete) {
                  onComplete(err);
                }

                return;
              }

              bundle = retBundle;
              loadAssetFunc();
            });
            return;
          }

          loadAssetFunc();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "strategy", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "currentShow", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=992b6bb32ad03140edbb60ccfc592b834ebb7583.js.map