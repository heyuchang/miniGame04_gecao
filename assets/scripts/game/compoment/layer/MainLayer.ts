import { EditBox, Label, Node, sp, Sprite, tween, v3, Vec3, VideoPlayer, view, _decorator } from 'cc';
import { myLog } from '../../../common/myLog';
import { Channel, tyqAdManager } from '../../../tyqSDK/tyqAdManager';
import { ChannelFlag, tyqSDK } from '../../../tyqSDK/tyqSDK';
import { utilTools } from '../../../utils/utilTools';
import { constants } from '../../data/constants';
import { audioManager } from '../../manager/audioManager';
import { designManager } from '../../manager/designManager';
import { RedPointLogicMgr } from '../../manager/RedPointLogicMgr';
import { mapModel } from '../../model/mapModel';
import { playerModel } from '../../model/playerModel';
import { UserData } from '../../model/UserData';
import { BaseLayer } from '../base/BaseLayer';
import { TopUILayer } from './TopUILayer';
const { ccclass, property } = _decorator;

@ccclass('MainLayer')
export class MainLayer extends BaseLayer {

    toggles: Node[] = [];
    togglesLock = [true, false, false, false, true];

    @property({ type: Node }) btnRedBox: Node = null;
    @property({ type: Node }) handNode: Node = null;

    emailRedPointNode: Node;
    daySignRedPointNode: Node;
    dayTaskRedPointNode: Node;
    vipRedPointNode: Node;
    duihuanBg: Node;

    btnShare: Node;
    videoPlayer: Node;

    shurukuang: EditBox;

    onLoad() {
        // this.chooseDesignResolution()
        // let mapData = designManager.getTable(constants.tableName.map)
        // let curMap = UserData.getInstance().getCurMap() - 1

        // this.setSpriteFrame2(this.getNodeByPath("Map/map_name"), "homeLayer/map_name" + (mapData[curMap].id), null, constants.bundles.wwqVec)
        // this.setSpriteFrame2(this.getNodeByPath("Map/btnMap/icon"), "homeLayer/ui_map" + (mapData[curMap].id), null, constants.bundles.wwqVec)
        // this.getNodeByPath("btnGo/Label").getComponent(Label).string = "X" + mapData[curMap].energy
        // let leveldata = UserData.getInstance().getLevelData(UserData.getInstance().getCurMap())
        // this.getNodeByPath("Map/timeLabel").getComponent(Label).string = "最高生存时间：" + utilTools.getTimeStrChinese(leveldata.Time * 1000)
        // RedPointLogicMgr.ins().setRPointView(this.getNodeByPath("Map/btnMap/icon"),null, true)

        this.emailRedPointNode = this.getNodeByPath("btnLetter/redPoint");
        this.daySignRedPointNode = this.getNodeByPath("btnsLeft/btnDaySign/redPoint");
        this.dayTaskRedPointNode = this.getNodeByPath("btnsLeft/btnDayTask/redPoint");
        this.vipRedPointNode = this.getNodeByPath("btnsRight/btnVip/redPoint");

        this.btnShare = this.getNodeByPath("btnsRight/btnShare");

        let btnPyramid = this.getNodeByPath("btnsLeft/btnPyramid")
        if (btnPyramid) {
            if (UserData.getInstance().roleLv < designManager.config.qingdianLock) {
                btnPyramid.getComponent(Sprite).color = constants.colors.yin.parseColor()
            }
        }

        let btnDayTask = this.getNodeByPath("btnsLeft/btnDayTask")
        if (btnDayTask) {
            if (UserData.getInstance().roleLv < designManager.config.taksLock) {
                btnDayTask.getComponent(Sprite).color = constants.colors.yin.parseColor()
            }
        }

        let btnGuess = this.getNodeByPath("btnsLeft/btnGuess")
        if (btnGuess) {
            if (UserData.getInstance().roleLv < designManager.config.caiquanLock) {
                btnGuess.getComponent(Sprite).color = constants.colors.yin.parseColor()
            }
        }

        // this.duihuanBg = this.getNodeByPath("patbg1");
        // this.duihuanBg.active = false

        // this.videoPlayer = this.getNodeByPath("VideoPlayer");
        // this.videoPlayer.active = false

       // this.shurukuang = this.duihuanBg.getChildByName("EditBox").getComponent(EditBox)
    }

