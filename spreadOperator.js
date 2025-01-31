// For array

let a = [1,2,3,4]

let b = [5,6,7]

let sum = [...a,...b]

console.log(sum)

// for object

let p1 = {
    name : "shru",
    age : "12",

}

let p2 = {
    sal : 200,
    eat : "fruits"
}
let res= {...p1 ,...p2}
console.log((res))