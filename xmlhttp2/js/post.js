// A revamped send() method has been overridden to accept any of the following types:
// DOMString, Document, FormData, Blob, File, ArrayBuffer.
(function() {
  function sendTextNew(txt) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/api', true);
  xhr.responseType = 'json'; // omitting this yeilds the same result 'text'
  xhr.onload = function(e) {
    // onload is the same as readystatechange
    if (this.status == 200) {
      console.log(this.response);
    }
  };
  xhr.send(txt);
}

sendTextNew('test string');
})();

// FormData is convenient for creating an HTML <form> on-the-fly, in JavaScript.

(function () {
  function sendForm() {
  var formData = new FormData();
  formData.append('username', 'johndoe');
  formData.append('id', 123456);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'localhost:8882/api', true);
  xhr.onload = function(e) {
    console.log('loaded');
  };

  xhr.send(formData);
}
})();
// Essentially, we're just dynamically creating a <form> and tacking on
// <input> values to it by calling the append method.

// Of course, you don't need to create a <form> from scratch. FormData objects
// can be initialized from and existing HTMLFormElement on the page. For example:
// SEE HTML DOC FOR THE FORM
(function () {
  function sendForm(form) {
  var formData = new FormData(form);

  formData.append('secret_token', '1234567890'); // Append extra data before send.

  var xhr = new XMLHttpRequest();
  xhr.open('POST', form.action, true);
  xhr.onload = function(e) { };

  xhr.send(formData);

  return false; // Prevent page from submitting.
}
})();
// ADDING FILES
// An HTML form can include file uploads (e.g. <input type="file">)
// and FormData can handle that too. Simply append the file(s) and the
// browser will construct a multipart/form-data request when send() is called:
(function () {
  function uploadFiles(url, files) {
  var formData = new FormData();

  for (var i = 0, file; file = files[i]; ++i) {
    formData.append(file.name, file);
  }

  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.onload = function(e) {  };

  xhr.send(formData);  // multipart/form-data
}

document.querySelector('input[type="file"]').addEventListener('change', function(e) {
  uploadFiles('/server', this.files);
}, false);
})();

 // MORE FILE SENDING http://www.html5rocks.com/en/tutorials/file/xhr2/
