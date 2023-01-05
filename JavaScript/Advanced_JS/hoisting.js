/*console.log(x);
var x;
console.log(x);//result: undefined undefined*/

console.log(x);
var x=1;//value is assigned only here though variable is created earlier
console.log(x);//result: undefined 1

foo();
function foo(){
    console.log("function is callled");
};

bar();//Act as variable assignation
var bar=function(){
    console.log('bar is called');
};



