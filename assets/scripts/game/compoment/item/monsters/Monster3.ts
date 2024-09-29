import { Component, v3, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Monster } from './Monster';
const { ccclass, property } = _decorator;

// 章鱼
@ccclass('Monster3')
export class Monster3 extends Component {

    monster: Monster;
    moveStop: boolean;

    bulletId: number = 1001;

    outVec3: Vec3 = v3(0, 0, 0);

    init(monster: Monster) {
        this.monster = monster;
        this.moveStop = false;

        this.scheduleOnce(() => {
            this.useSkill();
        }, 1 + Math.random() * 5);

    }

    startSkillLogic() {
        let time = 4 + Math.random() * 2;
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

