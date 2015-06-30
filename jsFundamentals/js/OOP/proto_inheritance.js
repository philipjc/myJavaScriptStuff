(function() {
  'use strict';
  // proper proto inheritance. objects are decendance from Object and
  // inherit the properties and methods from its prototype

  function Shape2D() {}; // <<-- does nothing inheritantly
  Shape2D.prototype.getArea = function () { // <<-- assign to the prototype
    return this.sides[0] * this.sides[1];
  }


  function Rectangle(width, height) {
    this.sides = [width, height, width, height];
  }
  Rectangle.prototype = new Shape2D(); // inherit the method getArea from Shape2D
  Rectangle.prototype.constructor = Rectangle; // update constructor, point back to Rectangle


  var newRect = new Rectangle(5, 4); // create new Rectangle
  console.log('contructors name is ' + newRect.constructor.name);
  console.log(newRect.sides.length);
  console.log(newRect.getArea());
  console.log(newRect.hasOwnProperty('getArea')); // <<-- false
  // this is false as getArea is from the Shape2D prototype not Rectangle
  console.log(newRect instanceof Rectangle); // <<-- true


  // there is now only one copy of the getArea Method that is shared
  // rather than a copy for every object


  function Square(sidesLength) {
      this.sides = [sidesLength, sidesLength, sidesLength, sidesLength];
  }
  Square.prototype = new Shape2D();
  Square.prototype.constructor = Square; // <<-- so it knows what constructor it comes from

  var newSquare = new Square(5);
  console.log('contructors name is ' + newSquare.constructor.name);
  console.log(newSquare.sides.length);
  console.log(newSquare.getArea());
  console.log(newSquare.hasOwnProperty('getArea')); // <<-- false
  // this is false as getArea is from the Shape2D prototype not Rectangle
  console.log(newSquare instanceof Rectangle); // <<-- false


  // Over writing the Method getArea for a new constructor
  function Triangle(sideA, sideB, sideC) {
    this.getArea = function () {
      var perimeter = (sideA + sideB + sideC);
      return perimeter;
    }
  }
  Triangle.prototype = new Shape2D();
  Triangle.prototype.constructor = Triangle;

  var newTrian = new Triangle(4, 4, 2);

}());
