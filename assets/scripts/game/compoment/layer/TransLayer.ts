import { Node, tween, v3, _decorator } from 'cc';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass('TransLayer')
export class TransLayer extends BaseLayer {

    iconNode: Node;
    blackNode: Node;

    onLoad() {
        super.onLoad();

        this.iconNode = this.getNodeByPath("icon");
        this.blackNode = this.getNodeByPath("black");
    }

    initUI() {
        this.blackNode.active = false;
        this.iconNode.scale = v3(5, 5, 1);
        tween(this.iconNode).to(0.5, { scale: v3(0.05, 0.05, 1) }, { easing: "quadOut" }).call(() => {
            this.blackNode.active = true;
        }).start();
    }


}

