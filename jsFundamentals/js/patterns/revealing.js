(function() {
  'use strict';

  // A Pattern is a common solution.
  // Reavealing module patterns returns a public API from encapsulated code.

  var module = (function() {
    'use strict';

    function doPrivate() {
      //......
    }

    function doSomething() {
      //......
    }

    function doMore() {
      // ......
    }

    function trimExtension(filename) {
      return filename.toLowerCase().replace(/\.{1}[a-z]+/,'');
    }

    // we can even use our internal functions to process other functions.
    function trimExtensions(files) {
      var trimmed = [];
      files.forEach(function (file) {
        trimmed.push(trimExtension(file));
      });
      return trimmed;
    }

    // a function to choose which function to use, single string or array
    function trimFileExtension(file) {
      // check if func args are a string
      return (typeof arguments[0] === 'string' ?
      // if true, call single trim with args
      trimExtension(arguments[0]) :
      // else, call array trim with args
      trimExtensions(arguments[0]));
    }
    // TODO: Make stronger incase other types are passed.

    // now we can have a singe reveal.
    return {
      some: doSomething,
      more: doMore,
      trim: trimFileExtension,
    }

    }());

    var file = 'javascriptfile.js';
    console.log(module.trim(file));

    var manyFiles = ['file1.js', 'file2.js', 'file3.js'];
    console.log(module.trim(manyFiles));

}());
