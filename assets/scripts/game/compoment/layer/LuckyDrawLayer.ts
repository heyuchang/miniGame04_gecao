import { find, macro, Node, sp, tween, Tween, UIOpacity, UITransform, v3, _decorator } from 'cc';
import { cocosUtil } from '../../../utils/cocosUtil';
import { utilTools } from '../../../utils/utilTools';
import { constants } from '../../data/constants';
import { localText } from '../../data/localText';
import { msgac } from '../../data/msgac';
import { designManager } from '../../manager/designManager';
import { mapModel } from '../../model/mapModel';
import { AnimationCtrl } from '../base/AnimationCtrl';
import { BaseLayer } from '../base/BaseLayer';
const { ccclass, property } = _decorator;

@ccclass('LuckyDrawLayer')
export class LuckyDrawLayer extends BaseLayer {

    uiNode: Node;

    itemLayer: Node;
    circleNodeNum: number = 16;

    choseNum: number = 0;
    choseArr: any = [];

    starShineArr: any = [];
    starShineIndex: number = 0;
    showChoseIndex: number = 0;
    showChoseItemUI: Node;

    startCircle: boolean = false;
    circleEnd: boolean = false;
    btnStart: Node;
    hintNode: Node;
    coinLayer: Node;
    coinNumNode: Node;
    coinNum: number = 0;

    resultUILayer: Node;
    resultBgNode: Node;
    resultItemLayer: Node;
    resultItemNode: Node;
    resultBtnSure: Node;

    // 一些特效
    pdNode: Node;
    fireNode: Node;

    onLoad() {
        super.onLoad();

        this.uiNode = this.getNodeByPath("ui");

        this.btnStart = this.getNodeByPath("ui/btnStart");
        this.hintNode = this.getNodeByPath("ui/hint");

        this.itemLayer = this.getNodeByPath("ui/itemLayer");
        let itemNode = this.itemLayer.children[0];
        itemNode.parent = null;
        let arr = [
            { x: 0, y: 100 },
            { x: 100, y: 0 },
            { x: 0, y: -100 },
            { x: -100, y: 0 },
        ];
        let lastItemNode = itemNode;
        for (let i = 0; i < arr.length; i++) {
            let info = arr[i];
            for (let k = 1; k <= 4; k++) {
                let node = cocosUtil.instantiate(itemNode);
                node.parent = this.itemLayer;
                let pos = lastItemNode.getPosition();
                pos.x += info.x;
                pos.y += info.y;
                node.position = pos;
                lastItemNode = node;
            }
        }

        this.coinLayer = this.getNodeByPath("ui/coinLayer");
        this.coinNumNode = this.getNodeByPath("ui/coinLayer/num");

        this.pdNode = this.getNodeByPath("pd");
        this.fireNode = this.getNodeByPath("fire");

        this.resultUILayer = this.getNodeByPath("resultUi");
        this.resultBgNode = this.getNodeByPath("resultUi/resultBg");
        this.resultItemLayer = this.getNodeByPath("resultUi/itemLayer");
        this.resultItemNode = this.resultItemLayer.children[0];
        this.resultItemNode.parent = null;
        this.resultBtnSure = this.getNodeByPath("resultUi/btnSure");

        this.isShowBannerAd = true;
    }

    onEnable() {
        super.onEnable();

        this.addEventArr([
            msgac.mapLeave,
        ]);
    }

    onDisable() {
        super.onDisable();

        this.removeEventArr([
            msgac.mapLeave,
        ]);
    }

    initUI() {
        this.resultUILayer.active = false;
        this.pdNode.active = false;
        this.fireNode.active = false;
        this.hintNode.active = false;
        this.setString(this.coinNumNode, this.coinNum);

        this.initItemArr();
        this.btnStart.active = false;
        cocosUtil.tweenScaleIn(this.uiNode, 0.3, () => {
            this.btnStart.active = true;
            cocosUtil.tweenScaleIn(this.btnStart);
        });
    }

