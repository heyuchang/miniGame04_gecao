import { BoxCollider2D, Component, macro, v3, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { utilTools } from '../../../../utils/utilTools';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Monster } from './Monster';
const { ccclass, property } = _decorator;

// 蝎子
@ccclass('Monster6')
export class Monster6 extends Component {

    monster: Monster;
    moveStop: boolean;

    // 闪电
    bulletId1: number = 1006;
    // 大电球
    bulletId2: number = 1007;
    // 静态扳手
    bulletId3: number = 1009;

    numCount: number = 0;

    otherCollider1: BoxCollider2D;

    outVec3: Vec3 = v3(0, 0, 0);

    init(monster: Monster) {
        this.monster = monster;
        this.moveStop = false;

        this.otherCollider1 = monster.getComponents(BoxCollider2D)[1];
        this.otherCollider1.enabled = false;

        this.startSkillLogic();
    }

    // 向指定目标方向移动
    getDirection() {
        let pos = this.monster.node.getPosition();
        let playerPos = mapModel.player.node.getPosition();
        if (pos.x < playerPos.x) {
            playerPos.x -= 150;
        } else {
            playerPos.x += 150;
        }
        playerPos.subtract(pos).normalize();

        return playerPos;
    }

    startSkillLogic() {
        let time = 1 + Math.random();
        this.scheduleOnce(() => {
            let arr = [
                { id: 3, weight: 10 },
                { id: 4, weight: 20 }
            ];
            if (this.monster.distancePlayer <= 260) {
                arr.push({ id: 1, weight: 20 });
            }
            if (this.monster.distancePlayer <= 460) {
                arr.push({ id: 2, weight: 10 });
            }
            let ret = utilTools.getRowByWeight(arr);
            this["useSkill" + ret.id]();
        }, time);
    }

    useSkill4() {
        if (this.monster.hp <= 0) {
            return;
        }
        this.moveStop = true;
        this.monster.animationCtrl.playAnimation("attack4", true);
        this.numCount = 0;

        this.schedule(() => {
            this.numCount++;
            let pos = this.monster.getInfoPosition(3, true);

            let arr = cocosUtil.getCircleDirectionArr(6, 150);

            for (let i = 0; i < 1; i++) {
                let index = Math.floor(Math.random() * arr.length);
                let targetPos = mapModel.player.node.getPosition().add(arr[index]);
                arr.splice(index, 1);
                mapModel.bulletSystem.addBullet(this.bulletId3, physicsGroup.MONSTER_BULLET, pos, null, targetPos);
            }

            if (this.numCount >= 3) {
                this.moveStop = false;
                this.monster.animationCtrl.playAnimation("walk", true);
                this.unscheduleAllCallbacks();
                this.startSkillLogic();
            }
        }, 2, macro.REPEAT_FOREVER, 0);
    }


    useSkill3() {
        if (this.monster.hp <= 0) {
            return;
        }
        this.moveStop = true;
        this.monster.animationCtrl.playAnimationOnce("attack3", () => {
            this.moveStop = false;
            this.startSkillLogic();
        });

        let pos = this.monster.getInfoPosition(2, true);
        mapModel.bulletSystem.addBullet(this.bulletId2, physicsGroup.MONSTER_BULLET, pos, null);
    }

    // 与玩家的距离<=460才会触发
    useSkill2() {
        if (this.monster.hp <= 0) {
            return;
        }
        this.moveStop = true;
        this.monster.canFace = false;
        this.monster.animationCtrl.playAnimationOnce("attack2", () => {
            this.moveStop = false;
            this.monster.canFace = true;
            this.startSkillLogic();
        });
        this.scheduleOnce(() => {
            let pos = this.monster.getInfoPosition(0, true);
            mapModel.bulletSystem.addBullet(this.bulletId1, physicsGroup.MONSTER_BULLET, pos);
        }, 1);
    }

    // 与玩家的距离<=260才会触发
    useSkill1() {
        if (this.monster.hp <= 0) {
            return;
        }
        this.moveStop = true;
        this.monster.animationCtrl.playAnimationOnce("attack1", () => {
            this.moveStop = false;
            this.otherCollider1.enabled = false;
            this.startSkillLogic();
        });
        this.scheduleOnce(() => {
            this.otherCollider1.enabled = true;
        }, 0.05);
    }

}

