// TIMER METHODS
(function() {
  'use strict';

// excutes code after a set time
  function log(msg) {
    console.log(msg);
  }
  setTimeout(function () {
    log('Itsa Mario');
  }, 3000)

}());
// set timeout can take a string, but that is bad practices for
// injection purposes. Always pass a method

(function() {
  'use strict';

// excutes code repeatedly after set time
  function pulse() {
    console.log('pulsing');
    ++counter;

    if (counter === 5) {
      clearInterval(interval);
    }
  }

  // the function declaration is invoked at runtime
  // so we declare the counter var and use the func after we set it.
  var counter = 0;
  var interval = setInterval(pulse, 1000);

}());

// most browsers generlly will take  4 ms timer. 0 can be passed as a way to
// trick the browser into running code before other code. JS is single threaded
// so code has to wait for other code to finish before executing.
