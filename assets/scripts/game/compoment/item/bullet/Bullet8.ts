import { BoxCollider2D, Component, find, Node, UITransform, Vec2, _decorator } from 'cc';
import { utilTools } from '../../../../utils/utilTools';
import { mapModel } from '../../../model/mapModel';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 蝎子-闪电
@ccclass('bullet8')
export class bullet8 extends Component {

    bullet: Bullet;
    contactNotHide: boolean = true;
    moveStop: boolean = false;

    bodyNode: Node;
    heightWidthRatio: number = 207 / 440;

    // 最大跟踪长度
    maxFollowDis: number = 600;

    init(bullet: Bullet) {
        this.bullet = bullet;
        this.moveStop = true;

        this.bodyNode = find("body", this.bullet.node);

        this.updateAngleAndDis();

        this.scheduleOnce(() => {
            this.bullet.recycleSelf();
        }, 2.3);

    }

    updateAngleAndDis() {
        // 角度
        let direction = this.bullet.getFacePlayerDirection();
        let angle = utilTools.radianToAngle(Math.atan2(direction.y, direction.x));
        this.bullet.node.angle = angle;

        // 长度
        let dis = Vec2.distance(this.bullet.node.getPosition(), mapModel.player.node.getPosition()) + 40;
        if (dis > this.maxFollowDis) {
            dis = this.maxFollowDis;
        }
        this.bodyNode.getComponent(UITransform).width = dis;
        this.bodyNode.getComponent(UITransform).height = this.heightWidthRatio * dis;
        this.bullet.getComponent(BoxCollider2D).offset.x = dis - 50;
    }

    update(dt: number) {
        this.updateAngleAndDis();
    }

}

