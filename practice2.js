let person = {
    name: "Jack",
    age: 25,

    sayAge: function ()  {
        console.log(this.age);
    }
}

person.sayAge(); // undefined