const codeBreaker = require('./codeBreaker');

describe('The digits are in the right position', () => {
    test('Number codebreaker result is XXXX', ()=>{
        var codeBreakerResult = codeBreaker.solveCode('4139');
        expect(codeBreakerResult).toBe('XXXX');
    });

    test('Number codebreaker result is correct in 1 position', () =>{
        var codeBreakerResult = codeBreaker.solveCode('4275');
        expect(codeBreakerResult).toBe('X');
    });
    
    test('Number codebreaker result is correct in 2 positions', () =>{
        var codeBreakerResult = codeBreaker.solveCode('4175');
        expect(codeBreakerResult).toBe('XX');
    });
    
    test('Number codebreaker result is correct in 3 positions', () =>{
        var codeBreakerResult = codeBreaker.solveCode('4135');
        expect(codeBreakerResult).toBe('XXX');
    });

});

test('All digits in codebreaker result are incorrect', ()=>{
    var codeBreakerResult = codeBreaker.solveCode('2758');
    expect(codeBreakerResult).toBe('');
});

describe('The digits are not in the right position', ()=>{
    test('1 Number in codebreaker result is correct but is not in the correct position', ()=>{
        var codeBreakerResult = codeBreaker.solveCode('7325');
        expect(codeBreakerResult).toBe('_');
    });
    
    test('2 Numbers in codebreaker result is correct but is not in the correct position', ()=>{
        var codeBreakerResult = codeBreaker.solveCode('7345');
        expect(codeBreakerResult).toBe('__');
    });
    
    test('3 Numbers in codebreaker result is correct but is not in the correct position', ()=>{
        var codeBreakerResult = codeBreaker.solveCode('7341');
        expect(codeBreakerResult).toBe('___');
    });
    
    test('4 Numbers in codebreaker result is correct but is not in the correct position', ()=>{
        var codeBreakerResult = codeBreaker.solveCode('9314');
        expect(codeBreakerResult).toBe('____');
    });
})

describe('Some digits are in the correct position but other not', () =>{
    test('1 Numbers in codebreaker result is in the correct position but 3 are not', ()=>{
        var codeBreakerResult = codeBreaker.solveCode('4391');
        expect(codeBreakerResult).toBe('X___');
    });
    
    test('2 Numbers in codebreaker result is in the correct position but 2 are not', ()=>{
        var codeBreakerResult = codeBreaker.solveCode('4193');
        expect(codeBreakerResult).toBe('XX__');
    });
    
    test('3 Numbers in codebreaker result is in the correct position but 2 are not', ()=>{
        var codeBreakerResult = codeBreaker.solveCode('4139');
        expect(codeBreakerResult).toBe('XXX_');
    });
})




