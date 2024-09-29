import { Button, EventHandler, find, instantiate, Node, Prefab, Sprite, tween, v3, _decorator } from 'cc';
import { myLog } from '../../../common/myLog';
import ServerCtr from '../../../tyqSDK/network/ServerCtr';
import { tyqAdManager } from '../../../tyqSDK/tyqAdManager';
import { ChannelFlag, tyqSDK } from '../../../tyqSDK/tyqSDK';
import { constants } from '../../data/constants';
import { msgac } from '../../data/msgac';
import { audioManager } from '../../manager/audioManager';
import { designManager } from '../../manager/designManager';
import { eventManager } from '../../manager/eventManager';
import { RedPointLogicMgr, RPointMask } from '../../manager/RedPointLogicMgr';
import { resManager } from '../../manager/resManager';
import { mapModel } from '../../model/mapModel';
import { playerModel } from '../../model/playerModel';
import { UserData } from '../../model/UserData';
import { BaseLayer } from '../base/BaseLayer';
import { ShineColor } from '../shader/ShineColor';
import { BaseUILayer } from './BaseUILayer';
import { HeroLayer } from './HeroLayer';
import { MainLayer } from './MainLayer';
import { TopUILayer } from './TopUILayer';
import { TowerLayer } from './TowerLayer';
const { ccclass, property } = _decorator;

@ccclass('HomeLayer')
export class HomeLayer extends BaseLayer {

    toggles: Node[] = [];
    togglesLock = [false, false, false, false, false];

    _PageLayer = [constants.layers.TowerLayer, "HeroLayer", "MainLayer", "ShopLayer", constants.layers.EnergyLayer]

    jumpLayerData: any;

    tabMainRedPointNode: Node;
    tabEnergyRedPointNode: Node;

    onLoad() {
        this.chooseDesignResolution()
        this.tabMainRedPointNode = this.getNodeByPath("Layout/ui_btn3/redPoint");
        this.tabEnergyRedPointNode = this.getNodeByPath("Layout/ui_btn5/redPoint");
        if (tyqSDK.getSwitchValue("tyq_HeroLayer_open") == 1) {
            this.togglesLock[1] = false
            RedPointLogicMgr.ins().on(this.node, [{ mask: [RPointMask.RPM_PropWear, RPointMask.RPM_BlessProp], subPath: "Layout/ui_btn2" },])
        } else {
            this.togglesLock[1] = true
        }

        if (tyqSDK.channel != ChannelFlag.WECHAT_JJWS) {
            this.togglesLock[1] = false
        }

        ServerCtr.GetInstance().reqGetFriendVal();
        this.schedule(() => {
            ServerCtr.GetInstance().reqGetFriendVal();
        }, 60 * 5);

        myLog.i("进游戏的url参数：", tyqAdManager.getEnterUrlQuery());
        let urlParmas = tyqAdManager.getEnterUrlQuery();
        if (urlParmas && urlParmas.uid) {
            ServerCtr.GetInstance().reqSetFriendCode(urlParmas.uid);
            tyqSDK.eventSendCustomEvent("参与分享活动成功进来的玩家")
        }
    }

    onEnable() {
        super.onEnable();
        this.addEventArr([
            msgac.homeHideMenu,
            msgac.mapEnter,
            msgac.jumpLayer,
        ]);
        //  eventManager.on(msgac.homeHideMenu, this.homeHideMenuRet, this)
        if (!UserData.getInstance().mapHand) {
            // 直接进去爬塔第一关
            mapModel.enterMapWithMapId(101, 1);
            return;
        }

        if (playerModel.hasEnergyAward()) {
            this.setPage(4);
        } else {
            this.setPage(0)
        }

        if (UserData.getInstance().mapData) {
            this.openLayer(constants.layers.BackMapLayer, null, (mapId: number) => {
                if (mapId) {
                    mapModel.enterMapWithMapId(mapId);
                }
            });
        }
        // RedPointLogicMgr.ins().setRPointView(this.getNodeByPath("Layout/ui_btn2") ,null, true)
        audioManager.playMusic(constants.audioNames.home);

        if (this.layerData.isWin && this.layerData.floor > 0) {
            // 爬塔胜利
            UserData.getInstance().addTowerMapFloor(this.layerData.mapId);

            // 跳回去爬塔界面
            let obj: any = {};
            obj.layerName = constants.layers.TowerFloorLayer;
            obj.mapId = this.layerData.mapId;
            eventManager.send(msgac.jumpLayer, obj);

            let floorRow = designManager.getRowById(constants.tableName.towerFloor, this.layerData.floor);
            let propItem = UserData.getInstance().addPropNum(floorRow.propId, floorRow.propNum);
            this.openAwardGetLayer([propItem]);

        }

        // 强制弹出巡逻收益
        if (UserData.getInstance().getPatrolState() <= 0) {
            this.openLayer(constants.layers.PatrolLayer);
            RedPointLogicMgr.ins().setRPointView(this.getNodeByPath("Map/btnPortal"), null, false)
        }

    }

    refreshRedPoint() {
        if (playerModel.hasLetterAward() || playerModel.hasDaySignAward() || playerModel.hasDayTaskAward() || playerModel.hasVipAward()) {
            this.tabMainRedPointNode.active = true;
        } else {
            this.tabMainRedPointNode.active = false;
        }

        this.tabEnergyRedPointNode.active = playerModel.hasEnergyAward();
    }

    onDisable() {
        super.onDisable();
    }

    onDestroy() {
        super.onDestroy();
    }

