import { Component, find, Tween, tween, UIOpacity, _decorator } from 'cc';
import { Hint } from './Hint';
const { ccclass, property } = _decorator;

@ccclass('targetPos')
export class targetPos extends Component {

    hint: Hint;
    body2Opacity: UIOpacity;

    init(hint: Hint) {
        this.hint = hint;

        if (!this.body2Opacity) {
            this.body2Opacity = find("body2", this.node).getComponent(UIOpacity);
        }
        Tween.stopAllByTarget(this.body2Opacity);

        this.body2Opacity.opacity = 80;
        tween(this.body2Opacity).to(0.2, { opacity: 255 }).to(0.2, { opacity: 80 }).union().repeatForever().start();

        let time = this.hint.extraObj;
        this.scheduleOnce(() => {
            this.hint.recycleSelf();
        }, time);
    }

}

