

import { find, Node, ProgressBar, tween, Tween, v3, _decorator } from 'cc';
import { myLog } from '../../../common/myLog';
import { sdkManager } from '../../../sdk/sdkManager';
import { tyqSDK } from '../../../tyqSDK/tyqSDK';
import { cocosUtil } from '../../../utils/cocosUtil';
import { utilTools } from '../../../utils/utilTools';
import { constants } from '../../data/constants';
import { localText } from '../../data/localText';
import { msgac } from '../../data/msgac';
import { audioManager } from '../../manager/audioManager';
import { designManager } from '../../manager/designManager';
import { mapModel } from '../../model/mapModel';
import { playerModel } from '../../model/playerModel';
import { UserData } from '../../model/UserData';
import { serverMsg } from '../../other/serverMsg';
import { BaseLayer } from '../base/BaseLayer';
import { GameCtrl } from '../item/GameCtrl';
import { Player } from '../item/Player';
import { ShineColor } from '../shader/ShineColor';
import { BulletSystem } from '../sys/BulletSystem';
import { HintSystem } from '../sys/HintSystem';
import { MapSystem } from '../sys/MapSystem';
import { MonsterSystem } from '../sys/MonsterSystem';
import { NumSystem } from '../sys/NumSystem';
import { PropSystem } from '../sys/PropSystem';
import { SkillSystem } from '../sys/SkillSystem';
import { WeaponSystem } from '../sys/WeaponSystem';
const { ccclass, property } = _decorator;

@ccclass('MapLayer')
export class MapLayer extends BaseLayer {

    fightCapNode: Node;

    mapSystem: MapSystem;

    player: Player;
    gameCtrl: GameCtrl;

    timeNode: Node;
    expProgress: Node;
    expLvNode: Node;
    expBarColorArr = ["#00FF00", "#00C2FF", "#FF00D6", "#FF2900"];
    expBarColorIndex = 0;
    expBarShineColor: ShineColor;
    expLvUpCount: number = 0;
    coinNumNode: Node;
    coinIconNode: Node;
    diamondNumNode: Node;
    killMonsterNumNode: Node;

    bossHpLayer: Node;
    bossDamProgressBar: ProgressBar;
    bossHpProgress: Node;

    skillBombIcon: Node;
    skillBombAd: Node;
    skillBombNum: Node;
    skillBombCd: Node;

    btnSkillHeal: Node;
    skillHealIcon: Node;
    skillHealAd: Node;
    skillHealNum: Node;
    skillHealCd: Node;

    skillMagnetAd: Node;
    skillMagnetNum: Node;
    skillLifeAd: Node;
    skillLifeNum: Node;

    monsterNumNode: Node;
    showNumNode: Node;
    playerPosNode: Node;
    expNumNode: Node;

