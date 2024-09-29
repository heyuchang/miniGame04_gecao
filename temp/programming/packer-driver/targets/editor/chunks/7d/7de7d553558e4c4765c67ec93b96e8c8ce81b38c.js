System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, js, MapWrap, _crd;

  _export("MapWrap", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      js = _cc.js;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4fbd1NgK1VKrJqal2BpBTty", "MapWrap", undefined);

      __checkObsolete__(['js']);

      _export("MapWrap", MapWrap = class MapWrap {
        constructor(array) {
          this._objects = void 0;
          this._size = 0;
          this._objects = js.createMap(true);
          this._size = 0;

          if (array) {
            for (let i = 0; i < array.length; i++) {
              this.set(array[i][0], array[i][1]);
            }
          }
        }

        set size(size) {
          this._size = size;
        }

        set objects(objects) {
          this._objects = objects;
        }

        get size() {
          return this._size;
        }

        clear() {
          this._objects = js.createMap(true);
          this._size = 0;
        }

        has(key) {
          return key in this._objects;
        }

        set(key, value) {
          if (!this.has(key)) {
            this._size++;
          }

          this._objects[key] = value;
        }

        get(key) {
          if (!this.has(key)) return null;
          return this._objects[key];
        }

        delete(key) {
          if (this.has(key)) {
            delete this._objects[key];
            this._size--;
          }
        }

        keys() {
          let keys = Object.keys(this._objects);
          return keys;
        }

        values() {
          let keys = this.keys();
          let values = [];
          keys.forEach(key => {
            values.push(this.get(key));
          });
          return values;
        }

        toArray(isNumberKey) {
          let rets = [];
          let keys = this.keys();
          keys.forEach(key => {
            rets.push([!isNumberKey ? key : parseInt(key), this.get(key)]);
          });
          return rets;
        }

        forEach(callBack) {
          let keys = this.keys();

          for (let i = 0; i < keys.length; i++) {
            let result = callBack(this._objects[keys[i]], keys[i]);
            if (!!result) return result;
          }
        }

        rforEach(callBack) {
          let keys = this.keys();

          for (let i = keys.length - 1; i >= 0; i--) {
            let result = callBack(this._objects[keys[i]], keys[i]);
            if (!!result) return result;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7de7d553558e4c4765c67ec93b96e8c8ce81b38c.js.map