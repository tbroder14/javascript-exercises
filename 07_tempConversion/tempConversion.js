const convertToCelsius = function(temperature) {
    let fToC = ((temperature - 32) * (5/9));
    fToC = (Math.round(fToC * 10) / 10);
    return fToC;
};  

const convertToFahrenheit = function(temperature) {
    cToF = ((temperature * (9/5)) + 32);
    cToF = (Math.round(cToF * 10) / 10);
    return cToF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
