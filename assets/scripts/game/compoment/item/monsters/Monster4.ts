import { Component, v3, Vec3, _decorator } from 'cc';
import { utilTools } from '../../../../utils/utilTools';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Monster } from './Monster';
const { ccclass, property } = _decorator;

// 狙击手
@ccclass('Monster4')
export class Monster4 extends Component {

    monster: Monster;
    moveStop: boolean;

    // 跟踪导弹
    bulletId1: number = 1002;
    // 一颗大子弹
    bulletId2: number = 1003;

    // 距离玩家最小距离
    minDisPlayer: number = 300;

    outVec3: Vec3 = v3(0, 0, 0);

    init(monster: Monster) {
        this.monster = monster;
        this.moveStop = false;

        this.startSkillLogic();
    }

    startSkillLogic() {
        let time = 2;
        this.scheduleOnce(() => {
            let ret = Math.random();
            if (ret < 0.4) {
                this.useSkill1();
            } else if (ret < 0.7) {
                this.useSkill1(3);
            } else {
                this.useSkill2();
            }
        }, time);
    }

    useSkill2() {
        if (this.monster.hp <= 0) {
            return;
        }
        this.moveStop = true;
        this.monster.animationCtrl.playAnimationOnce("attack", () => {
            this.startSkillLogic();
            this.moveStop = false;
        });
        this.scheduleOnce(() => {
            // 发射一颗大子弹
            let pos = this.monster.getInfoPosition(0, true);
            let direction = this.monster.getBulletDirection();
            mapModel.bulletSystem.addBullet(this.bulletId2, physicsGroup.MONSTER_BULLET, pos, direction);
        }, 0.5);
    }

    useSkill1(num: number = 1) {
        if (this.monster.hp <= 0) {
            return;
        }
        this.monster.animationCtrl.playAnimationOnce("attack", () => {
            this.startSkillLogic();
        });
        this.scheduleOnce(() => {
            // 发射三颗跟踪子弹
            let pos = this.monster.getInfoPosition(0, true);
            let direction = this.monster.getBulletDirection();

            mapModel.bulletSystem.addBullet(this.bulletId1, physicsGroup.MONSTER_BULLET, pos, direction);

            if (num == 3) {
                let radian = utilTools.angleToRadian(50);
                let direction2 = Vec3.rotateZ(this.outVec3, direction, Vec3.ZERO, radian);
                mapModel.bulletSystem.addBullet(this.bulletId1, physicsGroup.MONSTER_BULLET, pos, direction2);

                let direction3 = Vec3.rotateZ(this.outVec3, direction, Vec3.ZERO, -radian);
                mapModel.bulletSystem.addBullet(this.bulletId1, physicsGroup.MONSTER_BULLET, pos, direction3);
            }

        }, 0.5);
    }

}

