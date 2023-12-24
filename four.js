const createCounter = (init)=>{

    return{

        increment: function(){

            init +=1
        },
        decrement: function(){

            init -=1
        },
        reset: function(){

            init +=1
        },
    }
}

