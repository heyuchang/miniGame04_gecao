import { instantiate, Label, Node, Prefab, sp, _decorator } from 'cc';
import { myLog } from '../../../common/myLog';
import { tyqSDK } from '../../../tyqSDK/tyqSDK';
import { constants } from '../../data/constants';
import { msgac } from '../../data/msgac';
import { audioManager } from '../../manager/audioManager';
import { designManager } from '../../manager/designManager';
import { eventManager } from '../../manager/eventManager';
import { RedPointLogicMgr, RedpointPos, RPointMask } from '../../manager/RedPointLogicMgr';
import { UserData } from '../../model/UserData';
import { PropItemPrefab } from '../item/PropItemPrefab';
import { BaseUILayer } from './BaseUILayer';

const { ccclass, property } = _decorator;

@ccclass('HeroLayer')
export class HeroLayer extends BaseUILayer {

    @property({ type: Node, tooltip: "道具列表容器" }) propLayer: Node = null;
    @property({ type: Prefab, tooltip: "道具节点" }) rewardItem: Prefab = null;
    @property({ type: Node, tooltip: "道具列表View" }) propView: Node = null;
    @property({ type: Node, tooltip: "道具列表View" }) scrollView: Node = null;

    @property({ type: Node, tooltip: "穿戴装备" }) propNodeLeft: Node = null;
    @property({ type: Node, tooltip: "穿戴装备" }) propNodeRight: Node = null;

    @property({ type: Node, tooltip: "攻击力" }) attackLabel: Node = null;
    @property({ type: Node, tooltip: "生命值" }) lifeLabel: Node = null;


    @property({ type: Node, tooltip: "排序按钮" }) sortbtn: Node = null;


    @property({ type: sp.Skeleton, tooltip: "角色spine" }) heroSk: sp.Skeleton = null;


    _propNodeList = [];

    _isSort = false

    onLoad() {
        this.fitScrollView(this.propView, 320, 600)

        for (let i = 0; i < this.propNodeLeft.children.length; i++) {
            this._propNodeList.push(this.propNodeLeft.children[i]);
        }
        for (let i = 0; i < this.propNodeRight.children.length; i++) {
            this._propNodeList.push(this.propNodeRight.children[i]);
        }

        // test
        // UserData.getInstance().addPropByDesign([10155, 1]);
    }

    onEnable() {
        super.onEnable();
        eventManager.on(msgac.wearDrop, this.updateProp, this);
        eventManager.on(msgac.updateDropData, this.updateProp, this);
    }

    onDisable() {
        super.onDisable();
        eventManager.off(msgac.wearDrop, this.updateProp, this);
        eventManager.off(msgac.updateDropData, this.updateProp, this);

    }

    onDestroy() {
        super.onDestroy();
    }

    start() {
        this.initList()
        this.initWearDrop()

        this.attackLabel.getComponent(Label).string = UserData.getInstance().attack + ""
        this.lifeLabel.getComponent(Label).string = UserData.getInstance().life + ""

        RedPointLogicMgr.ins().setRPointView(this.node.getChildByName("btnBless"), null, UserData.getInstance().checkPropCanBless())
        RedPointLogicMgr.ins().on(this.node, [{ mask: [RPointMask.RPM_BlessProp], subPath: "btnBless" },])

        tyqSDK.eventSendCustomEvent("进入装备界面")

        this.sortbtn.getChildByName("Label").getComponent(Label).string = "按品质排序"

        this.heroSk.setSkin(UserData.getInstance().getHeroSkin())
    }

    updateProp() {
        this.initList()
        this.initWearDrop()
        this.attackLabel.getComponent(Label).string = UserData.getInstance().attack + ""
        this.lifeLabel.getComponent(Label).string = UserData.getInstance().life + ""
    }

    initWearDrop() {
        let propdata = UserData.getInstance().wearProp
        myLog.i("propdata = ", propdata)
        for (let i = 0; i < propdata.length && i < this._propNodeList.length; i++) {
            let item = this._propNodeList[i].getChildByName("PropItem")
            if (item == null) {
                item = instantiate(this.rewardItem)
                this._propNodeList[i].addChild(item)
                item.name = "PropItem"
            }
            item.getComponent(PropItemPrefab).setView(propdata[i], i + 1, PropItemPrefab.Type_HideNum | PropItemPrefab.Type_UnWear)
            item.getComponent(PropItemPrefab).setScale(130)
        }
    }

    initList() {
        if (this._isSort) {
            let dataArr = this.getPropList()
            let equipSort = (a: number, b: number) => {
                let equipDataA = designManager.getRowById(constants.tableName.prop, a)
                let equipDataB = designManager.getRowById(constants.tableName.prop, b)
                return equipDataB.quality - equipDataA.quality;
            }
            dataArr.sort(equipSort);
            this.scrollViewSetData(this.scrollView, dataArr, this.initItem)
        } else {
            let dataArr = this.getPropList()
            let equipSort = (a: number, b: number) => {
                let equipDataA = designManager.getRowById(constants.tableName.prop, a)
                let equipDataB = designManager.getRowById(constants.tableName.prop, b)
                return equipDataA.wearIndex - equipDataB.wearIndex;
            }
            dataArr.sort(equipSort);
            this.scrollViewSetData(this.scrollView, dataArr, this.initItem)
        }

    }

    initItem(itemUI: Node, item: any, index: number) {
        itemUI.getComponent(PropItemPrefab).setView(item, 1, PropItemPrefab.Type_HideNum | PropItemPrefab.Type_ToWear)
        itemUI.getComponent(PropItemPrefab).setScale(120)
        RedPointLogicMgr.ins().setRPointView(itemUI, null, UserData.getInstance().checkThisPropBestToWear(item), null, RedpointPos.right)
    }

    updateRedPoint() {
        let children = this.propLayer.children
        children.forEach(itemUI => {
            RedPointLogicMgr.ins().setRPointView(itemUI, null, UserData.getInstance().checkThisPropBestToWear(itemUI.getComponent(PropItemPrefab).propId))
        });
    }

    getPropList() {
        let arr = UserData.getInstance().getPropSort()
        let dataArr = []
        arr.forEach(element => {
            let num = element.iswear == 1 ? element.num - 1 : element.num
            let row = designManager.getRowById(constants.tableName.prop, element.id);
            if (row.type != 8 && row.type != 11) {
                return;
            }
            for (let i = 0; i < num; i++) {
                dataArr.push(element.id)
            }
        });
        return dataArr
    }

    propSort() {
        audioManager.playEffect("btnClick")
        if (this._isSort) {
            this.sortbtn.getChildByName("Label").getComponent(Label).string = "按品质排序"
            this._isSort = false
        } else {
            this.sortbtn.getChildByName("Label").getComponent(Label).string = "取消排序"
            this._isSort = true
        }

        this.initList()
    }

    openBless() {
        //  this.closeLayer()
        audioManager.playEffect("btnClick")
        this.openLayer(constants.layers.BlessLayer)
    }

    onClickBtnSkin() {
        audioManager.playEffect("btnClick")
        this.openLayer(constants.layers.SkinChangeLayer, () => {
            this.heroSk.setSkin(UserData.getInstance().getHeroSkin())
        });
    }

}

