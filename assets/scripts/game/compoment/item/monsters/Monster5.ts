import { BoxCollider2D, Component, tween, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { utilTools } from '../../../../utils/utilTools';
import { constants } from '../../../data/constants';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { Monster } from './Monster';
const { ccclass, property } = _decorator;

// 电锯人
@ccclass('Monster5')
export class Monster5 extends Component {

    monster: Monster;
    moveStop: boolean;

    otherCollider1: BoxCollider2D;
    otherCollider2: BoxCollider2D;

    // 齿轮子弹
    bulletId: number = 1004;

    otherColliderOffset: any;
    otherColliderSize: any;

    init(monster: Monster) {
        this.monster = monster;
        this.moveStop = false;

        this.otherCollider1 = monster.getComponents(BoxCollider2D)[1];
        this.otherCollider2 = monster.getComponents(BoxCollider2D)[2];
        this.resetOtherCollider();

        this.startSkillLogic();

    }

    resetOtherCollider() {
        this.otherCollider1.enabled = true;
        this.otherCollider2.enabled = false;
    }

    startSkillLogic() {
        let time = 2 + Math.random() * 2;
        this.scheduleOnce(() => {
            if (this.monster.hp <= 0) {
                return;
            }
            if (Math.random() < 0.6) {
                this.attackWithSkill1();
                return;
            }
            this.attackWithSkill2();
        }, time);
    }

    attackWithSkill1() {
        this.otherCollider1.enabled = false;
        this.otherCollider2.enabled = true;
        this.monster.animationCtrl.playAnimation("attack1", true);
        let speed = this.monster.speed;
        this.monster.speed += speed * 2;
        this.scheduleOnce(() => {
            this.resetOtherCollider();
            this.monster.animationCtrl.playAnimation(constants.animations.walk, true);
            this.monster.speed = speed;
            this.startSkillLogic();
        }, 3);
    }

    attackWithSkill2() {
        this.monster.animationCtrl.playAnimationOnce("attack2", () => {
            this.startSkillLogic();
        });

        let pos = this.monster.node.getPosition();
        let direction = mapModel.player.node.getPosition().subtract(pos).normalize();
        direction.multiplyScalar(200);
        pos.add(direction);

        tween(this.monster.node).to(0.5, { position: pos }, { easing: "quadOut" }).start();

        this.scheduleOnce(() => {
            // 一圈子弹
            let p = this.monster.getInfoPosition();
            let arr = cocosUtil.getCircleDirectionArr(10);
            p = cocosUtil.convertToWorldSpaceWithPos(this.monster.node, p);
            utilTools.forArr(arr, (direction: any) => {
                mapModel.bulletSystem.addBullet(this.bulletId, physicsGroup.MONSTER_BULLET, p, direction);
            });
        }, 0.5);
    }

}

