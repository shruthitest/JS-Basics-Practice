// callback function basic

function first(name,callback)
{
    console.log("hey")
    callback();
}

function display()
{
    console.log("hello")

}

function show()
{
    console.log("hi")
}

first("shruthi",show);