    initItemArr() {
        // 转盘上显示的
        let showArr = [];
        // 最终随机到的
        this.choseArr = [];
        // 选择的个数
        this.choseNum = Math.random() > 0.5 ? 3 : 5;

        // 随机池子
        let arr = [];
        // 强制选择
        let forceChoseArr = [];

        // 武器
        utilTools.forArr(mapModel.weaponSystem.weaponArr, (info: any) => {
            let item: any = {};
            item.name = constants.tableName.weapon;
            item.info = info;
            let row = designManager.getRowById(item.name, info.id);
            if (row.lv == constants.design.maxLv - 1) {
                // 4级必选中
                let temp = utilTools.copyObj(item);
                temp.info.id++;
                forceChoseArr.push(temp);
                return;
            }
            let lv = row.lv;
            while (lv < constants.design.maxLv) {
                let temp = utilTools.copyObj(item);
                arr.push(temp);
                lv++;
            }
        });

        // 主动技能
        utilTools.forArr(mapModel.skillSystem.skillArr, (info: any) => {
            let item: any = {};
            item.name = constants.tableName.skill;
            item.info = info;
            let row = designManager.getRowById(item.name, info.id);
            if (row.lv == constants.design.maxLv - 1) {
                // 4级必选中
                let temp = utilTools.copyObj(item);
                temp.info.id++;
                forceChoseArr.push(temp);
                return;
            }
            let lv = row.lv;
            while (lv < constants.design.maxLv) {
                let temp = utilTools.copyObj(item);
                arr.push(temp);
                lv++;
            }
        });

        // 被动技能
        utilTools.forArr(mapModel.skillSystem.skill2Arr, (info: any) => {
            let item: any = {};
            item.name = constants.tableName.skill2;
            item.info = info;
            let row = designManager.getRowById(item.name, info.id);
            if (row.lv == constants.design.maxLv - 1) {
                // 4级必选中
                let temp = utilTools.copyObj(item);
                temp.info.id++;
                forceChoseArr.push(temp);
                return;
            }
            let lv = row.lv;
            while (lv < constants.design.maxLv) {
                let temp = utilTools.copyObj(item);
                arr.push(temp);
                lv++;
            }
        });

        showArr = showArr.concat(forceChoseArr);

        // 处理强制选择的
        while (forceChoseArr.length > this.choseNum) {
            // 超过选择的数量要移除
            utilTools.getRandomItemByArr(forceChoseArr, true);
        }
        this.choseArr = this.choseArr.concat(forceChoseArr);

        // 随机池子补满金币
        while (arr.length < this.circleNodeNum - showArr.length) {
            let item: any = {};
            item.name = constants.tableName.prop;
            item.id = constants.propIds.coin;
            item.num = Math.floor(Math.random() * 100) + 1;
            arr.push(item);
        }

        // 接下来从池子中随机
        while (this.choseArr.length < this.choseNum) {
            let item = utilTools.getRandomItemByArr(arr, true);
            if (!item) {
                break;
            }
            this.choseArr.push(item);
            showArr.push(item);
        }

        // 补满转盘
        while (showArr.length < this.circleNodeNum) {
            let item = utilTools.getRandomItemByArr(arr, true);
            if (!item) {
                break;
            }
            showArr.push(item);
        }

        // 随机打乱
        showArr = utilTools.randomArr(showArr, true);
        this.choseArr = utilTools.randomArr(this.choseArr, true);

        utilTools.forArr(this.itemLayer.children, (itemUI: any, index: number) => {
            let item = showArr[index];
            let row = this.getRowByItem(item);
            item.uiIndex = index;
            itemUI.item = item;
            this.setSpriteFrame(find("icon", itemUI), row.icon);
            find("shine", itemUI).active = false;
            find("star", itemUI).active = false;
            find("chose", itemUI).active = false;

            // 出场动画
            itemUI.active = false;
            this.scheduleOnce(() => {
                itemUI.active = true;
                cocosUtil.tweenScaleIn(itemUI);
            }, 0.2 + Math.random() * 0.2);
        });

        // myLog.i(showArr, this.choseArr);

    }

    getRowByItem(item: any) {
        let row = null;
        switch (item.name) {
            case constants.tableName.weapon:
            case constants.tableName.skill:
            case constants.tableName.skill2:
                row = designManager.getRowById(item.name, item.info.id);
                break;
            case constants.tableName.prop:
                row = designManager.getRowById(item.name, item.id);
                break;
            default:
                break;
        }
        return row;
    }

