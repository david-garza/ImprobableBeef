// load up the data
//console.log(cityGrowths);

// Sort the cities by populatoin increase
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

// Slice for only the top 5 cities
var topFiveCities = sortedCities.slice(0,5);

// Create arrays for name and increase
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// Plot
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

// Sort cities by total population
var sortedCities = cityGrowths.sort((a,b) =>
a.population - b.population).reverse();

// Slice for only the top 7 cities
var topSevenCities = sortedCities.slice(0,7);

// Create arrays for name and increase
var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.population));

// Plot
var trace = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Populous Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population in 2016"}
  };
Plotly.newPlot("popplot", data, layout);