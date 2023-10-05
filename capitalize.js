//A capitalize function that takes a string and returns it with the first character capitalized.

function capitalize(str){
    
    let firstLetter = "asd";

    firstLetter.toUpperCase();

    console.log(firstLetter)

    let slicedStr = str.slice(1);

    let finalStr = firstLetter + slicedStr;

    return finalStr;

}

console.log(capitalize('asd'));