    onLoad() {
        super.onLoad();
        this.chooseDesignResolution();
        this.getNodeByPath("bg").active = false;
        this.getNodeByPath("ui/btns").active = playerModel.isRecordAd || playerModel.isInDevelopmentEnvironment();

        this.fightCapNode = this.getNodeByPath("fightCap");
        this.fightCapNode.active = false;
        this.gameCtrl = this.getNodeByPath("gameCtrl").addComponent(GameCtrl);

        this.mapSystem = mapModel.mapFightLayer.addComponent(MapSystem);
        let mapLayer = find("map", mapModel.mapFightLayer);

        this.player = find("player", mapLayer).addComponent(Player);
        let monsterSystem = find("monsterLayer", mapLayer).addComponent(MonsterSystem);
        let bulletSystem = find("bulletLayer", mapLayer).addComponent(BulletSystem);
        let numSystem = find("numLayer", mapLayer).addComponent(NumSystem);
        let skillSystem = find("player/skillLayer", mapLayer).addComponent(SkillSystem);
        let weaponSystem = find("player/weaponLayer", mapLayer).addComponent(WeaponSystem);
        let hintSystem = find("hintLayer", mapLayer).addComponent(HintSystem);
        let propSystem = find("propLayer", mapLayer).addComponent(PropSystem);

        mapModel.setCompoments(this, this.player, this.mapSystem, monsterSystem, bulletSystem, numSystem, weaponSystem, skillSystem,
            hintSystem, propSystem);

        this.coinIconNode = this.getNodeByPath("ui/top/coinLayer/icon");
        this.coinNumNode = this.getNodeByPath("ui/top/coinLayer/num");
        this.diamondNumNode = this.getNodeByPath("ui/top/diamondLayer/num");
        this.killMonsterNumNode = this.getNodeByPath("ui/top/monsterLayer/num");

        this.expProgress = this.getNodeByPath("ui/expProgress");
        this.expLvNode = this.getNodeByPath("ui/expProgress/lv")
        this.expBarShineColor = this.getNodeByPath("ui/expProgress/bar").addComponent(ShineColor);

        this.bossHpLayer = this.getNodeByPath("ui/bossHpLayer");
        this.bossDamProgressBar = this.getNodeByPath("ui/bossHpLayer/damProgress").getComponent(ProgressBar);
        this.bossHpProgress = this.getNodeByPath("ui/bossHpLayer/hpProgress");
        this.bossHpLayer.active = false;

        this.skillBombIcon = this.getNodeByPath("ui/skillBtns/btnSkillBomb/icon");
        this.skillBombAd = this.getNodeByPath("ui/skillBtns/btnSkillBomb/icon/ad");
        this.skillBombNum = this.getNodeByPath("ui/skillBtns/btnSkillBomb/icon/num");
        this.skillBombCd = this.getNodeByPath("ui/skillBtns/btnSkillBomb/cd");

        this.btnSkillHeal = this.getNodeByPath("ui/skillBtns/btnSkillHeal");
        this.skillHealIcon = this.getNodeByPath("ui/skillBtns/btnSkillHeal/icon");
        this.skillHealAd = this.getNodeByPath("ui/skillBtns/btnSkillHeal/icon/ad");
        this.skillHealNum = this.getNodeByPath("ui/skillBtns/btnSkillHeal/icon/num");
        this.skillHealCd = this.getNodeByPath("ui/skillBtns/btnSkillHeal/cd");

        this.skillMagnetAd = this.getNodeByPath("ui/skillBtns/btnSkillMagnet/icon/ad");
        this.skillMagnetNum = this.getNodeByPath("ui/skillBtns/btnSkillMagnet/icon/num");
        this.skillLifeAd = this.getNodeByPath("ui/skillBtns/btnSkillLife/icon/ad");
        this.skillLifeNum = this.getNodeByPath("ui/skillBtns/btnSkillLife/icon/num");

        this.timeNode = this.getNodeByPath("ui/top/time");

        this.getNodeByPath("ui/infoDev").active = playerModel.isInDevelopmentEnvironment();
        this.monsterNumNode = this.getNodeByPath("ui/infoDev/monsterNum");
        this.showNumNode = this.getNodeByPath("ui/infoDev/showNum");
        this.playerPosNode = this.getNodeByPath("ui/infoDev/playerPos");
        this.expNumNode = this.getNodeByPath("ui/infoDev/expNum");

        let mapData = UserData.getInstance().mapData;
        if (mapData) {
            // 战斗中断
            this.loadSaveMapData(mapData);
        } else {
            // 新的开始
            mapModel.player.initData(this.layerData);
            mapModel.weaponSystem.initData(this.layerData);
        }

        this.openUpdateSecond = true;
        audioManager.playMusic(constants.audioNames.map);

        this.schedule(this.popBuyLifeLayer, this.getPopBuyLifeTime());
    }

    onEnable() {
        super.onEnable();

        this.addEventArr([
            msgac.mapLeave,
            msgac.saveDataBefore,
            msgac.commonResRefresh,
            msgac.mapRefreshSkill,
        ]);

        // test 武器
        // this.scheduleOnce(() => {
        //     mapModel.weaponSystem.addWeapon(4);
        // }, 1);

        // // test 技能
        // this.scheduleOnce(() => {
        //     for (let i = 0; i < 1; i++) {
        //         mapModel.skillSystem.addSkill(10);
        //     }
        // }, 1);
        // this.scheduleOnce(() => {
        //     mapModel.skillSystem.addSkill(7);
        // }, 5);
        // this.scheduleOnce(() => {
        //     mapModel.skillSystem.addSkill(7);
        // }, 8);

        // // test 被动技能
        // this.scheduleOnce(() => {
        //     for (let i = 0; i < 6; i++) {
        //         mapModel.skillSystem.addSkill2(12);
        //     }
        //     myLog.i("被动技能添加了");
        // }, 10);
    }

