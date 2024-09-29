import { Color, Component, find, Node, tween, Tween, UIOpacity, v3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { utilTools } from '../../../../utils/utilTools';
import { constants } from '../../../data/constants';
import { mapModel } from '../../../model/mapModel';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 技能-力场
@ccclass('bullet1071')
export class bullet1071 extends Component {

    bullet: Bullet;
    contactNotHide: boolean = true;
    contactBulletTime: number = 1;

    lv: number;
    shineColor: Color;

    init(bullet: Bullet) {
        this.bullet = bullet;

        this.node.angle = 0;
        let lv = this.bullet.extraObj.lv;
        this.lv = lv;

        let frameColor = "#22D600".parseColor();
        if (lv == constants.design.maxLv) {
            frameColor = "#FF00F5".parseColor();
        }
        this.shineColor = frameColor;
        this.initScale();

        Tween.stopAllByTarget(this.bullet.bodyNode);
        let uiOpacity = this.bullet.bodyNode.getComponent(UIOpacity);
        uiOpacity.opacity = 0;
        tween(uiOpacity).to(2, { opacity: 255 }).start();

        cocosUtil.setRenderableColor(this.bullet.bodyNode, frameColor);
        let frameLayer = find("frameLayer", this.node);
        let time = 0.8;
        utilTools.forArr(frameLayer.children, (frameNode: Node, index: number) => {
            frameNode.active = false;
            cocosUtil.setRenderableColor(frameNode, frameColor);
            Tween.stopAllByTarget(frameNode);
            this.scheduleOnce(() => {
                tween(frameNode).call(() => {
                    frameNode.active = true;
                    frameNode.scale = v3(0, 0, 1);
                    frameNode.getComponent(UIOpacity).opacity = 255;
                    frameNode.angle = Math.random() * 360;
                }).to(time * 4, { scale: v3(0.8, 0.8, 1) }).to(time, { scale: v3(1, 1, 1) }, {
                    onUpdate: (node: Node, ratio: number) => {
                        frameNode.getComponent(UIOpacity).opacity = 255 * (1 - ratio);
                    }
                }).union().repeatForever().start();
            }, index * time * 1.25);
        });

        this.bullet.extraObj.endCb(this);
    }

    initScale() {
        let scale = 0.8 + this.lv * 0.4;
        scale += mapModel.skillSystem.getSkill2RangeAddScale();
        this.node.scale = v3(scale, scale, 1);
    }

    update() {
        // 跟随玩家移动
        let playerPos = mapModel.player.node.getPosition();
        this.node.setPosition(playerPos);
    }

    recycleSelfEnd() {
        this.unscheduleAllCallbacks();
        utilTools.forArr(find("frameLayer", this.node).children, (frameNode: Node) => {
            Tween.stopAllByTarget(frameNode);
        });
    }

}

