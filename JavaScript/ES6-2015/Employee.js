class Person{
    constructor(name,age){
        //console.log(this);
        this.name = name;
        this.age = age;
    }
    celebrateBirthday(){
        this.age++;
    }
}
class Employee extends Person {
     constructor(name, age, role, department){
        super(name, age);

        this.role = role;
        this.department = department;
     }
     promote(){
        this.role = 'Senior ' + this.role;
     }
     celebrateBirthday(){
        super.celebrateBirthday();
        console.log('Happy Birthday');
    }
}

const john = new Employee('John', 32,'Web Developer','IT');
console.log(john);

john.promote();
console.log(john);

john.celebrateBirthday();
console.log(john);