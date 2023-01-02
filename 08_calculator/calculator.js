const add = function(num1, num2) {
  let output = num1 + num2;
  return output
};

const subtract = function(num1, num2) {
	let output = num1 - num2;
  return output;
};

const sum = function(num) {
	let arr = num
  let output = arr.reduce((a, b)=> a+b, 0)
  return output;
};

const multiply = function(firstNum) {
  let arr = firstNum
  let output = arr.reduce((a, b)=> a*b, 1)
  return output;
};

const power = function(first, second) {
  let output = Math.pow(first, second)
  return output;
};

const factorial = function(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorial(num - 1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