    onClickBtnDuihuan() {
        this.duihuanBg.active = true
        let tishi = this.duihuanBg.getChildByName("tishilabel")
        tishi.active = false
    }

    onClickBtnCloseTuihuan() {
        this.duihuanBg.active = false
    
    }
    onClickBtnTuihuan() {
        let tishi = this.duihuanBg.getChildByName("tishilabel")
        tishi.active = false
        let str = this.shurukuang.getComponent(EditBox).string
        let strArr = str.split("_")
        if (strArr.length > 1) {
            if (strArr[0] == "tyq") {
                let curPath = ""
                let index = strArr[1]
                curPath = "https://oss.game.xmtyq.com/game/video_wxgame/bpxt/tyq_" + (index) + ".mp4?token=6d4ae1582d1f97a26ccf250d29313750"
                tishi.active = false
                this.videoPlayer.getComponent(VideoPlayer).remoteURL = curPath
                this.videoPlayer.active = true
            } else {
                tishi.active = true
            }
        } else {
            tishi.active = true
        }
    }

    onEnable() {
        super.onEnable();
        // this.addEventArr([
        //     msgac.mapEnter,
        // ]);

        if ((tyqSDK.channel == ChannelFlag.WECHAT_JJWS || tyqSDK.channel == ChannelFlag.WECHAT_MRTGD) && tyqAdManager.getChannel() != Channel.OPPO_MINI_GAME) {
            this.btnShare.active = true;
        } else {
            this.btnShare.active = false;
        }

    }

    onDisable() {
        super.onDisable();
    }

    onDestroy() {
        super.onDestroy();
    }

    refreshRedPoint() {
        this.emailRedPointNode.active = playerModel.hasLetterAward();
        this.daySignRedPointNode.active = playerModel.hasDaySignAward();
        this.dayTaskRedPointNode.active = UserData.getInstance().roleLv >= designManager.config.taksLock && playerModel.hasDayTaskAward();
        this.vipRedPointNode.active = playerModel.hasVipAward();
    }

    start() {
        let btnset = this.getNodeByPath("btnSet")
        let btnEmail = this.getNodeByPath("btnLetter")
        let TopUILayer = this.node.parent.parent.getChildByName("TopUILayer")

        if (btnset.position.y > TopUILayer.position.y - 84) {
            btnset.position = v3(btnset.position.x, TopUILayer.position.y - 84, btnset.position.z)
            btnEmail.position = v3(btnEmail.position.x, TopUILayer.position.y - 84, btnEmail.position.z)
        }

        let screen1 = view.getVisibleSize()
        if (screen1.width / screen1.height >= 720 / 1440) {
            let btnGo = this.getNodeByPath("btnGo")
            btnGo.position = new Vec3(btnGo.position.x, -360, btnGo.position.z)
            let Map = this.getNodeByPath("Map")
            Map.position = new Vec3(Map.position.x, 30, Map.position.z)
        }
        if (UserData.getInstance()._isShowOpenLevel && UserData.getInstance().getCurMap() > 1) {
            UserData.getInstance()._isShowOpenLevel = false
            this.initMapLevel(UserData.getInstance().getCurMap() - 1, false)
            let role = this.getNodeByPath("Map/role")
            role.active = false
            tween(role).delay(1).call(function () {
                role.active = true
            }).start()
            let self = this
            tween(this.getNodeByPath("Map/btnMap")).delay(0.35).to(0.35, { scale: v3(0, 0, 0) }).call(function () {
                self.initMapLevel(UserData.getInstance().getCurMap(), true)
            }).to(0.2, { scale: v3(1, 1, 1) }).start()
        } else {
            this.initMapLevel(UserData.getInstance().getCurMap(), true)
        }

        let arr = []
        let propArr = designManager.getRowsByType(constants.tableName.CNTM, 1)
        for (let i = 0; i < propArr.length; i++) {
            let data = propArr[i].award[0]
            arr.push(data[0])
        }
        if (UserData.getInstance().isHaveProp(arr)) {
            this.btnRedBox.removeFromParent()
        } else {
            tween(this.btnRedBox).to(3, { position: v3(180, 220, 0) }).to(3, { position: v3(-180, 120, 0) }).to(3, { position: v3(180, 20, 0) }).to(3, { position: v3(-180, -90, 0) }).to(3, { position: v3(180, 80, 0) }).to(3, { position: v3(-180, -80, 0) }).to(3, { position: v3(180, 20, 0) })
                .to(3, { position: v3(-180, 120, 0) }).to(3, { position: v3(180, 220, 0) }).to(3, { position: v3(-180, 350, 0) }).union().repeatForever().start()
        }

        // let role = this.getNodeByPath("Map/role")
        // if (UserData.getInstance().getCurMap() == 1) {
        //     tween(role).set({ scale: v3(1.5, 1.5, 0) }).to(2.5, { position: v3(-138, -48, 0) }).set({ scale: v3(-1.5, 1.5, 0) }).to(2.5, { position: v3(90, -48, 0) }).to(0.8, { position: v3(90, 0, 0) }).to(0.8, { position: v3(130, 0, 0) }).set({ scale: v3(1.5, 1.5, 0) }).to(0.5, { position: v3(90, 0, 0) }).to(0.8, { position: v3(90, -48, 0) }).union().repeatForever().start()
        // } else if (UserData.getInstance().getCurMap() == 2) {
        //     this.setSpineData2(role, constants.bundles.monster, "monster22/ncg", function () {
        //         role.getComponent(sp.Skeleton).animation = "walk"
        //         role.getComponent(sp.Skeleton).loop = true
        //     })
        //     tween(role).set({ scale: v3(1.5, 1.5, 0) }).to(2.5, { position: v3(-138, -48, 0) }).set({ scale: v3(-1.5, 1.5, 0) }).to(2.5, { position: v3(90, -48, 0) }).union().repeatForever().start()
        // } else {
        //     role.active = false
        // }
        // mapModel.loadMapRes((percent: number) => {
        // }, () => { })
        RedPointLogicMgr.ins().setRPointView(this.getNodeByPath("Map/btnChapter"), null, UserData.getInstance().checkChapterCanReward())
        RedPointLogicMgr.ins().setRPointView(this.getNodeByPath("Map/btnPortal"), null, UserData.getInstance().getPatrolState() <= 0)
    }

