const cipher = require('../functions/caesar-cipher.js');


test('Testing letters', () =>{

    expect(cipher("aa",3)).toBe("dd");
    expect(cipher("zzz",3)).toBe("www");

});



