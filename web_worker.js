"use strict"

// main code 

let w ; 

function startWorker(){
    if(typeof Worker !== "undefined"){

    if(typeof w == "undefined"){
            w = new Worker("kaj.js");
        }

        w.onmessage = function(event){
            document.getElementById("demo").innerHTML = `<h2>${event.data}</h2>`
        }

        w.onerror = function(err){
            console.log("Find error to worker : ",err);
        }

    }
    else{
        alert("Your browser does not support the Web Worker") ;
    }
}

function stopWorker(){
    if(typeof w !== "undefined"){
        w.terminate();
        w = undefined;
    }
}
