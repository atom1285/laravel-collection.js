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

    public keys(): any[]
    {
        return Object.keys(this.items);
    }

    public get(index: number|string): any
    {
        if (this.items instanceof Array) {
            return this.items[index as number];
        }

        // if this.items has a property with the name of index, return it
        if (this.items.hasOwnProperty(index)) {
            const typedIndex = index as keyof typeof this.items;
            return this.items[typedIndex];
        }

        return undefined;
    }

    public put(index: number|string, value: any): Collection
    {
        if (this.items instanceof Array && index == this.items.length) {
            this.items[index as number] = value;
        }
        else {
            if (this.items instanceof Array) {
                this.items = Object.assign({}, this.items);
            }

            Object.assign(this.items, {[index]: value});
        }

        return this;
    }

    public push(item: any): Collection
    {
        if (this.items instanceof Array) {
            this.items.push(item);
        }
        else {
            this.items = Object.assign({}, this.items, item);
        }

        return this;
    }

    public each(callback: (value: any, index: any, items: any[]|object) => void): Collection
    {
        if (this.items instanceof Array) {
            this.items.forEach(callback);
        }
        else {
            const items = this.items;
            Object.keys(items).forEach((key: string) => {
                callback(this.get(key), key, items);
            });
        }

        return this;
    }

    public filter(callback: (value: any, index: any) => boolean): Collection
    {
        const newCollection = new Collection();

        if (callback == undefined) {
            callback = (item: any) => item !== null && item !== undefined && item !== false;
        }

        this.each((value: any, index: any) => {
            if (callback(value, index)) {
                if (this.items instanceof Array) {
                    newCollection.push(value);
                }
                else {
                    newCollection.put(index, value);
                }
            }
        });

        return newCollection;
    }

    public getRawItems(): any[]|object
    {
        return this.items;
    }

}