// console.log("hello")
// var hi=232;
// var i;
// for(i=0;i<10;i++)
//     console.log(i)
function Calculator(){
    var x = parseInt(document.getElementById("num1").value);

var y = parseInt(document.getElementById("num2").value);

var operator = document.getElementById("op").value;

var result=0;
if(operator=="+"){
    result=x+y;
}
else if(operator=="-"){
    result=x-y;
}
else if(operator=="*"){
    result=x*y;
}
else if(operator=="/"){
    result=x/y;
}

document.getElementById("result-text").innerText=result;
event.preventDefault();
}