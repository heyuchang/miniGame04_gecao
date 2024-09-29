import { Component, EventTouch, find, Node, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../utils/cocosUtil';
import { msgac } from '../../data/msgac';
import { eventManager } from '../../manager/eventManager';
const { ccclass, property } = _decorator;

export interface JoystickData {
    type: string,
    event: EventTouch,
    pos: Vec3
}

@ccclass('GameCtrl')
export class GameCtrl extends Component {

    // 摇杆节点
    joystickNode: Node;

    // 摇杆中间的小圆圈节点
    blockNode: Node;
    // 可移动的半径范围
    radius: number = 70;

    orignPosition: Vec3;

    onLoad() {

        this.joystickNode = find("joystick", this.node);
        this.blockNode = find("block", this.joystickNode);

        this.orignPosition = this.joystickNode.getPosition().clone();
    }

    start() {
        this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
    }

    touchStart(event: EventTouch) {
        let location = event.getUILocation();
        let pos = new Vec3(location.x, location.y, 0);
        pos = cocosUtil.convertToNodeSpace(this.joystickNode, pos);
        this.joystickNode.setPosition(pos);
        this.blockNode.setPosition(0, 0);
        this.sendTouchEvent("start", event);
    }

    touchMove(event: EventTouch) {
        let location = event.getUILocation();
        let pos = new Vec3(location.x, location.y, 0);
        pos = cocosUtil.convertToNodeSpace(this.blockNode, pos);
        let dis = pos.length();
        if (dis > this.radius) {
            pos.normalize().multiplyScalar(this.radius);
        }
        this.blockNode.setPosition(pos);
        this.sendTouchEvent("move", event, pos);
    }

    touchEnd(event: EventTouch) {
        this.joystickNode.setPosition(this.orignPosition);
        this.blockNode.setPosition(0, 0);
        this.sendTouchEvent("end", event);
    }
    touchCancel(event: EventTouch) {
        this.joystickNode.setPosition(this.orignPosition);
        this.blockNode.setPosition(0, 0);
        this.sendTouchEvent("end", event);
    }

    sendTouchEvent(type: string, event: EventTouch, pos?: Vec3) {
        if (pos) {
            pos = pos.normalize().clone();
        }
        let data: JoystickData = {
            type,
            event,
            pos
        };
        eventManager.send(msgac.joystick, data);
    }

}

