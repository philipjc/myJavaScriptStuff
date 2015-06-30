(function() {
  'use strict';

  // all created objects inherit from the Object prototype.
  // so we have access to it's properties and methods

  var newObject = {};
  Object.prototype.aSpecialProp = 'addedProp';
  console.log(newObject.aSpecialProp);
  // here we are showing inheritance. By adding the prop to the Object.prototype
  // the new object we made previously also gets the property.

  var newArray = [1, 2, 3];
  Array.prototype.first = function() { return this[0] }
  console.log(newArray.first());
  // here we show updating the Array proto with a new method to return the first value in an Array
  // Generally you don't want to change the main prototype, as it could effect a lot of programs.

  // METHODS

  // keys - returns an array of a given object's own enumerable properties. Leaving the proto alone
  // think of object keys as a list of it's property names
  // being an Array, its easy to use the foreach method to pass every prop
  newObject.prop1 = 'propone';
  newObject.prop2 = 'proptwo';
  // call keys on the object proto and pass the object to get props from
  Object.keys(newObject).forEach(function(item) {
    console.log(newObject[item]);
  });

  // freeze method - can freeze an object to prevent any change to it.
  Object.freeze(newObject);
  // will now throw an error if try to update any props.

  // check if its frozen first, now no error.
  if (!Object.isFrozen(newObject)) {
    newObject.prop1 = 'updated prop';
  }
  // CANNOT UNFREEZE A OBJECT

  // But we can copy a frozen objects properties into a new object
  var unfrozen = {};
  Object.keys(newObject).forEach(function(item) {
    unfrozen[item] = newObject[item];
  });
  console.log(unfrozen);

  // seal - is similar to freeze but we can change properties. just cant remove or add new to the object
  Object.seal(unfrozen);

  // preventExtensions - prevents adding to an object. can change and delete properties
  // isExtensible(object) - shows us if an object is prevented or not


  // CUSTOM OBJECTS - CONSTRUCTING OBJECTS
  // we can create custom objects with non writable and enumerable properties

  var Person = function (name) {
    this.name = name;
  }

  Person.prototype = {
    greet: function () {
      return 'hello ' + this.name;
    }
  }

  var phil = new Person('Phil');
  console.log(phil.greet());

  // Object.create(); - takes several arguments, 1st is the prototype to use
  // 2nd arg is the properties, and wether they are writable, configurable or enumerable
  var bob = Object.create(Person.prototype, {
    name: { writable: true,
            enumerable: true,
            value: 'Bob' }
  });
  console.log(bob.greet());
  // this way you also need to state if the prop is enumerable (can be looped) by default
  // they are false, but can also be set later with defineProperties etc

  // defineProperty - takes 3 args. object to add to. key name as string and prop description
  Object.defineProperty(bob, 'job', {
    value: 'Mechanic',
    writable: true,
    configurable: true,
    enumerable: true
  });
  console.log(bob.job);

  Object.defineProperties(bob, {
    heightInCm: {
      value: 183,
      writable: true,
      configurable: true,
      enumerable: true
    },
    weightInKg: {
      value: 78,
      writable: true,
      configurable: true,
      enumerable: true
    }
  });
  console.log(bob);

}());
