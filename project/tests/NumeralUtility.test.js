const NumeralUtility = require('../js/NumeralUtility');

describe("Numeral Utility", () => {
    it("It should run dig pow", () => {
        expect(NumeralUtility.digPow(89, 1)).toBe(1);
        expect(NumeralUtility.digPow(92, 1)).toBe(-1);
        expect(NumeralUtility.digPow(695, 2)).toBe(2);
        expect(NumeralUtility.digPow(46288, 3)).toBe(51);
    });
});
