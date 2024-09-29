import { Component, tween, UIOpacity, UITransform, _decorator } from 'cc';
import { Hint } from './Hint';
const { ccclass, property } = _decorator;

@ccclass('feiBiao')
export class feiBiao extends Component {

    hint: Hint;

    init(hint: Hint) {
        this.hint = hint;

        let tf = this.hint.bodyNode.getComponent(UITransform);
        tf.width = this.hint.extraObj.width;
        tf.height = this.hint.extraObj.height;

        let uiOpacity = this.getComponent(UIOpacity);
        uiOpacity.opacity = 255;

        tween(uiOpacity).to(0.3, { opacity: 0 }).call(() => {
            this.hint.recycleSelf();
        }).start();

    }

}

