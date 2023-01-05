function greeting(message='Hello',name='world'){
    return `${message} ${name}`;
};

console.log( greeting('good morning', 'john'));
console.log(greeting('good morning'));
console.log(greeting());
console.log(greeting(undefined,'john'));