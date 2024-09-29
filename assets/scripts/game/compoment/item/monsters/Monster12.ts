import { Component, v3, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Monster } from './Monster';
const { ccclass, property } = _decorator;

// 小雷达
@ccclass('Monster12')
export class Monster12 extends Component {

    monster: Monster;
    moveStop: boolean;

    bulletId: number = 1012;

    outVec3: Vec3 = v3(0, 0, 0);

    init(monster: Monster) {
        this.monster = monster;
        this.moveStop = false;

        if (this.monster.id == 18) {
            this.bulletId = 1016;
        }

        this.scheduleOnce(() => {
            this.useSkill();
        }, 1 + Math.random() * 4);
    }

    startSkillLogic() {
        let time = 3 + Math.random() * 2;
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

