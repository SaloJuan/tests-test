const analyze = require('../functions/analyze-array.js');

test('Is a valid number array', ()=>{

    expect(()=>analyze([1,3,"a",5])).toThrow("Please enter a valid numbers array");

})


test('Works as intended', ()=>{

    expect(analyze([1,2,3,4])).toStrictEqual({
        "min": 1,
        "max": 4,
        "average": 2.5,
        "length": 4
    })
})