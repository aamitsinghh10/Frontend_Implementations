//forEach
var days = [
    { day : 'sunday', hour : 2 },
    { day : 'monday', hour : 3 },
    { day : 'tuesday', hour : 6 },
    { day : 'wednesday', hour : 8 },
    { day : 'thursday', hour : 9 }
];

days.forEach(function( item ){
    console.log(item);
});

//filter method
let resultDays = days.filter(function(item){
    return item.hour>5;
});
console.log(resultDays);

//Map method
var arr=[1,2,3,4,5,6,7,8];
let resultArr = arr.map(function(item ){
    return item*item;
});

console.log(resultArr);


//Assignment Question
var scores = [
    { subject: 'Math', score: 89 },
    { subject: 'Programming', score: 100 },
    { subject: 'Physics', score: 95 },
    { subject: 'Chemistry', score: 75 },
    { subject: 'History', score: 59 },
];

var result = scores.map(function(item){
    if(item.score >=91){
        return 'A';
    }
    else if(item.score>=81 && item.score<90){
        return 'B';
    }
    else if(item.score>=71 && item.score<80){
        return 'C';
    }
    else{
        return 'D';
    }
});
console.log(result);