// set timeout method usgae

function first()
{
    console.log("hi..")
}

function second()
{
    console.log("Hello...")
}

//setTimeout(first,3000);
setTimeout(()=>{
    first()
},3000)
//second();

setTimeout(()=>{first()},3000)

