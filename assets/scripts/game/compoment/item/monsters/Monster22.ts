import { Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { utilTools } from '../../../../utils/utilTools';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Monster } from './Monster';
const { ccclass, property } = _decorator;

// 粘稠怪
@ccclass('Monster22')
export class Monster22 extends Component {

    monster: Monster;
    moveStop: boolean;

    // 光波
    bulletId: number = 1018;
    // 水滴
    bulletId2: number = 1019;
    // 泥浆
    bulletId3: number = 1020;

    init(monster: Monster) {
        this.monster = monster;
        this.moveStop = false;

        this.startSkillLogic();
    }

    startSkillLogic() {
        this.scheduleOnce(() => {
            let arr: any = [
                { id: 1, weight: 10 },
                { id: 2, weight: 10 },
            ];

            let ret = utilTools.getRowByWeight(arr);
            if (ret) {
                this["useSkill" + ret.id]();
            } else {
                this.startSkillLogic();
            }
        }, 1.5 + Math.random());
    }

    useSkill1() {
        if (this.monster.hp <= 0) {
            return;
        }
        this.moveStop = true;
        this.monster.canFace = false;

        this.monster.animationCtrl.playAnimationOnce("attack1", () => {
            this.monster.canFace = true;
            this.moveStop = false;
            this.startSkillLogic();
        });
        this.scheduleOnce(() => {
            mapModel.bulletSystem.addBullet(this.bulletId, physicsGroup.MONSTER_BULLET, cocosUtil.convertToWorldSpace(this.node));
        }, 0.5);
    }

    useSkill2() {
        if (this.monster.hp <= 0) {
            return;
        }

        // 一圈水滴
        let arr = cocosUtil.getCircleDirectionArr(8);
        utilTools.forArr(arr, (direction: any) => {
            mapModel.bulletSystem.addBullet(this.bulletId2, physicsGroup.MONSTER_BULLET, cocosUtil.convertToWorldSpace(this.node), direction, this.bulletId3);
        });

        this.startSkillLogic();
    }

    selfDead() {
        mapModel.bulletSystem.addBullet(this.bulletId3, physicsGroup.MONSTER_BULLET, cocosUtil.convertToWorldSpace(this.node), null, 2);
    }

}

