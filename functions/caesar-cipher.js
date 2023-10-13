function cipher (msg, factor){

    const abc  = " abcdefghijklmnñopqrstuvwxyz";
    const abcUpp = " ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    const numbers = "0123456789";
    const symbols = "-.,+{}¿?|_;:][¨*";

    let cipheredMsg = "";

    for (let i=0; i<msg.length; i++){

        for (let j=0; j<abc.length; j++){

            if(msg[i] == abc[j] || msg[i] == abcUpp[j]){

                if(j >= 26 || j >= 27 || j >= 28 ){

                    cipheredMsg += abc[j-factor];

                } else{

                    //falta validar si es mayuscula y que hace con eso.
                    cipheredMsg += abc[j+factor]; 
                }
                
            } 
        }
        

    }

    
    
    return cipheredMsg;

}

module.exports = cipher;


/**
 * 
 * 
 * for (let char in msg){

        for (let i=0; i<abc.length; i++){

            if(char == abc[i] || char == abcUpp[i]){

                if(i >= 26 || i >= 27 || i >= 28 ){

                    if(char == abcUpp[i])
                        cipheredMsg += abcUpp[i-3];
                    else
                        cipheredMsg +=abc[i-3];

                } else {
                    

                    if(char == abcUpp[i])
                        cipheredMsg += abcUpp[i+factor];
                    else
                        cipheredMsg += abc[i+factor];
                }                    

            } else if (char == numbers[i]){
                    //At this point I discovered that everything would be a hundred times better if I refactored this whole function to use linked lists. Also splitting it up into more atomic functions to handle all the individual checks.
                cipheredMsg += "" + numbers[i+factor];

            }          
        }
    }
 */