    onDisable() {
        super.onDisable();

    }

    onDestroy() {
        super.onDestroy();
    }

    start() {
        if (!UserData.getInstance().mapHand) {
            UserData.getInstance().mapHand = 1;
            this.scheduleOnce(() => {
                this.popLayer(constants.layers.HandLayer);
            });
        }
        tyqSDK.eventSendCustomEvent("进入战斗场景", "玩家人数")
        //console.log("mapModel.mapId = ", mapModel.mapId)
        tyqSDK.eventLevelStart(mapModel.mapId)
    }

    initUI() {
        this.refreshExpLayer();
        this.refreshBossHpLayer();
        this.refreshResLayer();
        this.refreshSkillLayer();
    }

    popBuyLifeLayer() {
        if (UserData.getInstance().baoshi < designManager.config.backLifeDiamond) {
            return;
        }
        this.popLayer(constants.layers.BuyLifeLayer);
    }

    // 强弹复活购买界面间隔时间，单位：秒
    getPopBuyLifeTime() {
        return 60 * 3;
    }

    refreshSkillLayer() {
        this.skillBombAd.active = false;
        this.skillBombNum.active = false;
        if (playerModel.skillBombNum > 0) {
            this.skillBombNum.active = true;
            this.setString(this.skillBombNum, playerModel.skillBombNum);
        } else {
            this.skillBombAd.active = true;
        }

        this.skillHealAd.active = false;
        this.skillHealNum.active = false;
        if (playerModel.skillHealNum > 0) {
            this.skillHealNum.active = true;
            this.setString(this.skillHealNum, playerModel.skillHealNum);
        } else {
            this.skillHealAd.active = true;
        }

        this.skillMagnetAd.active = false;
        this.skillMagnetNum.active = false;
        if (playerModel.skillMagnetNum > 0) {
            this.skillMagnetNum.active = true;
            this.setString(this.skillMagnetNum, playerModel.skillMagnetNum);
        } else {
            this.skillMagnetAd.active = true;
        }

        this.skillLifeAd.active = false;
        this.skillLifeNum.active = false;
        if (playerModel.skillLifeNum > 0) {
            this.skillLifeNum.active = true;
            this.setString(this.skillLifeNum, playerModel.skillLifeNum);
        } else {
            this.skillLifeAd.active = true;
        }
    }

    mapRefreshSkillRet() {
        this.refreshSkillLayer();
    }

    updateSecond() {
        // if (mapModel.mapSystem.skillBombCd > 0) {
        //     this.skillBombCd.active = true;
        //     cocosUtil.setRenderableColor(this.skillBombIcon, constants.colors.yin.parseColor());
        //     this.setString(this.skillBombCd, Math.ceil(mapModel.mapSystem.skillBombCd));
        // } else {
        //     this.skillBombCd.active = false;
        //     cocosUtil.setRenderableColor(this.skillBombIcon, Color.WHITE);
        // }
        // if (mapModel.mapSystem.skillHealCd > 0) {
        //     this.skillHealCd.active = true;
        //     cocosUtil.setRenderableColor(this.skillHealIcon, constants.colors.yin.parseColor());
        //     this.setString(this.skillHealCd, Math.ceil(mapModel.mapSystem.skillHealCd));
        // } else {
        //     this.skillHealCd.active = false;
        //     cocosUtil.setRenderableColor(this.skillHealIcon, Color.WHITE);
        // }
        if (mapModel.player.hp / mapModel.player.hpMax < 0.25 && mapModel.player.hp > 0 && !mapModel.healAdCount) {
            // 强制弹出激励视频，观看后，恢复血量
            mapModel.healAdCount++;
            myLog.i("==========血量小于0.25强弹广告治疗");
            sdkManager.openAd("血量小于0.25强弹广告治疗", (st) => {
                if (st == 1) {
                    mapModel.player.useSkillHeal(0.25);
                }
            });
        }

        if (mapModel.player.hp / mapModel.player.hpMax < 0.5 && !this.btnSkillHeal.isBreath) {
            this.btnSkillHeal.isBreath = true;
            cocosUtil.tweenBreath(this.btnSkillHeal);
        }
        if (mapModel.player.hp / mapModel.player.hpMax > 0.5 && this.btnSkillHeal.isBreath) {
            this.btnSkillHeal.isBreath = false;
            Tween.stopAllByTarget(this.btnSkillHeal);
            this.btnSkillHeal.scale = v3(1, 1, 1);
        }
    }

