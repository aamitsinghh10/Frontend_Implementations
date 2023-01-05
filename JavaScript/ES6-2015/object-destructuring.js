const john = {
    name : 'john',
    age : 32,
    emailids: [
        'john@gmail.com',
        'john@yahoo.com'
    ],
    address:{
        city: 'Banglore',
        pincode: 501001
    }
};

//const name = john.name;
const {name,age: yearsOld, address:{city:residence}, emailids:[,secondaryId]} = john;
console.log( name,yearsOld, residence,secondaryId );
