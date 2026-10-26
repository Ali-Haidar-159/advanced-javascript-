"use strict"

// main code 

function magic (){

    let name = "Ali" ;

    function innerFunc(){

        console.log("this is inner function");
        console.log(`My name is ${name}`) ;

    }
    
    return innerFunc;

}

let fun = magic()
fun()
