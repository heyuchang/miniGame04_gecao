import { find, Node, tween, UITransform, v3, Vec3, view, _decorator } from 'cc';
import { sdkManager } from '../../../sdk/sdkManager';
import CronCtr from '../../../tyqSDK/network/CronCtr';
import { Channel, tyqAdManager } from '../../../tyqSDK/tyqAdManager';
import { tyqSDK } from '../../../tyqSDK/tyqSDK';
import { tyqSDKConfig } from '../../../tyqSDK/tyqSDKConfig';
import { cocosUtil } from '../../../utils/cocosUtil';
import { utilTools } from '../../../utils/utilTools';
import { constants } from '../../data/constants';
import { msgac } from '../../data/msgac';
import { audioManager } from '../../manager/audioManager';
import { designManager } from '../../manager/designManager';
import { mapModel } from '../../model/mapModel';
import { playerModel } from '../../model/playerModel';
import { PropItem, UserData } from '../../model/UserData';
import { serverMsg } from '../../other/serverMsg';
import { AnimationCtrl } from '../base/AnimationCtrl';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass('SettlementLayer')
export class SettlementLayer extends BaseLayer {

    winAniCtrl: AnimationCtrl;
    winMapNameNode: Node;
    failAniCtrl: AnimationCtrl;
    failMapNameNode: Node;

    winTitleNode: Node;
    timeNode: Node;
    bestTimeNode: Node;

    monsterNode: Node;
    lineNode: Node;

    itemLayerBg: Node;
    itemLayerNode: Node;

    btnDouble: Node;
    btnDoublePos: Vec3;
    btnSure: Node;
    btnSurePos: Vec3;

    onLoad() {
        super.onLoad();

        this.winAniCtrl = this.getNodeByPath("bg2/win").addComponent(AnimationCtrl);
        this.winMapNameNode = this.getNodeByPath("bg2/win/mapName");
        this.failAniCtrl = this.getNodeByPath("bg2/fail").addComponent(AnimationCtrl);
        this.failMapNameNode = this.getNodeByPath("bg2/fail/mapName");

        this.winTitleNode = this.getNodeByPath("ui/winTitle");
        this.timeNode = this.getNodeByPath("ui/time");
        this.bestTimeNode = this.getNodeByPath("ui/bestTime");

        this.monsterNode = this.getNodeByPath("ui/monster");
        this.lineNode = this.getNodeByPath("ui/line");
        this.itemLayerBg = this.getNodeByPath("ui/itemLayer/bg");
        this.itemLayerNode = this.getNodeByPath("ui/itemLayer/itemLayer");

        this.btnDouble = this.getNodeByPath("ui/btns/btnDouble");
        this.btnDoublePos = this.btnDouble.position.clone();
        this.btnSure = this.getNodeByPath("ui/btns/btnSure");
        this.btnSurePos = this.btnSure.position.clone();

        this.isShowBannerAd = true;

    }

    onEnable() {
        super.onEnable();

        UserData.getInstance().mapData = null;
        if (this.layerData.isWin) {
            audioManager.playEffect(constants.audioNames.win);
            // 好友通关次数
            UserData.getInstance().$friendPassCnt++;
            CronCtr.getInstance().saveDataToCloud("friendPassCnt", UserData.getInstance().$friendPassCnt);
        }
    }

    onDisable() {
        super.onDisable();
    }

    onDestroy() {
        super.onDestroy();
    }

