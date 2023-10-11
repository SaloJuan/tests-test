function cipher (msg, factor){

    const abc2  = ["a","b","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    const abc  = " abcdefghijklmnñopqrstuvwxyz";
    const abcUpp = " ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    const numbers = "0123456789";
    const symbols = "-.,+{}¿?|_;:][¨*";

    let cipheredMsg = "";

    let abcIdx;


    for (let char of msg){

        for (let i=0; i<abc.length; i++){

            if(char == abc[i] || char == abcUpp[i])
            {

                if(i >= 26 || i >= 27 || i >= 28 ){

                    if(char == abcUpp[i])
                        cipheredMsg += abcUpp[i-3];
                    else
                        cipheredMsg +=abc[i-3];

                } else {

                    console.log('else letra comun a validar si es mayuscula')

                    if(char == abcUpp[i])
                        cipheredMsg += abcUpp[i+factor];
                    else
                        cipheredMsg += abc[i+factor];
                }                    

            } else if (char == numbers[i]){
                    //At this point I discovered that everything would be a hundred times better if I refactored this whole function to use linked lists. Also splitting it up into more atomic functions to handle all the individual checks.
                cipheredMsg += numbers[i+factor];

            }          
        }
    }
    
    console.log(cipheredMsg);

}

module.exports = cipher;
