// method overdidding concept 

class car 

{
    constructor(name)
    {
        this.name=name
    }

    display()
    {
        console.log("Parent class car name is  " + this.name)
    }

}

class carmodel extends car

{

    constructor(name,model)
    {
        super(name);
        this.model=model;
    }


    printmodel()
    {
        console.log("Child class model name is  " + this.model)
    }

    all()
    {
        this.display();
        this.printmodel()
    
    }

}

let c1=new carmodel("Nexon","Creative");
c1.all();