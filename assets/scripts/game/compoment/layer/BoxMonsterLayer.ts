import { Button, Color, find, Node, _decorator } from 'cc';
import { sdkManager } from '../../../sdk/sdkManager';
import { cocosUtil } from '../../../utils/cocosUtil';
import { utilTools } from '../../../utils/utilTools';
import { constants } from '../../data/constants';
import { localText } from '../../data/localText';
import { designManager } from '../../manager/designManager';
import { mapModel } from '../../model/mapModel';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass('BoxMonsterLayer')
export class BoxMonsterLayer extends BaseLayer {

    getIndexs: any = {};
    canRefresh: boolean = true;
    refreshCount: number = 0;

    onLoad() {
        super.onLoad();
    }

    onEnable() {
        super.onEnable();
    }

    onDisable() {
        super.onDisable();
    }

    onDestroy() {
        super.onDestroy();
    }

    initUI() {
        let itemUIArr = this.getNodeByPath("ui/bg/itemLayer").children;
        let arr = this.getItemArr();

        itemUIArr.forEach((node: any, index: number) => {
            let item = arr[index];
            node.item = item;
            node.index = index;
            this.refreshSelectItem(node, item, index);
        });

        this.refreshBtnsLayer();
    }

    refreshBtnsLayer() {
        let btnRefresh = this.getNodeByPath("ui/bg/btnRefresh");
        btnRefresh.getComponent(Button).enabled = true;
        if (this.canRefresh && this.refreshCount < designManager.config.carTime) {
            cocosUtil.setRenderableColor(btnRefresh, Color.WHITE, true);
        } else {
            cocosUtil.setRenderableColor(btnRefresh, constants.colors.yin.parseColor(), true);
            btnRefresh.getComponent(Button).enabled = false;
        }

        let limitNode = this.getNodeByPath("ui/bg/btnRefresh/limit");
        this.setString(limitNode, "(%d/%d)".format(this.refreshCount, designManager.config.carTime));
    }

    refreshSelectLayer() {
        let itemUIArr = this.getNodeByPath("ui/bg/itemLayer").children;
        itemUIArr.forEach((node: any, index: number) => {
            this.refreshSelectItem(node, node.item, node.index);
        });
    }

    refreshSelectItem(itemUI: Node, item: any, index: number) {
        let skillItem = find("skillItem", itemUI);
        let propItem = find("propItem", itemUI);
        if (skillItem) {
            skillItem.active = false;
        }
        propItem.active = false;

        find("hasGet", itemUI).active = this.getIndexs[index] ? true : false;

        if (item.name == constants.tableName.prop) {
            propItem.active = true;
            let row = designManager.getRowById(constants.tableName.prop, item.id);
            let info = row.info;
            if (item.id == constants.propIds.coin || item.id == constants.propIds.diamond) {
                info = localText.propGet.format(item.num, row.name);
            }
            this.setString(find("info", propItem), info);
        } else {
            skillItem.active = true;
            let info = item.info;
            let id = designManager.getFirstIdByType(item.type);
            if (info) {
                id = info.id + 1;
            }
            let row = designManager.getRowById(item.name, id);

            this.setSpriteFrame(find("icon", skillItem), row.icon);

            let starLayer = find("starLayer", skillItem);
            this.setNumItemLayer(starLayer, row.lv, (starNode: Node) => {
                let iconNode = find("icon", starNode);
                let icon2Node = find("icon2", starNode);
                if (row.lv >= constants.design.maxLv) {
                    iconNode.active = false;
                    icon2Node.active = true;
                } else {
                    iconNode.active = true;
                    icon2Node.active = false;
                }
            });
        }

    }

    getItemArr() {
        let arr = mapModel.mapSystem.getSelectItemArr();
        arr.forEach((item: any) => {
            if (item.name == constants.tableName.prop) {
                // 随机金币
                item.id = constants.propIds.coin
                item.num = utilTools.getFloatValue(designManager.config.carGoldNum[0], designManager.config.carGoldNum[1], true);
            }
        });

        // 金币
        arr.push({
            name: constants.tableName.prop,
            id: constants.propIds.coin,
            num: designManager.config.carGold
        });
        // 钻石
        arr.push({
            name: constants.tableName.prop,
            id: constants.propIds.diamond,
            num: designManager.config.carDiamond
        });
        // 回血
        arr.push({
            name: constants.tableName.prop,
            id: constants.propIds.addHpPercent
        });

        return arr;

    }

    closeLayer() {
        super.closeLayer();
        if (this.layerCb) {
            this.layerCb();
        }
    }

    onClickBtnRefresh() {
        sdkManager.openAd("宝箱怪换一批", (st: number) => {
            if (st == 1) {
                this.refreshCount++;
                this.initUI();
            }
        });
    }

    onClickBtnGetAd(node: any) {
        sdkManager.openAd("宝箱怪奖励", (st: number) => {
            if (st == 1) {
                let item = node.parent.item;
                switch (item.name) {
                    case constants.tableName.weapon:
                        mapModel.weaponSystem.addWeapon(item.type);
                        break;
                    case constants.tableName.skill:
                        mapModel.skillSystem.addSkill(item.type);
                        break;
                    case constants.tableName.skill2:
                        mapModel.skillSystem.addSkill2(item.type);
                        break;
                    case constants.tableName.prop:
                        mapModel.propSystem.getProp(item.id, item.num);
                        break;
                    default:
                        break;
                }
                this.canRefresh = false;
                let index = node.parent.index;
                this.getIndexs[index] = 1;
                this.refreshSelectLayer();
                this.refreshBtnsLayer();
            }
        });
    }

    onClickBtnGet(node: any) {
        let item = node.parent.parent.item;
        let index = node.parent.parent.index;
        mapModel.propSystem.getProp(item.id, item.num);
        this.getIndexs[index] = 1;
        this.refreshSelectLayer();
    }

}

