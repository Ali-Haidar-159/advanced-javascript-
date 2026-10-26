"use strict"

// main code 

let paymentSuccess = true ;
let marks = 70 ;

function enroll(){

    console.log("Enroll is in processing ...");

    let myPromise = new Promise(function(resolve,reject){

        setTimeout(function(){
            if(paymentSuccess){
                resolve();
        } 
        else{
            reject("payment is not complete");
        }
        },2000);

    });

    return myPromise;

}

function progress(){

    console.log("Exam is ongoing ...");

    let myPromise = new Promise(function(resolve,reject){

        setTimeout(function(){
            if(marks >= 80){
            resolve();
            }
            else{
                reject("You do not have more than 80 marks");
            }

        },3000) ;
    })

    return myPromise;

}

function getCertificate (){

    let myPromise = new Promise(function(resolve){

        setTimeout(function(){
            resolve("Congrats you get the certificate");
        },1000);

    });

    return myPromise;
}


enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(res){
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    });