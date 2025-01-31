// using then catch and finally blocks inside promise using arrow function

const learn = new Promise(function (resolve,reject)
{
    resolve(" promise resolved");
    
});

learn.then((res)=>{console.log("Inside then " + res)})

.then(()=>{console.log("second then block" )})

.catch((err)=>{console.log("Inside error " + err)})

.finally(()=>{console.log("This code is executed")})

