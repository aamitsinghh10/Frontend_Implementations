function greet( message, name ){

    console.log(this);//context
    console.log(message+' '+name+'!');
};

greet( 'good morning', 'Ajay');

console.log(greet instanceof Object);

greet.x=100;//property
console.log(greet.x);

//methods
greet.foo = function(){
    console.log('greet foo is called');
};
greet.foo();

//call 
greet.call('hello');//we can change the context to whatever we wanted using call
greet.call('hello','good evening','vikram');

var args=['good Morning','pratiksha'];
greet.apply('hello',args);

greet.apply(null,args);


//bind
var greetBound = greet.bind('world');
greetBound('Hello','Ram');

var greetHola=greet.bind(null,'Hola');
greetHola('David');
greetHola('Brock');




//Assignment Questions

/*function sum( x, y ) {
    return x + y;
}
console.log( sum.call( 1, 2 ) );//NaN as the first argument is used to change context and other
for values


function sum1( x, y ) {

    for( var i = 0, result = 0; i < arguments.length; i++ ) {
        result += arguments[i];
    }
    return result;
}
console.log( sum1.apply( [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ) );//first argument [1,2] used for context 
change, so the size of argument is 2 thats why loop run till 2 index and 7 is answer*/

function sum( x, y ) {
    console.log( this );
}

var boundSum = sum.bind( 1, 2, 3 );
boundSum();