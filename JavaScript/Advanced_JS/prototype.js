var obj = {
    x : 1
};

var proto = {
    y:2
};
console.log(Object.getPrototypeOf(obj));
console.log(obj.__proto__);

Object.setPrototypeOf(obj, proto);
console.log(obj);


//obj will inherit the properties of proto
console.log(obj.y);

var obj2 = {
    z : 3
};

Object.setPrototypeOf( obj2, proto );
console.log( obj2 );

proto.y = 100

/* Assignment Question
var john = {
    name: 'John',
    age: 32
};

var johnPrototype = {
    numFeet: 2,
    numHands: 2,
    talk: function( message ) {
        console.log( message );
    }
};

Object.setPrototypeOf(john, johnPrototype);
console.log(john);*/

var john = {
    name: 'John',
    age: 32
};

var jane = {
    name: 'Jane',
    age: 28
};

var johnPrototype = {
    numFeet: 2,
    numHands: 2,
    introduce: function() {
        console.log( this.name );
    }
};

Object.setPrototypeOf( john, johnPrototype );
Object.setPrototypeOf( jane, johnPrototype );

john.__proto__.numFeet = 3;
console.log( jane.numFeet );