    initMapLevel(level, isaction) {

        let mapData = designManager.getTable(constants.tableName.map)
        this.setSpriteFrame2(this.getNodeByPath("Map/map_name"), "homeLayer/map_name" + (mapData[level - 1].id), null, constants.bundles.wwqVec)

        let iconIndex = (mapData[level - 1].id - 1) % 2 + 1;
        this.setSpriteFrame2(this.getNodeByPath("Map/btnMap/icon"), "homeLayer/ui_map" + iconIndex, null, constants.bundles.wwqVec)

        this.getNodeByPath("btnGo/Label").getComponent(Label).string = "X" + mapData[level - 1].energy
        let leveldata = UserData.getInstance().getLevelData(UserData.getInstance().getCurMap())
        this.getNodeByPath("Map/timeLabel").getComponent(Label).string = "最高生存时间：" + utilTools.getTimeStrChinese(leveldata.Time * 1000)

        let role = this.getNodeByPath("Map/role")
        if (isaction) {

            tween(role).stop()
            let skin = "skin1";
            if (level == 3 || level == 4) {
                skin = "skin2";
            }
            if (level == 1 || level == 3) {
                role.getComponent(sp.Skeleton).setSkin(skin);
                tween(role).set({ scale: v3(1.5, 1.5, 0) }).to(2.5, { position: v3(-138, -48, 0) }).set({ scale: v3(-1.5, 1.5, 0) }).to(2.5, { position: v3(90, -48, 0) }).to(0.8, { position: v3(90, 0, 0) }).to(0.8, { position: v3(130, 0, 0) }).set({ scale: v3(1.5, 1.5, 0) }).to(0.5, { position: v3(90, 0, 0) }).to(0.8, { position: v3(90, -48, 0) }).union().repeatForever().start()
            } else if (level == 2 || level == 4) {
                this.setSpineData2(role, constants.bundles.monster, "monster22/ncg", function () {
                    role.getComponent(sp.Skeleton).animation = "walk"
                    role.getComponent(sp.Skeleton).loop = true
                    role.getComponent(sp.Skeleton).setSkin(skin);
                })
                tween(role).set({ scale: v3(1.5, 1.5, 0) }).to(2.5, { position: v3(-138, -48, 0) }).set({ scale: v3(-1.5, 1.5, 0) }).to(2.5, { position: v3(90, -48, 0) }).union().repeatForever().start()
            } else {
                role.active = false
            }
        }

        this.handNode.active = false;
        let curMap = UserData.getInstance().getCurMap() - 1
        if (UserData.getInstance().power >= mapData[curMap].energy) {
            this.handNode.active = true;
        }
    }

