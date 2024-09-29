import { Color, Component, Material, sp, UIRenderer, v4, Vec4, _decorator } from 'cc';
import { constants } from '../../data/constants';
import { resManager } from '../../manager/resManager';
const { ccclass, property } = _decorator;

@ccclass('ShineColor')
export class ShineColor extends Component {
    duration: number = 0.3;
    _median: number = 0;
    _time: number = 0;

    isSpine: boolean = false;

    uiRenderer: UIRenderer;
    orignMaterial: Material;
    vColor: Vec4;

    onLoad() {
        this.uiRenderer = this.node.getComponent(UIRenderer);
        this.orignMaterial = this.uiRenderer.customMaterial;

        if (this.node.getComponent(sp.Skeleton)) {
            this.isSpine = true;
        }
    }

    setMaterialProperty(val: number) {
        if (this.isSpine) {
            // @ts-ignore 
            let cache: any = this.uiRenderer._materialCache;
            for (let i in cache) {
                let material = cache[i];
                material.setProperty("u_rate", val);
                if (this.vColor) {
                    material.setProperty("u_color", this.vColor);
                }
            }
            return;
        }

        let material = this.uiRenderer.getMaterialInstance(0);
        let uRate = material.passes[0].getHandle("u_rate");
        material.passes[0].setUniform(uRate, val);
        if (this.vColor) {
            let vColor = v4(1, 0, 0, 1);
            let uColor = material.passes[0].getHandle("u_color");
            material.passes[0].setUniform(uColor, this.vColor);
        }
        this.uiRenderer.setMaterialInstance(material, 0);

    }

    update(dt: number) {
        if (this._time > 0) {
            this._time -= dt;
            this._time = this._time < 0 ? 0 : this._time;
            let rate = Math.abs(this._time - this._median) * 2 / this.duration;
            this.setMaterialProperty(rate);
        } else {
            this.removeShineColorMaterial();
        }
    }

    removeShineColorMaterial() {
        this.uiRenderer.customMaterial = this.orignMaterial;
        if (this.isSpine) {
            // spine动画，需要重新激活，否则替换材质后会不显示
            this.uiRenderer.enabled = false;
            this.uiRenderer.enabled = true;
        }
    }

    /**
     * 闪颜色
     * @param materialPath 材质路径 
     * @param color 闪的颜色
     * @param duration 闪的时间
     */
    startShine(materialPath: string, color?: Color, duration: number = 0.3) {
        this.duration = duration;
        this._median = this.duration / 2;

        if (color) {
            this.vColor = v4(color.r / 255, color.g / 255, color.b / 255, color.a / 255);
        } else {
            // 默认闪白
            this.vColor = v4(1, 1, 1, 1);
        }
        resManager.loadAsset(constants.bundles.common, materialPath, Material, null, (err, material) => {
            this._time = this.duration;
            this.uiRenderer.customMaterial = material;
            this.setMaterialProperty(1);
        });
    }
}
