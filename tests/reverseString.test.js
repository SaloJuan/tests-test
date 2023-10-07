const reverseString = require('../functions/reverseString.js');


test("number instead of text", ()=>{

    expect(reverseString(123)).toBe("321");

})

test("Passing string", ()=>{

    expect(reverseString("caca manola")).toBe("alonam acac");
})

test ("Not NULL or EMPTY or UNDEFINED", ()=>{

    
    expect(() => reverseString(null)).toThrow("Invalid text, please provide a valid string to reverse, bitch");
})

