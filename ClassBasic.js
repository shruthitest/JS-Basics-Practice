
// class definition
class Person 
{
    //constructor
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }

    //class method
    greet()
    {
        console.log(`Your name is ${this.name} and age is ${this.age}`)

    }

    
}

//create object
let p1=new Person("shruthi",25);
let p2 = new Person("marry",30);

// call greet method now
p1.greet();
p2.greet();