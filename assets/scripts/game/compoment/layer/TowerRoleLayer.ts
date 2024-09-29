import { Color, find, Node, _decorator } from 'cc';
import { cocosUtil } from '../../../utils/cocosUtil';
import { constants } from '../../data/constants';
import { localText } from '../../data/localText';
import { audioManager } from '../../manager/audioManager';
import { designManager } from '../../manager/designManager';
import { UserData } from '../../model/UserData';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass('TowerRoleLayer')
export class TowerRoleLayer extends BaseLayer {

    propItemUIArr = [];

    atkNode: Node;
    hpNode: Node;

    weaponList: Node;

    costPropIcon: Node;
    costPropNum: Node;

    onLoad() {
        super.onLoad();

        let chs = this.getNodeByPath("ui/herobg/propLeft").children;
        for (let i in chs) {
            this.propItemUIArr.push(chs[i]);
        }
        chs = this.getNodeByPath("ui/herobg/propRight").children;
        for (let i in chs) {
            this.propItemUIArr.push(chs[i]);
        }

        this.atkNode = this.getNodeByPath("ui/herobg/attackbg/Label");
        this.hpNode = this.getNodeByPath("ui/herobg/lifebg/Label");

        this.weaponList = this.getNodeByPath("ui/herobg/list");

        this.costPropIcon = this.getNodeByPath("ui/herobg/bar/btnOpt/info/icon");
        this.costPropNum = this.getNodeByPath("ui/herobg/bar/btnOpt/info/num");

        this.setRoleSkin(this.getNodeByPath("ui/herobg/role"));

        // test
        // UserData.getInstance().addPropNum(106, 99999);

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
        let idArr = UserData.getInstance().wearProp;
        for (let i = 0; i < idArr.length; i++) {
            let itemUI = this.propItemUIArr[i];
            let emptyNode = find("empty", itemUI);
            let uiNode = find("ui", itemUI);
            let id = idArr[i];
            if (i == 0) {
                id = UserData.getInstance().$towerWeaponId;
            }
            if (id > 0) {
                itemUI.id = id;
                emptyNode.active = false;
                uiNode.active = true;
                this.setPropItemIcon(uiNode, id);
                this.setWeaponbLv(find("lv", uiNode), id);
            } else {
                itemUI.id = 0;
                emptyNode.active = true;
                uiNode.active = false;
            }
        }

        let info = UserData.getInstance().getTowerRoleProInfo();
        this.setString(this.atkNode, info.atk);
        this.setString(this.hpNode, info.hp);

        this.scrollViewSetData(this.weaponList, UserData.getInstance().$towerWeaponIdArr, this.refreshWeaponItem.bind(this));

        let lv = UserData.getInstance().getWeaponLv(UserData.getInstance().$towerWeaponId);
        let row = designManager.getRowById(constants.tableName.weaponOpt, lv);
        let propRow = designManager.getRowById(constants.tableName.prop, row.propId);

        let nextRow = designManager.getRowById(constants.tableName.weaponOpt, lv + 1);
        if (nextRow) {
            this.getNodeByPath("ui/herobg/bar/btnOpt/Label").active = true;
            this.getNodeByPath("ui/herobg/bar/btnOpt/info").active = true;
            this.getNodeByPath("ui/herobg/bar/btnOpt/max").active = false;

            this.setSpriteFrame(this.costPropIcon, propRow.icon);
            this.setString(this.costPropNum, "X" + row.propNum);
            if (UserData.getInstance().getPropNumById(row.propId) >= row.propNum) {
                cocosUtil.setRenderableColor(this.costPropNum, Color.WHITE);
            } else {
                cocosUtil.setRenderableColor(this.costPropNum, Color.RED);
            }
        } else {
            this.getNodeByPath("ui/herobg/bar/btnOpt/Label").active = false;
            this.getNodeByPath("ui/herobg/bar/btnOpt/info").active = false;
            this.getNodeByPath("ui/herobg/bar/btnOpt/max").active = true;
        }

        this.setSpriteFrame(this.getNodeByPath("ui/itemLayer/icon"), propRow.icon);
        this.setNumString(this.getNodeByPath("ui/itemLayer/num"), UserData.getInstance().getPropNumById(row.propId));

    }

    setPropItemIcon(itemUI: Node, id: number) {
        let row = designManager.getRowById(constants.tableName.prop, id);
        let icon = "prop/" + row.icon;
        if (row.type == 11) {
            let wRow = designManager.getRowById(constants.tableName.weapon, row.weaponid);
            icon = "weapon/" + wRow.icon;
        }
        this.setSpriteFrame2(find("icon", itemUI), icon);
        this.setSpriteFrame2(find("bg", itemUI), "prop/propbg" + row.quality);
    }

    setWeaponbLv(lvNode: Node, id: number) {
        if (!lvNode) {
            return;
        }
        let lv = UserData.getInstance().getWeaponLv(id);
        this.setString(lvNode, localText.lv + lv);
    }

    refreshWeaponItem(itemUI: Node, id: number) {
        this.setPropItemIcon(itemUI, id);
        this.setWeaponbLv(find("lv", itemUI), id);
        let choseNode = find("chose", itemUI);
        if (id == UserData.getInstance().$towerWeaponId) {
            choseNode.active = true;
        } else {
            choseNode.active = false;
        }
    }

    processEvent(ac: any, data: any) {
        switch (ac) {
            default:
                break;
        }
    }

    onButtonClick(node: Node, name: string) {
        switch (name) {
            default:
                break;
        }
    }

    onClickPropItem(node: any) {
        let id = node.id;
        if (id > 0) {
            let row = designManager.getRowById(constants.tableName.prop, id);
            let obj: any = { propId: id };
            if (row.type == 11) {
                obj.weaponLv = UserData.getInstance().getWeaponLv();
            }
            this.openLayer(constants.layers.PropInfoLayer, obj);
        }
    }

    onClickWeaponItem(node: any) {
        let id = node.item;
        UserData.getInstance().$towerWeaponId = id;
        this.initUI();
    }

    onClickBtnOpt() {
        let ret = UserData.getInstance().towerWeaponAddLv();
        switch (ret.st) {
            case 1:
                this.initUI();
                break;
            case 2:
                this.createNotice(localText.maxLv);
                break;
            case 3:
                this.showLackItem(ret.propId);
                break;
            default:
                break;
        }
    }

    onClickBtnSkin() {
        audioManager.playEffect("btnClick")
        this.openLayer(constants.layers.SkinChangeLayer, () => {
            this.setRoleSkin(this.getNodeByPath("ui/herobg/role"));
        });
    }

}

