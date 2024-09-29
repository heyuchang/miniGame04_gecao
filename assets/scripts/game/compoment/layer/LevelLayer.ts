import { instantiate, Label, Node, PageView, Sprite, _decorator } from 'cc';
import { myLog } from '../../../common/myLog';
import { constants } from '../../data/constants';
import { audioManager } from '../../manager/audioManager';
import { designManager } from '../../manager/designManager';
import { UserData } from '../../model/UserData';
import { BaseUILayer } from './BaseUILayer';

const { ccclass, property } = _decorator;

@ccclass('LevelLayer')
export class LevelLayer extends BaseUILayer {
    @property({ type: Node, tooltip: "地图名字" }) mapName: Node = null;
    @property({ type: Node, tooltip: "地图节点" }) mapItem: Node = null;
    @property({ type: Node, tooltip: "pageView" }) pageContent: Node = null;
    @property({ type: Node, tooltip: "选择按钮" }) selectBtn: Node = null;

    @property({ type: Label, tooltip: "地图详情" }) mapInfo: Label = null;
    @property({ type: PageView, tooltip: "地图" }) mapPage: PageView = null;


    _curPageId = 0
    _curOpenLevel = 1

    onLoad() {
        let mapData = designManager.getRowsByType(constants.tableName.map, constants.mapTypes.main)
        myLog.i("----- LevelLayer", mapData)
        this._curOpenLevel = UserData.getInstance().openLevel
        mapData.forEach((element, index) => {
            let item = instantiate(this.mapItem)
            this.pageContent.addChild(item)
            let icon = item.getChildByName("icon")
            let iconIndex = (mapData[index].id - 1) % 2 + 1;
            this.setSpriteFrame2(icon, "homeLayer/ui_map" + iconIndex, null, constants.bundles.wwqVec)
            if (mapData[index].id <= this._curOpenLevel) {
                icon.getComponent(Sprite).color = constants.colors.white.parseColor()
                item.getChildByName("lock").active = false
            } else {
                icon.getComponent(Sprite).color = constants.colors.yin.parseColor()
                item.getChildByName("lock").active = true
            }
        });
    }

    start() {
        let curMap = UserData.getInstance().getCurMap() - 1
        // this.setPage(curMap)
        this.mapPage.scrollToPage(curMap)
        this.setPage(curMap)
    }

    setPage(index) {
        let mapData = designManager.getTable(constants.tableName.map)
        this.setSpriteFrame2(this.mapName, "homeLayer/map_name" + (mapData[index].id), null, constants.bundles.wwqVec)

        this.mapInfo.string = mapData[index].mapInfo

        console.log("mapData[index].id=", mapData[index].id)
        this._curPageId = mapData[index].id
        this.selectBtn.active = mapData[index].id <= this._curOpenLevel

    }

    scrowPage(event) {
        myLog.i("event ", event)
        this.setPage(event._curPageIdx)
    }

    onEnable() {
    }

    onDisable() {
    }

    onDestroy() {
    }

    chooseMap() {
        UserData.getInstance().setCurMap(this._curPageId)
        this.openLayer(constants.layers.HomeLayer);
        this.closeLayer()
        audioManager.playEffect("btnClick")

    }

    backHome() {
        audioManager.playEffect("btnClick")

        myLog.i("backHome")
        this.openLayer(constants.layers.HomeLayer);
        this.closeLayer()
    }

}

