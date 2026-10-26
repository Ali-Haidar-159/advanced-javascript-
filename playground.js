"use strict"

// main code 

let languages = [

    {name: "JS" , type:"scripting"},
    {name: "Java" , type:"normal"},
    {name: "Php" , type:"scripting"}

] ;


let scriptingLanguages = Object.groupBy(languages , function(language){
    return language.type ;
}) ;

console.log(scriptingLanguages) ;



