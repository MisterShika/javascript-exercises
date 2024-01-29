const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(inputArray) {
	let theSum = 0;
  inputArray.forEach(element => {
    theSum += element;
  });
  return theSum;
};

const multiply = function(inputArray) {
	let theMultiply = 1;
  inputArray.forEach(element => {
    theMultiply *= element;
  });
  return theMultiply;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
	let theFactorial = 1;
  for(let i = x; i > 0; i--){
    theFactorial *= i;
  }
  return theFactorial;
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
