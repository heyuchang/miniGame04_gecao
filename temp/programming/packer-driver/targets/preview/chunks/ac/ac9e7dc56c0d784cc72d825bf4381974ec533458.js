System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, director, _decorator, Wechat, GLoginState, GNetCmd, GNetConst, GameStorage, WmSocket, _dec, _class, _class2, _crd, ServerState, ccclass, property, ServerCtr;

  function _reportPossibleCrUseOfWechat(extras) {
    _reporterNs.report("Wechat", "../platform/wechat/wechat", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGLoginState(extras) {
    _reporterNs.report("GLoginState", "./conf", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGNetCmd(extras) {
    _reporterNs.report("GNetCmd", "./conf", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGNetConst(extras) {
    _reporterNs.report("GNetConst", "./conf", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStorage(extras) {
    _reporterNs.report("GameStorage", "./gameStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWmSocket(extras) {
    _reporterNs.report("WmSocket", "./wmsocket", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      director = _cc.director;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Wechat = _unresolved_2.Wechat;
    }, function (_unresolved_3) {
      GLoginState = _unresolved_3.GLoginState;
      GNetCmd = _unresolved_3.GNetCmd;
      GNetConst = _unresolved_3.GNetConst;
    }, function (_unresolved_4) {
      GameStorage = _unresolved_4.GameStorage;
    }, function (_unresolved_5) {
      WmSocket = _unresolved_5.WmSocket;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ab7d54qwyNKo5R4d+Nd8sTJ", "ServerCtr", undefined);

      //normal， new，hot，maintain
      _export("ServerState", ServerState = {
        Normal: 'normal',
        New: 'new',
        Hot: 'hot',
        Maintain: 'maintain'
      });

      __checkObsolete__(['Component', 'director', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", ServerCtr = (_dec = ccclass('ServerCtr'), _dec(_class = (_class2 = class ServerCtr extends Component {
        constructor() {
          super(...arguments);
          this.serverId = 1;
          this.account = '';
          this.password = 'hsmnq2021';
          this.authCode = "";
          this.token = '';
          this.regionDataList = [];
          this.uid = '';
          this.regionId = '';
          this.nickName = '测试账号';
          this.isLogin = false;
          this.avatar = '';
          this.loginState = (_crd && GLoginState === void 0 ? (_reportPossibleCrUseOfGLoginState({
            error: Error()
          }), GLoginState) : GLoginState).noYet;
          this.serverDataVersion = 0;
          this.serverData = {};
          this.regionList = {};
          this.serverList = {};
        }

        static GetInstance() {
          if (!this.instance) {
            this.instance = new ServerCtr();
            this.instance.InitServerCtr();
          }

          return this.instance;
        }

        InitServerCtr() {
          this.account = (_crd && GameStorage === void 0 ? (_reportPossibleCrUseOfGameStorage({
            error: Error()
          }), GameStorage) : GameStorage).getStringDisk('login_account', '');
          this.password = (_crd && GameStorage === void 0 ? (_reportPossibleCrUseOfGameStorage({
            error: Error()
          }), GameStorage) : GameStorage).getStringDisk('login_password', this.password);
          this.authCode = (_crd && GameStorage === void 0 ? (_reportPossibleCrUseOfGameStorage({
            error: Error()
          }), GameStorage) : GameStorage).getStringDisk('login_authCode', this.authCode);
          this.serverId = parseInt((_crd && GameStorage === void 0 ? (_reportPossibleCrUseOfGameStorage({
            error: Error()
          }), GameStorage) : GameStorage).getStringDisk('login_serverId', ""));
          director.on((_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
            error: Error()
          }), GNetCmd) : GNetCmd).GetInviteCode.toString(), this.onMessageEvent, this);
        } //数据版本设置


        get dataVersion() {
          return (_crd && GameStorage === void 0 ? (_reportPossibleCrUseOfGameStorage({
            error: Error()
          }), GameStorage) : GameStorage).getInt("dataVersion", 0);
        }

        set dataVersion(val) {
          if (val > this.dataVersion) {
            (_crd && GameStorage === void 0 ? (_reportPossibleCrUseOfGameStorage({
              error: Error()
            }), GameStorage) : GameStorage).setInt("dataVersion", val);
          }
        }

        addDataVersion(val) {
          if (val === void 0) {
            val = 1;
          }

          (_crd && GameStorage === void 0 ? (_reportPossibleCrUseOfGameStorage({
            error: Error()
          }), GameStorage) : GameStorage).setInt("dataVersion", (_crd && GameStorage === void 0 ? (_reportPossibleCrUseOfGameStorage({
            error: Error()
          }), GameStorage) : GameStorage).getInt("dataVersion", 0) + val);
        }

        CheckIsHaveAccount() {
          if (!this.account || this.account == '') {
            // 没有账号
            return false;
          }

          return true;
        }

        CheckHaveDataById(regionId) {
          for (var i = 0; i < this.regionDataList.length; i++) {
            var data = this.regionDataList[i];

            if (data.regionId == regionId) {
              return true;
            }
          }

          return false;
        }

        get Account() {
          return this.account;
        }

        set Account(str) {
          this.account = str;
          (_crd && GameStorage === void 0 ? (_reportPossibleCrUseOfGameStorage({
            error: Error()
          }), GameStorage) : GameStorage).setStringDisk('login_account', this.account);
        }

        get PassWord() {
          return this.password;
        }

        set PassWord(str) {
          this.password = str;
          (_crd && GameStorage === void 0 ? (_reportPossibleCrUseOfGameStorage({
            error: Error()
          }), GameStorage) : GameStorage).setStringDisk('login_password', this.password);
        }

        get AuthCode() {
          return this.authCode;
        }

        set AuthCode(str) {
          this.authCode = str;
          (_crd && GameStorage === void 0 ? (_reportPossibleCrUseOfGameStorage({
            error: Error()
          }), GameStorage) : GameStorage).setStringDisk('login_authCode', this.authCode);
        }

        get ServerId() {
          return this.serverId;
        }

        set ServerId(id) {
          this.serverId = id;
          (_crd && GameStorage === void 0 ? (_reportPossibleCrUseOfGameStorage({
            error: Error()
          }), GameStorage) : GameStorage).setStringDisk('login_serverId', this.serverId + "");
        }

        UpdateRegions(regions) {
          for (var key in regions) {
            var data = regions[key];
            this.regionList[key] = JSON.parse(data);
          }
        }

        UpdateServers(servers) {
          for (var key in servers) {
            var data = servers[key];
            this.serverList[key] = JSON.parse(data); // if (gl.debug) {
            //     switch (Number(this.serverList[key].id)) {
            //         case 1:
            //             this.serverList[key].status ='maintain'; 
            //             break;
            //         case 2:
            //             this.serverList[key].status = 'hot';
            //             break;
            //         case 5:
            //             this.serverList[key].status = 'new';
            //             break;
            //         default:
            //             break;
            //     }
            // }
          }
        }

        GetServerData(serverId) {
          for (var key in this.serverList) {
            var data = this.serverList[key];

            if (data.id == serverId) {
              return data;
            }
          }

          return null;
        }

        GetStateIcon(status) {
          switch (status) {
            case ServerState.Normal:
              return;

            case ServerState.New:
              return 'fm_tb_xin';

            case ServerState.Hot:
              return 'fm_tb_bao';

            case ServerState.Maintain:
              return 'fm_tb_wei';

            default:
              break;
          }
        } // 获取最新的不在维护中服务器


        GetLastNewServer() {
          var id = 1;

          for (var key in this.serverList) {
            var data = this.serverList[key];
            var did = Number(data.id);

            if (did > id && data.status != ServerState.Maintain) {
              id = did;
            }
          }

          return id;
        }

        reqConnect() {
          (_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
            error: Error()
          }), WmSocket) : WmSocket).getInstance().connect();
        }

        reqRegister(account, password) {
          var data = {
            "cmd": (_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
              error: Error()
            }), GNetCmd) : GNetCmd).UserRegister,
            "lang": "zh",
            "account": account,
            "password": password
          };
          (_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
            error: Error()
          }), WmSocket) : WmSocket).getInstance().send({
            "data": data
          });
        }

        reqLogin() {
          var data = {
            "cmd": (_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
              error: Error()
            }), GNetCmd) : GNetCmd).UserLogin,
            "lang": "zh",
            "account": this.account,
            "password": this.password,
            'nickName': this.nickName + this.account
          };
          (_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
            error: Error()
          }), WmSocket) : WmSocket).getInstance().send({
            "data": data
          });
        }

        reqLoginByAccount(account, password, authCode) {
          var data = {
            "cmd": (_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
              error: Error()
            }), GNetCmd) : GNetCmd).UserLogin,
            "lang": "zh",
            "account": account,
            "password": password,
            "authCode": authCode,
            'nickName': this.nickName + this.account
          };
          (_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
            error: Error()
          }), WmSocket) : WmSocket).getInstance().send({
            "data": data
          });
        }

        reqRegionList() {
          var data = {
            "cmd": (_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
              error: Error()
            }), GNetCmd) : GNetCmd).GetRegionList,
            "lang": "zh",
            "token": this.token
          };
          (_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
            error: Error()
          }), WmSocket) : WmSocket).getInstance().send({
            "data": data
          });
        }

        reqRegionData() {
          // if (!this.ServerId || this.ServerId == 0) {
          //     // Notifications.emit(GDef.wdEvent.showTip, {msg:'请选择区服'})
          //     return;
          // }
          this.ServerId = 1; //默认选一个区服

          var data = {
            "cmd": (_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
              error: Error()
            }), GNetCmd) : GNetCmd).GetRegionData,
            "lang": "zh",
            "token": this.token,
            "version": ServerCtr.GetInstance().dataVersion,
            "regionId": this.ServerId.toString()
          };
          console.log("发送服务端数据请求---11", data);
          (_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
            error: Error()
          }), WmSocket) : WmSocket).getInstance().send({
            "data": data
          });
        } //好友链接登录后，调用此接口建立关联关系


        reqSetFriendCode(shareUserId) {
          if (ServerCtr.GetInstance().loginState != (_crd && GLoginState === void 0 ? (_reportPossibleCrUseOfGLoginState({
            error: Error()
          }), GLoginState) : GLoginState).loginWithAccount) {
            return;
          }

          var data = {
            "cmd": (_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
              error: Error()
            }), GNetCmd) : GNetCmd).SetFriendCode,
            "lang": "zh",
            "token": this.token,
            "InviteCode": shareUserId
          };
          console.log("发送服务端数据请求 -- 设置好友邀请码---11", data); // var m = map[string]interface{}{ //不需要处理返回
          //     "cmd":    proto.SetFriendCode,
          //     "status": util.RES_MSG_SUCCESS,
          // }

          (_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
            error: Error()
          }), WmSocket) : WmSocket).getInstance().send({
            "data": data
          });
        } //获得好友功能相关数据


        reqGetFriendVal() {
          if (ServerCtr.GetInstance().loginState != (_crd && GLoginState === void 0 ? (_reportPossibleCrUseOfGLoginState({
            error: Error()
          }), GLoginState) : GLoginState).loginWithAccount) {
            return;
          }

          var data = {
            "cmd": (_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
              error: Error()
            }), GNetCmd) : GNetCmd).GetFriendVal,
            "lang": "zh",
            "token": this.token,
            "keys": "friendPassCnt,videoCalCnt",
            //相关参数
            "rules": "total,total" //相关规则

          };
          console.log("发送服务端数据请求 -- 获得好友功能相关数据---11", data); // { 返回值参考
          //     "cmd":        proto.SetFriendCode,
          //     "friendCnt":  cnt,
          //     "friendData": util.MapToJSONF(dataMap),
          //     "status":     util.RES_MSG_SUCCESS,
          // }

          (_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
            error: Error()
          }), WmSocket) : WmSocket).getInstance().send({
            "data": data
          });
        }

        onMessageEvent(value) {
          if (value) {
            console.log("处理分享的消息:", value);

            if (value.status != (_crd && GNetConst === void 0 ? (_reportPossibleCrUseOfGNetConst({
              error: Error()
            }), GNetConst) : GNetConst).ResSuccess) {
              console.error("服务端响应失败~!");
              return;
            }
          }
        } // public reqUploadOldPlayerData(isFirst:boolean = true){
        //     if(Const.isActiveMemoryTmp) return
        //     let datas = GameStorage.getAll(isFirst);
        //     // 大数据拆分
        //     console.log("大数据要拆分开....:",datas);
        //     // 全部发送上传
        //     for (const key in datas) {
        //         const value = datas[key];
        //         // cc.sys.localStorage.setItem(key,value);
        //         this.reqCloudSaveManual(key,value,true);
        //     }
        // }


        reqCloudSaveManual(key, val) {// CronCtr.getInstance().cloudSaveManual(key,val);
        }

        wxLoginBegin(failCb) {
          wx.login({
            success(loginResult) {
              console.warn("-----微信登录--", loginResult);
              var data = {
                "cmd": (_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
                  error: Error()
                }), GNetCmd) : GNetCmd).ReqWxSession,
                "lang": "zh",
                "channel": "wx",
                jscode: loginResult.code
              };
              console.warn('发送登录数据：', data);
              (_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
                error: Error()
              }), WmSocket) : WmSocket).getInstance().send({
                "data": data
              });
            },

            fail(res) {
              var msg = "登录失败：" + res.errMsg;
              if (failCb) failCb(msg);
            }

          });
          return;
          (_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
            error: Error()
          }), Wechat) : Wechat).wxGetSetting().then(res => {
            //授权登录，走流程
            console.warn("微信授权结果12---", res, res['userInfo']);

            if (res.hasOwnProperty("userInfo")) {
              ServerCtr.GetInstance().wxLogin(); //第一次授权
            }

            if (res.hasOwnProperty("authSetting")) {
              var authSetting = res.authSetting;

              if (authSetting['scope.userInfo']) {
                //第二次授权
                ServerCtr.GetInstance().wxLogin();
              }
            }
          }).catch(res => {
            //没有授权，直接登录
            console.warn("没有账号登录---");
            this.loginState = (_crd && GLoginState === void 0 ? (_reportPossibleCrUseOfGLoginState({
              error: Error()
            }), GLoginState) : GLoginState).loginWithoutAccount;
          });
        }

        wxLogin() {
          //新方案
          (_crd && Wechat === void 0 ? (_reportPossibleCrUseOfWechat({
            error: Error()
          }), Wechat) : Wechat).getWxLoginResult((err, loginResult) => {
            if (err) {
              // EventMgr.getInstance().event('tipshow', '获取用户信息失败');
              // App.ui.ShowPanel("WxScopeTipsPanel");
              console.error('登录数据err：', loginResult);
              return;
            }

            console.log('登录数据info：', loginResult);
            this.nickName = loginResult.userInfo.nickName;
            this.avatar = loginResult.userInfo.avatarUrl; // let wxEncrypted = loginResult.encryptedData;
            // let wxIv = loginResult.iv;
            // let wxCode = loginResult.code;
            // let wxUserInfo = loginResult.userInfo;

            var data = {
              "cmd": (_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
                error: Error()
              }), GNetCmd) : GNetCmd).ReqWxSession,
              "lang": "zh",
              "channel": "wx",
              jscode: loginResult.code,
              nickName: this.nickName // wcencrypted: loginResult.encryptedData,
              // wciv: loginResult.iv

            };
            console.warn('发送登录数据：', data);
            (_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
              error: Error()
            }), WmSocket) : WmSocket).getInstance().send({
              "data": data
            });
          });
        }

        UnloadAvatarUrl() {
          var data = {
            "cmd": (_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
              error: Error()
            }), GNetCmd) : GNetCmd).UploadAvatar,
            "lang": "zh",
            "token": this.token,
            "avatar": this.avatar
          };
          (_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
            error: Error()
          }), WmSocket) : WmSocket).getInstance().send({
            "data": data
          });
        }

      }, _class2.instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ac9e7dc56c0d784cc72d825bf4381974ec533458.js.map