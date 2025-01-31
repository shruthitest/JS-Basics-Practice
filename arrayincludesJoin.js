const groceries = ["Apple", "Peach", "Tomato"];

console.log(groceries.includes("Tomato")); // true
console.log(groceries.includes("Bread")); // false


//array join method

const groceries2 = ["Apple", "Peach", "Tomato"];
console.log(groceries.join("; ")); // "Apple; Peach; Tomato"
console.log(groceries.join(" . ")); // "Apple . Peach . Tomato"