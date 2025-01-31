//promise basics

let count = true;

let countValue = new Promise(function(resolve,reject)
{

  if (count)
  { 
    resolve("Inside resolve block")
  }
  else
  {
    reject("inside reject block")
  }
})

console.log(countValue)
