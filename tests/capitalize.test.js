const capitalize = require('../functions/capitalize.js');


test("first letter is capitalized", () =>{

    expect(capitalize("asd")).toBe("Asd");

})


test("is not null or undefined", () =>{

    expect(capitalize("asd")).not.toBeNull();
    expect(()=> capitalize(null)).toThrow('please enter a string, dont leave it emtpy');


})
