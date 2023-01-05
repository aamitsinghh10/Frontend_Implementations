/*const sum = function(x,y,cb){
    var result=x+y;
    cb(result);
}
//console.log(sum(12,13));

/*function logResult(result){
    console.log(result);
}

sum(10,11,logResult);

sum(10,12,function logResult(result){
    console.log(result);
});


//Practice
const sum1=function(x,y,cb){
    var result=x+y;
    cb(result);
};


sum1(20,25,function(result){
    console.log(result);
});//Anonymous Function*/


//IIFE in JavaScript(Immediately Invoked function Expression)
(function(){
    var x=100;
    const sum=function(x,y,cb){
        var result=x+y;
        cb(result);
    };
    sum(20,30,function(result){
        console.log(result);
    });
}());