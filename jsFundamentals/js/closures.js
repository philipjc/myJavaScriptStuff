(function() {
  'use strict';

  // think of scope. logic in the global scope can be accesses from anywhere.
  // functions have their own scope, and so do inner-functions (functions within functions)
  // A Closure is a function that remembers all its variables in a scope after it's inner-function has returned

  // normally once a function is returned, its scoped is destroyed.
  // the inner scope closes over the scoped its contained in, and prevent it from being destroyed.
  //
  // a constructor function
  function Order() {
    var total = 0;
    // scope
    return function addProduct(price) {
      var salesTax = price * 0.17,
        fee = price * 0.05;
        // inner scope
        total += price + salesTax + fee;
        return total;
    };
  }
  // Order returns addProduct function value
  var myOrder = new Order(); // <<-- myOrder is the Closure

  console.log(myOrder(50));
  console.log(myOrder(20));

  // they are information about a scope, and a function that remembers that information
}());
