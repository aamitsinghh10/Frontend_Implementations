function person( name,age ){

    this.name = name;
    this.age = age;
    };
   // console.log(this);
    //return this;
    person.prototype.celebrateBirthday = function(){
        this.age++;
    };

/*var john = {
    name : 'john',
    age : 32
    celebrateBirthday : function(){
        this.age++;
    }
};

var mary = {
    name : 'mary',
    age : 28
    celebrateBirthday : function(){
        this.age++;
    }
};*/

var john = new person('john', 32);//john object
john.celebrateBirthday();
console.log(john);

var mary = new person('mary', 28);//mary Object
mary.celebrateBirthday();
console.log(mary);
//Problem of this above Approach is everytime when we create new object function is also created for them
//if we create thousands of objects similar function is created for every object and lot of space is wasted

//so to solve this problem we pass function as prototype

console.log( john.__proto__ = person.prototype );
console.log( mary.__proto__ = john.prototype );