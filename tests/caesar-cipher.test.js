const cipher = require('../functions/caesar-cipher.js');


test('Testing letters', () =>{


    expect(cipher("pedo",3)).toBe("shkr");
    expect(cipher("zoy nacho",3)).toBe("wr");


});


test("Testing number", ()=>{

    expect(cipher(2,2).toBe(4));
})