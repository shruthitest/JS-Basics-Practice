
// this.name ="hi"
// console.log(this.name)

// "use strict"
// this
// //console.log(globalThis)

// function show()
// {
//     console.log(this)
// }
// show()

const obj =
{
    a:10,
    x:function()
    {
        console.log(this)
    },

}
obj.x();