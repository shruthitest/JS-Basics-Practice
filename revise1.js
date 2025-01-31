function walkDog()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            const dogwalked = true
            if (dogwalked) 
                
            {
                    resolve("inside promise resolve walkdog")
            }

            else 
            {
                reject("inside promise reject walkdog")
            }

        },1500)
    })
}

function cleanKitchen ()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

             const cleanedKitchen = false
            if (cleanedKitchen)
                {

                resolve("You cleaned kitchen")
                }
                else
                {
                    reject("You didnt clean kitchen")
                }
            },2500)
        
})
}

//method chaining
   
walkDog().then((res)=>{
    console.log("then block "+res)
    return walkDog();
})
.then((res)=>{
    console.log("second then walkDog "+res)
})
.catch((err)=>{console.log("catch block "+err)})

cleanKitchen().then((res)=>{
    console.log("kitch then block " + res)
})
.catch((err)=>{console.log(err)})

// //using Async and await
// async function doAllChores() 

// {
//     try
//     {
//         const wd = await walkDog();
//     console.log("walkdog " + wd)

//     const ck = await cleanKitchen()
//     console.log(ck)
//     }
    
//     catch(error) {
//         console.log("catched error " + error);
        
//     }


    
// }

// doAllChores();