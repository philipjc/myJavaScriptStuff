(function() {

  var userProto = {
    name: '',
    email: '',
    alias: '',
    showInSearch: true,
    colorScheme: 'light'
  };

  function createUser(name, email, alias, showInSearch, colorScheme) {
    return {
      name: name || userProto.name,
      email: email || userProto.email,
      alias: alias || userProto.alias,
      showInSearch: showInSearch,
      colorScheme: colorScheme || userProto.colorScheme
    };
  }

  var newUSer = createUser('phil', '', '', '', 'dark');
  console.log(newUSer);

  // would be nice if we can pass a object
  var anotherUser = createUser({ name: 'Philip', showInSearch: false });
  console.log(anotherUser);

  // we can with underscore
  function createUnderscoreUser(options) {
    return _.extend({}, userProto, options);
  }

  // ceated with the underscore function
  var underUser = createUnderscoreUser({name: 'Philip'});
  console.log(underUser);

})();
