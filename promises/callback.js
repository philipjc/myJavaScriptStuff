function request(url, fullfilcb, reject) {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function() {
    if ((xhr.status > 199 && xhr.status < 300) || xhr.status == 304) {

      fullfilcb(xhr.response);

    } else {

      reject(xhr.statusText);
    }
  };
  // request fail?
  xhr.onerror = function() {
    reject("Network error");
  };
  // no payload to send, maybe an obj with POST
  xhr.send(null);
}

// callback hell nesting!
request('files/file1.txt', function(response) {
                          // this is called if we hit fullfilcb
                          var obj = JSON.parse(response);
                          console.log(obj);
                          request('files/file2.txt', function(response) {
                                                    // this is called if we hit fullfilcb
                                                    var obj = JSON.parse(response);
                                                    console.log(obj);
                                                    request('files/file3.txt', function(response) {
                                                                              // this is called if we hit fullfilcb
                                                                              var obj = JSON.parse(response);
                                                                              console.log(obj);
                                                                            },
                                                                            function(message) {
                                                                              // this is called if we hit rejectcb
                                                                              console.log(message);
                                                                            }
                                                    );
                                                  },
                                                  function(message) {
                                                    // this is called if we hit rejectcb
                                                    console.log(message);
                                                  }
                          );
                        },
                        function(message) {
                          // this is called if we hit rejectcb
                          console.log(message);
                        }
);
