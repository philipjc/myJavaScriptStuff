(function() {
  'use strict';

  // Getting elememnts using the DOM interface
  // All are currently safe in all browsers

  var head = document.getElementById('header');
  var sub = document.getElementById('subhead');
  console.log(head);

  var list = document.getElementsByClassName('list')[0];
  console.log(list);
  // returns a node list. A node list has length property
  // We can loop through this list to get each DOM node

  var items = document.getElementsByTagName('li');
  console.log(items);
  // returns node list

  // forms can have a name. we can get elements by name
  var form = document.getElementsByName('newform');
  console.log(form);

  // Elements are represented by objects, which means we have have
  // different properties and methods we can invoke to work with them.

  console.log(head.id);

  // id prop is live, and can be changed
  head.id = 'newhead';
  console.log('changed id to; ' + '\'' + head.id + '\'');

  // can find a class name of an element
  console.log(head.className);

  // the newer classList method has getter and setter methods. IE 10 +
  head.classList.add('newclass');
  console.log(head.classList);
  // and remove
  head.classList.remove('newclass');
  console.log(head.classList);
  // and check if it contains a class
  console.log(head.classList.contains('newclass')); // <<-- false cuz we removed

  // changing dom nodes or there text inside. the element is lvl 1 but text is lvl 3
  console.log(head.tagName);
  console.log('elements are node type ' + head.nodeType);
  console.log('the text is a child node at lvl ' + head.childNodes[0].nodeType);
  head.innerHTML = '<span>' + head.innerHTML + '</span>';
  // can change the element aswell. BUT DONT FORGET TO SANITIZE THE CONTENT
  head.outerHTML = '<h2>' + head.innerHTML + '</h2>';

  // adding text is safer as the browser treats it like text not html
  sub.textContent = 'Changed via JS';

  // METHODS OF ELEMENTS
  sub.setAttribute('align', 'center');
  // sub.removeAttribute('align'); just specify attr name to remove, not the value
  // sub.hasAttribute();

}());
