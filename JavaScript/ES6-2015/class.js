class person{
    constructor(name,age){
        console.log(this);
        this.name = name;
        this.age = age;
    }
    celebrateBirthday(){
        this.age++;
    }
}
const john = new person('John', 32);
console.log(john);

john.celebrateBirthday();
console.log(john);