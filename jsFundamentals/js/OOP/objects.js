(function() {
  'use strict';
  // looking at some autmatic inheritance

  var myObject = {
    animal: true
  };

  // objects naturally get the constructor property passed down
  console.log(myObject.constructor);

  // this is false, due to it not being an actual defined prop of myObject
  console.log(myObject.hasOwnProperty('constructor'));

  // and we can see by checking for a existing defined prop, we get true
  console.log(myObject.hasOwnProperty('animal'));

  // the forIn method loops through an objects properties
  // propertyIsEnumerable check if prop will get looped over or not
  console.log(myObject.propertyIsEnumerable('constructor')); // false
  console.log(myObject.propertyIsEnumerable('animal')); // true

  // toString method. *Checking if something is definitely an Object or Array*
  // show us we are using an object from the Object constructor
  console.log(myObject.toString());

  // on an array, it concatenates the values
  console.log(['hi', 'ho'].toString());

  // when we used typeof on an array we saw object
  // but specifying Object prototype and calling on an Array
  console.log(Object.prototype.toString.call([]));



}());
