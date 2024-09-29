System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, utilTools;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b89676Mxu5K2pyA+Ct5gTyj", "utilTools", undefined);

      /**
       * 拓展String.format方法
       * 需要在cc.d.ts中添加以下声明代码，使用过程中才会有提示，并且不会报错
      declare interface String {
          format(...agrs: any[]): string;
          parseColor();
      }
       */
      String.prototype.format = function () {
        var str = this;

        for (var i in arguments) {
          str = str.replace(/\%\w/, arguments[i]);
        }

        return str;
      }; // // 错误提示去不掉，暂时不用了
      // Object.defineProperty(Array.prototype, "sortArr", {
      //     value: function (compareFunc: Function) {
      //         let arr = this;
      //         if (arr.length <= 1) {
      //             return;
      //         }
      //         for (let i = 0; i < arr.length - 1; i++) {
      //             for (let j = i + 1; j < arr.length; j++) {
      //                 let item1 = arr[i];
      //                 let item2 = arr[j];
      //                 if (compareFunc(item1, item2)) {
      //                     arr[i] = item2;
      //                     arr[j] = item1;
      //                 }
      //             }
      //         }
      //     }
      // });


      _export("utilTools", utilTools = {
        getRandomSign() {
          return Math.random() > 0.5 ? 1 : -1;
        },

        // 角度值与弧度制之间的转换
        radianToAngle(radian) {
          return radian / Math.PI * 180;
        },

        angleToRadian(angle) {
          return angle / 180 * Math.PI;
        },

        // 性能最好的数组遍历方式
        forArr(arr, cb) {
          var len = arr.length;

          if (len <= 0) {
            return;
          }

          for (var i = 0; i < len; i++) {
            var info = arr[i];

            if (info == undefined) {
              continue;
            }

            var ret = cb(info, i);

            if (ret) {
              break;
            }
          }
        },

        /**
         * 模仿async.waterfall写得，按顺序执行各个方法
         * @param taskArr 要顺序执行的方法数组
         * @param callback 执行结果回调
         */
        waterfall(taskArr, callback) {
          if (!callback) {
            callback = function callback() {};
          }

          if (!Array.isArray(taskArr) || taskArr.length <= 0) {
            callback("taskArr is null");
            return;
          }

          var taskIndex = 0;
          var result = {};

          var loadNextTask = function loadNextTask() {
            var task = taskArr[taskIndex];

            if (task) {
              task(result, function (err) {
                if (err) {
                  callback(err, null);
                  return;
                }

                taskIndex++;
                loadNextTask();
              });
              return;
            }

            callback(null, result);
          };

          loadNextTask();
        },

        // 数字转化为百分比显示
        valToPercent(val, fixNum) {
          // 保证舍去不显示的那部分
          val = Math.floor(val * 10000);
          val = val / 10000;

          if (fixNum == undefined) {
            fixNum = 2;
          }

          var ret = (val * 100).toFixed(fixNum) + "%";
          return ret;
        },

        /**
         * 获取如下格式的时间
         * 05:00:56
         * @param d 单位：豪秒
         * @param isM 是否强制只显示到分
         * @returns {string}
         */
        getTimeStr(d, isM) {
          var ret = "";

          if (d < 0) {
            d = 0;
          }

          d = d / 1000;
          var hours = Math.floor(d / 3600);
          var mins = Math.floor((d - hours * 3600) / 60);
          var seconds = Math.floor(d - hours * 3600 - mins * 60);

          if (isM) {
            mins = mins + hours * 60;
          } else {
            if (hours >= 10) {
              ret = ret + hours + ":";
            } else {
              ret = ret + "0" + hours + ":";
            }
          }

          if (mins >= 10) {
            ret = ret + mins + ":";
          } else {
            ret = ret + "0" + mins + ":";
          }

          if (seconds >= 10) {
            ret = ret + seconds;
          } else {
            ret = ret + "0" + seconds;
          }

          return ret;
        },

        /**
           * 获取如下格式的时间
           * 05:00:56
           * @param d 单位：豪秒
           * @param isM 是否强制只显示到分
           * @returns {string}
           */
        getTimeStrChinese(d, isSce, isM, isHour) {
          if (isSce === void 0) {
            isSce = true;
          }

          if (isM === void 0) {
            isM = true;
          }

          if (isHour === void 0) {
            isHour = true;
          }

          var ret = "";

          if (d < 0) {
            d = 0;
          }

          d = d / 1000;
          var hours = Math.floor(d / 3600);
          var mins = Math.floor((d - hours * 3600) / 60);
          var seconds = Math.floor(d - hours * 3600 - mins * 60);

          if (hours > 0) {
            ret = ret + hours + "时";
          }

          if (mins >= 10) {
            ret = ret + mins + "分";
          } else {
            ret = ret + "0" + mins + "分";
          }

          if (isSce) {
            if (seconds >= 10) {
              ret = ret + seconds + "秒";
            } else {
              ret = ret + "0" + seconds + "秒";
            }
          }

          return ret;
        },

        /**
         * 将对象obj中以time(不区分大小写)为结尾的key字符串值，转换为js时间对象Date
         * @param obj
         */
        timeStrToDate(obj) {
          if (typeof obj != "object" || obj == null) {
            return obj;
          }

          if (Array.isArray(obj)) {
            for (var i in obj) {
              var item = obj[i];

              if (item && typeof item == "object") {
                utilTools.timeStrToDate(item);
              }
            }
          } else {
            var keyArr = Object.keys(obj);

            for (var _i in keyArr) {
              var key = keyArr[_i] + "";
              var val = obj[key];

              if (val && typeof val == "object") {
                utilTools.timeStrToDate(val);
                continue;
              }

              try {
                var endStr = "";

                if (key.length >= 4) {
                  endStr = key.substring(key.length - 4, key.length);

                  if (endStr.toLocaleLowerCase() == "time" && val && typeof val == "string") {
                    obj[key] = new Date(val);
                  }
                }
              } catch (e) {
                console.log("utilTools.timeStrToDate error:" + e.message, e, obj);
              }
            }
          }

          return obj;
        },

        /**
         * 数组排序
         * @param arr 
         * @param compareFunc 
         */
        sortArr(arr, compareFunc) {
          if (!arr || arr.length <= 1) {
            return arr;
          }

          for (var i = 0; i < arr.length - 1; i++) {
            for (var j = i + 1; j < arr.length; j++) {
              var item1 = arr[i];
              var item2 = arr[j];

              if (compareFunc(item1, item2)) {
                arr[i] = item2;
                arr[j] = item1;
              }
            }
          }
        },

        /**
         * 概率是否满足
         * @param val 概率值 0到1
         */
        isProb(val) {
          if (!val) {
            val = 0;
          }

          if (Math.random() < val) {
            return true;
          }

          return false;
        },

        /**
         * 打乱数组元素，默认不改变原有的数组，返回新的打乱后的数组
         * @param arr 
         * @param isOrign true:原数组会被修改
         */
        randomArr(arr, isOrign) {
          if (isOrign === void 0) {
            isOrign = false;
          }

          if (!isOrign) {
            arr = JSON.parse(JSON.stringify(arr));
          }

          var tmpArr = [];

          while (arr.length > 0) {
            var index = Math.floor(Math.random() * arr.length);
            tmpArr.push(arr[index]);
            arr.splice(index, 1);
          }

          return tmpArr;
        },

        /**
         * 返回给定范围内的随机数值,整数包括左右边界
         * @param min 最小值
         * @param max 最大值
         * @param isInt 是否整数化
         * @returns {number}
         */
        getFloatValue(min, max, isInt) {
          var dv = max - min;

          if (dv == 0) {
            return min;
          }

          if (dv < 0) {
            return 0;
          }

          if (isInt) {
            var _val = min + Math.floor(Math.random() * (dv + 1));

            return _val;
          }

          var val = min + Math.random() * dv;
          return val;
        },

        // 跨天判断
        overDay(date, now) {
          if (!date) {
            return true;
          }

          if (!now) {
            now = new Date();
          }

          var overDay = false;

          if (date.getDate() == now.getDate()) {
            if (now.getTime() - date.getTime() >= 24 * 60 * 60 * 1000) {
              overDay = true;
            }
          } else {
            overDay = true;
          }

          return overDay;
        },

        /**
         * 根据权重从数组中返回指定的个数元素
         * @param arr 数组
         * @param num 返回个数
         * @param canRepeat 是否可以重复取，默认不可以
         * @returns {Array} 返回结果数组
         */
        getRowsByWeightAndNum(arr, num, canRepeat) {
          if (!num) {
            num = 1;
          }

          var ret = [];
          arr = utilTools.copyObj(arr);

          for (var i = 0; i < num; i++) {
            if (arr.length <= 0) {
              break;
            }

            var row = this.getRowByWeight(arr);
            ret.push(row);

            if (!canRepeat) {
              var index = arr.indexOf(row);
              arr.splice(index, 1);
            }
          }

          return ret;
        },

        /**
         * 根据权重从数组中返回一个元素
         * @param arr
         * @param totalWeight
         */
        getRowByWeight(arr, totalWeight) {
          if (!totalWeight) {
            totalWeight = 0;

            for (var i in arr) {
              var weight = arr[i].weight;

              if (!weight) {
                weight = 0;
              }

              totalWeight += weight;
            }
          }

          var random = Math.random() * totalWeight;
          var left = 0;
          var row = null;

          for (var i in arr) {
            var tmpRow = arr[i];
            var weight = tmpRow.weight;

            if (!weight) {
              weight = 0;
            }

            if (random >= left && random < left + weight) {
              row = tmpRow;
              break;
            }

            left += weight;
          }

          return row;
        },

        /**
         * 从给定的数组中，随机取出一个元素
         * @param arr 数组
         * @param isRemove 是否将该元素从数组中移除
         * @return {null|*} 返回随机到的元素
         */
        getRandomItemByArr(arr, isRemove) {
          if (isRemove === void 0) {
            isRemove = false;
          }

          if (!arr || arr.length <= 0) {
            return null;
          }

          var index = Math.floor(Math.random() * arr.length);
          var item = arr[index];

          if (isRemove) {
            arr.splice(index, 1);
          }

          return item;
        },

        /**
         * 深度拷贝对象
         * @param obj 要拷贝的对象内容
         */
        copyObj(obj) {
          return JSON.parse(JSON.stringify(obj));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=889c7c5b021a15f72a49d838880237b928f3b7d4.js.map