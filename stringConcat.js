function concat(str1,str2)
{

    console.log("-----Program to concate two strings-----\n")
    return str1+str2
}

console.log("Your concat results " + concat("shru","vv"))

// another shortway for concate using operator +=

function concat2(str01)
{
    console.log("-----shortcut Program to concate two strings-----\n")
    return str01+="learning"
}
console.log("shortcut results is " + concat2("java"))

// String method to concatenate string
function condemo(String)
{
    console.log(String.concat(" used string method to concatenate text"))
}
condemo("test")

// String method to replace text

function replacedemo(Strr)
{
    console.log(Strr.replace(Strr,"welcome"))
    console.log(Strr.replace("hi","VV"))
}
replacedemo("hi hello")

//String split
function splitdemo(splittest)
{
   let res =(splittest.split(" "))
    console.log(res[0])
    console.log(res[1])
    console.log(res[2])
}
splitdemo("hi hello shru")

// trim function

function trimdemo(ttest)
{
    console.log(ttest.trim())
    
}
trimdemo("      hi    hello  ")