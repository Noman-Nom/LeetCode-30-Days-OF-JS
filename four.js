const createCounter = (init)=>{

    let precessedValue = init 
    return{

        increment: function(){
               
        precessedValue = precessedValue +1
        return precessedValue
        
         
        },
        decrement: function(){

                        
        precessedValue = precessedValue -1
        return precessedValue
         
        },
        reset: function(){

            precessedValue = init

                
                return precessedValue
        },
    }
}

const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())
