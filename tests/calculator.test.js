const calculator = require('../functions/calculator.js');

test('Addition test', ()=>{

    expect(()=>calculator.add(null)).toThrow("Please provide 2 valid numbers to add");
    expect(()=>calculator.add(undefined)).toThrow("Please provide 2 valid numbers to add");
    expect(calculator.add(5,10)).toBe(15);
    
})

test('Substraction test', ()=>{    

    expect(calculator.substract(100,50)).toBe(50);

    expect(calculator.substract(100,1000)).toBe(-900);
})

test('Multiply test', ()=>{

    expect(()=>calculator.multiply(null)).toThrow("Please provide 2 valid numbers to Multiply");

    expect(()=>calculator.multiply(undefined)).toThrow("Please provide 2 valid numbers to Multiply");

    expect(calculator.multiply(5,4)).toBe(20);

    expect(calculator.multiply(20,56)).not.toBe(1);

    expect(calculator.multiply(23,2.4)).toBe(56);
})

test('Division test', ()=>{    

    expect(calculator.divide(14,2)).toBe(7);

    expect(calculator.divide(30,5.5)).toBe(6);

    expect(calculator.divide(305,49)).not.toBe(43);
})

