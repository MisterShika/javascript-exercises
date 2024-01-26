const convertToCelsius = function(input) {
  let theTemp = (input - 32) * (5 / 9);
  if(theTemp % 1 === 0){
    return theTemp;
  }else{
    return Math.round(theTemp * 1e1) / 1e1;
  }
};

const convertToFahrenheit = function(input) {
  let theTemp = (input * (9 / 5)) + 32;
  if(theTemp % 1 === 0){
    return theTemp;
  }else{
    return Math.round(theTemp * 1e1) / 1e1;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
