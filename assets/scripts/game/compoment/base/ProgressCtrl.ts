import { Component, ProgressBar, _decorator } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ProgressCtrl')
export class ProgressCtrl extends Component {

    private progressBar: ProgressBar;
    // 时间，单位：秒
    private time: number;
    private timeCount: number;
    private endCb: Function;

    onLoad() {
        this.progressBar = this.getComponent(ProgressBar);
        if (!this.progressBar) {
            this.progressBar = this.getComponentInChildren(ProgressBar);
        }
    }

    startLoadProgress(time: number, endCb?: Function) {
        if (this.timeCount != undefined) {
            // 重复调用了
            return;
        }
        this.time = time;
        this.endCb = endCb;
        this.timeCount = 0;
    }

    update(dt: number) {
        if (this.timeCount == undefined || !this.progressBar) {
            return;
        }
        this.timeCount += dt;
        let p = this.timeCount / this.time;
        this.progressBar.progress = p;
        if (p >= 1) {
            this.timeCount = undefined;
            if (this.endCb) {
                this.endCb();
            }
        }
    }

}

