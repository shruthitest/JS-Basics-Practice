
//basic array program
const username = ["shruthi", " test" , "john"]
console.log("Original array is test "+username)
console.log("array length is " + username.length)

//accessing array element
console.log("printing array index 1" + username[1])

//adding new element to an array which autimatically returns lenght of the array
console.log("adding new element to the array which returns length automatically" + username.push("suvarna"))

//accessing last array element using at method
console.log("accesssing last array element using array index " + username.at(-1))

//adding array element to starting position
console.log("add to first "+username.unshift("new!!"))
console.log("New array is "+username)

//adding new element in specific position
username[1]="middle"
console.log(username)