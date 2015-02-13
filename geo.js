var lat;
var long;

function geoSuccess(position) {
  var lat = navigator.geolocation.position.coords.latitude;
  var long = navigator.geolocation.position.coords.longitude;

  console.log('position is lat ' + lat + 'and long ' + long);
}

function geoError() {
  console.log('Your location could not be determined');
}

function findLocation() {
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}

// navigator.geolocation.getCurrentPosition(geoSuccess);
