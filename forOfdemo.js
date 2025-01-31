const arr = ["hi","hello","welcome"]

console.log("initial array " +arr)

console.log(arr.toString())

console.log("join method "+arr.join("*"))

for(ele of arr)
{ 
    console.log(ele)

}

//pop returns the removed element

//push 
console.log("add new ele "+arr.push("pushed"))
console.log("new array "+arr)

console.log("pop now " + arr.pop(""))
console.log("aft pop " + arr)

//shift method removed 0th element in an arry

console.log(arr.shift())
console.log("shifted array "+arr)

//unshift method adds new element to an array
console.log(arr.unshift("lemon"))
console.log("unshifted " + arr)

//delete an item in an array
console.log("delete action")
delete arr[1]
console.log(arr)
console.log(arr.length)

//sort array string
const names = ["a","e","d"]
console.log(names.sort())

//sort array numbers
const numbe= [1,3,6,2,4]
console.log(numbe.sort())

//reverse array
const a1=["ss","vva","bb"]
console.log("Before reverse " + a1)
console.log(a1.reverse())
