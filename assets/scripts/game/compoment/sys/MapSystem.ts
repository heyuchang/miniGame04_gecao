import { BoxCollider2D, director, find, macro, Node, RenderTexture, Sprite, SpriteFrame, tween, Tween, UIOpacity, UITransform, v3, Vec2, Vec3, view, _decorator } from 'cc';
import { tyqSDK } from '../../../tyqSDK/tyqSDK';
import { cocosUtil } from '../../../utils/cocosUtil';
import { utilTools } from '../../../utils/utilTools';
import { constants } from '../../data/constants';
import { physicsWorld } from '../../engine/PhysicsWorld';
import { designManager } from '../../manager/designManager';
import { mapModel } from '../../model/mapModel';
import { playerModel } from '../../model/playerModel';
import { PropItem, UserData } from '../../model/UserData';
import { AnimationCtrl } from '../base/AnimationCtrl';
import { BaseLayer } from '../base/BaseLayer';
import { Bullet } from '../item/bullet/Bullet';
import { Monster } from '../item/monsters/Monster';
import { Prop } from '../item/prop/Prop';
const { ccclass, property } = _decorator;

@ccclass('MapSystem')
export class MapSystem extends BaseLayer {

    mapFightBgLayer: Node;

    staticNode: Node;
    // 炸弹
    bombAnimationCtrl: AnimationCtrl;
    // 预警
    warnAnimationCtrl: AnimationCtrl;
    // 技能炸弹
    skillBombAniCtrl: AnimationCtrl;

    // boss出现位置提示
    bossPosHintAnimationCtrl: AnimationCtrl;

    // 宝箱提示
    boxHintNode: Node;
    boxArrowNode: Node;

    mapRow: any;
    pauseVal: number;

    // 围栏
    wallLayer: Node;
    wallShineNode: Node;
    wallTopNode: Node;
    wallBottomNode: Node;
    wallLeftNode: Node;
    wallRightNode: Node;
    wallTopVal: number;
    wallBottomVal: number;
    wallLeftVal: number;
    wallRightVal: number;
    wallCenterPos: Vec3;

    // 是否停止时间统计
    stopTimeCount: boolean;
    // 经验池产出时间累计
    expTimeCount: number;
    // 击杀怪物数量累计，用于木箱的产生
    killMonsterCount: number;
    // 复活次数
    backlifeCount: number = 0;

    // 技能：炸弹cd
    skillBombCd: number = 0;
    // 技能：治疗cd
    skillHealCd: number = 0;

    nineForArr: any = [
        { x: -1, y: 1 }, { x: 0, y: 1 }, { x: 1, y: 1 },
        { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 },
        { x: -1, y: -1 }, { x: 0, y: -1 }, { x: 1, y: -1 }
    ];

    // Vec3集中缓存
    vec3Obj = {
        nodePos: v3(0, 0, 0),
    };

