let number = [7,2,3,4,5,6,8];

let sum = 0;
let oddsum=0;
for (let i = 0; i<=number.length; i++)
{
    if (number[i]%2===0)
        {
        
            sum+=number[i]
            
            
         }else if(number[i]%2===1){
            oddsum+=number[i];  
         
         }
 
         
}

console.log("sum of even numbers"+' '+ sum);
console.log("sum of odd numbers"+' '+ oddsum);