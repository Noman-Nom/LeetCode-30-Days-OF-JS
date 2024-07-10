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



// Problem 2: Filter Array with Predicate
// Create a higher-order function filterArray that takes a predicate function and an array as arguments. The returned function should return a new array containing only the elements for which the predicate function returns true.


const arr = [1,2,3,4,5,6,7,8,9]

const isEven = (num)=>{

        return num %2 ===0

}

        const filterArray = (predicate , arr)=>{
                return arr.filter(predicate)
        }

        const evenNumber = filterArray(isEven , arr)

            console.log(evenNumber)