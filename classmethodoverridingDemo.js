class person
{
    constructor (name)
    {
        this.name=name;
        this.occupation="unemployed"
    }
    greet()
    {
        console.log("Inside parent method" + this.name)
    }
}

class student extends person
{
    constructor(name)
    {
        super(name)
        this.occupation="IT Eng."
    }
    greet()
    {
        console.log("Inside child method " + this.name)
        console.log("Inside child class method " + this.occupation)
    }
}

let s1=new student("shruthi")
s1.greet();