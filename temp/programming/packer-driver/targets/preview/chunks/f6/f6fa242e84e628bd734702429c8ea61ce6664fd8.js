System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _class, _class2, _crd, ccclass, property, GameMemoryStorage;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "55b2ffzgpVPZ4Ld/QLrvdot", "GameMemoryStorage", undefined);

      __checkObsolete__(['_decorator', 'Component', 'game']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", GameMemoryStorage = ccclass(_class = (_class2 = class GameMemoryStorage {
        //用户登录区服，然后拉取服务端记录，原有代码接口不变，底层存取数据改为内存，另外再备份到磁盘已备修改器修改上传，规避获取不到磁盘数据的情况。
        //修改以后，所有数据存取都是走内存，当用户重新登录的时候，内存自动清空，再清空本地磁盘数据
        //内存
        static getItem(key) {
          // if(!this.memory.hasOwnProperty(key)){
          //     return ""
          // }
          // let res = "";
          // try{
          //     res = this.decrypt(this.memory[key]);
          // }catch (e){
          //     res = this.memory[key]
          // }
          // res = this.memory[key]
          // res = localStorage.getItem(key);
          return localStorage.getItem(key);
        }

        static setItem(key, value) {
          // this.memory[key] = value+"";
          localStorage.setItem(key, this.encrypt(value));
        }

        static removeItem(key) {
          // delete this.memory[key];
          localStorage.removeItem(key);
        }

        static len() {
          return Object.keys(this.memory).length;
        }

        static keys() {
          var keys = [];

          for (var k in this.memory) {
            keys.push(k);
          }

          return keys;
        }

        static encrypt(content) {
          return content; // if(this.isEncrypt==false) return content;
          // return  encrypt.encrypt(JSON.stringify(content),this.publicKey,256);
          //加密解密示例代码
          // var secretkey= 'open_sesame'; // 加密密钥
          // var dataString = content
          // var encrypted = encrypt.encrypt(dataString,secretkey,256);
          // var myString=JSON.parse(encrypt.decrypt(encrypted,secretkey,256))
          // cc.log('原始字符串:'+dataString)
          // cc.log('加密后:'+encrypted)
          // cc.log('解密后看看对不对:'+myString)
        }

        static decrypt(content) {
          return content; // if(this.isEncrypt==false) return content;
          // return JSON.parse(encrypt.decrypt(content,this.publicKey,256));
        }

      }, _class2.memory = {}, _class2.publicKey = "JmksO12Ldl60Lsk", _class2.isEncrypt = false, _class2)) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f6fa242e84e628bd734702429c8ea61ce6664fd8.js.map