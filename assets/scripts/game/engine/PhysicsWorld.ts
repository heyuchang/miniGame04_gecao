import { Intersection2D, Node, PhysicsSystem2D, _decorator } from 'cc';
import { myLog } from '../../common/myLog';
import { utilTools } from '../../utils/utilTools';
import { BoxColliderUtil } from './BoxColliderUtil';
const { ccclass, property } = _decorator;


class PhysicsWorld {

    private static _instance: PhysicsWorld = null;
    private cellSize = 100;

    private colliderArr: any[];
    private posToColliderArr: any = {};

    public static getInstance() {
        if (this._instance == null) {
            this._instance = new PhysicsWorld();

            // myLog.i(PhysicsSystem2D.instance.collisionMatrix);
        }
        return this._instance;
    }

    private getPosKey(x: number, y: number): string {
        return "" + x + "_" + y;
    }

    private forColliderRectKeyArr(collider: BoxColliderUtil, cb: Function) {
        const rect = collider.worldAabb;

        let minX = Math.floor(rect.x / this.cellSize);
        let maxX = Math.ceil((rect.x + rect.width) / this.cellSize);

        let minY = Math.floor(rect.y / this.cellSize);
        let maxY = Math.ceil((rect.y + rect.height) / this.cellSize);

        for (let i = minX; i <= maxX; i++) {
            for (let j = minY; j <= maxY; j++) {
                let key = this.getPosKey(i, j);
                cb(key);
            }
        }
    }

    private addIntoPosToColliderArr(collider: BoxColliderUtil) {
        this.forColliderRectKeyArr(collider, (key: string) => {
            let arr = this.posToColliderArr[key];
            if (!arr) {
                arr = [];
                this.posToColliderArr[key] = arr;
            }
            arr.push(collider);
        });
    }

    private collectCollider(node: Node) {
        if (!node.active || !node.activeInHierarchy) {
            return;
        }
        let arr = node.getComponents(BoxColliderUtil);
        utilTools.forArr(arr, (collider: BoxColliderUtil) => {
            if (!collider.enabled) {
                return;
            }
            collider.updateCollider();
            this.colliderArr.push(collider);
            this.addIntoPosToColliderArr(collider);
        });
        utilTools.forArr(node.children, (ch: Node) => {
            this.collectCollider(ch);
        });
    }

    public step(node: Node) {
        this.colliderArr = [];
        this.posToColliderArr = {};

        // 收集所有碰撞器信息
        this.collectCollider(node);

        // 开始碰撞检测
        utilTools.forArr(this.colliderArr, (collider: BoxColliderUtil) => {
            this.forColliderRectKeyArr(collider, (key: string) => {
                let arr = this.posToColliderArr[key];
                if (!arr) {
                    return;
                }
                utilTools.forArr(arr, (otherCollider: BoxColliderUtil) => {
                    this.doIntersection(collider, otherCollider);
                });
            });
        });
    }

    private doIntersection(collider1: BoxColliderUtil, collider2: BoxColliderUtil) {
        if (collider1 == collider2 || collider1.node == collider2.node) {
            return;
        }
        const collisionMatrix = PhysicsSystem2D.instance.collisionMatrix;
        if ((collisionMatrix[collider1.group] & collider2.group) && (collisionMatrix[collider2.group] & collider1.group)) {
            let ret = Intersection2D.polygonPolygon(collider1.worldPoints, collider2.worldPoints);
            if (ret) {
                // 开始碰撞
                collider1.contactBegin(collider2);
                // myLog.i(collider1.group, collider2.group, ret);
            } else {
                // 结束碰撞
                collider1.contactEnd(collider2);
            }
        }
    }

}

export const physicsWorld = PhysicsWorld.getInstance();



