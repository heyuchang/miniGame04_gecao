System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, cocosUtil, mapModel, HintNames, _dec, _class, _crd, ccclass, property, bullet10170;

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHintNames(extras) {
    _reporterNs.report("HintNames", "../hint/Hint", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "./Bullet", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      mapModel = _unresolved_3.mapModel;
    }, function (_unresolved_4) {
      HintNames = _unresolved_4.HintNames;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf053ZSiuRAtINPklnj/BxA", "bullet10170", undefined);

      __checkObsolete__(['Component', 'Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // 炮弹巨人-跟踪子弹

      _export("bullet10170", bullet10170 = (_dec = ccclass('bullet10170'), _dec(_class = class bullet10170 extends Component {
        constructor(...args) {
          super(...args);
          this.bullet = void 0;
        }

        init(bullet) {
          this.bullet = bullet;
          this.bullet.rotateSpeed = Math.PI / 4 + Math.random() * Math.PI / 2;
          this.scheduleOnce(() => {
            this.bullet.isFollow = true;
          }, 0.4 + Math.random() * 0.2);
          this.scheduleOnce(() => {
            this.bullet.isFollow = false;
          }, 2.5 + Math.random() * 0.5);
        }

        contactBegin(node) {
          // 显示爆炸特效
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).hintSystem.addHint((_crd && HintNames === void 0 ? (_reportPossibleCrUseOfHintNames({
            error: Error()
          }), HintNames) : HintNames).hit2, (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
            error: Error()
          }), cocosUtil) : cocosUtil).convertToWorldSpace(this.bullet.node));
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=99f625da6bc652dc909bc64a464487d240128f36.js.map