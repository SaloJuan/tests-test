function reverseString(str){    

    let stringedParam = "";

    if(str == null || 
        str == undefined || 
        str == "" || 
        str == " " ||
        str == "  ")

        throw new Error("Invalid text, please provide a valid string to reverse, bitch");

    if(typeof str == 'number')

        stringedParam = str.toString();   
        
    else
        stringedParam = str;

    let finalStr = "";

    for (let i=stringedParam.length-1; i>=0; i--){

        //finalStrArr.push(str[i]);

        finalStr += stringedParam[i];
    
        
    }

    return finalStr;
}


//reverseString(123);


module.exports = reverseString;