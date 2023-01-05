const days = [
    'sun',
    'mon',
    'tue',
    'wed',
    'thu'
];

//const first = days[0], second = days[1], third = days[2], fifth = days[4], sixth = days[5];
const [first,second, third, ,fifth, sixth ='Holiday'] = days;
console.log(first,second, third,fifth,sixth);