function first(callback)
{
    console.log("first");
    callback();

}

function second(callback)
{
    console.log("second");
    callback();
}

function third(callback)
{
    console.log("third");
    callback();
}

first(()=> 
    {second(()=>
        {third(()=> 
             console.log("all"))
        })
    })

//first(()=>{second(()=>{third(()=>{console.log("last")})})})

