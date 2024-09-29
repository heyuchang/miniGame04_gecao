import { js } from "cc";

export class MapWrap<K extends string | number, V>{
	protected _objects;
	protected _size = 0;

	constructor(array?: Array<[K, V]>) {
		this._objects = js.createMap(true);
		this._size = 0;
		if (array) {
			for (let i = 0; i < array.length; i++) {
				this.set(array[i][0], array[i][1]);
			}
		}
	}

	public set size(size) {
		this._size = size;
	}

	public set objects(objects) {
		this._objects = objects
	}

	public get size(): number {
		return this._size;
	}

	public clear(): void {
		this._objects = js.createMap(true);
		this._size = 0;
	}

	public has(key: K): boolean {
		return key as any in this._objects;
	}

	public set(key: K, value: V): void {
		if (!this.has(key)) {
			this._size++;
		}
		this._objects[key] = value;
	}

	public get(key: K): V {
		if (!this.has(key)) return null;
		return this._objects[key];
	}

	public delete(key: K): void {
		if (this.has(key)) {
			delete this._objects[key];
			this._size--;
		}
	}

	public keys(): K[] {
		let keys = Object.keys(this._objects);
		return keys as any;
	}

	public values<V>(): V[] {
		let keys = this.keys();
		let values = [];
		keys.forEach(key => {
			values.push(this.get(key));
		})
		return values;
	}

	public toArray(isNumberKey?: boolean): Array<[K, V]> {
		let rets = [];
		let keys = this.keys();
		keys.forEach(key => {
			rets.push([!isNumberKey ? key : parseInt(key as any), this.get(key)]);
		})
		return rets;
	}

	public forEach<T>(callBack: { (value: V, key: K): T }): T {
		let keys = this.keys();
		for (let i = 0; i < keys.length; i++) {
			let result = callBack(this._objects[keys[i]], keys[i]);
			if (!!result) return result;
		}
	}

	public rforEach<T>(callBack: { (value: V, key: K): T }): T {
		let keys = this.keys();
		for (let i = keys.length - 1; i >= 0; i--) {
			let result = callBack(this._objects[keys[i]], keys[i]);
			if (!!result) return result;
		}
	}
}