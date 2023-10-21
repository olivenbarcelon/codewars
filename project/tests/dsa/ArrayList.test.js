"use strict";
const ArrayList = require("../../js/dsa/ArrayList");

let array;

beforeEach(() => {
    array = new ArrayList();
});

describe("Array List", () => {
    it("It should insert sorted, expect [4, 2, 8, 6] to equal [2, 4, 6, 8]", () => {
        array.insert(4);
        array.insert(2);
        array.insert(8);
        array.insertSorted(6);
        expect(array.getAll()).toEqual([2, 4, 6, 8]);
    });

    it("It should insert sorted, expect [12, 16, 20, 40, 50, 70] to equal [12, 16, 20, 26, 40, 50, 70]", () => {
        array.insertSorted(12);
        array.insertSorted(16);
        array.insertSorted(20);
        array.insertSorted(40);
        array.insertSorted(50);
        array.insertSorted(70);
        array.insertSorted(26);
        expect(array.getAll()).toEqual([12, 16, 20, 26, 40, 50, 70]);
    });

    it("It should insert at, expect [2, 4, 1, 8, 5] to equal [2, 4, 10, 1, 8, 5]", () => {
        array.insert(2);
        array.insert(4);
        array.insert(1);
        array.insert(8);
        array.insert(5);
        array.insertAt(2, 10);
        expect(array.getAll()).toEqual([2, 4, 10, 1, 8, 5]);
    });

    it("It should insert at throw an error", () => {
        expect(() => array.insertAt(1, 1)).toThrow("Index 1 out of bounds for length 0");
    });

    it("It should insert [12, 16, 20, 40, 50, 70, 26] to equal [12, 16, 20, 40, 50, 70, 26]", () => {
        array.insert(12);
        array.insert(16);
        array.insert(20);
        array.insert(40);
        array.insert(50);
        array.insert(70);
        array.insert(26);
        expect(array.getAll()).toEqual([12, 16, 20, 40, 50, 70, 26]);
    });

    it("It should remove all, expect [3, 5, 8] to be []", () => {
        array.add(3);
        array.add(5);
        array.add(8);
        array.removeAll();
        expect(array.getAll()).toEqual([]);
    });

    it("It should index of 10 to be -1", () => {
        array.add(3);
        array.add(5);
        array.add(8);
        expect(array.indexOf(10)).toBe(-1);
    });

    it("It should index of 5 to be 1", () => {
        array.add(3);
        array.add(5);
        array.add(8);
        expect(array.indexOf(5)).toBe(1);
    });

    it("It should index of -1 to be -1", () => {
        array.add(3);
        array.add(5);
        array.add(8);
        expect(array.indexOf(-1)).toBe(-1);
    });

    it("It should remove index, expect [3, 5, 8] to equal [3, 8]", () => {
        array.add(3);
        array.add(5);
        array.add(8);
        array.remove(1);
        expect(array.getAll()).toEqual([3, 8]);
    });

    it("It should get element throw error", () => {
        array.add(3);
        array.add(5);
        array.add(8);
        expect(() => array.get(3)).toThrow("Index 3 out of bounds for length 3");
    });

    it("It should get element to be 5", () => {
        array.add(3);
        array.add(5);
        array.add(8);
        expect(array.get(1)).toBe(5);
    });

    it("It should get all to equal [3, 5, 8]", () => {
        array.add(3);
        array.add(5);
        array.add(8);
        expect(array.getAll()).toEqual([3, 5, 8]);
    });

    it("It should get length to be 3", () => {
        array.add(1);
        array.add(1);
        array.add(2);
        expect(array.getLength()).toBe(3);
    });

    it("It should get length to be 0", () => {
        expect(array.getLength()).toBe(0);
    });
});
