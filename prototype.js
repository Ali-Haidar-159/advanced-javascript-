"use strict"

// main code 

function Person (name,email,age){
    this.name = name 
    this.email = email 
    this.age = age
}

let obj = new Object();
obj.village = "Nayansuka"
obj.villageWordNo = 10

Person.prototype.university = "EWU"
Person.prototype.display = function(){
    console.log(`My name is ${this.name} and i am ${this.age} years old.`)
}

let p1 = new Person("ali","ali@gmail.com",25);
p1.__proto__ = obj ;

console.dir(p1);


