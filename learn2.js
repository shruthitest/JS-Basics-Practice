const learnclass = new Promise((resolve,reject)=>{
    resolve(true);
})


learnclass.then((res)=>{
    console.log("inside then block")
    console.log(res)
    res=false
})

.then((res)=>{console.log("second then block "+res )})
.catch((err)=>{
    console.log("inside catch block")
    console.log(err)
})
.finally(()=>{
    console.log("inside finally block")
})