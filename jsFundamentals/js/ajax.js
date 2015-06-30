(function() {
  'use strict';

  var link = document.querySelector('.data');

  function ajaxRequest(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {

          var data = JSON.parse(xhr.response);
          console.log(data);
          cb(data);

        } else {
          console.log(xhr.statusText);
        }
      }
    };

    xhr.withCredentials = true; // passes cookies

    xhr.onerror = function () {
      console.log(xhr.statusText);
    }
    xhr.send(null);
  };

  ajaxRequest('js/json/data.json', function(data) {
    console.log(data[0].name);
  });

}());

// callback
// function request(url, fullfilcb, reject) {
//
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', url);
//   xhr.onload = function() {
//     if ((xhr.status > 199 && xhr.status < 300) || xhr.status == 304) {
//
//       fullfilcb(xhr.response);
//
//     } else {
//
//       reject(xhr.statusText);
//     }
//   };
//   // request fail?
//   xhr.onerror = function() {
//     reject("Network error");
//   };
//   // no payload to send, maybe an obj with POST
//   xhr.send(null);
// }
//
// // callback hell nesting!
// request('files/file1.txt', function(response) {
//                           // this is called if we hit fullfilcb
//                           var obj = JSON.parse(response);
//                           console.log(obj);
//                           request('files/file2.txt', function(response) {
