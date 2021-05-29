/* converters.js */

function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
}

module.exports.celsiusToFahrenheit = celsiusToFahrenheit;

module.exports.fahrenheitToCelsius = function(farhenheit){
    return (farhenheit - 32) * (5 / 9);
}