    onLoad() {
        super.onLoad();

        this.mapFightBgLayer = this.getNodeByPath("map/bg");

        this.wallLayer = this.getNodeByPath("map/wallLayer");
        this.wallTopNode = this.getNodeByPath("map/wallLayer/top");
        this.wallBottomNode = this.getNodeByPath("map/wallLayer/bottom");
        this.wallLeftNode = this.getNodeByPath("map/wallLayer/left");
        this.wallRightNode = this.getNodeByPath("map/wallLayer/right");
        this.wallShineNode = this.getNodeByPath("map/wallLayer/shine");
        this.wallLayer.active = false;

        this.staticNode = this.getNodeByPath("static");

        this.bombAnimationCtrl = this.getNodeByPath("static/bomb").addComponent(AnimationCtrl);
        this.bombAnimationCtrl.node.active = false;

        this.skillBombAniCtrl = this.getNodeByPath("static/skillBomb").addComponent(AnimationCtrl);
        this.skillBombAniCtrl.node.active = false;

        this.warnAnimationCtrl = this.getNodeByPath("static/warn").addComponent(AnimationCtrl);
        this.warnAnimationCtrl.node.active = false;
        this.screenAdapterBG(this.warnAnimationCtrl.node);

        this.bossPosHintAnimationCtrl = this.getNodeByPath("map/bossPosHint").addComponent(AnimationCtrl);
        this.bossPosHintAnimationCtrl.node.active = false;

        this.boxHintNode = this.getNodeByPath("static/boxHint");
        this.boxHintNode.active = false;
        this.boxArrowNode = this.getNodeByPath("static/boxHint/arrow");
        cocosUtil.tweenBreath(this.getNodeByPath("static/boxHint/icon"), 0.4, 1.2);
        cocosUtil.tweenBreath(this.getNodeByPath("static/boxHint/arrow/icon"), 0.2, 1.2);

        // if (playerModel.isInDevelopmentEnvironment()) {
        //     PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Shape;
        // }
        // PhysicsSystem2D.instance.enable = false;

        this.mapRow = designManager.getRowById(constants.tableName.map, mapModel.mapId);
        this.expTimeCount = 0;
        this.pauseVal = 0;
        this.killMonsterCount = 0;
        this.stopTimeCount = false;

        // 镜头视角慢恢复
        this.schedule(this.refreshCamera, 0.5, macro.REPEAT_FOREVER);

        // 开启逻辑帧
        this.schedule(this.updateLogic, 0.1, macro.REPEAT_FOREVER);


    }

    onEnable() {
        super.onEnable();

    }

    start() {
        this.scheduleOnce(() => {
            if (UserData.getInstance().mapData) {
                // 战斗中断恢复的
                return;
            }
            // 初始经验
            for (let i = 0; i < 20; i++) {
                let pos = cocosUtil.getRectPos(mapModel.player.node, 400, 700, 600, 1000, true);
                this.createExp(1, pos, true);
            }
        }, 0.5);

        this.refreshMapFightWindow();
    }

    onDestroy() {
        super.onDestroy();
    }

    initUI() {
        this.initMapFightBg();
        this.initWallLayer();
    }

    initWallLayer() {
        let path = "wall/" + this.mapRow.wall + "_h";
        this.setSpriteFrame2(this.wallTopNode, path);
        this.setSpriteFrame2(this.wallBottomNode, path);

        path = "wall/" + this.mapRow.wall + "_v";
        this.setSpriteFrame2(this.wallLeftNode, path);
        this.setSpriteFrame2(this.wallRightNode, path);
    }

    initMapFightBg() {
        this.mapFightBgLayer.children.forEach((node: Node) => {
            let path = "map/" + this.mapRow.bg;
            this.setSpriteFrame2(node, path);
        });
    }

    refreshMapFightWindow() {
        // 相机跟随
        let pos = mapModel.player.node.getPosition();
        pos.z = mapModel.mapFightCamera.node.getPosition().z;
        mapModel.mapFightCamera.node.setPosition(pos);

        this.refreshMapBgLayer();
    }
    refreshMapBgLayer() {
        // 计算出玩家当前位置是属于哪个格子
        let x = Math.floor((mapModel.player.node.getPosition().x + 512) / 1024);
        let y = Math.floor((mapModel.player.node.getPosition().y + 512) / 1024);
        // 遍历九宫调整位置
        this.nineForArr.forEach((info: any, index: number) => {
            let bgNode = this.mapFightBgLayer.children[index];
            if (!bgNode) {
                return;
            }
            let posX = (x + info.x) * 1024;
            let posY = (y + info.y) * 1024;
            bgNode.setPosition(posX, posY);
        });
    }

    getSaveData() {
        let data: any = {};
        data.expTimeCount = this.expTimeCount;
        data.killMonsterCount = this.killMonsterCount;
        data.backlifeCount = this.backlifeCount;
        data.skillBombCd = this.skillBombCd;
        data.skillHealCd = this.skillHealCd;
        data.stopTimeCount = this.stopTimeCount;

        // 镜头高度
        data.orthoHeight = mapModel.mapFightCamera.orthoHeight;

        // 围栏
        let wall = null;
        if (this.wallLayer.active) {
            wall = {};
            wall.centerPos = this.wallCenterPos;
        }
        data.wall = wall;

        return data;
    }

