"use strict"

// main code 

let paymentSuccess = true ;
let marks = 80 ;

function enroll (callback){

    console.log("Enrollment is processing ...") ;

    setTimeout(function(){

        if(paymentSuccess){
            callback()
        }
        else{
            console.log("Payment is not complete!");
        }

    },2000);

}

function progress (callback){

    console.log("Progress is running ...");

    setTimeout(function(){

        if(marks >= 80){
            callback()
        }
        else{
            console.log("You do not have enough mark to get the certificate!");
        }

    },3000);

}

function getCertificate (){
    console.log("your certificate is generating...");

    setTimeout(function(){
        console.log("Congratulations you get the certificate")
    },2000);
}


enroll(function(){
    progress(getCertificate)
});

