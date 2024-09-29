import { Component, Label, macro, _decorator } from "cc";
import { msgac } from "../game/data/msgac";
import { eventManager } from "../game/manager/eventManager";
import { UserData } from "../game/model/UserData";
import { utilTools } from "./utilTools";
const { ccclass, property } = _decorator;

@ccclass('CountTimeUtil')
export class CountTimeUtil extends Component {

    _time = 0;
    _callFun = null

    onLoad() {
        this.node.getComponent(Label).string = utilTools.getTimeStr(this._time * 1000, true)
    }

    setTime(time, callFun = null) {
        this._time = time
        this._callFun = callFun
        if (this._time > 0) {
            this.node.getComponent(Label).string = utilTools.getTimeStr(this._time * 1000, true)
            this.schedule(this.updateTime, 1, macro.REPEAT_FOREVER)
        } else {
            this.node.getComponent(Label).string = ""
        }
    }

    start() {
        // this.schedule(this.updateTime, 1, macro.REPEAT_FOREVER)
    }

    updateTime() {
        if (this._time > 0) {
            this._time--
            this.node.getComponent(Label).string = utilTools.getTimeStr(this._time * 1000, true)
        }
        if (this._time <= 0) {
            this.unschedule(this.updateTime)
            this.node.getComponent(Label).string = ""
            this._callFun && this._callFun()
            // UserData.getInstance().checkPowerTime()
            // eventManager.send(msgac.commonResRefresh);
        }
    }
}

