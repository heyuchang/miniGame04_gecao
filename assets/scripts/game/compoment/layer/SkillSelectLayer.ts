import { Color, find, Node, Tween, tween, UIOpacity, v3, _decorator } from 'cc';
import { myLog } from '../../../common/myLog';
import { sdkManager } from '../../../sdk/sdkManager';
import { tyqAdManager } from '../../../tyqSDK/tyqAdManager';
import { cocosUtil } from '../../../utils/cocosUtil';
import { utilTools } from '../../../utils/utilTools';
import { constants } from '../../data/constants';
import { msgac } from '../../data/msgac';
import { designManager } from '../../manager/designManager';
import { mapModel } from '../../model/mapModel';
import { playerModel } from '../../model/playerModel';
import { AnimationCtrl } from '../base/AnimationCtrl';
import { BaseLayer } from '../base/BaseLayer';
import { ItemLayer } from '../base/ItemLayer';
const { ccclass, property } = _decorator;

@ccclass('SkillSelectLayer')
export class SkillSelectLayer extends BaseLayer {

    skill1ItemLayer: ItemLayer;
    skill2ItemLayer: ItemLayer;

    selectItemLayer: ItemLayer;

    hasSelect: boolean;

    uiNode: Node;

    btnRefresh: Node;
    btnGetAll: Node;

    textHint: Node;
    allHint: Node;

    onLoad() {
        super.onLoad();

        this.uiNode = this.getNodeByPath("ui");

        this.skill1ItemLayer = this.getNodeByPath("ui/skillLayer1/itemLayer").addComponent(ItemLayer);
        this.skill2ItemLayer = this.getNodeByPath("ui/skillLayer2/itemLayer").addComponent(ItemLayer);

        this.selectItemLayer = this.getNodeByPath("ui/selectLayer").addComponent(ItemLayer);

        this.btnRefresh = this.getNodeByPath("ui/btns/btnRefresh");
        this.btnGetAll = this.getNodeByPath("ui/btns/btnGetAll");

        this.textHint = this.getNodeByPath("ui/textHint");
        this.allHint = this.getNodeByPath("ui/allHint");

        this.isShowBannerAd = true;
    }

    onEnable() {
        super.onEnable();

        this.addEventArr([
            msgac.mapLeave,
        ]);
        tyqAdManager.showDelayFullVideo()
        tyqAdManager.showDelayInterstitialAd()
    }

    onDisable() {
        super.onDisable();

        this.removeEventArr([
            msgac.mapLeave,
        ]);
    }

    initUI() {
        cocosUtil.tweenScaleIn2(this.uiNode);
        this.hasSelect = false;

        this.setString(this.getNodeByPath("expProgress/lv"), mapModel.expLv);
        this.refreshSkillLayer();
        this.refreshSelectLayer();

        this.refreshInfoLayer();
    }

    refreshInfoLayer() {
        // 2023-03-13 改成一直显示欧皇附体按钮
        return;
        let lvCount = this.layerData.lvCount;
        if (!lvCount) {
            lvCount = 1;
        }
        if (mapModel.skillAllNum > 0) {
            this.btnRefresh.active = false;
            this.btnGetAll.active = true;

            this.textHint.active = false;
            this.allHint.active = true;
        } else {
            this.btnRefresh.active = true;
            this.btnGetAll.active = false;

            this.textHint.active = true;
            this.allHint.active = false;

            let refreshInfoNode = this.getNodeByPath("ui/btns/btnRefresh/info");
            let refreshFreeNode = this.getNodeByPath("ui/btns/btnRefresh/free");
            if (playerModel.skillFreeRefreshCount > 0) {
                refreshInfoNode.active = true;
                refreshFreeNode.active = false;
            } else {
                refreshInfoNode.active = false;
                refreshFreeNode.active = true;
            }
        }
    }

    refreshSkillLayer() {
        this.setNumItemLayer(this.skill1ItemLayer.node, constants.design.skillNum, this.refreshSkill1Item.bind(this));
        this.setNumItemLayer(this.skill2ItemLayer.node, constants.design.skillNum, this.refreshSkill2Item.bind(this));
    }

    refreshSkill2Item(itemUI: Node, num: any) {
        let info = mapModel.skillSystem.skill2Arr[num - 1];
        let iconNode = find("icon", itemUI);
        if (info) {
            iconNode.active = true;
            let row = designManager.getRowById(constants.tableName.skill2, info.id);
            this.setSpriteFrame(iconNode, row.icon);
        } else {
            iconNode.active = false;
        }
    }

    refreshSkill1Item(itemUI: Node, num: any) {
        let info = mapModel.skillSystem.skillArr[num - 1];
        let iconNode = find("icon", itemUI);
        if (info) {
            iconNode.active = true;
            let row = designManager.getRowById(constants.tableName.skill, info.id);
            this.setSpriteFrame(iconNode, row.icon);
        } else {
            iconNode.active = false;
        }
    }