    loadSaveData(data: any) {
        this.expTimeCount = data.expTimeCount;
        this.killMonsterCount = data.killMonsterCount;
        this.backlifeCount = data.backlifeCount;
        this.skillBombCd = data.skillBombCd;
        this.skillHealCd = data.skillHealCd;
        this.stopTimeCount = data.stopTimeCount;

        mapModel.mapFightCamera.orthoHeight = data.orthoHeight;

        // 围栏
        if (data.wall) {
            let wall = data.wall;
            this.showWallLayer(wall.centerPos);
        }
    }

    bossDead() {
        this.stopTimeCount = false;
        mapModel.mapSystem.hideWallLayer();
        if (mapModel.monsterSystem.bossMonster.isBoss == 2) {
            // 最后一个BOSS
            mapModel.mapSystem.doSettlement(true);
        } else {
            mapModel.createMapLevelArr();
        }
        mapModel.monsterSystem.bossMonster = null;
        mapModel.mapLayer.refreshBossHpLayer();
    }

    doSettlement(isWin: boolean = false) {
        let row = designManager.getRowById(constants.tableName.map, mapModel.mapId);
        let arr: PropItem[] = [];

        // 金币
        let coinNum = mapModel.coinNum + Math.floor(mapModel.time / 60 * 100) + Math.floor(mapModel.killMonsterNum / 5);
        arr.push({ Id: constants.propIds.coin, Num: coinNum });

        // 装备
        for (let i in mapModel.equipIdArr) {
            arr.push({ Id: mapModel.equipIdArr[i], Num: 1 });
        }

        // 必拿奖励
        if (row.reward4) {
            arr = arr.concat(mapModel.parseDesignPropArr(row.reward4));
        }

        // 通关奖励 
        if (isWin && row.reward5) {
            arr = arr.concat(mapModel.parseDesignPropArr(row.reward5));
        }

        // 按照品质排序
        utilTools.sortArr(arr, (prop1, prop2) => {
            let row1 = designManager.getRowById(constants.tableName.prop, prop1.Id);
            let row2 = designManager.getRowById(constants.tableName.prop, prop2.Id);
            if (row1.quality < row2.quality) {
                return true;
            }
            return false;
        });

        let obj: any = {};

        let time = Math.floor(mapModel.time);
        obj.time = time;
        let levelData = UserData.getInstance().getLevelData(mapModel.mapId);
        if (time >= levelData.Time) {
            levelData.Time = time;
            UserData.getInstance().setLevelData(levelData);
            obj.isBest = true;
        }
        obj.bestTime = levelData.Time;

        UserData.getInstance().getRewardProp(arr);

        obj.isWin = isWin;
        obj.award = arr;
        mapModel.mapLayer.popLayer(constants.layers.SettlementLayer, obj);
       
        tyqSDK.eventLevelEnd(mapModel.mapId, isWin)
        tyqSDK.showInterstitialAd()
        if (time >= 15 * 60) {
            //  myLog.i("第" + mapModel.mapId +"关-15分钟")
            tyqSDK.eventSendCustomEvent("第" + mapModel.mapId + "关-15分钟")
        } else if (time >= 10 * 60) {
            // myLog.i("第" + mapModel.mapId +"关-10分钟")
            tyqSDK.eventSendCustomEvent("第" + mapModel.mapId + "关-10分钟")
        } else if (time >= 5 * 60) {
            //  myLog.i("第" + mapModel.mapId +"关-5分钟")
            tyqSDK.eventSendCustomEvent("第" + mapModel.mapId + "关-5分钟")
        }
    }

