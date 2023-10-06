"use strict";
const VigenereCipher = require("../js/VigenereCipherHelper");

let vigenereCipher;

beforeAll(() => {
    vigenereCipher = new VigenereCipher("password");
});

describe("Vigenere Cipher Helper", () => {
    it("It should encode, expect 'codewars' to be 'rovwsoiv'", () => {
        expect(vigenereCipher.encode("codewars")).toBe("rovwsoiv");
    });

    it("It should decode, expect 'laxxhsj' to be 'waffles'", () => {
        expect(vigenereCipher.decode("laxxhsj")).toBe("waffles");
    });

    it("It should encode, expect 'my secret code i want to secure' to be 'b_LkaqihiTug`sKlIwsfpHkrIswuqfv'", () => {
        expect(vigenereCipher.encode("my secret code i want to secure")).toBe("b_LkaqihiTug`sKlIwsfpHkrIswuqfv");
    });
});
