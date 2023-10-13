function analyzeArray(arr){

    let isNumberArr = true;

    arr.forEach(elem => {
        
        if(typeof elem != "number") 
            isNumberArr = false;
    })

    if (isNumberArr){

        let arrObj = {

            min: 0,
            max: 0,
            average: 0,
            length: arr.length
    
        }            
    
        arr.sort((a,b) =>{
    
            return a-b;
        })
    
        arrObj.min = arr[0];
    
        arrObj.max = arr[arr.length-1];
    
        let total = 0;
    
        arr.forEach(elem => {            
            
            total = total + elem;
            
        });    
    
        arrObj.average = total/arr.length;
    
        return arrObj;    

    } else

        throw new Error("Please enter a valid numbers array");    

}

module.exports = analyzeArray;
