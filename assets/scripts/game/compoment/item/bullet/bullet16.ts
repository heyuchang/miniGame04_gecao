import { Component, _decorator } from 'cc';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 葱-满级-甩出的子弹
@ccclass('bullet16')
export class bullet16 extends Component {

    bullet: Bullet;
    contactNotHide: boolean = true;


}

