/*var today = new Date();
console.log(today);

var milleniumStart = new Date(2000,0,1);//0 for jan and 11 for Dec
console.log(milleniumStart);

today.setDate(today.getDate()+1);
console.log(today);

var july31= new Date(2022,7,31,5,30,0,0);
console.log(july31);

july31.setDate(july31.getDate()+1);
console.log(july31);*/

//getters
//console.log(july31.getDay());
//console.log(july31.getMonth());
console.log((new Date()).getDay());

//setters
var today= new Date();
console.log(today);
today.setDate(9);
console.log(today);
today.setFullYear(2024);
console.log(today);

console.log(today.toTimeString());