    refreshBossHpLayer() {
        let bossMonster = mapModel.monsterSystem.bossMonster;
        if (bossMonster) {
            this.setProgressBar(this.bossHpProgress, bossMonster.hp / bossMonster.hpMax);
            if (!this.bossHpLayer.active) {
                this.bossHpLayer.active = true;
                Tween.stopAllByTarget(this.bossDamProgressBar);
                this.bossDamProgressBar.progress = this.bossHpProgress.getComponent(ProgressBar).progress;
            }
        } else {
            this.bossHpLayer.active = false;
        }
    }

    bossSubHp(dam: number) {
        let pStart = this.bossHpProgress.getComponent(ProgressBar).progress;
        this.bossDamProgressBar.progress = pStart;

        mapModel.mapLayer.refreshBossHpLayer();
        let pEnd = this.bossHpProgress.getComponent(ProgressBar).progress;

        Tween.stopAllByTarget(this.bossDamProgressBar);
        tween(this.bossDamProgressBar).to(0.5, { progress: pEnd }, { easing: "quadOut" }).start();
    }

    refreshResLayer() {
        this.setString(this.coinNumNode, mapModel.coinNum);
        this.setString(this.diamondNumNode, UserData.getInstance().baoshi);
        this.setString(this.killMonsterNumNode, mapModel.killMonsterNum);
    }

    refreshExpLayer() {
        let row = designManager.getRowById(constants.tableName.expLv, mapModel.expLv);
        if (!row) {
            return;
        }
        let total = row.exp;
        let current = mapModel.expNum;
        if (mapModel.expLv > 1) {
            let lastRow = designManager.getRowById(constants.tableName.expLv, mapModel.expLv - 1);
            total = row.exp - lastRow.exp;
            current = mapModel.expNum - lastRow.exp;
        }
        this.setProgressBar(this.expProgress, current / total);
        this.setString(this.expLvNode, mapModel.expLv);
        // 闪白
        this.expBarShineColor.startShine(constants.materials.shineColor, null, 0.2);

        if (mapModel.expNum >= row.exp && mapModel.player.hp > 0) {
            // 升级了
            this.expLvUpCount++;
            mapModel.expLv++;
            if (mapModel.expLv % designManager.config.check == 0) {
                mapModel.skillAllNum++;
            }
            this.expBarColorIndex++;
            if (this.expBarColorIndex >= this.expBarColorArr.length) {
                this.expBarColorIndex = 0;
            }
            cocosUtil.setRenderableColor(find("bar", this.expProgress), this.expBarColorArr[this.expBarColorIndex]);
            this.refreshExpLayer();
            this.unschedule(this.onSkillSelect);
            this.scheduleOnce(this.onSkillSelect, 0.5);
        }
    }

    onSkillSelect() {
        if (this.expLvUpCount <= 0) {
            return;
        }

        if (mapModel.player.hp > 0 && !playerModel.isRecordAd) {
            this.expProgress.active = false;
            let obj: any = {};
            obj.lvCount = this.expLvUpCount;
            this.popLayer(constants.layers.SkillSelectLayer, obj, () => {
                this.expProgress.active = true;
            });
        }

        if (mapModel.player.hp > 0) {
            this.expLvUpCount = 0;
        }
    }

    popLayer(layerName: string, layerData?: any, layerCb?: Function) {
        if (this.isShowingLayer(layerName)) {
            return;
        }
        this.gameFightPause();
        this.openLayer(layerName, layerData, () => {
            this.gameFightResume();
            if (layerCb) {
                layerCb();
            }
        });
    }

    refreshTimeNode() {
        let timeStr = utilTools.getTimeStr(mapModel.time * 1000, true);
        this.setString(this.timeNode, timeStr);
    }

    gameFightPause() {
        this.mapSystem.fightPause();
    }

    gameFightResume() {
        this.mapSystem.fightResume();
    }

    mapLeaveRet(data: any) {
        UserData.getInstance().mapData = null;
        this.closeLayer();
        this.openLayer(constants.layers.HomeLayer, data);
    }

