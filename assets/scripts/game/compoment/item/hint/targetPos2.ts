import { Component, find, Tween, tween, UIOpacity, v3, _decorator } from 'cc';
import { Hint } from './Hint';
const { ccclass, property } = _decorator;

@ccclass('targetPos2')
export class targetPos2 extends Component {

    hint: Hint;
    body2Opacity: UIOpacity;

    init(hint: Hint) {
        this.hint = hint;

        if (!this.body2Opacity) {
            this.body2Opacity = find("body2", this.node).getComponent(UIOpacity);
        }
        Tween.stopAllByTarget(this.body2Opacity);

        this.body2Opacity.opacity = 0;
        tween(this.body2Opacity).to(0.5, { opacity: 255 }).start();

        this.node.scale = v3(1, 1, 1);
        tween(this.node).to(0.6, { scale: v3(0.2, 0.2, 1) }).start();

        this.hint.extraObj(this);

        this.scheduleOnce(() => {
            this.hint.recycleSelf();
        }, 1);

    }

}

