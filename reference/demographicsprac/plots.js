// Function that populates the drop down menu
function init() {

  // selects the selDataset div tag
  var selector = d3.select("#selDataset");

  // Read the data
  d3.json("../data/samples.json").then((data) => {
    console.log(data);

    // Create an array of names from the object member name
    var sampleNames = data.names;

    // Append option, sample name, and value= name to create drop down options
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}
  
init();

function optionChanged(newSample) {

  buildMetadata(newSample);
  buildCharts(newSample);
}

function buildMetadata(sample) {
  d3.json("../data/samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    PANEL.append("h6").text("ID: "+ result.id);
    PANEL.append("h6").text("ETHNICITY: "+ result.ethnicity);
    PANEL.append("h6").text("GENDER: "+ result.gender);
    PANEL.append("h6").text("AGE: "+ result.age);
    PANEL.append("h6").text("LOCATION: "+ result.location);
    PANEL.append("h6").text("BBTYPE: "+ result.bbtype);
    PANEL.append("h6").text("WFREQ: "+ result.wfreq);
  });
}

// Builds charts after change
function buildCharts(newSample) {

}