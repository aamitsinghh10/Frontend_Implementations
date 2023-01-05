var sholay={
    name :'sholay',
    cast:[
        'Amitabh','Dharmendra','Hema','Jaya'
    ],
    "box Office Stats":{
        countries:10,
        collection:12300000
    },
    addToCollection: function(amount){//"this is the context of the method"
        this["box Office Stats"].collection+=amount;
    }
};

//Access the Properties
console.log(sholay.name);
console.log(sholay.cast[1]);
console.log(sholay["box Office Stats"].collection);
sholay.addToCollection(3500000);

//Add and delete Properties
sholay.villain = 'Gabbar Singh';

//also we add method
sholay.addToCast = function(newMember){
    this.cast[this.cast.length] = newMember;
};
sholay.addToCast('sambha');
sholay.addToCast('Thakur');

delete sholay["box Office Stats"];
console.log(sholay);