    initUI() {
        for (let i = 0; i < 5; i++) {
            this.toggles[i] = this.getNodeByPath("Layout/ui_btn" + (i + 1))
            this.toggles[i].getChildByName("icon").getComponent(Sprite).grayscale = this.togglesLock[i]
            //  console.log(" this.toggles[i] = ", this.toggles[i])
            let clickEvent = new EventHandler()
            clickEvent.component = "HomeLayer"
            clickEvent.target = this.node
            clickEvent.customEventData = i + ""
            clickEvent.handler = "selectPage"
            if (!this.toggles[i].getComponent(Button)) {
                this.toggles[i].addComponent(Button).clickEvents = [clickEvent]
            }
            // this.toggles[i].addComponent(Button).clickEvents.push(clickEvent)
        }

    }

    start() {

    }

    selectPage(node, event) {
        console.log("event =", event)
        this.setPage(parseInt(event))
        audioManager.playEffect("btnClick")
    }

    setPage(index) {

        if (this.togglesLock[index]) {
            this.createNotice("还未解锁")
            return
        }

        this.getNodeByPath("TopUILayer").active = index != 3
        if (index == 2) {
            eventManager.send(msgac.commonResRefresh)
        }
        // if (index == 3) {
        //     this.openLayer(constants.layers.ShopLayer)
        //     return
        // }
        for (let i = 0; i < 5; i++) {
            if (i != index) {
                this.setSpriteFrame2(this.toggles[i], "homeLayer/ui_xk", null, constants.bundles.wwqVec)
                //  this.toggles[i].getChildByName("icon").scale = new Vec3(0.6, 0.6, 1)
                tween(this.toggles[i].getChildByName("icon")).to(0.15, { scale: v3(0.6, 0.6, 1) }).start()
                this.toggles[i].getChildByName("name").active = false
            } else {
                this.setSpriteFrame2(this.toggles[i], "homeLayer/ui_hdmb", null, constants.bundles.wwqVec)
                //this.toggles[i].getChildByName("icon").scale = new Vec3(1, 1, 1)
                tween(this.toggles[i].getChildByName("icon")).to(0.15, { scale: v3(1, 1, 1) }).start()
                this.toggles[i].getChildByName("name").active = true
            }
        }
        let uiNode = this.getNodeByPath("ui")

        if (this._PageLayer[index] != "") {
            resManager.loadAsset(constants.bundles.layer, this._PageLayer[index], Prefab, null, (err, prefab) => {
                if (err) {
                    myLog.e("LayerManager.openLayer error:" + err.message, "MainLayer", err);
                    return;
                }
                uiNode.removeAllChildren()
                let layerNode = instantiate(prefab);
                uiNode.addChild(layerNode)
                if (this.jumpLayerData) {
                    if (layerNode && layerNode.getComponent(BaseUILayer)) {
                        layerNode.getComponent(BaseUILayer).layerData = this.jumpLayerData
                    }
                    switch (this.jumpLayerData.layerName) {
                        case "PatrolLayer":
                            layerNode.getComponent(MainLayer).onClickBtnPartol();
                            break;
                        case "BlessLayer":
                            layerNode.getComponent(HeroLayer).openBless();
                            break;
                        case constants.layers.TowerFloorLayer:
                            layerNode.getComponent(TowerLayer).openTowerFloorLayer(this.jumpLayerData.mapId);
                            break;
                        case constants.layers.DaySignLayer:
                            layerNode.getComponent(MainLayer).onClickBtnDaySign();
                            break;
                        default:
                            break;
                    }
                    delete this.jumpLayerData;
                }
            });
        }
    }

    jumpLayerRet(data: any) {
        this.jumpLayerData = data;
        switch (data.layerName) {
            case "ShopLayer":
                this.setPage(3);
                break;
            case "MainLayer":
            case "PatrolLayer":
            case constants.layers.DaySignLayer:
                this.setPage(2);
                break;
            case "BlessLayer":
                this.setPage(1);
                break;
            case "RewardItemLayer":
                this.setPage(2);
                find("TopUILayer", this.node).getComponent(TopUILayer).showRewardItem(null, 2);
                break;
            case constants.layers.RewardSkinLayer:
                this.setPage(2);
                this.openLayer(constants.layers.RewardSkinLayer);
                break;
            case constants.layers.DaySignLayer:
                this.setPage(2);
                this.openLayer(constants.layers.DaySignLayer);
                break;
            case constants.layers.TowerFloorLayer:
                this.setPage(0);
                break;
            default:
                break;
        }
    }

    mapEnterRet(data: any) {

        // 显示加载进度
        this.openLayer(constants.layers.TransLayer);
        mapModel.loadMapRes((percent: number) => {
            // TODO 刷新加载进度
        }, () => {
            this.openLayer(constants.layers.MapLayer, data, null, () => {
                // 关闭加载进度
                this.closeLayer(constants.layers.TransLayer);
                this.closeLayer(constants.layers.TowerFloorLayer);
                this.closeLayer();
            });
        });
    }

    homeHideMenuRet(data: any) {
        if (data.hide) {
            this.getNodeByPath("Layout").active = false
        } else {
            this.getNodeByPath("Layout").active = true
        }
    }

    onClickBtnHit() {
        let bodyNode = this.getNodeByPath("monster");
        // 闪白
        let shineColor = bodyNode.getComponent(ShineColor);
        if (!shineColor) {
            shineColor = bodyNode.addComponent(ShineColor);
        }
        shineColor.startShine(constants.materials.shineColorSpine);
    }

}

