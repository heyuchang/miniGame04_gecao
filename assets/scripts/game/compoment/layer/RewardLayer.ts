import { instantiate, macro, Node, Prefab, sp, UITransform, v3, _decorator } from 'cc';
import { cocosUtil } from '../../../utils/cocosUtil';
import { utilTools } from '../../../utils/utilTools';
import { audioManager } from '../../manager/audioManager';
import { AnimationCtrl } from '../base/AnimationCtrl';
import { PropItemPrefab } from '../item/PropItemPrefab';
import { BaseUILayer } from './BaseUILayer';

const { ccclass, property } = _decorator;

@ccclass('RewardLayer')
export class RewardLayer extends BaseUILayer {

    @property({ type: Prefab }) propItem: Prefab = null;
    @property({ type: Node }) listLayer: Node = null;

    @property({ type: Node }) yanhua: Node = null;
    onLoad() {
        super.onLoad()
    }

    onEnable() {
        super.onEnable()
        this.showReward()
        this.showYanhua()
    }

    showReward() {
        let arr = this.layerData.propArr

        let self = this
        if (!this.layerData.notMoveAni) {
            this.scheduleOnce(function () {
                self.showGetReward(arr)
            }, 0.5)
        }

        this.listLayer.getComponent(UITransform).width = Math.min(135 * arr.length, 675)
        for (let index = 0; index < arr.length; index++) {
            let element = arr[index];
            //  UserData.getInstance().getRewardProp([propdata])
            let propItem = instantiate(this.propItem)
            this.listLayer.addChild(propItem)
            propItem.getComponent(PropItemPrefab).setView(element.Id, element.Num, PropItemPrefab.Type_UnTouch)
            propItem.getComponent(PropItemPrefab).setScale(120)
        }
    }

    showYanhua() {
        // 放烟花
        let posArr = [
            v3(-100, 200, 0),
            v3(0, -100, 0),
            v3(150, -250, 0),
            v3(300, -500, 0),
            v3(100, -450, 0),
        ];

        cocosUtil.schedule(this, () => {
            if (posArr.length <= 0) {
                return;
            }
            let skinName = Math.random() > 0.5 ? "huang" : "lan";
            let scale = 0.8 + Math.random() * 0.2;
            let pos = utilTools.getRandomItemByArr(posArr, true);
            let fireNode = cocosUtil.instantiate(this.yanhua);
            fireNode.parent = this.node;
            fireNode.active = true;
            fireNode.position = pos;
            fireNode.scale = v3(scale, scale, 1);
            fireNode.getComponent(sp.Skeleton).setSkin(skinName);
            let aniCtrl: AnimationCtrl = cocosUtil.addComponentOnce(fireNode, AnimationCtrl);
            aniCtrl.playAnimationOnce("animation", () => {
                fireNode.parent = null;
            });
        }, 1.5, macro.REPEAT_FOREVER, 0, true);
    }

    onDisable() {
        super.onDisable();
    }

    onDestroy() {
        super.onDestroy();
    }

    start() {

    }

    closeLayer() {
        audioManager.playEffect("btnClick")
        super.closeLayer()
    }

}

