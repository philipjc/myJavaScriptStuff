(function() {
  'use strict';
  // ways of borrowing objects and specifying the 'this'

  // properties
  // .length will tell us how many arguments are expected.
  function addMe (a, b) {
    return a + b;
  }
  console.log(addMe.length); // 2

  // methods
  // call - used to invoke a func and specify the object to be used as 'this'
  var person = {
    name: 'Phil',
    job: 'Developer'
  }
  function introduce(a, b) { // <<-- other args
    console.log('Hi my name is ' + this.name + ' I am a ' + this.job + '.');
    console.log(a + b);
  }
  // now person is the 'this' for introduce. other args can be passed to 'call' aswell
  introduce.call(person, 'hi', 'ho');


  // apply - is the same as call but the 2nd arg takes an Array of args and no more
  // useful when we are unsure of how many args are being passed to the invoked func
  function chat(respondent, subject) {
    console.log('hi, ' + respondent + ' how goes the ' + subject + ' we spoke of with ' + this.name);
  }

  // here is a func to call a func, pass an object as 'this' & an Array to 'apply'
  function engage(funccall, obj, argsarray) {
    funccall.apply(obj, argsarray)
  }
  engage(chat, person, ['Andy', 'site']);

  // bind - also control the value of a functions 'this' object. returns a new function
  // and the 'this' obj we specify is the objct for the function that bind returns.

  function addToCart(price, fee) { // <<-- fee is additional arg
    if (!this.total) {
      this.total = 0;
    }
    this.total += price + fee || 0;
    return this.name + '\'s cart total is £' + this.total;
  }
  // here we have a cart, now lets bind an object to use as its 'this'
  var philsCart = addToCart.bind(person);
  // philsCart now binds person obj to addToCart function

  console.log(philsCart(2, 10)); // <<-- 10 is fee
  // bind can have an idditional arg passed after the obj which can be used in the func
  // passing the 10 on the invoke is bad as we wud have to do it every time. best to pass it
  // on the bind(person, 10) but this means the argument order is wrong, swap price and fee
  // on addToCart for it to be correct

  // the beauty of the bind is that we can use different objects
  var bob = {
    name: 'Bob',
    job: 'Developer'
  }
  var bobsCart = addToCart.bind(bob);
  console.log(bobsCart(20, 6));
  // enabling us to 'reuse' code for different objects

}());
