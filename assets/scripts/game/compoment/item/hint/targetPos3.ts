import { Component, tween, UITransform, v3, _decorator } from 'cc';
import { cocosUtil } from '../../../../utils/cocosUtil';
import { mapModel } from '../../../model/mapModel';
import { Hint, HintNames } from './Hint';
const { ccclass, property } = _decorator;

@ccclass('targetPos3')
export class targetPos3 extends Component {

    hint: Hint;

    init(hint: Hint) {
        this.hint = hint;

        this.node.scale = v3(4, 4, 1);
        tween(this.node).to(0.3, { scale: v3(0.9, 0.9, 1) }).to(0.1, { scale: v3(1.1, 1.1, 1) }).to(0.1, { scale: v3(1, 1, 1) }).call(() => {
            this.hint.recycleSelf();
            let worldPos = cocosUtil.convertToWorldSpace(this.node);
            worldPos.y += this.node.getComponent(UITransform).height * 0.5;
            mapModel.hintSystem.addHint(HintNames.comeShine, worldPos, 0, this.hint.extraObj);
        }).start();
    }

}

