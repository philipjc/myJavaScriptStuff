(function() {
  'use strict';

  var myString = "A lovely string";

  console.log(myString.length);

  console.log(myString.split(' '));
  // 1st arg says what to split on, we passed a space.
  // 2nd arg can limit the array.

  // search for a string within a string
  console.log(myString.indexOf('l', 4));
  // 1st arg is what we search for
  // 2nd arg can after specify what index we start searching from
  // lastIndexOf()  starts at the end of the string and works backward
  // indexOf comes from the String prototype


  // make uppercase
  console.log(myString.toUpperCase());
  // make lowercase
  console.log(myString.toLowerCase());
  // both of these return a modified version, not the original string

  console.log(myString.substring(2, 6));
  // finds part of a string with array indexes

  console.log(myString.slice(5)); // this would slice out the first 5 indexes
  console.log(myString.slice(-5)); // this would slice out all but last 5 indexes

  // there are many methods for the String, see MDN

}());
