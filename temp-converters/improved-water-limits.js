const converters = require('./converters.js');


const freezingPointC = 0;
const boilingPointC = 100;
 
const freezingPointF = converters.celsiusToFahrenheit(freezingPointC);
const boilingPointF = converters.celsiusToFahrenheit(boilingPointC);
 
console.log(`\n\nThe freezing point of water in Fahrenheit is ${freezingPointF}\n`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}\n\n`);