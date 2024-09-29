System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, _decorator, NATIVE, tyqSDK, GLoginState, GNetCmd, ServerCtr, _dec, _class, _class2, _crd, ccclass, property, WmSocket;

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../tyqSDK", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGLoginState(extras) {
    _reporterNs.report("GLoginState", "./conf", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGNetCmd(extras) {
    _reporterNs.report("GNetCmd", "./conf", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerCtr(extras) {
    _reporterNs.report("ServerCtr", "./ServerCtr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      _decorator = _cc._decorator;
    }, function (_ccEnv) {
      NATIVE = _ccEnv.NATIVE;
    }, function (_unresolved_2) {
      tyqSDK = _unresolved_2.tyqSDK;
    }, function (_unresolved_3) {
      GLoginState = _unresolved_3.GLoginState;
      GNetCmd = _unresolved_3.GNetCmd;
    }, function (_unresolved_4) {
      ServerCtr = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9880dNyHD1CKppdHqsFlPoY", "wmsocket", undefined);

      __checkObsolete__(['director', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WmSocket", WmSocket = (_dec = ccclass('WmSocket'), _dec(_class = (_class2 = class WmSocket {
        //key为stickId, val为stick数组
        // Stick_Id = "stick_id"
        // Stick_Len = "stick_len"
        // Stick_No = "stick_no" //服务端不处理，只判断字符总长度，前端自己用是否发送结束
        // Stick_Body = "stick_val"

        /**
         * 单例
         */
        static getInstance() {
          if (!this._instance) {
            this._instance = new WmSocket();
          }

          return this._instance;
        }

        constructor() {
          this.eventHandlers = [];
          this.lastHeartbeatTime = 0;
          this.isWsConnect = false;
          this.ws = null;
          this.wxws = null;
          this.msgBuff = {};
          this.isFirst = true;
          this.addListener();
        }

        addListener() {
          director.on("ws_reconnect", this.onReconnect, this);
          director.on("ws_close", this.onClose, this);
          director.on((_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
            error: Error()
          }), GNetCmd) : GNetCmd).StickPack, this.respStickPack, this);
        }

        respStickPack(data) {
          // cc.log("粘包接受情况--", data)
          if (data["isEnd"] == false) {
            this.sendStickPack(data["stick_id"], data["idx"] + 1);
          } else {
            delete this.msgBuff[data["stick_id"]]; //清空本地缓存
          }
        }

        getGuid() {
          var d = new Date().getTime();
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
          });
        }

        getTotalLen(arr) {
          var len = 0;

          for (var i = 0; i < arr.length; i++) {
            len += arr[i].length;
          }

          return len;
        }

        sendStickPack(uuid, i) {
          var data = {
            "cmd": (_crd && GNetCmd === void 0 ? (_reportPossibleCrUseOfGNetCmd({
              error: Error()
            }), GNetCmd) : GNetCmd).StickPack,
            "stick_id": uuid,
            "stick_len": this.getTotalLen(this.msgBuff[uuid]),
            "stick_val": this.msgBuff[uuid][i],
            "isEnd": i == this.msgBuff[uuid].length - 1,
            "isStart": i == 0,
            "idx": i
          }; // cc.log("分段存储", data)

          WmSocket.getInstance().sendSP(JSON.stringify(data));
        }

        onReconnect() {
          // 重连..
          if (this.isFirst) {
            this.isFirst = false;
            this.connect();
            console.log("发起第一次连-------");
          } else {
            if (!this.isConnected()) {
              this.connect();
              console.log("发起重连-------");
            }
          }
        }

        onClose() {
          // 断开连接..
          if (!this.isConnected()) {
            return;
          }

          if (!WmSocket.getInstance().isWsConnect) {
            this.ws.close();
          } else {
            this.wxws.close();
          }
        }

        connect() {
          this.ws_connect();
        }

        ws_connect() {
          console.log("ws_connect...........................");

          try {
            // let cerUrl = cc.url.raw('resources/ssl/fishing.cer');
            // if (cc.loader.md5Pipe) {
            // 	cerUrl = cc.loader.md5Pipe.transformURL(cerUrl);
            // }
            // this._socket = new WebSocket(this._url, [], cerUrl);
            // let pemUrl = cc.url.raw("resources/ssl/5556166_obeliskgames.cn.cer");
            // cc.log(pemUrl)
            // pemUrl = cc.loader.md5Pipe.transformURL(pemUrl)
            // cc.log(pemUrl)
            // this.ws = new WebSocket(gl.ws_url,  pemUrl);
            if (NATIVE) {
              // let pemUrl = ;
              // pemUrl = loader.md5Pipe.transformURL(pemUrl)
              // let cerUrl = url.raw("resources/ssl/Digicert-OV-DV-root.cer");
              // if (loader.md5Pipe) {
              // 	cerUrl = loader.md5Pipe.transformURL(cerUrl);
              // }
              // this.ws = new WebSocket(gl.ws_url, null, cerUrl);
              this.ws = new WebSocket((_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).getUrl().wsUrl); // GNetConf.mrtgd_WsUrl
              // assetManager.getBundle('resources').load("ssl/www.obeliskgames.cn.cer", Asset, (err,res)=>{
              // 	// let pemUrl = url.raw("resources/5556166_obeliskgames.cn.cer");
              // 	// pemUrl = loader.md5Pipe.transformURL(pemUrl)
              // 	this.ws = new WebSocket(gl.ws_url,  res.nativeUrl);
              // });
            } else {
              this.ws = new WebSocket((_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
                error: Error()
              }), tyqSDK) : tyqSDK).getUrl().wsUrl);
            }
          } catch (e) {
            console.error("网络连接异常 --- exception---------------- ", e);
          }

          this.ws.onopen = event => {
            this.isWsConnect = true;
            console.log("Send Text WS was opened.");
            (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().wxLoginBegin(); // console.log("onopen this.ws.readyState:",this.ws.readyState);
            // Notifications.emit("ws_connect",{type:'connect'});
          };

          this.ws.onmessage = event => {
            // console.log("response text msg: " + event.data, event.data.toString());
            // console.log("onmessage this.ws.readyState:",this.ws.readyState);
            this.onMessage(event.data);
          };

          this.ws.onerror = event => {
            console.error("Send Text fired an error", event);
            (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().loginState = (_crd && GLoginState === void 0 ? (_reportPossibleCrUseOfGLoginState({
              error: Error()
            }), GLoginState) : GLoginState).loginWithoutAccount; // console.log("onerror this.ws.readyState:",this.ws.readyState);
            // Notifications.emit("ws_connect",{type:'disconnect'});
          };

          this.ws.onclose = event => {
            this.isWsConnect = false;
            console.log("WebSocket instance closed.");
            (_crd && ServerCtr === void 0 ? (_reportPossibleCrUseOfServerCtr({
              error: Error()
            }), ServerCtr) : ServerCtr).GetInstance().loginState = (_crd && GLoginState === void 0 ? (_reportPossibleCrUseOfGLoginState({
              error: Error()
            }), GLoginState) : GLoginState).loginWithoutAccount; // console.log("onclose this.ws.readyState:",this.ws.readyState);
            // Notifications.emit("ws_connect",{type:'disconnect'});
          };
        }

        onMessage(resp) {
          var respJson = JSON.parse(resp); // log("onMessage resp base64解开后JSON对象:", respJson)
          // console.log("onMessage resp:", respJson.cmd, respJson)

          director.emit(respJson.cmd + "", respJson);
        }

        isConnected() {
          return this.isWsConnect;
        }

        sendSP(jsonData) {
          if (!this.isConnected()) {
            return;
          }

          this.ws.send(jsonData); //NetMgr.getInstance ().jsencrypt()
        }

        send(netdata) {
          // log("###isConnected :",this.isConnected())
          if (!this.isConnected()) {
            return;
          } //以下是粘包处理


          var jsonData = JSON.stringify(netdata.data);
          var ontTimeLimit = 109586 / 5; //这里差不错20k 109586/5，必须小于80k
          // log("-------粘包-------", jsonData.length, ontTimeLimit, jsonData.length/ontTimeLimit+1)

          if (jsonData.length > ontTimeLimit) {
            var str = jsonData;
            var strArr = [];
            var n = jsonData.length / ontTimeLimit + 1;

            for (var i = 0, l = str.length; i < n; i++) {
              var a = str.slice(ontTimeLimit * i, ontTimeLimit * (i + 1)); // let a = str.substr(i*ontTimeLimit,ontTimeLimit)
              // log("分段存储1111", a)

              strArr.push(a);
            }

            var uuid = this.getGuid();
            this.msgBuff[uuid] = strArr;
            this.sendStickPack(uuid, 0);
            return;
          } // let data = JSON.stringify(netdata.data)
          // log("### client send data base64处理:", data)


          this.ws.send(jsonData); //NetMgr.getInstance ().jsencrypt()
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6facf67886564716048987440df28bbd9a008b62.js.map