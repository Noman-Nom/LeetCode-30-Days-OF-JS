// first  we solve basic problems 
// Problem 1: Create a Multiplier Function
// Create a higher-order function createMultiplier that takes a number multiplier as an argument and returns a new function. The returned function should take another number as an argument and return the product of the two numbers.


const createMultiplier = ( a)=>{   // a = 2

    return function(b){       // b = 5 

            return   x = a - b 
    }


}

const multiplyBy2 = createMultiplier(2)
// console.log(multiplyBy2(5))



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

            // console.log(evenNumber)

// ,,,,,,,,,,,,,,,,,,,,,....
           const CheckIsEven = (num)=>{
                let predicateArr = []
                    for (let i = 0; i < arr.length; i++) {
                       const evenNum = arr[i] %2===0 
                            predicateArr.push(evenNum)
                        
                    }

                    return predicateArr
           }

        //    console.log(CheckIsEven(arr))
            
    const getEvenNum = (arr)=>{

        let predicateArr = []
        for (let i = 0; i < arr.length; i++) {
                if (arr[i] %2===0) {

                    predicateArr.push(arr[i])
                    
                }

            
            
        }
        return predicateArr
    }

    // console.log(getEvenNum(arr))


//     Problem 3: Apply Function to Array
// Create a higher-order function applyFunctionToArray that takes a function and an array as arguments. The returned function should return a new array where the function is applied to each element of the array.


const squareFunction = (num)=>{

        return  num * num 
}

        const GetSquare = (sq  , arr)=>{

                    let result =[]
                    for (let i = 0; i < arr.length; i++) {
                     result.push(sq(arr[i]))
                        
                    }

                    return result
        }

        const getSquareResult = GetSquare(squareFunction , arr)

        console.log(getSquareResult)


//         Problem 4: Compose Functions
// Create a higher-order function compose that takes two functions f and g as arguments. The returned function should take an argument x and return f(g(x)).


                const f = (x)=>{
                                return x +2 
                }
                

                const g = (x)=>{
                                return x * 2
                }
                        const HOD = (x)=>{
                                      return  f(g(x))
                        }

                        const result1 = HOD(3)
                        console.log("result",result1)