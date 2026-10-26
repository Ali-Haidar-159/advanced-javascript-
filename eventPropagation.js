let div1 = document.getElementById("div1");
let form1 = document.getElementById("form1");
let btn = document.querySelector("#btn");


//capturing or tricking : = parent -> child  
div1.addEventListener("click",listener,{capture : true});
form1.addEventListener("click",listener,{capture : true});
btn.addEventListener("click",listener,{capture : true});


//bubbling : = child -> parent
/*
div1.addEventListener("click",listener);
form1.addEventListener("click",listener);
btn.addEventListener("click",listener);
*/

function listener (event){
    console.log(this.tagName); // this = event.currentTarget
}