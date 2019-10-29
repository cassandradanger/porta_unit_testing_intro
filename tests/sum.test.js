const sum = require('../modules/sum');



test('sum of 1 and 2 gives 3', () => {
    expect(sum(1, 2)).toBe(4);
});

test('sum with a negative, using 1 and -2 returns a -1', () =>{
    expect(sum(1, -2)).toBe(-1)
});