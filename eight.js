// releated basics example 
// Simple Example
// Problem Statement
// Given two functions f(x) = x + 2 and g(x) = x * 3, create a new function that is the composition of these two functions. In other words, create a function h(x) such that h(x) = f(g(x)).



        const f = (x)=>{
                return x = x+2
        }

        const g = (x)=>{
                return x = x * 3

        }

        const h = (x)=>{

            return f(g(x))
        }

        const result = h(4)
        console.log(result)