const a = 10;
const b = 20;

const newFnc = (x, y) => x + y;
// console.log(newFnc(a,b));

// sum(40, 100);

function sum(x, y) {
  console.log("Sum: ", x + y);
  return x + y;
}

// sum(a, b);

let total;

const sum2 = (x, y) => {
  total = x + y;
  console.log("Sum2: ", total);
  return total + 20;
};

// sum2(a, b);
// console.log(sum2(a, b), total);

let x = 10;
if (x < 20) {
  let x = 20;
  //   console.log("Block: ", x);
}

// console.log("Global: ", x);

var l = 10;
if (l < 20) {
  var l = 20;
  //   console.log("Block: ", l);
}

// console.log("Global: ", l);

let obj = {
  name: "Giorgi",
  age: 30
};

if (obj.age < 40) {
  obj.validated = false;
}

obj.age = 50;
obj = true;

// console.log(obj);

let price = 300;

// {
//   price = price - 10;
//   {
//     price = price - 20;
//     // console.log(price);
//   }
// }

function discount(oldPrice) {
  let newPrice = oldPrice * 0.9;
  if (newPrice < 100) {
    newPrice = 100;
  }
  return (price = newPrice);
}

// console.log(discount(price), price);

const fruits = ["apple", "banana", "peach", "grapes"];

const newFruitsArray = fruits.map((fruit, index, array) => {
  //   console.log(fruit, index, array);
  const newString = "Name: " + fruit;
  if (index > 2) {
    return newString;
  } else {
    return fruit;
  }
});

// console.log(newFruitsArray);

const numbers = [30, 40, "70", "o", "70e"];

const formatedNumbers = numbers.map((n) => {
  let newN = n;

  if (typeof n === "string" && parseInt(n).toString() === "NaN") {
    newN = 0;
  } else if (typeof n === "string" && typeof parseInt(n) === "number") {
    newN = parseInt(n);
  }
  return newN;
});

// console.log(formatedNumbers);

const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const result = words.filter((word) => word.length > 6);

const result = words
  .filter((word) => word.length > 6)
  .map((word) => {
    return "New Word is " + word;
  });
console.log(result);
