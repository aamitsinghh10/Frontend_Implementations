//1-Pass Items of an Array as Arguments when calling a function
const numbers = [20,14,255,129,234,222,11,34];
const res = Math.max(...numbers);
console.log(res);

const arr1 = [1,2,3,4], arr2 = [5,6,7,8];
const arr3 = [...arr1,...arr2];//spread out items in Array as comma separated values
console.log(arr3);

//2-Object-Spread
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

const johnCopy = {//Shallow Copy, not a deep copy
    ...john
};
//console.log(john);
//console.log(johnCopy);

//primitive value change
johnCopy.name = 'christian stewart';

//non-primitive value change
johnCopy.emailids.push('john@xyz.com');

console.log(john);
console.log(johnCopy);