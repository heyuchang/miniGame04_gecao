import { sys } from "cc";
import { myLog } from "../../common/myLog";
import { constants } from "../data/constants";


class LocalStorageManager {

    private static _instance: LocalStorageManager;
    private constructor() { };
    public static get instance(): LocalStorageManager {
        if (!this._instance) {
            this._instance = new LocalStorageManager();
        }
        return this._instance;
    };

    getKey(): string {
        if (constants.gameName) {
            return constants.gameName + "_gameData";
        }
        return "gameData";
    }

    getGameData() {
        let key = this.getKey();
        let data = sys.localStorage.getItem(key);
        if (data) {
            data = JSON.parse(data);
            return data;
        }

        return {};
    }
    setGameData(data: object) {
        let key = this.getKey();
        sys.localStorage.setItem(key, JSON.stringify(data));
    }

    uidKey = constants.gameName + "_uid";
    set uid(uid: string) {
        sys.localStorage.setItem(this.uidKey, uid + "");
        myLog.i("保存uid:" + uid);
    }
    get uid() {
        return sys.localStorage.getItem(this.uidKey);
    }

    openIdKey = constants.gameName + "_openId";
    set openId(openId: string) {
        sys.localStorage.setItem(this.openIdKey, openId + "");
        myLog.i("保存openId：" + openId);
    }
    get openId() {
        return sys.localStorage.getItem(this.openIdKey);
    }

}

export const localStorageManager = LocalStorageManager.instance;
