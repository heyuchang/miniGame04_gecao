import { Component, v3, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Monster } from './Monster';
const { ccclass, property } = _decorator;

// 雷球
@ccclass('Monster9')
export class Monster9 extends Component {

    monster: Monster;
    moveStop: boolean;

    bulletId: number = 1011;

    outVec3: Vec3 = v3(0, 0, 0);

    init(monster: Monster) {
        this.monster = monster;
        this.moveStop = false;

        this.scheduleOnce(() => {
            this.useSkill();
        }, 1 + Math.random() * 3);
    }

    startSkillLogic() {
        let time = 3 + Math.random() * 1;
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

