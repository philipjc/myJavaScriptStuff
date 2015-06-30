(function() {
  'use strict';

  // Sharing properties and methods across objects,
  // when full prototype inheritence is to much. - not true inheritence.

  function shape2D() {

    return {
      type: this.constructor.name,
      sides: []
    };

  }

  function Rectangle(width, height) {
    // takes no args so we use call
    var shape = shape2D.call(this); // <<-- inherits shape2D

    shape.sides.push(width, height, width, height);
    shape.getArea = function () {
      return shape.sides[0] * shape.sides[1];
    }

    return shape;
  }

  function Square(sidesLength) {
    return Rectangle.call(this, sidesLength, sidesLength);
  }

  var newRect = new Rectangle(5, 4);
  console.log('this constructors name is ' + newRect.type);
  console.log(newRect.sides.length);
  console.log(newRect.getArea());

  var newSquare = new Square(5);
  console.log('this constructors name is ' + newSquare.type);
  console.log(newSquare.sides.length);
  console.log(newSquare.getArea());

  // creating factories that share objects, a simple way to share code
  // it is not true inheriance because every new Rectangle or Square has its
  // own instance of getArea

  // More like function code sharing, not inheriance

}());
