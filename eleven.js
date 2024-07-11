// Caching
// Question involves the concept of caching.
// Caching is a technique used to improve the performance of a program by storing the results of expensive operations and returning the cached result
// In this question, the memoized function stores the results of the expensive operations (sum, fib, and factorial) and returns the cached result when the same input values are requested again. This can improve the performance of the program significantly as it reduces the number of expensive operations that need to be performed.


// Example 1: Basic Caching


// Problem: Write a function add that adds two numbers. Implement a memoized version of this function that caches the results of previous additions.




const memoize = (fn)=>{
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

const MemoizedAdd = memoize(add)

console.log(MemoizedAdd(2, 3)); // Output: 5 (calculated)
console.log(MemoizedAdd(2, 3)); // Output: 5 (cached)
console.log(MemoizedAdd(3, 2)); // Output: 5 (calculated)
console.log(MemoizedAdd(2, 3)); // Output: 5 (cached)


//  firts solve basic factorial problem 

        const factorialOfN = (n)=>{

            if(n<1) return -1
            let result = 1
            for (let i = 1; i <=n; i++) {
                result = result * i
                
            }
            return result

        }


        const GetFactorialResult = factorialOfN(5)
        console.log("Fectroal is = ", GetFactorialResult)