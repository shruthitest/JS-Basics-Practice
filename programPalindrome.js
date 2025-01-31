// check a string is palindrome or not

let str1 = "naon";
let result;

function pali()
{
    console.log("Given string "+str1)
    let result = (str1.split('').reverse().join(''));
    console.log("Reversed string "+ result);
   
   if (str1===result)
    { 
        console.log("pali")

    }
   
    else
  {
    console.log("not pali")
}

}
pali();