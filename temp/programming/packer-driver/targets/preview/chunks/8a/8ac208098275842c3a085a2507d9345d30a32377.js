System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, tyqSDK, _dec, _class, _class2, _crd, ccclass, property, TimeCtr;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOftyqSDK(extras) {
    _reporterNs.report("tyqSDK", "../tyqSDK", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }, function (_unresolved_2) {
      tyqSDK = _unresolved_2.tyqSDK;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85380QApjBE/5nzVaMu0fyo", "TimeCtr", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", TimeCtr = (_dec = ccclass('TimeCtr'), _dec(_class = (_class2 = class TimeCtr extends Component {
        constructor() {
          super(...arguments);
          this.urls = [// "http://124.71.202.184/time.php",
          // "http://192.168.0.113/time.php",
          // 'https://otheve.beacon.qq.com/analytics/upload?tp=js',//tx2
          (_crd && tyqSDK === void 0 ? (_reportPossibleCrUseOftyqSDK({
            error: Error()
          }), tyqSDK) : tyqSDK).getUrl().httpUrl + '/isAlive' // "http://www.baidu.com",//百度
          // 'http://vv.video.qq.com/checktime?otype=json',//tx1
          // 'http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp',//tb //http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp
          // 'http://quan.suning.com/getSysTime.do',//sn http://quan.suning.com/getSysTime.do
          ];
          this.serverTime = 0;
          this.diffServerTime = 0;
          this.isRunServerTime = false;
          this.loginTime = '';
          this.curSystemDate = 0;
        }

        static GetInstance() {
          if (!this.instance) {
            this.instance = new TimeCtr();
            this.instance.InitTimeCtr();
          }

          return this.instance;
        }

        InitTimeCtr() {}

        UpdateServerTime(time) {
          director.getScheduler().unschedule(this.updateTimer, this); // time = new Date().getTime();// 修改服务器时间为本地进行测试 !!

          this.serverTime = time;
          this.curSystemDate = time; // console.log("date:",new Date(time))

          director.getScheduler().schedule(this.updateTimer, this, 1); // let now = new Date(time);
          // console.log("now:",now,now.getFullYear(),now.getMonth()+1,now.getDate(),"星期:"+now.getDay())
        }

        UpdateServerTimeByHeartbeat(time) {
          // console.warn("---时间同步----", time)
          this.serverTime = time;
          this.curSystemDate = time;
        }

        ReInit() {
          director.getScheduler().unschedule(this.updateTimer, this);
        }

        updateTimer() {
          // this.serverTime += 1000;
          this.isRunServerTime = true; // 检查是否隔天了..
          // if (App.center.GetNowDateString() != this.loginTime && this.loginTime != '') {
          //     App.Instance.InitCtr();
          //     this.loginTime = App.center.GetNowDateString();
          // }
        }

        get ServerTime() {
          if (this.serverTime != 0) {
            return this.serverTime;
          }

          return Date.now();
        }

        get ServerDate() {
          if (this.serverTime != 0) {
            return new Date(this.serverTime);
          }
        }

        RequestTime(call) {
          var _this = this;

          return _asyncToGenerator(function* () {
            for (var i = 0; i < _this.urls.length; i++) {
              var url = _this.urls[i];
              var isOk = false;
              var result = {};
              yield _this.request(url).then(r => {
                isOk = true;
                result = r;
              }).catch(r => {
                isOk = false;
                result = r;
              });

              if (isOk) {
                call(result);
                return;
              }
            }

            call({
              result: false
            }); // let xhr = cc.loader.getXMLHttpRequest();
            // xhr.timeout = 1000*3 ;
            // xhr.onreadystatechange = () => {
            // 	// console.log("statusText:",self.xhr.statusText);
            // 	if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
            // 		let respone = xhr.responseText;
            // 		if (!respone) {
            // 			console.log('http error', respone);
            // 			return;
            // 		}
            // 		console.log('收到的消息:',respone);
            //         let message = JSON.parse(respone);
            //         if (message.result == 200) {
            //             // console.log("serverTime:",message.serverTime);
            //             let time = Number(message.serverTime);
            //             // let date = new Date(time);
            //             // console.log("date:",date)
            //             call({result:true,time:time});
            //         }
            // 	}
            //     // console.log("xhr.getAllResponseHeaders():",xhr.getAllResponseHeaders())
            // };
            // xhr.ontimeout = (res) => {
            // 	console.log('ontimeout:', res);
            //     call({result:false})
            // 	// NetMgr.getInstance ().repeatNet(mid);
            // };
            // xhr.onerror = (error) => {
            // 	// 尝试重新发送
            // 	console.log('http.POST Error', error);
            //     call({result:false})
            // };
            // let url = this.urls[0];
            // console.log('url:', url);
            // xhr.open('POST', url, true);
            // xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
            // // xhr.send(JSON.stringify(msg));
            // xhr.send();
          })();
        }

        request(url) {
          return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.timeout = 1000 * 3;

            xhr.onreadystatechange = () => {
              console.log("statusText:", xhr.statusText);

              if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                var respone = xhr.responseText;

                if (!respone) {
                  console.log('http error', respone);
                  return;
                }

                console.log('收到的消息:', respone);
                var message = JSON.parse(respone); // if (message.result == 200) {
                //     // console.log("serverTime:",message.serverTime);
                // }
                // else{
                //     reject({result:false})
                // }

                if (message.serverTime) {
                  var time = Number(message.serverTime);
                  resolve({
                    result: true,
                    time: time
                  });
                } else {
                  reject({
                    result: false
                  });
                }
              } // else{
              //     reject({result:false})
              // }

            };

            xhr.ontimeout = res => {
              // console.log('ontimeout:', res);
              reject({
                result: false
              }); // NetMgr.getInstance ().repeatNet(mid);
            };

            xhr.onerror = error => {
              // 尝试重新发送
              // console.log('http.POST Error', error);
              reject({
                result: false
              });
            }; // console.log('url:', url);


            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json'); // xhr.send(JSON.stringify(msg));

            xhr.send();
          });
        }

      }, _class2.instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8ac208098275842c3a085a2507d9345d30a32377.js.map