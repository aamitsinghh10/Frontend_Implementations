//1. when declaring function Argument
function sort(x,y,...others){
    console.log(x);
    console.log(y);
    console.log(others);
}
function sort(...numbers){
    console.log(numbers);
    return numbers.sort();
}
const res = sort(14,13,12,15,17,16,20);
console.log(res);

//2. when Array destructuring
const days = [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri'
];
const[first,second,...restdays] = days;
console.log(first, second, restdays);
//3. when Object destructuring

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
const {name,age,...otherdetails} = john;
console.log(name, age, otherdetails);