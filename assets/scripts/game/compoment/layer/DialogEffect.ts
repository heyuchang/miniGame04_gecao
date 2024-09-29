import { Component, tween, v3, _decorator } from "cc";
const { ccclass, property } = _decorator;

@ccclass('DialogEffect')
export class DialogEffect extends Component {

    onEnable() {
        tween(this.node).set({ scale: v3(0, 0, 0) }).to(0.17, { scale: v3(1.1, 1.1, 1.2) }).to(0.06, { scale: v3(1, 1, 1) }).start();
    }
}