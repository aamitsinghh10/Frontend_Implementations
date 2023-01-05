//function declaration syntax

function square(a){
    return a*a;
}
console.log(square(4));

function sum(x,y){
    var result=x+y;
    return result;
}
var a=sum(12,13);
console.log(a);

//function expresssion syntax

var sum2=function(x,y){
    var result=x+y;
    return result;
}
console.log(sum2(15,16));