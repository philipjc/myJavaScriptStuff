(function() {
  'use strict';

  // geolocation is opt-in with a prompt. It is a part of window object. window.navigater


  // result CB
  function onResult(positionObj) {
    console.log(positionObj);
  };

  // error CB
  function noResult(positionError) {
    console.log(positionError);
    console.log('Error msg -', positionError.message);
  };

  // Tracking position change.
  function onPositionChange(positionObj) {
    console.log('new position is ' + positionObj.coords.latitude + '-' + positionObj.coords.longitude);
  };

  if (navigator.geolocation) {
    console.log('we have geolocation');

    // getCurrentPosition
    // takes three args, result-CB, error-CB, and config
    // config:
    // Object:
    // timeout - how long till error CB runs
    //
    //
    navigator.geolocation.getCurrentPosition(onResult, noResult, {
      timeout: 0
    });


    // watchPosition
    // invokes success or error CB whenever position changes.
    // Takes the same args as getCurrentPosition. But has diff return value.
    // returns a numerical value id - pass this to the timeout when we
      // want to stop watching the location.

    var watch = navigator.geolocation.watchPosition(onPositionChange, noResult);

    navigator.geolocation.clearWatch(watch); // place on timeout for non immediate stop.

  }

  // geolocation is asynchromous, but the result cannot be relied upon.(due to user)
  // so we pass it a CB function to run if we get a result.
  // if we do get a result, the geolocation is passed an object of information.

}());
