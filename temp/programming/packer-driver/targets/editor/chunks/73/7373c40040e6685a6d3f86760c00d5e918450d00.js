System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, H5AdSdk4399, _crd;

  _export("H5AdSdk4399", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6ae05hgNhdP2qwhrqgKJeMz", "H5AdSdk4399", undefined);

      __checkObsolete__(['assetManager']);

      _export("H5AdSdk4399", H5AdSdk4399 = class H5AdSdk4399 {
        constructor() {}

        static get instance() {
          if (!this._instance) {
            this._instance = new H5AdSdk4399();
          }

          return this._instance;
        }
        /**
         * 激励视频广告统一播放接口
         * 完整观看广告后，获得奖励，调用：tmpFunc(1)
         * 中途退出或者观看失败，调用：tmpFunc(0)
         * @param cb 
         */


        showRewardedAd(successCb) {
          if (window.h5api) {
            console.log("开始播放 h5api");
            /**
             * 此callback回调函数的形式
             *
             * @param obj  广告状态
             */

            function videocallback(obj) {
              console.log("代码:" + obj.code + ",消息:" + obj.message);

              if (obj.code === 10000) {
                console.log("开始播放");
              } else if (obj.code === 10001) {
                console.log("播放结束");
                successCb && successCb(1);
              } else {
                console.log("广告异常");
                successCb && successCb(0);
              }
            }

            window.h5api.playAd(videocallback);
            return;
          }

          return;
        }

        checkDownUrl() {
          if (window.h5api) {
            let is4399 = true;

            let checkbin = function () {
              if (!is4399) return;

              let selfPip = function (task, done) {
                const input = task.output = task.input;

                for (let i = 0; i < input.length; i++) {
                  let item = input[i];
                  if (!item.url) continue;
                  let arr = item.url.split(".");

                  if (arr.length >= 2 && arr[arr.length - 1] == "cconb") {
                    item.url = "";

                    for (let index = 0; index < arr.length - 1; index++) {
                      const element = arr[index];
                      item.url += element + ".";
                    }

                    item.url += "_cconb.dbbin";
                  }

                  if (arr.length >= 2 && arr[arr.length - 1] == "bin") {
                    item.url = "";

                    for (let index = 0; index < arr.length - 1; index++) {
                      const element = arr[index];
                      item.url += element + ".";
                    }

                    item.url += "dbbin";
                  }
                }

                return null;
              }; //@ts-ignore
              // if (!CC_BUILD) return;


              assetManager.transformPipeline.append(selfPip); //@ts-ignore

              let dw = assetManager.downloader._downloaders;
              let dbbin = dw[".dbbin"];
              assetManager.downloader.register("dbbin", (url, options, onComplete) => {
                if (url.includes("_cconb")) {
                  dw[".cconb"]();
                } else {
                  dbbin();
                }
              });
            };

            checkbin();
          }
        }

      });

      H5AdSdk4399._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7373c40040e6685a6d3f86760c00d5e918450d00.js.map