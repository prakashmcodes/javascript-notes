// 3 Types of variables

// 1.var

var x = 10; 
var x = 20; // variable name can be redeclared
x = 30; // can reassign the value

// 2.let

let y = 10;
//let y = 20; Cannot redeclare block-scoped variable 'y
y = 20; // can reassign the value

// 3.Const

const z = 10;
// const z = 20; // can't redeclare
// z = 30 // can't reassign
console.log(x,y,z) // 30 20 10