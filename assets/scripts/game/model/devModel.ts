import { cocosUtil } from "../../utils/cocosUtil";
import { utilTools } from "../../utils/utilTools";
import { constants } from "../data/constants";
import { audioManager } from "../manager/audioManager";
import { designManager } from "../manager/designManager";
import { layerManager } from "../manager/layerManager";
import { mapModel } from "./mapModel";
import { playerModel } from "./playerModel";

// 开发阶段，为了调试方便，把单例放入window
if (cocosUtil.isDesktopBrowser()) {
    window.designManager = designManager;
    window.audioManager = audioManager;
    window.utilTools = utilTools;
    window.constants = constants;
    window.layerManager = layerManager;

    window.mapModel = mapModel;
    window.playerModel = playerModel;
}