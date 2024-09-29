System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, physicsGroup;

  _export("physicsGroup", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7abfb/MfGJL5r7iKar3kd+i", "physicsGroup", undefined);

      (function (physicsGroup) {
        physicsGroup[physicsGroup["DEFAULT"] = 1] = "DEFAULT";
        physicsGroup[physicsGroup["PLAYER"] = 2] = "PLAYER";
        physicsGroup[physicsGroup["MONSTER"] = 4] = "MONSTER";
        physicsGroup[physicsGroup["PLAYER_BULLET"] = 8] = "PLAYER_BULLET";
        physicsGroup[physicsGroup["MONSTER_BULLET"] = 16] = "MONSTER_BULLET";
        physicsGroup[physicsGroup["PROP"] = 32] = "PROP";
        physicsGroup[physicsGroup["WALL"] = 64] = "WALL";
        physicsGroup[physicsGroup["PLAYER_BULLET2"] = 128] = "PLAYER_BULLET2";
      })(physicsGroup || _export("physicsGroup", physicsGroup = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6a6252abdfded47975314af5225b309a3ba40b8e.js.map