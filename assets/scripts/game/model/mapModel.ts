import { Camera, find, Node, Prefab, SpriteFrame, UITransform, view } from "cc";
import { cocosUtil } from "../../utils/cocosUtil";
import { utilTools } from "../../utils/utilTools";
import { Player } from "../compoment/item/Player";
import { MapLayer } from "../compoment/layer/MapLayer";
import { BulletSystem } from "../compoment/sys/BulletSystem";
import { HintSystem } from "../compoment/sys/HintSystem";
import { MapSystem } from "../compoment/sys/MapSystem";
import { MonsterSystem } from "../compoment/sys/MonsterSystem";
import { NumSystem } from "../compoment/sys/NumSystem";
import { PropSystem } from "../compoment/sys/PropSystem";
import { SkillSystem } from "../compoment/sys/SkillSystem";
import { WeaponSystem } from "../compoment/sys/WeaponSystem";
import { constants } from "../data/constants";
import { msgac } from "../data/msgac";
import { designManager } from "../manager/designManager";
import { resManager } from "../manager/resManager";
import { serverMsg } from "../other/serverMsg";
import { playerModel } from "./playerModel";
import { PropItem, UserData } from "./UserData";

class MapModel {
    private static _instance: MapModel;
    private constructor() { }
    public static get instance(): MapModel {
        if (!this._instance) {
            this._instance = new MapModel();
        }
        return this._instance;
    }

    // 半屏幕尺寸
    visibleHalfSize: any;

    mapFightLayer: Node;
    mapFightCamera: Camera;
    // 镜头初始视角
    cameraOrthoHeight: number;

    mapLayer: MapLayer;
    player: Player;
    mapSystem: MapSystem;
    monsterSystem: MonsterSystem;
    bulletSystem: BulletSystem;
    numSystem: NumSystem;
    skillSystem: SkillSystem;
    weaponSystem: WeaponSystem;
    hintSystem: HintSystem;
    propSystem: PropSystem;

    mapId: number;
    floor: number;
    // 战斗时长
    time: number;

    // 经验池数量
    expPool: number;
    // 经验增长模型
    expTypeRow: any;
    // 已获得的经验值
    expNum: number;
    // 经验等级
    expLv: number;

    // 装备数组
    equipIdArr = [];

    // 金币数量
    coinNum: number;
    // 击杀怪物数量
    killMonsterNum: number;

    // 出怪计划
    mapLevelArr: any[];

    // 3选1全都要次数
    skillAllNum: number;

    monsterPrefabObj: any = {};
    bulletPrefabObj: any = {};

    // 距离多远后隐藏节点，变成单纯的移动计算，不显示节点
    dataRadius: number;
    // 距离多远后，销毁节点数据
    destroyRadius: number;

    healAdCount: number = 0;

    initData(data: any, now: Date) {
        if (!data) {
            data = {};
        }

        let visibleSize = view.getVisibleSize();
        this.visibleHalfSize = {
            width: visibleSize.width * 0.5,
            height: visibleSize.height * 0.5
        };
        this.dataRadius = visibleSize.height * 0.6;
        this.destroyRadius = visibleSize.height * 1.5;

        this.mapFightCamera = find("CanvasMapFight/Camera").getComponent(Camera);
        this.cameraOrthoHeight = this.mapFightCamera.orthoHeight;
    }

    getSaveData() {
        let data: any = {};
        data.mapId = this.mapId;
        data.floor = this.floor;
        data.time = this.time;
        data.expPool = this.expPool;
        data.expTypeRow = this.expTypeRow;
        data.expNum = this.expNum;
        data.expLv = this.expLv;
        data.coinNum = this.coinNum;
        data.killMonsterNum = this.killMonsterNum;
        data.mapLevelArr = this.mapLevelArr;
        data.skillAllNum = this.skillAllNum;
        data.equipIdArr = this.equipIdArr;
        data.healAdCount = this.healAdCount;

        return data;
    }

    loadSaveData(data: any) {
        this.mapId = data.mapId;
        this.floor = data.floor;
        this.time = data.time;
        this.expPool = data.expPool;
        this.expTypeRow = data.expTypeRow;
        this.expNum = data.expNum;
        this.expLv = data.expLv;
        this.coinNum = data.coinNum;
        this.killMonsterNum = data.killMonsterNum;
        this.mapLevelArr = data.mapLevelArr;
        this.skillAllNum = data.skillAllNum;
        this.equipIdArr = data.equipIdArr;
        this.healAdCount = data.healAdCount;
    }

