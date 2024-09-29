
class SingleInstance {

    private static instance: any = null;
    protected constructor() { };
    public static getInstance<T>(): T {
        if (this.instance == null) {
            this.instance = new this();
        }
        return this.instance;
    }

}

export { SingleInstance };

