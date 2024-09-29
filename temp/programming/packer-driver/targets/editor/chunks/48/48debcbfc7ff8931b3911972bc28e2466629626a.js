System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, GNetConst, GameMemoryStorage, _dec, _class, _class2, _crd, ccclass, property, GameStorage;

  function _reportPossibleCrUseOfGNetConst(extras) {
    _reporterNs.report("GNetConst", "./conf", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMemoryStorage(extras) {
    _reporterNs.report("GameMemoryStorage", "./GameMemoryStorage", _context.meta, extras);
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
    }, function (_unresolved_2) {
      GNetConst = _unresolved_2.GNetConst;
    }, function (_unresolved_3) {
      GameMemoryStorage = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d28a9LZiYhKeJA2ODlbTLd0", "gameStorage", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameStorage", GameStorage = (_dec = ccclass('GameStorage'), _dec(_class = (_class2 = class GameStorage extends Component {
        static Key(key) {
          return this.GameKey + '_' + key;
        }

        static GetRawKey(key) {
          return key.replace(GameStorage.GameKey + "_", "");
        }

        static getStorage() {
          return _crd && GameMemoryStorage === void 0 ? (_reportPossibleCrUseOfGameMemoryStorage({
            error: Error()
          }), GameMemoryStorage) : GameMemoryStorage; // return Const.isActiveMemoryTmp?GameMemoryStorageTmp: GameMemoryStorage
        }

        static getInt(key, def = 0) {
          let n = this.getStorage().getItem(this.Key(key));

          if (n !== null && n !== "") {
            return Number(n);
          }

          return def;
        }

        static setInt(key, num) {
          key = this.Key(key);
          this.getStorage().setItem(key, num + "");
        }

        static setIntMemory(key, num) {
          key = this.Key(key);
          this.getStorage().setItem(key, num + "");
        }

        static getBoolean(key, def = false) {
          let n = this.getStorage().getItem(this.Key(key));

          if (n !== null && n !== "") {
            return Number(n) == 1 ? true : false;
          }

          return def;
        }

        static setBoolean(key, is) {
          key = this.Key(key);
          let v = is ? 1 : 0;
          this.getStorage().setItem(key, v + "");
        }

        static setBooleanMemory(key, is) {
          key = this.Key(key);
          let v = is ? 1 : 0;
          this.getStorage().setItem(key, v + "");
        }

        static getString(key, def = '') {
          let n = this.getStorage().getItem(this.Key(key));

          if (n !== null && n !== "") {
            return n;
          }

          return def;
        } //登录部分信息才用


        static getStringDisk(key, def = '') {
          let n = localStorage.getItem(this.Key(key));

          if (n !== null && n !== "") {
            return n;
          }

          return def;
        }

        static getIntDisk(key, def = '') {
          let n = localStorage.getItem(this.Key(key));

          if (n !== null && n !== "") {
            return Number(n);
          }

          return def;
        }

        static setStringDisk(key, val) {
          localStorage.setItem(this.Key(key), val);
        }

        static setStringMemory(key, val) {
          key = this.Key(key);
          this.getStorage().setItem(key, val);
          localStorage.setItem(key, val);
        }

        static setString(key, num) {
          key = this.Key(key);
          this.getStorage().setItem(key, num);

          if (key == GameStorage.GameKey + 'login_account') {
            return;
          }
        }

        static getObject(key, def = null) {
          let n = this.getStorage().getItem(this.Key(key));

          if (n !== null && n !== "") {
            try {
              let json = JSON.parse(n);
              return json || def;
            } catch (error) {
              return def;
            }
          }

          return def;
        }

        static setObject(key, obj) {
          key = this.Key(key);
          let v = JSON.stringify(obj);
          this.getStorage().setItem(key, v);
        }

        static sendObject(key, obj) {
          key = this.Key(key);
          let v = JSON.stringify(obj);
        }

        static setObjectMemory(key, obj) {
          key = this.Key(key);
          let v = JSON.stringify(obj);
          this.getStorage().setItem(key, v);
        }

        static removeItem(key) {
          key = this.Key(key);
          this.getStorage().removeItem(key);
        }

        static clear() {
          // console.log('清除数据:',localStorage.length)
          let list = [];

          for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i); //获取本地存储的Key

            if (key.indexOf(this.GameKey) >= 0 && key.indexOf('login') == -1 && key.indexOf('zzdl') == -1) {
              // cc.log("清理前检查key", key, key.indexOf(this.GameKey) )
              list.push(key);
            }
          }

          let keys = this.getStorage().keys();

          for (let i = 0; i < keys.length; i++) {
            let key = keys[i]; //获取本地存储的Key

            if (key.indexOf('login') == -1 && key.indexOf('zzdl') == -1) {
              // console.log("清除key:",key)
              list.push(key);
            }
          }

          for (let i = 0; i < list.length; i++) {
            const key = list[i];
            this.getStorage().removeItem(key); // this.removeItem(key);
          } //清空本地无用的缓存
          // localStorage.clear();

        } //老用户不用改为内存


        static clearByKey(gameKey) {
          let list = [];

          for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i); //获取本地存储的Key

            if (key.indexOf(gameKey) != -1) {
              list.push(key);
            }
          }

          for (let i = 0; i < list.length; i++) {
            const key = list[i];
            this.getStorage().removeItem(key);
          }
        }

        static getStringArrayByKey(str) {
          // console.log("获取列表:",str)
          let list = [];
          let list2 = [];
          let keys = this.getStorage().keys();

          for (let i = 0; i < keys.length; i++) {
            const key = keys[i]; //获取本地存储的Key
            //console.log("key:",key);

            if (key.indexOf(str) != -1) {
              let n = this.getStorage().getItem(key); // console.log("=====n:",n)

              list.push(n);
              list2.push(key);
            }
          }

          return {
            keys: list2,
            values: list
          };
        }

        static getObjectArrayByKey(str) {
          // console.log("获取列表:",str)
          let list = [];
          let keys = this.getStorage().keys();

          for (let i = 0; i < keys.length; i++) {
            const key = keys[i]; //获取本地存储的Key
            //console.log("key:",key);

            if (key.indexOf(str) != -1) {
              let n = this.getStorage().getItem(key); //console.log("n:",n)

              let value = null;

              if (n !== null && n !== "") {
                try {
                  let json = JSON.parse(n);
                  value = json || null;
                } catch (error) {
                  value = null;
                }
              }

              if (value) {
                list.push(value);
              }
            }
          }

          return list;
        } //老用户兼容使用，不改动，以及GM也使用这个接口上传数据到云端


        static getAll(isFirst = false) {
          let jsonData = {};

          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i); //获取本地存储的Key

            if (key.indexOf('login') != -1) {
              continue;
            }

            if (isFirst) {
              let oldKey = key;
              let newKey = key.replace('zzdl', GameStorage.GameKey);
              jsonData[newKey] = localStorage.getItem(oldKey);
            } else {
              if (key.indexOf('zzdl') != -1) {
                continue;
              }

              jsonData[key] = localStorage.getItem(key);
            } // console.log(key);
            // console.log(localStorage.getItem(key));//所有value
            // console.log("---------------------------------");

          }

          if (isFirst) {
            let spliceDatas = {};

            for (const key in jsonData) {
              if (Object.prototype.hasOwnProperty.call(jsonData, key)) {
                const value = jsonData[key]; // 大数据拆分.
                // 1.装备
                // 2.玄天宝录
                // console.log("老用户数据处理key:",key,value);

                switch (key) {
                  case GameStorage.GameKey + '_sect_xtbls':
                    {
                      let datas = JSON.parse(value); // console.log("xtbl datas:",datas.length,datas);

                      for (let i = 0; i < datas.length; i++) {
                        const xtbl = datas[i];
                        let data = {
                          id: xtbl.id,
                          star: xtbl.star,
                          debris: xtbl.debris
                        }; // GameStorage.setObject('SectXtbl_'+xtbl.id,data);

                        spliceDatas[GameStorage.GameKey + '_SectXtbl_' + xtbl.id] = JSON.stringify(data);
                      }
                    }
                    break;

                  case GameStorage.GameKey + '_pack_equips':
                    {
                      let datas = JSON.parse(value); // console.log("equip datas:",datas.length,datas);

                      for (let i = 0; i < datas.length; i++) {
                        const equip = datas[i];
                        let data = {
                          id: equip.id,
                          index: equip.index,
                          level: equip.level,
                          star: equip.star,
                          partner: equip.partner,
                          score: equip.score,
                          skill_skr: equip.skill_skr,
                          skill_skr_attr: equip.skill_skr_attr,
                          skill_star: equip.skill_star,
                          skill_star_attr: equip.skill_star_attr
                        }; // GameStorage.setObject('pack_equip_'+equip.index,data);

                        spliceDatas[GameStorage.GameKey + 'pack_equip_' + equip.index] = JSON.stringify(data);
                      }
                    }
                    break;

                  default:
                    {
                      localStorage.setItem(key, value);
                    }
                    break;
                }
              }
            }

            delete jsonData['zzdl_sect_xtbls'];
            delete jsonData['zzdl_pack_equips']; // console.log("spliceDatas:",spliceDatas);

            for (const key in spliceDatas) {
              const data = spliceDatas[key];
              jsonData[key] = data;
            }
          }

          return jsonData;
        }

        static async setAll(jsonData) {
          // console.log("11111覆盖数据")
          // await this.clear();
          // console.log("覆盖前清除所有数据........",jsonData)
          for (let key in jsonData) {
            this.getStorage().setItem(key, jsonData[key]);
          }
        }

      }, _class2.GameKey = (_crd && GNetConst === void 0 ? (_reportPossibleCrUseOfGNetConst({
        error: Error()
      }), GNetConst) : GNetConst).SaveHead, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=48debcbfc7ff8931b3911972bc28e2466629626a.js.map