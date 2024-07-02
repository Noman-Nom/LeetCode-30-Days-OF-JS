// releated basics example 
// Simple Example
// Problem Statement


// Given two functions f(x) = x + 2 and g(x) = x * 3, create a new function that is the composition of these two functions. In other words, create a function h(x) such that h(x) = f(g(x)).



const f = (x) => {
    return x = x + 2
}

const g = (x) => {
    return x = x * 3

}

const h = (x) => {

    return f(g(x))
}

const result = h(4)
console.log(result)

// More Complex Example
// Now, let's take the same approach and solve the original problem from the question.

// Problem Statement
// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions. The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))). The function composition of an empty list of functions is the identity function f(x) = x.

const ArrayFunctions = [
    (x) => x + 1,   // f(x)
    (x) => x * x,   // g(x)
    (x) => 2 * x     // h(x)
]

// const ArrayFunctions = []   // for empty case
const compose = (functions) => {
    if (functions.length === 0) {
        return (x) => x
    }

    //  compose the function from right to left 
    // fn(x) = f(g(h(x)))

    return functions.reduceRight((prevFn, nextFn) => {
        return (x) => nextFn(prevFn(x))

    })


}

const composedFunction = compose(ArrayFunctions)

const result1 = composedFunction(4)
        console.log(result1)