import assert from 'assert';
import Collection from "../src";

describe('Get', function () {
    it('Get from an array', function () {
        const array = [1, 2, 3];
        const collection = new Collection(array);
        const elements: any[] = [];

        assert.equal(collection.get(0), array[0]);
        assert.equal(collection.get(1), array[1]);
        assert.equal(collection.get(2), array[2]);
        assert.equal(collection.get(3), undefined);
    });

    it('Get from an object', function () {
        const object = {a: 1, b: 2, c: 3};
        const collection = new Collection(object);

        assert.equal(collection.get('a'), object['a']);
        assert.equal(collection.get('b'), object['b']);
        assert.equal(collection.get('c'), object['c']);
        assert.equal(collection.get('d'), undefined);
    });
});