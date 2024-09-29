System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Http, networkMgr, NetworkPackage, _crd, NetworkMgr;

  function _reportPossibleCrUseOfHttp(extras) {
    _reporterNs.report("Http", "./weHttp", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Http = _unresolved_2.Http;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2991fUDIpdHqILuAYJgQGGA", "weNetworkMgr", undefined);

      networkMgr = class networkMgr {
        ////////////////////////////
        // 类成员
        ///////////////////////////

        /** 消息ID */

        /** 消息队列 */

        /** 每条消息最多的发送次数 */

        /** 时间 */

        /** token */

        /** 消息锁: false, 可以正常发送消息，已上锁 */

        /** 加密规则 */

        /** 加密code, 服务端客户端要统一 */

        /** 计时时间: 1s */

        /** 服务器报错 */

        /** 成功回包code */

        /** 重起游戏的错误码 */

        /** 错误码列表 */

        /** 超过时间 */

        /** uid */
        ////////////////////////////
        // get、set构造器
        ///////////////////////////
        set errorNetCode(codes) {
          this._errorNetCode = codes;
        }

        set encryptCode(str) {
          this._encryptCode = str;
        }

        set errorRestartGameCode(array) {
          this._errorRestartGameCode = array;
        }

        set successCode(code) {
          this._successCode = code;
        }

        set errorServerCode(code) {
          this._errorServerCode = code;
        }

        set encryptRule(array) {
          this._encryptRule = array;
        }

        set intervalTime(time) {
          this._intervalTime = time;
        }

        set overTime(time) {
          this._overTime = time;
        }

        set dealHeadListener(cb) {
          this._dealHeadListener = cb;
        }

        set uid(uid) {
          this._uid = uid;
        } ////////////////////////////
        // 接口
        ///////////////////////////


        constructor() {
          this.mid = 0;
          this.messageList = {};
          this.limitMessageNum = 5;
          this.timer = null;
          this.token = '';
          this.isLock = false;
          this._dealHeadListener = null;
          this._encryptRule = ['mid:', 'uid:', 'key:', 'data:'];
          this._encryptCode = 'zqkg';
          this._intervalTime = 3000;
          this._errorServerCode = 500;
          this._successCode = 0;
          this._errorRestartGameCode = [102];
          this._errorNetCode = {};
          this._overTime = 5000;
          this._uid = 0;
          this.lastMessage = null;
          this.mid = 0;
          this.messageList = {};
          this.timer = null;
        }
        /**
         * @description 发送xhr消息
         * @param {string} _route
         * @param {Object} data
         * @param {Function} cb
         * @param isRepeat 是否重复发送事件
         * @param fail 失败回调
         */


        xhrPost(_route, data, cb, fail, isRepeat) {
          if (isRepeat === void 0) {
            isRepeat = false;
          }

          this.mid += 1; // 包

          var msg = {
            head: {
              route: _route,
              mid: this.mid.toString(),
              uid: this._uid
            },
            body: data
          }; // 消息队列的数据结构

          var netPackage = new NetworkPackage();
          netPackage.route = _route;
          netPackage.mid = this.mid;
          netPackage.data = msg;

          if (cb) {
            netPackage.callback = cb;
          }

          netPackage.isRepeat = isRepeat;

          if (fail) {
            netPackage.failCallBack = fail;
          }

          this.messageList[this.mid] = netPackage; // 开始计时

          this.startTimer();

          if (!this.isLock) {
            this.sendMessage(this.mid);
          }
        }
        /**
         * @description 检查回包
         * @param _respone
         */


        checkRespone(route, _respone, mid) {
          // 解密
          var respone = this.jsdecrypt(_respone);
          var data = respone; // if (respone.result) {
          // 	data = this.jsdecrypt(respone.result);
          // }
          // respone = this.jsdecrypt(respone);
          // let head: any = respone.head;
          // let body: any = respone.body;
          // let code = head.code || 0;
          // let mid = 0;
          // 刷新token
          // this.token = head.token;

          var message = this.messageList[mid]; // 头部回包处理
          // this.succeedResponeHead(head);
          // 服务端回包，返回需要的数据
          // if (code === this._successCode) {

          this.succeedResponeBody(message, data, mid); // 服务端回包中出现错误码
          // } else {
          // this.checkErrorCode(code, mid);
          // }
        }

        succeedResponeHead(head) {
          if (this._dealHeadListener) this._dealHeadListener(head);
        } ////////////////////////////
        // 业务逻辑
        ///////////////////////////

        /**
         * @description 没有错误信息，把服务端数据发送到业务逻辑层
         * @param message
         * @param body
         * @param mid
         */


        succeedResponeBody(message, body, mid) {
          this.isLock = false;
          this.clearTimer();
          this.deleteMessageListItem(mid, false);
          this.checkNextMessage();

          if (message && message.callback) {
            message.callback(body);
          }
        }
        /**
         * @description 网络消息code检查
         * @param code 错误码；需要和服务端协定
         * @param mid
         */


        checkErrorCode(code, mid) {
          // 收到消息500 则继续重发直到发送次数限制.
          if (code !== this._errorServerCode) {
            this.deleteMessageListItem(mid, true);
          } // 重启游戏


          for (var index = 0; index < this._errorRestartGameCode.length; index++) {
            var errorCode = this._errorRestartGameCode[index];

            if (code === errorCode) {
              this.restartGame();
            }
          }

          var resultStr = this.getErrorCodeMeaning(code);
          console.error("----> 返回错误, code:", code, resultStr); // TODO: 把错误码信息返回给业务逻辑
          // Notifications.emit('sys_http_error', { code: code, mid: mid });
        }

        checkNextMessage() {
          for (var key in this.messageList) {
            var message = this.messageList[key];

            if (message.sendNum === 0) {
              this.sendMessage(message.mid);
            }
          }
        }
        /**
         * @description 删除消息队列中的元素
         * @param mid
         * @param fail 是否是失败
         */


        deleteMessageListItem(mid, fail) {
          if (this.messageList && this.messageList[mid]) {
            if (this.messageList[mid].failCallBack && fail) {
              this.messageList[mid].failCallBack();
            }

            delete this.messageList[mid];
          }
        }
        /**
         * @description 数据加密（需要和服务端约定）
         * @param data
        //  */
        // private jsencrypt(data: any) {
        // 	// let head = data.head;
        // 	// let body = JSON.stringify(data.body);
        // 	// let encryptData = `${this._encryptRule[0]}${head.mid}&${this._encryptRule[1]}${head.uid}&${this._encryptRule[2]}${this._encryptCode}&${this._encryptRule[3]}${body}`;
        // 	// data.head.mi = Sha1.hex_hmac_sha1(this._encryptCode, encryptData).slice(5);
        // 	return data;
        // }

        /**
         * @description 解密
         * @param _data
         */


        jsdecrypt(_data) {
          var obj = null;

          if (typeof _data == 'string') {
            try {
              obj = JSON.parse(_data);
            } catch (e) {}
          } // if (obj.result && obj) {
          // 	obj.result = window.DES3.decrypt(global.DES3_KEY, obj.result);
          // }


          return obj;
        }
        /**
         * @description 发送消息队列
         * @param {number} mid
         * @param {number} isCheck 是否检查包的发送次数是否超过上限
         */


        sendMessage(mid, isCheck) {
          if (isCheck === void 0) {
            isCheck = true;
          }

          // 消息队列为空
          if (Object.keys(this.messageList).length === 0) {
            return;
          }

          var message = this.messageList[mid]; // 一条消息的发送次数大于限制次数，建议重启游戏

          if (isCheck && message.sendNum >= this.limitMessageNum || !isCheck && message.errorNum >= this.limitMessageNum) {
            console.error(message.data.head.route, 'message send too much times');
            this.deleteMessageListItem(mid, false); // Notifications.emit('sys_http_try_too_many_time');

            return;
          }

          message.sendNum += 1;
          var data = message.data;
          var route = data.head.route;
          data.head.token = this.token; // 加密

          this.lastMessage = message;
          (_crd && Http === void 0 ? (_reportPossibleCrUseOfHttp({
            error: Error()
          }), Http) : Http).post(route, data.body, mid);
        }
        /**
         * @description 获取错误码对应的意思
         * @param code
         */


        getErrorCodeMeaning(code) {
          var errStr = this._errorNetCode[code];
          var resultStr = errStr;

          if (!errStr) {
            resultStr = "\u670D\u52A1\u5668\u9519\u8BEF\u7801\uFF1A " + code;
          }

          return resultStr;
        }
        /**
         * @description 重起游戏
         */


        restartGame() {}
        /**
         * @description 开始定时器
         */


        startTimer() {
          if (!this.timer) {
            this.timer = setInterval(this.checkPackage.bind(this), this._intervalTime);
          }
        }
        /**
         * @description 检查发包
         */


        checkPackage() {
          if (Object.keys(this.messageList).length !== 0) {
            for (var key in this.messageList) {
              var message = this.messageList[key];
              var time = Date.now();

              if (time - message.time > this._overTime && message.isRepeat) {
                var mid = message.mid;
                this.sendMessage(mid);
                break;
              } else {
                this.deleteMessageListItem(message.mid, false);
              }
            }
          } else {
            this.clearTimer();
          }
        }
        /**
         * @description 清理定时器
         */


        clearTimer() {
          if (this.timer) {
            clearInterval(this.timer);
            this.timer = 0;
          }
        }
        /**
         * http请求err处理
         * @param mid 消息id
         * @param error 错误内容
         * @param tip 错误提示文本
         */


        onHttpError(mid, error, tip) {
          if (tip) console.error("----> onHttpError", tip, error);else console.error("----> onHttpError", error);
          var pack = this.messageList[mid];

          if (pack) {
            //如果需要重复
            if (pack.isRepeat) {
              setTimeout(() => {
                pack.errorNum++;
                this.sendMessage(mid, false);
              }, 3000);
            } else {
              this.deleteMessageListItem(mid, true);
            }
          }
        }

      };
      networkMgr._instance = new networkMgr();

      _export("NetworkMgr", NetworkMgr = networkMgr._instance);
      /**
       * NetworkPackage
       * 网络包
       */
      // main


      _export("default", NetworkPackage = class NetworkPackage {
        /**接口成功回调 */

        /**接口失败回调 */

        /**是否重复调用 */
        constructor(msg) {
          this.route = '';
          this.lock = false;
          this.mid = 0;
          this.data = null;
          this.callback = null;
          this.failCallBack = null;
          this.time = 0;
          this.sendNum = 0;
          this.errorNum = 0;
          this.isRepeat = false;
          this.time = Date.now();

          for (var key in msg) {
            var that = this;
            that[key] = msg[key];
          }
        }

      });

      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f0ba49b67a0782c9ad9f0339e825f0478aaafeec.js.map