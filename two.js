// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc)

// This question is a good reminder of these topics/concepts:

// Closure
// High-order function
// Pre-increment vs Post-increment


//  first recall the concept of closure fuunction

const outerfunction = (outer)=>{

    const innerfunction = (inner)=>{

       console.log(`this is from ${outer}`);
       console.log(`this is from ${inner}`);
    }

    return innerfunction
}

const newFunction = outerfunction("outer")

newFunction('inner')