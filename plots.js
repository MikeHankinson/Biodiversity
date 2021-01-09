// 12.4.3 Dynamically Generate Dropdown Menu Items
// -------------------------------------------------

// a.Function creates a dropdown menu of ID numbers dynamically.
function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

// b. Function that passes HTML this.value into optionChanged as newSample (still within init() function)
function optionChanged(newSample) {
  buildMetadata(newSample);
  // buildCharts(newSample);     //Challenge Activity
}


// c. Function that uses ID to create specific indivisual's information panel  
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");

    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

init();
