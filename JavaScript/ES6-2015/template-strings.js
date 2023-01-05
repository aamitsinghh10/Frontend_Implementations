const name = 'john', message = 'Good Morning';
//const greeting = message +''+ name + '!';

const greeting = `${message} ${name}!`;
console.log( greeting );

//form table from given properties of object
const john ={
    name:'john',
    email:'john@gmail.com',
    age:32
};

/*const strTr = '<tr>'+
'<td>' + john.name + '</td>' +
'<td>' + john.email + '</td>'+
'<td>' + john.age + '</td>' +
'<tr>';*/

const strTr =`
<tr>
<td>${john.name}</td>
<td>${john.email}</td>
<td>${john.age}</td>
<tr>`;
console.log(strTr);

