import { Button, Component, Node, Prefab, Sprite, SpriteFrame, tween, UITransform, v3, view, _decorator } from 'cc';
import { myLog } from '../../../common/myLog';
import { tyqSDK } from '../../../tyqSDK/tyqSDK';
import { cocosUtil } from '../../../utils/cocosUtil';
import { constants } from '../../data/constants';
import { audioManager } from '../../manager/audioManager';
import { designManager } from '../../manager/designManager';
import { layerManager } from '../../manager/layerManager';
import { ResLoader, resManager } from '../../manager/resManager';
import { playerModel } from '../../model/playerModel';
import { ScrollViewUtil } from '../base/ScrollViewUtil';

const { ccclass, property } = _decorator;

@ccclass('BaseUILayer')
export class BaseUILayer extends Component {

    // 资源管理类
    private resLoader: ResLoader = new ResLoader();

    public layerId: number = -1;
    public layerData: any = {};

    @property
    isShowBanner: Boolean = false;

    onLoad() {
        // super.onLoad();
        // this.initLayout()
    }

    onEnable() {
        if (this.isShowBanner && !playerModel.isRecordAd) {
            //  myLog.i("展示banner")
            tyqSDK.showBannerAd()
        }
    }


    getScreenScale() {
        let screen1 = view.getVisibleSize()
        let resolute = view.getDesignResolutionSize()
        let scale = 1
        if (screen1.width / screen1.height <= 720 / 1280) {
            scale = screen1.width / resolute.width
        } else {
            scale = screen1.height / resolute.height
        }
        return scale
    }

    toast(content) {
        layerManager.createNotice(content);
    }

    onDisable() {
        if (this.isShowBanner) {
            tyqSDK.hideBannerAd()
        }
    }

    onDestroy() {
    }

    setSpriteFrame2(node: Node, name: string, showCb?: Function, bundleName1 = constants.bundles.icon) {
        if (!name) {
            return;
        }
        if (!cocosUtil.isValid(node)) {
            return;
        }
        let sprite = node.getComponent(Sprite);
        if (!cocosUtil.isValid(sprite)) {
            return;
        }
        sprite.enabled = false;
        node["loadName"] = name;

        let bundleName = bundleName1;
        let path = name

        resManager.loadSpriteFrame(bundleName, path, (err, spriteFrame: SpriteFrame) => {
            if (err) {
                return;
            }
            if (!cocosUtil.isValid(node)) {
                return;
            }
            if (!cocosUtil.isValid(sprite)) {
                return;
            }
            if (node["loadName"] != name) {
                return;
            }
            this.resLoader.addAsset(spriteFrame);
            sprite.enabled = true;
            sprite.spriteFrame = spriteFrame;
            if (showCb) {
                showCb(sprite.node);
            }
        });
    }

    openLayer(layerName: string, data?: any, cb?: Function, showCb?: Function) {
        // 默认每个弹窗只允许同时显示一个
        if (typeof (data) == "function") {
            cb = data;
            data = null;
        }
        layerManager.openSingleLayer(layerName, data, cb, (baseLayer: BaseUILayer, prefab: Prefab) => {
            if (baseLayer.resLoader && prefab) {
                baseLayer.resLoader.addAsset(prefab);
            }
            if (showCb) {
                showCb();
            }
        });
    }

    addTopUILayer(layerName) {
        resManager.loadAsset(constants.bundles.layer, layerName, Prefab, null, (err, prefab) => {
            if (err) {
                myLog.e("LayerManager.openLayer error:" + err.message, layerName, err);
                return;
            }


            let node = cocosUtil.instantiate(prefab);
            let com = node.getComponent(layerName) || node.addComponent(layerName);

            // 添加到节点上后，会马上触发onLoad和onEnable回调，而start方法是在首次执行update之前被调用
            node.parent = this.node;
        });
    }

    onClickClose() {
        this.closeLayer()
    }

    closeLayer(layerId?: number | string) {
        if (!layerId) {
            layerId = this.layerId;
        }
        if (layerId && layerId != -1) {
            layerManager.closeLayer(layerId);
            return;
        }
        this.node.destroy();
    }

    stringToArr(str: string) {
        let index = str.indexOf("[")
        let endIndex = str.indexOf("]")
        let newStr = str.substring(index + 1, endIndex)
        return newStr.split(",")
    }

    fitScrollView(curview: Node, minHeigth, maxHeigth) {
        let windowSize = view.getVisibleSize();
        let resolute = view.getDesignResolutionSize()
        let scale = 1
        if (windowSize.width / windowSize.height <= 720 / 1280) {
            scale = windowSize.width / resolute.width
        } else {
            scale = windowSize.height / resolute.height
        }
        curview.getComponent(UITransform).height = Math.min(maxHeigth, minHeigth + (windowSize.height / scale / 2 - 1280 / 2))
    }

    fitNodeWidget(node: Node, posy) {
        let windowSize = view.getVisibleSize();
        let resolute = view.getDesignResolutionSize()
        let scale = 1
        if (windowSize.width / windowSize.height <= 720 / 1280) {
            scale = windowSize.width / resolute.width
        } else {
            scale = windowSize.height / resolute.height
        }
        node.position = v3(node.position.x, 0 - windowSize.height / scale / 2 + posy, node.position.z)
        console.log("fitNodeWidget " + node.name, node.position.y)
    }

