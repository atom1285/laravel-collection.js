import assert from 'assert';
import Collection from "../src";

describe('Put', function () {
    it('Put an item into an array', function () {
        const array = [1, 2, 3, 4, 5];
        const collection = new Collection(array);

        array.push(6);
        collection.put(5, 6);

        assert.deepEqual(collection.values(), array);
        assert.deepEqual(collection.get(5), array[5]);
    });

    it('Put an item into an object', function () {
        const obj: {[k: string]: any} = {};

        obj['a'] = 1;
        obj['b'] = 2;
        obj['c'] = 3;
        obj['d'] = 4;
        obj['e'] = 5;

        const collection = new Collection(obj);

        obj['test'] = 6;
        collection.put('test', 6);

        assert.deepEqual(collection.values(), Object.values(obj))
        assert.deepEqual(collection.keys(), Object.keys(obj))
        assert.deepEqual(collection.get('test'), obj['test']);
    });
});