/*function foo(){
    console.log('function foo is called');
}
foo('hello');*/

function bar(x,y,z){
    console.log(x,y,z);
    console.log('function bar is called');
    console.log(arguments);
    console.log(arguments[0],arguments[1],arguments[2],arguments[3]);
    console.log(arguments.length);
}
bar('hello','world','good','morning');