    enterMapWithMapId(mapId: number, floor: number = 0) {
        let obj: any = {};
        obj.mapId = mapId;
        obj.floor = floor;

        let row = designManager.getRowById(constants.tableName.map, mapId);

        // hp atk weaponId
        if (row.type == constants.mapTypes.main) {
            obj.hp = UserData.getInstance().life;
            obj.atk = UserData.getInstance().attack;
            if (UserData.getInstance().wearProp[0] > 0) {
                let curDrop = designManager.getRowById(constants.tableName.prop, UserData.getInstance().wearProp[0])
                if (curDrop && curDrop.type == 11) {
                    obj.weaponId = curDrop.weaponid
                } else {
                    obj.weaponId = 0
                }
            } else {
                obj.weaponId = 0
            }
        } else if (row.type == constants.mapTypes.tower) {
            let info = UserData.getInstance().getTowerRoleProInfo(true);
            obj.hp = info.hp;
            obj.atk = info.atk;
            let propRow = designManager.getRowById(constants.tableName.prop, UserData.getInstance().$towerWeaponId);
            obj.weaponId = propRow.weaponid;
        }

        serverMsg.send(msgac.mapEnter, obj);
    }

    loadMapFightLayer() {
        return new Promise((resolve) => {
            if (this.mapFightLayer) {
                resolve();
                return;
            }
            resManager.loadAsset(constants.bundles.layer, constants.layers.MapFightLayer, Prefab, () => { }, (err, prefab) => {
                this.mapFightLayer = cocosUtil.instantiate(prefab);
                this.mapFightLayer.parent = find("CanvasMapFight");
                resolve();
            });
        });
    }

    setCompoments(mapLayer: MapLayer, player: Player, mapSystem: MapSystem, monsterSystem: MonsterSystem,
        bulletSystem: BulletSystem, numSystem: NumSystem, weaponSystem: WeaponSystem, skillSystem: SkillSystem,
        hintSystem: HintSystem, propSystem: PropSystem) {
        this.mapLayer = mapLayer;
        this.player = player;
        this.mapSystem = mapSystem;
        this.monsterSystem = monsterSystem;
        this.bulletSystem = bulletSystem;
        this.numSystem = numSystem;
        this.weaponSystem = weaponSystem;
        this.skillSystem = skillSystem;
        this.hintSystem = hintSystem;
        this.propSystem = propSystem;
    }

    isInScreenVisible(node: Node) {
        if (!node || !node.parent) {
            return false;
        }
        let pos = cocosUtil.convertToWorldSpace(node);
        let playerPos = cocosUtil.convertToWorldSpace(this.player.node);
        let tf = node.getComponent(UITransform);
        let add = tf.width + tf.height;
        if ((Math.abs(pos.x - playerPos.x) <= this.visibleHalfSize.width + add + 150)
            && (Math.abs(pos.y - playerPos.y) <= this.visibleHalfSize.height + add)) {
            return true;
        }

        return false;
    }

    mapEnter(data: any) {
        if (this.mapId) {
            data.st = 2;
            return;
        }
        this.mapFightCamera.orthoHeight = this.cameraOrthoHeight;

        let mapId = data.mapId;

        this.mapId = mapId;
        this.floor = data.floor;

        let mapRow = designManager.getRowById(constants.tableName.map, mapId);

        // test
        // arr = [arr[0]];

        this.time = 0;

        this.expPool = 0;
        this.expTypeRow = designManager.getRowById(constants.tableName.expType, mapRow.expType * 100 + 1);
        this.expNum = 0;
        this.expLv = 1;

        this.coinNum = 0;
        this.killMonsterNum = 0;

        this.healAdCount = 0;

        this.skillAllNum = 0;
        this.equipIdArr = [];

        playerModel.skillBombNum = 1;
        playerModel.skillHealNum = 1;
        playerModel.skillMagnetNum = 0;
        playerModel.skillLifeNum = 0;

        this.createMapLevelArr();

        data.st = 1;
    }

    createMapLevelArr() {
        this.mapLevelArr = [];

        let arr = designManager.getRowsByType(constants.tableName.level, this.mapId);
        if (!arr) {
            return;
        }

        arr.forEach((row: any) => {
            if (row.startTime <= mapModel.time) {
                return;
            }
            let mapLevel: any = {};
            mapLevel.id = row.id;
            mapLevel.row = row;
            mapLevel.timeCount = 0;
            mapLevel.createCount = 0;
            this.mapLevelArr.push(mapLevel);
        });
    }

