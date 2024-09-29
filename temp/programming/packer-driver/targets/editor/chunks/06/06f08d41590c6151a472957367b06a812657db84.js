System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, view, tyqSDK, wechat, _crd, global, Wechat;

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../../tyqSDK", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      view = _cc.view;
    }, function (_unresolved_2) {
      tyqSDK = _unresolved_2.tyqSDK;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d06fezwCoBE2Y+Q+xMyxDek", "wechat", undefined);

      __checkObsolete__(['view']);

      global = {
        /**临时处理加的 2020-12-29 */
        latticeAdunit: null,

        /**临时处理加的 2020-12-29 */
        iconCount: null
      };
      wechat = class wechat {
        ////////////////////////////
        // 类成员
        ///////////////////////////

        /**是否授权登录 */

        /** 系统信息 */

        /** 登录按钮对象 */

        /** banner广告对象 */

        /** 奖励视频广告对象 */

        /** 插屏广告对象 */

        /**推荐位广告对象 */

        /**格子广告对象 */

        /**格子广告数量 */

        /** 游戏画面录制对象 */

        /** 录屏开始事件 */

        /** 监听录屏继续事件 */

        /** 录屏暂停事件 */

        /**  录屏结束事件 */

        /**  录屏错误事件 */

        /** 录屏取消事件 */

        /** 录制时间更新事件。在录制过程中触发该事件 */

        /** 游戏圈对象 */

        /** 意见反馈按钮 */

        /** 切换到前台事件 */

        /** 切换到后台事件 */

        /** banner广告id */

        /** 奖励视频广告id */

        /** 插屏广告id */

        /**格子广告ID */

        /**推荐位广告，左右 */

        /** 登录按钮信息 */

        /** 反馈页面的按钮信息 */

        /** banner广告的像素大小 */
        ////////////////////////////
        // get、set访问器
        ///////////////////////////
        set RIconAduni(adUnitId) {
          this._RIconAdunit = adUnitId;
        }

        set LIconAduni(adUnitId) {
          this._LIconAdunit = adUnitId;
        }

        set bannerAdUnitId(adUnitId) {// this._bannerAdUnitId = adUnitId;
        }

        set rewardedVideoAdUnitId(adUnitId) {// this._rewardedVideoAdUnitId = adUnitId;
        }

        set interstitialAdUnitId(adUnitId) {// this._interstitialAdUnitId = adUnitId;
        }

        set bannerSize(size) {
          this._bannerSize.width = size.width;
          this._bannerSize.height = size.height;
          console.log("this._bannerSize = ", this._bannerSize);
        }

        set latticeAdUnitId(adUnitId) {
          this._latticeAdUnitId = adUnitId;
        }

        set gameClubSize(size) {
          this._gameClubSize.x = size.x;
          this._gameClubSize.y = size.y;
          this._gameClubSize.width = size.width;
          this._gameClubSize.height = size.height;
          this._gameClubSize.icon = size.icon;
        }

        set userInfoButtonData(data) {
          this._userInfoButtonData.width = data.width;
          this._userInfoButtonData.height = data.height;
          this._userInfoButtonData.x = data.x;
          this._userInfoButtonData.y = data.y;
          this._userInfoButtonData.url = data.url;
        }

        set closeRewardVideoListener(cb) {
          this._closeRewardVideoListener = cb;
        } ////////////////////////////
        // get、set访问器
        ///////////////////////////


        constructor() {
          this.isWxAuthorize = false;
          this.systemInfo = null;
          this.userInfoButton = null;
          this.bannerAd = null;
          this.rewardedVideoAd = null;
          this.interstitialAd = null;
          this.RiconAD = null;
          this.LiconAD = null;
          this.gridAd = null;
          this.gridAdCunt = null;
          this.GameRecorder = null;
          this.startListener = null;
          this.resumeListener = null;
          this.pauseListener = null;
          this.stopListener = null;
          this.errorListener = null;
          this.abortListener = null;
          this.timeUpdateListener = null;
          this.gameClub = null;
          this.feedbackButton = null;
          this.showListener = null;
          this.hideListener = null;
          this._bannerAdUnitId = [];
          this._bannerAdObjList = [];
          this._bannerShowIndex = 0;
          this._bannerTimer = -1;
          this._bannerAdRefreshTimeOutId = 0;
          this._rewardedVideoAdUnitId = [];
          this._curRewardVideoAdUnitId = "";
          this._shareValue = 0;
          this._rewardValue = 1;
          this._interstitialAdUnitId = [];
          this._latticeAdUnitId = '';
          this._RIconAdunit = '';
          this._LIconAdunit = '';
          this.mainBannerAD = null;
          this._userInfoButtonData = {
            width: null,
            height: null,
            x: null,
            y: null,
            url: null
          };
          this._feedbackButtonData = {
            width: null,
            height: null,
            x: null,
            y: null,
            url: null
          };
          this._bannerSize = {
            width: 600,
            height: 172
          };
          this._gameClubSize = {
            icon: '',
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
          this._closeRewardVideoListener = null;

          if (window.wx) {
            // this.registerRecordScreenEvent();
            this.getSystemInfoSync();
          }
        } //预加载所有广告


        preLoadAd() {
          this.createRewardedVideoAd();
          this.preLoadBanner();
          this.createInterstitialAd();
        } //预加载所有banner广告


        preLoadBanner() {
          for (let i = 0; i < this._bannerAdUnitId.length; i++) {
            let id = this._bannerAdUnitId[i];
            let bannerAd = this.createBanner(id);

            this._bannerAdObjList.push(bannerAd);
          }
        }

        createBanner(id) {
          let bannerSize = {
            // width: this._bannerSize.width / this.systemInfo.pixelRatio,
            // height: this._bannerSize.height / this.systemInfo.pixelRatio
            width: this._bannerSize.width * 0.65,
            height: this._bannerSize.height * 0.35
          }; // let id = this._bannerAdUnitId[Math.floor(Math.random() * this._bannerAdUnitId.length)];

          let bannerObj = wx.createBannerAd({
            // 广告单元 id
            adUnitId: id,
            // 广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 Banner 广告不会自动刷新）
            adIntervals: 30,
            style: {
              left: this.systemInfo.windowWidth / 2 - bannerSize.width / 2,
              top: this.systemInfo.windowHeight - bannerSize.height + this.systemInfo.windowHeight * 0.1,
              height: bannerSize.height,
              width: bannerSize.width
            }
          }); // tyqSDK.log('bannerSize: ', bannerSize, ', systemInfo: ', this.systemInfo, ',this.bannerAd.style: ', this.bannerAd.style);

          bannerObj.onLoad(() => {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('=====> @framework, banner广告加载成功' + id); // 移除setTimeout
            // if (this._bannerAdRefreshTimeOutId != 0) {
            // 	clearTimeout(this._bannerAdRefreshTimeOutId);
            // 	this._bannerAdRefreshTimeOutId = 0;
            // }
            // if (isShow) this.bannerAd.show();
            // 延时刷新banner
            // if (refreshTime > 0) {
            // 	this._bannerAdRefreshTimeOutId = setTimeout(() => {
            // 		if (this.bannerAd)
            // 			this.showBannerAd(refreshTime);
            // 	}, refreshTime * 1000);
            // }
            // next && next(true);
          });
          bannerObj.onError(res => {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('=====> @framework, banner广告加载失败：', id, res); // next && next(false);
          });
          bannerObj.onResize(res => {
            bannerObj.style.left = this.systemInfo.windowWidth / 2 - res.width / 2 - 0.1;
            bannerObj.style.top = this.systemInfo.windowHeight - res.height + 0.1; //AD.setErrNodeY(-((this.bannerAd.style.top * winSize.height / this.systemInfo.windowHeight) - winSize.height / 2));
          });
          return bannerObj;
        } ////////////////////////////
        // 登录模块
        ///////////////////////////

        /**
         * 登陆接口
         * @param cbOK
         * @param cbFail
         */


        wetchatLogin(cbOK, cbFail) {
          let data = {
            wccode: null,
            wcencrypted: null,
            wciv: null // userInfo: null

          }; // 获取玩家数据

          let getLoginData = () => {
            this.login(code => {
              data.wccode = code;
              if (cbOK) cbOK(code);
            }, res => {
              data.wcencrypted = res.encryptedData;
              data.wciv = res.iv;
              if (cbFail) cbFail(data);
            });
          };

          getLoginData();
        }
        /**
         * @description 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限
         *
         * @param cbDone 登陆成功后回调
         * @param cbFail 登陆失败后回调
         */


        getSetting(cbDone, cbFail) {
          if (wechat.isSupportedAPI(wx.getSetting)) {
            wx.getSetting({
              success: res => {
                // if (res.authSetting['scope.userInfo']) {
                // 	if (cbDone)
                // 		cbDone(res.authSetting['scope.userInfo']);
                // } else
                // 	if (cbFail) cbFail("开关无");
                cbDone(res.authSetting['scope.userInfo']);
              },
              fail: res => {
                if (cbFail) cbFail(res);
              }
            });
          } else {
            console.error("----> 微信版本不支持getSetting API");
            if (cbFail) cbFail("----> 微信版本不支持getSetting API");
          }
        }
        /**
         * @description 创建用户登录按钮
         */


        createUserInfoButton(x = 0, y = 0, width = view.getVisibleSize().width, height = view.getVisibleSize().height) {
          if (wechat.isSupportedAPI(wx.createUserInfoButton)) {
            this.userInfoButton = wx.createUserInfoButton({
              type: 'image',
              // image: this._userInfoButtonData.url,
              style: {
                // left: this.systemInfo.screenWidth * this._userInfoButtonData.x - this._userInfoButtonData.width / 2,
                // top: this.systemInfo.screenHeight * this._userInfoButtonData.y - this._userInfoButtonData.height / 2,
                // width: this._userInfoButtonData.width,
                // height: this._userInfoButtonData.height
                left: x,
                top: y,
                width: view.getVisibleSize().width,
                height: view.getVisibleSize().height
              }
            });
          } else {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('=====> @framework,当前微信版本过低，无法使用授权按钮，请升级到最新微信版本后重试');
          }
        } // /**
        //  * 根据node的属性，创建一个授权按钮
        //  * @param btnNode
        //  * @param cbOk 成功后回调
        //  * @param cbFail 失败后回调
        //  */
        // public createAuthorizeBtnByNode(btnNode: Node, cbOk?: Function, cbFail?: Function): void {
        // 	if (!wechat.isSupportedAPI(wx.createUserInfoButton)) {
        // 		tyqSDK.log('=====> @framework,当前微信版本过低，无法使用授权按钮，请升级到最新微信版本后重试');
        // 		return;
        // 	}
        // 	this.destroyAuthorizeBtn()
        // 	let btnSize = size(btnNode.width + 10, btnNode.height + 10);
        // 	let btnPosI = btnNode.convertToWorldSpaceAR(v2(0, 0));
        // 	let frameSize = view.getFrameSize();
        // 	let winSize = director.getWinSize();
        // 	//适配不同机型来创建微信授权按钮
        // 	let left = (btnPosI.x - btnSize.width * 0.5) / winSize.width * frameSize.width;
        // 	let top = (winSize.height - btnPosI.y - btnSize.height * 0.5) / winSize.height * frameSize.height;
        // 	let width = btnSize.width / winSize.width * frameSize.width;
        // 	let height = btnSize.height / winSize.height * frameSize.height;
        // 	this.userInfoButton = wx.createUserInfoButton({
        // 		type: 'text',
        // 		text: '',
        // 		// type: 'image',
        // 		// image: this._userInfoButtonData.url,
        // 		style: {
        // 			left: left,
        // 			top: top,
        // 			width: width,
        // 			height: height,
        // 			// lineHeight: 0,
        // 			// backgroundColor: '',
        // 			// color: '#ffffff',
        // 			// textAlign: 'center',
        // 			// fontSize: 16,
        // 			// borderRadius: 4
        // 		}
        // 	})
        // 	this.onTapUserInfoButton(cbOk, cbFail)
        // }


        destroyAuthorizeBtn() {
          if (this.userInfoButton) {
            this.userInfoButton.destroy();
            this.userInfoButton = null;
          }
        }

        /**
         * @description 监听用户点击登录按钮的事件
         */
        onTapUserInfoButton(cbOK, cbFail) {
          if (this.userInfoButton) {
            this.userInfoButton.onTap(res => {
              // 点击登录按钮，用户授权成功
              (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).log('onTap', res);

              if (res.userInfo) {
                this.destroyAuthorizeBtn();
                if (cbOK) cbOK(res);
              } else {
                cbFail(res);
              }
            });
          } else {
            cbFail(null);
          }
        }
        /**
         * @description 登录游戏服务
         */


        login(cbOk, cbFail) {
          wx.login({
            success: res => {
              cbOk(res.code);
            },
            fail: () => {
              cbFail();
            }
          });
        }
        /**
         * 微信登录，获取 code 和 encryptData(未测试)
         */


        getWxLoginResult(cb) {
          wx.login({
            success(loginResult) {
              console.warn("-----微信登录--", loginResult);
              wx.getUserInfo({
                withCredentials: true,

                success(userResult) {
                  console.warn("-----获取用户信息结果--", userResult);
                  cb(null, {
                    code: loginResult.code,
                    encryptedData: userResult.encryptedData,
                    iv: userResult.iv,
                    userInfo: userResult.userInfo
                  });
                },

                fail() {
                  console.error("-----获取用户信息失败--");
                  cb(new Error('获取微信用户信息失败，请检查网络状态'), null);
                }

              });
            },

            fail() {
              cb(new Error('微信登录失败，请检查网络状态'), null);
            }

          });
        }
        /** 微信获得设置 */


        wxGetSetting() {
          return new Promise((resolve, reject) => {
            try {
              wx.getSetting({
                success: res => {
                  console.log("微信授权信息1", res); //是否授权

                  if (!res.authSetting['scope.userInfo']) {
                    console.log("未授权----");
                    let sysInfo = wx.getSystemInfoSync(); // 获取微信界面大小

                    let screenWidth = sysInfo.screenWidth;
                    let screenHeight = sysInfo.screenHeight;
                    let button = wx.createUserInfoButton({
                      type: 'text',
                      text: '',
                      style: {
                        //   left: screenWidth/2-260/2,
                        //   top: screenHeight-260,
                        //   width: 260,
                        //   height: 60,
                        left: 0,
                        top: 0,
                        width: screenWidth,
                        height: screenHeight,
                        lineHeight: 60,
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        color: 'rgba(0, 0, 0, 0)',
                        textAlign: 'center',
                        fontSize: 24,
                        borderRadius: 4
                      }
                    });
                    button.onTap(res => {
                      console.log("授权结果", res);

                      if (res.errMsg == "getUserInfo:ok") {
                        this.isWxAuthorize = true;
                        console.log("授权结果1 resolve", res);
                        resolve(res);
                      } else {
                        console.log("授权结果2 reject", res);
                        reject(res);
                      }

                      button.hide();
                    });
                    console.log("显示授权按钮", button);
                    button.show();
                  } else {
                    this.isWxAuthorize = true;
                    console.log("已经授权了2"); //已经授权了						

                    resolve(res);
                  }
                },

                fail(res) {
                  console.log("微信授权失败处理函数11");
                  reject(res);
                }

              });
            } catch (e) {
              console.log("微信授权异常处理函数11");
              reject(e);
            } // wx.getSetting({
            // 	success(res) {
            // 		console.log("----微信授权", res)
            // 	  if (res.authSetting['scope.userInfo']==false) {
            // 		wx.authorize({
            // 		  scope: 'scope.userInfo',
            // 		  success () {
            // 			console.log("-----成功")
            // 			wx.getUserInfo({
            // 				success: (res: any) => {
            // 					if (resolve)
            // 						resolve(res);
            // 				},
            // 				fail: (err) => {
            // 					if (reject)
            // 						reject(err);
            // 				}
            // 			});
            // 		  },
            // 		  fail(){
            // 			console.log("-----微信授权失败处理函数11")
            // 			reject(res);
            // 		  }
            // 		})
            // 	  }else{
            // 		this.isWxAuthorize = true
            // 		console.log("已经授权了2")
            // 		//已经授权了						
            // 		resolve(res);
            // 	  }
            // 	},
            // 	fail: (err) => {
            // 		if (reject)
            // 			reject(err);
            // 	}
            // })
            // wx.getSetting({
            // 	success(res) {
            // 		resolve(res);
            // 	},
            // 	fail: (err) => {
            // 		if (reject)
            // 			reject(err);
            // 	}
            // });

          });
        }
        /**
         * @description 获取用户信息
         */


        getUserInfo(resolve, reject) {
          this.getSetting(res => {
            wx.getUserInfo({
              success: res => {
                if (resolve) resolve(res);
              },
              fail: err => {
                if (reject) reject(err);
              }
            });
          }, res => {
            if (reject) {
              (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).log(res);
              reject("getsetting 失败");
            }
          });
        } ////////////////////////////
        // 分享
        ///////////////////////////

        /**
         * @description 分享，主动拉起转发，进入选择通讯录界面
         * @param _title
         * @param _imageUrl
         * @param _query
         */


        shareAppMessage(_title, _imageUrl, _query) {
          wx.shareAppMessage({
            title: _title,
            imageUrl: _imageUrl,
            query: _query
          });
        } ////////////////////////////
        // banner广告
        ///////////////////////////

        /**
         * @description 显示banner广告
           * @param refreshTime 自动刷新时间，默认30秒，必须>=30秒；
         */


        showBannerAd(next, refreshTime = 30) {
          if (!wechat.isSupportedAPI(wx.createBannerAd)) return;

          if (!this.bannerAd) {
            this.createBannerAd(refreshTime, next);
            this.bannerAd.show();
            return;
          } else {
            this.bannerAd.show();
            next && next(true);
          }
        } //轮流显示banner


        showBannerTurns(times) {
          if (!wechat.isSupportedAPI(wx.createBannerAd)) return;
          clearInterval(this._bannerTimer);
          this.showBannerNext();
          this._bannerTimer = setInterval(() => {
            this.showBannerNext();
          }, times);
        }

        showBannerNext() {
          if (this._bannerAdObjList.length <= 0) {
            console.error('zzzzzzz无banner广告');
            return;
          }

          this._bannerAdObjList.forEach(ad => {
            ad.hide();
          });

          this._bannerAdObjList[this._bannerShowIndex].hide();

          this._bannerShowIndex++;

          if (this._bannerShowIndex >= this._bannerAdObjList.length) {
            this._bannerShowIndex = 0;
          }

          let bannerAd = this._bannerAdObjList[this._bannerShowIndex];

          if (bannerAd) {
            bannerAd.show().catch(() => {
              let id = this._bannerAdUnitId[this._bannerShowIndex];
              bannerAd = this.createBanner(id);

              if (bannerAd) {
                bannerAd.show();
              }
            });
          } else {
            let id = this._bannerAdUnitId[this._bannerShowIndex];
            bannerAd = this.createBanner(id);

            if (bannerAd) {
              bannerAd.show();
            }
          }
        }
        /**
         * @description 隐藏banner广告
         */


        hideBannerAd() {
          if (this.bannerAd) {
            this.bannerAd.hide();
          }

          if (this._bannerAdRefreshTimeOutId != 0) {
            clearTimeout(this._bannerAdRefreshTimeOutId);
            this._bannerAdRefreshTimeOutId = 0;
          }

          clearInterval(this._bannerTimer);

          this._bannerAdObjList.forEach(ad => {
            ad.hide();
          });
        }
        /**
        * @description 销毁banner广告
        */


        destroyBannerAd() {
          if (this.bannerAd) {
            this.bannerAd.destroy();
            this.bannerAd = null;
          }

          if (this._bannerAdRefreshTimeOutId != 0) {
            clearTimeout(this._bannerAdRefreshTimeOutId);
            this._bannerAdRefreshTimeOutId = 0;
          }
        }
        /**
         * @description 创建banner广告
         */


        createBannerAd(refreshTime, next, isShow = true) {
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).log("banner width= ", this._bannerSize.width, this._bannerAdUnitId);
          let bannerSize = {
            // width: this._bannerSize.width / this.systemInfo.pixelRatio,
            // height: this._bannerSize.height / this.systemInfo.pixelRatio
            width: this._bannerSize.width * 0.65,
            height: this._bannerSize.height * 0.35
          };

          let id = this._bannerAdUnitId[Math.floor(Math.random() * this._bannerAdUnitId.length)];

          this.bannerAd = wx.createBannerAd({
            // 广告单元 id
            adUnitId: id,
            // 广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 Banner 广告不会自动刷新）
            adIntervals: 30,
            style: {
              left: this.systemInfo.windowWidth / 2 - bannerSize.width / 2,
              top: this.systemInfo.windowHeight - bannerSize.height + this.systemInfo.windowHeight * 0.1,
              height: bannerSize.height,
              width: bannerSize.width
            }
          });
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).log('bannerSize: ', bannerSize, ', systemInfo: ', this.systemInfo, ',this.bannerAd.style: ', this.bannerAd.style);
          this.bannerAd.onLoad(() => {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('=====> @framework, banner广告加载成功'); // 移除setTimeout

            if (this._bannerAdRefreshTimeOutId != 0) {
              clearTimeout(this._bannerAdRefreshTimeOutId);
              this._bannerAdRefreshTimeOutId = 0;
            }

            if (isShow) this.bannerAd.show(); // 延时刷新banner
            // if (refreshTime > 0) {
            // 	this._bannerAdRefreshTimeOutId = setTimeout(() => {
            // 		if (this.bannerAd)
            // 			this.showBannerAd(refreshTime);
            // 	}, refreshTime * 1000);
            // }

            next && next(true);
          });
          this.bannerAd.onError(res => {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('=====> @framework, banner广告加载失败：', res);
            next && next(false);
          });
          this.bannerAd.onResize(res => {
            this.bannerAd.style.left = this.systemInfo.windowWidth / 2 - res.width / 2 - 0.1;
            this.bannerAd.style.top = this.systemInfo.windowHeight - res.height + 0.1; //AD.setErrNodeY(-((this.bannerAd.style.top * winSize.height / this.systemInfo.windowHeight) - winSize.height / 2));
          });
        } ////////////////////////////
        // 奖励广告
        ///////////////////////////


        showRewardVideoAd(successShowCb) {
          return new Promise((resolve, reject) => {
            this.createRewardedVideoAd();

            if (!this.rewardedVideoAd) {
              (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).log('=====> @framework, 奖励视频对象为不存在');
              reject();
              return null;
            }

            let closeListener = res => {
              let isComplete; // 小于 2.1.0 的基础库版本，res 是一个 undefined

              if (res && res.isEnded || res === undefined) {
                isComplete = true;
                resolve(isComplete);
              } else {
                isComplete = false;
                resolve(isComplete);
              }

              this.closeRewardVideo();
              this.rewardedVideoAd.offClose(closeListener);
              this.rewardedVideoAd.offLoad(this.rewardedVideoAdOnLoadListener);
              this.rewardedVideoAd.offError(this.rewardedVideoAdOnErrorListener);
              this.rewardedVideoAd = null;
              this.createRewardedVideoAd();
            };

            let errorListener = res => {
              (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).log('=====> @framework, 奖励视频发生错误：', res); // 再拉一次视频

              this.rewardedVideoAd.load().then(() => {
                return this.rewardedVideoAd.show();
              }).then(() => {
                this.rewardedVideoAd.offError(errorListener);
                this.rewardedVideoAd.offLoad(this.rewardedVideoAdOnLoadListener);
                this.rewardedVideoAd.offError(this.rewardedVideoAdOnErrorListener);
              }).catch(() => {
                this.rewardedVideoAd.offError(errorListener);
                this.rewardedVideoAd.offLoad(this.rewardedVideoAdOnLoadListener);
                this.rewardedVideoAd.offError(this.rewardedVideoAdOnErrorListener);
                reject();
              });
            };

            this.rewardedVideoAd.onClose(closeListener);
            this.rewardedVideoAd.onError(errorListener);
            this.rewardedVideoAd.load().then(() => {
              this.rewardedVideoAd.show().then(() => {
                if (successShowCb) {
                  successShowCb();
                }
              });
            });
          });
        }
        /**
         * @description 创建奖励视频单例（小游戏端是全局单例）
         */


        createRewardedVideoAd() {
          if (!wx.createRewardedVideoAd) {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('=====> @framework,当前微信版本过低，无法使用奖励视频功能，请升级到最新微信版本后重试');
            return;
          }

          if (this.rewardedVideoAd) {
            return;
          }

          let id = Math.floor(Math.random() * this._rewardedVideoAdUnitId.length);
          this.rewardedVideoAd = wx.createRewardedVideoAd({
            adUnitId: this._rewardedVideoAdUnitId[id]
          });
          this._curRewardVideoAdUnitId = this._rewardedVideoAdUnitId[id];
          this.rewardedVideoAd.onLoad(this.rewardedVideoAdOnLoadListener.bind(this));
          this.rewardedVideoAd.onError(this.rewardedVideoAdOnErrorListener);
        }

        rewardedVideoAdOnErrorListener() {
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).log('=====> @framework, 加载视频广告失败');
        }

        rewardedVideoAdOnLoadListener(res) {
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).log('=====> @framework, 加载视频广告成功', res);

          if (res) {
            if (res.shareValue) {
              this._shareValue = parseInt(res.shareValue);
            }

            if (res.rewardValue) {
              this._rewardValue = parseInt(res.rewardValue);
            }
          }
        }

        isShareBehavior() {
          return this._shareValue == 1;
        }

        isRewardBehavior() {
          return this._rewardValue == 1;
        }

        reportShareBehavior(data) {
          data.adunit = this._curRewardVideoAdUnitId;
          data.sceneID = 1;
          data.shareValue = this._shareValue;
          data.rewardValue = this._rewardValue;
          const result = this.rewardedVideoAd.reportShareBehavior(data);

          if (result) {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('=====> @framework, 视频广告行为上报-成功', data);
          } else {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('=====> @framework, 视频广告行为上报-失败', data);
          }
        }

        closeRewardVideo() {
          if (this._closeRewardVideoListener) {
            this._closeRewardVideoListener();
          }
        } ////////////////////////////
        // 插屏广告
        ///////////////////////////


        showInterstitialAd(closeCb, successShowCb) {
          if (!wx.createInterstitialAd) {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('=====> @framework,当前微信版本过低，无法使用插屏广告功能，请升级到最新微信版本后重试');
            return;
          }

          this.createInterstitialAd();

          let onErrorListener = res => {
            this.interstitialAd.offError(onErrorListener);
            this.interstitialAd.offClose(onCloseListener);
            this.interstitialAd.offLoad(this.interstitialAdOnLoadListener);
            this.interstitialAd = null;
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('=====> @framework,插屏创建失败: ', res);
            closeCb && closeCb();
          };

          this.interstitialAd.onError(onErrorListener);

          let onCloseListener = res => {
            this.interstitialAd.offError(onErrorListener);
            this.interstitialAd.offClose(onCloseListener);
            this.interstitialAd.offLoad(this.interstitialAdOnLoadListener);
            this.interstitialAd = null;
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('----> 插屏 广告关闭');
            closeCb && closeCb();
            this.createInterstitialAd();
          };

          this.interstitialAd.onClose(onCloseListener);
          this.interstitialAd.show().then(() => {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log("----> 成功显示插屏广告");

            if (successShowCb) {
              successShowCb();
            }
          });
        }

        createInterstitialAd() {
          if (!this.interstitialAd) {
            let id = this._interstitialAdUnitId[Math.floor(Math.random() * this._interstitialAdUnitId.length)];

            this.interstitialAd = wx.createInterstitialAd({
              adUnitId: id
            });
            this.interstitialAd.onLoad(this.interstitialAdOnLoadListener); // this.interstitialAd.onError(() => {
            // 	tyqSDK.log('=====> @framework,插屏创建失败');
            // });
          }
        }

        interstitialAdOnLoadListener() {
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).log('=====> @framework,插屏创建成功');
        } ////////////////////////////
        // 游戏圈
        ///////////////////////////

        /**
         * @description 创建微信游戏圈
         */


        createGameClubButton() {
          // 微信圈是用户必要的功能，不需求弹出提示
          if (!wx.createGameClubButton) {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('=====> @framework,当前微信版本过低，无法使用游戏圈功能，请升级到最新微信版本后重试');
            return;
          }

          if (this.gameClub) {
            return;
          }

          this.gameClub = wx.createGameClubButton({
            icon: this._gameClubSize.icon,
            style: {
              left: this._gameClubSize.x / this.systemInfo.pixelRatio,
              top: this._gameClubSize.y / this.systemInfo.pixelRatio,
              width: this._gameClubSize.width,
              height: this._gameClubSize.height
            }
          });
          this.gameClub.hide();
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).log('gameClub', this.gameClub);
        }
        /**
         * @description 显示微信游戏圈
         */


        showGameClub() {
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).log('显示游戏圈：', this.gameClub);
          this.createGameClubButton();

          if (this.gameClub) {
            this.gameClub.show();
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('显示游戏圈成功');
          }
        }
        /**
         * @description 隐藏微信游戏圈
         */


        hideGameClub() {
          if (this.gameClub) {
            this.gameClub.hide();
          }
        } ////////////////////////////
        // 开放数据域
        ///////////////////////////

        /**
         * @description 向开放数据域发送消息
         * @param msg 要发送的消息，message 中及嵌套对象中 key 的 value 只能是 primitive value。即 number、string、boolean、null、undefined
         */


        postMessage(msg, info) {
          let data = {
            message: '',
            value: info
          };
          data.message = msg;
          data.value = info;
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).log('发送信息: ', data);
          wx.getOpenDataContext().postMessage(data);
        } ////////////////////////////
        // 意见反馈
        ///////////////////////////

        /**
         * @description 创建打开意见反馈页面的按钮, 默认使用图片按钮的形式创建
         */


        createFeedbackButton(cbOk, cbFail) {
          if (wechat.isSupportedAPI(wx.createFeedbackButton)) {
            this.feedbackButton = wx.createFeedbackButton({
              type: 'image',
              // 按钮的类型.支持text、image
              image: this._feedbackButtonData.url,
              style: {
                left: this._feedbackButtonData.x,
                // 左上角横坐标
                top: this._feedbackButtonData.y,
                // 左上角纵坐标
                width: this._feedbackButtonData.width,
                // 宽度
                height: this._feedbackButtonData.height // 高度

              }
            });
            cbOk(this.feedbackButton);
          } else {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('=====> @framework,当前微信版本过低，无法使用反馈按钮，请升级到最新微信版本后重试');
            cbFail();
          }
        }
        /**
         * @description 监听意见反馈按钮的点击事件(在创建意见反馈按钮后，立即执行该函数，注册点击事件)，只能使用一次
         */


        onTapFeedbackButton(cbOk, cbFail) {
          if (this.feedbackButton) {
            this.feedbackButton.onTap(() => {
              cbOk();
            });
          } else {
            cbFail();
          }
        }
        /**
         * @description 显示意见反馈按钮
         */


        showFeedbackButton() {
          if (this.feedbackButton) {
            this.feedbackButton.show();
          }
        }
        /**
         * @description 隐藏意见反馈按钮
         */


        hideFeedbackButton() {
          if (this.feedbackButton) {
            this.feedbackButton.hide();
          }
        } ////////////////////////////
        // 录屏
        ///////////////////////////

        /**
         * @description 获取全局唯一的游戏画面录制对象
         */


        getGameRecorder(cbOk, cbFail) {
          if (wechat.isSupportedAPI(wx.getGameRecorder)) {
            this.GameRecorder = wx.getGameRecorder();
            cbOk();
          } else {
            cbFail();
          }
        }

        registerRecordScreenEvent() {
          if (!wechat.isSupportedAPI(wx.getGameRecorder)) {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('=====> @framework,当前客户端版过低，无法使用录制功能，请升级到最新客户端版本后重试');
            return;
          }

          this.GameRecorder = wx.getGameRecorder(); // 监听录屏继续事件

          this.GameRecorder.on('start', res => {
            if (this.resumeListener) {
              this.resumeListener();
            }
          }); // 监听录屏暂停事件

          this.GameRecorder.on('pause', res => {
            if (this.pauseListener) {
              this.pauseListener();
            }
          }); // 监听录屏结束事件。可以通过 onStop 接口监听录屏结束事件，获得录屏地址

          this.GameRecorder.on('stop', res => {
            if (this.stopListener) {
              (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).log('视频的时长：', res.duration);
              this.stopListener(res.duration);
            }
          }); // 监听录屏错误事件

          this.GameRecorder.on('error', res => {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('=====> @framework,录屏错误：', res.error.message, ',code: ', res.error.code);

            if (this.errorListener) {
              this.errorListener();
            }
          }); // 录制时间更新事件。在录制过程中触发该事件

          this.GameRecorder.on('timeUpdate', res => {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('=====> @framework,录屏到第几秒：', res.currentTime);

            if (this.timeUpdateListener) {
              this.timeUpdateListener();
            }
          }); // 录制取消事件

          this.GameRecorder.on('abort', res => {
            if (this.abortListener) {
              this.abortListener();
            }
          });
        }
        /**
         *  @description 开始录屏
         * @param callback
         */


        startRecordScreen(callback) {
          return;
          this.startListener = callback;
          this.GameRecorder.start({
            fps: 24,
            duration: 7200,
            bitrate: 1000,
            gop: 12
          });
        }
        /**
         * @description 暂停录屏
         */


        pauseRecordScreen(callback) {
          this.pauseListener = callback;
          this.GameRecorder.pause();
        }
        /**
         * @description 恢复录制游戏画面
         * @param callback
         */


        resumeRecordScreen(callback) {
          this.resumeListener = callback;
          this.GameRecorder.resume();
        }
        /**
         * @description 结束录制游戏画面。结束录制后可以发起分享
         * @param callback
         */


        stopRecordScreen(callback) {
          this.stopListener = callback;
          this.GameRecorder.stop();
        }
        /**
         * @description 放弃录制游戏画面。此时已经录制的内容会被丢弃
         * @param callback
         */


        abortRecordScreen(callback) {
          this.abortListener = callback;
          this.GameRecorder.abort();
        }

        createGameRecorderShareButton() {} ////////////////////////////
        // 其他能力
        ///////////////////////////

        /**
         * 监听小游戏回到前台的事件
         * @param callbak
         */


        onShow(callbak) {
          this.showListener = callbak;
          wx.onShow(this.onShowListener.bind(this));
        }
        /**
         * @description 取消监听小游戏回到前台的事件
         */


        offShow() {
          wx.offShow(this.onShowListener);
        }
        /**
         * @description 监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件
         * @param callbak
         */


        onHide(callbak) {
          this.hideListener = callbak;
          wx.onHide(this.onHideListener.bind(this));
        }
        /**
         * @description 取消监听小游戏隐藏到后台事件
         */


        offHide() {
          this.hideListener = null;
          wx.offHide(this.onHideListener);
        }

        onShowListener(res) {
          if (this.showListener) {
            this.showListener(res);
          }
        }

        onHideListener() {
          if (this.hideListener) {
            this.hideListener();
          }
        }
        /**
         * @description 打开另一个小程序
         * @param _appId
         * @param _path
         */


        navigateToMiniProgram(_appId, _path, cbOk, cbFail) {
          if (wechat.isSupportedAPI(wx.navigateToMiniProgram)) {
            wx.navigateToMiniProgram({
              appId: _appId,
              path: _path,
              envVersion: 'release',
              success: () => {
                cbOk();
              },
              fail: () => {
                cbFail();
              },
              complete: () => {}
            });
          } else {
            cbFail();
          }
        } ////////////////////////////
        // 震动
        ///////////////////////////

        /**
        	 * 使手机发生较长时间的振动。
        	 */

        /**
         * 使手机发生较长时间的振动。
         * @param cb 回调
         */


        vibrateLong(cb) {
          if (cb) console.warn("----> vibrateLong 微信可能没有cb");
          wx.vibrateLong();
        }

        /**
         * 使手机发生较短时间的振动
         * @param cb 回调
         */
        vibrateShort(cb) {
          console.warn("----> vibrateShort 微信可能没有cb");
          wx.vibrateShort();
        }

        ////////////////////////////
        // 通用
        ///////////////////////////

        /**
         * @description 获取系统信息
         */
        getSystemInfoSync() {
          this.systemInfo = wx.getSystemInfoSync();
        }
        /**
         * @description 是否支持改API
         * @param api
         */


        static isSupportedAPI(api) {
          if (api) {
            return true;
          } else {
            wx.showModal({
              title: '提示',
              content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
            });
            return false;
          }
        }
        /**
         * 退出小程序
         * @param cb
         */


        exitMiniProgram(cb) {
          wx.exitMiniProgram(cb);
        }

        /**
         * 显示灰色背景的消息提示框
         * @param title 内容
         * @param duration 提示框停留时间，单位ms
         * @param callback 成功后回调
         */
        showToast(title, duration = 3000, callback) {
          wx.showToast({
            title: title,
            duration: duration,
            success: () => {
              if (callback) callback();
            }
          });
        }

        /**
         * 获取系统信息
         * @param callback 成功后回调
         */
        getSystemInfo(callback) {
          wx.getSystemInfo({
            success: res => {
              if (callback) callback(res);
            }
          });
        }

        /**
         * 阿拉丁事件
         * @param str
         * @param objOrStr {key:string,value:string}
         */
        aldSendEvent(str, objOrStr) {
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).log('send msg: ', str);

          if (wx.aldSendEvent) {
            if (objOrStr) wx.aldSendEvent(str);else wx.aldSendEvent(str, objOrStr);
          } else console.error("----> 阿拉丁接入失败，请检查game.js");
        }
        /**
         * 创建供量主广告实例
         */


        createIconAd() {
          let styleItemArray = [...Array(global.iconCount + 1).map((_, i) => ({
            appNameHidden: false,
            color: 'white',
            size: 100,
            borderWidth: 100,
            borderColor: 'white',
            left: 100 * i,
            top: 100
          }))]; // 创建推荐位实例，提前初始化

          this.LiconAD = wx.createGameIcon({
            adUnitId: this._LIconAdunit,
            count: global.iconCount,
            style: styleItemArray
          }); // this.RiconAD = wx.createGameIcon({
          // 	adUnitId:this._RIconAdunit,
          // 	count:global.iconCount,
          // 	style:styleItemArray
          // })

          this.LiconAD.onError(res => {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('=====> @framework, 小游戏推荐左边icon加载失败：', res); //next && next(false);
          });
          this.LiconAD.onLoad(() => {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('=====> @framework, 小游戏推荐左边icon加载成功');
          }); // this.RiconAD.onError((res)=>{
          // 	tyqSDK.log('=====> @framework, 小游戏推荐右边icon加载失败：',res);
          // 	//next && next(false);
          // });
          // this.RiconAD.onLoad(()=>{
          // 	tyqSDK.log('=====> @framework, 小游戏推荐右边icon加载成功');
          // })

          this.LiconAD.onResize(size => {
            //偶数  自适应排位置
            var starTop = 0;

            if (global.iconCount % 2 === 0) {
              starTop = this.systemInfo.windowHeight / 2 - global.iconCount / 2 * size[0].height;
            } else {
              starTop = this.systemInfo.windowHeight / 2 - global.iconCount / 2 * size[0].height + size[0].height / 2;
            }

            for (let i = 0; i < size.length; i++) {
              size[i].left = 10;
              size[i].top = starTop + 72 * i;
            }
          }); //同一时间只能展示一个，放弃右边的
          // this.RiconAD.onResize(size =>{
          // 	//偶数  自适应排位置
          // 	var starTop = 0;
          // 	if(global.iconCount%2 === 0){
          // 		starTop = this.systemInfo.windowHeight/2 - global.iconCount/2*size[0].height;
          // 	}else{
          // 		starTop = this.systemInfo.windowHeight/2 - global.iconCount/2*size[0].height+size[0].height/2;
          // 	}
          // 	for (let i = 0; i < size.length; i++) {
          // 		size[i].left = this.systemInfo.windowWidth-10
          // 		size[i].top = starTop + (72*i);
          // 	}
          // })
        }
        /**
         * 显示小游戏推荐广告
         */


        showIconAd(dir) {
          if (dir == 'R') {
            if (this.RiconAD) {
              this.RiconAD.load().then(() => {
                this.RiconAD.show();
              }).catch(err => {
                console.error(err);
              });
            } else {
              setTimeout(this.createIconAd, 1000);
            }
          } else {
            if (this.LiconAD) {
              this.LiconAD.load().then(() => {
                this.LiconAD.show();
              }).catch(err => {
                console.error(err);
              });
            } else {
              setTimeout(this.createIconAd, 1000);
            }
          }
        }
        /**创建格子广告 */


        createGridAd(count) {
          this.gridAd = wx.createGridAd({
            adUnitId: global.latticeAdunit,
            adTheme: 'white',
            gridCount: count,
            adIntervals: 30,
            style: {
              left: 0,
              top: this.systemInfo.windowHeight / 2 - 350,
              width: 500,
              opacity: 0.8
            }
          });
          this.gridAd.onLoad(() => {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('=====> @framework, 格子广告加载成功');
            this.gridAdCunt = count;
          });
          this.gridAd.onError(res => {
            (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).log('=====> @framework, 格子广告加载失败：', res);
          });
        }
        /**显示格子广告 */


        showGridAd(count) {
          //数量不一样的时候重新创建格子
          if (count != this.gridAdCunt) {
            if (this.gridAd) {
              this.gridAd.destroy();
            }

            this.createGridAd(count);
          }

          this.gridAd.show();
        }
        /**隐藏格子广告 */


        hideGridAd() {
          this.gridAd.hide();
        }
        /**
         * 显示转发和分享到朋友圈
         * @param bool 是否使用带 shareTicket 的转发详情
         */


        showShareMenu(bool = false) {
          if (window.wx) {
            wx.showShareMenu({
              withShareTicket: bool,
              menus: ['shareAppMessage', 'shareTimeline']
            });
          }
        }

      };
      wechat._instance = new wechat();

      _export("Wechat", Wechat = wechat._instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=06f08d41590c6151a472957367b06a812657db84.js.map