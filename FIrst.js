// "46";
// true;
// ("Ritesh");
// 4.5;
// {
// }

// [];

// ritesh -- variable

// a = 10; // initialisation

// a - variable
// = -assignment operator
// 10 - data (integer)

// let, const, var

const a = 10;
// const a = 20; redeclaration not allowed with const keyword
//  a = 20;

let b = "Ritesh";
b = "Ajay";
//  let b="Kamal" redeclaration not allowed with let keyword
// console.log(b);
c = 74;
var c;
var c = false; // redeclaration and change value both are allowed

let m;

// regular function
function funA(num1, num2) {
  //   const num1 = 40;
  //   const num2 = 50;

  return num1 + num2;
  //   console.log("Function Called", sum);
}

//  arrow function
const funArrow = (num, num2) => num / num2;

const v1 = funA(80, 90);
const v3 = funA(70, 30);
const v2 = funArrow(15, 5);

console.log(v1, v3, v2);
