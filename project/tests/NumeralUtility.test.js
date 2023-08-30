const NumeralUtility = require('../js/NumeralUtility');

describe("Numeral Utility", () => {
    it("It should run mean square", () => {
        expect(NumeralUtility.meanSquare([1, 2, 3], [4, 5, 6])).toBe(9);
        expect(NumeralUtility.meanSquare([10, 20, 10, 2], [10, 25, 5, -2])).toBe(16.5);
        expect(NumeralUtility.meanSquare([-1, 0], [0, -1])).toBe(1);
    });

    it("It should run to roman", () => {
        expect(NumeralUtility.toRoman(1990)).toBe("MCMXC");
        expect(NumeralUtility.toRoman(2008)).toBe("MMVIII");
        expect(NumeralUtility.toRoman(1666)).toBe("MDCLXVI");
        expect(NumeralUtility.toRoman(1000)).toBe("M");
        expect(NumeralUtility.toRoman(4)).toBe("IV");
        expect(NumeralUtility.toRoman(1)).toBe("I");
    });

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
