// call back function using set timeout method

function greet(name,callback)
{
 console.log("HI...."+name)
 callback(name);

}

function show(n)
{
    console.log("hey...."+n)
}

console.log("welcome")
setTimeout(greet,1000,'shruthi',()=> show('k'))
console.log("bye..")