    refreshSelectLayer() {
        let arr = mapModel.mapSystem.getSelectItemArr();
        this.selectItemLayer.initUI(this, arr, this.refreshSelectItem.bind(this));
    }

    refreshSelectItem(itemUI: any, item: any) {
        cocosUtil.setRenderableColor(itemUI, Color.WHITE, true);
        let newNode = find("new", itemUI);
        let info = item.info;
        if (info) {
            newNode.active = false;
        } else {
            newNode.active = true;
            Tween.stopAllByTarget(newNode);
            cocosUtil.tweenBreath(newNode, 0.5, 1.1);
        }

        let row = null;
        switch (item.name) {
            case constants.tableName.weapon:
            case constants.tableName.skill:
            case constants.tableName.skill2:
                let id = designManager.getFirstIdByType(item.type);
                if (info) {
                    id = info.id + 1;
                }
                row = designManager.getRowById(item.name, id);
                break;
            case constants.tableName.prop:
                row = designManager.getRowById(item.name, item.id);
                break;
            default:
                break;
        }
        if (!row) {
            myLog.e("row is undefined:", row, item);
        }
        itemUI.row = row;
        this.setString(find("name", itemUI), row.name);

        this.setSpriteFrame(find("icon", itemUI), row.icon);
        this.setString(find("info", itemUI), row.info);

        let btnDoubleSelect = find("btnDoubleSelect", itemUI);
        btnDoubleSelect.active = false;
        let selectEffect = find("selectEffect", itemUI);
        selectEffect.active = false;
        cocosUtil.addComponentOnce(selectEffect, AnimationCtrl);

        let starLayer = find("starLayer", itemUI);
        let bgNode = find("bg", itemUI);
        let bg2Node = find("bg2", itemUI);
        if (row.lv >= constants.design.maxLv) {
            bgNode.active = false;
            bg2Node.active = true;
        } else {
            bgNode.active = true;
            bg2Node.active = false;
        }
        if (item.name == constants.tableName.prop) {
            starLayer.active = false;
        } else {
            starLayer.active = true;
            this.setNumItemLayer(starLayer, constants.design.maxLv, (starItemUI: Node, starLv: number) => {
                let uiOpacity = starItemUI.getComponent(UIOpacity);
                uiOpacity.opacity = 255;
                Tween.stopAllByTarget(uiOpacity);

                let starIcon = find("icon", starItemUI);
                let starIcon2 = find("icon2", starItemUI);
                let yinIcon = find("yin", starItemUI);
                if (row.lv >= starLv) {
                    yinIcon.active = false;
                    if (row.lv == constants.design.maxLv) {
                        starIcon.active = false;
                        starIcon2.active = true;
                    } else {
                        starIcon.active = true;
                        starIcon2.active = false;
                    }
                    if (row.lv == starLv) {
                        cocosUtil.tweenBlink(starItemUI, 0.3);
                        itemUI.starNode = starItemUI;
                    }
                } else {
                    yinIcon.active = true;
                    starIcon.active = false;
                    starIcon2.active = false;
                }
            });
            if (row.lv <= constants.design.maxLv - 1) {
                btnDoubleSelect.active = true;
            }
        }

        let combLayer = find("comb", itemUI);
        if (row.skillArr) {
            combLayer.active = true;
            let iconNode = find("icon", combLayer);
            let skillId = 0;
            utilTools.forArr(row.skillArr, (type: number) => {
                let sInfo = mapModel.skillSystem.getSkillInfoByType(type);
                if (sInfo) {
                    skillId = sInfo.id;
                    return true;
                }
            });
            if (skillId == 0) {
                skillId = designManager.getFirstIdByType(row.skillArr[0])
            }
            let skillRow = designManager.getRowById(constants.tableName.skill, skillId);
            this.setSpriteFrame(iconNode, skillRow.icon);
            Tween.stopAllByTarget(iconNode);
            tween(iconNode).delay(1).to(0.3, { scale: v3(1.5, 1.5, 1) }).to(0.15, { scale: v3(1, 1, 1) }).union().repeatForever().start();
        } else {
            combLayer.active = false;
        }
    }

    mapLeaveRet() {
        this.closeLayer();
    }

    processEvent(ac: any, data: any) {
        switch (ac) {
            default:
                break;
        }
    }

    onClickBtnRefresh() {
        if (this.hasSelect) {
            return;
        }
        if (playerModel.skillFreeRefreshCount > 0) {
            sdkManager.openAd("3选1刷新", (st: number) => {
                if (st == 1) {
                    this.refreshSelectLayer();
                }
            });
            return;
        }

        playerModel.skillFreeRefreshCount++;
        this.refreshSelectLayer();
        this.refreshInfoLayer();
    }

