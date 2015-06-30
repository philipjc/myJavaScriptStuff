(function() {
  'use strict';

  // Previously, we could store small amounts of text in cookies.
    // Small text file creaed by browser and stored on the users machine

  // Storae API gives us:

  // Session storage - key value pairs that persists while browser is open

  // Local storage - is the same but is stored between sessions, Even on browser close,
    // and is stored as long as the user chooses, can be deleted through browser settings.

  // Storage API is limited to the same domain for security. And data cannot be accessed outside that domain

  /*
    Common use for example is persisting a users basket data from page to page.
    variable state cannot be persisted ofc when a refresh happens or page changes.
    So we can use this local storage to save the varibles data to persist the state of the application.
  */

  // The Storage API is a Global object.
  // SAVING ITEMS
  var myStore = window.sessionStorage;

  // Generally we pass strings, numeric and Boolens will be converted.
  window.sessionStorage.setItem("TestItem", true);

  // Passing an Array - toString gets used in the background and array would be flattened
  // to a single string. When extracting, use Array.split to make an array again.
  window.sessionStorage.setItem("TestItem2", ["string1", "string2"]);

  // Passing Objects - We can using the JSON API to convert to string.
  // And Parse JSON to convert back.
  window.sessionStorage.setItem("TestItem3", JSON.stringify({ prop: "testval" }));


  // GETTING ITEMS
  // .getItem - takes one param, the key for the data we want.
  var objitem = JSON.parse(myStore.getItem("TestItem3"));
  console.log(objitem);

  // Can also access stored items by key. - lets loop using key
  function iterateStoreKeys() {
    var item, length;
    for (item = 0, length = myStore.length; item < length; ++item) {
      console.log(myStore.key(item));
    }
  }
  iterateStoreKeys();

  // REMOVING ITEMS - use removeItem and pass key in String format

  // .clear() - clears all storage


  // .length - tells how man values in storage
  console.log(myStore);
  console.log('In Storage', myStore.length);


}());
