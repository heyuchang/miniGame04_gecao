import { macro, Node, UITransform, Vec3, _decorator } from 'cc';
import { cocosUtil } from '../../../utils/cocosUtil';
import { utilTools } from '../../../utils/utilTools';
import { constants } from '../../data/constants';
import { designManager } from '../../manager/designManager';
import { mapModel } from '../../model/mapModel';
import { playerModel } from '../../model/playerModel';
import { BaseLayer } from '../base/BaseLayer';
import { NodePoolUtil } from '../base/NodePoolUtil';
import { Bullet } from '../item/bullet/Bullet';
import { Monster } from '../item/monsters/Monster';
const { ccclass, property } = _decorator;

@ccclass('MonsterSystem')
export class MonsterSystem extends BaseLayer {

    // 按照怪物id进行UI分层
    idMonsterLayerObj: any = {};

    monsterCreateArr: any = [];

    bossMonster: Monster;
    bossCreateInfo: any;

    // 一共产生的怪物数量
    monsterNum: number = 0;
    // 当前在显示的怪物数量
    showMonsterNum: number = 0;

    onLoad() {
        super.onLoad();

        this.schedule(this.refreshMonsterShow, 0.5, macro.REPEAT_FOREVER);
        this.schedule(this.createMonsterLogic, 0.1, macro.REPEAT_FOREVER);
    }

    onEnable() {
        super.onEnable();

    }

    getSaveData() {
        let monsterData: any = {};
        monsterData.arr = [];
        monsterData.bossCreateInfo = this.bossCreateInfo;

        this.forAliveMonster((monster: Monster) => {
            let info = monster.getSaveData();
            monsterData.arr.push(info);
        });

        return monsterData;
    }

    loadSaveData(data: any) {
        utilTools.forArr(data.arr, (info: any) => {
            let monster = this.createMonster(info.id);
            monster.loadSaveData(info);
        });

        this.bossCreateInfo = data.bossCreateInfo;
        if (this.bossCreateInfo) {
            this.createMonsterWithInfo(this.bossCreateInfo.id, this.bossCreateInfo.isBoss, this.bossCreateInfo.warn);
        }
    }

    // 怪物显示优化
    refreshMonsterShow(dt: number) {
        let destroyCount = 1;
        let showCount = 3;
        let hideCount = 1;
        let showNum = 0;
        let tmpArr = [];
        this.forAliveMonster((monster: Monster, monsterNode: Node) => {
            let row = designManager.getRowById(constants.tableName.monster, monster.id);
            if (monster.distancePlayer < mapModel.dataRadius || !row.isData) {
                // 显示怪物
                showNum++;
                if (!monsterNode.active && showCount > 0) {
                    monsterNode.active = true;
                    showCount--;
                }
            } else if (monster.distancePlayer < mapModel.destroyRadius) {
                // 隐藏怪物
                if (monsterNode.active && hideCount > 0) {
                    hideCount--;
                    monsterNode.active = false;
                }
            } else {
                if (row.type == constants.monsterTypes.common && destroyCount > 0) {
                    // 销毁怪物
                    destroyCount--;
                    tmpArr.push(monsterNode);
                }
            }
        });
        utilTools.forArr(tmpArr, (monsterNode: Node) => {
            monsterNode.getComponent(Monster).recycleSelf();
        });
        this.setString(mapModel.mapLayer.showNumNode, showNum);
        this.showMonsterNum = showNum;
    }

    // 怪物生成逻辑
    updateMapLevel(dt: number) {
        let removeIdArr = [];
        utilTools.forArr(mapModel.mapLevelArr, (mapLevel: any) => {
            // test
            // mapLevel.row.maxNum = 100;
            // mapLevel.row.createTime = 0.1;

            if (mapLevel.row.maxNum > 0 && mapLevel.createCount >= mapLevel.row.maxNum) {
                removeIdArr.push(mapLevel.id);
                return;
            }
            if (mapLevel.row.endTime > 0 && mapModel.time > mapLevel.row.endTime + 0.5) {
                removeIdArr.push(mapLevel.id);
                return;
            }

            // 预警动画
            if (mapLevel.row.warn && !mapLevel.hasWarn && mapModel.time >= mapLevel.row.startTime && !mapLevel.row.isBoss) {
                mapLevel.hasWarn = true;
                mapModel.mapSystem.startWarning(mapLevel.row.warn);
            }

            // 还没到达生成时间点
            if (mapModel.time < mapLevel.row.startTime) {
                return;
            }

            mapLevel.timeCount += dt;
            if (mapLevel.timeCount >= mapLevel.row.createTime || mapLevel.createCount == 0) {
                // 生成怪物
                mapLevel.timeCount -= mapLevel.row.createTime;
                mapLevel.createCount++;
                if (mapLevel.row.isBoss) {
                    this.createMonsterWithInfo(mapLevel.row.monsterId, mapLevel.row.isBoss, mapLevel.row.warn);
                    return true;
                }
                this.monsterCreateArr.push({ monsterId: mapLevel.row.monsterId, isBoss: mapLevel.row.isBoss });
                if (playerModel.isRecordAd && mapModel.mapLayer.monsterAddFlag > 0) {
                    for (let i = 0; i < mapModel.mapLayer.monsterAddFlag; i++) {
                        this.monsterCreateArr.push({ monsterId: mapLevel.row.monsterId, isBoss: mapLevel.row.isBoss });
                    }
                }
            }
        });
        let tmpArr = [];
        utilTools.forArr(mapModel.mapLevelArr, (mapLevel: any) => {
            if (removeIdArr.indexOf(mapLevel.id) != -1) {
                return;
            }
            tmpArr.push(mapLevel);
        });
        mapModel.mapLevelArr = tmpArr;
    }

