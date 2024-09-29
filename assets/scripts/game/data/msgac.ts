
export const msgac = {

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
    mapRefreshSkill : 2003,
    mapMsgEnd: 2999,

    redPointEvent: 30001,
    homeHideMenu: 30002,

    ac2KeyObj: {},
    init: () => {
        for (let key in msgac) {
            let ac = msgac[key];
            if (typeof (ac) != 'number') {
                continue;
            }
            msgac.ac2KeyObj[ac] = key;
        }
    }
};