    commonResRefreshRet(data: any) {
        this.refreshResLayer();
    }

    loadSaveMapData(mapData: any) {
        mapModel.loadSaveData(mapData.mapModel);
        mapModel.mapSystem.loadSaveData(mapData.mapData);
        mapModel.propSystem.loadSaveData(mapData.propData);
        mapModel.weaponSystem.loadSaveData(mapData.weaponData);
        mapModel.skillSystem.loadSaveData(mapData.skillData);
        mapModel.player.loadSaveData(mapData.player);
        mapModel.monsterSystem.loadSaveData(mapData.monsterData);
    }

    saveDataBeforeRet(data: any) {
        if (mapModel.player.hp <= 0) {
            return;
        }
        mapModel.propSystem.saveDataBefore();

        let mapData: any = {};
        mapData.mapModel = mapModel.getSaveData();
        mapData.mapData = mapModel.mapSystem.getSaveData();
        mapData.propData = mapModel.propSystem.getSaveData();
        mapData.weaponData = mapModel.weaponSystem.getSaveData();
        mapData.skillData = mapModel.skillSystem.getSaveData();
        mapData.player = mapModel.player.getSaveData();
        mapData.monsterData = mapModel.monsterSystem.getSaveData();

        UserData.getInstance().mapData = mapData;
    }

    onClickBtnSkillBomb() {
        if (mapModel.mapSystem.skillBombCd > 0) {
            this.createNotice(localText.cd);
            return;
        }
        if (playerModel.skillBombNum > 0) {
            mapModel.mapSystem.useSkillBomb();
            this.refreshSkillLayer();
            return;
        }

        sdkManager.openAd("主动技能-炸弹", (st: number) => {
            if (st == 1) {
                let num = utilTools.getFloatValue(1, 3, true);
                playerModel.skillBombNum += num;
                this.refreshSkillLayer();
            }
        });
    }

    onClickBtnSkillHeal() {
        if (mapModel.mapSystem.skillHealCd > 0) {
            this.createNotice(localText.cd);
            return;
        }
        if (playerModel.skillHealNum > 0) {
            mapModel.mapSystem.useSkillHeal();
            this.refreshSkillLayer();
            return;
        }

        sdkManager.openAd("主动技能-治疗", (st: number) => {
            if (st == 1) {
                playerModel.skillHealNum += 4;
                this.refreshSkillLayer();
            }
        });
    }

    onClickBtnSkillMagnet() {
        if (playerModel.skillMagnetNum > 0) {
            mapModel.mapSystem.useSkillMagnet();
            this.refreshSkillLayer();
            return;
        }

        sdkManager.openAd("主动技能-磁铁", (st: number) => {
            if (st == 1) {
                playerModel.skillMagnetNum++;
                this.refreshSkillLayer();
            }
        });
    }

    onClickBtnSkillLife() {
        if (playerModel.skillLifeNum > 0) {
            return;
        }

        sdkManager.openAd("主动技能-自动复活", (st: number) => {
            if (st == 1) {
                playerModel.skillLifeNum++;
                this.refreshSkillLayer();
            }
        });
    }

    onClickBtnPause(node: Node) {
        this.popLayer(constants.layers.PauseLayer);
    }

    onClickBtnClose(node: Node) {
        serverMsg.send(msgac.mapLeave);
    }

    onClickBtnSkillSelectLayer() {
        this.popLayer(constants.layers.SkillSelectLayer);
    }

    onClickBtnResume() {
        this.gameFightResume();
    }

    onClickBtnBoss() {
        if (mapModel.time < 300) {
            mapModel.time = 295;
        } else if (mapModel.time < 600 && mapModel.time > 305) {
            mapModel.time = 595;
        } else if (mapModel.time > 605) {
            mapModel.time = 895;
        }
    }

    onClickBtnLuckyDraw() {
        // this.popLayer(constants.layers.LuckyDrawLayer);
        this.popLayer(constants.layers.BoxMonsterLayer);
    }

    onClickBtnAccountClear() {
        UserData.getInstance().clearAccountData();
    }

    onClickBtnMonsterAdd() {
        if (!this.monsterAddFlag) {
            this.monsterAddFlag = 0;
        }
        this.monsterAddFlag++;
    }

}

