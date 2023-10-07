const calculator = {


    add(x,y){

        if(x == null || y == null,
           x == undefined || y == undefined)
              throw new Error('Please provide 2 valid numbers to add');

        return x + y

    },


    substract(x,y){

        return x-y;
    
    },

    multiply(x,y){

        if(x == null || y == null,
            x == undefined || y == undefined)
               throw new Error('Please provide 2 valid numbers to Multiply');


        return Math.ceil(x*y);               

    },

    divide(x,y){

        return Math.ceil(x/y);
    }

    
    
}


module.exports = calculator;