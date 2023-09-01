const StringUtility = require('../js/StringUtility');

describe("String Utility", () => {
    it("It should run to ehx", () => {
        expect(StringUtility.toHex(255, 255, 255)).toBe('FFFFFF');
        expect(StringUtility.toHex(255, 255, 300)).toBe('FFFFFF');
        expect(StringUtility.toHex(0, 0, 0)).toBe('000000');
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
