const convertToCelsius = function(valueFah) {
  return Math.round(((valueFah - 32) * 5/9) * 10 ) / 10;
};

const convertToFahrenheit = function(valueCel) {
  return Math.round((valueCel * (9/5) + 32) * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
