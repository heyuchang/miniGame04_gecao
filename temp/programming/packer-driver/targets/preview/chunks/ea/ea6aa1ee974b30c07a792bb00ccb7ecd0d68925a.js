System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, ProgressBar, _decorator, _dec, _class, _crd, ccclass, property, ProgressCtrl;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      ProgressBar = _cc.ProgressBar;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70366vUiUVK84CeSgjAYxbQ", "ProgressCtrl", undefined);

      __checkObsolete__(['Component', 'ProgressBar', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ProgressCtrl", ProgressCtrl = (_dec = ccclass('ProgressCtrl'), _dec(_class = class ProgressCtrl extends Component {
        constructor() {
          super(...arguments);
          this.progressBar = void 0;
          this.time = void 0;
          this.timeCount = void 0;
          this.endCb = void 0;
        }

        onLoad() {
          this.progressBar = this.getComponent(ProgressBar);

          if (!this.progressBar) {
            this.progressBar = this.getComponentInChildren(ProgressBar);
          }
        }

        startLoadProgress(time, endCb) {
          if (this.timeCount != undefined) {
            // 重复调用了
            return;
          }

          this.time = time;
          this.endCb = endCb;
          this.timeCount = 0;
        }

        update(dt) {
          if (this.timeCount == undefined || !this.progressBar) {
            return;
          }

          this.timeCount += dt;
          var p = this.timeCount / this.time;
          this.progressBar.progress = p;

          if (p >= 1) {
            this.timeCount = undefined;

            if (this.endCb) {
              this.endCb();
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ea6aa1ee974b30c07a792bb00ccb7ecd0d68925a.js.map