    mapLeave(data: any) {
        if (!this.mapId) {
            data.st = 2;
            return;
        }

        this.mapFightLayer.destroy();
        this.mapFightLayer = null;

        this.mapId = 0;
        this.floor = 0;

        data.st = 1;
    }

    // 进入地图之前，加载必要的资源
    loadMapRes(progressCb: Function, endCb: Function) {
        this.loadMonsterAndBulletRes((percent: number) => {
            progressCb(percent);
        }, () => {
            this.loadMapFightLayer().then(() => {
                endCb();
            });
        });
    }

    loadMonsterAndBulletRes(progressCb: Function, endCb: Function) {
        let sum = 3;
        let onePercent = 1 / sum;
        let monsterPercent = 0;
        let bulletPercent = 0;
        let otherPercent = 0;

        let tmpFunc = () => {
            let p = monsterPercent * onePercent + bulletPercent * onePercent + otherPercent * onePercent;
            progressCb(p);
        };
        let tmpFunc2 = () => {
            if (monsterPercent + bulletPercent + otherPercent == sum) {
                endCb();
            }
        };

        this.loadMonsterPrefabArr((percent: number) => {
            monsterPercent = percent;
            tmpFunc();
        }, () => {
            monsterPercent = 1;
            tmpFunc2();
        });
        this.loadBulletRes((percent: number) => {
            bulletPercent = percent;
            tmpFunc();
        }, () => {
            bulletPercent = 1;
            tmpFunc2();
        });
        this.loadOtherRes((percent: number) => {
            otherPercent = percent;
            tmpFunc();
        }, () => {
            otherPercent = 1;
            tmpFunc2();
        });

    }

    // 其他碎片资源，比如：背景图，围栏等
    loadOtherRes(progressCb: Function, endCb: Function) {
        let mapRow = designManager.getRowById(constants.tableName.map, this.mapId);
        let pathArr = [
            "map/" + mapRow.bg,
            "wall/" + mapRow.wall + "_v",
            "wall/" + mapRow.wall + "_h",
        ];
        resManager.loadAssetByPathArr(constants.bundles.icon, pathArr, SpriteFrame, progressCb, endCb);
    }

    // 加载子弹的资源
    loadBulletRes(progressCb: Function, endCb: Function) {
        this.bulletPrefabObj = {};
        let arr = [];
        let pathArr = [];
        arr.forEach((id: number) => {
            let row = designManager.getRowById(constants.tableName.bullet, id);
            let path = row.prefab;
            pathArr.push(path);
        });
        resManager.loadAssetByPathArr(constants.bundles.bullet, pathArr, Prefab, progressCb, (assetArr: any) => {
            assetArr.forEach((asset: any) => {
                this.bulletPrefabObj[asset.name] = asset;
            });
            endCb();
        });
    }

    // 加载怪物资源
    loadMonsterPrefabArr(progressCb: Function, endCb: Function) {
        this.monsterPrefabObj = {};
        let idArr = [];
        let arr = designManager.getRowsByType(constants.tableName.level, this.mapId);
        utilTools.forArr(arr, (row: any) => {
            if (idArr.indexOf(row.monsterId) == -1) {
                idArr.push(row.monsterId);
            }
        });

        // 召唤怪和通用怪目前较少，暂时直接在这里添加
        idArr.push(14);

        let pathArr = [];
        idArr.forEach((id: number) => {
            let row = designManager.getRowById(constants.tableName.monster, id);
            let path = row.prefab + "/monster";
            pathArr.push(path);
        });
        resManager.loadAssetByPathArr(constants.bundles.monster, pathArr, Prefab, progressCb, (assetArr: any) => {
            assetArr.forEach((asset: any) => {
                let path = asset.path;
                let name = path.split("/")[0];
                this.monsterPrefabObj[name] = asset;
            });
            endCb();
        });

    }

    parseDesignPropArr(reward: any) {
        let arr = [];
        reward.forEach((item: any) => {
            let data: PropItem = {
                Id: item[0],
                Num: item[1]
            };
            arr.push(data);
        });
        return arr;
    }

}

export const mapModel = MapModel.instance;