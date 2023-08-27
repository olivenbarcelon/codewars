const NumeralUtility = require('../js/NumeralUtility');

describe("Numeral Utility", () => {
    it("It should run square digit", () => {
        expect(NumeralUtility.squareDigit(9119)).toBe(811181);
        expect(NumeralUtility.squareDigit(24680)).toBe(41636640);
        expect(NumeralUtility.squareDigit(13579)).toBe(19254981);
        expect(NumeralUtility.squareDigit(0)).toBe(0);
    });

    it("It should run dig pow", () => {
        expect(NumeralUtility.digPow(89, 1)).toBe(1);
        expect(NumeralUtility.digPow(92, 1)).toBe(-1);
        expect(NumeralUtility.digPow(695, 2)).toBe(2);
        expect(NumeralUtility.digPow(46288, 3)).toBe(51);
    });
});
