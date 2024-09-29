import { sys } from "cc";
import { constants } from "../game/data/constants";
import { msgac } from "../game/data/msgac";
import { eventManager } from "../game/manager/eventManager";
import { SingleInstance } from "./SingleInstance";

class RedPointManager extends SingleInstance {

    key: string = constants.gameName + "_redPoint";

    getRedPointByLayer(layer: string) {
        let obj: any = sys.localStorage.getItem(this.key);
        let needSave = false;
        if (!obj) {
            obj = {};
            needSave = true;
        } else {
            obj = JSON.parse(obj);
        }

        let layerObj = obj[layer];
        if (!layerObj) {
            layerObj = {};
            obj[layer] = layerObj;
            needSave = true;
        }

        if (needSave) {
            sys.localStorage.setItem(this.key, JSON.stringify(obj));
        }

        return layerObj;
    }

    setRedPointByLayer(layer: string, layerObj: any) {
        let obj: any = sys.localStorage.getItem(this.key);
        if (!obj) {
            obj = {};
        } else {
            obj = JSON.parse(obj);
        }
        obj[layer] = layerObj;
        sys.localStorage.setItem(this.key, JSON.stringify(obj));

        eventManager.send(msgac.refreshRedPoint);
    }

    hasRedPointValue(layerName: string, key: string, value?: any) {
        let obj = this.getRedPointByLayer(layerName);

        if (value != undefined) {
            if (Array.isArray(obj[key])) {
                let rpIndex = obj[key].indexOf(value);
                if (rpIndex != -1) {
                    return true;
                }
            }
            return false;
        }

        if (Array.isArray(obj[key])) {
            if (obj[key].length > 0) {
                return true;
            }
            return false;
        }

        if (obj[key]) {
            return true;
        }

        return false;
    }

    addRedPointValue(layerName: string, key: string, value?: any) {
        let obj = this.getRedPointByLayer(layerName);
        if (value) {
            if (!Array.isArray(obj[key])) {
                obj[key] = [];
            }
            let rpIndex = obj[key].indexOf(value);
            if (rpIndex == -1) {
                obj[key].push(value);
                this.setRedPointByLayer(layerName, obj);
            }
        } else {
            obj[key] = 1;
            this.setRedPointByLayer(layerName, obj);
        }
    }

    removeRedPointValue(layerName: string, key: string, value?: any) {
        let obj = this.getRedPointByLayer(layerName);
        let info = obj[key];

        if (value != undefined) {
            if (Array.isArray(info)) {
                let rpIndex = info.indexOf(value);
                if (rpIndex != -1) {
                    obj[key].splice(rpIndex, 1);
                    this.setRedPointByLayer(layerName, obj);
                    return true;
                }
            }
            return false;
        }

        if (info) {
            delete obj[key];
            this.setRedPointByLayer(layerName, obj);
            return true;
        }

        return false;
    }

    clearRedPointLayer(layerName: string, key?: string) {
        let obj = this.getRedPointByLayer(layerName);
        if (key == undefined) {
            // 清空所有
            this.setRedPointByLayer(layerName, undefined);
        } else {
            delete obj[key];
            this.setRedPointByLayer(layerName, obj);
        }
    }

}

const redPointManager = RedPointManager.getInstance<RedPointManager>();

export { redPointManager };

