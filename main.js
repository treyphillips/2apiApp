var lat;
var long;
var $appContainer = $('.app-container'),
  $defaultState = $('[data-template-name="user-input"]').text(),
  $loadedState = $('[data-template-name="weathTemplate"]').text(),
  $weatherOverlay = $('[data-template-name="weather-overlay"]').text();
// var Recipe = Backbone.Model.extend({
//   defaults: {
//     body: ""
//   }
// });

///weather model///
window.weather = Backbone.Model.extend({
  url: "urlWeath",
  defaults: {
    "temperature": "",
    "summary": ""
  }
});

window.WeathCollection = Backbone.Collection.extend({
  model: weather,
  urlRoot: "urlWeath"
});

///weather view///
window.WeathView = Backbone.View.extend({
  tagName: 'ul',

  initialize: function() {
    this.model.bind('reset', this.render, this);
    var self = this;
    this.model.bind('add', function(weather) {
      $(self.el).append(new WeathItemView({
        model: weather
      }).render().el);
    }, this);
    return this;
  }
});

window.WeathItemView = Backbone.View.extend({
  tagname:
  'li',
  template: _.template($('weathTemplate').html()),

  initialize:function () {
    this.model.bind("change", this.render, this);
    this.model.bind("destroy", this.close, this);
  }
});



var Recipe = Backbone.Model.extend({
  urlRoot: 'urlFood',
  defaults: {
    "title": "",
    "summary": "",
  }
});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,
  url: '/results'
});

var locate = Backbone.View.extend({
  tagName: 'button',
  events: {
    'click': 'results'
  },


  results: function(e) {
    e.preventDefault();

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
      body: ''
    }]);
    this.resultsView = new locate({
      collection: this.recipes
    });
    this.listView = new RecipeListView({
      collection: this.recipes
    });

    this.checkGeoSupport();

  },

  checkGeoSupport: function() {
    if (Modernizr.geolocation) {
      console.log('you have geolocation enabled');

    } else {
      console.log('does not support geolocation');
    }
  },

  index: function() {
    this.resultsView.render();
    $('.app-container').append(this.resultsView.el);
    this.resultsView.render();
    $('.app-container').append(this.resultsView.el);
  },

  results: function() {
    this.resultsView.render();
    $('.weathTemplate').append(this.resultsView.el);

    // var template = _.template($('#results').text());
    // var renderedTemplate = template('results');
    // $('.app-container').html(renderedTemplate);
  }

});



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





$(document).ready(function() {
  var router = new myRouter();
  Backbone.history.start();
});
