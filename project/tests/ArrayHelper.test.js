"use strict";
const ArrayHelper = require("../js/ArrayHelper");

describe("Array Helper", () => {
    it("It should reverse, expect [1, 2, 3, 4, 5, 6] to equal [6, 5, 4, 3, 2, 1]", () => {
        expect(ArrayHelper.reverse([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
    });
});
