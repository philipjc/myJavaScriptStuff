var StringMe = (function() {
  'use strict';

  // @TODO convert args to string if not a String
  // @TODO add conditionals ?

  function findLength (string) {
    return string.length;
  }

  function splitIt (string, char) {
    return string.split(char);
  }

  function searchString (string, char, idx) {
    return string.indexOf(char, idx);
  }

  function allUpper (string) {
    return string.toUpperCase();
  }

  function allLower (string) {
    return string.toLowerCase();
  }

  function findSub (string, a, b) {
    return string.substring(a, b);
  }

  function getSlice (string, idx) {
    return string.slice(idx);
  }

  return {
    getLength: findLength,
    doSplit: splitIt,
    findString: searchString,
    upper: allUpper,
    lower: allLower,
    sub: findSub,
    slicey: getSlice
  }

}());
