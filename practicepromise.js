// let p = new Promise((resolve,reject) => {
//     resolve('fooo')
// });

// api().then((res)=> {
//     console.log(res)

// })
// .catch((err)=> {
// console.log(err)
// })

// async function  display() {
//     const data = await fetch('jjhj');
//     const mre = await funcnme 

//     const array = []

// }

// const data = async ()=>
//  { 
//     let res =  await Show ();
// }


function walking()
{
    let result= new Promise ((resolve, reject)=> {
        
        let res = false;
        if (res)
        {
            resolve("Inside resolve block")
        }
        else
        {
          reject("Inside reject block")
        }
    })
    return result;

}



console.log(walking());


// learning to use then and catch

const newData = () => {
    setTimeout(() => {
         return 'three';
    }, 1000);
}

// writing using arrow function

newData().then((res) => {
    console.log(res, 'resss')
})
.catch((err)=>{
    console.log(err)
})

// writing using normal function syntax
newData().then(function res()
{
console.log(res)
})

const newData1 = ()=>{
    console.log("hi");
    setTimeout(()=>{
        return 1;
    },3000)
}

newData1().then((res)=>{
console.log(res)
})
.catch((err)=>{
    console.log(err)
})
