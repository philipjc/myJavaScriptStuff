(function() {
  'use strict';

  // Publisher / Subscriber
  // A simple Pattern to create objects than can publish
  // custom events for other code to subscribe to.

  var pubsub = (function pubsub() {
      var subscribers = {};

      function EventObject() { }
      EventObject.prototype = {};
      EventObject.prototype.constructor = EventObject;

      function subscribe(event, callback) {

        // does object have a key with event name?
        if (!subscribers[event]) {
          var subscriberArray = [callback];
          // if false create array containing callback and save to object
          subscribers[event] = subscriberArray;

        } else {
          // if true, we know array exists, so just push new event to it.
          subscribers[event].push(callback);
        }
      }

      function publish(event, data) {
        var eventObject = new EventObject;
        eventObject.type = event;
        if (data) {
          eventObject.data = data;
        }

        // does sub obj have key that matches event name?
        if (subscribers[event]) {
          // if true, invoke all callbacks for the event in the array
          subscribers[event].forEach(function (callback) {
            callback();
          });
        }
      }

      // subscribe to event with sub method
      // publish an event for pub
      return {
          pub: publish,
          sub: subscribe
      };

  }());

  // TODO: unsubscribe from events. subscribe to onetime callbacks an then be unsubbed

  pubsub.sub('someCustonEvent', function (e) {
    console.log('someCustomEvent was triggered', e.dat.customData);
  });

  pubsub.pub('someCustomEvent', {
    customData: 'customData'
  });

}());
