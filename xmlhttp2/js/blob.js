/*
XMLHTTP2 Introduces a new capabilities which put an end to crazy hacks in our web apps
things like cross-origin requests, uploading progress events,
and support for uploading/downloading binary data.
These allow AJAX to work in concert with HTML5 APIs such as File System API, Web Audio API, and WebGL.
*/

// Fetching a file as a binary blob has been painful with XHR. Technically, it wasn't even possible.
// What you actually get back in the responseText is not a binary blob
// Anytime you resort to character code hacks and string manipulation for coercing data into a desirable format,
// that's a problem.
// let's leverage XMLHttpRequest's new responseType and response properties to inform the
// browser what format we want the data returned as.
// -------------------------------------------------------------------------------------
// xhr.responseType
// Before sending a request, set the xhr.responseType to "text",
// "arraybuffer", "blob", or "document", depending on your data needs. Note,
// setting xhr.responseType = '' (or omitting) will default the response to "text".

// xhr.response
// After a successful request, the xhr's response property will contain the
// requested data as a DOMString, ArrayBuffer, Blob, or Document
// (depending on what was set for responseType.)

(function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'img/ff.png', true);
  xhr.responseType = 'blob';

  xhr.onload = function(e) {
    if (this.status == 200) {
      // Note: .response instead of .responseText
      var blob = new Blob([this.response], {type: 'image/png'});
      console.log(blob);
    }
  };

  xhr.send();
})();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
// The following fetches our same image as an ArrayBuffer, but this time, creates an
// unsigned 8-bit integer array from that data buffer:
(function () {
  var xhr = new XMLHttpRequest();
xhr.open('GET', 'img/ff.png', true);
xhr.responseType = 'arraybuffer';

xhr.onload = function(e) {
  var unsignedInt8bitArray = new Uint8Array(this.response); // this.response == uInt8Array.buffer
  // var byte3 = uInt8Array[4]; // byte at offset 4
  console.log(unsignedInt8bitArray);
  // spits out the binary
};

xhr.send();
})();

// If you want to work directly with a Blob and/or don't need to manipulate any
// of the file's bytes, use xhr.responseType='blob':
(function () {
  window.URL = window.URL || window.webkitURL;  // Take care of vendor prefixes.

var xhr = new XMLHttpRequest();
xhr.open('GET', 'img/ff.png', true);
xhr.responseType = 'blob';

xhr.onload = function(e) {
  if (this.status == 200) {
    var blob = this.response;

    var picture = document.getElementById('picture');
    var img = document.createElement('img');
    img.onload = function(e) {
      window.URL.revokeObjectURL(img.src); // Clean up after yourself.
    };
    img.src = window.URL.createObjectURL(blob);
    picture.appendChild(img);
    // window.location = img.src;
  }
};

xhr.send();
})();
// A Blob can be used in a number of places, including saving it to indexedDB,
// writing it to the HTML5 File System(Chrome only), or creating an Blob URL, as seen in this example.

// https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
