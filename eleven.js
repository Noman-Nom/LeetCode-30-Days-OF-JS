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


console.log("final-output",MemoizedAdd(2,2))