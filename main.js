var lat;
var long;


var Recipe = Backbone.Model.extend({
  defaults: {
    body: ""
  }
});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe
});

var locate = Backbone.View.extend({
  tagName: 'button',
  events: {
    'click': 'getData'
  },

  // findMe: function(e) {
  //   e.preventDefault();
  //   if (Modernizr.geolocation) {
  //     navigator.geolocation.getCurrentPosition(show_map);
  //   }
  // },

  getData: function(e) {
    e.preventDefault();
    console.log('found');
  },

  template: _.template($('#results').text()),

  render: function() {
    this.$el.html(this.template());
    return this;
  },
});


var RecipeListView = Backbone.View.extend({
  tagName: 'ul',

  render: function() {
    var self = this;
    this.collection.each(function(recipes) {
      self.$el.append('<li>' + recipes.get('body') + '</li>');
    });
  }
});

var myRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "results/:id": "results"
  },

  initialize: function() {
    this.recipes = new RecipeCollection([{
      body: 'Dustin'
    }]);
    this.inputView = new locate({
      collection: this.recipes
    });
    this.listView = new RecipeListView({
      collection: this.recipes
    });

    this.checkGeoSupport();
    // this.findLocation();
  },

  // geoSuccess: function(position) {
  //   var lat = position.coords.latitude;
  //   var long = position.coords.longitude;
  //
  //   console.log('position is lat ' + lat + 'and long ' + long);
  // },
  //
  // geoError: function() {
  //   console.log('Your location could not be determined');
  // },
  //
  // findLocation: function() {
  //   navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  // },

  checkGeoSupport: function() {
    if (Modernizr.geolocation) {
      console.log('you have geolocation enabled');
      // this.findLocation();
    } else {
      console.log('does not support geolocation');
    }
  },

  index: function() {
    this.inputView.render();
    $('.app-container').append(this.inputView.el);
    this.listView.render();
    $('.app-container').append(this.listView.el);
    // var template = _.template($('#home').text());
    // var renderedTemplate = template("weather");
    // $('.app-container').html(renderedTemplate);
  },

  results: function() {
    // var template = _.template($('#results').text());
    // var renderedTemplate = template('results');
    // $('.app-container').html(renderedTemplate);
  }

});

var apiKey = '74c54da7ef0fb40fc96cc8d8f8fd6765';
var url = 'https://api.forecast.io/forecast/';
// var latitude = 34.8444;
// var longitude = -82.3856;
var data;

// function renderTemplate(templateId, location, model) {
//   var templateString = $(templateId).text();
//      var templateFunction = _.template(templateString);
//      var renderedTemplate = templateFunction(model);
//      $(location).append(renderedTemplate);
// }

// function get_location() {
//   if (Modernizr.geolocation) {
//       navigator.geolocation.getCurrentPosition (
//         function (position) {
//           var longitude = position.coords.longitude;
//           var latitude = position.coords.latitude;
//
//           locationMessage.text ("Lat: " + latitude + ", Lng: " + longitude);
//         },
//         locationMessage.text ("Geolocation support is not available.")
//
//       )};



// $.getJSON(url + apiKey + "/" + lat + "," + long + "?callback=?", function(data) {
//   console.log(data);
//   //  $('#weather').html('and the temperature is: ' + data.currently.temperature);
//
// });

$(document).ready(function() {
  var router = new myRouter();
  Backbone.history.start();
});
