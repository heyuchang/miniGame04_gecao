System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _cc, FileUtils, _crd, cc, READ_FILE_TYPE;

  _export("FileUtils", void 0);

  return {
    setters: [function (_cc2) {
      _cclegacy = _cc2.cclegacy;
      __checkObsolete__ = _cc2.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc2.__checkObsoleteInNamespace__;
      _cc = _cc2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85132CQcl5K4IQopku+kAoz", "FileUtils", undefined);

      cc = __checkObsoleteInNamespace__(_cc);

      (function (READ_FILE_TYPE) {
        READ_FILE_TYPE[READ_FILE_TYPE["DATA_URL"] = 0] = "DATA_URL";
        READ_FILE_TYPE[READ_FILE_TYPE["TEXT"] = 1] = "TEXT";
        READ_FILE_TYPE[READ_FILE_TYPE["BINARY"] = 2] = "BINARY";
        READ_FILE_TYPE[READ_FILE_TYPE["ARRAYBUFFER"] = 3] = "ARRAYBUFFER";
      })(READ_FILE_TYPE || (READ_FILE_TYPE = {}));

      _export("FileUtils", FileUtils = class FileUtils {
        /**
        * 打开文件选择器
        *
        * @param {string} accept
        * @param {(file: File) => void} callback
        * @memberof FileMgr
        */
        static openLocalFile(accept, callback) {
          var inputEl = document.getElementById('file_input');

          if (!inputEl) {
            // console.log('xxxxxx createElement input');
            inputEl = document.createElement('input');
            inputEl.id = 'file_input';
            inputEl.setAttribute('id', 'file_input');
            inputEl.setAttribute('type', 'file');
            inputEl.setAttribute('class', 'fileToUpload');
            inputEl.style.opacity = '0';
            inputEl.style.position = 'absolute';
            inputEl.setAttribute('left', '-999px');
            document.body.appendChild(inputEl);
          }

          accept = accept || ".*";
          inputEl.setAttribute('accept', accept);

          inputEl.onchange = event => {
            var files = inputEl.files;

            if (files && files.length > 0) {
              var file = files[0];
              if (callback) callback(file);
            }
          };

          inputEl.click();
        }
        /**
         * 读取本地文件数据
         *
         * @param {File} file
         * @param {READ_FILE_TYPE} readType
         * @param {((result: string | ArrayBuffer) => void)} callback
         * @memberof FileMgr
         */


        static readLocalFile(file, readType, callback) {
          var reader = new FileReader();

          reader.onload = function (event) {
            if (callback) {
              if (reader.readyState == FileReader.DONE) {
                callback(reader.result);
              } else {
                callback(null);
              }
            }
          };

          switch (readType) {
            case READ_FILE_TYPE.DATA_URL:
              reader.readAsDataURL(file);
              break;

            case READ_FILE_TYPE.TEXT:
              reader.readAsText(file); //作为字符串读出
              //reader.readAsText(file,'gb2312');   //默认是用utf-8格式输出的，想指定输出格式就再添加一个参数，像txt的ANSI格式只能用国标才能显示出来

              break;

            case READ_FILE_TYPE.BINARY:
              reader.readAsBinaryString(file);
              break;

            case READ_FILE_TYPE.ARRAYBUFFER:
              reader.readAsArrayBuffer(file);
              break;
          }
        }
        /**
         * 保存数据到本地
         *
         * @param {*} textToWrite       要保存的文件内容
         * @param {*} fileNameToSaveAs  要保存的文件名
         * @memberof FileMgr
         */


        static saveForBrowser(textToWrite, fileNameToSaveAs) {
          if (cc.sys.isBrowser) {
            console.log("浏览器");
            var textFileAsBlob = new Blob([textToWrite], {
              type: 'text/plain;charset=utf-8'
            });
            var downloadLink = document.createElement("a");
            downloadLink.download = fileNameToSaveAs;
            downloadLink.innerHTML = "Download File";

            if (window.webkitURL != null) {
              // Chrome allows the link to be clicked            
              // without actually adding it to the DOM.            
              downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
            } else {
              // Firefox requires the link to be added to the DOM            
              // before it can be clicked.            
              downloadLink.href = window.URL.createObjectURL(textFileAsBlob); // downloadLink.onclick = destroyClickedElement;            

              downloadLink.style.display = "none";
              document.body.appendChild(downloadLink);
            }

            downloadLink.click();
          }
        }
        /**
         * 保存数据到本地
         *
         * @param {*} data   要保存的文件内容 支持 ArrayBuffer | string
         * @param {*} model  打开文件模式
         * @param {*} fullPath  要保存的文件路径+文件名
         * @memberof FileMgr
         */


        static saveDataForNative(data, fullPath, model) {
          if (model === void 0) {
            model = 'wb';
          }

          if (cc.sys.isNative) {
            var myGlobal = window;
            var myjsb = myGlobal.myjsb;

            if (myjsb) {
              var ret = myjsb.MyFileUtils.getInstance().writeDataToFile(data, model, fullPath);
              return ret;
            }
          }

          return false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6ebc38e4c4975dbccb644d8c796407d2c7596870.js.map