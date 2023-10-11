function cipher (msg, factor){

    const abc2  = ["a","b","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    const abc  = " abcdefghijklmnñopqrstuvwxyz";

    const numbers = "0123456789";
    const symbols = "-.,+{}¿?|_;:][¨*";

    let cipheredMsg = "";

    let abcIdx;


    for (let char of msg){

        for (let i=0; i<abc.length; i++){

            if(char == abc[i]){

                if(i >= 26 || i >= 27 || i >= 28 )
                    
                    cipheredMsg += abc[i-3];
                else
                    cipheredMsg += abc[i+3];

            } else if (char == numbers[i]){

            } else if (char == symbols[i]){

            }
            

            
        }
    }
    
    console.log(cipheredMsg);

}

cipher("x",3);


/*

if(char == abc[i]){

                if(i>=26 || i>=27 || i>=28)
                    cipheredMsg += abc[i-3];

                else if(char == " ")
                    cipheredMsg += " ";
                
                    //here a regex could be helpful to detect a symbol and then assign it to the variable.
                else if(char == "<" ||
                        char == "+" ||
                        char == "-" ||
                        char == "." )
                    cipheredMsg += "+"
                    //here I discover I should re-build the abc array, adding numbrers and symbolds. This implies the re-thinkeering of this horrorific loop
                else if(char == 1)
                    cipheredMsg += 1;    
                
                else if(i<=26)
                    cipheredMsg += abc[i+3];
            }

*/