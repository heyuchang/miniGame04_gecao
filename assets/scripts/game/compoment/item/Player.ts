import { Collider2D, Color, Contact2DType, macro, Node, v3, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../utils/cocosUtil';
import { utilTools } from '../../../utils/utilTools';
import { constants } from '../../data/constants';
import { msgac } from '../../data/msgac';
import { designManager } from '../../manager/designManager';
import { eventManager } from '../../manager/eventManager';
import { mapModel } from '../../model/mapModel';
import { playerModel } from '../../model/playerModel';
import { physicsGroup } from '../../other/physicsGroup';
import { AnimationCtrl } from '../base/AnimationCtrl';
import { BaseLayer } from '../base/BaseLayer';
import { ShineColor } from '../shader/ShineColor';
import { JoystickData } from './GameCtrl';
import { Monster } from './monsters/Monster';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends BaseLayer {

    moveSpeed: number = 350;
    hp: number = 100;
    hpMax: number = 100;
    hpMaxOrign: number = 100;
    atk: number = 0;

    bodyNode: Node;
    effectAnimationCtrl: AnimationCtrl;
    lightShine: boolean = false;
    collider: Collider2D;
    animationCtrl: AnimationCtrl;
    shineColor: ShineColor;
    hpProgress: Node;

    movePos: Vec3;
    outVec3: Vec3 = v3(0, 0, 0);

    // 存储碰撞中的怪物对象数组
    monsterArr: any[] = [];

    // 围栏碰撞器
    wallCollider: any;

    onLoad() {
        super.onLoad();

        this.collider = this.getComponent(Collider2D);

        this.bodyNode = this.getNodeByPath("body");
        this.hpProgress = this.getNodeByPath("hpProgress");
        this.animationCtrl = this.bodyNode.addComponent(AnimationCtrl);
        this.shineColor = this.bodyNode.addComponent(ShineColor);
        this.effectAnimationCtrl = this.getNodeByPath("body/effect").addComponent(AnimationCtrl);
        this.effectAnimationCtrl.node.active = false;

        this.collider.on(Contact2DType.BEGIN_CONTACT, this.contactBegin, this);
        this.collider.on(Contact2DType.END_CONTACT, this.contactEnd, this);

        this.moveSpeed = designManager.config.roleSpeed;

        this.setRoleSkin(this.bodyNode);
    }

    onEnable() {
        super.onEnable();

        this.addEventArr([
            msgac.joystick,
        ]);

    }

    onDestroy() {

    }

    initData(data: any) {
        this.hp = data.hp;
        this.hpMax = this.hp;
        this.hpMaxOrign = this.hp;
        this.atk = data.atk;

        this.initUI();
    }

    initUI() {
        this.collider.enabled = true;
        this.refreshHpLayer();
    }

    getSaveData() {
        let data: any = {};
        data.moveSpeed = this.moveSpeed;
        data.hp = this.hp;
        data.hpMax = this.hpMax;
        data.hpMaxOrign = this.hpMaxOrign;
        data.atk = this.atk;
        data.pos = this.node.position;

        return data;
    }

    loadSaveData(data: any) {
        this.moveSpeed = data.moveSpeed;
        this.hp = data.hp;
        this.hpMax = data.hpMax;
        this.hpMaxOrign = data.hpMaxOrign;
        this.atk = data.atk;
        this.node.position = data.pos;

        this.refreshHpLayer();
    }

    // 提高生命上限百分比
    addHpMaxPercent(p: number) {
        let lastHpMax = this.hpMax;
        let nowHpMax = this.hpMaxOrign * (1 + p);
        nowHpMax = Math.round(nowHpMax);
        let addHp = nowHpMax - lastHpMax;
        this.hpMax = nowHpMax;
        this.addHp(addHp);
    }

    // 增加血量百分比
    addHpPercent(p: number) {
        this.effectAnimationCtrl.node.active = true;
        this.effectAnimationCtrl.playAnimation("zhiliao", false, () => {
            this.effectAnimationCtrl.node.active = false;
        });
        let val = this.hpMax * p;
        this.addHp(val);
    }
    addHp(num: number) {
        if (this.hp <= 0) {
            // 已阵亡
            return;
        }
        num = Math.ceil(num);

        this.hp += num;

        if (num > 0) {
            // 回复血量
            mapModel.numSystem.addNum(num, cocosUtil.convertToWorldSpace(this.node), Color.GREEN);
        } else {
            // 伤害数字
            mapModel.numSystem.addNum(num, cocosUtil.convertToWorldSpace(this.node), Color.RED);
        }
        if (this.hp > this.hpMax) {
            this.hp = this.hpMax;
        }
        if (this.hp < 0) {
            this.hp = 0;
        }
        this.refreshHpLayer();
    }

    refreshHpLayer() {
        this.setProgressBar(this.hpProgress, this.hp / this.hpMax);
    }

    useSkillHeal(percent: number) {
        this.addHpPercent(percent);
    }

    backLife() {
        this.hp = this.hpMax;
        this.animationCtrl.playAnimation(constants.animations.walk, true);
        this.effectAnimationCtrl.node.active = true;
        this.effectAnimationCtrl.playAnimation("hudun", true);
        this.lightShine = true;
        this.scheduleOnce(() => {
            this.effectAnimationCtrl.node.active = false;
            this.lightShine = false;
        }, 3);
        this.refreshHpLayer();
        mapModel.mapLayer.gameFightResume();
        mapModel.mapLayer.onSkillSelect();
    }

    hitWithDam(dam: number, shineColor?: Color) {
        if (dam <= 0 || this.hp <= 0) {
            return;
        }
        if (this.lightShine) {
            // 无敌状态
            return;
        }

        dam = dam * (1 - mapModel.skillSystem.getSkill2DamSubPercent());
        dam = Math.ceil(dam);
        this.addHp(-dam);
        // 闪白
        this.shineColor.startShine(constants.materials.shineColorSpine, shineColor);

        if (this.hp <= 0) {
            if (playerModel.skillLifeNum > 0) {
                // 自动复活
                playerModel.skillLifeNum--;
                this.backLife();
                eventManager.send(msgac.mapRefreshSkill);
                return;
            }
            this.collider.enabled = false;
            this.animationCtrl.playAnimation(constants.animations.die, false, () => {
                // 弹出复活界面
                mapModel.mapLayer.popLayer(constants.layers.BackLifeLayer);
            });
        }
    }

    addMonster(collider: Collider2D) {
        if (collider.tag != 0) {
            return;
        }
        let monster = collider.getComponent(Monster);
        let index = this.monsterArr.indexOf(monster);
        if (index == -1) {
            monster.isPauseMove = true;
            this.monsterArr.push(monster);
        }
    }

    removeMonster(collider: Collider2D) {
        if (collider.tag != 0) {
            return;
        }
        let monster = collider.getComponent(Monster);
        let index = this.monsterArr.indexOf(monster);
        if (index != -1) {
            monster.isPauseMove = false;
            this.monsterArr.splice(index, 1);
        }
    }

    contactBegin(selfCollider: Collider2D, otherCollider: Collider2D) {
        if (otherCollider.group == physicsGroup.MONSTER) {
            let monster = otherCollider.getComponent(Monster);
            if (!monster) {
                monster = otherCollider.node.parent.getComponent(Monster);
            }
            this.addMonster(otherCollider);
            monster.contactBeginPlayer();
            return;
        }
        if (otherCollider.group == physicsGroup.WALL) {
            this.touchWall();
            this.unschedule(this.touchWall);
            this.wallCollider = otherCollider;
            this.schedule(this.touchWall, 0.5, macro.REPEAT_FOREVER, 0);
            return;
        }
    }

    contactEnd(selfCollider: Collider2D, otherCollider: Collider2D) {
        if (!cocosUtil.isValid(otherCollider)) {
            return;
        }
        if (otherCollider.group == physicsGroup.MONSTER) {
            let monster = otherCollider.getComponent(Monster);
            if (!monster) {
                monster = otherCollider.node.parent.getComponent(Monster);
            }
            this.removeMonster(otherCollider);
            monster.contactEndPlayer();
            return;
        }
        if (otherCollider.group == physicsGroup.WALL) {
            if (this.wallCollider == otherCollider) {
                this.unschedule(this.touchWall);
            }
            return;
        }
    }

    touchWall() {
        let dam = this.hpMax * 0.05;
        dam = Math.ceil(dam);
        this.hitWithDam(dam);
    }

    joystickRet(data: JoystickData) {
        if (data.type == "start") {
            if (this.hp <= 0) {
                return;
            }
            this.animationCtrl.playAnimation(constants.animations.walk, true);
            return;
        }
        if (data.type == "move") {
            this.movePos = data.pos;
            return;
        }

        if (data.type == "end") {
            this.stopMove();
        }
    }

    stopMove() {
        this.movePos = null;
        if (this.hp > 0) {
            this.animationCtrl.playAnimation(constants.animations.standBy, true);
        }
    }

    getMoveSpeed() {
        return this.moveSpeed * (1 + mapModel.skillSystem.getSkill2PlayerSpeedAddPercent());
    }

    move(dt: number) {
        if (!this.movePos || this.hp <= 0) {
            return;
        }
        let nowPos = this.node.getPosition(this.outVec3);
        let dis = this.getMoveSpeed() * dt;
        let movePos = this.movePos.clone().multiplyScalar(dis);
        nowPos.add(movePos);
        this.node.setPosition(nowPos);
        mapModel.mapSystem.adjustInWall(this.node);

        let scale = this.bodyNode.getScale();
        if (movePos.x >= 0) {
            // 向右
            this.bodyNode.setScale(-Math.abs(scale.x), scale.y);
        } else {
            // 向左
            this.bodyNode.setScale(Math.abs(scale.x), scale.y);
        }

        mapModel.mapSystem.refreshMapFightWindow();

        if (this.monsterArr.length > 0) {
            // 模拟推开怪物
            utilTools.forArr(this.monsterArr, (monster: Monster) => {
                monster.playerForceMove(movePos.clone());
            });
        }

        this.setString(mapModel.mapLayer.playerPosNode, Math.floor(nowPos.x) + "," + Math.floor(nowPos.y));
    }

    update(dt: number) {
        this.move(dt);
    }

}

