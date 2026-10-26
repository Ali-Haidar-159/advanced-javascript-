"use strict"

// main code 

let arr = [10,20,30];

let sum = arr.reduce(function(previousValue,currentValue,currentIndex,mainArray){

    return previousValue + currentValue ;

},0);

console.log("the sum is : ",sum);