import assert from 'assert';
import Collection from "../src";

describe('Each', function () {
    it('Loop an array', function () {
        const array = [1, 2, 3, 4, 5];
        const collection = new Collection(array);
        const elements: any[] = [];

        collection.each((value: any, index: number) => {
            assert.equal(value, array[index]);
            elements.push(value);
        });

        assert.deepEqual(elements, array);
    });

    it('Loop an object', function () {
        const object = {a: 1, b: 2, c: 3, d: 4, e: 5};
        const collection = new Collection(object);

        collection.each((value: any, key: keyof typeof object) => {
            assert.equal(value, object[key]);
        });
    });
});