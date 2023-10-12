"use strict";
const ArrayList = require("../../js/dsa/ArrayList");

let array;

beforeEach(() => {
    array = new ArrayList();
});

describe("Array List", () => {
    it("It should array list get all to equal [3, 5, 8]", () => {
        array.add(3);
        array.add(5);
        array.add(8);
        expect(array.getAll()).toEqual([3, 5, 8]);
    });

    it("It should array list get length to be 3", () => {
        array.add(1);
        array.add(1);
        array.add(2);
        expect(array.getLength()).toBe(3);
    });

    it("It should array list get length to be 0", () => {
        expect(array.getLength()).toBe(0);
    });
});
