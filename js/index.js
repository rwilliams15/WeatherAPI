// Get user's geolocation
var lat,
  lon,
  tWeather,
  icon,
  celsius,
  farenheit,
  iconNumber,
  minCelsius,
  maxCelsius,
  minF,
  maxF;

//api that gets your ip for your location
$.getJSON('https://ipapi.co/json/', function(data)
{
  console.log(data);


  // reaching the location API

console.log(data);
    // Finding the latitude and longitude, to be able to find the location
    $.each(data, function(k, v) {});
    lat = data.latitude;
    lon = data.longitude;

    $("#latitude").append(lat);
    $("#longitude").append(lon);
	
	//openweathermap api with my APIID
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=355cf4f52f81b3451ddb5d55e700b906", function(weatherData)