    initUI() {
        if (this.layerData.isWin) {
            playerModel.addDayTaskNum(10);
        }

        this.winAniCtrl.node.active = false;
        this.winMapNameNode.active = false;
        this.failAniCtrl.node.active = false;
        this.failMapNameNode.active = false;

        this.winTitleNode.active = false;
        this.timeNode.active = false;
        this.bestTimeNode.active = false;

        this.monsterNode.active = false;
        this.lineNode.active = false;
        this.itemLayerBg.active = false;

        this.itemLayerNode.active = false;

        this.btnDouble.active = false;
        this.btnSure.active = false;
        utilTools.waterfall([
            (result: any, cb: Function) => {
                if (this.layerData.isWin) {
                    this.winAniCtrl.node.active = true;
                    this.winAniCtrl.playAnimation("a", false, () => {
                        this.winAniCtrl.playAnimation("b", true);
                        cb();
                    });
                    return;
                }
                this.failAniCtrl.node.active = true;
                this.failAniCtrl.playAnimation("a", false, () => {
                    this.failAniCtrl.playAnimation("b", true);
                    cb();
                });
            },
            (result: any, cb: Function) => {
                let row = designManager.getRowById(constants.tableName.map, mapModel.mapId);
                if (this.layerData.isWin) {
                    this.winMapNameNode.active = true;
                    this.setString(find("text", this.winMapNameNode), row.name);
                    cocosUtil.tweenScaleIn2(this.winMapNameNode, 0.2, () => {
                        cb();
                    });
                    return;
                }
                this.failMapNameNode.active = true;
                this.setString(find("text", this.failMapNameNode), row.name);
                cocosUtil.tweenScaleIn2(this.failMapNameNode, 0.2, () => {
                    cb();
                });
            },
            (result: any, cb: Function) => {
                if (this.layerData.isWin) {
                    this.winTitleNode.active = true;
                    cocosUtil.tweenScaleIn2(this.winTitleNode, 0.2, () => {
                        cb();
                    });
                    return;
                }
                this.timeNode.active = true;
                this.setString(find("time", this.timeNode), utilTools.getTimeStr(this.layerData.time * 1000, true));
                let newNode = find("new", this.timeNode);
                if (this.layerData.isBest) {
                    newNode.active = true;
                    cocosUtil.tweenBlink(newNode);
                } else {
                    newNode.active = false;
                }
                cocosUtil.tweenScaleIn2(this.timeNode, 0.2, () => {
                    this.bestTimeNode.active = true;
                    cocosUtil.tweenScaleIn2(this.bestTimeNode, 0.2, () => {
                        this.setString(find("info/time", this.bestTimeNode), utilTools.getTimeStr(this.layerData.bestTime * 1000, true));
                        cb();
                    });
                });
            },
            (result: any, cb: Function) => {
                this.monsterNode.active = true;
                this.setString(find("info/num", this.monsterNode), mapModel.killMonsterNum);
                cocosUtil.tweenScaleIn2(this.monsterNode, 0.2, () => {
                    cb();
                });
            },
            (result: any, cb: Function) => {
                this.lineNode.active = true;
                cocosUtil.tweenFadeIn(this.lineNode, 0.2, () => {
                    cb();
                });
            },
            (result: any, cb: Function) => {
                this.itemLayerBg.active = true;
                cocosUtil.tweenFadeIn(this.itemLayerBg, 0.2, () => {
                    cb();
                });
            },
            (result: any, cb: Function) => {
                this.itemLayerNode.active = true;
                this.setItemLayer(this.itemLayerNode, this.layerData.award, this.refreshPropItem.bind(this));
                let num = this.itemLayerNode.children.length;
                utilTools.forArr(this.itemLayerNode.children, (itemUI: Node, index: number) => {
                    itemUI.scale = v3(0, 0, 0);
                    this.scheduleOnce(() => {
                        tween(itemUI)
                            .set({ scale: v3(2, 2, 1) })
                            .to(0.2, { scale: v3(1, 1, 1) })
                            .to(0.05, { scale: v3(1.1, 1.1, 1) })
                            .to(0.05, { scale: v3(1, 1) })
                            .call(() => {
                                if (index >= num - 1) {
                                    cb();
                                }
                            })
                            .start();
                    }, index * 0.2);
                });
            },
            (result: any, cb: Function) => {
                this.btnDouble.active = true;
                let pos = this.btnDoublePos.clone();
                pos.x += (view.getVisibleSize().width * 0.5 + this.btnDouble.getComponent(UITransform).width);
                this.btnDouble.position = pos;

                this.btnSure.active = true;
                pos = this.btnSurePos.clone();
                pos.x -= (view.getVisibleSize().width * 0.5 + this.btnSure.getComponent(UITransform).width);
                this.btnSure.position = pos;

                tween(this.btnDouble).to(0.5, { position: this.btnDoublePos }).start();
                tween(this.btnSure).to(0.5, { position: this.btnSurePos }).start();
            },
        ]);
    }

    refreshPropItem(itemUI: Node, data: PropItem) {
        let row = designManager.getRowById(constants.tableName.prop, data.Id);
        this.setSpriteFrame2(find("bg", itemUI), "prop/propbg" + row.quality);
        this.setSpriteFrame2(find("icon", itemUI), "prop/" + row.icon);

        let numNode = find("num", itemUI);
        if (row.type == 8 || row.type == 11) {
            numNode.active = false;
        } else {
            numNode.active = true;
            this.setNumString(find("num/num", itemUI), data.Num);
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

    closeLayer() {
        super.closeLayer();
        if (this.layerCb) {
            this.layerCb();
        }
        let obj: any = {};
        obj.mapId = mapModel.mapId;
        obj.floor = mapModel.floor;
        obj.isWin = this.layerData.isWin;
        serverMsg.send(msgac.mapLeave, obj);
        if (tyqSDK.getSwitchValue(tyqSDKConfig.paramsKeys.tyq_more_game_level) > 0 && tyqSDK.getSwitchValue(tyqSDKConfig.paramsKeys.tyq_more_game_level) > UserData.getInstance().openLevel) {
            if (tyqAdManager.getChannel() == Channel.WECHAT) {
                this.openLayer(constants.layers.MoreGameLayer)
            }
        }

    }

    onClickBtnSure(node: Node) {
        this.closeLayer();
    }

    onClickBtnDouble() {
        sdkManager.openAd("结算奖励双倍", (st: number) => {
            if (st == 1) {
                UserData.getInstance().getRewardProp(this.layerData.award);
                this.closeLayer();
            }
        });
    }

}

