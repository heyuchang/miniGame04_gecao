import { Animation, Component, find, v3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { AnimationCtrl } from '../../base/AnimationCtrl';
import { Prop } from './Prop';
const { ccclass, property } = _decorator;

// 宝箱
@ccclass('Prop701')
export class Prop701 extends Component {

    prop: Prop;

    notContact: boolean;
    animationCtrl: AnimationCtrl;

    init(prop: Prop) {
        this.prop = prop;

        this.notContact = true;

        this.animationCtrl = cocosUtil.addComponentOnce(find("ani", this.node), AnimationCtrl);
        this.animationCtrl.node.active = true;
        this.animationCtrl.playAnimationOnce("1", () => {
            this.animationCtrl.playAnimation("2", true);
            this.notContact = false;
        });

        this.prop.bodyNode.scale = v3(0, 0, 1);
        this.prop.bodyNode.getComponent(Animation).play("boxAni");
    }

    contactStart() {
        this.animationCtrl.node.active = false;
    }

}

