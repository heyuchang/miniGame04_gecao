import { BoxCollider2D, Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { utilTools } from '../../../../utils/utilTools';
import { mapModel } from '../../../model/mapModel';
import { HintNames } from '../hint/Hint';
import { Monster } from './Monster';
const { ccclass, property } = _decorator;

// 盾兵
@ccclass('Monster23')
export class Monster23 extends Component {

    monster: Monster;
    moveStop: boolean;

    otherCollider: BoxCollider2D;

    isFollow: boolean;

    monsterId: number = 14;

    init(monster: Monster) {
        this.monster = monster;
        this.moveStop = false;
        this.isFollow = false;

        this.otherCollider = this.getComponents(BoxCollider2D)[1];
        this.resetCollider();

        this.startSkillLogic();
    }

    resetCollider() {
        this.otherCollider.enabled = false;
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
        this.isFollow = true;
        this.monster.collider.enabled = false;

        this.scheduleOnce(() => {
            this.isFollow = false;
        }, 1);

        this.scheduleOnce(() => {
            this.otherCollider.enabled = true;
            this.monster.collider.enabled = true;
        }, 1.5);

        this.monster.animationCtrl.playAnimationOnce("attack1", () => {
            this.monster.canFace = true;
            this.moveStop = false;
            this.resetCollider();
            this.startSkillLogic();
        });
    }

    useSkill2() {
        if (this.monster.hp <= 0) {
            return;
        }

        // 召唤小怪
        for (let i = 0; i < 3; i++) {
            this.scheduleOnce(() => {
                let pos = cocosUtil.getAroundPos(this.node, 150 + 50 * Math.random(), 300);
                mapModel.mapSystem.adjustInWall(pos, 160);
                let worldPos = cocosUtil.convertToWorldSpaceWithPos(this.node, pos);

                let extraObj: any = {};
                extraObj.monsterId = this.monsterId;
                mapModel.hintSystem.addHint(HintNames.targetPos3, worldPos, 0, extraObj);
            }, i * 0.6);
        }

        this.startSkillLogic();
    }

    update(dt: number) {
        if (this.isFollow) {
            this.node.position = mapModel.player.node.getPosition();
        }
    }


}

