"use strict"

// ========= this keyword ==========

/*
let user = {
    name : "Ali" ,
    display (){
        console.log(`My name is :  ${this.name}`)
    }
}

user.display() 
*/ 

// ========== call function =============== syntax : methodName.call(obj,arg1,arg2...)

/*
function printData (){
    console.log(this.name);
}

let user = {
    name : "Ali"
}

printData.call(user)

*/
/*

function printData (age,city){
    console.log(`My name is ${this.name} and i am ${age} years old now.Also my home town is ${city}`);
}

let user = {
    name : "Ali"
}

printData.call(user,25,"Chapai")
*/

// ========== apply function =============== syntax : methodName.call(obj,[arg1,arg2...])

/*
function printData (age,city){
    console.log(`My name is ${this.name} and i am ${age} years old now.Also my home town is ${city}`);
}

let user = {
    name : "Ali"
}

printData.apply(user,[25,"Chapai"])

*/

// ========== bind function =============== syntax : returnedMethod = methodName.bind(obj)

function printData (){
    console.log(`My name is ${this.name}`);
}

let user = {
    name : "Ali"
}

let display = printData.bind(user)
display()



