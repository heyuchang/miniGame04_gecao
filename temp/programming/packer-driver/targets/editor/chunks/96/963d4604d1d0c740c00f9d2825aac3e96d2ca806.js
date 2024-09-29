System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, msgac;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d1eemYIMJGs7d1DwDd8wBH", "msgac", undefined);

      _export("msgac", msgac = {
        openLayer: 101,
        showNotice: 102,
        overDay: 103,
        joystick: 104,
        commonResRefresh: 105,
        globalTouchStart: 121,
        globalTouchMove: 122,
        globalTouchEnd: 123,
        jumpLayer: 124,
        refreshRedPoint: 125,
        saveDataBefore: 201,
        saveDataAfter: 202,
        updateDropData: 301,
        wearDrop: 302,
        playerMsgStart: 1000,
        energyObjRefresh: 1001,
        playerMsgEnd: 1999,
        mapMsgStart: 2000,
        mapEnter: 2001,
        mapLeave: 2002,
        mapRefreshSkill: 2003,
        mapMsgEnd: 2999,
        redPointEvent: 30001,
        homeHideMenu: 30002,
        ac2KeyObj: {},
        init: () => {
          for (let key in msgac) {
            let ac = msgac[key];

            if (typeof ac != 'number') {
              continue;
            }

            msgac.ac2KeyObj[ac] = key;
          }
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=963d4604d1d0c740c00f9d2825aac3e96d2ca806.js.map