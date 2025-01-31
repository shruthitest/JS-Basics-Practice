let arr = [10,20,30]
let sum=0,i;

function calculateSum(arr)
{
    
    console.log("Original array is "+ arr)
    console.log("array length is " + arr.length)

   for(i=0;i<arr.length;i++)
   {
     sum=sum+arr[i]
     
   }
   // console.log(sum)
    console.log(sum)
} 


calculateSum(arr)
