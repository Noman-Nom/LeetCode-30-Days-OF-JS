const arr = [10,20,30,40,50,60]

const customFilter = (arr,fn)=>{

    const filterArray = []
    for (let i = 0; i < arr.length; i++) {
        filterArray[i]=fn(arr[i],i)
        
    }
        return filterArray
}

const filterFunction = (value,index)=>{

                 return value > 20
}

const result =  customFilter(arr,filterFunction )

console.log(result)