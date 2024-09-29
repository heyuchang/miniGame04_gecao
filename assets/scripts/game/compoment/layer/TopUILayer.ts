import { Label, Node, ProgressBar, tween, v3, Vec3, view, _decorator } from 'cc';
import { CountTimeUtil } from '../../../utils/CountTimeUtil';
import { constants } from '../../data/constants';
import { msgac } from '../../data/msgac';
import { audioManager } from '../../manager/audioManager';
import { designManager } from '../../manager/designManager';
import { eventManager } from '../../manager/eventManager';
import { UserData } from '../../model/UserData';
import { BaseUILayer } from './BaseUILayer';

const { ccclass, property } = _decorator;

@ccclass('TopUILayer')
export class TopUILayer extends BaseUILayer {

    @property({ type: Label, tooltip: "体力标签" }) powerLabel: Label = null;
    @property({ type: Label, tooltip: "宝石标签" }) baoshiLabel: Label = null;
    @property({ type: Label, tooltip: "金币标签" }) coinLabel: Label = null;
    @property({ type: Label, tooltip: "玩家等级" }) lvLabel: Label = null;
    @property({ type: Node, tooltip: "使用展示" }) showNode: Node = null;
    @property({ type: ProgressBar, tooltip: "经验进度条" }) expBar: ProgressBar = null;

    @property({ type: Label, tooltip: "体力时间" }) tiliLabel: Label = null;
    @property({ type: Node }) clearBtn: Node = null;


    onLoad() {
        super.onLoad();
        this.initLayout()
    }

    onEnable() {
        eventManager.on(msgac.commonResRefresh, this.updateData, this);
        this.clearBtn.active = false//playerModel.isInDevelopmentEnvironment()  //cocosUtil.isDesktopBrowser();
    }

    initLayout() {
        let screen1 = view.getVisibleSize()
        let scale = this.getScreenScale()
        if (screen1.height / screen1.width > 2) {
            this.node.position = new Vec3(this.node.position.x, screen1.height / scale / 2 - 220, this.node.position.z)
        } else {
            this.node.position = new Vec3(this.node.position.x, screen1.height / scale / 2 - 160, this.node.position.z)
        }
    }

    start() {
        this.updateData()
    }

    showUseAnimal(type, num) {
        this.showNode.active = true
        this.showNode.getChildByName("numLabel").getComponent(Label).string = "" + num
        tween(this.showNode).show().set({ position: v3(-88, -9, 0) }).to(0.5, { position: v3(-88, -39, 0) }).hide().start()
        this.updateData()
    }

    onDisable() {
        eventManager.off(msgac.commonResRefresh, this.updateData, this);
    }

    onDestroy() {

    }

    updateData() {
        this.powerLabel.string = UserData.getInstance().power + "/" + designManager.config.energyMax
        this.baoshiLabel.string = UserData.getInstance().baoshi + ""
        this.coinLabel.string = UserData.getInstance().coin + ""
        this.lvLabel.string = UserData.getInstance().roleLv + ""
        this.expBar.progress = Math.min(1, UserData.getInstance().roleExp / UserData.getInstance().getNextLevelExp())
        if (this.tiliLabel.node.getComponent(CountTimeUtil)) {
            this.tiliLabel.node.getComponent(CountTimeUtil).setTime(UserData.getInstance().getCountTime(), function () {
                UserData.getInstance().checkPowerTime()
                eventManager.send(msgac.commonResRefresh);
            })
        }

        UserData.getInstance().saveData()
    }

    clearData() {
        UserData.getInstance().remove()
    }

    showRewardItem(event, data) {
        audioManager.playEffect("btnClick")

        if (data == 1) {
            if (UserData.getInstance().power < designManager.config.energyMax) {
                this.openLayer(constants.layers.RewardItemLayer, { propId: 105, num: Math.min(designManager.config.adenergy, designManager.config.energyMax - UserData.getInstance().power) })
            }
        } else if (data == 2) {
            this.openLayer(constants.layers.RewardItemLayer, { propId: 801, num: designManager.config.adDiamond })
        } else if (data == 3) {
            this.openLayer(constants.layers.RewardItemLayer, { propId: 104, num: designManager.config.adCoin })
        }
    }
}

