var days= [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];
/*days.sort();
days.reverse();
console.log(days);

console.log(days.indexOf('Monday'));
console.log(days.indexOf('Saturday'));

var nums=[20,30,10,5,15,50,24,40];
nums.sort(function(x,y){
    return x-y;
});
console.log(nums);


var projects= [
    {hours: 20, name: 'Project 1'},
    {hours: 60, name: 'Project 2'},
    {hours: 40, name: 'Project 3'},
    {hours: 65, name: 'Project 4'},
    {hours: 80, name: 'Project 5'}
];

projects.sort(function(x,y){
    return x.hours-y.hours;
});
console.log(projects);*/

//Push and Pop Methods
days.push('Saturday');
days.push('Sunday');
days.sort();
//console.log(days);

var removedDay=days.pop();
//console.log(days);
//console.log(removedDay);

//shift, unshift and splice methods
//days.unshift('Holiday');
//console.log(days);

//days.shift();
days.push('Wednesday');
console.log(days);

//days.splice(2,3);
//console.log(days);

days.splice(2,0,'january','february','March');
console.log(days);

var sliceArray=days.slice(2,5);
console.log(sliceArray);
console.log(days);

