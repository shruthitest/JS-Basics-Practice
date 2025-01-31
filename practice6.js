// using arrow function write square of a number logic using arrays map

let num = [ 1,2,3,4,5,6]


// for squares
let res = num.map((ele)=> Math.pow(ele,2) )
console.log(res)

// for cubes

let cubesres = num.map((ele)=> Math.pow(ele,3))
console.log(cubesres)

// apply filter method to get even numbers
let even = num.filter((ele) => ele%2===0)
console.log(even)

//apply filter method to get odd numbers
let odd=num.filter((ele)=> ele%2!==0 )
console.log(odd)

//sum of all array elements using reduce method
let tot = num.reduce((acc,ele)=> acc+ele )
console.log(tot)