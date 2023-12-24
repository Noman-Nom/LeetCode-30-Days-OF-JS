// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".\


const mainFunction = (val)=>{

    return {
        tobe: function(anotherVal){

            if(val=== anotherVal){
                console.log(" tobe ,True")
            }
            else{
                console.log(" tobe ,not true")
            }

        },
        notTobe: function(anotherVal){

            if(val!== anotherVal){
                console.log(" notTobe , True")
            }
            else{
                console.log(" notTobe , not true")
            }

        }

        
    }
    
}


try {
    
    mainFunction(2).tobe(2)
    mainFunction(2).notTobe(6)

} catch (error) {
    
    console.log(error)
}