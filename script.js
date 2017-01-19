// JavaScript File
$(document).ready(function() {
    $("#submit").click(function() {
       var searchVal= $("#search").val();
       var part1 = "https://api.apixu.com/v1/current.json?key=69e18cacfda94367b05131740171201&q=";
       var url = part1 + searchVal;
       $.getJSON(url, function(response){
          var temp = response.current.temp_f;
          var humid = response.current.humidity;
          var wsp = response.current.wind_mph;

          $("body").append(temp + " ");
          $("body").append(humid + " ");
          $("body").append(wsp);
       });
    });
});
//https://api.apixu.com/v1/current.json?key=69e18cacfda94367b05131740171201&q=Paris