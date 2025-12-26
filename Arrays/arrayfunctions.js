let gadgets = ["Phone","Laptop"]

console.log(gadgets)

gadgets.push("tab") // adds in end

console.log(gadgets)

gadgets.pop() //removes in end

console.log(gadgets);

gadgets.unshift("Headphones"); // adds in start

console.log(gadgets);

gadgets.shift(); // removes in start

console.log(gadgets);


gadgets.splice(2, 0, "Powebank") // custom add

console.log(gadgets);

gadgets.splice(0, 2, "Powebank") // custom remove

console.log(gadgets);