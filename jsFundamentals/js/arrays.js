(function() {
  'use strict';

  var myArray = ['one', 'two', 'three'];
  console.log("array is " + myArray.length + " in length"); // length property of Array

  // push adds to the back of the array. multiple args can be passed
  myArray.push('four');
  console.log("after push, it\'s " + myArray.length + " long");

  // unshift will add to the front, multiple can be passed.
  myArray.unshift('zero');
  console.log(myArray);

  // take away last item with pop
  myArray.pop();

  // removed from front
  myArray.shift();

  console.log(myArray);

  // splice will remove from array by index,
  // 1st arg is index to start at
  // 2nd arg is how many items - optional
  // 3rd arg can replace values, 0, 3, 'a', 'b', 'c'
  myArray.splice(1, 1);
  console.log(myArray);

  // to reverse array
  myArray.reverse();

  // all above are mutator methods as they change the underlying Array

  myArray.sort()
  // will sort an array. but it sorts by ascii so will not always give correct results.
  var mySort = [3, 6, 1000].sort(function (a, b) {
    if (a < b) {
      return -1;
    } else if (a === b) {
      return 0;
    } else {
      return 1;
    }
    console.log(mySort);

  });

  // there are also accessor methods, that don't mutate the array, they return a subset

  // array to string
  var newArray = ['h', 'e', 'l', 'l', 'o'];
  console.log(newArray);
  var newArray2 = newArray.join('');
  console.log('after join, ' + newArray2);

  // check if item in array exists
  // indexOf() - returns -1 if false
  // lastIndexOf - starts from end of array

  // slice() returns a new array of items between the passed indexes.

}());

// Array iterators
(function() {
  'use strict';

  var moreArray = ['hello', true, 24, 'Colorado'];

  // the forEach is passed. do something to every value
  moreArray.forEach(function (value, index) {
    console.log('The item ' + value + ' is at index ' + index);
  });

  // can check every value for a condition
  console.log(moreArray.every(function (value) {
    return typeof value === 'string';
  }));
  // can check some of the values
  console.log(moreArray.some(function (value) {
    return typeof value === 'boolean';
  }));

  // filter method populates a new array with wanted values
  console.log([1,'a',2,'b',3,'c'].filter(function (value) {
    return typeof value !== 'string';
  }));

  // map also returns a new array, calls a function for each value
  console.log('to upper case with .map ' + ['a', 'e', 'h'].map(function (value) {
    return value.toUpperCase();
  }));

}());
