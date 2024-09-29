import { BoxCollider2D, Component, find, tween, v3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { utilTools } from '../../../../utils/utilTools';
import { mapModel } from '../../../model/mapModel';
import { physicsGroup } from '../../../other/physicsGroup';
import { HintNames } from '../hint/Hint';
import { Monster } from './Monster';
const { ccclass, property } = _decorator;

// 炸弹巨人
@ccclass('Monster21')
export class Monster21 extends Component {

    monster: Monster;
    moveStop: boolean;

    bulletId: number = 1017;

    otherCollider1: BoxCollider2D;
    otherCollider2: BoxCollider2D;
    otherCollider3: BoxCollider2D;

    init(monster: Monster) {
        this.monster = monster;
        this.moveStop = false;

        this.otherCollider1 = find("collider1", this.node).getComponent(BoxCollider2D);
        this.otherCollider2 = find("collider2", this.node).getComponent(BoxCollider2D);
        this.otherCollider3 = find("collider3", this.node).getComponent(BoxCollider2D);

        this.resetColliders();

        this.startSkillLogic();
    }

    resetColliders() {
        this.otherCollider1.enabled = false;
        this.otherCollider2.enabled = false;
        this.otherCollider3.enabled = false;
    }

    startSkillLogic() {
        this.scheduleOnce(() => {
            let arr: any = [
                { id: 2, weight: 10 },
                { id: 3, weight: 10 },
            ];

            let skill1Tag = this.getSkill1Tag();
            if (skill1Tag > 0) {
                arr.push({ id: 1, weight: 100, tag: skill1Tag });
            }

            let ret = utilTools.getRowByWeight(arr);
            if (ret) {
                this["useSkill" + ret.id](ret);
            } else {
                this.startSkillLogic();
            }
        }, 1.5 + Math.random());
    }

    getSkill1Tag() {
        if (this.monster.distancePlayer >= 560) {
            return 0;
        }
        let pos = mapModel.player.node.position.clone().subtract(this.node.position);
        let angle = cocosUtil.vec2XAngle(pos);
        if ((angle >= 345 || angle <= 15) || (angle >= 165 && angle <= 195)) {
            // 中间
            return 1;
        }
        if ((angle >= 30 && angle <= 60) || (angle >= 120 && angle <= 150)) {
            // 上面
            return 2;
        }
        if ((angle >= 300 && angle <= 330) || (angle >= 210 && angle <= 240)) {
            // 下面
            return 3;
        }
        return 0;

    }
    useSkill1(info: any) {
        if (this.monster.hp <= 0) {
            return;
        }
        this.moveStop = true;
        this.monster.canFace = false;

        let otherCollider = this["otherCollider" + info.tag];
        otherCollider.enabled = true;

        this.monster.animationCtrl.playAnimationOnce("attackHand" + info.tag, () => {
            otherCollider.enabled = false;
            this.monster.canFace = true;
            this.moveStop = false;
            this.startSkillLogic();
        });
    }

    useSkill2() {
        if (this.monster.hp <= 0) {
            return;
        }

        let dis = 500 + Math.random() * 100;

        let time = 1;
        let extraObj: any = {};
        extraObj.duration = time;
        extraObj.monster = this.monster;
        extraObj.dis = dis;
        mapModel.hintSystem.addHint(HintNames.blockArrow, cocosUtil.convertToWorldSpace(this.node), 0, extraObj);

        this.scheduleOnce(() => {
            this.moveStop = true;
            this.monster.canFace = false;
            let pos = mapModel.player.node.position.clone();
            pos.subtract(this.node.position).normalize().multiplyScalar(dis);
            let targetPos = this.node.position.clone().add(pos);

            tween(this.node).to(1, { position: targetPos }, {
                easing: "smooth", onUpdate: () => {
                    mapModel.mapSystem.adjustInWall(this.node);
                }
            }).start();

            this.monster.animationCtrl.playAnimationOnce("attack2", () => {
                this.monster.canFace = true;
                this.moveStop = false;
                this.startSkillLogic();
            });
        }, time);

    }

    useSkill3() {
        if (this.monster.hp <= 0) {
            return;
        }
        this.moveStop = true;
        this.monster.canFace = false;

        // 发射4个跟踪子弹
        let direction = this.monster.getBulletDirection();
        this.scheduleOnce(() => {
            for (let i = 0; i < 4; i++) {
                this.scheduleOnce(() => {
                    let pos = this.monster.getInfoPosition(i, true);
                    mapModel.bulletSystem.addBullet(this.bulletId, physicsGroup.MONSTER_BULLET, pos, direction);
                }, i * 0.2);
            }
        }, 0.45);

        this.monster.animationCtrl.playAnimationOnce("attack3", () => {
            this.moveStop = false;
            this.monster.canFace = true;
            this.startSkillLogic();
        });
    }


}