    onClickBtnGetAll() {
        if (this.hasSelect) {
            return;
        }
        sdkManager.openAd("3选1欧皇附体", (st: number) => {
            if (st == 1) {
                mapModel.skillAllNum--;
                this.hasSelect = true;
                let arr = [];
                this.selectItemLayer.node.children.forEach((node: any) => {
                    arr.push(node);
                });
                let tempFunc = () => {
                    let node = arr.shift();
                    if (!node) {
                        this.goNext();
                        return;
                    }
                    this.doSelectItem(node, false, () => {
                        tempFunc();
                    });
                };
                tempFunc();

            }
        });
    }

    doSelectItem(node: any, isYin = true, callback?: Function, isDouble: boolean = false) {
        let starNode: Node = node.starNode;
        let item = node.item;
        let row = node.row;
        utilTools.waterfall([
            (result: any, cb: Function) => {
                if (isYin) {
                    // 弱化其它选项
                    utilTools.forArr(this.selectItemLayer.node.children, (itemUI: Node) => {
                        if (node == itemUI) {
                            return;
                        }
                        cocosUtil.setRenderableColor(itemUI, constants.colors.yin, true);
                    });
                }
                if (starNode && starNode.activeInHierarchy) {
                    // 星星选中特效
                    let selectEffect = find("selectEffect", node);
                    selectEffect.active = true;
                    let pos = cocosUtil.convertToNodeSpace(selectEffect, cocosUtil.convertToWorldSpace(starNode));
                    selectEffect.setPosition(pos);
                    selectEffect.getComponent(AnimationCtrl).playAnimationOnce("2", () => {
                        selectEffect.active = false;
                    });
                    starNode.scale = v3(1, 1, 1);
                    tween(starNode).to(0.1, { scale: v3(1.5, 1.5, 1) }).delay(0.15).to(0.15, { scale: v3(1, 1, 1) }).call(() => {
                        cb();
                    }).start();
                    if (isDouble) {
                        // 连升两星
                        let starNode2 = find("starLayer", node).children[row.lv];
                        if (starNode2) {
                            let selectEffect2 = cocosUtil.instantiate(selectEffect);
                            selectEffect2.parent = selectEffect.parent;
                            pos = cocosUtil.convertToNodeSpace(selectEffect2, cocosUtil.convertToWorldSpace(starNode2));
                            selectEffect2.position = pos;
                            selectEffect2.getComponent(AnimationCtrl).playAnimationOnce("2", () => {
                                selectEffect2.removeFromParent();
                            });
                            starNode2.scale = v3(1, 1, 1);
                            find("icon", starNode2).active = true;
                            tween(starNode2).to(0.1, { scale: v3(1.5, 1.5, 1) }).delay(0.15).to(0.15, { scale: v3(1, 1, 1) }).start();
                        }
                    }
                    return;
                }
                this.scheduleOnce(() => {
                    cb();
                }, 0.2);
            },
            (result: any, cb: Function) => {
                switch (item.name) {
                    case constants.tableName.weapon:
                        mapModel.weaponSystem.addWeapon(item.type);
                        if (isDouble) {
                            mapModel.weaponSystem.addWeapon(item.type);
                        }
                        break;
                    case constants.tableName.skill:
                        mapModel.skillSystem.addSkill(item.type);
                        if (isDouble) {
                            mapModel.skillSystem.addSkill(item.type);
                        }
                        break;
                    case constants.tableName.skill2:
                        mapModel.skillSystem.addSkill2(item.type);
                        if (isDouble) {
                            mapModel.skillSystem.addSkill2(item.type);
                        }
                        break;
                    case constants.tableName.prop:
                        mapModel.propSystem.getProp(item.id);
                        break;
                    default:
                        break;
                }
                cb();
            },
            (result: any, cb: Function) => {
                if (callback) {
                    callback();
                }
            }
        ]);
    }

    goNext() {
        this.layerData.lvCount--;
        if (this.layerData.lvCount > 0) {
            this.initUI();
        } else {
            this.closeLayer();
            if (this.layerCb) {
                this.layerCb();
            }
        }
    }

    onClickSelectItem(node: any) {
        if (this.hasSelect) {
            return;
        }
        this.hasSelect = true;
        this.doSelectItem(node, true, () => {
            this.goNext();
        });
    }

    onClickBtnDoubleSelect(node: any) {
        if (this.hasSelect) {
            return;
        }
        sdkManager.openAd("3选1连升两星", (st: number) => {
            if (st == 1) {
                this.hasSelect = true;
                let starNode: Node = node.parent.starNode;
                Tween.stopAllByTarget(starNode.getComponent(UIOpacity));
                starNode.getComponent(UIOpacity).opacity = 255;
                find("yin", starNode).active = true;
                find("icon", starNode).active = false;
                this.scheduleOnce(() => {
                    find("yin", starNode).active = false;
                    find("icon", starNode).active = true;
                    this.doSelectItem(node.parent, true, () => {
                        this.goNext();
                    }, true);
                }, 0.3);
            }
        });
    }

}

