const {sum, nativeNull} = require('./intro');

describe('Sum should: ', () => {
    test('return sum of two values', () => {
        expect(sum(1, 3)).toBe(4)
        expect(sum(1, 3)).toEqual(4)
    })

    test('return value correctly comparing to other', () => {
        expect(sum(2,3)).toBeGreaterThan(4);
        expect(sum(2,3)).toBeGreaterThanOrEqual(4);
        expect(sum(2,3)).toBeLessThan(54);
    })
})

describe('Netive null function:', () => {
    test("should return false value null", () => {
        expect(nativeNull()).toBeNull();
        expect(nativeNull()).toBeFalsy(); //undefined, null, 0, '';
        expect(nativeNull()).toBeDefined();
        expect(nativeNull()).not.toBeTruthy();
    })
})