    /**
     * 获得距离参考点pos最近的怪物或者宝箱节点
     * @param pos 参考点，默认是玩家位置
     */
    getMinDisTargetNode(pos?: Vec3): Node {
        let minDis = 999999;
        let minDisNode = null;
        mapModel.monsterSystem.forVisibleMonster((monster: Monster) => {
            if (!monster.node.activeInHierarchy) {
                return;
            }
            let dis = monster.distancePlayer;
            if (pos) {
                dis = Vec2.distance(pos, monster.node.position);
            }
            if (dis < minDis) {
                minDis = monster.distancePlayer;
                minDisNode = monster.node;
            }
        });

        mapModel.propSystem.forVisiblePropCollider((prop: Prop) => {
            let propNode = prop.node;
            let propPos = propNode.getPosition();
            if (!pos) {
                pos = mapModel.player.node.position;
            }
            let tmpDis = Vec2.distance(pos, propPos);
            if (tmpDis > minDis) {
                return;
            }
            minDis = tmpDis;
            minDisNode = propNode;
        });

        return minDisNode;
    }

    // 开始播放预警动画
    startWarning(aniName: string) {
        if (!aniName) {
            return;
        }
        this.warnAnimationCtrl.node.active = true;
        this.warnAnimationCtrl.playAnimation(aniName, false, () => {
            this.warnAnimationCtrl.node.active = false;
            if (aniName == "11") {
                // 镜头拉远
                this.cameraMove(mapModel.cameraOrthoHeight + 200);
            }
        });
    }

    // 镜头拉动
    cameraMove(orthoHeight: number) {
        if (orthoHeight == mapModel.mapFightCamera.orthoHeight) {
            return;
        }
        tween(mapModel.mapFightCamera).to(3, { orthoHeight: orthoHeight }).start();
    }

    // 主动技能：治疗
    useSkillHeal() {
        // this.skillHealCd = designManager.config.hp_cd;
        playerModel.skillHealNum--;
        mapModel.player.useSkillHeal(0.25);
    }

    useSkillMagnet() {
        playerModel.skillMagnetNum--;
        mapModel.propSystem.getProp(constants.propIds.magnet);
    }

    // 主动技能：炸弹
    async useSkillBomb() {
        // this.skillBombCd = designManager.config.boom_cd;
        playerModel.skillBombNum--;
        this.skillBombAniCtrl.node.active = true;
        this.skillBombAniCtrl.playAnimation("1", false, () => {
            this.skillBombAniCtrl.node.active = false;
        });
        await cocosUtil.waitTimeAsync(this, 0.8);
        // 屏幕内的小怪全部阵亡
        let hitArr = [];
        mapModel.monsterSystem.forVisibleMonster((monster: Monster) => {
            if (monster.row.type != constants.monsterTypes.common) {
                return;
            }
            let dam = monster.hp;
            monster.waitHit = true;
            let hitInfo: any = {};
            hitInfo.monster = monster;
            hitInfo.dam = dam;
            hitArr.push(hitInfo);
        });
        mapModel.monsterSystem.batchHitMonster(hitArr);

        // 怪物子弹全部消失
        mapModel.bulletSystem.forVisibleMonsterBullet((bullet: Bullet) => {
            bullet.recycleSelf();
        });
    }

    // 玩家吃到炸弹
    bomb() {
        // 屏幕闪白
        this.bombAnimationCtrl.node.active = true;
        this.bombAnimationCtrl.playAnimationOnce("bomb", () => {
            this.bombAnimationCtrl.node.active = false;
        });

        // 范围内的小怪全部阵亡
        let hitArr = [];
        mapModel.monsterSystem.forVisibleMonster((monster: Monster) => {
            if (monster.row.type != constants.monsterTypes.common) {
                return;
            }
            if (monster.distancePlayer > 300) {
                return;
            }
            let dam = monster.hp;
            monster.waitHit = true;
            let hitInfo: any = {};
            hitInfo.monster = monster;
            hitInfo.dam = dam;
            hitArr.push(hitInfo);
        });
        mapModel.monsterSystem.batchHitMonster(hitArr);

        // 怪物子弹全部消失
        mapModel.bulletSystem.forVisibleMonsterBullet((bullet: Bullet) => {
            bullet.recycleSelf();
        });
    }

