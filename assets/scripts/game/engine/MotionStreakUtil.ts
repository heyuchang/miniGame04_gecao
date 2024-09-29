import { Texture2D, UIRenderer, Vec2, _decorator } from "cc";
const { ccclass, property } = _decorator;


class Point {
    public point = new Vec2();
    public dir = new Vec2();
    public distance = 0;
    public time = 0;

    constructor(point?: Vec2, dir?: Vec2) {
        if (point) this.point.set(point);
        if (dir) this.dir.set(dir);
    }

    public setPoint(x, y) {
        this.point.x = x;
        this.point.y = y;
    }

    public setDir(x, y) {
        this.dir.x = x;
        this.dir.y = y;
    }
}

@ccclass('MotionStreakUtil')
export class MotionStreakUtil extends UIRenderer {
    public static Point = Point;

    /**
     * @en The fade time to fade.
     * @zh 拖尾的渐隐时间，以秒为单位。
     * @example
     * motionStreak.fadeTime = 3;
     */
    @property
    fadeTime = 1;

    /**
     * @en The minimum segment size.
     * @zh 拖尾之间最小距离。
     * @example
     * motionStreak.minSeg = 3;
     */
    @property
    minSeg = 10;

    /**
     * @en The stroke's width.
     * @zh 拖尾的宽度。
     * @example
     * motionStreak.stroke = 64;
     */
    @property
    stroke = 10;

    /**
     * @en The texture of the MotionStreak.
     * @zh 拖尾的贴图。
     * @example
     * motionStreak.texture = newTexture;
     */
    @property(Texture2D)
    texture: Texture2D;

    /**
     * @en The fast Mode.
     * @zh 是否启用了快速模式。当启用快速模式，新的点会被更快地添加，但精度较低。
     * @example
     * motionStreak.fastMode = true;
     */
    @property
    fastMode: boolean = true;

    public get points() {
        return this._points;
    }


    private _points: Point[] = [];

    onLoad() {
        if (!this.texture) {
            // 动态加载拖尾纹理
        }
    }

    public onEnable() {
        super.onEnable();
        this.reset();
    }

    protected _flushAssembler() {
        const assembler = MotionStreakUtil.Assembler.getAssembler(this);

        if (this._assembler !== assembler) {
            this._assembler = assembler;
        }

        if (!this.renderData) {
            if (this._assembler && this._assembler.createData) {
                this._renderData = this._assembler.createData(this);
                this.renderData!.material = this.material;
                this._updateColor();
            }
        }
    }

    /**
     * @en Remove all living segments of the ribbon.
     * @zh 删除当前所有的拖尾片段。
     * @example
     * // Remove all living segments of the ribbon.
     * myMotionStreak.reset();
     */
    public reset() {
        this._points.length = 0;
        if (this.renderData) this.renderData.clear();
    }

    public lateUpdate(dt) {
        if (this._assembler) this._assembler.update(this, dt);
    }

    /**
     * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
     */
    public _render(render: any) {
        if (this.texture) {
            render.commitComp(this, this.renderData, this.texture, this._assembler, null);
        }
    }
}
