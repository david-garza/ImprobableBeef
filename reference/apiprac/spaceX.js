const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData.map(site=>[site.location.latitude, site.location.longitude])));

// Bianca 1
// console.log("Bianca 1")
// d3.json(url).then(spaceXResults =>
//     console.log(spaceXResults[0].location.latitude));

// Bianca 2
// console.log("Bianca 2")
// var stationLatitude = spaceXResults.map(location => location.latitude);
// console.log("Bianca 2.1")
// console.log(stationLatitude);

