// Deel A:

const ikRockArrowFunctions = function () {
  console.log("Joe, ik rock de arrow functions!");
};

const ikRockArrowFunctions2 = () => console.log("Joe, ik rock de arrow functions!");

ikRockArrowFunctions()
ikRockArrowFunctions2()

// Deel B

const fivePlusSeven = function () {
  return 5 + 7;
};

const fivePlusSeven2 = () =>  5 + 7

console.log(fivePlusSeven());
console.log(fivePlusSeven2());

// Deel C

const myFunction = (a, b) => a+b
console.log(myFunction(6,4))

// Deel D

const addFive = a => a+5
console.log(addFive(20))

// Deel E

const creatObject = ()=>  ({greeting: "hoi"})
console.log(creatObject())
