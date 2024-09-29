import { BoxCollider2D, Collider2D, Contact2DType, find, Node, Vec2, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { utilTools } from '../../../../utils/utilTools';
import { constants } from '../../../data/constants';
import { designManager } from '../../../manager/designManager';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { AnimationCtrl } from '../../base/AnimationCtrl';
import { BaseLayer } from '../../base/BaseLayer';
const { ccclass, property } = _decorator;


@ccclass('Prop')
export class Prop extends BaseLayer {

    id: number;
    row: any;
    extraObj: any;

    bodyNode: Node;
    aniNode: Node;
    collider: BoxCollider2D;
    animationCtrl: AnimationCtrl;

    propUtil: any;

    isFollowPlayer: boolean;
    followSpeed: number;

    onLoad() {
        this.collider = this.getComponent(BoxCollider2D);
        this.animationCtrl = this.addComponent(AnimationCtrl);
        this.bodyNode = find("body", this.node);
        this.aniNode = find("ani", this.node);

        if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.contactBegin, this);
        }
    }

    onEnable() {

    }

    init(id: number, worldPos: Vec3, extraObj?: any) {
        if (!this.bodyNode) {
            this.onLoad();
        }
        this.id = id;
        this.row = designManager.getRowById(constants.tableName.prop, id);
        this.extraObj = extraObj;
        this.unscheduleAllCallbacks();
        if (this.collider) {
            this.collider.enabled = true;
        }

        this.isFollowPlayer = false;
        this.followSpeed = -1000;

        let pos = cocosUtil.convertToNodeSpace(this.node, worldPos);
        this.node.setPosition(pos);

        if (this.aniNode) {
            this.aniNode.active = true;
        }
        this.setSpriteFrame(this.bodyNode, this.row.icon);

        try {
            this.propUtil = cocosUtil.addComponentOnce(this, "Prop" + id);
            this.propUtil.unscheduleAllCallbacks();
            this.propUtil.init(this);
        } catch (e) {

        }
    }

    contactBegin(selfCollider: Collider2D, otherCollider: Collider2D) {
        if (otherCollider.group == physicsGroup.PLAYER_BULLET) {
            if (this.id == constants.propIds.box1) {
                // 打到木箱
                this.collider.enabled = false;
                this.animationCtrl.playAnimationOnce("ani", () => {
                    this.recycleSelf();
                    // 按照权重，产生道具
                    let tb = designManager.getTable(constants.tableName.box1);
                    let arr = [];
                    for (let i in tb) {
                        let row = tb[i];
                        if (row.mapId == 0 || row.mapId == mapModel.mapId) {
                            arr.push(row);
                        }
                    }
                    let ret = utilTools.getRowByWeight(arr);
                    let num = utilTools.getFloatValue(ret.minNum, ret.maxNum, true);
                    let extraObj: any = {};
                    extraObj.num = num;
                    extraObj.propId = ret.propId;
                    let propId = ret.propId;
                    let row = designManager.getRowById(constants.tableName.prop, propId);
                    if (row.type == 8 || row.type == 11) {
                        propId = constants.propIds.equip;
                    }
                    mapModel.propSystem.addProp(propId, cocosUtil.convertToWorldSpace(this.node), extraObj);
                });
                return;
            }
        }
    }

    contactPlayer() {
        if (this.propUtil && this.propUtil.notContact) {
            return;
        }
        if (this.propUtil && this.propUtil.autoGet) {
            // 自动获得
            return;
        }
        this.node.active = true;
        if (this.collider) {
            this.collider.enabled = false;
        }
        this.isFollowPlayer = true;
        if (this.aniNode) {
            this.aniNode.active = false;
        }
        if (this.propUtil && this.propUtil.contactStart) {
            this.propUtil.contactStart();
        }
    }

    doDisPlayerGet(dis: number) {
        if (this.collider) {
            // 碰撞体来管理的
            return;
        }
        if (dis > 100 + mapModel.skillSystem.getSkill2PropGetAddDis()) {
            return;
        }
        this.contactPlayer();
    }

    // 玩家吃到道具
    playerGetProp() {
        this.recycleSelf();
        this.isFollowPlayer = false;
        let num = 1;
        if (this.extraObj && this.extraObj.num > 0) {
            num = this.extraObj.num;
        }
        let propId = this.id;
        if (this.id == constants.propIds.equip) {
            propId = this.extraObj.propId;
        }
        mapModel.propSystem.getProp(propId, num);
    }

    recycleSelf() {
        mapModel.propSystem.recyclePropNode(this.node);
    }

    update(dt: number) {
        if (!this.isFollowPlayer) {
            return;
        }
        let playerPos = mapModel.player.node.getPosition();
        let pos = this.node.getPosition();
        this.followSpeed += 50;
        let moveDis = this.followSpeed * dt;
        let direction = playerPos.subtract(pos).normalize().multiplyScalar(moveDis);
        pos.add(direction);
        this.node.setPosition(pos);

        if (moveDis > 0) {
            playerPos = mapModel.player.node.getPosition();
            let afterDirection = playerPos.subtract(pos);
            let afterAngle = utilTools.radianToAngle(Vec2.angle(direction, afterDirection));
            if (afterAngle > 90) {
                this.playerGetProp();
                return;
            }
        }

    }

}

