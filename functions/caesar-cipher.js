function cipher (msg, factor){

    const abc2  = ["a","b","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    const abc  = " abcdefghijklmnñopqrstuvwxyz";

    let cipheredMsg = "";

    let abcIdx;


    for (let char of msg){

        for (let i=0; i<abc.length; i++){

            if(char == abc[i]){

                if(i>=27)
                    cipheredMsg += abc[i-3];

                else if(char == " ")
                    cipheredMsg += " ";
                
                else if(i<=28)
                    cipheredMsg += abc[i+3];
            }
        }
    }        

    console.log(cipheredMsg);

}

cipher("buenas ",3);
