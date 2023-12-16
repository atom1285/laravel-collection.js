import assert from 'assert';
import Collection from "../src";

describe('Filter', function () {
    it('Filter an array', function () {
        const array = [-3, -2, -1, 0, 1, 2, 3];
        const collection = new Collection(array);

        assert.deepEqual(collection.filter((value) => value > 0).values(), [1, 2, 3]);
        assert.deepEqual(collection.filter((value) => value < 0).values(), [-3, -2, -1]);
        assert.deepEqual(collection.filter((value) => value == 0).values(), [0]);

    });

    it('Filter an object', function () {
        const object = {a: -3, b: -2, c: -1, d: 0, e: 1, f: 2, g: 3};
        const collection = new Collection(object);

        assert.deepEqual(collection.filter((value) => value > 0).getRawItems(), {e: 1, f: 2, g: 3});
        assert.deepEqual(collection.filter((value, key) => key == 'e').getRawItems(), {e: 1});

    });
});