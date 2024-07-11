// Caching
// Question involves the concept of caching.
// Caching is a technique used to improve the performance of a program by storing the results of expensive operations and returning the cached result
// In this question, the memoized function stores the results of the expensive operations (sum, fib, and factorial) and returns the cached result when the same input values are requested again. This can improve the performance of the program significantly as it reduces the number of expensive operations that need to be performed.


// Example 1: Basic Caching


// Problem: Write a function add that adds two numbers. Implement a memoized version of this function that caches the results of previous additions.




const memoizeAddition = (fn)=>{
        let cache = new Map
        return function(...args){

            const key = JSON.stringify(args)
            if(cache.has(key)){
                return cache.get(key)
            }

            const result = fn(...args)
            cache.set(key,result)
            return result
        }
        

}

const add = (a,b )=>{
    return a+b
}

const MemoizedAdd = memoizeAddition(add)

// console.log(MemoizedAdd(2, 3)); // Output: 5 (calculated)
// console.log(MemoizedAdd(2, 3)); // Output: 5 (cached)
// console.log(MemoizedAdd(3, 2)); // Output: 5 (calculated)
// console.log(MemoizedAdd(2, 3)); // Output: 5 (cached)


//  firts solve basic factorial problem 

        const factorialOfN = (n)=>{

            if(n<1) return -1
            let result = 1
            for (let i = 1; i <=n; i++) {
                result = result * i
                
            }
            return result

        }

   // const factorialOfN = (n)=>{

        //     if(n<1) return -1
        //     let result = 1
        //     for (let i = n; i >0; i--) {
        //         result = result * i
                
        //     }
        //     return result

        // }

        const GetFactorialResult = factorialOfN(5)
        // console.log("Fectroal is = ", GetFactorialResult)


        // implement using cache 


        const memoizedFactorial = (fn) => {


            let cache = new Map()
            return function(...args){
                const key = JSON.stringify(args)
                if(cache.has(key)){
                    return cache.get(key)

                }

                const result = fn(...args)

                cache.set(key, result)
                return result
            }


        }

        const factorialForMemoized = (n)=>{

           
            if(n<1) return -1
            let result = 1
            for (let i = 1; i <=n; i++) {
                result = result * i
                
            }
            return result
        }

        const GetCachedFactorial = memoizedFactorial(factorialForMemoized)
        // console.log("Memoized Factorial = ", GetCachedFactorial(5))




        //  complete solution of leetcode question

//         Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.



        const sum = (a,b)=>{
                return a+b
        }
        const fib = (n)=>{
                    if(n<=1) return 1
                  return  fib(n-1) + fib (n-2)
        }
        const factorial = (n)=>{
                 if(n<=1) return 1
                 return factorial(n - 1) * n
        }

        const memoize = (fn)=>{
                let cache = new Map

               return function(...args){

                let key = JSON.stringify(args)
                if(cache.has(key)){

                    return cache.get(key)
                }
                let result = fn(...args)
                cache.set(key, result)
 
                return result
               }



        }

        // testcases 
        // Example usage with sum function
const memoizedSum = memoize(sum);
console.log(memoizedSum(2, 2)); // Output: 4
console.log(memoizedSum(2, 2)); // Output: 4 (cached)
// console.log(memoizedSum.getCallCount()); // Output: 1

const memoizeFactorial = memoize(factorial);
console.log(memoizeFactorial(2)); // Output: 2
console.log(memoizeFactorial(3)); // Output: 6
console.log(memoizeFactorial(2)); // Output: 2 (cached)
// console.log(memoizeFactorial.getCallCount()); // Output: 2

const memoizedFib = memoize(fib);
console.log(memoizedFib(5)); // Output: 8
// console.log(memoizedFib.getCallCount()); // Output: 1
