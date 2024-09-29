import { Component, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { AnimationTrack } from '../../base/AnimationTrack';
import { Prop } from './Prop';
const { ccclass, property } = _decorator;

// 宝箱怪金币
@ccclass('Prop1001')
export class Prop1001 extends Component {

    prop: Prop;

    autoGet: boolean = true;
    animationTrack: AnimationTrack;

    init(prop: Prop) {
        this.prop = prop;

        this.animationTrack = cocosUtil.addComponentOnce(this.node, AnimationTrack);
        this.animationTrack.startShowThrow(() => {
            this.prop.playerGetProp();
        });
    }


}