    onClickBtnGo() {
        // let node = (this.getNodeByPath("prop_coin1"))
        // // let node = new Node
        // // node.addComponent(Sprite)
        // let btnGo = this.getNodeByPath("ui")
        // UserData.getInstance().showGetAnimal(btnGo, node, [0, 0], [0, 800])
        // return

        audioManager.playEffect("btnClick")

        let curMap = UserData.getInstance().getCurMap() - 1
        let mapData = designManager.getTable(constants.tableName.map)

        if (UserData.getInstance().power < mapData[curMap].energy) {
            this.createNotice("体力不足")
            return
        }

        UserData.getInstance().usePower(0 - mapData[curMap].energy)
        let topUILayer = this.node.parent.parent.getChildByName("TopUILayer")
        topUILayer.getComponent(TopUILayer).showUseAnimal(1, 0 - mapData[curMap].energy)

        playerModel.addDayTaskNum(7, mapData[curMap].energy);

        mapModel.enterMapWithMapId(UserData.getInstance().getCurMap());
    }

    onClickBtnMap() {
        myLog.i("btnMap")
        audioManager.playEffect("btnClick")

        this.closeLayer()
        this.openLayer(constants.layers.LevelLayer);
    }

    onClickBtnChapter() {
        audioManager.playEffect("btnClick")

        myLog.i("btnMap")
        this.closeLayer()
        this.openLayer(constants.layers.ChapterLayer, { chapter: 11 });
    }

    onClickBtnPartol() {
        audioManager.playEffect("btnClick")
        this.openLayer(constants.layers.PatrolLayer);
        RedPointLogicMgr.ins().setRPointView(this.getNodeByPath("Map/btnPortal"), null, false)
    }

    onClickBtnSet() {
        audioManager.playEffect("btnClick")
        this.openLayer(constants.layers.SettingLayer);
    }

    onClickBtnDayTask() {
        audioManager.playEffect("btnClick")
        if (UserData.getInstance().roleLv < designManager.config.taksLock) {
            this.createNotice("角色" + designManager.config.taksLock + "级后解锁");
            return
        }
        this.openLayer(constants.layers.DayTaskLayer);
    }

    onClickBtnDaySign() {
        audioManager.playEffect("btnClick")
        this.openLayer(constants.layers.DaySignLayer);
    }

    onClickBtnGuess() {
        audioManager.playEffect("btnClick")
        if (UserData.getInstance().roleLv < designManager.config.caiquanLock) {
            this.createNotice("角色" + designManager.config.caiquanLock + "级后解锁");
            return
        }
        this.openLayer(constants.layers.GuessGameLayer);
    }

    onClickBtnPyramid() {
        audioManager.playEffect("btnClick")
        if (UserData.getInstance().roleLv < designManager.config.qingdianLock) {
            this.createNotice("角色" + designManager.config.qingdianLock + "级后解锁");
            return
        }
        this.openLayer(constants.layers.PyramidDrawLayer);
    }

    onClickOpenLayer(event, data) {
        audioManager.playEffect("btnClick")
        this.openLayer(data);
    }

    onClickBtnLetter() {
        audioManager.playEffect("btnClick")
        this.openLayer(constants.layers.LetterLayer);
    }

    onClickBtnEquipCompose() {
        audioManager.playEffect("btnClick")
        this.openLayer(constants.layers.BlessLayer);
    }

    onClickBtnSkinChange() {
        audioManager.playEffect("btnClick")
        this.openLayer(constants.layers.SkinChangeLayer);
    }

    onClickBtnVip() {
        audioManager.playEffect("btnClick")
        this.openLayer(constants.layers.VipLayer);
    }

    onClickBtnShare() {
        audioManager.playEffect("btnClick")
        this.openLayer(constants.layers.ShareLayer);
        tyqSDK.eventSendCustomEvent("参与活动分享")
    }

}

