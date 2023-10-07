//A capitalize function that takes a string and returns it with the first character capitalized.

function capitalize(str){

    if(str == null || str == "")
        
        throw new Error(('please enter a string, dont leave it emtpy'));     
    
    let firstLetter = str[0];

    firstLetter = firstLetter.toUpperCase();    

    let slicedStr = str.slice(1);

    let finalStr = firstLetter + slicedStr;

    return finalStr;

}

module.exports = capitalize;

