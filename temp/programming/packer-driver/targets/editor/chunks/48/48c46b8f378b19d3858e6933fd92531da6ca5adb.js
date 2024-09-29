System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, director, _decorator, tyqSDK, GLoginState, GNetCmd, GNetConst, Http, ServerCtr, TimeCtr, WmSocket, _dec, _class, _class2, _crd, ccclass, property, CronCtr;

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../tyqSDK", _context.meta, extras);
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

  function _reportPossibleCrUseOfHttp(extras) {
    _reporterNs.report("Http", "./http", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerCtr(extras) {
    _reporterNs.report("ServerCtr", "./ServerCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimeCtr(extras) {
    _reporterNs.report("TimeCtr", "./TimeCtr", _context.meta, extras);
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
      tyqSDK = _unresolved_2.tyqSDK;
    }, function (_unresolved_3) {
      GLoginState = _unresolved_3.GLoginState;
      GNetCmd = _unresolved_3.GNetCmd;
      GNetConst = _unresolved_3.GNetConst;
    }, function (_unresolved_4) {
      Http = _unresolved_4.default;
    }, function (_unresolved_5) {
      ServerCtr = _unresolved_5.default;
    }, function (_unresolved_6) {
      TimeCtr = _unresolved_6.default;
    }, function (_unresolved_7) {
      WmSocket = _unresolved_7.WmSocket;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7166aCA9O1JwpNeRr4Y/Af5", "CronCtr", undefined);

      __checkObsolete__(['Component', 'director', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", CronCtr = (_dec = ccclass('CronCtr'), _dec(_class = (_class2 = class CronCtr extends Component {
        constructor(...args) {
          super(...args);
          this.msgArr = [];
          this.msgArrIdx = 0;
          this.isPutEnable = false;
          this.testTimeDelta = 0;
        }

        static getInstance() {
          if (!this._instance) {
            this._instance = new CronCtr();
          }

          return this._instance;
        }

        //保存队列，第一条和下一条按时间差150毫秒内的记录，统一一次性发送，发送成功后再发送下一批次
        //断线重连
        //本地存储登录返回的uid，区号
        //数据存储，key_uid_区号_time,按照time进行排序
        //服务端记录一个时间
        //切号
        // saverQueue:object[] = []; //{data:协议内容,time:TimeCtr.GetInstance().ServerTime}
        //
        // set SaverQueue(data){
        //     this.saverQueue.push({data:data, time:TimeCtr.GetInstance().ServerTime})
        // }
        init() {
          director.on((_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
            error: Error()
          }), GNetCmd) : GNetCmd).Heartbeat.toString(), this.onHeartbeat);
          director.on((_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
            error: Error()
          }), GNetCmd) : GNetCmd).SaveUserRecord.toString(), this.respSaveUserRecord, this);
          this.schedule(this.reqHeartBeat, 3);
          this.startHeartbeat();
        }

        startHeartbeat() {
          ///重连定时器
          (_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
            error: Error()
          }), WmSocket) : WmSocket).getInstance();
          (_crd && Http === void 0 ? (_reportPossibleCrUseOfHttp({
            error: Error()
          }), Http) : Http).getInstance().httpPost((_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).getUrl().httpUrl + (_crd && GNetConst === void 0 ? (_reportPossibleCrUseOfGNetConst({
            error: Error()
          }), GNetConst) : GNetConst).Http_isAlive, {}, res => {
            console.log("server response :", res);

            if (res != -1) {
              (_crd && TimeCtr === void 0 ? (_reportPossibleCrUseOfTimeCtr({
                error: Error()
              }), TimeCtr) : TimeCtr).GetInstance().UpdateServerTime(res.serverTime);
              (_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
                error: Error()
              }), WmSocket) : WmSocket).getInstance().connect();
            }
          }, () => {
            (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().loginState = (_crd && GLoginState === void 0 ? (_reportPossibleCrUseOfGLoginState({
              error: Error()
            }), GLoginState) : GLoginState).loginFail;
          }); // ()=>{
          //     if(WmSocket.getInstance().isConnected()==false){
          //         Http.getInstance().httpPost(gl.server_http_url, {}, (res)=>{
          //             // cc.log("接受到的请求内容是", res)
          //             if(res != -1){
          //                 TimeCtr.GetInstance().UpdateServerTime(res.serverTime);
          //                 EventMgr.getInstance().event("ws_reconnect");
          //             }
          //         });
          //     }else{
          //         if(GlParam.isEnterGame){
          //             this.heartbeatCheck()
          //         }
          //     }
          // }
        }

        onHeartbeat(data) {
          // console.log("heartbeat ", data)
          if (data.status != (_crd && GNetConst === void 0 ? (_reportPossibleCrUseOfGNetConst({
            error: Error()
          }), GNetConst) : GNetConst).ResSuccess) {
            // GD.GameState = GGameState.stop
            // mygame.pause()
            // TimeCtr.GetInstance().ServerTime = data.time
            //被抢登了
            if ((_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().loginState == (_crd && GLoginState === void 0 ? (_reportPossibleCrUseOfGLoginState({
              error: Error()
            }), GLoginState) : GLoginState).loginWithAccount) {
              (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
                error: Error()
              }), ServerCtr) : ServerCtr).GetInstance().loginState = (_crd && GLoginState === void 0 ? (_reportPossibleCrUseOfGLoginState({
                error: Error()
              }), GLoginState) : GLoginState).noYet;
            }

            (_crd && TimeCtr === void 0 ? (_reportPossibleCrUseOfTimeCtr({
              error: Error()
            }), TimeCtr) : TimeCtr).GetInstance().ReInit(); // uiManager.instance.showDialog(Const.Dialogs.kick_prompt)
            // App.event(GameEvent.ShowFlyTips,{text:`<color=red>账号已在其他设备登录</c>`})//${i18n.t('txt.login_msg_out')}

            CronCtr.getInstance().isPutEnable = false; // let errMsg = `账号已在其他设备登录`;
            // let cheatLevel = localStorage.getItem("cheatLevel")
            // if(cheatLevel!=""){
            // 	cheatLevel = parseInt(cheatLevel)
            // 	if(cheatLevel==1){
            // 		errMsg = `<color=${Res.RedColor}>服务端检测到你正在使用非法外挂，如再发现直接封号</c>`;
            // 	}else if(cheatLevel==2){
            // 		errMsg = `<color=${Res.RedColor}>该区账号涉嫌作弊已被封禁，如再开挂所有区服全部封禁 </c>`;
            // 	}else if(cheatLevel>=3){
            // 		errMsg = `<color=${Res.RedColor}>该账号已封禁</c>`;
            // 	}
            // 	cc.sys.localStorage.removeItem("cheatLevel")
            // }
            // cc.game.restart();
          } else {
            (_crd && TimeCtr === void 0 ? (_reportPossibleCrUseOfTimeCtr({
              error: Error()
            }), TimeCtr) : TimeCtr).GetInstance().UpdateServerTimeByHeartbeat(data.time * 1000);
            (_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
              error: Error()
            }), WmSocket) : WmSocket).getInstance().lastHeartbeatTime = (_crd && TimeCtr === void 0 ? (_reportPossibleCrUseOfTimeCtr({
              error: Error()
            }), TimeCtr) : TimeCtr).GetInstance().ServerTime;
          } // else{
          // 	//检查版本号是否和服务端匹配
          // 	if (data.version.includes('@'+this.center.Version)==false){
          // 		this.ui.CloseAllPanel();
          // 		this.ui.ShowPanel('LoadPanel');
          // 		//弹窗提示当前版本号不对
          // 		App.event(GameEvent.ShowFlyTips,{text:`<color=red>发现新版本，请先更新!</c>`})//${i18n.t('txt.login_msg_version')}
          // 		GlParam.isEnterGame = false;
          // 	}
          // }

        }

        reqHeartBeat() {
          // console.log("-----心跳-----", WmSocket.getInstance().isConnected(), ServerCtr.GetInstance().loginState);
          if ((_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
            error: Error()
          }), WmSocket) : WmSocket).getInstance().isConnected() == false) {
            // uiManager.instance.showDialog(Const.Dialogs.net_prompt, )
            // Notifications.emit(GDef.wdEvent.showTip, {msg:"网络连接异常"})
            (_crd && Http === void 0 ? (_reportPossibleCrUseOfHttp({
              error: Error()
            }), Http) : Http).getInstance().httpPost((_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
              error: Error()
            }), tyqSDK) : tyqSDK).getUrl().httpUrl + (_crd && GNetConst === void 0 ? (_reportPossibleCrUseOfGNetConst({
              error: Error()
            }), GNetConst) : GNetConst).Http_isAlive, {}, res => {
              // cc.log("接受到的请求内容是", res)
              if (res != -1) {
                (_crd && TimeCtr === void 0 ? (_reportPossibleCrUseOfTimeCtr({
                  error: Error()
                }), TimeCtr) : TimeCtr).GetInstance().UpdateServerTime(res.serverTime);
                director.emit("ws_reconnect");
              }
            }, () => {
              (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
                error: Error()
              }), ServerCtr) : ServerCtr).GetInstance().loginState = (_crd && GLoginState === void 0 ? (_reportPossibleCrUseOfGLoginState({
                error: Error()
              }), GLoginState) : GLoginState).loginFail;
            });
          } else {
            if ((_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().loginState == (_crd && GLoginState === void 0 ? (_reportPossibleCrUseOfGLoginState({
              error: Error()
            }), GLoginState) : GLoginState).loginFail) {
              //重连后登录
              (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
                error: Error()
              }), ServerCtr) : ServerCtr).GetInstance().wxLoginBegin();
            } else {
              this.heartbeatCheck();
            }
          }
        }

        respSaveUserRecord(data) {
          if (data.status == (_crd && GNetConst === void 0 ? (_reportPossibleCrUseOfGNetConst({
            error: Error()
          }), GNetConst) : GNetConst).ResFail) {
            console.error("发现作弊1----", data, data.cheatLevel, data.hasOwnProperty("cheatLevel")); // let cheatLevel = data.cheatLevel
            // if(cheatLevel!==undefined){
            //     // cc.log("cheatLevel2--------!!!!---", cheatLevel)
            //     localStorage.setItem("cheatLevel", cheatLevel+"")
            //     //直接发送一个心跳利用心跳到登录页面
            //     let data = {
            //         "cmd": GNetCmd.Heartbeat,
            //         "lang": "zh",
            //         "token": ServerCtr.GetInstance().token,//GameStorage.getString("loginToken"),
            //     }
            //     WmSocket.getInstance().send({"data":data});
            // }
            // uiManager.instance.showDialog(Const.Dialogs.kick_prompt)
            // GameStorage.setString("cheatLevel", data.cheatLevel)
          } // if(data["isEnd"]==false){
          //     this.sendMultiMsg(data["idx"]+1)
          // }

        } // cloudSave(obj){
        //     // 进入游戏每隔5分钟存储一次
        //     obj.schedule(()=>{
        //         if(!GlParam.isEnterGame){
        //             return;
        //         }
        //         this.cloudSaveManual()
        //         // if(WmSocket.getInstance().isConnected()){
        //         //     let data = {
        //         //         "cmd": GNetCmd.SaveUserRecord,
        //         //         "lang": "zh",
        //         //         "token": GameStorage.getString("loginToken"),
        //         //         // "jsonData": JSON.stringify(GameStorage.getAll()),
        //         //         "jsonData": JSON.stringify(GameStorage.getAll()),
        //         //     }
        //         //     cc.log("长度测试",JSON.stringify(GameStorage.getAll()).length)
        //         //     WmSocket.getInstance().send({"data":data});
        //         // }
        //     }, 300);
        // }


        sendMultiMsg(i) {
          // for(let i=0; i<strArr.length; i++){
          //
          // }
          let data = {
            // "cmd": GNetCmd.SaveUserRecord,
            "cmd": (_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
              error: Error()
            }), GNetCmd) : GNetCmd).SaveUserRecord,
            "lang": "zh",
            "type": "slice",
            "token": (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().token,
            //GameStorage.getString("loginToken"),
            // "jsonData":JSON.stringify(GameStorage.getAll()),
            "jsonData": this.msgArr[i],
            "isEnd": i == this.msgArr.length - 1,
            "isStart": i == 0,
            "idx": i
          };

          if (!data.jsonData || data.jsonData == "" || data.jsonData == "{}") {
            return;
          } // cc.log("分段存储", data)


          (_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
            error: Error()
          }), WmSocket) : WmSocket).getInstance().send({
            "data": data
          });
        } //保存数据到云端


        saveDataToCloud(key, val) {
          if ((_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().loginState != (_crd && GLoginState === void 0 ? (_reportPossibleCrUseOfGLoginState({
            error: Error()
          }), GLoginState) : GLoginState).loginWithAccount) {
            return;
          } // cc.log("上传数据时间标记---------", new Date().getTime(),  new Date().getTime()-this.testTimeDelta )


          this.testTimeDelta = new Date().getTime();

          if ((_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
            error: Error()
          }), WmSocket) : WmSocket).getInstance().isConnected()) {
            let data = {
              "cmd": (_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
                error: Error()
              }), GNetCmd) : GNetCmd).SaveUserRecord,
              "lang": "zh",
              "type": "single",
              "token": (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
                error: Error()
              }), ServerCtr) : ServerCtr).GetInstance().token,
              //GameStorage.getString("loginToken"),
              "version": (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
                error: Error()
              }), ServerCtr) : ServerCtr).GetInstance().dataVersion,
              // "jsonData":JSON.stringify(GameStorage.getAll()),
              // "jsonData":JSON.stringify(GameStorage.getAll(isFirst)),
              "key": key,
              "val": String(val),
              "dml": "add upd"
            }; // cc.log("长度测试", JSON.stringify(GameStorage.getAll(isFirst)).length)

            (_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
              error: Error()
            }), WmSocket) : WmSocket).getInstance().send({
              "data": data
            });
          }
        }

        uploadAllRecord(jsonData) {
          if ((_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
            error: Error()
          }), ServerCtr) : ServerCtr).GetInstance().loginState != (_crd && GLoginState === void 0 ? (_reportPossibleCrUseOfGLoginState({
            error: Error()
          }), GLoginState) : GLoginState).loginWithAccount) {
            return;
          }

          let data = {
            // "cmd": GNetCmd.SaveUserRecord,
            "cmd": (_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
              error: Error()
            }), GNetCmd) : GNetCmd).SaveUserRecordAll,
            "lang": "zh",
            "type": "single",
            "token": (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().token,
            //GameStorage.getString("loginToken"),
            // "jsonData":JSON.stringify(GameStorage.getAll()),
            "version": (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().dataVersion,
            "allData": JSON.stringify(jsonData)
          }; // if (!data.jsonData || data.jsonData == "" || data.jsonData == "{}") {
          //     return
          // }
          // cc.log("长度测试", JSON.stringify(GameStorage.getAll(isFirst)).length)

          console.warn("发送数据到云端---", data);
          (_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
            error: Error()
          }), WmSocket) : WmSocket).getInstance().send({
            "data": data
          });
        } // UploadEmptyRecord(){
        //     if (!ServerCtr.GetInstance().isLogin) {
        //         return;
        //     }
        //     let data = {
        //         // "cmd": GNetCmd.SaveUserRecord,
        //         "cmd": GNetCmd.SaveUserRecordAll,
        //         "lang": "zh",
        //         "type": "single",
        //         "token": ServerCtr.GetInstance().token,//GameStorage.getString("loginToken"),
        //         // "jsonData":JSON.stringify(GameStorage.getAll()),
        //         "allData":JSON.stringify({}),
        //     }
        //     // if (!data.jsonData || data.jsonData == "" || data.jsonData == "{}") {
        //     //     return
        //     // }
        //     // cc.log("长度测试", JSON.stringify(GameStorage.getAll(isFirst)).length)
        //     WmSocket.getInstance().send({"data":data});
        // }
        // cloudDeleteManual(key:string){
        //     // if (!this.isPutEnable) {
        //     //     return;
        //     // }
        //     if (!ServerCtr.GetInstance().isLogin) {
        //         return;
        //     }
        //     if(WmSocket.getInstance().isConnected()){
        //         let data = {
        //             // "cmd": GNetCmd.SaveUserRecord,
        //             "cmd": GNetCmd.SaveUserRecord,
        //             "lang": "zh",
        //             "type": "single",
        //             "token": ServerCtr.GetInstance().token,//GameStorage.getString("loginToken"),
        //             "key":key,
        //             "val":"",
        //             "dml":"del"
        //         }
        //         Public.warn("del--------------")
        //         WmSocket.getInstance().send({"data":data});
        //     }
        // }


        heartbeatCheck() {
          let data = {
            "cmd": (_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
              error: Error()
            }), GNetCmd) : GNetCmd).Heartbeat,
            "lang": "zh",
            "token": (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().token //GameStorage.getString("loginToken"),

          };
          (_crd && WmSocket === void 0 ? (_reportPossibleCrUseOfWmSocket({
            error: Error()
          }), WmSocket) : WmSocket).getInstance().send({
            "data": data
          });
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=48c46b8f378b19d3858e6933fd92531da6ca5adb.js.map