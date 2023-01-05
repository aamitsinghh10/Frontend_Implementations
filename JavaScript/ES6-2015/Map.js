const numbers = new Map([[1,'one'],[2,'two'],[3,'three']]);

console.log(numbers.size);
console.log(numbers.entries());
console.log(numbers.keys());
console.log(numbers.values());

//to add something
numbers.set(40,'fourty');
console.log(numbers);

console.log(numbers.get(3));//important

numbers.delete(2);
console.log(numbers);

//numbers.clear();//for empty map

for(let [key, value] of numbers){
    console.log(`${key} = ${value}`);
}
