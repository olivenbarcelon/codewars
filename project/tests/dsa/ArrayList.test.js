"use strict";
const ArrayList = require("../../js/dsa/ArrayList");

let array;

beforeEach(() => {
    array = new ArrayList();
});

describe("Array List", () => {
    it("It should array list insert [12, 16, 20, 40, 50, 70, 26] to equal [12, 16, 20, 40, 50, 70, 26]", () => {
        array.insert(12);
        array.insert(16);
        array.insert(20);
        array.insert(40);
        array.insert(50);
        array.insert(70);
        array.insert(26);
        expect(array.getAll()).toEqual([12, 16, 20, 40, 50, 70, 26]);
    });

    it("It should array list remove all, expect [3, 5, 8] to be []", () => {
        array.add(3);
        array.add(5);
        array.add(8);
        array.removeAll();
        expect(array.getAll()).toEqual([]);
    });

    it("It should array list index of 10 to be -1", () => {
        array.add(3);
        array.add(5);
        array.add(8);
        expect(array.indexOf(10)).toBe(-1);
    });

    it("It should array list index of 5 to be 1", () => {
        array.add(3);
        array.add(5);
        array.add(8);
        expect(array.indexOf(5)).toBe(1);
    });

    it("It should array list index of -1 to be -1", () => {
        array.add(3);
        array.add(5);
        array.add(8);
        expect(array.indexOf(-1)).toBe(-1);
    });

    it("It should array list remove index, expect [3, 5, 8] to equal [3, 8]", () => {
        array.add(3);
        array.add(5);
        array.add(8);
        array.remove(1);
        expect(array.getAll()).toEqual([3, 8]);
    });

    it("It should array list get element throw error", () => {
        array.add(3);
        array.add(5);
        array.add(8);
        expect(() => array.get(3)).toThrow("Index 3 out of bounds for length 3");
    });

    it("It should array list get element to be 5", () => {
        array.add(3);
        array.add(5);
        array.add(8);
        expect(array.get(1)).toBe(5);
    });

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
