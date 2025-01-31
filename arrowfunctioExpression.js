let age = 5;

// use arrow functions as expressions in ternary operator new
// to dynamically assign functionality
let welcome = (age < 18) ? () => console.log("Child") : () => console.log("Adulttest");

welcome();

// Output: Child