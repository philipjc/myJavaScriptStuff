(function() {
  'use strict';

  var menu = {
      home: {
          name: "home",
          link: "home.html"
      },
      components: {
          name: "components",
          link: "components.html"
      },
      about: {
          name: "about",
          link: "about.html"
      },
      contact: {
          name: "contact",
          link: "contact.html"
      }
  };

  function createMenu(obj) {

      var ul = document.querySelector('.ul');
      var docFrag = document.createDocumentFragment();

      function render(elem) {
          var tmpl = [
              '<li class="li">',
                  '<a class="a" href="' + obj[elem].link + '">',
                      obj[elem].name,
                  '</a>',
              '</li>'
          ].join('');

          var tempDiv = document.createElement('div');
          tempDiv.innerHTML = tmpl;
          docFrag.appendChild(tempDiv.childNodes[0]);
      }

      Object
          .keys(obj)
          .forEach(render);

      ul.appendChild(docFrag);
  };

  createMenu(menu);


}());
