// this learning

 const model = 
{
    name: "nexon",
    display: function()
    {
       console.log("hi hello " + this)
    }
};



model.display();



//this inside function

function test()
{
    console.log(this)
    
}
    
   // test();