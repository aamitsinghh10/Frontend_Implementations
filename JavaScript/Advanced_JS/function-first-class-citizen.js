function foo(callback){
    var x=10,y=12;
    var z=x+y;

    callback();

    function retFn(){
        console.log('retFn called');
    }
    return retFn;
};

function bar(){
    console.log('bar called');
}
var resultFn = foo(bar);
resultFn();

//Assignment question
function f( g ) {
    console.log( g( 12, 13 ) );
}

var sum = function( x, y ) {
    return x + y;
};

f( sum );

//2
function f() {
    return function() {
       console.log( 'inner called' );
    };
}

var h = f()();
