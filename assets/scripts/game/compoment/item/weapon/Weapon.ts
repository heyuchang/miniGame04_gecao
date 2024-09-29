import { BoxCollider2D, Collider2D, Contact2DType, find, Node, tween, Tween, v3, Vec2, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { utilTools } from '../../../../utils/utilTools';
import { constants } from '../../../data/constants';
import { audioManager } from '../../../manager/audioManager';
import { designManager } from '../../../manager/designManager';
import { mapModel } from '../../../model/mapModel';
import { playerModel } from '../../../model/playerModel';
import { UserData } from '../../../model/UserData';
import { physicsGroup } from '../../../other/physicsGroup';
import { BaseLayer } from '../../base/BaseLayer';
import { Monster } from '../monsters/Monster';
const { ccclass, property } = _decorator;

@ccclass('Weapon')
export class Weapon extends BaseLayer {

    info: any;
    id: any;
    direction: Vec3;
    row: any;

    atk: number;
    atkPercentAdd: number;

    bodyNode: Node;
    collider: BoxCollider2D;
    lightNode: Node;

    forward: boolean;

    targetNode: Node;
    outV3: any = v3(0, 0, 0);
    canFace: boolean = true;
    parentPos: Vec3;

    timeCount: number = 0;

    weaponUtil: any;

    onLoad() {
        this.collider = this.node.getComponent(BoxCollider2D);
        if (this.collider) {
            this.collider.enabled = false;
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.contactBegin, this);
        }
        this.bodyNode = find("body", this.node);
        this.lightNode = find("light", this.node);

        this.parentPos = this.node.parent.getPosition();
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
        if (this.weaponUtil) {
            this.weaponUtil.unscheduleAllCallbacks();
        }
    }

    init(info: any) {
        if (!this.bodyNode) {
            this.onLoad();
        }

        this.info = info;
        let id = info.id;

        this.id = id;
        this.unscheduleAllCallbacks();
        Tween.stopAllByTarget(this.bodyNode);

        let row = designManager.getRowById(constants.tableName.weapon, id);
        this.row = row;

        this.atk = row.atk;

        try {
            let weaponUtil = cocosUtil.addComponentOnce(this, "Weapon" + row.type);
            weaponUtil.unscheduleAllCallbacks();
            this.weaponUtil = weaponUtil;
            // @ts-ignore
            weaponUtil.init(this);
        } catch (e) {

        }

        if (this.weaponUtil && this.weaponUtil.isFixedPos) {
            let scale = this.node.getScale();
            if (info.uiIndex == 0 || info.uiIndex == 3) {
                this.node.setScale(v3(Math.abs(scale.x), scale.y, scale.z));
            } else {
                this.node.setScale(v3(-Math.abs(scale.x), scale.y, scale.z));
            }
        }

        this.atkPercentAdd = 0;
        if (this.weaponUtil && this.weaponUtil.weaponId > 0 && mapModel.floor > 0) {
            // 爬塔武器等级加成
            let lv = UserData.getInstance().getWeaponLv(this.weaponUtil.weaponId);
            let row = designManager.getRowById(constants.tableName.weaponOpt, lv);
            this.atkPercentAdd = row.atk / 100;
        }

        if (mapModel.weaponSystem.weaponArr[0] == info) {
            // 主武器攻击力收到vip等级加成
            let vipRow = designManager.getRowById(constants.tableName.vip, playerModel.vipObj.vip);
            if (vipRow) {
                this.atkPercentAdd += vipRow.atkAdd;
            }
        }

    }

    // 飞镖类
    atkByDart() {
        audioManager.playEffect(this.row.audio);
        let p = cocosUtil.convertToWorldSpace(this.node);
        let extraObj: any = {};
        extraObj.atkPercentAdd = this.atkPercentAdd;
        mapModel.bulletSystem.addBullet(this.row.bulletId, physicsGroup.PLAYER_BULLET, p, this.direction, extraObj);
        this.timeCount = 0;
        this.bodyNode.active = false;
        tween(this.bodyNode).delay(this.row.atkTime - 0.2).call(() => {
            this.bodyNode.active = true;
            this.bodyNode.setScale(v3(0.1, 0.1, 1));
        }).to(0.2, { scale: v3(1, 1, 1) }, { easing: "quadOut" }).start();
    }

    // 子弹类
    atkByShot() {
        audioManager.playEffect(this.row.audio);
        if (this.lightNode) {
            // 枪口闪光
            this.lightNode.active = true;
            this.scheduleOnce(() => {
                this.lightNode.active = false;
            }, 0.03);
        }

        // 后摇动作
        this.canFace = false;
        let back = this.direction.clone().normalize().negative().multiplyScalar(20);
        let orignPos = this.node.getPosition();
        let time = 0.05;
        tween(this.node)
            .to(time, { position: back }, { easing: "quadOut" })
            .to(time, { position: orignPos }, { easing: "quadIn" })
            .call(() => {
                this.canFace = true;
                this.timeCount = 0;
            }).start();
    }

    // 拳头类
    atkByFist(atkDis: number, time: number) {
        // 攻击距离判断
        if (this.getDisTargetNode() > atkDis) {
            return true;
        }
        audioManager.playEffect(this.row.audio);
        let back = this.direction.clone().normalize().negative().multiplyScalar(20);
        let target = this.direction.clone().normalize().multiplyScalar(atkDis);
        let pos = this.node.getPosition();
        this.canFace = false;
        this.forward = false;
        tween(this.node)
            .to(time, { position: back }, { easing: "quadOut" })
            .call(() => {
                this.forward = true;
                this.collider.enabled = true;
            })
            .to(time * 2, { position: target }, { easing: "quadOut" })
            .call(() => {
                this.forward = false;
                this.collider.enabled = false;
                if (this.weaponUtil && this.weaponUtil.moveMaxFar) {
                    this.weaponUtil.moveMaxFar();
                }
            })
            .to(time * 2, { position: pos }, { easing: "quadIn" })
            .call(() => {
                this.canFace = true;
                this.timeCount = 0;
            })
            .start();
    }

    // 甩棍类
    atkByStick(atkDis: number) {
        // 攻击距离判断
        if (this.getDisTargetNode() > atkDis) {
            return;
        }
        audioManager.playEffect(this.row.audio);
        this.canFace = false;
        let angle = this.node.angle;
        let da = 90;
        let time = 0.03;
        tween(this.node).to(time, { angle: angle + da }).call(() => {
            let extraObj: any = {};
            extraObj.atkPercentAdd = this.atkPercentAdd;
            mapModel.bulletSystem.addBullet(this.row.bulletId, physicsGroup.PLAYER_BULLET, cocosUtil.convertToWorldSpace(this.node), this.direction, extraObj);
        }).to(time, { angle: angle }).to(time, { angle: angle - da }).call(() => {
            this.canFace = true;
            this.timeCount = 0;
        }).start();
    }

    // 强制敌人后退一点点
    targetForceMoveBack(node: Node) {
        if (!this.forward) {
            return;
        }
        let monster = node.getComponent(Monster);
        if (!monster || monster.row.type == constants.monsterTypes.boss) {
            return;
        }
        let direction = this.direction.clone().normalize().multiplyScalar(50);
        tween(node).by(0.02, { position: direction }).start();
    }

    getInfoPosition(index?: number, isWorld?: boolean) {
        let pos = this.node.getPosition();
        let infoNode = find("info", this.node);
        if (index > 0) {
            infoNode = find("info" + index, this.node);
        }
        if (infoNode) {
            infoNode.active = false;
            // 位置修正
            let infoPos = infoNode.getPosition();
            Vec3.rotateZ(infoPos, infoPos, Vec3.ZERO, utilTools.angleToRadian(this.node.angle));
            pos.x += infoPos.x;
            pos.y += infoPos.y;
        }
        if (this.weaponUtil && this.weaponUtil.isFixedPos) {
            if (this.node.scale.x < 0) {
                pos.x = -pos.x;
            }
        }
        if (isWorld) {
            pos = cocosUtil.convertToWorldSpaceWithPos(this.node, pos);
        }

        return pos;
    }

    contactBegin(selfCollider: Collider2D, otherCollider: Collider2D) {
        if (otherCollider.group == physicsGroup.MONSTER) {
            let monster = otherCollider.getComponent(Monster);
            if (monster) {
                let dam = this.atk;
                if (this.atkPercentAdd > 0) {
                    dam = dam * (1 + this.atkPercentAdd);
                    dam = Math.ceil(dam);
                }
                monster.hitWithDam(dam);
            }
        }
        if (this.weaponUtil && this.weaponUtil.contactBegin) {
            this.weaponUtil.contactBegin(otherCollider.node);
        }
    }

    getCalPosition() {
        let pos = mapModel.player.node.getPosition();
        pos.x += this.parentPos.x;
        pos.y += this.parentPos.y;

        return pos;
    }

    getDisTargetNode() {
        if (!this.targetNode) {
            return 999999;
        }
        let dis = Vec2.distance(this.getCalPosition(), this.targetNode.position);

        return dis;
    }

    updateLogic(dt: number) {
        this.targetNode = null;

        // 找出距离最近的怪物或木箱
        let targetNode = mapModel.mapSystem.getMinDisTargetNode(this.getCalPosition());
        if (!targetNode) {
            return;
        }

        if (!this.canFace) {
            return;
        }

        this.targetNode = targetNode;
        let pos1 = cocosUtil.convertToWorldSpace(this.node);
        let pos2 = cocosUtil.convertToWorldSpace(targetNode);
        // 左右情况
        let scale = this.node.getScale();
        if (!this.weaponUtil || !this.weaponUtil.isFixedPos) {
            if (pos1.x <= pos2.x) {
                this.node.setScale(v3(scale.x, Math.abs(scale.y), scale.z));
            } else {
                this.node.setScale(v3(scale.x, -Math.abs(scale.y), scale.z));
            }
        }

        // 瞄准最近怪物
        pos2.subtract(pos1);
        this.direction = pos2;
        let angle = utilTools.radianToAngle(Math.atan2(pos2.y, pos2.x));
        if (this.weaponUtil) {
            if (this.weaponUtil.isFixedDirection) {
                if (angle > -90 && angle <= 90) {
                    angle = 0;
                } else {
                    angle = 180;
                }
            }
            if (this.weaponUtil.isFixedPos) {
                angle = 0;
            }
        }
        this.node.angle = angle;

        if (!this.weaponUtil || !this.weaponUtil.stopTimeCount) {
            this.timeCount += dt;
            if (this.timeCount >= this.row.atkTime) {
                if (this.weaponUtil && cocosUtil.isValid(this.targetNode)) {
                    this.weaponUtil.atk();
                }
            }
        }

    }
}

