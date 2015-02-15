var temp = 73;

var getFood = function() {

  if (temp < 30) {return "chicken+stew";}

   else
    if (temp < 50) {return "meatloaf";}

    else
      if (temp < 80) {return "cob+salad";}

     else
      if (temp < 150){return 'ice+cream';}
    };
