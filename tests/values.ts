import assert from 'assert';
import Collection from "../src";

describe('Values', function () {
    it('Should return values of inputted array', function () {
        const array = [1, 2, 3, 4, 5];
        const collection = new Collection(array);
        assert.deepEqual(collection.values(), array);
    });

    it('Should return values of inputted object', function () {
        const object = {a: 1, b: 2, c: 3, d: 4, e: 5};
        const collection = new Collection(object);
        assert.deepEqual(collection.values(), Object.values(object));
    });
});