    // 怪物阵亡
    monsterDead(id: number, worldPos: Vec3) {
        let row = designManager.getRowById(constants.tableName.monster, id);

        // 经验产生
        if (utilTools.isProb(row.expProb)) {
            let exp = utilTools.getFloatValue(row.expMin, row.expMax, true);
            this.createExp(exp, worldPos);
        }

        // 击杀数量统计
        mapModel.killMonsterNum++;
        mapModel.mapLayer.refreshResLayer();

        // 木箱产生
        this.killMonsterCount++;
        if (this.killMonsterCount >= 10) {
            this.killMonsterCount -= 10;
            // 玩家周围随机位置
            let pos = cocosUtil.getAroundPos(mapModel.player.node, 300, view.getVisibleSize().height * 2, true);
            mapModel.propSystem.addProp(constants.propIds.box1, pos);
        }

        // 道具掉落
        if (row.propProbArr) {
            for (let i = 0; i < row.propProbArr.length; i++) {
                let prob = row.propProbArr[i];
                if (!utilTools.isProb(prob)) {
                    continue;
                }
                let propId = row.propIdArr[i];
                let propNum = row.propNumArr[i];
                let direction: Vec3 = cocosUtil.getCircleDirectionArr(1)[0];
                let pos = worldPos.clone().add(direction.multiplyScalar(80));
                let extraObj: any = {};
                extraObj.num = propNum;
                mapModel.propSystem.addProp(propId, pos, extraObj);
            }
        }

        // 每日任务
        switch (row.type) {
            case constants.monsterTypes.common:
                playerModel.addDayTaskNum(4, 1);
                break;
            case constants.monsterTypes.elite:
                playerModel.addDayTaskNum(5, 1);
                break;
            case constants.monsterTypes.boss:
                playerModel.addDayTaskNum(6, 1);
                break;
            default:
                break;
        }

        // // test
        // if (Math.random() > 0.5) {
        //     // 炸弹
        //     mapModel.propSystem.addProp(501, worldPos);
        // } else {
        //     // 磁铁
        //     mapModel.propSystem.addProp(301, worldPos);
        // }
    }

    // 经验产生
    createExp(exp: number, worldPos: Vec3, force: boolean = false) {
        if (!force) {
            if (exp > mapModel.expPool) {
                exp = mapModel.expPool;
            }
            if (exp <= 0) {
                return;
            }
            mapModel.expPool -= exp;
        }
        let extraObj: any = {};
        extraObj.num = exp;
        mapModel.propSystem.addProp(constants.propIds.exp, worldPos, extraObj);
    }

    addExp(num: number) {
        mapModel.expNum += num;
        mapModel.mapLayer.refreshExpLayer();
    }

    addCoin(num: number) {
        mapModel.coinNum += num;
        mapModel.mapLayer.refreshResLayer();
    }

    adjustInWall(node: Node | Vec3, height: number = 0) {
        if (!this.wallLayer.active) {
            return;
        }

        let tf = null;
        let pos = null;
        if (node instanceof Node) {
            tf = node.getComponent(UITransform);
            pos = node.getPosition(this.vec3Obj.nodePos);
        } else {
            pos = node;
        }
        if (pos.x >= this.wallRightVal) {
            pos.x = this.wallRightVal;
        }
        if (pos.x <= this.wallLeftVal) {
            pos.x = this.wallLeftVal;
        }
        if (pos.y >= this.wallTopVal) {
            pos.y = this.wallTopVal;
        }
        if (tf) {
            height = tf.height;
        }
        if (pos.y <= this.wallBottomVal + height * 0.4) {
            pos.y = this.wallBottomVal + height * 0.4;
        }
        if (node instanceof Node) {
            node.position = pos;
        }
    }

