"use strict"

// main code 

let myMap = new Map([
    ["name","Ali"],
    ["age",25]
])

for (let item of myMap) {
    console.log(item[1])
}