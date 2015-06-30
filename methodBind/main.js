(function() {

  var lightbulb = {
    toggle: function() {
      this.isOn = !this.isOn;
      return this.isOn;
    },
    isOn: false
  };

  var toggle = lightbulb.toggle.bind(lightbulb);
  var lightswitch = document.querySelector('.switch');

  lightswitch.addEventListener('click', function() {

    lightbulb.toggle();
    console.log(lightbulb.isOn);
    var text = document.querySelector('.text');
    var el = document.createTextNode(lightbulb.isOn);
    var space = document.createTextNode(' ');
    text.appendChild(el);
    text.appendChild(space);
  });

})();


// Closure
var math = function(a, b) {
  // add is a lambda
  var add = function(a, b) {
    console.log(a, b);
    return a + b;
  }
  return add(a, b);
}