    showWallLayer(centerPos?: Vec3) {
        this.wallLayer.active = true;
        let hWidth = 33;
        let hHeight = 51;
        let vWidth = 32;
        let vHeight = 27;
        if (mapModel.mapId == 2) {
            hWidth = 36;
            hHeight = 32;
            vWidth = 43;
            vHeight = 55;
        }

        // 宽1200 高1500
        let width = Math.ceil(1200 / hWidth) * hWidth;
        let height = Math.ceil(1500 / vHeight) * vHeight;

        if (!centerPos) {
            centerPos = mapModel.player.node.getPosition().clone();
            centerPos.y += 400;
        }
        this.wallCenterPos = centerPos;

        let top = this.wallTopNode;
        top.getComponent(UITransform).width = width;
        top.getComponent(UITransform).height = hHeight;
        top.getComponent(BoxCollider2D).size.width = width;
        top.getComponent(BoxCollider2D).size.height = hHeight;
        let pos = v3(centerPos.x, centerPos.y + height * 0.5, 0);
        top.setPosition(pos);

        let bottom = this.wallBottomNode;
        bottom.getComponent(UITransform).width = top.getComponent(UITransform).width;
        bottom.getComponent(UITransform).height = top.getComponent(UITransform).height;
        bottom.getComponent(BoxCollider2D).size.width = top.getComponent(BoxCollider2D).size.width;
        bottom.getComponent(BoxCollider2D).size.height = top.getComponent(BoxCollider2D).size.height;
        pos = v3(centerPos.x, centerPos.y - height * 0.5, 0);
        bottom.setPosition(pos);

        let left = this.wallLeftNode;
        left.getComponent(UITransform).width = vWidth;
        left.getComponent(UITransform).height = height;
        left.getComponent(BoxCollider2D).size.width = vWidth;
        left.getComponent(BoxCollider2D).size.height = height;
        pos = v3(centerPos.x - width * 0.5 + vWidth * 0.5, centerPos.y, 0);
        left.setPosition(pos);

        let right = this.wallRightNode;
        right.getComponent(UITransform).width = left.getComponent(UITransform).width;
        right.getComponent(UITransform).height = left.getComponent(UITransform).height;
        right.getComponent(BoxCollider2D).size.width = left.getComponent(BoxCollider2D).size.width;
        right.getComponent(BoxCollider2D).size.height = left.getComponent(BoxCollider2D).size.height;
        pos = v3(centerPos.x + width * 0.5 - vWidth * 0.5, centerPos.y, 0);
        right.setPosition(pos);

        this.refreshWallSideVal();

        this.wallTopNode.getComponent(UIOpacity).opacity = 0;
        this.wallBottomNode.getComponent(UIOpacity).opacity = 0;
        this.wallLeftNode.getComponent(UIOpacity).opacity = 0;
        this.wallRightNode.getComponent(UIOpacity).opacity = 0;
        this.wallShineNode.active = true;
        this.wallShineNode.position = v3(centerPos.x, centerPos.y - 15);
        this.wallShineNode.getComponent(UITransform).width = width * 0.5 + 10;
        this.wallShineNode.getComponent(UITransform).height = height * 0.5 + 10;

        let shineOpacity = this.wallShineNode.getComponent(UIOpacity);
        Tween.stopAllByTarget(shineOpacity);
        tween(shineOpacity).to(0.3, { opacity: 255 }).to(0.3, { opacity: 0 }).union().repeat(3).call(() => {
            this.wallShineNode.active = false;
            this.wallTopNode.getComponent(UIOpacity).opacity = 255;
            this.wallBottomNode.getComponent(UIOpacity).opacity = 255;
            this.wallLeftNode.getComponent(UIOpacity).opacity = 255;
            this.wallRightNode.getComponent(UIOpacity).opacity = 255;
        }).start();

    }

