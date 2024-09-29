import { BoxCollider2D, Color, Component, find, macro, Node, PhysicsSystem2D, ProgressBar, sp, Tween, v2, v3, Vec2, Vec3, view, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { constants } from '../../../data/constants';
import { designManager } from '../../../manager/designManager';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { AnimationCtrl } from '../../base/AnimationCtrl';
import { ShineColor } from '../../shader/ShineColor';
const { ccclass, property } = _decorator;

@ccclass('Monster')
export class Monster extends Component {

    id: number;
    hp: number = 0;
    hpMax: number;
    atk: number = 0;
    speed: number = 0;
    row: any;
    isBoss: number = 0;

    isPauseMove: boolean;
    canFace: boolean = true;
    distancePlayer: number;

    bodyNode: Node;
    collider: BoxCollider2D;
    hpProgress: ProgressBar;

    isSpine: boolean;
    shineColor: ShineColor;
    animationCtrl: AnimationCtrl;

    direction: Vec3;
    touchPlayerTimeCount: number = 0;
    targetDirection: Vec3;

    // Vec3集中缓存
    vec3Obj = {
        playerPos: v3(0, 0, 0),
        nodePos: v3(0, 0, 0),
        nodeScale: v3(0, 0, 0),
        hpScale: v3(0, 0, 0),
        bodyNodeScale: v3(0, 0, 0),

        outVec3: v3(0, 0, 0),
        vec3Temp: v3(0, 0, 0),
    };

    // 射线检测距离
    raycastDis: number = 0;
    sideRadian: number = 0;

    waitHit: boolean;

    monsterUtil: any;

    onLoad() {
        this.bodyNode = find("body", this.node);
        this.collider = this.node.getComponent(BoxCollider2D);

        let hpProgressNode = find("hpProgress", this.node);
        if (hpProgressNode) {
            this.hpProgress = hpProgressNode.getComponent(ProgressBar);
        }

        if (this.bodyNode.getComponent(sp.Skeleton)) {
            this.isSpine = true;
        } else {
            this.isSpine = false;
        }
        this.shineColor = this.bodyNode.addComponent(ShineColor);
        this.animationCtrl = this.bodyNode.addComponent(AnimationCtrl);

        this.vec3Obj.bodyNodeScale = this.bodyNode.getScale().clone();

    }

    onEnable() {

    }

    onDisable() {

    }

    onDestroy() {

    }

    setBodySkin() {
        let sk = this.bodyNode.getComponent(sp.Skeleton);
        if (!sk) {
            return;
        }
        if (this.row.type != constants.monsterTypes.boss) {
            return;
        }
        let flag = 1;
        if (mapModel.mapId == 3 || mapModel.mapId == 4) {
            flag = 2;
        }
        sk.setSkin("skin" + flag);
    }

    init(id: number) {
        if (!this.bodyNode) {
            this.onLoad();
        }

        this.node.setScale(v3(1, 1, 1));

        this.unscheduleAllCallbacks();
        Tween.stopAllByTarget(this.node);
        if (this.shineColor) {
            this.shineColor.removeShineColorMaterial();
        }

        this.canFace = true;
        this.isPauseMove = false;
        this.distancePlayer = 0;
        this.touchPlayerTimeCount = 0;
        this.targetDirection = null;

        this.collider.enabled = true;
        this.animationCtrl.playAnimation(constants.animations.walk);

        let row = designManager.getRowById(constants.tableName.monster, id);
        this.row = row;

        this.waitHit = false;

        this.raycastDis = this.collider.size.width / 2;
        this.sideRadian = Math.random() > 0.5 ? Math.PI / 2 : -Math.PI / 2;

        // 初始位置生成规则：屏幕边缘的随机一个位置
        let size = view.getVisibleSize();
        let pos = cocosUtil.getRectPos(mapModel.player.node, size.width + 100, size.height + 100);
        this.node.position = pos;

        this.id = id;
        this.atk = row.atk;
        this.hp = row.hp;
        this.speed = row.speed;
        if (mapModel.floor > 0) {
            let floorRow = designManager.getRowById(constants.tableName.towerFloor, mapModel.floor);
            let hp = this.hp * (1 + floorRow.hp / 100);
            this.hp = Math.ceil(hp);
            this.atk = Math.ceil(this.atk * (1 + floorRow.atk / 100));
        }

        if (row.type != constants.monsterTypes.boss) {
            // 额外加强
            let mapRow = designManager.getRowById(constants.tableName.map, mapModel.mapId);
            let atkP = 1;
            if (mapRow && mapRow.atk > 0) {
                atkP = mapRow.atk;
            }
            let hpP = 1;
            if (mapRow && mapRow.hp > 0) {
                hpP = mapRow.hp;
            }
            this.atk = this.atk * atkP;
            this.hp = this.hp * hpP;


            // 怪物随着时间加强
            let arr = designManager.getTable(constants.tableName.monsterTimeAdd);
            let addRow = null;
            for (let i = 0; i < arr.length; i++) {
                let row = arr[i];
                if (mapModel.time <= row.time) {
                    addRow = row;
                    break;
                }
            }
            if (!addRow) {
                addRow = designManager.getLastRow(constants.tableName.monsterTimeAdd);
            }
            this.speed = Math.ceil(this.speed * addRow.speed);
            this.hp = Math.ceil(this.hp * addRow.hp);
            this.atk = Math.ceil(this.atk * addRow.atk);
        }

        this.hpMax = this.hp;
        this.isBoss = 0;

        this.refreshHpLayer();
        this.setBodySkin();

        try {
            let monsterStr = "Monster" + id;
            switch (id) {
                case 13:
                case 16:
                case 17:
                    monsterStr = "Monster13";
                    break;
                case 12:
                case 18:
                    monsterStr = "Monster12";
                    break;
                case 25:
                    monsterStr = "Monster4";
                    break;
                case 26:
                    monsterStr = "Monster5";
                    break;
                case 27:
                    monsterStr = "Monster6";
                    break;
                case 28:
                    monsterStr = "Monster23";
                    break;
                case 29:
                    monsterStr = "Monster22";
                    break;
                case 30:
                    monsterStr = "Monster21";
                    break;
                default:
                    break;
            }
            let monsterUtil = cocosUtil.addComponentOnce(this, monsterStr);
            monsterUtil.unscheduleAllCallbacks();
            this.monsterUtil = monsterUtil;
            // @ts-ignore
            monsterUtil.init(this);
        } catch (e) {

        }

    }

    getSaveData() {
        let data: any = {};
        data.id = this.id;
        data.hp = this.hp;
        data.atk = this.atk;
        data.pos = this.node.position;
        data.isBoss = this.isBoss;

        return data;
    }

    loadSaveData(data: any) {
        this.hp = data.hp;
        this.atk = data.atk;
        this.node.position = data.pos;
        this.isBoss = data.isBoss;

        this.refreshHpLayer();
        if (this.isBoss) {
            // 缓存boss对象
            mapModel.monsterSystem.bossMonster = this;
            mapModel.mapLayer.refreshBossHpLayer();
        }
    }

    animationEndCallback(aniName: string) {
        this.recycleSelf();
    }

    recycleSelf() {
        mapModel.monsterSystem.recycleMonsterNode(this.node);
    }

    // 蹭到玩家
    contactBeginPlayer() {
        this.touchPlayer();
        this.unschedule(this.touchPlayer);
        this.schedule(this.touchPlayer, this.row.touchTime, macro.REPEAT_FOREVER);
    }
    // 结束蹭玩家
    contactEndPlayer() {
        this.unschedule(this.touchPlayer);
    }
    touchPlayer() {
        if (this.touchPlayerTimeCount < this.row.touchTime) {
            return;
        }
        this.touchPlayerTimeCount = 0;
        mapModel.player.hitWithDam(this.atk);
    }

    // 来自玩家的挤压
    playerForceMove(movePos: Vec3) {
        let playerPos = mapModel.player.node.getPosition();
        let pos = this.node.getPosition();

        playerPos.subtract(pos).negative();
        // 只有挡在玩家前进方向的怪物才需要推开
        let radian = Vec2.angle(playerPos, movePos);
        if (radian > Math.PI * 0.7) {
            return;
        }
        playerPos.normalize().multiplyScalar(movePos.length());
        pos.add(playerPos);
        this.node.setPosition(pos);
    }

    // 来自其他怪物的挤压
    monsterForceMove(monster: Monster, movePos: Vec3) {
        if (this.isPauseMove) {
            return;
        }

        let monsterPos = monster.node.getPosition();
        let pos = this.node.getPosition();

        monsterPos.subtract(pos).negative();
        // 只有挡在怪物前进方向的怪物才需要推开
        let radian = Vec2.angle(monsterPos, movePos);
        if (radian > Math.PI * 0.7) {
            return;
        }
        monsterPos.normalize().multiplyScalar(movePos.length());
        pos.add(monsterPos);
        this.node.setPosition(pos);
    }

    // 受到伤害
    hitWithDam(dam: number, shineColor?: Color) {
        if (this.hp <= 0 || dam <= 0) {
            return;
        }

        // 再加上玩家局外的攻击力
        dam = dam + mapModel.player.atk;

        // 缩放
        this.bodyNode.scale = this.vec3Obj.bodyNodeScale;
        cocosUtil.tweenHitScale(this.bodyNode, 0.05);

        if (this.shineColor && this.row.type != constants.monsterTypes.boss) {
            // 闪白
            let materialPath = constants.materials.shineColor;
            if (this.isSpine) {
                materialPath = constants.materials.shineColorSpine;
            }
            this.shineColor.startShine(materialPath, shineColor);
        }

        this.hp -= dam;
        if (this.hp < 0) {
            this.hp = 0;
        }
        this.refreshHpLayer();
        if (this.isBoss) {
            mapModel.mapLayer.bossSubHp(dam);
        }
        if (this.id == constants.monsterIds.boxMonster) {
            // 宝箱怪掉金币
            mapModel.propSystem.addProp(constants.propIds.boxMonsterCoin, cocosUtil.convertToWorldSpace(this.node));
        }

        if (this.hp <= 0) {
            // 怪物阵亡
            mapModel.mapSystem.monsterDead(this.id, cocosUtil.convertToWorldSpace(this.node));
            this.unschedule(this.touchPlayer);
            this.collider.enabled = false;
            this.animationCtrl.playAnimation(constants.animations.die, false, (aniName: string) => {
                mapModel.monsterSystem.monsterDead(this.id);
                this.animationEndCallback(aniName);
                if (this.monsterUtil && this.monsterUtil.selfDead) {
                    this.monsterUtil.selfDead();
                }
            });
            if (this.monsterUtil) {
                this.monsterUtil.unscheduleAllCallbacks();
            }
        }
        // 伤害数字
        let color = null;
        if (dam >= designManager.config.damColor2) {
            color = "#f56d0a";
        } else if (dam >= designManager.config.damColor1) {
            color = "#e1b600";
        }
        mapModel.numSystem.addNum(dam, cocosUtil.convertToWorldSpace(this.node), color);
    }

    refreshHpLayer() {
        if (!this.hpProgress) {
            return;
        }
        this.hpProgress.progress = this.hp / this.hpMax;
    }

    setDirection(direction: Vec3) {
        this.direction = direction.normalize();
    }

    getBulletDirection() {
        let direction = null;
        if (this.node.getScale().x > 0) {
            // 向左
            direction = v3(-1, 0, 0);
        } else {
            // 向右
            direction = v3(1, 0, 0);
        }
        return direction;
    }

    getInfoPosition(index?: number, isWorld?: boolean) {
        let p = this.node.getPosition();
        let infoNode = find("info", this.node);
        if (index > 0) {
            infoNode = find("info" + index, this.node);
        }
        if (infoNode) {
            infoNode.active = false;
            // 位置修正
            let infoPos = infoNode.getPosition();
            if (this.node.scale.x < 0) {
                infoPos.x = -infoPos.x;
            }
            p.x += infoPos.x;
            p.y += infoPos.y;
        }
        if (isWorld) {
            p = cocosUtil.convertToWorldSpaceWithPos(this.node, p);
        }

        return p;
    }

    getMoveSpeed() {
        return this.speed;
    }

    updateLogic(dt: number) {
        // 向目标点移动，默认是玩家
        mapModel.player.node.getPosition(this.vec3Obj.playerPos);
        this.node.getPosition(this.vec3Obj.nodePos);
        let direction = null;
        if (this.monsterUtil && this.monsterUtil.getDirection) {
            direction = this.monsterUtil.getDirection();
        } else {
            direction = this.vec3Obj.playerPos.subtract(this.vec3Obj.nodePos).normalize();
        }

        let targetDirection = null;
        for (let i = 0; i < 2; i++) {
            let dir = direction;
            if (i == 1) {
                dir = Vec3.rotateZ(this.vec3Obj.outVec3, direction, Vec3.ZERO, this.sideRadian);
                dir = dir.normalize();
            }
            let mp = dir.multiplyScalar(this.raycastDis);
            cocosUtil.vec3CopyVal(this.vec3Obj.vec3Temp, this.vec3Obj.nodePos);
            let endPos = this.vec3Obj.vec3Temp.add(mp);
            endPos = cocosUtil.convertToWorldSpaceWithPos(this.node, endPos);
            let colliderArr = PhysicsSystem2D.instance.testPoint(v2(endPos.x, endPos.y));
            let has = false;
            for (let k = 0; k < colliderArr.length; k++) {
                let collider = colliderArr[k];
                if (collider != this.collider && (collider.node != this.node)
                    && collider.group == physicsGroup.MONSTER) {
                    has = true;
                    break;
                }
            }
            if (!has) {
                targetDirection = dir;
                break;
            }
        }
        this.targetDirection = targetDirection;

        if (!this.targetDirection) {
            return;
        }

        this.targetDirection = this.targetDirection.clone();
    }

    move(dt: number) {
        this.touchPlayerTimeCount += dt;

        if (this.hp <= 0) {
            return;
        }

        mapModel.player.node.getPosition(this.vec3Obj.playerPos);
        this.node.getPosition(this.vec3Obj.nodePos);
        this.distancePlayer = Vec2.distance(this.vec3Obj.nodePos, this.vec3Obj.playerPos);

        // 朝向玩家
        if (mapModel.player.hp > 0 && this.canFace) {
            this.node.getScale(this.vec3Obj.nodeScale);
            if (this.hpProgress) {
                this.hpProgress.node.getScale(this.vec3Obj.hpScale);
            }
            if (this.vec3Obj.nodePos.x >= this.vec3Obj.playerPos.x) {
                this.vec3Obj.nodeScale.x = Math.abs(this.vec3Obj.nodeScale.x);
                if (this.hpProgress) {
                    this.vec3Obj.hpScale.x = 1;
                }
            } else {
                this.vec3Obj.nodeScale.x = -Math.abs(this.vec3Obj.nodeScale.x);
                if (this.hpProgress) {
                    this.vec3Obj.hpScale.x = -1;
                }
            }
            this.node.scale = this.vec3Obj.nodeScale;
            if (this.hpProgress) {
                this.hpProgress.node.scale = this.vec3Obj.hpScale;
            }
        }

        let speed = this.getMoveSpeed();
        if (speed <= 0 || this.isPauseMove) {
            return;
        }

        if (this.monsterUtil && this.monsterUtil.moveStop) {
            return;
        }

        if (this.monsterUtil && this.monsterUtil.minDisPlayer > 0 && this.distancePlayer <= this.monsterUtil.minDisPlayer) {
            return;
        }

        if (!this.targetDirection) {
            return;
        }

        let dis = speed * dt;
        let movePos = this.targetDirection.normalize().multiplyScalar(dis);
        this.direction = movePos;

        this.node.position = this.vec3Obj.nodePos.add(movePos);
        if (this.row.type == constants.monsterTypes.boss) {
            mapModel.mapSystem.adjustInWall(this.node);
        }

    }

}

