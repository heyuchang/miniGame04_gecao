import { BoxCollider2D, Collider2D, Component, Contact2DType, find, Node, Tween, v3, Vec2, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { utilTools } from '../../../../utils/utilTools';
import { constants } from '../../../data/constants';
import { audioManager } from '../../../manager/audioManager';
import { designManager } from '../../../manager/designManager';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Monster } from '../monsters/Monster';
const { ccclass, property } = _decorator;

@ccclass('Bullet')
export class Bullet extends Component {

    id: number;
    row: any;
    direction: Vec3;
    isDestroyInNoShow: boolean;
    extraObj: any;

    speed: number;
    atk: number;

    bodyNode: Node;
    collider: BoxCollider2D;
    bulletUtil: any;

    timeCount: number;

    contactItemArr: any;

    // 是否是跟踪子弹，默认是跟踪玩家
    isFollow: boolean = false;
    // 跟踪转速
    rotateSpeed: number = Math.PI / 3;

    // Vec3集中缓存
    vec3Obj = {
        targetPos: v3(0, 0, 0),
        direction: v3(0, 0, 0),

        outVec3: v3(0, 0, 0),
    };

    onLoad() {
        this.collider = this.node.getComponent(BoxCollider2D);
        if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.contactBegin, this);
            this.collider.on(Contact2DType.END_CONTACT, this.contactEnd, this);
        }
        this.bodyNode = find("body", this.node);
    }

    onDestroy() {

    }

    init(id: number, group: number, startWorldPos?: Vec3, direction?: Vec3, extraObj?: any) {
        if (!this.bodyNode) {
            this.onLoad();
        }

        if (this.collider) {
            this.collider.group = group;
            this.collider.enabled = true;
        }
        this.id = id;
        this.extraObj = extraObj;

        if (!startWorldPos) {
            // 默认起始位置为玩家位置
            startWorldPos = cocosUtil.convertToWorldSpace(mapModel.player.node);
        }
        let pos = cocosUtil.convertToNodeSpace(this.node, startWorldPos);
        this.node.setPosition(pos);

        if (!direction) {
            // 默认朝向玩家
            direction = this.getFacePlayerDirection();
        }
        if (direction.x == 0 && direction.y == 0) {
            direction.x = 1;
        }
        this.direction = direction.clone().normalize();

        let row = designManager.getRowById(constants.tableName.bullet, id);
        this.row = row;
        this.speed = row.speed;
        this.atk = row.atk;

        let angle = utilTools.radianToAngle(Math.atan2(this.direction.y, this.direction.x));
        this.node.angle = angle;

        this.timeCount = 0;
        this.isFollow = false;
        this.contactItemArr = [];
        this.isDestroyInNoShow = false;
        Tween.stopAllByTarget(this.node);
        this.unscheduleAllCallbacks();

        try {
            let bulletUtilStr = this.node.name;
            switch (this.node.name) {
                case "bullet1011":
                case "bullet1012":
                    bulletUtilStr = "bullet1011";
                    break;
                case "bullet1021":
                case "bullet1022":
                    bulletUtilStr = "bullet1021";
                    break;
                case "bullet1041":
                case "bullet1043":
                    bulletUtilStr = "bullet1041";
                    break;
                case "bullet1042":
                case "bullet1044":
                    bulletUtilStr = "bullet1042";
                    break;
                case "bullet1051":
                case "bullet1053":
                    bulletUtilStr = "bullet1051";
                    break;
                case "bullet1052":
                case "bullet1054":
                    bulletUtilStr = "bullet1052";
                    break;
                case "bullet1061":
                case "bullet1062":
                    bulletUtilStr = "bullet1061";
                    break;
                case "bullet1081":
                case "bullet1082":
                    bulletUtilStr = "bullet1081";
                    break;
                case "bullet1091":
                case "bullet1092":
                    bulletUtilStr = "bullet1091";
                    break;
                case "bullet1101":
                case "bullet1104":
                    bulletUtilStr = "bullet1101";
                    break;
                case "bullet1102":
                case "bullet1105":
                    bulletUtilStr = "bullet1102";
                    break;
                case "bullet1103":
                case "bullet1106":
                    bulletUtilStr = "bullet1103";
                    break;
                default:
                    break;
            }
            let bulletUtil = cocosUtil.addComponentOnce(this, bulletUtilStr);
            bulletUtil.unscheduleAllCallbacks();
            this.bulletUtil = bulletUtil;
            // @ts-ignore
            bulletUtil.init(this);
        } catch (e) {

        }

    }

    getFacePlayerDirection() {
        let pos = this.node.getPosition();
        return mapModel.player.node.getPosition().subtract(pos);
    }

    setDirection(direction: Vec3) {
        this.direction = direction.normalize();
    }

    contactBegin(selfCollider: Collider2D, otherCollider: Collider2D) {
        let contactItem = null;
        if (otherCollider.group == physicsGroup.MONSTER && otherCollider.tag == 0) {
            contactItem = otherCollider.getComponent(Monster);
        } else if (otherCollider.group == physicsGroup.PLAYER) {
            contactItem = mapModel.player;
        }
        if (contactItem) {
            // 子弹打到敌方
            if (this.contactEnmeyCanHide()) {
                this.recycleSelf();
            } else {
                if (this.contactItemArr.indexOf(contactItem) == -1) {
                    this.contactItemArr.push(contactItem);
                    contactItem.contactBulletTime = 0;
                }
            }
            if (this.bulletUtil && this.bulletUtil.contactBegin) {
                this.bulletUtil.contactBegin(otherCollider.node);
            }
            let dam = this.atk;
            if (this.extraObj && this.extraObj.atkPercentAdd > 0) {
                dam = dam * (1 + this.extraObj.atkPercentAdd);
                dam = Math.ceil(dam);
            }
            contactItem.hitWithDam(dam, this.getShineColor());
            audioManager.playEffect(this.row.audio);
        }

        // 玩家子弹打敌方子弹
        if (otherCollider.group == physicsGroup.MONSTER_BULLET) {
            let bullet = otherCollider.getComponent(Bullet);
            if (bullet.contactEnmeyCanHide()) {
                bullet.recycleSelf();
            }
        }

    }

    contactEnd(selfCollider: Collider2D, otherCollider: Collider2D) {
        let contactItem = null;
        if (otherCollider.group == physicsGroup.MONSTER) {
            contactItem = otherCollider.getComponent(Monster);
        } else if (otherCollider.group == physicsGroup.PLAYER) {
            contactItem = mapModel.player;
        }
        if (contactItem) {
            let index = this.contactItemArr.indexOf(contactItem);
            if (index != -1) {
                this.contactItemArr.splice(index, 1);
            }
        }
    }

    getShineColor() {
        if (this.bulletUtil && this.bulletUtil.shineColor) {
            return this.bulletUtil.shineColor;
        }
    }

    // 碰到敌人是否消失
    contactEnmeyCanHide() {
        if (this.bulletUtil && this.bulletUtil.contactNotHide) {
            return false;
        }
        return true;
    }

    // 飞到屏幕外，是否可以销毁
    outScreenCanRecyle() {
        if (this.bulletUtil && this.bulletUtil.outScreenNotRecycle) {
            return false;
        }
        return true;
    }

    recycleSelf() {
        mapModel.bulletSystem.recycleBulletNode(this.node);
        if (this.bulletUtil && this.bulletUtil.recycleSelfEnd) {
            this.bulletUtil.recycleSelfEnd();
        }
        Tween.stopAllByTarget(this.node);
        Tween.stopAllByTarget(this.bodyNode);
        this.unscheduleAllCallbacks();
        if (this.bulletUtil) {
            this.bulletUtil.unscheduleAllCallbacks();
        }

    }

    getFollowTargetPos() {
        if (this.bulletUtil && this.bulletUtil.targetPos) {
            return cocosUtil.vec3CopyVal(this.vec3Obj.targetPos, this.bulletUtil.targetPos);
        }
        // 默认跟踪玩家
        return cocosUtil.vec3CopyVal(this.vec3Obj.targetPos, mapModel.player.node.position);
    }

    update(dt: number) {
        let canMove = true;
        if (this.bulletUtil && this.bulletUtil.moveStop) {
            canMove = false;
        }
        if (this.speed <= 0) {
            canMove = false;
        }
        if (canMove) {
            let dis = this.speed * dt;
            let pos = this.node.position;
            if (this.isFollow) {
                // 根据转速，慢慢调整角度
                let targetPos = this.getFollowTargetPos();
                let direction = targetPos.subtract(pos).normalize();
                let radian1 = Math.atan2(direction.y, direction.x);
                if (radian1 < 0) {
                    radian1 += Math.PI * 2;
                }
                let radian2 = Math.atan2(this.direction.y, this.direction.x);
                if (radian2 < 0) {
                    radian2 += Math.PI * 2;
                }
                let dr = this.rotateSpeed * dt;
                let maxDr = Math.abs(radian1 - radian2);
                if (dr > maxDr) {
                    dr = maxDr;
                }
                if (radian1 > radian2) {
                    if (radian1 - radian2 > Math.PI) {
                        dr = -dr;
                    }
                } else {
                    if (radian2 - radian1 < Math.PI) {
                        dr = -dr;
                    }
                }
                this.direction = Vec3.rotateZ(this.vec3Obj.outVec3, this.direction, Vec3.ZERO, dr);
                let angle = utilTools.radianToAngle(Math.atan2(this.direction.y, this.direction.x));
                this.node.angle = angle;
            } else {
                let angle = utilTools.radianToAngle(Math.atan2(this.direction.y, this.direction.x));
                this.node.angle = angle;
            }

            let lastDirection = null;
            if (this.bulletUtil && this.bulletUtil.targetPos && this.bulletUtil.arriveTargetPos) {
                // 需要判断是否到达目的地
                let targetPos = this.getFollowTargetPos();
                lastDirection = targetPos.subtract(pos);
            }

            pos.add(cocosUtil.vec3CopyVal(this.vec3Obj.direction, this.direction).multiplyScalar(dis));
            this.node.position = pos;

            if (lastDirection) {
                let targetPos = this.getFollowTargetPos();
                let afterDirection = targetPos.subtract(pos);
                let afterAngle = utilTools.radianToAngle(Vec2.angle(lastDirection, afterDirection));
                if (afterAngle > 90) {
                    // 到达目的地
                    this.bulletUtil.arriveTargetPos();
                    return;
                }
            }
        }

        if (this.contactItemArr.length > 0) {
            utilTools.forArr(this.contactItemArr, (contactItem: any) => {
                contactItem.contactBulletTime += dt;
                let timeGap = 0.5;
                if (this.bulletUtil && this.bulletUtil.contactBulletTime > 0) {
                    timeGap = this.bulletUtil.contactBulletTime;
                }
                if (contactItem.contactBulletTime >= timeGap) {
                    contactItem.contactBulletTime = 0;
                    contactItem.hitWithDam(this.atk, this.getShineColor());
                    audioManager.playEffect(this.row.audio);
                }
            });
        }

        this.timeCount += dt;
        if (this.timeCount >= 2 && this.outScreenCanRecyle() && !mapModel.isInScreenVisible(this.node)) {
            this.recycleSelf();
        }
    }
}