    createMonsterLogic(dt: number) {
        if (!playerModel.isRecordAd && this.showMonsterNum >= 200) {
            return;
        }
        let count = Math.ceil(this.monsterCreateArr.length / 10);

        for (let i = 0; i < count; i++) {
            let info = this.monsterCreateArr.shift();
            if (!info) {
                return;
            }
            this.createMonsterWithInfo(info.monsterId, info.isBoss);
        }
    }

    getMonsterLayerNameById(id: number) {
        return "monsterLayer" + id;
    }

    getMonsterLayerById(monsterId: number) {
        let monsterLayer = this.idMonsterLayerObj[monsterId];
        if (!monsterLayer) {
            monsterLayer = new Node(this.getMonsterLayerNameById(monsterId));
            monsterLayer.addComponent(UITransform);
            monsterLayer.setPosition(0, 0);
            monsterLayer.parent = this.node;
            this.idMonsterLayerObj[monsterId] = monsterLayer;

            let row = designManager.getRowById(constants.tableName.monster, monsterId);
            let nodePoolUtil = monsterLayer.addComponent(NodePoolUtil);
            nodePoolUtil.init(mapModel.monsterPrefabObj[row.prefab]);
        }
        return monsterLayer;
    }

    createMonster(monsterId: number, worldPos?: Vec3) {
        let nodePoolUtil: NodePoolUtil = this.getMonsterLayerById(monsterId).getComponent(NodePoolUtil);
        let monsterNode = nodePoolUtil.getNode();
        let monster: Monster = cocosUtil.addComponentOnce(monsterNode, Monster);
        monster.init(monsterId);
        if (worldPos) {
            monster.node.position = cocosUtil.convertToNodeSpace(monster.node, worldPos);
        }

        this.monsterNum++;
        this.setString(mapModel.mapLayer.monsterNumNode, this.monsterNum);

        return monster;
    }

    async createMonsterWithInfo(monsterId: number, isBoss: number, warn?: string) {
        // // test
        // if (isBoss) {
        //     monsterId = 23;
        // }

        if (isBoss) {
            // 停止计时
            mapModel.mapSystem.stopTimeCount = true;
            // 移除所有怪物计划
            mapModel.mapLevelArr = [];
            this.monsterCreateArr = [];

            this.bossCreateInfo = {
                id: monsterId,
                isBoss: isBoss,
                warn: warn
            };
            if (this.getMonsterNumByType(constants.monsterTypes.elite) > 0) {
                // 如果有精英怪，就要等精英怪打死后才能出现
                return;
            }

            mapModel.mapSystem.startWarning(warn);
            await cocosUtil.waitTimeAsync(this, 2);
            this.bossCreateInfo = undefined;
        }

        let monster = this.createMonster(monsterId);

        if (isBoss) {
            monster.isBoss = isBoss;

            // BOSS产生位置和预警
            let pos = mapModel.player.node.getPosition();
            pos.y += 400;
            monster.node.position = pos;
            monster.monsterUtil.moveStop = true;
            monster.canFace = false;
            monster.node.parent.active = false;
            monster.collider.enabled = false;
            this.scheduleOnce(() => {
                monster.node.parent.active = true;
                cocosUtil.tweenScaleIn(monster.node, 0.5, () => {
                    monster.monsterUtil.moveStop = false;
                    monster.canFace = true;
                    monster.collider.enabled = true;
                });

                // let time = 0.5;
                // monster.node.setScale(0, 0, 1);
                // tween(monster.node).to(time, {
                //     scale: v3(1.2, 1.2, 1)
                // }).to(time / 2, {
                //     scale: v3(1, 1, 1)
                // }).call(() => {
                //     monster.monsterUtil.moveStop = false;
                //     monster.canFace = true;
                // }).start();

            }, 0.8);
            mapModel.mapSystem.bossPosHintAnimationCtrl.node.active = true;
            mapModel.mapSystem.bossPosHintAnimationCtrl.node.position = pos;
            mapModel.mapSystem.bossPosHintAnimationCtrl.playAnimation("aa", false, () => {
                mapModel.mapSystem.bossPosHintAnimationCtrl.node.active = false;
            });

            // 销毁所有普通怪物
            let hitArr = [];
            this.forAliveMonster((monster: Monster) => {
                if (monster.row.type != constants.monsterTypes.common) {
                    return;
                }
                monster.waitHit = true;
                let info: any = {};
                info.monster = monster;
                hitArr.push(info);
            });
            this.batchHitMonster(hitArr);

            // 怪物子弹全部消失
            mapModel.bulletSystem.forVisibleMonsterBullet((bullet: Bullet) => {
                bullet.recycleSelf();
            });

            // 显示围栏
            mapModel.mapSystem.showWallLayer();

            // 缓存boss对象
            this.bossMonster = monster;

            mapModel.mapLayer.refreshBossHpLayer();
        }

        return monster;
    }

