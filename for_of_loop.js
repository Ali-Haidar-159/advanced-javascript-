"use strict"

// main code 

let arr = [10,20,30,40,50];

// for (let item of arr) {
//     console.log(item)
// }

let iteratorFunction = arr[Symbol.iterator]() ;

console.dir(iteratorFunction.next());
console.dir(iteratorFunction.next());
console.dir(iteratorFunction.next());
console.dir(iteratorFunction.next());
console.dir(iteratorFunction.next());
console.dir(iteratorFunction.next());

/*

when the value of done=true then the loop will stop

*/
