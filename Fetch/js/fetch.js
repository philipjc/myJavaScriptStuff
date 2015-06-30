(function() {
  'use strict';

  if (self.fetch) {
    console.log('We have Fetch!');

    var main = document.querySelector('.main');

    fetch('data/text.txt').then(function (response) {
      var read = response.text();
      console.log(read);
    });

  } else {
    console.log('No Fetch support, use XMLHttpRequest');
  }

}());
