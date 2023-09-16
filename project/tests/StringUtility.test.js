const StringUtility = require('../js/StringUtility');

describe("String Utility", () => {
    it("It should ends with, expect 'abc', 'bc' to be true", () => {
        expect(StringUtility.endsWith("abc", "bc")).toBeTruthy();
    });

    it("It should mumbling, expect 'abcd' to be 'A-Bb-Ccc-Dddd'", () => {
        expect(StringUtility.mumbling("abcd")).toBe("A-Bb-Ccc-Dddd");
    });

    it("It should remove vowel, expect 'This website is for losers LOL!' to be 'Ths wbst s fr lsrs LL!'", () => {
        expect(StringUtility.removeVowel("This website is for losers LOL!")).toBe("Ths wbst s fr lsrs LL!");
    });

    it("It should duplicate count", () => {
        expect(StringUtility.duplicateCount("abcde")).toBe(0);
        expect(StringUtility.duplicateCount("aabbcde")).toBe(2);
        expect(StringUtility.duplicateCount("aabBcde")).toBe(2);
        expect(StringUtility.duplicateCount("indivisibility")).toBe(1);
        expect(StringUtility.duplicateCount("Indivisibilities")).toBe(2);
        expect(StringUtility.duplicateCount("aA11")).toBe(2);
        expect(StringUtility.duplicateCount("ABBA")).toBe(2);
    });

    it("It should alphabet position", () => {
        expect(StringUtility.alphabetPosition("The sunset sets at twelve o\' clock.")).toBe("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
    });

    it("It should split alternate", () => {
        expect(StringUtility.splitAlternate('012345', 1)).toBe('135024');
        expect(StringUtility.splitAlternate('012345', 2)).toBe('304152');
        expect(StringUtility.splitAlternate('012345', 3)).toBe('012345');
        expect(StringUtility.splitAlternate('01234', 1)).toBe('13024');
        expect(StringUtility.splitAlternate('01234', 2)).toBe('32104');
        expect(StringUtility.splitAlternate('01234', 3)).toBe('20314');
    });

    it("It should meeting", () => {
        expect(StringUtility.meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))
            .toBe("(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)");
    });

    it("It should split string, expect 'abc' to equal ['ab', 'c_']", () => {
        expect(StringUtility.splitString("abc")).toEqual(["ab", "c_"]);
    });

    it("It should split string, expect 'abcdef' to equal ['ab', 'cd', 'ef']", () => {
        expect(StringUtility.splitString("abcdef")).toEqual(["ab", "cd", "ef"]);
    });

    it("It should split string, expect 'abcdefg' to equal ['ab', 'cd', 'ef', 'g_']", () => {
        expect(StringUtility.splitString("abcdefg")).toEqual(["ab", "cd", "ef", "g_"]);
    });

    it("It should split string, expect '' to equal []", () => {
        expect(StringUtility.splitString("")).toEqual([]);
    });

    it("It should to camel case, expect 'the-stealth-warrior' to be 'theStealthWarrior'", () => {
        expect(StringUtility.toCamelCase("the-stealth-warrior")).toBe("theStealthWarrior");
    });

    it("It should to camel case, expect 'The_Stealth_Warrior' to be 'TheStealthWarrior'", () => {
        expect(StringUtility.toCamelCase("The_Stealth_Warrior")).toBe("TheStealthWarrior");
    });

    it("It should to camel case, expect 'The_Stealth-Warrior' to be 'TheStealthWarrior'", () => {
        expect(StringUtility.toCamelCase("The_Stealth-Warrior")).toBe("TheStealthWarrior");
    });

    it("It should to hex, expect 255, 255, 255 to be 'FFFFFF", () => {
        expect(StringUtility.toHex(255, 255, 255)).toBe("FFFFFF");
    });

    it("It should to hex, expect 255, 255, 300 to be 'FFFFFF'", () => {
        expect(StringUtility.toHex(255, 255, 300)).toBe("FFFFFF");
    });

    it("It should to hex, expect 0, 0, 0 to be '000000'", () => {
        expect(StringUtility.toHex(0, 0, 0)).toBe("000000");
    });

    it("It should to hex, expect -255, -255, -255 to be '000000'", () => {
        expect(StringUtility.toHex(-255, -255, -255)).toBe("000000");
    });

    it("It should to hex, expect 148, 0, 211 to be '9400D3'", () => {
        expect(StringUtility.toHex(148, 0, 211)).toBe("9400D3");
    });

    it("It should in array, expect ['arp', 'live', 'strong'], ['lively', 'alive', 'harp', 'sharp', 'armstrong'] to equal ['arp', 'live', 'strong']", () => {
        expect(StringUtility.inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])).toEqual(["arp", "live", "strong"]);
    });

    it("It should in array, expect ['xyz', 'live', 'strong'], ['lively', 'alive', 'harp', 'sharp', 'armstrong'] to equal ['live', 'strong']", () => {
        expect(StringUtility.inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])).toEqual(["live", "strong"]);
    });

    it("It should in array, expect ['live', 'strong', 'arp'], ['lively', 'alive', 'harp', 'sharp', 'armstrong'] to equal ['arp', 'live', 'strong']", () => {
        expect(StringUtility.inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"])).toEqual(["arp", "live", "strong"]);
    });

    it("It should in array, expect ['tarp', 'mice', 'bull'], ['lively', 'alive', 'harp', 'sharp', 'armstrong'] to equal []", () => {
        expect(StringUtility.inArray(['tarp', 'mice', 'bull'], ["lively", "alive", "harp", "sharp", "armstrong"])).toEqual([]);
    });

    it("It should exes and ohs, expect ooxx to be true", () => {
        expect(StringUtility.exesAndOhs("ooxx")).toBeTruthy();
    });

    it("It should exes and ohs, expect xooxx to be false", () => {
        expect(StringUtility.exesAndOhs("xooxx")).toBeFalsy();
    });

    it("It should exes and ohs, expect ooxXm to be true", () => {
        expect(StringUtility.exesAndOhs("ooxXm")).toBeTruthy();
    });

    it("It should exes and ohs, expect zpzpzp to be true", () => {
        expect(StringUtility.exesAndOhs("zpzpzpp")).toBeTruthy();
    });

    it("It should exes and ohs, expect zzoo to be false", () => {
        expect(StringUtility.exesAndOhs("zzoo")).toBeFalsy();
    });

    it("It should get middle, expect 'test' to be 'es'", () => {
        expect(StringUtility.getMiddle("test")).toBe("es");
    });

    it("It should get middle, expect 'testing' to be 't'", () => {
        expect(StringUtility.getMiddle("testing")).toBe("t");
    });

    it("It should get middle, expect 'middle' to be 'dd'", () => {
        expect(StringUtility.getMiddle("middle")).toBe("dd");
    });

    it("It should get middle, expect 'A' to be 'A'", () => {
        expect(StringUtility.getMiddle("A")).toBe("A");
    });

    it("It should get middle, expect '1' to be '1'", () => {
        expect(StringUtility.getMiddle("1")).toBe("1");
    });

    it("It should get middle validate by numeric data", () => {
        expect(() => StringUtility.getMiddle(1)).toThrow("Cannot read properties of string");
    });
});
