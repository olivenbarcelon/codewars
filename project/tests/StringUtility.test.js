const StringUtility = require('../js/StringUtility');

describe("String Utility", () => {
    it("It should run alphabet position", () => {
        expect(StringUtility.alphabetPosition("The sunset sets at twelve o\' clock.")).toBe("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
    });

    it("It should run split alternate", () => {
        expect(StringUtility.splitAlternate('012345', 1)).toBe('135024');
        expect(StringUtility.splitAlternate('012345', 2)).toBe('304152');
        expect(StringUtility.splitAlternate('012345', 3)).toBe('012345');
        expect(StringUtility.splitAlternate('01234', 1)).toBe('13024');
        expect(StringUtility.splitAlternate('01234', 2)).toBe('32104');
        expect(StringUtility.splitAlternate('01234', 3)).toBe('20314');
    });

    it("It should run meeting", () => {
        expect(StringUtility.meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))
            .toBe("(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)");
    });

    it("It should run split string", () => {
        expect(StringUtility.splitString("abc")).toEqual(["ab", "c_"]);
        expect(StringUtility.splitString("abcdef")).toEqual(["ab", "cd", "ef"]);
        expect(StringUtility.splitString("abcdefg")).toEqual(["ab", "cd", "ef", "g_"]);
        expect(StringUtility.splitString("")).toEqual([]);
    });

    it("It should run to camel case", () => {
        expect(StringUtility.toCamelCase("the-stealth-warrior")).toBe("theStealthWarrior");
        expect(StringUtility.toCamelCase("The_Stealth_Warrior")).toBe("TheStealthWarrior");
        expect(StringUtility.toCamelCase("The_Stealth-Warrior")).toBe("TheStealthWarrior");
    });

    it("It should run to hex", () => {
        expect(StringUtility.toHex(255, 255, 255)).toBe('FFFFFF');
        expect(StringUtility.toHex(255, 255, 300)).toBe('FFFFFF');
        expect(StringUtility.toHex(0, 0, 0)).toBe('000000');
        expect(StringUtility.toHex(-255, -255, -255)).toBe('000000');
        expect(StringUtility.toHex(148, 0, 211)).toBe('9400D3');
    });

    it("It should run in array", () => {
        expect(StringUtility.inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])).toEqual(["arp", "live", "strong"]);
        expect(StringUtility.inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])).toEqual(["live", "strong"]);
        expect(StringUtility.inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"])).toEqual(["arp", "live", "strong"]);
        expect(StringUtility.inArray(['tarp', 'mice', 'bull'], ["lively", "alive", "harp", "sharp", "armstrong"])).toEqual([]);
    });

    it("It should run exes and ohs", () => {
        expect(StringUtility.exesAndOhs("ooxx")).toBe(true);
        expect(StringUtility.exesAndOhs("xooxx")).toBe(false);
        expect(StringUtility.exesAndOhs("ooxXm")).toBe(true);
        expect(StringUtility.exesAndOhs("zpzpzpp")).toBe(true);
        expect(StringUtility.exesAndOhs("zzoo")).toBe(false);
    });

    it("It should run get middle", () => {
        expect(StringUtility.getMiddle("test")).toBe("es");
        expect(StringUtility.getMiddle("testing")).toBe("t");
        expect(StringUtility.getMiddle("middle")).toBe("dd");
        expect(StringUtility.getMiddle("A")).toBe("A");
        expect(StringUtility.getMiddle("1")).toBe("1");
    });

    it("It should run get middle validate by numeric data", () => {
        expect(() => StringUtility.getMiddle(1)).toThrow("Cannot read properties of string");
    });

    it("It should run get middle validate by undefined", () => {
        expect(() => StringUtility.getMiddle()).toThrow("Cannot read properties of undefined");
    });

    it("It should run get middle validate by null", () => {
        expect(() => StringUtility.getMiddle(null)).toThrow("Cannot read properties of null");
    });
});
