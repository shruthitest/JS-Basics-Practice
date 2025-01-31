
// Using arrow function

let addTwoNumbers = (a,b) =>  a+b
    
    let results = addTwoNumbers(4,4)
    console.log(results)


    // Using normal function

    let mulToNumbers = function (x,y)
    {
        return console.log("your multiplication is " + x*y)
    }
    mulToNumbers(2,2)


    // arrow function without parameters
    let printMyName = () => "Shruthi";
    console.log(printMyName())


    // arrow function with single parameter
    let square = a => a*a
    console.log(square(5))