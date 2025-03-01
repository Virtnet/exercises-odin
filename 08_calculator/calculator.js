const add = function(val1,val2) {
  return val1 + val2;
	
};

const subtract = function(val1,val2) {
  return val1 - val2;
	
};

const sum = function(array) {
  if(array.length === 0 ) return 0;
  let total = 0;
  for(i = 0; i < array.length; i++){
    total += array[i];
  }
  return total;
	
};

const multiply = function(array) {
  if(array.length === 0) return 0;
  total = 1;
  for(i = 0; i< array.length; i++){
    total *= array[i];
  }
  return total;

};

const power = function(val1,val2) {
  let total = val1;
  for(i=1 ; i < val2; i++){
    total *= val1;
  }
  return total;
	
};

const factorial = function(val1) {
  let total = 1;
  if(val1 < 2) return 1;
  for(i = 2; i< val1 + 1; i++){
    total *= i;
  }
  return total;
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
