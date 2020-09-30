// WHEN I search for a city
// when I click the search buttom 
// Event listener -> listening for the click event
$("#search-button").click(function () {
    console.log("You clicked me!")
    // grab the text out of the input field and save it as a variable
    // google, how do I get text from input field jquery
    var city = $("#city-to-search").val();
    console.log(city);

    // send that city to the weather API
    var apiKey = "3c850fc4462f73aad73ebf6d18f067fd"
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial"

    $.ajax({
        method: "GET",
        url: queryUrl
    }).then(function (data) {
        console.log(data)
        var cityWeather = data;
        // get the temp, humidity, windspeed, and uv index'
        var temp = cityWeather.main.temp;
        console.log(temp);
        var humidity;
        var windspeed;
        var uvIndex;
        // add these to page

        var query2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial"
        $.ajax({
            method: "GET",
            url: query2
        }).then(function (response) {
            console.log(response)
            var fiveDayForecast = response
            // get info for the 5 day forcast
            // loop over each day
            // if the time is 15:00 (3pm) use that 
            // for each day, build a little card that shows the date, temp, and humidity
            // add those to the page

        })
    });


    // **STRETCH GOAL** if I can, also add the symbol for the weather
})

// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast
// ```