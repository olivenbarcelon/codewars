const PaginationHelper = require("../js/PaginationHelper");

let helper;

beforeAll(() => {
    helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
});

describe("Pagination Helper", () => {
    it("It should pagination helper, expect page index 20 to be -1", () => {
        expect(helper.pageIndex(20)).toBe(-1);
    });

    it("It should pagination helper, expect page index -10 to be -1", () => {
        expect(helper.pageIndex(-10)).toBe(-1);
    });

    it("It should pagination helper, expect page index 2 to be 0", () => {
        expect(helper.pageIndex(2)).toBe(0);
    });

    it("It should pagination helper, expect page index 5 to be 1", () => {
        expect(helper.pageIndex(5)).toBe(1);
    });

    it("It should pagination helper, expect page item count 2 to be -1", () => {
        expect(helper.pageItemCount(2)).toBe(-1);
    });

    it("It should pagination helper, expect page item count 0 to be 4", () => {
        expect(helper.pageItemCount(0)).toBe(4);
    });

    it("It should pagination helper, expect page item count 1 to be 2", () => {
        expect(helper.pageItemCount(1)).toBe(2);
    });

    it("It should pagination helper, expect item count to be 6", () => {
        expect(helper.itemCount()).toBe(6);
    });

    it("It should pagination helper, expect page count to be 2", () => {
        expect(helper.pageCount()).toBe(2);
    });
});