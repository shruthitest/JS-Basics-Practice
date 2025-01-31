class Person
{
    constructor(name)
    {
        this.name=name
    }

    greet ()
    {
        console.log(`Your name is ${this.name}`)
    }
}

// Child class which inherits all methods and properties from parent class person
class Student extends Person
{

}


let s1 = new Student("shruthi")
s1.greet()
