function geoSuccess(position) {
  var lat = position.coords.latitude;
  var long = position.coords.longitude;

  console.log('position is lat ' + lat + 'and long ' + long);
}

function geoError() {
  console.log('Your location could not be determined');
}

function findLocation() {
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}
