import { find, macro, Node, UITransform, _decorator } from 'cc';
import { utilTools } from '../../../utils/utilTools';
import { constants } from '../../data/constants';
import { designManager } from '../../manager/designManager';
import { mapModel } from '../../model/mapModel';
import { BaseLayer } from '../base/BaseLayer';
import { Skill } from '../item/skill/Skill';
const { ccclass, property } = _decorator;

@ccclass('SkillSystem')
export class SkillSystem extends BaseLayer {

    skillArr: any = [];

    skill2Arr: any = [];
    // 回血定时器
    hasOpenScheculeAddHp: boolean = false;

    onLoad() {
        super.onLoad();
    }

    onEnable() {
        super.onEnable();
    }

    onDestroy() {
        super.onDestroy();
    }

    getSaveData() {
        let skillData: any = {};
        skillData.skillArr = this.skillArr;
        skillData.skill2Arr = this.skill2Arr;

        return skillData;
    }

    loadSaveData(data: any) {
        utilTools.forArr(data.skillArr, (info: any) => {
            this.addSkill(0, info.id);
        });

        utilTools.forArr(data.skill2Arr, (info: any) => {
            this.addSkill2(0, info.id);
        });
    }

    // 添加主动技能
    addSkill(type: number, skillId: number = 0) {
        if (skillId > 0) {
            type = designManager.getRowById(constants.tableName.skill, skillId).type;
        }

        let info = this.getSkillInfoByType(type);
        if (info) {
            // 升级
            let row = designManager.getRowById(constants.tableName.skill, info.id + 1);
            if (!row || row.lv > constants.design.maxLv) {
                // 已满级
                return;
            }
            info.id++;
        } else {
            if (this.skillArr.length >= constants.design.skillNum) {
                // 数量已满
                return;
            }
            // 新增
            info = {};
            info.id = designManager.getFirstIdByType(type);
            this.skillArr.push(info);
        }

        if (skillId > 0) {
            info.id = skillId;
        }

        let name = this.getSkillNodeNameByType(type);
        let node = find(name, this.node);
        if (node) {
            let skillUtil = node.getComponent(Skill).skillUtil;
            if (skillUtil && skillUtil.forceDestroy) {
                skillUtil.forceDestroy();
            }
            node.destroy();
            node.parent = null;
        }

        node = new Node(name);
        node.addComponent(UITransform);
        node.parent = this.node;
        let skill = node.addComponent(Skill);

        skill.init(info);
        if (skill.skillUtil) {
            skill.skillUtil.timeCount = skill.row.cd;
        }
    }

    getSkillInfoByType(type: number) {
        for (let i in this.skillArr) {
            let tmp = this.skillArr[i];
            let row = designManager.getRowById(constants.tableName.skill, tmp.id);
            if (row.type == type) {
                return tmp;
            }
        }
        return null;
    }

    getSkillNodeNameByType(type: number) {
        return "skill" + type;
    }

    getSkillCompomentByType(type: number) {
        let name = this.getSkillNodeNameByType(type);
        let node = find(name, this.node);
        if (node) {
            return node.getComponent(Skill);
        }
        return null;
    }

    getSkill2InfoByType(type: number) {
        for (let i = 0; i < this.skill2Arr.length; i++) {
            let info = this.skill2Arr[i];
            let row = designManager.getRowById(constants.tableName.skill2, info.id);
            if (type == row.type) {
                return info;
            }
        }
        return null;
    }

    // 添加被动技能
    addSkill2(type: number, skillId: number = 0) {
        if (skillId > 0) {
            type = designManager.getRowById(constants.tableName.skill2, skillId).type;
        }

        let info = this.getSkill2InfoByType(type);
        if (info) {
            // 升级
            let row = designManager.getRowById(constants.tableName.skill2, info.id + 1);
            if (!row || row.lv > constants.design.maxLv) {
                // 已满级
                return;
            }
            info.id++;
        } else {
            if (this.skill2Arr.length >= constants.design.skillNum) {
                // 数量已满
                return;
            }
            // 新增
            info = {};
            info.id = designManager.getFirstIdByType(type);
            this.skill2Arr.push(info);
        }

        if (skillId > 0) {
            info.id = skillId;
        }

        let row = designManager.getRowById(constants.tableName.skill2, info.id);
        switch (row.type) {
            case 6:
                // 通知力场技能刷新大小
                let skill = this.getSkillCompomentByType(7);
                if (skill) {
                    skill.skillUtil.initBulletScale();
                }
                break;
            case 7:
                // 每5秒回血
                if (!this.hasOpenScheculeAddHp) {
                    this.hasOpenScheculeAddHp = true;
                    this.schedule(this.playerHpAdd, 5, macro.REPEAT_FOREVER);
                }
                break;
            case 8:
                // 提高生命上限
                mapModel.player.addHpMaxPercent(row.p1);
                break;
            default:
                break;
        }
    }

    playerHpAdd() {
        let hp = this.getSkill2Val(7);
        mapModel.player.addHp(hp);
    }

    getSkill2Val(type: number) {
        let info = this.getSkill2InfoByType(type);
        if (info) {
            let row = designManager.getRowById(constants.tableName.skill2, info.id);
            return row.p1;
        }
        return 0;
    }

    // 减少攻击间隔
    getSkill2AtkCdSubPercent() {
        return this.getSkill2Val(12);
    }

    // 增加伤害
    getSkill2AtkAddPercent() {
        return this.getSkill2Val(11);
    }

    // 增加道具吸取距离
    getSkill2PropGetAddDis() {
        return this.getSkill2Val(10);
    }

    // 金币增加
    getSkill2AddCoin() {
        return this.getSkill2Val(9);
    }

    // 提升攻击范围
    getSkill2RangeAddScale() {
        return this.getSkill2Val(6);
    }

    // 减少伤害百分比
    getSkill2DamSubPercent() {
        return this.getSkill2Val(5);
    }

    // 提升技能持续时间
    getSkill2DurationAddPercent() {
        return this.getSkill2Val(4);
    }

    // 经验值增加
    getSkill2AddExp() {
        return this.getSkill2Val(3);
    }

    // 提升玩家移动速度
    getSkill2PlayerSpeedAddPercent() {
        return this.getSkill2Val(2);
    }

    // 提升子弹飞行速度
    getSkill2BulletSpeedAddPercent() {
        return this.getSkill2Val(1);
    }

    updateLogic(dt: number) {
        utilTools.forArr(this.node.children, (node: Node) => {
            node.getComponent(Skill).updateLogic(dt);
        });
    }

}