    // 开始处理动画表现
    startAnimation() {
        utilTools.waterfall([
            (result: any, cb: Function) => {
                // 转一圈
                this.circleShineAnimation(() => {
                    cb();
                });
            },
            (result: any, cb: Function) => {
                // 转第二圈
                this.circleShineAnimation(() => {
                    cb();
                });
            },
            (result: any, cb: Function) => {
                // 整圈闪烁
                this.totalShineAnimation(() => {
                    cb();
                });
            },
            (result: any, cb: Function) => {
                // 选择数量闪烁
                this.choseNumAnimation(() => {
                    cb();
                });
            },
            (result: any, cb: Function) => {
                this.unscheduleAllCallbacks();
                this.pdNode.active = true;
                this.startCircle = true;
                tween(this.coinLayer).to(0.2, { scale: v3(1.1, 1.1, 1) }).to(0.2, { scale: v3(1, 1, 1) }).union().repeatForever().start();
                // 加金币
                this.schedule(() => {
                    if (this.startCircle && !this.circleEnd) {
                        this.coinNum += 2;
                        this.setString(this.coinNumNode, this.coinNum);
                    }
                }, 0.02, macro.REPEAT_FOREVER);
                // 提示跳过动画
                this.scheduleOnce(() => {
                    this.hintNode.active = true;
                    tween(this.hintNode.getComponent(UIOpacity)).delay(0.5).to(0.5, { opacity: 0 }).to(0.5, { opacity: 255 }).union().repeatForever().start();
                }, 0.5);
                // 开始转圈
                this.startShineStarCircle();
            }
        ]);

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
            let fireNode = cocosUtil.instantiate(this.fireNode);
            fireNode.parent = this.fireNode.parent;
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

    startShineStarCircle() {
        let chs = this.itemLayer.children;
        let index = 5;
        this.starShineArr = [];
        this.starShineIndex = index + this.choseNum - 1;
        this.showChoseIndex = 0;
        this.showChoseItemUI = null;

        for (let i = 0; i < this.choseNum; i++) {
            let itemUI = chs[index];
            index++;
            this.initStarShineItemUI(itemUI);
            this.starShineArr.push(itemUI);
        }
        this.schedule(this.addNextStarShine, 0.05, macro.REPEAT_FOREVER);

        this.scheduleOnce(this.startShowChoseItem, 3 + 2 * Math.random());
    }

    startShowChoseItem() {
        let item = this.choseArr[this.showChoseIndex];
        if (!item) {
            return;
        }
        this.showChoseItemUI = this.itemLayer.children[item.uiIndex];
        this.showChoseIndex++;
    }

    initStarShineItemUI(itemUI: Node) {
        let uiOpacity = find("shine", itemUI).getComponent(UIOpacity);
        uiOpacity.node.active = true;
        uiOpacity.opacity = 255;

        let starNode = find("star", itemUI);
        starNode.angle = Math.random() * 360;
        let animationCtrl: AnimationCtrl = cocosUtil.addComponentOnce(starNode, AnimationCtrl);
        animationCtrl.getComponent(UIOpacity).opacity = 255;
        animationCtrl.node.active = true;
        animationCtrl.playAnimation("3", false, () => {
            animationCtrl.node.active = false;
        });
    }

    addNextStarShine(dt: number) {
        let chs = this.itemLayer.children;
        this.starShineIndex++;
        if (this.starShineIndex >= this.circleNodeNum) {
            this.starShineIndex = 0;
        }
        let itemUI = chs[this.starShineIndex];
        if (this.showChoseItemUI == itemUI) {
            // 选中了
            this.showChoseItemUI = null;
            this.unschedule(this.addNextStarShine);
            find("chose", itemUI).active = true;
            let starNode = find("star", itemUI);
            starNode.active = true;
            starNode.angle = 0;
            starNode.getComponent(UIOpacity).opacity = 255;
            let animationCtrl: AnimationCtrl = cocosUtil.addComponentOnce(starNode, AnimationCtrl);
            animationCtrl.playAnimation("2", false, () => {
                starNode.active = false;
            });
            // @ts-ignore
            this.playerAddItem(itemUI.item);
            tween(itemUI).to(0.2, { scale: v3(1.5, 1.5, 1) }).to(0.2, { scale: v3(1, 1, 1) }).call(() => {
                if (this.showChoseIndex >= this.choseArr.length) {
                    // 已经全部完成
                    this.showChoseResult();
                } else {
                    // 继续展示下一个
                    this.schedule(this.addNextStarShine, 0.05, macro.REPEAT_FOREVER);
                    this.startShowChoseItem();
                }
            }).start();
            return;
        }
        this.initStarShineItemUI(itemUI);
        this.starShineArr.push(itemUI);
        let outItemUI = this.starShineArr.shift();
        let shineNode = find("shine", outItemUI);
        tween(shineNode.getComponent(UIOpacity)).to(dt * 6, { opacity: 0 }).start();
    }

    playerAddItem(item: any) {
        let row = this.getRowByItem(item);
        switch (item.name) {
            case constants.tableName.weapon:
                mapModel.weaponSystem.addWeapon(row.type);
                item.info = utilTools.copyObj(mapModel.weaponSystem.getWeaponInfoByType(row.type));
                break;
            case constants.tableName.skill:
                mapModel.skillSystem.addSkill(row.type);
                item.info = utilTools.copyObj(mapModel.skillSystem.getSkillInfoByType(row.type));
                break;
            case constants.tableName.skill2:
                mapModel.skillSystem.addSkill2(row.type);
                item.info = utilTools.copyObj(mapModel.skillSystem.getSkill2InfoByType(row.type));
                break;
            case constants.tableName.prop:
                mapModel.propSystem.getProp(item.id, item.num);
                break;
            default:
                break;
        }
    }

    // 已全部完成
    async showChoseResult() {
        this.unscheduleAllCallbacks();
        this.circleEnd = true;
        mapModel.propSystem.getProp(constants.propIds.coin, this.coinNum);

        this.itemLayer.children.forEach((itemUI: Node) => {
            find("shine", itemUI).active = false;
            find("star", itemUI).active = false;
        });

        this.resultUILayer.active = true;
        this.resultBtnSure.active = false;
        this.resultItemLayer.removeAllChildren();
        await cocosUtil.tweenFadeIn(this.resultBgNode, 0.5);

        let itemTransform = this.resultItemNode.getComponent(UITransform);
        let itemHeight = itemTransform.height;
        let itemGap = 20;

        let chs = this.itemLayer.children;
        for (let i = 0; i < this.choseArr.length; i++) {
            let item = this.choseArr[i];
            this.scheduleOnce(() => {
                let node = chs[item.uiIndex];
                let pos = cocosUtil.convertToWorldSpace(node);
                node = cocosUtil.instantiate(node);
                node.parent = this.resultItemLayer;
                node.position = cocosUtil.convertToNodeSpace(node, pos);
                let targetPos = v3(0, 0, 0);
                targetPos.y = -itemHeight * 0.5 - (itemHeight + itemGap) * i;
                tween(node).to(0.2, { position: targetPos }).to(0.1, { scale: v3(0.3, 0.3, 1) }).call(() => {
                    let itemUI = cocosUtil.instantiate(this.resultItemNode);
                    itemUI.parent = this.resultItemLayer;
                    itemUI.position = targetPos;
                    this.refreshResultItemUI(itemUI, item);
                    let shineNode = find("shine", itemUI);
                    shineNode.active = true;
                    cocosUtil.tweenScaleIn2(itemUI, 0.2, () => {
                        cocosUtil.tweenFadeOut(shineNode, 0.6);
                        if (i == this.choseArr.length - 1) {
                            this.resultBtnSure.active = true;
                            cocosUtil.tweenScaleIn2(this.resultBtnSure);
                        }
                    });
                }).start();
            }, i * 0.3);
        }
    }

    refreshResultItemUI(itemUI: Node, item: any) {
        let row = this.getRowByItem(item);
        this.setSpriteFrame(find("icon", itemUI), row.icon);
        this.setString(find("name", itemUI), row.name);

        let info = row.info;
        if (item.name == constants.tableName.prop) {
            info = localText.coinGetHint.format(item.num);
        }
        this.setString(find("info", itemUI), info);

        let starLayer = find("starLayer", itemUI);
        if (item.name == constants.tableName.prop) {
            starLayer.active = false;
            return;
        }
        starLayer.active = true;
        this.setNumItemLayer(starLayer, constants.design.maxLv, (starNode: Node, num: number) => {
            let iconNode = find("icon", starNode);
            let icon2Node = find("icon2", starNode);
            let yinNode = find("yin", starNode);
            if (row.lv >= num) {
                iconNode.active = true;
                icon2Node.active = false;
                yinNode.active = false;
                if (row.lv >= constants.design.maxLv) {
                    iconNode.active = false;
                    icon2Node.active = true;
                }
            } else {
                iconNode.active = false;
                yinNode.active = true;
            }
        });

    }

    choseNumAnimation(endCb: Function) {
        let chs = this.itemLayer.children;
        let index = 5;
        let arr = [];
        for (let i = 0; i < this.choseNum; i++) {
            let itemUI = chs[index];
            arr.push(itemUI);
            index++;
            this.scheduleOnce(() => {
                let uiOpacity = find("shine", itemUI).getComponent(UIOpacity);
                uiOpacity.node.active = true;
                uiOpacity.opacity = 0;
                tween(uiOpacity).to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 }).union().repeatForever().start();
                if (i == this.choseNum - 1) {
                    this.scheduleOnce(() => {
                        utilTools.forArr(arr, (node: Node) => {
                            find("shine", node).active = false;
                            Tween.stopAllByTarget(find("shine", node).getComponent(UIOpacity));
                        });
                        endCb();
                    }, 0.35);
                }
            }, i * 0.35);
        }
    }

    totalShineAnimation(endCb: Function) {
        let time = 0.3;
        utilTools.forArr(this.itemLayer.children, (itemUI: Node, index: number) => {
            let uiOpacity = find("shine", itemUI).getComponent(UIOpacity);
            uiOpacity.node.active = true;
            uiOpacity.opacity = 0;
            tween(uiOpacity).to(time, { opacity: 255 }).to(time, { opacity: 0 }).union().repeat(3).call(() => {
                if (index == 0) {
                    endCb();
                }
            }).start()
        });
    }

    circleShineAnimation(endCb?: Function) {
        let chs = this.itemLayer.children;
        let count = 0;
        let opacityTime = 0.1;
        let delayTime = 0.5;
        for (let i = 13; i >= 5; i--) {
            let node = chs[i];
            let time = count * 0.05;

            let shineNode = find("shine", node);
            shineNode.active = true;
            let uiOpacity = shineNode.getComponent(UIOpacity);
            uiOpacity.opacity = 0;
            this.scheduleOnce(() => {
                tween(uiOpacity).to(opacityTime, { opacity: 255 }).delay(delayTime).to(opacityTime, { opacity: 0 }).call(() => {
                    if (i == 5) {
                        endCb();
                    }
                }).start();
            }, time);

            if (i != 13 && i != 5) {
                let sideNode = chs[(26 - i) % this.circleNodeNum];
                let sideShineNode = find("shine", sideNode);
                sideShineNode.active = true;
                let sideOpacity = sideShineNode.getComponent(UIOpacity);
                sideOpacity.opacity = 0;
                this.scheduleOnce(() => {
                    tween(sideOpacity).to(opacityTime, { opacity: 255 }).delay(delayTime).to(opacityTime, { opacity: 0 }).start();
                }, time);
            }
            count++;
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

    onClickBtnStart() {
        this.btnStart.active = false;
        this.startAnimation();
    }

    onButtonClick(node: Node, name: string) {
        switch (name) {
            default:
                break;
        }
    }

    onClickBg() {
        if (!this.hintNode.active) {
            return;
        }
        this.hintNode.active = false;
        if (this.showChoseIndex >= 1) {
            return;
        }
        this.circleEnd = true;
        // 一次性给金币
        let coin = 300;
        if (this.choseNum >= 3) {
            coin = 450;
        }
        coin = coin + 100 * Math.random();
        coin = Math.floor(coin);
        if (coin <= this.coinNum) {
            coin = coin + 50 * Math.random();
            coin = Math.floor(coin);
        }
        this.coinNum = coin;
        this.setString(this.coinNumNode, this.coinNum);

        this.unschedule(this.startShowChoseItem);
        this.startShowChoseItem();
    }

    closeLayer() {
        super.closeLayer();
        if (this.layerCb) {
            this.layerCb();
        }
    }

    onClickBtnSure() {
        this.closeLayer();
    }

}