    refreshWallSideVal() {
        this.wallTopVal = this.wallTopNode.position.y - 20;
        this.wallBottomVal = this.wallBottomNode.position.y + 30;
        this.wallLeftVal = this.wallLeftNode.position.x + 20;
        this.wallRightVal = this.wallRightNode.position.x - 20;
    }

    hideWallLayer() {
        this.wallLayer.active = false;
    }

    fightPause() {
        this.pauseVal++;
        if (this.pauseVal > 1) {
            return;
        }

        let camera = mapModel.mapFightCamera;
        let width = view.getVisibleSize().width;
        let height = view.getVisibleSize().height;
        let texture = new RenderTexture();
        texture.reset({ width: width, height: height });

        // 原生平台上会出现花屏（UI摄像机残留问题），因此暂时隐藏UI根节点，等待截屏完成后再恢复
        find("Canvas/Camera").active = false;

        camera.targetTexture = texture;
        // 执行渲染，单个渲染会报错，那就直接全部渲染一次吧（单个渲染：cc.director.root.pipeline.render([camera.camera]);）
        director.root.frameMove(0);
        camera.targetTexture = null;

        find("Canvas/Camera").active = true;

        let sp = new SpriteFrame();
        sp.texture = texture;

        mapModel.mapLayer.fightCapNode.getComponent(Sprite).spriteFrame = sp;
        mapModel.mapLayer.fightCapNode.active = true;

        this.node.active = false;
    }

    fightResume() {
        this.pauseVal--;
        if (this.pauseVal > 0) {
            return;
        }
        let camera = mapModel.mapFightCamera;
        camera.targetTexture = null;

        this.node.active = true;
        mapModel.mapLayer.fightCapNode.active = false;
        mapModel.player.stopMove();
    }

    updateLogic(dt: number) {
        if (!this.stopTimeCount) {
            // 时间
            mapModel.time += dt;

            // 经验池
            this.expTimeCount += dt;
            while (this.expTimeCount >= 1) {
                this.expTimeCount--;
                if (mapModel.expTypeRow) {
                    if (mapModel.time >= mapModel.expTypeRow.startTime && mapModel.time <= mapModel.expTypeRow.endTime) {
                        mapModel.expPool += mapModel.expTypeRow.expSpeed;
                    } else {
                        mapModel.expTypeRow = designManager.getRowById(constants.tableName.expType, mapModel.expTypeRow.id + 1);
                    }
                    this.setString(mapModel.mapLayer.expNumNode, mapModel.expPool);
                }
            }
        }
        mapModel.mapLayer.refreshTimeNode();

        if (this.skillBombCd > 0) {
            this.skillBombCd -= dt;
        } else {
            this.skillBombCd = 0;
        }
        if (this.skillHealCd > 0) {
            this.skillHealCd -= dt;
        } else {
            this.skillHealCd = 0;
        }

        // 各个子系统
        mapModel.weaponSystem.updateLogic(dt);
        mapModel.monsterSystem.updateLogic(dt);
        mapModel.skillSystem.updateLogic(dt);
        mapModel.propSystem.updateLogic(dt);
        mapModel.bulletSystem.updateLogic(dt);
    }

    updatePhysicsWorld() {
        physicsWorld.step(mapModel.mapFightLayer);
    }

