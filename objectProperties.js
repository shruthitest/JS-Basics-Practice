let person = 

{ 
    name : "Shruthi",
    age : 12,
    salary : 1200

}

// print object
console.log(person)

//modify object value
person.salary = 1500
console.log(person)

//add object
person.designation = "IT"
console.log(person)

//delete object
delete person.age
console.log(person)

//new function property
person.display = function()
{
    console.log("inside New function")

}
person.display();