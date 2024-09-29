import { myLog } from "../../common/myLog";
import { msgac } from "../data/msgac";
import { eventManager } from "../manager/eventManager";
import { mapModel } from "../model/mapModel";
import { playerModel } from "../model/playerModel";

class ServerMsg {
    private static _instance: ServerMsg;
    private constructor() { }
    public static get instance(): ServerMsg {
        if (!this._instance) {
            this._instance = new ServerMsg();
        }
        return this._instance;
    }


    // 模拟客户端与服务端的通信，为以后接入服务端做预留
    public send(ac: number, data?: any) {
        let key = msgac.ac2KeyObj[ac];
        if (!data) {
            data = {};
        }

        // myLog.i(key, data);

        if (ac > msgac.playerMsgStart && ac < msgac.playerMsgEnd) {
            if (playerModel[key]) {
                playerModel[key](data);
            }
        }
        if (ac > msgac.mapMsgStart && ac < msgac.mapMsgEnd) {
            if (mapModel[key]) {
                mapModel[key](data);
            }
        }

        myLog.i(key + "Ret", data);
        data.notMyLog = true;

        // // 公共消息处理
        // switch (data.st) {
        //     case -1:
        //         // 缺少道具
        //         eventManager.send(msgac.playerLackItemHint, data);
        //         return;
        // }

        if (data.st == 1) {
            eventManager.send(ac, data);
        }

    }

}

export const serverMsg = ServerMsg.instance;