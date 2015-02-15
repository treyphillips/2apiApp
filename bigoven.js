function getRecipeJson() {
var apiKey = "dvxCYw0iSP0hRgcV6CP5S1O0j3Qs5G35";

// var urlFood = "http://api.bigoven.com/recipe/" + recipeID + "?api_key="+apiKey;

var urlFood = 'http://api.bigoven.com/recipes?title_kw='+getFood+ '&pg=1&rpp=20&api_key='+apiKey;

$.ajax({
         type: "GET",
         dataType: 'json',
         cache: false,
         url: urlFood,
         success: function (data) {
            console.log(data);
            }
         });
       }
