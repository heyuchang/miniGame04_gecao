import { Color, Component, find, Label, Node, tween, UIOpacity, v3, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../utils/cocosUtil';
import { NodePoolUtil } from '../base/NodePoolUtil';
const { ccclass, property } = _decorator;

@ccclass('NumSystem')
export class NumSystem extends Component {

    numNode: Node;

    nodePoolUtil: NodePoolUtil;

    onLoad() {
        this.numNode = find("num", this.node);
        this.nodePoolUtil = this.addComponent(NodePoolUtil);
        this.nodePoolUtil.recycleNode(this.numNode);
    }

    addNum(num: number | string, worldPos: Vec3, color?: any) {
        let numNode = this.nodePoolUtil.getNode();

        let pos = cocosUtil.convertToNodeSpace(numNode, worldPos);
        let dx = Math.random() * 20;
        dx = Math.random() > 0.5 ? dx : -dx;
        pos.x += dx;
        numNode.setPosition(pos);

        numNode.setScale(v3(1, 1, 1));
        numNode.getComponent(UIOpacity).opacity = 255;
        numNode.getComponent(Label).string = "" + num;
        if (!color) {
            color = Color.WHITE;
        }
        cocosUtil.setRenderableColor(numNode, color);

        let dy = 20 + Math.random() * 10;
        tween(numNode).by(0.3, {
            position: v3(0, dy, 0),
            scale: v3(0.5, 0.5, 0)
        }).by(0.3, {
            scale: v3(-0.3, -0.3, 0),
        }, {
            onUpdate(node: Node, ratio: number) {
                numNode.getComponent(UIOpacity).opacity = (1 - ratio) * 255;
            }
        }).call(() => {
            this.nodePoolUtil.recycleNode(numNode);
        }).start();

    }

}