    getMonsterNumByType(type: number = 0) {
        let num = 0;
        this.forAliveMonster((monster: Monster) => {
            if (!type) {
                num++;
                return;
            }
            if (monster.row.type == type) {
                num++;
            }
        });

        return num;
    }

    monsterDead(id: number) {
        let row = designManager.getRowById(constants.tableName.monster, id);
        if (row.type == constants.monsterTypes.boss) {
            mapModel.mapSystem.bossDead();
        }
        if (id == constants.monsterIds.boxMonster) {
            // 宝箱怪阵亡弹窗
            mapModel.mapLayer.popLayer(constants.layers.BoxMonsterLayer);
        }

        if (row.type == constants.monsterTypes.elite && this.bossCreateInfo) {
            this.createMonsterWithInfo(this.bossCreateInfo.id, this.bossCreateInfo.isBoss, this.bossCreateInfo.warn);
        }
    }

    // 分批怪物受击
    batchHitMonster(hitArr: any, num: number = 2) {
        let killMonsterFunc = () => {
            for (let i = 0; i < num; i++) {
                let hitInfo = hitArr.shift();
                if (!hitInfo) {
                    return;
                }
                let monster: Monster = hitInfo.monster;
                if (monster.waitHit) {
                    let dam = monster.hp;
                    if (hitInfo.dam) {
                        dam = hitInfo.dam;
                    }
                    monster.hitWithDam(dam);
                    monster.waitHit = false;
                }
            }
            this.scheduleOnce(() => {
                killMonsterFunc();
            });
        };
        killMonsterFunc();
    }

    recycleMonsterNode(monsterNode: Node) {
        let monster = monsterNode.getComponent(Monster);
        monster.hp = 0;
        let monsterId = monster.id;
        let nodePoolUtil = this.getMonsterLayerById(monsterId).getComponent(NodePoolUtil);
        nodePoolUtil.recycleNode(monsterNode);
    }

    // 遍历屏幕范围内的存活怪物
    forVisibleMonster(cb: (monster: Monster) => void) {
        utilTools.forArr(this.node.children, (monsterLayer: Node) => {
            utilTools.forArr(monsterLayer.children, (monsterNode: Node) => {
                if (!monsterNode.active) {
                    return;
                }
                if (!mapModel.isInScreenVisible(monsterNode)) {
                    return;
                }
                let monster = monsterNode.getComponent(Monster);
                if (monster.hp <= 0) {
                    return;
                }
                cb(monster);
            });
        });
    }

    // 遍历所有的存活怪物
    forAliveMonster(cb: (monster: Monster, monsterNode: Node) => void) {
        utilTools.forArr(this.node.children, (monsterLayer: Node) => {
            utilTools.forArr(monsterLayer.children, (monsterNode: Node) => {
                let monster = monsterNode.getComponent(Monster);
                if (monster.hp <= 0) {
                    return;
                }
                cb(monster, monsterNode);
            });
        });
    }

    updateLogic(dt: number) {
        this.updateMapLevel(dt);
        this.forAliveMonster((monster: Monster) => {
            monster.updateLogic(dt);
        });
    }

    update(dt: number) {
        // 怪物移动
        this.forAliveMonster((monster: Monster) => {
            monster.move(dt);
        });
    }
}

