const codeBreaker = require('../codeBreaker');

describe('The digits are correct and, also, in the right position', () => {
    test('The codebreaker result is correct in 1 position', () =>{
        codeBreaker.setSecret('4386');
        var codeBreakerResult = codeBreaker.solveCode('4275');
        expect(codeBreakerResult).toBe('X');
    });
    
    test('The codebreaker result is correct in 2 positions', () =>{
        codeBreaker.setSecret('4186');
        var codeBreakerResult = codeBreaker.solveCode('4175');
        expect(codeBreakerResult).toBe('XX');
    });
    
    test('The codebreaker result is correct in 3 positions', () =>{
        codeBreaker.setSecret('4137');
        var codeBreakerResult = codeBreaker.solveCode('4135');
        expect(codeBreakerResult).toBe('XXX');
    });

    test('The codebreaker result is correct in 4 position', ()=>{
        codeBreaker.setSecret('4139');
        var codeBreakerResult = codeBreaker.solveCode('4139');
        expect(codeBreakerResult).toBe('XXXX');
    });
});

test('All the digits in the codebreaker result are incorrect', ()=>{
    codeBreaker.setSecret('1649');
    var codeBreakerResult = codeBreaker.solveCode('2758');
    expect(codeBreakerResult).toBe('');
});

describe('The digits are correct, but not in the right position', ()=>{
    test('1 Number in the codebreaker result is correct but is not in the correct position', ()=>{
        codeBreaker.setSecret('4761');
        var codeBreakerResult = codeBreaker.solveCode('7325');
        expect(codeBreakerResult).toBe('_');
    });
    
    test('2 Numbers in the codebreaker result are correct, but they are not in the correct position', ()=>{
        codeBreaker.setSecret('8723');
        var codeBreakerResult = codeBreaker.solveCode('7345');
        expect(codeBreakerResult).toBe('__');
    });
    
    test('3 Numbers in the codebreaker result are correct, but they are not in the correct position', ()=>{
        codeBreaker.setSecret('4718');
        var codeBreakerResult = codeBreaker.solveCode('7341');
        expect(codeBreakerResult).toBe('___');
    });
    
    test('4 Numbers in the codebreaker result are correct, but they are not in the correct position', ()=>{
        codeBreaker.setSecret('3941');
        var codeBreakerResult = codeBreaker.solveCode('9314');
        expect(codeBreakerResult).toBe('____');
    });
})

describe('Some digits are in the correct position but other not', () =>{
    test('1 Number in the codebreaker result is in the correct position, but 3 are not', ()=>{
        codeBreaker.setSecret('1493');
        var codeBreakerResult = codeBreaker.solveCode('4391');
        expect(codeBreakerResult).toBe('X___');
    });
    
    test('2 Numbers in the codebreaker result are in the correct position, but 2 are not', ()=>{
        codeBreaker.setSecret('3194');
        var codeBreakerResult = codeBreaker.solveCode('4193');
        expect(codeBreakerResult).toBe('XX__');
    });
})




