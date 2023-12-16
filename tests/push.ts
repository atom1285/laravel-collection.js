import assert from 'assert';
import Collection from "../src";

describe('Push', function () {
    it('Add an item to an array', function () {
        const array = [1, 2, 3, 4, 5];
        const collection = new Collection(array);

        array.push(6);
        collection.push(6);

        assert.deepEqual(collection.values(), array);
    });

    it('Add an item to an object', function () {
        const obj: {[k: string]: any} = {};

        obj['a'] = 1;
        obj['b'] = 2;
        obj['c'] = 3;
        obj['d'] = 4;
        obj['e'] = 5;

        const collection = new Collection(obj);

        obj['5'] = 6;
        collection.push(6);

        assert.deepEqual(collection.values(), Object.values(obj))
        assert.deepEqual(collection.keys(), Object.keys(obj))
    });
});