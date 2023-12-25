// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method

const arr = [1,2,3,4,5,6,7,8,9]


const customFn = (arr , fn)=>{

    const transformedArray = []

    for (let i = 0; i < arr.length; i++) {
        
        transformedArray[i]= fn(arr[i], i)
        
    }
    return transformedArray
}

const mappingFunction = (value , index)=>{

    return value * index
}



const resultArray = customFn(arr , mappingFunction)

console.log(resultArray)