    scrollViewSetData(scrollViewNode: Node, arr: any, refreshItemFunc?: Function, data?: any, notResetPos?: boolean) {
        let scrollViewUtil = scrollViewNode.getComponent(ScrollViewUtil);
        if (!scrollViewUtil) {
            return;
        }
        scrollViewUtil.setData(arr, (itemUI: Node, item: any, index: number) => {
            if (refreshItemFunc) {
                refreshItemFunc(itemUI, item, index, data);
            }
            //  this.addButtonListener(itemUI);
        });
    }

    setImageCustomSize(node: Node, size) {
        let width = node.getComponent(UITransform).width
        let height = node.getComponent(UITransform).height
        let scale = Math.min(size / width, size / height)
        let newWidth = width * scale
        let newHeight = height * scale
        node.getComponent(UITransform).width = newWidth
        node.getComponent(UITransform).height = newHeight
        //node.scale = v3(scale, scale, 1)
    }

    addButtonHander(btnComponent: Node | Button, target: Node, com: string, hander: string, customEventData?: any) {
        if (btnComponent instanceof Button) {
        } else {
            if (btnComponent.getComponent(Button)) {
                btnComponent = btnComponent.getComponent(Button)
            } else {
                btnComponent = btnComponent.addComponent(Button);
            }
        }
        btnComponent.transition = Button.Transition.SCALE;
        let eventHander = new Component.EventHandler();
        eventHander.target = target;
        eventHander.component = com;
        eventHander.handler = hander;
        eventHander.customEventData = customEventData;
        btnComponent.clickEvents = [eventHander];
    }

    showGetReward(rewardArr) {
        audioManager.playEffect("coin")

        rewardArr.forEach((element, index) => {
            let propData = designManager.getRowById(constants.tableName.prop, element.Id)
            let icon = "prop/" + propData.icon
            if (propData.type == 11) {
                let weaponData = designManager.getRowById(constants.tableName.weapon, propData.weaponid)
                icon = "weapon/" + weaponData.icon
            }
            if (propData.type == 1) {
                this.playCoinFlyAnim(8, icon, v3(0, 60, 0), v3(200, 600, 0), 40)
            } else if (propData.type == 10) {
                this.playCoinFlyAnim(8, icon, v3(0, -60, 0), v3(-300, 600, 0), 40)
            } else if (propData.type == 9) {
                this.playCoinFlyAnim(8, icon, v3(0, -60, 0), v3(50, 600, 0), 40)
            } else if (propData.type == 8 || propData.type == 11 || propData.type == 17) {
                this.playCoinFlyAnim(element.Num, icon, v3(0, 0, 0), v3(-150, -600, 0), 20, 100, index * 0.02)
            } else {
                this.playCoinFlyAnim(8, icon, v3(0, 0, 0), v3(-150, -600, 0), 20, 100, index * 0.01)
            }
        });
    }


    /**金币落袋具体实现方法 */
    protected playCoinFlyAnim(count: number, iconpath, startPos, endPos, r: number = 50, iconSize = 0, delay = 0) {
        //金币分散成圆

        let points = this.getCirclePoints(r, startPos, count);
        let coinNodeList = points.map(pos => {
            var coin = new Node("Sprite");
            coin.addComponent(Sprite);
            if (iconSize > 0) {
                let self = this
                let fun = function (sprite) {
                    self.setImageCustomSize(sprite, iconSize)
                }
                this.setSpriteFrame2(coin, iconpath, fun)
            } else {
                this.setSpriteFrame2(coin, iconpath)
            }
            coin.layer = this.node.layer
            // cc.find('Canvas').addChild(coin);
            this.node.addChild(coin);
            coin.setPosition(pos.x, pos.y, 0);
            coin.scale = v3(0, 0, 0)
            tween(coin).to(0.2, { scale: v3(1.2, 1.2, 1.2) }).to(0.2, { scale: v3(1, 1, 1) }).union().repeatForever().start()
            return {
                node: coin,
                startPos: startPos,
                midPos: pos,
                endPos: endPos,
                dis: this.calcDistance(pos, endPos)
            }
        })

        //执行动作
        let i = 0;
        coinNodeList.forEach((item, idx) => {
            i++;
            tween(item.node)
                .to(0.15, { position: v3(item.midPos.x, item.midPos.y, 0) })//初始位置
                .delay(idx * 0.05 + 0.5 + delay)
                .to(0.35, { position: v3(item.endPos.x, item.endPos.y, 0) })//终点
                .call(() => {
                    item.node.destroy();
                })
                .union()
                .start()
        });
    }

    protected getCirclePoints(r: number, pos, count: number, randomScope: number = 50) {
        let points = []
        for (let i = 0; i < count; i++) {
            let radians = (Math.PI / 180) * Math.round(360 / count)
            let x = pos.x + r * Math.sin(radians * i)
            let y = pos.y + r * Math.cos(radians * i)
            points.unshift(v3(x + Math.random() * randomScope, y + Math.random() * randomScope, 0))
        }
        return points
    }

    /**
* 已知两点求距离
* @param {cc.Vec2} pos1
* @param {cc.Vec2} pos2
*/
    public calcDistance(pos1, pos2) {
        let xdiff = pos1.x - pos2.x;
        let ydiff = pos1.y - pos2.y;
        let dis = Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5);
        return dis;
    };
}

