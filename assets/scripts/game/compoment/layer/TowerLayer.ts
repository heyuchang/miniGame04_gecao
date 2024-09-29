import { Animation, find, Node, ScrollView, _decorator } from 'cc';
import { constants } from '../../data/constants';
import { designManager } from '../../manager/designManager';
import { UserData } from '../../model/UserData';
import { AnimationCtrl } from '../base/AnimationCtrl';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass('TowerLayer')
export class TowerLayer extends BaseLayer {

    qianShouNode: Node;
    dianJvNode: Node;
    xieZiNode: Node;
    nianChouNode: Node;
    paoDangRenNode: Node;

    btnsLayer: Node;

    onLoad() {
        this.layerName = constants.layers.TowerLayer;
        super.onLoad();

        this.btnsLayer = this.getNodeByPath("ui/listNoUtil/view/content/map");
        let chs = this.btnsLayer.children;
        for (let i = 0; i < chs.length; i++) {
            find("monster", chs[i]).addComponent(AnimationCtrl);
            let textNode = find("name/text", chs[i]);
            let row = designManager.getRowById(constants.tableName.map, 101 + i);
            this.setString(textNode, row.name)
        }
        this.qianShouNode = find("monster", chs[0]);
        this.dianJvNode = find("monster", chs[1]);
        this.xieZiNode = find("monster", chs[2]);
        this.nianChouNode = find("monster", chs[4]);
        this.paoDangRenNode = find("monster", chs[5]);
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
        this.getNodeByPath("ui/listNoUtil").getComponent(ScrollView).scrollToTop();
        let chs = this.btnsLayer.children;
        for (let i = 0; i < chs.length; i++) {
            let itemUI = chs[i];
            let row = designManager.getRowById(constants.tableName.map, 100 + i + 1);
            // @ts-ignore
            itemUI.row = row;
            this.setString(find("name", itemUI), row.name);
            let handNode = find("hand", itemUI);
            if (handNode) {
                handNode.active = false;
            }
            if (this.needHand()) {
                if (i == 0) {
                    itemUI.active = true;
                    handNode.active = true;
                } else {
                    itemUI.active = false;
                }
            } else {
                itemUI.active = true;
            }
        }

        this.scheduleOnce(() => {
            this.startQianShouUpdate();
            if (!this.needHand()) {
                this.startDianJvUpdate();
                this.startXieziUpdate();
                this.startNianChouUpdate();
                this.startPaoDangRenUpdate();
            }
        }, 1 + Math.random());
    }

    needHand() {
        let floorId = UserData.getInstance().getTowerMapInfo(101).floor;
        if (floorId <= 1) {
            return true;
        }
        return false;
    }

    startPaoDangRenUpdate() {
        if (Math.random() > 0.3) {
            if (this.paoDangRenNode.getComponent(AnimationCtrl).spineSkeleton.animation != "walk") {
                this.paoDangRenNode.getComponent(AnimationCtrl).playAnimation("walk", true);
            }
            this.scheduleOnce(() => {
                this.startPaoDangRenUpdate();
            }, 1 + Math.random());
        } else {
            let name = Math.random() > 0.7 ? "attack1" : "attack3";
            if (name == "attack1") {
                let num = Math.random();
                if (num < 0.33) {
                    name = "attackHand1";
                } else if (num < 0.66) {
                    name = "attackHand2";
                } else {
                    name = "attackHand3";
                }
            }
            let animation = this.paoDangRenNode.getComponent(Animation);
            animation.pause();
            this.paoDangRenNode.getComponent(AnimationCtrl).playAnimationOnce(name, () => {
                animation.resume();
                this.startPaoDangRenUpdate();
            });
        }
    }

    startNianChouUpdate() {
        if (Math.random() > 0.2) {
            if (this.nianChouNode.getComponent(AnimationCtrl).spineSkeleton.animation != "walk") {
                this.nianChouNode.getComponent(AnimationCtrl).playAnimation("walk", true);
            }
            this.scheduleOnce(() => {
                this.startNianChouUpdate();
            }, 1 + Math.random());
        } else {
            this.nianChouNode.getComponent(AnimationCtrl).playAnimationOnce("attack1", () => {
                this.startNianChouUpdate();
            });
        }
    }

    startXieziUpdate() {
        if (Math.random() > 0.2) {
            if (this.xieZiNode.getComponent(AnimationCtrl).spineSkeleton.animation != "walk") {
                this.xieZiNode.getComponent(AnimationCtrl).playAnimation("walk", true);
            }
            this.scheduleOnce(() => {
                this.startXieziUpdate();
            }, 1 + Math.random());
        } else {
            let name = Math.random() > 0.5 ? "attack1" : "attack4";
            this.xieZiNode.getComponent(AnimationCtrl).playAnimationOnce(name, () => {
                this.startXieziUpdate();
            });
        }
    }

    startDianJvUpdate() {
        if (Math.random() > 0.3) {
            if (this.dianJvNode.getComponent(AnimationCtrl).spineSkeleton.animation != "walk") {
                this.dianJvNode.getComponent(AnimationCtrl).playAnimation("walk", true);
            }
            this.scheduleOnce(() => {
                this.startDianJvUpdate();
            }, 1 + Math.random());
        } else {
            let name = Math.random() > 0.5 ? "attack1" : "attack2";
            this.dianJvNode.getComponent(AnimationCtrl).playAnimationOnce(name, () => {
                this.startDianJvUpdate();
            });
        }
    }

    startQianShouUpdate() {
        if (Math.random() > 0.5) {
            if (this.qianShouNode.getComponent(AnimationCtrl).spineSkeleton.animation != "walk") {
                this.qianShouNode.getComponent(AnimationCtrl).playAnimation("walk", true);
            }
            this.scheduleOnce(() => {
                this.startQianShouUpdate();
            }, 1 + Math.random());
        } else {
            this.qianShouNode.getComponent(AnimationCtrl).playAnimationOnce("attack", () => {
                this.startQianShouUpdate();
            });
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

    openTowerFloorLayer(mapId: number) {
        let obj = {
            id: mapId
        };
        this.openLayer(constants.layers.TowerFloorLayer, obj);
    }

    onClickBtnTower(node: any) {
        let row = node.row;
        this.openTowerFloorLayer(row.id);
    }

}

