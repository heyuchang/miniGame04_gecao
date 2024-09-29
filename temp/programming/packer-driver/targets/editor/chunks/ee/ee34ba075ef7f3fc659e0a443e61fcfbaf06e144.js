System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MapWrap, GParam, _crd;

  function _reportPossibleCrUseOfMapWrap(extras) {
    _reporterNs.report("MapWrap", "./MapWrap", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      MapWrap = _unresolved_2.MapWrap;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10abfD21F5JKaWJ0jnuKCjx", "GParam", undefined);

      _export("default", GParam = class GParam {
        constructor(msg) {
          this.arguments = new (_crd && MapWrap === void 0 ? (_reportPossibleCrUseOfMapWrap({
            error: Error()
          }), MapWrap) : MapWrap)();
          this._onlyArgument = void 0;
          this._onlyArgument = msg;
        }

        push(key, val) {
          if (!key) return;
          this.arguments.set(key, val);
        }
        /**
         * 获取参数
         * @param key 参数Key
         */


        get(key) {
          if (!key) return this._onlyArgument;
          return this.arguments.get(key);
        }
        /**
         * 清理
         */


        clear() {
          this.arguments.clear();
        }
        /**
         * 将参数转成Array
         */


        toList() {
          if (this.arguments.size == 0) return null;
          return this.arguments.values();
        }
        /**
         * ToString实现
         */


        toString() {
          let keys = this.arguments.keys();
          var str = '';

          for (let index = 0; index < keys.length; index++) {
            str += keys[index] + "=" + this.get(keys[index]) + "/t";
          }

          return str;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ee34ba075ef7f3fc659e0a443e61fcfbaf06e144.js.map