    updateBoxHintLayer(dt: number) {
        let minDis = 999999;
        let minProp: Prop = null;
        let playerPos = mapModel.player.node.position;
        mapModel.propSystem.forAllPropById(constants.propIds.box2, (prop: Prop) => {
            let node = prop.node;
            let pos = node.position;
            let tf = node.getComponent(UITransform);
            let add = (tf.width + tf.height) * 0.5;
            if ((Math.abs(pos.x - playerPos.x) <= mapModel.visibleHalfSize.width + add)
                && (Math.abs(pos.y - playerPos.y) <= mapModel.visibleHalfSize.height + add)) {
                return;
            }
            let dis = Vec2.distance(pos, playerPos);
            if (dis < minDis) {
                minDis = dis;
                minProp = prop;
            }
        });
        if (!minProp) {
            this.boxHintNode.active = false;
            return;
        }
        this.boxHintNode.active = true;

        let direction = minProp.node.getPosition().subtract(playerPos);
        let angle = utilTools.radianToAngle(Math.atan2(direction.y, direction.x));
        this.boxArrowNode.angle = angle;

        let propPos = minProp.node.position;
        let gap = 80;

        let x = propPos.x - playerPos.x;
        let halfWidth = view.getVisibleSize().width * 0.5 - gap;
        if (x > halfWidth) {
            x = halfWidth;
        } else if (x < -halfWidth) {
            x = -halfWidth;
        }

        let y = propPos.y - playerPos.y;
        let halfHeight = view.getVisibleSize().height * 0.5 - gap;
        if (y > halfHeight - 320) {
            y = halfHeight - 320;
        } else if (y < -halfHeight) {
            y = -halfHeight;
        }

        this.boxHintNode.position = v3(x, y);


    }

    // 获得3选1数组
    getSelectItemArr() {
        let arr = [];

        // 武器
        let hasFull = false;
        if (mapModel.weaponSystem.weaponArr.length >= constants.design.weaponNum) {
            hasFull = true;
        }
        let row = designManager.getLastRow(constants.tableName.weapon);
        for (let i = 1; i <= row.type; i++) {
            let info = mapModel.weaponSystem.getWeaponInfoByType(i);
            if (info) {
                let row = designManager.getRowById(constants.tableName.weapon, info.id);
                if (row.lv >= constants.design.maxLv) {
                    continue;
                }
            } else if (hasFull) {
                continue;
            }
            let item: any = {};
            item.name = constants.tableName.weapon;
            item.weight = 1;
            item.type = i;
            item.info = info;
            arr.push(item);
        }

        // 主动技能
        hasFull = false;
        if (mapModel.skillSystem.skillArr.length >= constants.design.skillNum) {
            hasFull = true;
        }
        row = designManager.getLastRow(constants.tableName.skill);
        for (let i = 1; i <= row.type; i++) {
            let info = mapModel.skillSystem.getSkillInfoByType(i);
            if (info) {
                let row = designManager.getRowById(constants.tableName.skill, info.id);
                if (row.lv >= constants.design.maxLv) {
                    continue;
                }
            } else if (hasFull) {
                continue;
            }
            let item: any = {};
            item.name = constants.tableName.skill;
            item.weight = 1;
            item.type = i;
            item.info = info;
            arr.push(item);
        }

        // 被动技能
        hasFull = false;
        if (mapModel.skillSystem.skill2Arr.length >= constants.design.skillNum) {
            hasFull = true;
        }
        row = designManager.getLastRow(constants.tableName.skill2);
        for (let i = 1; i <= row.type; i++) {
            let info = mapModel.skillSystem.getSkill2InfoByType(i);
            if (info) {
                let row = designManager.getRowById(constants.tableName.skill2, info.id);
                if (row.lv >= constants.design.maxLv) {
                    continue;
                }
            } else if (hasFull) {
                continue;
            }
            let item: any = {};
            item.name = constants.tableName.skill2;
            item.weight = 1;
            item.type = i;
            item.info = info;
            arr.push(item);
        }


        arr = utilTools.getRowsByWeightAndNum(arr, 3);
        while (arr.length < 3) {
            // 补充鸡腿
            let item: any = {};
            item.name = constants.tableName.prop;
            item.id = constants.propIds.addHpPercent;
            arr.push(item);
        }

        return arr;
    }

    refreshCamera(dt: number) {
        if (mapModel.mapFightCamera.orthoHeight <= mapModel.cameraOrthoHeight) {
            return;
        }
        mapModel.mapFightCamera.orthoHeight--;
    }

    update(dt: number) {
        this.updateBoxHintLayer(dt);
    }

}

