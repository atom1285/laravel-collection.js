export default class Collection {

    protected items: any[]|object = [];

    constructor(items: any[]|object = []) {
        this.items = items;
    }

    public values(): any[]
    {
        if (this.items instanceof Array) {
            return this.items;
        }

        return Object.values(this.items);
    }
}