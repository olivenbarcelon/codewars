"use strict";
const ArrayHelper = require("../js/ArrayHelper");

describe("Array Helper", () => {
    it("It should find peak, expect [3, 2, 1] to be 0", () => {
        expect(ArrayHelper.findPeak([3, 2, 1])).toBe(0);
    });

    it("It should find peak, expect [1, 3, 3] to be 2", () => {
        expect(ArrayHelper.findPeak([1, 2, 3])).toBe(2);
    });

    it("It should find peak, expect [1, 3, 20, 4, 1, 0] to be 2", () => {
        expect(ArrayHelper.findPeak([1, 3, 20, 4, 1, 0])).toBe(2);
    });

    it("It should get max, expect [1000] to be 1000", () => {
        let minmax = ArrayHelper.getMinMax([1000]);
        expect(minmax.max).toBe(1000);
    });

    it("It should get max, expect [1000, 11, 445, 1, 330, 3000] to be 3000", () => {
        let minmax = ArrayHelper.getMinMax([1000, 11, 445, 1, 330, 3000]);
        expect(minmax.max).toBe(3000);
    });

    it("It should get max, expect [11, 1000, 445, 1, 330, 3000] to be 3000", () => {
        let minmax = ArrayHelper.getMinMax([11, 1000, 445, 1, 330, 3000]);
        expect(minmax.max).toBe(3000);
    });

    it("It should get min, expect [1000, 11, 445, 1, 330, 3000] to be 1", () => {
        let minmax = ArrayHelper.getMinMax([1000, 11, 445, 1, 330, 3000]);
        expect(minmax.min).toBe(1);
    });

    it("It should reverse, expect [1, 2, 3, 4, 5, 6] to equal [6, 5, 4, 3, 2, 1]", () => {
        expect(ArrayHelper.reverse([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
    });
});
