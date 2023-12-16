import assert from 'assert';
import Collection from "../src";

describe('Keys', function () {
    it('Should return keys of inputted array', function () {
        const array = [1, 2, 3, 4, 5];
        const collection = new Collection(array);
        assert.deepEqual(collection.keys(), [0, 1, 2, 3, 4]);
    });

    it('Should return keys of inputted object', function () {
        const object = {a: 1, b: 2, c: 3, d: 4, e: 5};
        const collection = new Collection(object);
        assert.deepEqual(collection.keys(), Object.keys(object));
    });
});