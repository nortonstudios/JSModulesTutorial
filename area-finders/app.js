const areaFunctions = require('./shape-area.js');

const radius = 5;
const sideLength = 10;

let circleArea = areaFunctions.circleArea(radius);
let squareArea = areaFunctions.squareArea(sideLength);

console.clear();
console.log(`\n\nThe area of a circle with a radius of ${radius} is: ${circleArea}.\n\nThe area of a square with a side length of ${sideLength} is: ${squareArea}.\n\n`);