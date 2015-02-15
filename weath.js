var apiKey = '74c54da7ef0fb40fc96cc8d8f8fd6765';
var urlWeath = 'https://api.forecast.io/forecast/';
var data;

var getWeath = function() {
return $.getJSON(urlWeath + apiKey + "/" + lat + "," + long + "?callback=?", function(data) {
  console.log(data);

  //  $('#weather').html('and the temperature is: ' + data.currently.temperature);

});
};
