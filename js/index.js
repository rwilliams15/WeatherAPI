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
	      {
      $.each(weatherData, function(j, b) {});
      console.log(weatherData);
      // fetch image and display weather and icon down below 
      tWeather = weatherData.main.temp;
      iconNumber = weatherData.weather[0].icon;

      icon = ("http://openweathermap.org/img/w/" + iconNumber + ".png");
      $("#graphic").append('<img src="' + icon + '"/>');

      $('#description').append(weatherData.weather[0].description);
      $('#city').append(weatherData.name);
      minF = Math.floor(weatherData.main.temp_min * 9/5 - 459.67);
      maxF = Math.floor(weatherData.main.temp_max * 9/5 - 459.67);

      // translate Kelvin to Celsius
      celsius = Math.floor(weatherData.main.temp - 273.15);

      minCelsius = Math.floor(weatherData.main.temp_min - 273.15);
      maxCelsius = Math.floor(weatherData.main.temp_max - 273.15);
      // translate Kelvin to Farenhait T(K) × 9/5 - 459.67
      farenheit = Math.floor(weatherData.main.temp * 9 / 5 - 459.67);

      // display celsius by default 
      $('#celsius').append(celsius + 'ºC');
      $("#min").append( minCelsius + 'ºC');
      $("#max").append( maxCelsius + 'ºC');
    });
  
