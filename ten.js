// first  we solve basic problems 
// Problem 1: Create a Multiplier Function
// Create a higher-order function createMultiplier that takes a number multiplier as an argument and returns a new function. The returned function should take another number as an argument and return the product of the two numbers.


const createMultiplier = ( a)=>{   // a = 2

    return function(b){       // b = 5 

            return   x = a - b 
    }


}

const multiplyBy2 = createMultiplier(2)
console.log(multiplyBy2(5))