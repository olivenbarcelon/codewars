"use strict";
const Chain = require("../js/Chain");
let chain;

beforeAll(() => {
    chain = new Chain();
});

describe("Chain", () => {
    it("It should execute sum, expect 1, 2 to be 3", () => {
        expect(chain.sum(1, 2).minusOne().execute()).toBe(2);
    });

    it("It should execute sum, double and add one, expect 1, 2 to be 3 double to be 6 add one to be 7", () => {
        chain.sum(1, 2);
        expect(chain.execute()).toBe(3);
        expect(chain.double().execute()).toBe(6);
        expect(chain.addOne().execute()).toBe(7);
        expect(chain.execute()).toBe(7);
    });

    it("It should execute sum, expect 1, 2 to be 3", () => {
        expect(chain.sum(1, 2).execute()).toBe(3);
    });

    it("It should execute sum, expect 3, 4 to be 7", () => {
        expect(chain.sum(3, 4).execute()).toBe(7);
    });
});
