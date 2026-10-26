"use strict"

// main code 

function setCookie(cname,cvalue,exDays){

    let dateObj = new Date();
    dateObj.setTime(dateObj.getTime()+ (exDays*24*60*60*1000)) ;

    document.cookie =`${cname}=${cvalue}; expires=${dateObj.toUTCString()}; path=/`;

}

function getCookie(){
    let cookies = document.cookie;
    console.log(cookies)
}
