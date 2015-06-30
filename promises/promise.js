function get(url) {

  // pass in the function that you want to complete as a task
  // we still have callbacks, but it is cleaner with more structure
  return new Promise(function(fulfill, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {

      if ((req.status > 199 && req.status < 300) || req.status == 304) {

        fulfill(req.response);

      } else {

        reject(req.statusText);
      }
    };

    // request fail?
    req.onerror = function() {
      reject("Network error");
    };

    // no payload to send, maybe an obj with POST
    req.send(null);
  });
}

var promise = get('files/file1.txt');
//  our get functions returns a promise object
// the promise object has a thing called 'then'
// this has two parameters,
// the first is a func that wll execute when the promise is fulfilled
// the second is the reject function
promise.then(function(response) {

  // fulfillment
  var obj = JSON.parse(response);

  console.log(obj);

  return get('files/file2.txt'); // this returns another promise object

}, function(error) {

  console.log('Error message is: ' + error);
});
// Promises really pay off when we start chaining requests.
