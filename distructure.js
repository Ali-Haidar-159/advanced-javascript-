"use strict"

// main code 

let user = {
    name : "Ali",
    age : 25,
    email : ""
}


// Only destructuring and rename 

let {name,age,email:Gmail} = user;
console.log(`My name is ${name} and i am ${age} years old and my contact id is ${Gmail}`)


// create new obj using destructure

let person = {
    job : "software engineer",
    salary : 25000,
    email : Gmail || "haidar@gmail.com"
}

console.log(person)





// let uName = "Ali";
// let phone = "";
// let department =  "Compute Science And Engineering"

// let student1 = {
//     ...(uName && { uName }),
//     ...(phone !== undefined && { phone }),
//     ...(department !== undefined && { department })
// }


// console.log("This is student-1 : ",student1);


