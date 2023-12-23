// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 
const createHelloWorld = ()=>{

    const helloWorldReturn = ()=>{

        return "Hello World"
    }

    return helloWorldReturn



}

const outputfunction = createHelloWorld()

console.log(outputfunction())


//  it is a high order functions 

// Example 1: Create a Repeater Function

const CreateRepeatFunction = (message , repeatCount)=>{

    const repeater = ()=>{

            return message.repeat(repeatCount)

    }

    return repeater
}

const runCreateRepeatFunction = CreateRepeatFunction("Muhammad Noman" , 3)

console.log(runCreateRepeatFunction())