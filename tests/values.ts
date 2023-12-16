import assert from 'assert';
import Collection from "../src";

describe('Values', function () {
    describe('Array', function () {
        it('Should return values of inputted array', function () {
            const array = [1, 2, 3, 4, 5];
            const collection = new Collection(array);
            assert.deepEqual(collection.values(), array);
        });
    });
});