/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
module.exports.circleArea = function(radiusLength){
  return PI * radiusLength * radiusLength;
}

module.exports.squareArea = function(sideLength) {
  return sideLength * sideLength;
}