const getMiddle = require('../js/StringUtility');

describe('String Utility', () => {
    it('It should get middle of test', () => {
        expect(getMiddle('test')).toBe('es');
    });
    it('It should get middle of testing', () => {
        expect(getMiddle('testing')).toBe('t');
    });
    it('It should get middle of middle', () => {
        expect(getMiddle('middle')).toBe('dd');
    });
    it('It should get middle of A', () => {
        expect(getMiddle('A')).toBe('A');
    });
});
