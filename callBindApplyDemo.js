let student =
{
    name: "shruthi",
    place: "dvg",

    details: function ()
    {
        console.log("hi hey"+ this.name + " " + this.place)
    }
}


student.details();

//second object
let student2 =
 {
    name : "john",
    place : "blr",

    details : function ()
    {
        console.log("hi "+ this.name + " " + this.place)
    }
 }

 student2.details();

//writing function outside...

function printdetails (age,course)
 {
     console.log("hi "+ this.name + " " + this.place + " your age " + age + " " + course)
 }


 // Using call method
 printdetails.call(student,12,"BE")

 //using apply method
 printdetails.apply(student,[23,"MCA"])


 //using bind method
 let b = printdetails.bind(student,25,"CIVIL")
 console.log(b);
 b();