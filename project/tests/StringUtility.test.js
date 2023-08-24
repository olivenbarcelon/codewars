const getMiddle = require('../js/StringUtility');

describe('String Utility', () => {
    it('It should get middle', () => {
        expect(getMiddle('test')).toBe('es');
        expect(getMiddle('testing')).toBe('t');
        expect(getMiddle('middle')).toBe('dd');
        expect(getMiddle('A')).toBe('A');
        expect(getMiddle('1')).toBe('1');
    });

    it('It should get middle validate by numeric data', () => {
        expect(() => getMiddle(1)).toThrow('Cannot read properties of string');
    });

    it('It should get middle validate by undefined', () => {
        expect(() => getMiddle()).toThrow('Cannot read properties of undefined');
    });

    it('It should get middle validate by null', () => {
        expect(() => getMiddle(null)).toThrow('Cannot read properties of null');
    });
});
