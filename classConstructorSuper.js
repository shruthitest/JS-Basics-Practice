class person
{
    constructor(name)
    {
        this.name=name
    }

    greet ()
    {
        console.log(`this is parent class greet method ${this.name}`)
    }
}

class student extends person
{
    constructor(name)
    {
        console.log("Child class constructor")
        super(name)
        
    }
    
}

let s1 = new student("shruthi");
s1.greet()