System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, tyqSDK, WXCustomAd, _crd, EType;

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../../tyqSDK", _context.meta, extras);
  }

  _export({
    WXCustomAd: void 0,
    EType: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      tyqSDK = _unresolved_2.tyqSDK;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "66f499zhQ5ApIF9FuOwpPWZ", "WXCustomAd", undefined);

      (function (EType) {
        EType[EType["rect"] = 1] = "rect";
        EType[EType["horizontal"] = 2] = "horizontal";
        EType[EType["vertical"] = 3] = "vertical";
        EType[EType["grid"] = 4] = "grid";
      })(EType || _export("EType", EType = {}));

      _export("WXCustomAd", WXCustomAd = class WXCustomAd {
        constructor() {
          this.cb = void 0;
        }

        /**
         * 设置广告id
         * @param rectid 矩阵样式id
         * @param hid 横向样式id
         * @param vid 竖向样式id
         * @param oneid 单格子样式id
         */
        static setadunit(rectid, hid, vid, oneid) {
          this._customc_rect_adunit = rectid;
          this._customc_h_adunit = hid;
          this._customc_v_adunit = vid;
          this._customc_one_adunit = oneid;
        }
        /**
         * 创建一个原生广告对象
         * @param flag 创建来源标识（用标识来控制显示和隐藏）
         * @param type 1矩阵；2横向；3竖向；4单格子
         * @param pos 位置(对象可包含left、right、top、bottom、centerX、centerY字段)。分别表示距离左右上下和中心点的距离
         * @param adSize 广告尺寸
         * @param extraId 指定广告id参数
         * @param failcb:当未拉取到广告（目前仅限报1004错误，如拉取其他错误需自行更改回调）之后，可执行回调。 
         * @returns 
         */


        static createCustomAd(flag, type, pos, adSize, extraId, failcb) {
          if (!window.wx) return;

          if (!this.sysInfo) {
            this.sysInfo = wx.getSystemInfoSync();
          }

          var version = this.sysInfo.SDKVersion;
          var ad = null;
          var id = "";
          var self = this;

          if (failcb) {
            this.cb = failcb;
          }

          if (type == 1) {
            id = this._customc_rect_adunit[this.rand(0, this._customc_rect_adunit.length - 1)];
          } else if (type == 2) {
            id = this._customc_h_adunit[this.rand(0, this._customc_h_adunit.length - 1)];
          } else if (type == 3) {
            id = this._customc_v_adunit[this.rand(0, this._customc_v_adunit.length - 1)];
          } else if (type == 4) {
            id = this._customc_one_adunit[this.rand(0, this._customc_one_adunit.length - 1)];
          }

          if (extraId && extraId !== "") {
            if (typeof extraId == "string") {
              id = extraId;
            } else if (extraId instanceof Array) {
              id = extraId[this.rand(0, extraId.length - 1)];
            }
          } //id不存在


          if (id == "") return;
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).log("显示原生模板广告", flag, this._ads, this._waits); //缓存有

          if (this._ads[flag]) {
            ad = this._ads[flag];
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log("缓存有");
            if (!ad.isShow()) ad.show();
          } else if (this.compareVersion(version, '2.11.1') >= 0) {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log("创建原生模板广告" + flag, "id:" + id, "pos:", pos);
            var p = self.getPos(adSize, pos);
            ad = wx.createCustomAd({
              adUnitId: id,
              adIntervals: 30,
              style: {
                top: p.top,
                left: p.left,
                width: adSize.width,
                // 用于设置组件宽度，只有部分模板才支持，如矩阵格子模板
                fixed: false // fixed 只适用于小程序环境

              }
            });
            ad.onLoad(() => {
              self._ads[flag] = ad;

              var index = self._waits.indexOf(flag);

              (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).log("原生模板广告加载完成：" + flag, self._waits, index);
              if (index == -1) ad.show();else {
                self._waits = self._waits.filter(x => x != flag); // self._waits.splice(index, 1);

                ad.hide().then(() => {}).catch(() => {
                  // self.hideCustomAd(flag);
                  (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                    error: Error()
                  }), tyqSDK) : tyqSDK).log("第二次hide");
                  ad.hide().catch(() => {
                    (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                      error: Error()
                    }), tyqSDK) : tyqSDK).log("第三次hide");
                  });
                });
              }
            });
            ad.onError(res => {
              (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).log('原生模板广告加载失败:', res.errCode, ' ', res.errMsg);

              if (parseInt(res.errCode) === 1004 && this.cb) {
                (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                  error: Error()
                }), tyqSDK) : tyqSDK).log("拉取失败");
                this.cb();
              }
            });
            ad.onClose(() => {
              (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).log("原生模板广告关闭");
            });
          } else {// 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // wx.showModal({
            //     title: '提示',
            //     content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
            // })
          }
        }

        static rand(min, max) {
          return min + Math.floor(Math.random() * (max - min + 1));
        }
        /**
         * 隐藏原生模板广告
         * @param flag 
         */


        static hideCustomAd(flag) {
          var ad = null;
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).log("隐藏原生模板广告", flag, this._ads, this._waits);

          if (this._ads[flag]) {
            ad = this._ads[flag];
            if (ad.isShow()) ad.hide().then(() => {}).catch(() => {
              // self.hideCustomAd(flag);
              (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).log("第二次hide");
              ad.hide().catch(() => {
                (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                  error: Error()
                }), tyqSDK) : tyqSDK).log("第三次hide");
              });
            });
          } else {
            if (this._waits.indexOf(flag) == -1) {
              this._waits.push(flag);
            }
          }
        }

        static destroyCustomAd(flag) {
          if (this._ads[flag]) {
            this._ads[flag].destroy();

            this._ads[flag] = null;
          }
        }

        static compareVersion(v1, v2) {
          v1 = v1.split('.');
          v2 = v2.split('.');
          var len = Math.max(v1.length, v2.length);

          while (v1.length < len) {
            v1.push('0');
          }

          while (v2.length < len) {
            v2.push('0');
          }

          for (var i = 0; i < len; i++) {
            var num1 = parseInt(v1[i]);
            var num2 = parseInt(v2[i]);

            if (num1 > num2) {
              return 1;
            } else if (num1 < num2) {
              return -1;
            }
          }

          return 0;
        }
        /**
         * 获取实际的位置
         * @param adSize 广告尺寸
         * @param pos 游戏中的相对位置
         * @returns 
         */


        static getPos(adSize, pos) {
          if (!this.sysInfo) {
            this.sysInfo = wx.getSystemInfoSync();
          }

          var sysInfo = this.sysInfo;
          var w = adSize.width;
          var h = adSize.height;
          var sc_w = sysInfo.windowWidth / cc.winSize.width;
          var sc_h = sysInfo.windowHeight / cc.winSize.height;
          var l = (sysInfo.windowWidth - w) / 2;
          var t = (sysInfo.windowHeight - h) / 2;
          if (pos && pos.left != undefined) l = pos.left * sc_w;
          if (pos && pos.top != undefined) t = pos.top * sc_h;
          if (pos && pos.right != undefined) l = sysInfo.windowWidth - w - pos.right * sc_w;
          if (pos && pos.bottom != undefined) t = sysInfo.windowHeight - h - pos.bottom * sc_h;
          if (pos && pos.centerX != undefined) l = (sysInfo.windowWidth - w) / 2 + pos.centerX * sc_w;
          if (pos && pos.centerY != undefined) t = (sysInfo.windowHeight - h) / 2 + pos.centerY * sc_h;
          return {
            left: l,
            top: t
          };
        }

        static hideAllAd() {
          for (var key in this._ads) {
            this.hideCustomAd(key);
          }
        }

      });

      WXCustomAd._customc_rect_adunit = [];
      WXCustomAd._customc_h_adunit = [];
      WXCustomAd._customc_v_adunit = [];
      WXCustomAd._customc_one_adunit = [];
      WXCustomAd._ads = {};
      WXCustomAd._waits = [];
      WXCustomAd.sysInfo = null;
      WXCustomAd.cb = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4da471b39721456fd8709e8a91b0bd22c461677f.js.map