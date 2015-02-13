function getRecipeJson() {
var apiKey = "dvxCYw0iSP0hRgcV6CP5S1O0j3Qs5G35";
var recipeID = 196149;
var url = "http://api.bigoven.com/recipe/" + recipeID + "?api_key="+apiKey;
$.ajax({
         type: "GET",
         dataType: 'json',
         cache: false,
         url: url,
         success: function (data) {
            alert('success');
            console.log(data);
            }
         });
       }


      //  function getRecipeJson() {
      //          var apiKey = "your-api-key-here";
      //          var titleKeyword = "lasagna";
      //          var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw="
      //                    + titleKeyword
      //                    + "&api_key="+apiKey;
      //          $.ajax({
      //              type: "GET",
      //              dataType: 'json',
      //              cache: false,
      //              url: url,
      //              success: function (data) {
      //                  alert('success');
      //                  console.log(data);
      //              }
      //          });
      //      }
