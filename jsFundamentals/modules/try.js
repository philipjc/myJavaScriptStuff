var word = "A word is a WORD";
console.log(StringMe.getLength(word));
console.log(StringMe.doSplit(word, ' '));
console.log("this is index of first \'w\': " + StringMe.findString(word, 'w'));
console.log(StringMe.upper(word));
console.log(StringMe.lower(word));
console.log(StringMe.sub(word, 3, 5));
console.log(StringMe.slicey(word, 4));


// function find(item) {
//   var stuff = {
//     color: "red",
//     size: "small"
//   };
//   return stuff[item];
// }
// console.log(find('size'));
