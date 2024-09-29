import { Component, tween, Label,  Node, Sprite, _decorator, UITransform, v3, Tween } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('BtnLayer')
export class BtnLayer extends Component {

    bolInit = false
    intCheckTime = 1
    runTime: 0;
    runTimeLast: 0;
    tween: Tween<Node>;

    @property({ type: Label, tooltip: "发光" }) light: Node = null;

    onLoad() {
        this.bolInit = false;
        this.runTime = 0;
        this.runTimeLast = 0;
        this.intCheckTime = 1;
        this.tween = null;
        this.node.getChildByName("light").active = false

    }

    setStart() {
        if (this.node.parent && this.tween == null) {
            this.runTime = 0;
            this.runTimeLast = 0;
            if (this.node.getComponent(Sprite).spriteFrame == null)
                this.node.getComponent(Sprite).spriteFrame = this.node.parent.getComponent(Sprite).spriteFrame;
                
            this.node.getComponent(UITransform).width = this.node.parent.getComponent(UITransform).width;
            this.node.getComponent(UITransform).height = this.node.parent.getComponent(UITransform).height;

            //光放大
            let nodeLight = this.node.getChildByName("light");
            let xscale = this.node.parent.getComponent(UITransform).width / nodeLight.getComponent(UITransform).width;
            let yscale = this.node.parent.getComponent(UITransform).height / nodeLight.getComponent(UITransform).height;
            let scale = Math.max(xscale, yscale);
            nodeLight.scale = v3(scale,scale,1);
            this.node.getChildByName("light").active =true

            this.tween = tween(nodeLight).show().set({ position: v3(-(this.node.parent.getComponent(UITransform).width + nodeLight.getComponent(UITransform).width) * 0.5, 0) }).to(0.8, { position: v3((this.node.parent.getComponent(UITransform).width + nodeLight.getComponent(UITransform).width) * 0.5, 0, 0) }).hide().delay(0.2 + Math.random() * 0.5).union().repeatForever();
            this.tween.start();
        }
    }

    setStop() {
        if (this.tween) {
            this.tween.stop();
            this.tween = null;
            this.node.getChildByName("light").active =false
            this.node.getChildByName("light").position = v3(-(this.node.parent.getComponent(UITransform).width + this.node.getChildByName("light").getComponent(UITransform).width) * 0.5, 0,0);
        }
    };

    update(dt) {
        this.runTime += dt;
        // if(!this.bolInit)
        // {
        //     this.bolInit = true;
        //     this.setStart();
        // }
        if (this.runTime > this.intCheckTime) {
            this.runTime = 0;
            if (this.node.parent.getComponent(Sprite).color.toHEX("#rrggbb").toLowerCase() == "ffffff") {
                this.setStart();
            }
            else this.setStop();
        }
    }
}

