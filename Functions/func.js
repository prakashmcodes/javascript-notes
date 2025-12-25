function greetUser(name, color) {
  let langauge = "Javascript";
  let msg = `I am ${name} and I learning ${langauge}, My favorite color is ${color}`;
  console.log(msg);
}

greetUser("Prakash", "Red");
greetUser("Ash", "Yellow");

function add(num1, num2) {
  return `sum of ${num1} + ${num2} = ${num1 + num2}`;
}

console.log(add(23, 32));

function mul(n1, n2) {
  return "Product of " + n1 + " and " + n2 + " is" + " =" + n1 * n2;
}

console.log(mul(5, 3));

const food = (food) => {
  console.log("My fav food is " + food);
}

food("Biriyani")