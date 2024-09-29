import { Node, Prefab, _decorator } from 'cc';
import { cocosUtil } from '../../../utils/cocosUtil';
import { utilTools } from '../../../utils/utilTools';
import { constants } from '../../data/constants';
import { designManager } from '../../manager/designManager';
import { resManager } from '../../manager/resManager';
import { BaseLayer } from '../base/BaseLayer';
import { Weapon } from '../item/weapon/Weapon';
const { ccclass, property } = _decorator;

@ccclass('WeaponSystem')
export class WeaponSystem extends BaseLayer {

    weaponArr: any;

    onLoad() {
        super.onLoad();

        this.weaponArr = [];
    }

    onEnable() {
        super.onEnable();

    }

    initData(data: any) {
        // test
        // return;

        // 初始武器
        this.addWeapon(1, data.weaponId);
    }

    getSaveData() {
        let weaponData: any = {};
        weaponData.arr = this.weaponArr;

        return weaponData;
    }

    loadSaveData(data: any) {
        utilTools.forArr(data.arr, (info: any) => {
            this.addWeapon(0, info.id);
        });
    }

    loadWeaponPrefab(path: string) {
        return new Promise((resolve, reject) => {
            resManager.loadAsset(constants.bundles.weapon, path, Prefab, null, (err, prefab) => {
                if (err) {
                    reject();
                    return;
                }
                resolve(prefab);
            });
        });
    }

    getWeaponInfoByType(type: number) {
        for (let i in this.weaponArr) {
            let tmp = this.weaponArr[i];
            let row = designManager.getRowById(constants.tableName.weapon, tmp.id);
            if (row.type == type) {
                return tmp;
            }
        }
        return null;
    }

    /**
     * 添加武器
     * @param type 武器类型 
     * @param weaponId 可选，强制设置武器id
     */
    async addWeapon(type: number, weaponId: number = 0) {
        if (weaponId > 0) {
            type = designManager.getRowById(constants.tableName.weapon, weaponId).type;
        }

        let info = null;
        let uiIndex = 0;
        for (let i in this.weaponArr) {
            let tmp = this.weaponArr[i];
            let row = designManager.getRowById(constants.tableName.weapon, tmp.id);
            if (row.type == type) {
                info = tmp;
                uiIndex = parseInt(i);
                break;
            }
        }

        if (info) {
            // 升级
            let row = designManager.getRowById(constants.tableName.weapon, info.id + 1);
            if (!row || row.lv > constants.design.maxLv) {
                // 已满级
                return;
            }
            info.id++;
        } else {
            if (this.weaponArr.length >= constants.design.weaponNum) {
                // 武器槽位已满
                return;
            }
            // 新增
            info = {};
            info.id = designManager.getFirstIdByType(type);
            this.weaponArr.push(info);
            uiIndex = this.weaponArr.length - 1;
        }

        if (weaponId > 0) {
            info.id = weaponId;
        }

        let weaponLayer = this.node.children[uiIndex];
        if (!weaponLayer) {
            return;
        }
        utilTools.forArr(weaponLayer.children, (node: Node) => {
            let weaponUtil = node.getComponent(Weapon).weaponUtil;
            if (weaponUtil && weaponUtil.forceDestroy) {
                weaponUtil.forceDestroy();
            }
            node.destroy();
        });

        info.uiIndex = uiIndex;
        let id = info.id;
        let row = designManager.getRowById(constants.tableName.weapon, id);
        let prefab = await this.loadWeaponPrefab(row.prefab);
        if (id != info.id || !cocosUtil.isValid(this)) {
            return;
        }
        let node = cocosUtil.instantiate(prefab);
        let weapon = node.addComponent(Weapon);
        node.parent = weaponLayer;
        weapon.init(info);

    }

    updateLogic(dt: number) {
        // 武器
        utilTools.forArr(this.node.children, (weaponNode: Node, index: number) => {
            if (!weaponNode.active) {
                return;
            }
            let node = weaponNode.children[0];
            if (!node) {
                return;
            }
            node.getComponent(Weapon).updateLogic(dt);
        });
    }
}

