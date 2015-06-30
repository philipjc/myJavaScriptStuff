(function() {
  'use strict';

  // Maintaing state when a user uses the browsers forward or backward buttons.


  // after click, use the xhr and its response onload-api. to call parseAndInsertPage
  function loadPage(xhr, urlToLoad) {
    xhr.onload = function () {
      var response = xhr.responseText;
      parseAndInsertPage(response);

      // So with this our page updates updates with xhr content
      // but now we want to add to the history stack to enable the back button.
      // takes object for state and string for title of page and url.
      window.history.pushState({ pageContent: response }, 'JS History', urlToLoad);
    }

    xhr.open('GET', urlToLoad, true);
    xhr.send();
  };

  // this takes the string from response, removes unwanted html headers
  // and inserts into current document.  || pageString - for first page history
  function parseAndInsertPage(pageString) {
    var bodyTemp = pageString.split('<head>')[1] || pageString,
      body = bodyTemp.split('</html>')[0] || pageString;

    document.body.outerHTML = body;
  };


  // this is what happens when we click link
  document.addEventListener('click', function (e) {
    if (e.target.nodeName === 'A') {
      e.preventDefault();

      var xhr = new XMLHttpRequest,
        newUrl = e.target.href;

      loadPage(xhr, newUrl);

      // pre save first page
      window.history.pushState({ pageContent: document.body.outerHTML }, 'JS Index', document.location.href);
    }
  });

  // TO USE BACK button
  window.addEventListener('popstate', function (e) {
    if (e.state && typeof e.state.pageContent === 'string') {
      parseAndInsertPage(e.state.pageContent);
    }
  });

  // popstate amd pushState are a part of the history API. 

}());
