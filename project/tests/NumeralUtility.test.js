const NumeralUtility = require('../js/NumeralUtility');

describe("Numeral Utility", () => {
    it("It should comp same, expect [121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361] to be false", () => {
        expect(NumeralUtility.compSame([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361])).toBeFalsy();
    });

    it("It should comp same, expect [121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361] to be true", () => {
        expect(NumeralUtility.compSame([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])).toBeTruthy();
    });

    it("It should prime, expect 25 to be false", () => {
        expect(NumeralUtility.isPrime(25)).toBeFalsy();
    });

    it("It should prime, expect -1 to be false", () => {
        expect(NumeralUtility.isPrime(-1)).toBeFalsy();
    });

    it("It should prime, expect 5099 to be true", () => {
        expect(NumeralUtility.isPrime(5099)).toBeTruthy();
    });

    it("It should prime, expect 2 to be true", () => {
        expect(NumeralUtility.isPrime(2)).toBeTruthy();
    });

    it("It should prime, expect 4 to be false", () => {
        expect(NumeralUtility.isPrime(4)).toBeFalsy();
    });

    it("It should greed is good, expect [5, 5, 5, 5, 5] to be 600", () => {
        expect(NumeralUtility.greedIsGood([5, 5, 5, 5, 5])).toBe(600);
    });

    it("It should greed is good, expect [5, 1, 3, 4, 1] to be 250", () => {
        expect(NumeralUtility.greedIsGood([5, 1, 3, 4, 1])).toBe(250);
    });

    it("It should greed is good, expect [1, 1, 1, 3, 1] to be 1100", () => {
        expect(NumeralUtility.greedIsGood([1, 1, 1, 3, 1])).toBe(1100);
    });

    it("It should greed is good, expect [2, 4, 4, 5, 4] to be 450", () => {
        expect(NumeralUtility.greedIsGood([2, 4, 4, 5, 4])).toBe(450);
    });

    it("It should filter int, expect [1, 2, 'a', 'b'] to equal [1, 2]", () => {
        expect(NumeralUtility.filterInt([1, 2, "a", "b"])).toEqual([1, 2]);
    });

    it("It should armstrong, expect 153 to be true", () => {
        expect(NumeralUtility.isArmstrong(153)).toBeTruthy();
    });

    it("It should armstrong, expect 7 to be true", () => {
        expect(NumeralUtility.isArmstrong(7)).toBeTruthy();
    });

    it("It should armstrong, expect 122 to be false", () => {
        expect(NumeralUtility.isArmstrong(122)).toBeFalsy();
    });

    it("It should mean square, expect [1, 2, 3], [4, 5, 6] to be 9", () => {
        expect(NumeralUtility.meanSquare([1, 2, 3], [4, 5, 6])).toBe(9);
    });

    it("It should mean square, expect [10, 20, 10, 2], [10, 25, 5, -2] to be 16.5", () => {
        expect(NumeralUtility.meanSquare([10, 20, 10, 2], [10, 25, 5, -2])).toBe(16.5);
    });

    it("It should mean square, expect [-1, 0], [0, -1] to be 1", () => {
        expect(NumeralUtility.meanSquare([-1, 0], [0, -1])).toBe(1);
    });

    it("It should roman, expect 1990 to be MCMXC", () => {
        expect(NumeralUtility.toRoman(1990)).toBe("MCMXC");
    });

    it("It should roman, expect 2008 to be MMVIII", () => {
        expect(NumeralUtility.toRoman(2008)).toBe("MMVIII");
    });

    it("It should roman, expect 1666 to be MDCLXVI", () => {
        expect(NumeralUtility.toRoman(1666)).toBe("MDCLXVI");
    });

    it("It should roman, expect 1000 to be M", () => {
        expect(NumeralUtility.toRoman(1000)).toBe("M");
    });

    it("It should roman, expect 4 to be IV", () => {
        expect(NumeralUtility.toRoman(4)).toBe("IV");
    });

    it("It should roman, expect 1 to be I", () => {
        expect(NumeralUtility.toRoman(1)).toBe("I");
    });

    it("It should square digit, expect 9119 to be 811181", () => {
        expect(NumeralUtility.squareDigit(9119)).toBe(811181);
    });

    it("It should square digit, expect 24680 to be 41636640", () => {
        expect(NumeralUtility.squareDigit(24680)).toBe(41636640);
    });

    it("It should square digit, expect 13579 to be 19254981", () => {
        expect(NumeralUtility.squareDigit(13579)).toBe(19254981);
    });

    it("It should square digit, expect 0 to be 0", () => {
        expect(NumeralUtility.squareDigit(0)).toBe(0);
    });

    it("It should dig pow, expect 3263.10819218804, 5 to equal -1", () => {
        expect(NumeralUtility.digPow(46288, 5)).toBe(-1);
    });

    it("It should dig pow, expect 89, 2 to be 1", () => {
        expect(NumeralUtility.digPow(89, 1)).toBe(1);
    });

    it("It should dig pow, expect 92, 1 to be -1", () => {
        expect(NumeralUtility.digPow(92, 1)).toBe(-1);
    });

    it("It should dig pow, expect 695, 2 to be 2", () => {
        expect(NumeralUtility.digPow(695, 2)).toBe(2);
    });

    it("It should dig pow, expect 46288, 3 to be 51", () => {
        expect(NumeralUtility.digPow(46288, 3)).toBe(51);
    });
});
