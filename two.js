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


//  example 

const counterInit = ()=>{

    let counter =0 

    const counterInc = ()=>{
        counter ++

        console.log(counter)
        return counter
    }

    return counterInc
}

const newCounter = counterInit()

newCounter()
newCounter()



// lets solve the problem 
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc)


const Initcounter = (n)=>{

    let counter = n

    console.log(counter)

    const IncCounter = ()=>{
        counter++ 
       
        return counter
    }

    return IncCounter



} 

const myCounter = Initcounter(3)
console.log(myCounter())
console.log(myCounter())
console.log(myCounter())