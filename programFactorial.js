let num = -8,fact=1,i;

function factorial ()
{
    
       if (num>0)
        {
            for (i=1;i<=num;i++)
            {
                fact = fact*i;
                console.log(fact)
            }
            
        }

     else if (num===0)
    {
        console.log("Factorial is 1")
    }
    else  if (num<0)
    {
        console.log("Factorial is not possible for negative numbers")
    }
        
}

factorial();