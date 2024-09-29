// @ts-nocheck

import { Component, find, instantiate, Label, Node, NodePool, UIOpacity, UITransform, v3, _decorator } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NoticeLayer')
export class NoticeLayer extends Component {

    contentLayer: Node;
    textPool: NodePool;
    textItem: Node;

    maxContentWidth: number = 580;
    minContentWidth: number = 150;
    contentBGAdd: number = 150;

    orignHeight: number = 0;

    // 多条飘字之间的y间隔
    spaceY: number = 5;

    status: any = {
        fadeIn: 1,
        delay: 2,
        fadeOut: 3
    };

    // 移动速度，像素/每秒
    speedY: number = 300;
    // 透明度变化速度，透明度/每秒
    speedOpacity: number = 255 / 0.3;
    // 展示不动的时间。单位：秒
    delayTime: number = 0.5;
    // 渐显和渐隐移动的距离
    moveDy: number = 150;

    // 要保证只能有一个处于fadeOut状态，其他的要处于队列等待
    fadeOutNode: Node = null;

    onLoad() {
        this.contentLayer = find("contentLayer", this.node);
        this.textItem = find("contentLayer/textItem", this.node);

        this.textPool = new NodePool();
        this.textPool.put(this.textItem);
        this.textItem = instantiate(this.textItem);

        this.orignHeight = find("content", this.textItem).getComponent(UITransform).height;

    }

    noticeShow(content) {
        var node = this.textPool.get();
        if (!node) {
            node = instantiate(this.textItem);
        }
        node.active = true;

        let contentNode = find("content", node);
        contentNode.getComponent(UITransform).height = this.orignHeight;
        contentNode.getComponent(Label).overflow = Label.Overflow.NONE;
        contentNode.getComponent(Label).string = content + "";
        // 调用这个方法之后，才能在本帧获得准确宽度
        contentNode.getComponent(Label).updateRenderData(true);

        let width = contentNode.getComponent(UITransform).width;
        if (width > this.maxContentWidth) {
            contentNode.getComponent(Label).overflow = Label.Overflow.SHRINK;
            contentNode.getComponent(UITransform).width = this.maxContentWidth;
            contentNode.getComponent(UITransform).height = this.orignHeight * 2 + 10;
            width = this.maxContentWidth;
        } else if (width < this.minContentWidth) {
            width = this.minContentWidth;
        }

        // 设置背景图片宽度和高度
        node.getComponent(UITransform).width = width + this.contentBGAdd;
        node.getComponent(UITransform).height = contentNode.getComponent(UITransform).height + 10;

        node.setPosition(0, -this.moveDy);
        node.moveY = this.moveDy;
        node.moveDy = 0;
        node.setScale(v3(1, 1, 1));
        node.getComponent(UIOpacity).opacity = 0;
        node.status = this.status.fadeIn;
        node.parent = this.contentLayer;

    }

    createNotice(content) {
        this.noticeShow(content + "");
    }

    update(dt: number) {
        let chs = this.contentLayer.children;
        let backArr = [];
        for (let i in chs) {
            let node = chs[i];
            switch (node.status) {
                case this.status.fadeIn:
                    var dy = dt * this.speedY;

                    var pos = node.getPosition();
                    pos.y += dy;
                    node.setPosition(pos);

                    node.moveDy += dy;
                    var opacity = node.getComponent(UIOpacity).opacity + this.speedOpacity * dt;
                    if (opacity > 255) {
                        opacity = 255;
                    }
                    node.getComponent(UIOpacity).opacity = opacity;
                    if (node.moveDy >= node.moveY) {
                        node.moveDy = 0;
                        node.getComponent(UIOpacity).opacity = 255;
                        node.status = this.status.delay;
                        node.time = 0;
                        node.delayTime = this.delayTime;
                    }
                    break;
                case this.status.delay:
                    node.delayTime -= dt;
                    if (node.delayTime <= 0) {
                        node.delayTime = 0;
                        node.status = this.status.fadeOut;
                    }
                    break;
                case this.status.fadeOut:
                    if (this.fadeOutNode && this.fadeOutNode != node) {
                        break;
                    }
                    this.fadeOutNode = node;
                    var dy = dt * this.speedY;

                    var pos = node.getPosition();
                    pos.y += dy;
                    node.setPosition(pos);

                    var opacity = node.getComponent(UIOpacity).opacity - this.speedOpacity * dt;
                    if (opacity < 0) {
                        opacity = 0;
                    }
                    node.getComponent(UIOpacity).opacity = opacity;
                    if (opacity <= 0) {
                        backArr.push(node);
                        this.fadeOutNode = null;
                    }
                    break;
            }
        }
        for (let i in backArr) {
            let node = backArr[i];
            node.parent = null;
            this.textPool.put(node);
        }

        // 修正位置，保证不重叠
        chs = this.contentLayer.children;
        if (chs.length >= 2) {
            let lastNode = chs[chs.length - 1];
            for (let i = chs.length - 2; i >= 0; i--) {
                let node = chs[i];

                let dy = (node.getComponent(UITransform).height + lastNode.getComponent(UITransform).height) * 0.5 + this.spaceY;
                if (node.position.y - lastNode.position.y < dy) {
                    let pos = node.getPosition();
                    pos.y = lastNode.position.y + dy;
                    node.setPosition(pos);
                }
                lastNode = node;
            }
        }
    }
}

