try {

   Star();
   console.log('After call to foo(within try block)');

} catch(error){
     console.log(error.message);
} finally {
    console.log('inside finally block');
}
console.log('after star called');


//Assignment
function foo() {
    console.log( 1 );
}

try {
    console.log( 2 );
    fooooo();
    console.log( 3 );
} catch( err ) {
    console.log( 4 );
} finally {
    console.log( 5 );
}