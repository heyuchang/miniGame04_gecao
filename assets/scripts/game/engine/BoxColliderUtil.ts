import { BoxCollider2D, Component, Enum, Rect, Size, Vec2, _decorator } from 'cc';
import { EDITOR } from 'cc/env';
import { physicsGroup } from '../other/physicsGroup';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('BoxColliderUtil')
@executeInEditMode(true)
export class BoxColliderUtil extends Component {

    @property
    protected _offset = new Vec2();
    @property
    get offset() {
        return this._offset;
    }
    set offset(v) {
        this._offset = v;
    }

    @property
    private _size = new Size(1, 1);
    @property
    get size() {
        return this._size;
    }
    set size(v) {
        this._size = v;
    }

    @property
    tag = 0;

    @property({ type: Enum(physicsGroup) })
    group = physicsGroup.DEFAULT;

    @property
    isSync = false;

    public worldPoints = [
        new Vec2(),
        new Vec2(),
        new Vec2(),
        new Vec2(),
    ];

    public worldAabb = new Rect();

    contactColliderObj: any = {};
    contactBeginCb: Function;
    contactEndCb: Function;

    onDisable() {
        // 通知碰撞中的碰撞结束了
        for (let i in this.contactColliderObj) {
            let collider = this.contactColliderObj[i];
            if (!collider) {
                continue;
            }
            this.contactEnd(collider);
        }
    }

    private getContactKey(collider: BoxColliderUtil) {
        return this.uuid + "_" + collider.uuid;
    }

    updateCollider() {
        const aabb = this.worldAabb;
        aabb.x = this.offset.x - this.size.width * 0.5;
        aabb.y = this.offset.y - this.size.height * 0.5;
        aabb.width = this.size.width;
        aabb.height = this.size.height;

        const wp0 = this.worldPoints[0];
        const wp1 = this.worldPoints[1];
        const wp2 = this.worldPoints[2];
        const wp3 = this.worldPoints[3];

        aabb.transformMat4ToPoints(this.node.worldMatrix, wp0, wp1, wp2, wp3);

        let minX = Math.min(wp0.x, wp1.x, wp2.x, wp3.x);
        let maxX = Math.max(wp0.x, wp1.x, wp2.x, wp3.x);
        let minY = Math.min(wp0.y, wp1.y, wp2.y, wp3.y);
        let maxY = Math.max(wp0.y, wp1.y, wp2.y, wp3.y);

        aabb.x = minX;
        aabb.y = minY;
        aabb.width = maxX - minX;
        aabb.height = maxY - minY;
    }

    setContactBegin(cb: Function) {
        this.contactBeginCb = cb;
    }
    setContactEnd(cb: Function) {
        this.contactEndCb = cb;
    }

    contactBegin(collider: BoxColliderUtil) {
        const key1 = this.getContactKey(collider);
        const key2 = collider.getContactKey(this);
        if (!this.contactColliderObj[key1]) {
            this.contactColliderObj[key1] = collider;
            if (this.contactBeginCb) {
                this.contactBeginCb(this, collider);
            }
        }

        if (!collider.contactColliderObj[key2]) {
            collider.contactColliderObj[key2] = this;
            if (collider.contactBeginCb) {
                collider.contactBeginCb(collider, this);
            }
        }
    }
    contactEnd(collider: BoxColliderUtil) {
        const key1 = this.getContactKey(collider);
        const key2 = collider.getContactKey(this);

        let collider1 = this.contactColliderObj[key1];
        if (collider1 && collider1 == collider) {
            this.contactColliderObj[key1] = undefined;
            if (this.contactEndCb) {
                this.contactEndCb(this, collider);
            }
        }

        let collider2 = collider.contactColliderObj[key2];
        if (collider2 && collider2 == this) {
            collider.contactColliderObj[key2] = undefined;
            if (collider.contactEndCb) {
                collider.contactEndCb(collider, this);
            }
        }
    }

    update() {
        // @ts-ignore
        if (!EDITOR || cc.GAME_VIEW) {
            return;
        }
        if (!this.isSync) {
            return;
        }
        let boxCollider = null;
        let colliderArr = this.getComponents(BoxCollider2D);
        for (let i = 0; i < colliderArr.length; i++) {
            let collider = colliderArr[i];
            if (collider.tag == this.tag) {
                boxCollider = collider;
                break;
            }
        }
        if (!boxCollider) {
            return;
        }

        this.offset.x = boxCollider.offset.x;
        this.offset.y = boxCollider.offset.y;

        this.size.width = boxCollider.size.width;
        this.size.height = boxCollider.size.height;
    }

}

