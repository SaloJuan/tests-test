function cipher (msg, factor){

    const abc  = ["a","b","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];

    let cipheredMsg = "";

    let idx;

    for (let i=0; i< msg.length; i++){

        
        if(msg[i] !== " "){

            idx = abc.indexOf(msg[i]);        

            //this if-else is intended for every abc index that passes abc's length / last character. 
            if(idx+factor >= abc.length-1){

                                    //factor-1 so abc is iterated the exact factor times
                cipheredMsg += abc[abc.length-factor];                

            }
            else
                cipheredMsg += abc[idx+factor];   
        }
        else  {

            cipheredMsg += " "; 

        }   
        
    }      

    console.log(cipheredMsg);

}

cipher("z",3);
