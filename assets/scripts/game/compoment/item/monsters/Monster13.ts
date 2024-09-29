import { Component, v3, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Monster } from './Monster';
const { ccclass, property } = _decorator;

// 精英机器人
@ccclass('Monster13')
export class Monster13 extends Component {

    monster: Monster;
    moveStop: boolean;

    bulletId: number = 1013;

    outVec3: Vec3 = v3(0, 0, 0);

    init(monster: Monster) {
        this.monster = monster;
        this.moveStop = false;

        if (this.monster.id == 16) {
            this.bulletId = 1014;
        } else if (this.monster.id == 17) {
            this.bulletId = 1015;
        }

        this.scheduleOnce(() => {
            this.useSkill();
        }, 1 + Math.random() * 2);
    }

    startSkillLogic() {
        let time = 2 + Math.random();
        this.scheduleOnce(() => {
            this.useSkill();
        }, time);
    }

    useSkill() {
        if (this.monster.hp <= 0) {
            return;
        }
        let p = this.monster.getInfoPosition();
        let direction = mapModel.player.node.getPosition().subtract(p);
        p = cocosUtil.convertToWorldSpaceWithPos(this.node, p);
        mapModel.bulletSystem.addBullet(this.bulletId, physicsGroup.MONSTER_BULLET, p, direction);
        this.startSkillLogic();
    }

}

